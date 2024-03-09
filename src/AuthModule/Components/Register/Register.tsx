import { BsPersonVcardFill } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../SharedModules/Components/Button/Button";
import Input from "../../../SharedModules/Components/Input/Input";
import Passsword from "../../../SharedModules/Components/Password/Passsword";

export default function Register() {
  return (
    <div className="h-screen text-white flex items-center justify-center text-center">
      <div className="w-full ">
        <div className="w-[100%] flex items-center justify-center">
          <form className="w-5/6 lg:w-3/4">
            <h2 className="text-2xl my-3 font-semibold">Register</h2>

            <div className="name-inputs  my-8 flex justify-between ">
              <Input
                type="text"
                placeholder="Enter your first name"
                name="first"
                children={<BsPersonVcardFill />}
              />
              <Input
                type="text"
                placeholder="Enter your last name"
                name="last"
                children={<BsPersonVcardFill />}
              />
            </div>

            <div className="email-input my-8">
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                children={<MdOutlineMailOutline />}
              />
            </div>

           
            <Passsword placeholder="Enter your Password" name="password" />

          
             <Passsword placeholder="Enter your Confirm Password" name="confirmPassword" />

          
            <Button text="Register" />

            <div className="flex justify-between">
              <p>
                have an account ?
                <Link to={"/auth/login"}>
                  <span className="underline mx-2">Log in Now</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
