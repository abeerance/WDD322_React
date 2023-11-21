import { Shirt } from "@/types/shirt";
import dataFetch from "@/utils/data-fetch";
import { FC } from "react";

type ShirtProps = {
  params: {
    slug: string;
  };
};

async function getShirt(slug: string) {
  return await dataFetch(
    `/api/shirts?filters[slug][$eq]=${slug}&populate=heroImage`
  );
}

const Shirt: FC<ShirtProps> = async ({ params }) => {
  const data: Shirt = await getShirt(params.slug);

  return <></>;
};

export default Shirt;
