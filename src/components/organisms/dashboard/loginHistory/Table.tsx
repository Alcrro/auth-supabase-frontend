import { type TableDocumentMapProps } from "../../../../shared/data/dashboard/loginHistoryData";

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
      className={
        "w-full table-fixed border-separate border-spacing-y-0 bg-(--table-bg)"
      }
      aria-label={"login history"}
    >
      <thead
        className={
          "thead max-xl:hidden xl:table-header-group bg-(--table-header)"
        }
      >
        <tr className="block xl:table-row bg-(--table-row) hover:bg-(--table-row-hover) transition">
          {dataHeader.map((item) => (
            <th
              key={item.key}
              scope={"col"}
              className={
                "sticky top-0 bg-white/30 backdrop-blur-md  p-3 text-sm font-semibold tracking-wide first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md capitalize"
              }
              data-label={item.label}
            >
              <span>{item.label}</span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={"tbody "}>
        <tr className={"max-xl:hidden"}>
          <td colSpan={dataHeader.length} className="h-2"></td>
        </tr>
        {dataBody.map((row, i, arr) => (
          <tr
            key={row.id}
            className=" flex-col gap-2 mb-2 xl:table-row nth-of-type-[2]:rounded-t-md last:rounded-b-md bg-(--table-row) hover:bg-(--table-row-hover) backdrop-blur-lg  lg:hover:rounded-md cursor-default max-xl:rounded-md"
          >
            {dataHeader.map((h, colIndex) => (
              <td
                key={h.key}
                className={`p-2 ${h.key !== "ip_address" ? "capitalize" : ""} flex justify-between items-center xl:table-cell text-center ${i === arr.length - 1 && colIndex === 0 ? "rounded-bl-md" : ""} ${i === arr.length - 1 && colIndex === dataHeader.length - 1 ? "rounded-br-md" : ""} ${i === 0 && colIndex === 0 ? "rounded-tl-md" : ""} ${i === 0 && colIndex === dataHeader.length - 1 ? "rounded-tr-md" : ""}`}
              >
                <span className={"xl:hidden font-medium max-xl:text-left"}>
                  {h.label}
                </span>
                <span className={"max-xl:float-end"}>
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
              className={` max-xl:hidden xl:table-row nth-of-type-[2]:rounded-t-md  bg-(--table-row) hover:bg-(--table-row-hover) last:rounded-b-md max-lg:hidden ${dataBody.length - 1 === 3 && "text-red-500"}`}
            >
              {Array.from({ length: dataHeader.length }, (_, i) => (
                <td
                  key={i}
                  className={`p-2 h-16 flex justify-between items-center lg:table-cell text-center max-lg:not-last:border-b max-lg:border-gray-400`}
                ></td>
              ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default Table;
