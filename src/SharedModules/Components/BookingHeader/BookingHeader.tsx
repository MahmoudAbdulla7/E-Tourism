import { FaHotel } from 'react-icons/fa'
import { GiCommercialAirplane } from 'react-icons/gi'

export default function BookingHeader() {
  return (
    <>
     <div className="my-5 mx-auto  px-2 sm:px-6 lg:px-8 rounded-lg border-b-2">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex p-2 items-center justify-between">
                <div className="website-name">
                  <h1 className="text-main  font-semibold  text-xs md:text-xl">
                    Booking Page
                  </h1>
                </div>
              <div className="book-buttons flex items-center">
                <button className="bg-main text-white text-xs md:text-sm p-1 md:p-2 rounded-3xl flex items-center mx-2">
                  <a className='flex items-center text-xs md:text-lg  ' target='_blank' href="https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaEOIAQGYAQm4ARfIAQzYAQHoAQGIAgGoAgO4ApK-k7MGwAIB0gIkYTFmMDI1YjMtNGE2ZS00OGIyLWEwZWEtOTRmMGNlODExZGQ52AIF4AIB&sid=89bffece0f8954dcc797c99a4f39e332&keep_landing=1&sb_price_type=total&">
                  Search Hotels <FaHotel className="ml-1" />
                  </a>
                </button>
                <button className="bg-red-500 text-white text-xs md:text-sm p-1 md:p-2 rounded-3xl flex items-center">
                  <a className='flex items-center text-xs md:text-lg' target='_blank' href="https://eg.flyin.com/en/flights?dxid=CjwKCAjwgpCzBhBhEiwAOSQWQcrAIGbDMmYOPYxGFbDP9ccRczkcoq22hvXQ4S-HyBmoEzHd_FToeBoCUaMQAvD_BwE&gad_source=1&gclid=CjwKCAjwgpCzBhBhEiwAOSQWQcrAIGbDMmYOPYxGFbDP9ccRczkcoq22hvXQ4S-HyBmoEzHd_FToeBoCUaMQAvD_BwE">
                  Search Flights <GiCommercialAirplane />
                  </a>
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
