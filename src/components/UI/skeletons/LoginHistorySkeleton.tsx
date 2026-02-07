import { tableDocumentMap } from "../../../shared/data/dashboard/loginHistoryData";

const LoginHistorySkeleton = () => {
  return (
    <div className={"max-h-200 overflow-y-auto"}>
      <div className="title text-2xl text-center py-1 text-transparent bg-gray-300 animate-pulse rounded-2xl w-fit mx-auto">
        Login History
      </div>
      <div className={`table rounded-md overflow-hidden`}>
        <table
          className={" border-separate border-spacing-0 w-225"}
          aria-label={"login history"}
        >
          <thead className={"thead max-lg:hidden"}>
            <tr className={""}>
              {tableDocumentMap.map((item) => (
                <th
                  scope={"col"}
                  className={
                    "capitalize text-transparent bg-blue-300 p-2 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md"
                  }
                  data-label={item.label}
                >
                  <span
                    className={
                      "text-transparent bg-gray-400 rounded-2xl animate-pulse"
                    }
                  >
                    {item.label}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={"tbody"}>
            <tr className={"max-md:hidden"}>
              <td colSpan={tableDocumentMap.length} className="h-2"></td>
            </tr>
            {Array.from({ length: 3 }).map((_row, i, arr) => (
              <tr
                key={i}
                className={
                  "text-center text-transparent odd:bg-white  even:bg-blue-200 w-120 "
                }
              >
                {tableDocumentMap.map((h, colIndex) => (
                  <td
                    key={h.key}
                    className={`p-2 ${h.key !== "ip_address" && "capitalize"} lg:table-cell flex justify-between w-120 border-b border-gray-400 ${i === arr.length - 1 && colIndex === 0 ? "rounded-bl-md" : ""} ${i === arr.length - 1 && colIndex === tableDocumentMap.length - 1 ? "rounded-br-md" : ""} ${i === 0 && colIndex === 0 ? "rounded-tl-md" : ""} ${i === 0 && colIndex === tableDocumentMap.length - 1 ? "rounded-tr-md" : ""}`}
                  >
                    <span className={"font-medium p-1 bg-gray-400 rounded-2xl"}>
                      {h.label}
                    </span>

                    <span
                      className={"w-20 h-10 bg-gray-400 rounded-2xl"}
                    ></span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoginHistorySkeleton;
