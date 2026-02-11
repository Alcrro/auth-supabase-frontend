import type { SetStateAction } from "preact/compat";
import type { Dispatch } from "preact/hooks";

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

  const goTo = (pageNr: number) => {
    setPage(pageNr);
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
      class={`inline-block text-center bg-blue-500 px-2 py-1 my-2 rounded-md ${currentPage === pageNumber && "font-medium"}`}
      onClick={paginationHandler}
    >
      {pageNumber}
    </div>
  );
};
