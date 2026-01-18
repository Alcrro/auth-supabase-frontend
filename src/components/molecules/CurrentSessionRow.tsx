const CurrentSessionRow = ({
  name,
  sessionTag,
}: {
  name: string;
  sessionTag: string;
}) => {
  return (
    <div className="flex gap-2">
      <div className={"w-40 text-right"}>{name}</div> -
      <div className={""}>{sessionTag}</div>
    </div>
  );
};

export default CurrentSessionRow;
