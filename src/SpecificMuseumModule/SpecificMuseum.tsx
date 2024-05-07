import Navbar from "../SharedModules/Components/Navbar/Navbar";
import AboutMuseum from "./Components/AboutMuseum/AboutMuseum";
import Highlights from "./Components/Highlights/Highlights";

export default function SpecificMuseum() {
  return (
    <>
      <div className="Museums ">
        <div className="w-full h-full  bg-white bg-opacity-70">
          <Navbar />
          <AboutMuseum />
      
        </div>
      </div>
      {/* <AvailableServices/> */}
      {/* <VisitMuseum/> */}
    </>
  );
}
