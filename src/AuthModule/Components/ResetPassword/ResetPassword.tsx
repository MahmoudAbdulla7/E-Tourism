import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../../SharedModules/Components/Button/Button";
import Input from "../../../SharedModules/Components/Input/Input";
import Passsword from "../../../SharedModules/Components/Password/Passsword";

export default function ResetPassword() {
  return (
    <div className="h-screen text-white flex items-center justify-center text-center">
      <div className="w-full ">
        <div className="w-[100%] flex items-center justify-center">
          <form className="w-5/6 lg:w-3/4">
            <h2 className="text-2xl my-3 font-semibold">Reset password</h2>
            <div className="email-input my-8">
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                children={<MdOutlineMailOutline />}
              />
            </div>
            <div className="otp-input my-8">
              <Input
                type="text"
                placeholder="Enter your otp"
                name="otp"
                children={<MdOutlineMailOutline />}
              />
            </div>
          
             <Passsword placeholder="Enter your Password" name="password" />
           
             <Passsword placeholder="Enter your confirm Password" name="confirmPassword" />
            <Button text="Reset" />
          </form>
        </div>
      </div>
    </div>
  )
}
