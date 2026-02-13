type DeviceLike = {
  isCurrent?: boolean;
  created_at?: string | number | Date | null;
};
export function sortDevices<T extends DeviceLike>(devices: T[]): T[] {
  return [...devices].sort((a, b) => {
    //current device always first

    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;

    const da = new Date(a.created_at ?? 0).getTime();
    const db = new Date(b.created_at ?? 0).getTime();

    return db - da;
  });
}
