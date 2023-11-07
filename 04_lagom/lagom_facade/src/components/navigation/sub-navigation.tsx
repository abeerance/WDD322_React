"use client";

import useFetchUser from "@/hooks/use-fetch-user";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { RiHeartLine, RiShoppingCartLine, RiUser3Line } from "react-icons/ri";
import IconButton from "../buttons/icon-button";
import SearchBar from "../search/search-bar";

const SubNavigation: FC = () => {
  const router = useRouter();
  // username: hadrian
  // passwort: Test!1234
  const { userData, isLoading, error } = useFetchUser();

  // console.log(userData?.user.avatar.formats.medium.url, isLoading, error);

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

  // full url of image if you need to create it like this
  // const smallAvatarUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${userData?.user.avatar?.formats?.small?.url}`;

  return (
    <>
      {/* desktop navigation  */}
      <nav className='hidden md:block col-span-5 self-center px-12'>
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
            {userData !== null && userData.user.avatar.formats.small.url ? (
              <div
                className='h-9 w-9 relative rounded-full overflow-hidden cursor-pointer'
                onClick={() =>
                  router.push(`/profile/${userData.user.username}`)
                }
              >
                <Image
                  src={userData.user.avatar.formats.small.url}
                  fill
                  alt='Avatar'
                />
              </div>
            ) : userData !== null ? (
              <IconButton
                icon={<RiUser3Line size={22} />}
                onClick={() =>
                  router.push(`/profile/${userData.user.username}`)
                }
              />
            ) : (
              <IconButton
                icon={<RiUser3Line size={22} />}
                onClick={() => router.push("/login")}
              />
            )}
          </li>
        </ul>
      </nav>
      {/* mobile navigation */}
      <nav className='block md:hidden'>
        <ul className='flex'>
          <li>
            <IconButton icon={<RiHeartLine size={18} />} />
          </li>
          <li className='ml-2'>
            <IconButton icon={<RiShoppingCartLine size={18} />} />
          </li>
          <li className='ml-2'>
            {userData !== null && userData.user.avatar.formats.small.url ? (
              <div
                className='h-7 w-7 relative rounded-full overflow-hidden cursor-pointer'
                onClick={() =>
                  router.push(`/profile/${userData.user.username}`)
                }
              >
                <Image
                  src={userData.user.avatar.formats.small.url}
                  fill
                  alt='Avatar'
                />
              </div>
            ) : userData !== null ? (
              <IconButton
                icon={<RiUser3Line size={18} />}
                onClick={() =>
                  router.push(`/profile/${userData.user.username}`)
                }
              />
            ) : (
              <IconButton
                icon={<RiUser3Line size={18} />}
                onClick={() => router.push("/login")}
              />
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SubNavigation;
