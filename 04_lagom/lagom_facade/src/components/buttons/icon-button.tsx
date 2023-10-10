"use client";

import { FC, ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode;
  onClick?: () => void;
  additionalClasses?: string;
};

const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  additionalClasses,
}) => {
  return (
    <button
      className={`border-2 rounded-full border-mono-black p-1 ${additionalClasses}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
