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

    setSearchParams((p) => {
      const mp = new URLSearchParams(p);
      mp.set("limit", String(limit));
      mp.set("page", String(pageNr));
      return mp;
    });
  };

  return (
    <div className={"flex gap-1 justify-center"}>
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
  return (
    <div
      class={`flex gap-2 justify-center items-center my-2 text-center bg-blue-500 px-2 py-1 cursor-pointer rounded-md ${currentPage === pageNumber && "font-medium text-xl"}`}
      onClick={paginationHandler}
    >
      {pageNumber}
    </div>
  );
};
