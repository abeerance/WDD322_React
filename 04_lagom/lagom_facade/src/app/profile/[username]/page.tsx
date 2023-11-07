"use client";

import LagomButton from "@/components/buttons/lagom-button";
import MainPage from "@/components/pages/main-page";
import useFetchUser from "@/hooks/use-fetch-user";
import Image from "next/image";
import { FC } from "react";
import { RiEdit2Line } from "react-icons/ri";

const ProfilePage: FC = () => {
  const { userData, isLoading } = useFetchUser();

  return userData !== null && !isLoading ? (
    <MainPage additionalClasses='items-center'>
      <div className='flex flex-col w-4/6 p-12 border border-mono-black'>
        <div className='flex items-center mb-8'>
          <div className='relative'>
            {/* container for the image and the edit image button*/}
            <div className='h-20 w-20 md:h-28 md:w-28 shrink-0 relative rounded-full overflow-hidden'>
              {/* container for the image */}
              <Image
                src={userData.user.avatar.formats.medium.url}
                fill
                priority
                alt='Avatar Image'
              />
            </div>
            <button className='absolute bg-mono-black text-white p-1 rounded-full right-0 bottom-0 border-2 border-mono-white'>
              <RiEdit2Line size={16} />
            </button>
          </div>
          <div className='ml-8 flex flex-col'>
            <h2 className='text-md mr-6 mb-3'>Hey {userData.user.username}!</h2>
            {/* container for the lagom-buttons */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1'>
              <LagomButton text='Edit profile' additionalClasses='text-3xs' />
              <LagomButton text='View Likes' additionalClasses='text-3xs' />
              <LagomButton text='View Cart' additionalClasses='text-3xs' />
            </div>
          </div>
        </div>
        <h2>Purchase History</h2>
      </div>
    </MainPage>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProfilePage;
