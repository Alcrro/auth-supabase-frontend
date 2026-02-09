import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import DefaultButton from "../../atoms/DefaultButton";
import type { FC } from "preact/compat";

interface ActiveDeviceButtonProps {
  dataSliced: number;
  limit: number;
  addMoreItems: () => void;
  totalRows: number;
}
const ExpendActiveDevicesButton: FC<ActiveDeviceButtonProps> = ({
  limit,
  addMoreItems,
  totalRows,
}) => {
  const more = limit < totalRows;
  return (
    <DefaultButton
      variant="none"
      className={`
            ${
              limit > 1
                ? "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 cursor-pointer"
                : "flex justify-center mt-4 cursor-pointer mx-auto"
            }`}
      onClick={addMoreItems}
    >
      {more ? (
        <BsArrowDownCircle
          size={30}
          className={"text-white/60 hover:text-white"}
        />
      ) : (
        <BsArrowUpCircle
          size={30}
          className={"text-white/60 hover:text-white"}
        />
      )}
    </DefaultButton>
  );
};

export default ExpendActiveDevicesButton;
