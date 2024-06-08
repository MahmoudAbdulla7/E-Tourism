import BookingHeader from "../SharedModules/Components/BookingHeader/BookingHeader";
import Navbar from "../SharedModules/Components/Navbar/Navbar";
import Museums from "./Components/Museums/Museums";
import Welcome from "./Components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <div className="h-screen byramid my-0">
        <Navbar />
        {/* <BookingHeader/> */}
        <Welcome />
      </div>
      <Museums/>
    </>
  );
}
