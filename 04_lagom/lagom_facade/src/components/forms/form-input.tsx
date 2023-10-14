"use client";

import { ChangeEventHandler, FC, useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

type FormInputProps = {
  type: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  additionalClasses?: string;
};

const FormInput: FC<FormInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  additionalClasses,
}) => {
  const [revealPassword, setRevealPassword] = useState(false);

  return (
    <div
      className={`flex border border-mono-black py-2 px-4 focus-within:border-mono-blue  ${additionalClasses}`}
    >
      <input
        type={revealPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='flex-grow bg-mono-white outline-0 placeholder-mono-black'
      />
      {type === "password" ? (
        revealPassword ? (
          <RiEyeOffLine
            size={22}
            onClick={() => setRevealPassword(!revealPassword)}
            className='cursor-pointer'
          />
        ) : (
          <RiEyeLine
            size={22}
            onClick={() => setRevealPassword(!revealPassword)}
            className='cursor-pointer'
          />
        )
      ) : null}
    </div>
  );
};

export default FormInput;
