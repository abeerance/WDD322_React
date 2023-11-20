"use client";

import LagomImage from "@/components/common/lagom-image";
import MainPage from "@/components/pages/main-page";
import fetcher from "@/lib/fetcher";
import { Shirt, shirtColor } from "@/types/shirt";
import { colorsRange, getRandomColor } from "@/utils/get-random-colors";
import { FC, useEffect, useState } from "react";
import useSWR from "swr";

const ShopPage: FC = () => {
  // State to track the selected color filter
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  // State to store the list of shirts
  const [shirts, setShirts] = useState<Shirt[]>([]);

  // Constructing the API url dynamically based on the selected color
  const apiUrl =
    selectedColor !== null
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/api/shirts?filters[Color][$eq]=${selectedColor}&populate=*`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/shirts?populate=*`;

  // Using useSWR hook for data fetching
  const { data, isLoading, error } = useSWR(apiUrl, fetcher);

  // Is about the same as the useSWR hook, without additional features
  // useEffect(() => {
  //   const fetchShirts = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await fetch(apiUrl);
  //       const data = await response.json();
  //       console.log(data);
  //     } catch (error: any) {
  //       console.log(error.message);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchShirts();
  // }, [apiUrl]);

  // useEffect hook to update the shirts state whenever the data changes
  useEffect(() => {
    if (data && data.data) {
      setShirts(data.data);
    }
  }, [data]);

  const handleColorClick = (color: string) => {
    // Toggling the selected color. If the same color is clicked, it resets
    setSelectedColor((prevColor) => (prevColor === color ? null : color));
  };

  // return if loading
  if (isLoading) return <h1>Loading...</h1>;

  // return if error
  if (error) return <h1>Failed to load</h1>;

  // standard return
  return (
    <MainPage additionalClasses='items-center'>
      <div className='w-full'>
        <h3 className='font-medium text-sm'>Colors</h3>
        {/* Container for the buttons */}
        <div className='mt-2 flex flex-wrap gap-3'>
          {/* Since shirtColor are of enum type, we need to map over the values of the object */}
          {Object.values(shirtColor).map((color) => (
            <button
              key={color}
              className='border-2 border-mono-black text-xs px-2 py-1'
              onClick={() => handleColorClick(color)}
            >
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
          ))}
        </div>
        {/* Container for the grid and grid items */}
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-6'>
          {/* check if the shirt array is empty */}
          {shirts.length === 0 ? (
            <h1>Sorry, no shirts with this color found</h1>
          ) : (
            //  If not empty, map over the shirts array and render the grid items
            shirts.map((shirt) => {
              const randomColor = getRandomColor(colorsRange);
              return (
                <div
                  key={shirt.id}
                  className='rounded-md overflow-hidden cursor-pointer'
                  style={{
                    boxShadow: `7px 7px 0 ${randomColor}`,
                    border: `1px solid ${randomColor}`,
                    "--shadow-color": randomColor,
                  }}
                >
                  <LagomImage
                    additionalClasses='h-56'
                    imageUrl={
                      shirt.attributes.Images.data[3].attributes.formats.medium
                        .url
                    }
                    alt='Shirt image'
                  />
                  {/* container for the shirt information */}
                  <div className='h-full px-4 py-6'>
                    <h1 className='line-clamp-2 font-sm text-3xs md:text-2xs'>
                      {shirt.attributes.Title}
                    </h1>
                    <div className='flex items-center justify-between mt-1'>
                      <h2 className='line-clamp-2 font-medium text-2xs md:text-xs'>
                        {shirt.attributes.Brand}
                      </h2>
                      <h2 className='line-clamp-2 font-medium text-2xs md:text-xs'>
                        {shirt.attributes.Price} CHF
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </MainPage>
  );
};

export default ShopPage;
