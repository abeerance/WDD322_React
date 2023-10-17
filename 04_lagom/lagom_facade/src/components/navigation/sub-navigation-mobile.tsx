"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { RiHeartLine, RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import IconButton from "../buttons/icon-button";

const SubNavigationMobile: FC = () => {
  const router = useRouter();

  return (
    <nav>
      <ul className='flex'>
        <li>
          <IconButton icon={<RiHeartLine size={18} />} />
        </li>
        <li className='ml-2'>
          <IconButton icon={<RiShoppingCartLine size={18} />} />
        </li>
        <li className='ml-2'>
          <IconButton
            icon={<RiUser3Line size={18} />}
            onClick={() => router.push("/login")}
          />
        </li>
      </ul>
    </nav>
  );
};

export default SubNavigationMobile;
