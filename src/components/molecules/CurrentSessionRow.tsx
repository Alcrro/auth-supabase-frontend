const CurrentSessionRow = ({
  name,
  sessionTag,
}: {
  name: string;
  sessionTag: string;
}) => {
  return (
    <div className="flex gap-2 max-sm:flex-col text-center max-sm:gap-1 pb-4 ">
      <div className={"w-40 text-right font-semibold"}>{name}</div> -
      <div className={""}>{sessionTag}</div>
    </div>
  );
};

export default CurrentSessionRow;
