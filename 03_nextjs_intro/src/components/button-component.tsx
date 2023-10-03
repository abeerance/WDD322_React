"use client";

import { Dispatch, SetStateAction } from "react";

type ButtonComponentProps = {
  setText: Dispatch<SetStateAction<string>>;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ setText }) => {
  return (
    <button
      className='mt-5 py-4 px-4 rounded-md bg-green-600'
      onClick={() => {
        setText("Hello World from button");
      }}
    >
      Change text
    </button>
  );
};

export default ButtonComponent;
