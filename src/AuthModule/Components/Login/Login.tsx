import { MdOutlineMailOutline } from "react-icons/md";
import { IoKeyOutline } from "react-icons/io5";

export default function Login() {
  return (
    <div className="h-screen text-white flex items-center justify-center text-center">
      <div className="w-full ">
        <div className="w-[100%] flex items-center justify-center">
          <form className="w-1/2">
            <h2 className="text-2xl my-3 font-semibold">Log in</h2>
            <div className="Email my-1">
              <div className=" mt-2 text-lg border-b-2 flex border-gray-50">
                <div className="pointer-events-none flex items-center pr-2">
                  <MdOutlineMailOutline />
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full focus:border-none outline-none py-1 px-2 bg-transparent"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div className="Password my-1">
              <div className=" mt-2 text-lg border-b-2 flex border-gray-50">
                <div className="pointer-events-none flex items-center pr-2">
                  <IoKeyOutline />
                </div>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="block w-full focus:border-none outline-none py-1 px-2 bg-transparent"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="text-right">
              <button className="text-gray-500 border-2 w-full md:w-auto border-slate-900 hover:border-gray-50 bg-slate-900 hover:bg-main px-8 my-3 py-1 rounded-3xl hover:text-gray-50 duration-500">
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
