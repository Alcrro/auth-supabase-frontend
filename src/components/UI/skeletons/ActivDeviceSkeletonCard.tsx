import { SkeletonCard } from "./ActivityDeviceSkeletonCard";
import style from "../../styles/activeDeviceCardStyle.module.scss";

export const ActiveDeviceSkeleton = ({ count = 5 }) => (
  <div className={"w-full"}>
    <div
      className={
        "my-2 text-2xl w-fit mx-auto text-transparent bg-gray-300 rounded-md"
      }
    >
      Active devices
    </div>
    <div className="flex gap-2 items-center">
      <div
        className={"my-1 bg-gray-300 animate-pulse text-transparent rounded-xl"}
      >
        Active devices:
      </div>
      <div className={"size-6 bg-gray-300 animate-pulse rounded-xl"}></div>
    </div>

    <div className={style.cardStyle}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>

    <div
      className={"size-8 mx-auto my-4 bg-gray-300 rounded-2xl animate-pulse"}
    ></div>
  </div>
);
