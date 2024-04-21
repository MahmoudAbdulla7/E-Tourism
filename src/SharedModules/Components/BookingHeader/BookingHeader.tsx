import { FaHotel } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'

export default function BookingHeader() {
  return (
    <>
     <div className=" my-5 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 rounded-lg shadow-md">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex space-x-4">
                <div className="website-name">
                  <h1 className="text-main flex items-center font-semibold text-xl">
                    Booking Page
                  </h1>
                </div>
              </div>
            </div>
            <div className="right-side">
              <div className="book-buttons flex items-center">
                <input
                id="date"
                  type="date"
                  placeholder="Select date"
                  className="bg-gray-200 border  border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
                />
                <button className="bg-main text-white p-2 rounded-3xl flex items-center mx-2">
                  Search Hotels <FaHotel className="ml-1" />
                </button>
                <button className="bg-red-500 text-white p-2 rounded-3xl flex items-center">
                  Search Flights <GiCommercialAirplane />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
