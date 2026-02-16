import type { SetStateAction } from "preact/compat";
import type { Dispatch } from "preact/hooks";
import { useSearchParams } from "react-router-dom";

const Pagination = ({
  limit,
  totalRows,
  page,
  setPage,
}: {
  limit: number;
  totalRows: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const pagesNumber = Math.ceil(totalRows / limit);
  const [_searchParams, setSearchParams] = useSearchParams();

  const goTo = (pageNr: number) => {
    setPage(pageNr);
    console.log(page);

    setSearchParams((p) => {
      const mp = new URLSearchParams(p);
      mp.set("limit", String(limit));
      mp.set("page", String(pageNr));
      return mp;
    });
  };

  return (
    <div
      className={
        "flex flex-wrap gap-2 justify-center items-center mt-4 relative"
      }
    >
      {Array.from({ length: pagesNumber }, (_, i) => {
        const pageNumber = i + 1;
        return (
          <PageNumber
            key={pageNumber}
            pageNumber={pageNumber}
            currentPage={page}
            paginationHandler={() => goTo(pageNumber)}
          />
        );
      })}
    </div>
  );
};

export default Pagination;

const PageNumber = ({
  pageNumber,
  currentPage,
  paginationHandler,
}: {
  pageNumber: number;
  currentPage: number;
  paginationHandler: () => void;
}) => {
  const active = currentPage === pageNumber;

  return (
    <div
      className={`flex justify-center items-center min-w-9 h-9 px-3 rounded-xl text-sm transition-all duration-150 backdrop-blur-md border ${
        active
          ? "bg-white/50 border-white/40 shadow font-semibold scale-105"
          : "bg-white/20 border-white/25 hover:bg-white/35"
      }`}
      onClick={paginationHandler}
    >
      {pageNumber}
    </div>
  );
};
