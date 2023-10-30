"use client";

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";

type LagomSessionProviderProps = {
  children: ReactNode;
};

const LagomSessionProvider: FC<LagomSessionProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default LagomSessionProvider;
