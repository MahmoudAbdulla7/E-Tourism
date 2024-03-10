import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../../SharedModules/Components/Button/Button";
import Input from "../../../SharedModules/Components/Input/Input";

export default function SendResetPasswordCode() {
  return (
    <div className="h-screen text-white flex items-center justify-center text-center">
      <div className="w-full ">
        <div className="w-[100%] flex items-center justify-center">
          <form className="w-5/6 lg:w-3/4">
            <h2 className="text-2xl my-3 font-semibold">Forget password</h2>
            <div className="email-input">
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                children={<MdOutlineMailOutline />}
              />
            </div>

            <Button text="Send"/>
          </form>
        </div>
      </div>
    </div>
  );
}
