import { Carousel } from "flowbite-react";
import Museums from "./Components/Museums/Museums";
import Welcome from "./Components/Welcome/Welcome";
import Footerr from "../SharedModules/Components/Footerr/Footerr";

export default function Home() {

  
  return (
    <>
     <div className="bg-auth-button-color">
        <div className="h-screen  xl:h-screen relative" >
          <Carousel indicators={false} leftControl={true} rightControl={true}>
            <div className="h-screen bg1   ">
            </div>
            <div className=" h-screen bg2  ">
            </div>
            <div className=" h-screen bg3  ">
            </div>
          </Carousel>
              <Welcome />
        </div>
      </div>
      <Museums />
      <Footerr />
    </>
  );
}
