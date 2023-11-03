"use client";

import useFetchUser from "@/hooks/use-fetch-user";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { RiHeartLine, RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import IconButton from "../buttons/icon-button";

const SubNavigationMobile: FC = () => {
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
