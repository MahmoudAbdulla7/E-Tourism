import { useState } from 'react';
import { IoKeyOutline } from 'react-icons/io5';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import Input, { input } from '../Input/Input';

export default function Passsword({ name, placeholder }: input) {
    const [isShown, setIsShown] = useState(false);
  const type = isShown ? "text" : "password";
  return (
    <div className="password-input flex items-center  my-8">
    <div className="w-[100%]">
    <Input
      name={name}
      placeholder={placeholder}
      type={type}
      children={<IoKeyOutline />}
    />
    </div>
    <span className="w-[1%] m-[-5%]" onClick={() => setIsShown((prev) => !prev)}>
      {!isShown ? <LuEye className="text-slate-600" /> : <LuEyeOff  className="text-slate-600"/>}
    </span>
  </div>
  )
}
