"use client";

import useFetchUser from "@/hooks/use-fetch-user";
import { FC } from "react";

const ProfilePage: FC = () => {
  const { userData, isLoading } = useFetchUser();

  return userData !== null && !isLoading ? (
    <h1 className='text-2xl'>hello</h1>
  ) : (
    <h1>Loading</h1>
  );
};

export default ProfilePage;
