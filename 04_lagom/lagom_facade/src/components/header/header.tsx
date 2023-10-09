import Link from "next/link";
import { FC } from "react";
import Navigation from "../navigation/navigation";

// data fetch for menu items
async function getMenuItems() {
  // fetch data from CMS
  // if you take localhost, it will use ipv6
  // if you wrote 127.0.0.1, it will use ipv4
  // the same as http://127.0.0.1:1337/api/menus
  const res = await fetch(`${process.env.BASE_URL}/api/menus`, {
    headers: {
      // JWT Token Authorization HTTP header
      Authorization: `Bearer ${process.env.PUBLIC_BEARER}`,
    },
  });

  // return of the response
  return res.json();
}

const Header: FC = async () => {
  // here we call the async fetch function
  const data = await getMenuItems();

  console.log(data);

  return (
    <header className='bg-mono-white grid grid-cols-11 border-b border-mono-black'>
      <Navigation navItems={data.data} />
      <Link className='font-bree text-mono-black text-7xl p-4' href='/'>
        L
      </Link>
    </header>
  );
};

export default Header;
