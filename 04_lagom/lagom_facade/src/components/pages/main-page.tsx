import { FC, ReactNode } from "react";

type MainPageProps = {
  children: ReactNode;
  additionalClasses?: string;
};

const MainPage: FC<MainPageProps> = ({ children, additionalClasses }) => {
  return (
    <main
      className={`flex flex-col px-14 py-12 bg-mono-white ${additionalClasses}`}
    >
      {children}
    </main>
  );
};

export default MainPage;
