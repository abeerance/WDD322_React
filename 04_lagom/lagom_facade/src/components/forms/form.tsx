"use client";

import { FC, FormEvent, ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  onSubmit: (e: FormEvent) => void;
  additionalClasses?: string;
};

const Form: FC<FormProps> = ({ children, onSubmit, additionalClasses }) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-col p-12 border border-mono-black ${additionalClasses}`}
    >
      {children}
    </form>
  );
};

export default Form;
