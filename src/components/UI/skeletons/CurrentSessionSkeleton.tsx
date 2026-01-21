const CurrentSessionSkeleton = () => {
  return (
    <div className={"flex flex-col gap-2 animate-pulse"}>
      <div className="w-30 h-30 bg-gray-300 mb-8 rounded-full mx-auto"></div>

      {Array.from({ length: 4 }).map(() => (
        <div className="flex gap-2">
          <div className={"w-40 h-6 bg-gray-300 rounded-2xl text-right"}></div>-
          <div className={"w-40 h-6 bg-gray-300 rounded-2xl"}></div>
        </div>
      ))}
    </div>
  );
};

export default CurrentSessionSkeleton;
