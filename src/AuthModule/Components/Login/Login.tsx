import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../../../SharedModules/Components/Button/Button";
import Input from "../../../SharedModules/Components/Input/Input";
import Passsword from "../../../SharedModules/Components/Password/Passsword";

export default function Login() {


  return (
    <div className="h-screen text-white flex items-center justify-center text-center">
      <div className="w-full ">
        <div className="w-[100%] flex items-center justify-center">
          <form className="w-5/6 lg:w-3/4">
            <h2 className="text-2xl my-3 font-semibold">Log in</h2>
            <div className="email-input my-8">
              <Input
                type="email"
                placeholder="Enter your email"
                name="email"
                children={<MdOutlineMailOutline />}
              />
            </div>
            <Passsword placeholder="Enter your Password" name="password" />
            <Button text="Log in" />

            <div className="flex justify-between">
              <p>
                Don't have an account ?
                <Link to={"/auth/register"}>
                  <span className="underline mx-2">Register Now</span>
                </Link>
              </p>
              <p>
                <Link to={"/auth/send-code"}>
                  <span className="underline mx-2">Forget Password?</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
