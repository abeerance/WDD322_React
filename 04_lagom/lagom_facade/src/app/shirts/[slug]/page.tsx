import MainPage from "@/components/pages/main-page";
import { ShirtContent } from "@/types/shirt";
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
  const data: ShirtContent = await getShirt(params.slug);

  const shirtContent = data.data[0].attributes;

  console.log(shirtContent);

  return (
    <MainPage>
      <div>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>
          {shirtContent.Brand}
        </h1>
        <h2 className='text-xs sm:text-sm md:text-md lg:text-lg mt-1'>
          {shirtContent.Title}
        </h2>
      </div>
      <h2 className='ml-6'>{shirtContent.Price}</h2>
    </MainPage>
  );
};

export default Shirt;
