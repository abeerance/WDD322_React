"use client";

import { ShirtImage } from "@/types/shirt";
import Carousel from "nuka-carousel";
import { FC } from "react";

type ImageCarouselProps = {
  images: { data: ShirtImage[] };
};

const ImageCarousel: FC<ImageCarouselProps> = ({ images }) => {
  return (
    <div className='h-full w-96 mt-12 bg-red-500'>
      <Carousel autoplay>
        {images.data.map((image) => (
          <img
            key={image.id}
            src={image.attributes.formats.medium.url}
            alt={image.attributes.name}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
