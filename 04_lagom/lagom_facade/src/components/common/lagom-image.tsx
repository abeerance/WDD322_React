import Image from "next/image";
import { FC } from "react";

type LagomImageProps = {
  additionalClasses?: string;
  imageUrl: string;
  alt: string;
};

const LagomImage: FC<LagomImageProps> = ({
  additionalClasses,
  imageUrl,
  alt,
}) => {
  return (
    <div className={`relative ${additionalClasses}`}>
      <Image src={imageUrl} fill style={{ objectFit: "cover" }} alt={alt} />
    </div>
  );
};

export default LagomImage;
