import { shirtColor } from "@/types/shirt";
import { FC } from "react";
import ColorItem from "./color-item";

type ColorsFilterProps = {
  handleColorClick: (color: string) => void;
};

const ColorsFilter: FC<ColorsFilterProps> = ({ handleColorClick }) => {
  return (
    <div className='w-full'>
      <h3 className='font-medium text-sm'>Colors</h3>
      <div className='mt-2'>
        {/* Since shirt colors are of enum type, we need to map over the values of the enum */}
        {Object.values(shirtColor).map((color) => (
          <ColorItem
            key={color}
            color={color}
            handleColorClick={handleColorClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorsFilter;
