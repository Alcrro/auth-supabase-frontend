import { SkeletonCard } from "./ActivityDeviceSkeletonCard";

export const SkeletonList = ({ count = 3 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </>
);
