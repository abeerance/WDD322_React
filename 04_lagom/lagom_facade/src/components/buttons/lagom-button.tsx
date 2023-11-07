"use client";
// WICHTIG: Button hat die klasse whitespace-nowrap, damit er nicht umbrechen kann
// rudimentäres styling inklusive hover transitions

import { ButtonHTMLAttributes, FC } from "react";

interface LagomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  additionalClasses?: string;
}

const LagomButton: FC<LagomButtonProps> = ({
  text,
  onClick,
  additionalClasses,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`border-2 border-mono-black py-1 px-3 block whitespace-nowrap hover:text-white hover:bg-mono-black transition-colors duration-150 ${additionalClasses}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default LagomButton;
