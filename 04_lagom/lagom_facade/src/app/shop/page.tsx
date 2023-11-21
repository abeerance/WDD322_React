"use client";

import ProductCard from "@/components/cards/product/product-card";
import CardSlugClientWrapper from "@/components/common/blog-client-wrapper";
import ColorsFilter from "@/components/filters/colors/colors-filter";
import MainPage from "@/components/pages/main-page";
import { CardContentType } from "@/types/enum";
import { Shirt } from "@/types/shirt";
import { colorsRange, getRandomColor } from "@/utils/get-random-colors";
import axios from "axios";
import { FC, useEffect, useState } from "react";

const ShopPage: FC = () => {
  // State for tracking the selected color
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  // State for storing the list of shirts
  const [shirts, setShirts] = useState<Shirt[]>([]);
  // State for indicating if the data is currently being loaded.
  const [isLoading, setIsLoading] = useState(false);
  // State for storing any error that might occur during data fetching.
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch shirts data from the API
    const fetchShirts = async () => {
      setIsLoading(true); // Setting loading state to true before fetching data
      try {
        // Making a GET request to the Next.js server to fetch shirts data
        const response = await axios.get(`/api/shop`, {
          params: {
            filters: {
              Color: { $eq: selectedColor }, // Applying color filter if a color is selected
            },
            populate: "*", // Query parameter to populate additional data if needed.
          },
        });
        // Updating the shirts state with the data received from the server.
        setShirts(response.data.data.data);
      } catch (err: any) {
        setError(err);
      } finally {
        // Resetting the loading state after fetching data or if an error occurs
        setIsLoading(false);
      }
    };
    // Calling the fetchShirts function to load data
    fetchShirts();
  }, [selectedColor]); // Dependency array to refetch data when selectedColor changes.

  const handleColorClick = (color: string) => {
    // Toggling the selected color or resetting it if the same color is clicked again
    setSelectedColor((prevColor) => (prevColor === color ? null : color));
  };

  // Displaying an error message if an error occurs during data fetching
  if (error) return <div>Failed to load</div>;

  return (
    <MainPage additionalClasses='items-center'>
      <ColorsFilter handleColorClick={handleColorClick} />
      {/* Check the loading state */}
      {isLoading ? (
        <div className='min-h-screen'>
          <h1 className='mt-6'>Loading...</h1>
        </div>
      ) : (
        <div className='w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-6'>
          {/* If the shirt array is empty, display a message */}
          {shirts.length === 0 ? (
            <h1>No Shirts found with this color found</h1>
          ) : (
            // If the shirt array is not empty, display the shirts
            shirts.map((shirt: Shirt) => {
              const randomColor = getRandomColor(colorsRange);
              return (
                <CardSlugClientWrapper
                  key={shirt.id}
                  slug={shirt.attributes.slug}
                  cardContentType={CardContentType.SHIRTS}
                >
                  <ProductCard
                    randomColor={randomColor}
                    imageUrl={
                      shirt.attributes.Images.data[3].attributes.formats.medium
                        .url
                    }
                    title={shirt.attributes.Title}
                    brand={shirt.attributes.Brand}
                    price={shirt.attributes.Price}
                  />
                </CardSlugClientWrapper>
              );
            })
          )}
        </div>
      )}
    </MainPage>
  );
};

export default ShopPage;
