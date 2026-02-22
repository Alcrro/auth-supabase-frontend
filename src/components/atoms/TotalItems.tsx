import { type FC } from "react";

interface ITotalItemsProps {
  items: number;
}
const TotalItems: FC<ITotalItemsProps> = ({ items }) => {
  return (
    <div className="text-end pb-2 relative">
      <span
        className={
          "text-(--text-primary) bg-white/30 backdrop-blur-lg p-2 rounded-md"
        }
      >
        {items}
      </span>
    </div>
  );
};

export default TotalItems;
