import { ButtonHTMLAttributes, FC } from "react";

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const FormButton: FC<FormButtonProps> = ({ text, ...props }) => {
  return (
    <button
      {...props}
      className='border-2 border-mono-black py-2 px-4 w-52 ml-auto block hover:bg-mono-black hover:text-white transition-colors duration-150'
    >
      {text}
    </button>
  );
};

export default FormButton;
