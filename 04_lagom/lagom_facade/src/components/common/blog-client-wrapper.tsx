// it is a client wrapper for server component (blog) and the content
// of the server component will be visible as children here
// the reason we need a client wrapper is, because we want to have an onClick
// function with a router.push(), which is not possible in a server component
// that's why we use this client component in which we will prop the slug
// from the server parent component and then we can use the slug in here

"use client";

import { CardContentType } from "@/types/enum";
import { useRouter } from "next/navigation";
import { FC, ReactNode } from "react";

type CardSlugClientWrapperProps = {
  children: ReactNode;
  cardContentType: CardContentType;
  slug: string;
};

const CardSlugClientWrapper: FC<CardSlugClientWrapperProps> = ({
  children,
  cardContentType,
  slug,
}) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push(`/${cardContentType}/${slug}`)}>
      {children}
    </div>
  );
};

export default CardSlugClientWrapper;
