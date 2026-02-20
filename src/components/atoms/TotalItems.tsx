import React, { type FC } from "react";

interface ITotalItemsProps {
  items: number;
}
const TotalItems: FC<ITotalItemsProps> = ({ items }) => {
  return (
    <div className="text-end py-2 relative">
      <span
        className={"text-white bg-white/30 backdrop-blur-lg p-2 rounded-md"}
      >
        {items}
      </span>
    </div>
  );
};

export default TotalItems;
