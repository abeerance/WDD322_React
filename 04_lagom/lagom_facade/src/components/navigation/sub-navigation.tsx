import { FC } from "react";
import { RiHeartLine, RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import SearchBar from "../search/search-bar";

const SubNavigation: FC = () => {
  return (
    <nav className='col-span-5 self-center px-12'>
      <ul className='flex items-center justify-end'>
        <li className='border-2 rounded-full border-mono-black p-1'>
          <RiHeartLine size={22} />
        </li>
        <li className='ml-4 border-2 rounded-full border-mono-black p-1'>
          <RiShoppingCartLine size={22} />
        </li>
        <li className='ml-4'>
          <SearchBar />
        </li>
        <li className='ml-4 border-2 rounded-full border-mono-black p-1'>
          <RiUser3Line size={22} />
        </li>
      </ul>
    </nav>
  );
};

export default SubNavigation;
