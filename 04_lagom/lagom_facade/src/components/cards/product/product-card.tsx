import LagomImage from "@/components/common/lagom-image";
import { FC } from "react";

type ProductCardProps = {
  randomColor: string;
  imageUrl: string;
  title: string;
  brand: string;
  price: number;
};

const ProductCard: FC<ProductCardProps> = ({
  randomColor,
  imageUrl,
  title,
  brand,
  price,
}) => {
  return (
    <div
      className='rounded-md overflow-hidden cursor-pointer'
      style={{
        boxShadow: `7px 7px 0 ${randomColor}`,
        border: `1px solid ${randomColor}`,
        "--shadow-color": randomColor,
      }}
    >
      <LagomImage
        additionalClasses='h-56'
        imageUrl={imageUrl}
        alt='shirt image'
      />
      <div className='h-full px-4 py-6'>
        <h1 className='line-clamp-2 font-medium text-2xs md:text-xs'>
          {title}
        </h1>
        <div className='flex items-center justify-between mt-1'>
          <h2 className='line-clamp-2 font-sm text-3xs md:text-2xs'>{brand}</h2>
          <h2 className='line-clamp-2 font-sm text-3xs md:text-2xs'>
            {price} CHF
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
