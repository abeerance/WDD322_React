import { ReactNode } from "react";

type AppButtonProps = {
  children: ReactNode;
};

const AppButton: React.FC<AppButtonProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AppButton;
