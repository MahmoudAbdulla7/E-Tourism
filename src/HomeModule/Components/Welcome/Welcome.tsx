import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div className="">
      <div className="mx-auto h-[81vh]  max-w-7xl pl-1 sm:px-6 lg:px-8 my-14 flex flex-col justify-between">
        <div>
          <h2 className="text-8xl font-bold text-yellow-400">
            Explore <br /> Egypt
          </h2>
          <p className="text-4xl font-semibold text-main my-8 mx-3 fade-in-up"></p>
        </div>
        <div className="text-center flex text-white items-center justify-center ">
          <Link to="/map" className="w-2/6 start-journey rounded-3xl overflow-hidden">
            <div className="w-full h-5/6 layer ">
              <p className="md:px-6 py-8 text-lg font-semibold">
                Start your Journey
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
