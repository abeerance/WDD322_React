import dataFetch from "@/utils/data-fetch";
import Link from "next/link";
import { FC } from "react";
import { RiMenuLine } from "react-icons/ri";
import Navigation from "../navigation/navigation";
import SubNavigation from "../navigation/sub-navigation";
import SubNavigationMobile from "../navigation/sub-navigation-mobile";
import SearchBar from "../search/search-bar";

// data fetch for menu items
async function getMenuItems() {
  // fetch data from CMS
  // if you take localhost, it will use ipv6
  // if you wrote 127.0.0.1, it will use ipv4
  // the same as http://127.0.0.1:1337/api/menus
  return await dataFetch("/api/menus");
}

const Header: FC = async () => {
  // here we call the async fetch function
  const data = await getMenuItems();

  return (
    <header className='bg-mono-white'>
      {/* desktop navigation */}
      <div className='hidden md:grid md:grid-cols-11 border-b border-mono-black px-6 lg:px-12'>
        <Navigation navItems={data.data} />
        <div className='col-span-1 flex justify-center border-x border-mono-black px-6 lg:px-12 py-5'>
          <Link className='font-bree text-mono-black text-7xl p-4' href='/'>
            L
          </Link>
        </div>
        <SubNavigation />
      </div>
      {/* mobile navigation */}
      <div className='flex flex-col md:hidden border-b border-mono-black'>
        {/* parent container with flex */}
        <div className='flex justify-between items-center border-b border-mono-black px-4 py-1'>
          <Link
            className='font-bree text-mono-black text-5xl relative bottom-1'
            href='/'
          >
            L
          </Link>
          <SubNavigationMobile />
        </div>
        <div className='flex justify-between items-center h-full'>
          <div className='border-r border-mono-black flex items-center p-2'>
            <RiMenuLine size={24} />
          </div>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
