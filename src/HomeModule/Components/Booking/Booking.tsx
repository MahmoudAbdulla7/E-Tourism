import { MdLocalCafe } from "react-icons/md";
import BookingHeader from "../../../SharedModules/Components/BookingHeader/BookingHeader";
import Navbar from "../../../SharedModules/Components/Navbar/Navbar";
import site from "../../../assets/museum.jpeg";
import { FaParking, FaStar, FaWifi } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Booking() {
  return (
    <div className="booking">
      {/* <BookingHeader /> */}
      {/* <div className="ticket-details-header  bg-white p-5 flex justify-between  my-5 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <p className="text-main font-semibold">Ticket Details</p>
        <div className="bg-main text-white rounded-lg p-1">info and price</div>
      </div> */}
      
      <div className="ticket-details bg-white p-5 flex  my-5 mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <div className="rounded-lg w-1/3">
          <img className="w-full rounded-3xl shadow-lg" src={site} alt="site" />
        </div>
        <div className="ml-5 p-4 bg-white w-3/4">
          <div className="left-header flex justify-between items-center">
            <h1 className="text-main text-2xl font-bold">
              The Grand Egyptian Museum{" "}
            </h1>
            <p className="text-main text-2xl font-bold">50$</p>
          </div>
          <p className="text-main">Location:Giza Governorate</p>
          <div className="rate my-4 w-[50px]">
            <div className="flex items-center justify-between text-white p-1 rounded-lg bg-main">
              4.8 <FaStar />
            </div>
          </div>
          <div className="availbe-services">
            <p className="text-main text-lg">Available Services</p>
            <div className="services text-slate-400 flex items-center text-sm">
              <span className="flex items-center">
                <FaParking className="mr-1" />
                parking
              </span>
              <span className="flex items-center">
                <MdLocalCafe className="mx-1" /> cafe
              </span>
              <span className="flex items-center">
                <FaWifi className="mx-1" /> wifi
              </span>
            </div>
          </div>
          <div className="ms-auto">
            <div className="counter ">
              <span>No.of tickets</span>
              <div className="buttons rounded-2xl   flex items-center justify-between p-2  bg-slate-100  w-1/4">
                <button className="bg-red-600 rounded-full p-1 w-[20%] text-white">
                  -
                </button>
                <p>1</p>
                <button className="bg-main rounded-full p-1 w-[20%] text-white">
                  +
                </button>
              </div>
            </div>
            <div className="continue my-3">
              <Link to={"/booking/personal-details"}>
                <button className="bg-main text-white px-5 py-2  rounded-xl">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
