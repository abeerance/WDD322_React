import { shirtColor } from "@/types/shirt";
import { FC } from "react";

type ColorItemProps = {
  color: shirtColor;
  handleColorClick: (color: string) => void;
};

const ColorItem: FC<ColorItemProps> = ({ color, handleColorClick }) => {
  return (
    <button
      key={color}
      className='mr-4 border-2 border-mono-black text-xs px-2 py-1'
      onClick={() => handleColorClick(color)}
    >
      {/* Set the first letter to uppercase */}
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
};

export default ColorItem;
