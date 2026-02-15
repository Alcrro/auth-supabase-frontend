import {
  currentSessionMapper,
  type CurrentSessionVM,
} from "../../features/auth/types/auth.types";

const CurrentSessionRow = ({
  name,
  sessionTag,
}: {
  name: keyof CurrentSessionVM;
  sessionTag: string;
}) => {
  return (
    <div className=" flex-col items-center gap-3 sm:flex sm:flex-row text-center pb-4">
      <div className="sm:max-w-60 w-full text-center sm:text-right font-semibold">
        {currentSessionMapper[name]}
      </div>

      <div className="w-2 h-2 rounded-full bg-gray-400 opacity-70 max-sm:hidden" />

      <div className="sm:flex-1 text-left sm:break-all">{sessionTag}</div>
    </div>
  );
};

export default CurrentSessionRow;
