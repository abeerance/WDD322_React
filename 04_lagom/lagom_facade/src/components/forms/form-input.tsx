"use client";

import { FC, useState } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

type FormInputProps = {
  type: string;
  placeholder: string;
  register: UseFormRegisterReturn<string>;
  errors: FieldError | undefined;
  additionalClasses?: string;
};

const FormInput: FC<FormInputProps> = ({
  type,
  placeholder,
  register,
  errors,
  additionalClasses,
}) => {
  const [revealPassword, setRevealPassword] = useState(false);

  return (
    <div className='h-19 flex flex-col'>
      <div
        className={`flex border border-mono-black py-2 px-4 focus-within:border-mono-blue ${additionalClasses}`}
      >
        <input
          {...register}
          type={revealPassword ? "text" : type}
          placeholder={placeholder}
          className='flex-grow bg-mono-white outline-0 placeholder-mono-black'
        />
        {type === "password" &&
          (revealPassword ? (
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
          ))}
      </div>
      {errors && (
        <span className='text-2xs mt-1 text-red-600'>{errors.message}</span>
      )}
    </div>
  );
};

export default FormInput;
