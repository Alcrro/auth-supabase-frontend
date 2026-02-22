import { useMemo } from "preact/hooks";

const useClientPagination = <T,>(
  data: T[],
  uiPage: number,
  limit: number,
  serverLimit: number,
) => {
  return useMemo(() => {
    const pagesPerChunk = serverLimit / limit;
    const localPageIndex = (uiPage - 1) % pagesPerChunk;
    const start = localPageIndex * limit;

    return data.slice(start, start + limit);
  }, [data, uiPage, limit, serverLimit]);
};

export default useClientPagination;
