import {
  tableDocumentMap,
  type TableDocumentMapProps,
} from "../../../../shared/data/dashboard/loginHistoryData";

interface TableDataProps<D extends { id: string | number }> {
  dataHeader: TableDocumentMapProps[];
  dataBody: D[];
}

function Table<D extends { id: string | number }>({
  dataHeader,
  dataBody,
}: TableDataProps<D>) {
  return (
    <table
      className={"w-full table-fixed border-separate border-spacing-y-0"}
      aria-label={"login history"}
    >
      <thead className={"thead max-lg:hidden lg:table-header-group"}>
        <tr className="block lg:table-row odd:bg-white even:bg-blue-200">
          {dataHeader.map((item) => (
            <th
              key={item.key}
              scope={"col"}
              className={
                "sticky top-0 capitalize bg-blue-300 p-2 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md"
              }
              data-label={item.label}
            >
              <span>{item.label}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={"tbody "}>
        <tr className={"max-lg:hidden"}>
          <td colSpan={dataBody.length} className="h-2"></td>
        </tr>
        {dataBody.map((row, i, arr) => (
          <tr
            key={row.id}
            className="block lg:table-row text-black odd:bg-white even:bg-blue-200 nth-of-type-[2]:rounded-t-2xl last:rounded-b-2xl"
          >
            {dataHeader.map((h, colIndex) => (
              <td
                key={h.key}
                className={`p-2 ${h.key !== "ip_address" && "capitalize"} flex justify-between items-center lg:table-cell text-center not-last:border-b border-gray-400 ${i === arr.length - 1 && colIndex === 0 ? "rounded-bl-md" : ""} ${i === arr.length - 1 && colIndex === dataHeader.length - 1 ? "rounded-br-md" : ""} ${i === 0 && colIndex === 0 ? "rounded-tl-md" : ""} ${i === 0 && colIndex === tableDocumentMap.length - 1 ? "rounded-tr-md" : ""}`}
              >
                <span className={"lg:hidden font-medium max-lg:text-left"}>
                  {h.label}
                </span>
                <span className={"max-lg:float-end"}>
                  {row[h.key as keyof D] ?? "-"}
                </span>
              </td>
            ))}
          </tr>
        ))}
        {dataBody.length < 10 &&
          Array.from({ length: 10 - dataBody.length }, (_, i) => (
            <tr
              key={i}
              className="block lg:table-row nth-of-type-[2]:rounded-t-2xl last:rounded-b-2xl max-lg:hidden"
            >
              {Array.from({ length: dataHeader.length }, (_, i) => (
                <td
                  key={i}
                  className={`p-2 h-16 flex justify-between items-center lg:table-cell text-center max-lg:not-last:border-b border-gray-400`}
                ></td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
