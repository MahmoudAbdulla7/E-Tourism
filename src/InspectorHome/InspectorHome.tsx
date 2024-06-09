import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { baseUrl } from "../Utls/BaseUrl";
import TicketCard from "../SharedModules/Components/TicketCard/TicketCard";
export default function InspectorHome() {
  const [tickets, setTickets] = useState([]);
  const [checked, setIsChecked] = useState();
  const { headers } = useSelector((state: any) => state.authReducer);
  useEffect(() => {
    getTickets();
  }, [checked]);

  const getTickets = () => {
    axios
      .get(`${baseUrl}order/filter-by-day/${checked}`, headers)
      .then((res) => {
        setTickets(res.data.orders || res.data.filteredOreders);
      })
      .catch((err) => {
        toast.error(err.response.data.message || "network error");
      });
  };

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      <div className="flex items-center justify-end px-3">
        <div className="px-3 shadow-md rounded-lg bg-blue-200 mt-2">
          <label className="relative inline-flex items-center cursor-pointer my-2">
            <input
              onChange={handleCheckboxChange}
              type="checkbox"
              className="sr-only peer"
            />
            <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
            <p className="font-medium text-lg text-main ms-2">
              Filter Tickets By Current Day
            </p>
          </label>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-2 my-3 grid-cols-2">
        {tickets?.map((ticket, idx: number) => (
          <div key={idx}>
            <TicketCard ticket={ticket} />
          </div>
        ))}
      </div>
    </>
  );
}
