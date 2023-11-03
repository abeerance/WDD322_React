"use client";

import useFetchUser from "@/hooks/use-fetch-user";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { RiHeartLine, RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import IconButton from "../buttons/icon-button";
import SearchBar from "../search/search-bar";

const SubNavigation: FC = () => {
  const router = useRouter();
  const { user, isLoading, error } = useFetchUser();

  console.log(user, isLoading, error);

  // const { data: session } = useSession();

  // useEffect(() => {
  //   const fetchUserMe = async () => {
  //     const token = session?.accessToken;
  //     if (token) {
  //       const response = await axios.get("/api/users/me", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       console.log(response);
  //     }
  //   };
  //   fetchUserMe();
  // }, [session?.accessToken]);

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
