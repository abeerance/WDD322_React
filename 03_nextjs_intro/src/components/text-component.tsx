"use client";

import { useState } from "react";
import ButtonComponent from "./button-component";

const TextComponent: React.FC = () => {
  const [text, setText] = useState("Hello World");
  return (
    <div className='mt-5'>
      <h3 className='text-3xl'>{text}</h3>
      <ButtonComponent setText={setText} />
    </div>
  );
};

export default TextComponent;
