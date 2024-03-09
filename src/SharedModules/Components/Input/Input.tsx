import { ReactNode, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

export interface input {
  name: string;
  placeholder: string;
  type?: string;
  children?: ReactNode;
}

export default function Input({ name, placeholder, type, children }: input) {

  
  return (
    <>
      <div className="Email my-1">
        <div className=" mt-2 text-lg border-b-2 flex border-gray-50">
          <label
            htmlFor={name}
            className="pointer-events-none flex items-center pr-2"
          >
            {children}
          </label>
          <input
            type={type}
            id={name}
            className="block w-full focus:border-none  outline-none py-1 px-2 bg-transparent"
            placeholder={placeholder}
          />
         
        </div>
      </div>
    </>
  );
}
