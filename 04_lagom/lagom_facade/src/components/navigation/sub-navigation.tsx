"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { RiHeartLine, RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import IconButton from "../buttons/icon-button";
import SearchBar from "../search/search-bar";

const SubNavigation: FC = () => {
  const router = useRouter();

  return (
    <nav className='col-span-5 self-center px-12'>
      <ul className='flex justify-end items-center'>
        <li>
          <IconButton icon={<RiHeartLine size={22} />} />
        </li>
        <li className='ml-4'>
          <IconButton icon={<RiShoppingCartLine size={22} />} />
        </li>
        <li className='ml-4'>
          <SearchBar />
        </li>
        <li className='ml-4'>
          <IconButton
            icon={<RiUser3Line size={22} />}
            onClick={() => router.push("/login")}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SubNavigation;
