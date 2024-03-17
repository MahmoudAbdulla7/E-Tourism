import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
export default function AboutMuseum() {
  return (
    <div className="min:h-[100vh] ">
      <div className="mx-auto max-w-7xl pl-1 sm:px-6 lg:px-8 py-6">
        <div className="navigation">
          <label className="md:text-4xl mx-2 text-xl text-main flex items-center mb-8">
            <Link to="/">
              <TiHome />
            </Link>
            <span className="text-xl font-bold">
              <IoIosArrowForward />
            </span>
            <Link to="/museums">Museums</Link>
            <span className="text-xl font-bold">
              <IoIosArrowForward />
            </span>
            Amsterdam Walking Tour
          </label>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 bg- shadow-2xl rounded-3xl overflow-hidden m-3 h-full md:h-[auto]">
          <div
            className={` w-full h-auto lg:h-auto md:h-[70vh] overflow-hidden`}
          >
            <img
              className="w-full rounded-3xl"
              src="https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
              alt=""
            />
          </div>
          <div className="lg:col-span-3 p-4 flex flex-col justify-between">
            <div className="name">
              <h2 className="text-3xl font-semibold mb-2">
                Amsterdam Walking Tour
              </h2>
              <p className="text-lg">
                Amsterdam, the capital of the Netherlands, is a city rich in
                history, culture, and architecture. Guided walking tours are a
                popular way for visitors to explore the city while learning
                about its fascinating past. Knowledgeable guides often lead
                these tours, taking participants through iconic neighborhoods,
                landmarks, and hidden gems.
              </p>
            </div>
            <div className="booking grid sm:grid-cols-2 grid-cols-1  mt-8">
              <div>
                <p>
                  <span className="font-semibold">17</span> per person*
                </p>
                <p className="flex text-main items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-black px-2"> 28 reviews</span>
                </p>
                <p>Prices may vary depending on selected date.</p>
              </div>
              <div className="btn text-end">
                <button className="px-4 py-2 sm:w-auto w-full sm:m-0 mt-2  font-bold rounded-full bg-main border-main hover:text-main duration-700 border-2 text-white hover:bg-transparent">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
