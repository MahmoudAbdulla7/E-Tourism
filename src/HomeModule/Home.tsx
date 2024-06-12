import { Carousel } from "flowbite-react";
import Navbar from "../SharedModules/Components/Navbar/Navbar";
import Museums from "./Components/Museums/Museums";
import Welcome from "./Components/Welcome/Welcome";
import Footerr from "../SharedModules/Components/Footerr/Footerr";

export default function Home() {
  return (
    <>
     <div className="bg-auth-button-color">
        <div className="h-screen sm:h-64 xl:h-screen">
          <Carousel indicators={false}>
            <div className="h-screen bg1   ">
              <Navbar />
              <Welcome />
            </div>
            <div className=" h-screen bg2  ">
              <Navbar />
              <Welcome />
            </div>
            <div className=" h-screen bg3  ">
              <Navbar />
              <Welcome />
            </div>
          </Carousel>
        </div>
      </div>
      <Museums />
      <Footerr />
    </>
  );
}
