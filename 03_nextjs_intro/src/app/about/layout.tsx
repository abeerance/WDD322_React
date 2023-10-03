import { ReactNode } from "react";

type AboutLayoutProps = {
  children: ReactNode;
};

const AboutLayout: React.FC<AboutLayoutProps> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <h1 className='text-3xl'>HIHIHIHIHIHIHIHaodhoashdioashdio</h1>
        {children}
      </body>
    </html>
  );
};

export default AboutLayout;
