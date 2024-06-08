import { useSelector } from "react-redux";
import Card from "../../../SharedModules/Components/Card/Card";
import Navbar from "../../../SharedModules/Components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../Utls/BaseUrl";
import { useEffect, useState } from "react";
import Loading from "../../../SharedModules/Components/Loading/Loading";
import { Label, Select } from "flowbite-react";

export default function AllMuseums() {
  const [destinations, setDestinations] = useState([]);
  // const { monuments } = useSelector((state: any) => state.MonumentsReducer);

  const { cities } = useSelector((state: any) => state.CitiesReducer);
  let { cityId } = useParams();
  const getByCityId = (para?: String) => {
    axios
      .get(`${baseUrl}city/${para || cityId}/destination`)
      .then((res) => {
        setDestinations(res?.data?.touristDestinations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAll = () => {
    axios
      .get(`${baseUrl}destinations`)
      .then((res) => {
        // console.log(res?.data?.touristDestinations);
        setDestinations(res?.data?.touristDestinations);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCityValue = (select: any) => {
    getByCityId(select.target.value);
  };

  useEffect(() => {
    if (cityId) {
      return getByCityId();
    }
    return getAll();
  }, []);

  return (
    <div className="Museums m-0 p-0">
      <Navbar />
      <div className="bg-white bg-opacity-40 h-full w-full">
          <div className="my-2">
            <div className="mb-1 ">
            </div>
            <div className="flex justify-center items-center">
              <label className="bg-red-100 p-2 rounded-l-lg border-y-2 border-l-2 border-orange-300  font-medium" htmlFor="citty">Select The City:</label>

              <select
                className="w-[50%] bg-red-100 rounded-r-lg border-orange-300  border-y-2 border-r-2  outline-none focus:outline-none"
                onChange={getCityValue}
                name="cities"
                id="citty"
              >
                {cities.map((city: any) => (
                  <option key={city._id} value={city.id}>
                    {city?.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        {destinations.length > 0 ? (
          <div className=" mx-5 px-2 md:p-5 grid lg:grid-cols-3 md:grid-cols-2">
            {destinations.map((monument: any) => (
              <div className="md:p-6 p-2" key={monument?.id}>
                <Card monument={monument} />
              </div>
            ))}
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}
