import { tableDocumentMap } from "../../../shared/data/dashboard/loginHistoryData";

const LoginHistorySkeleton = () => {
  return (
    <div className={"h-full"}>
      <div className="title text-2xl text-center py-2">Login History</div>
      <div className="block w-fit ml-auto p-3 py-2 mr-2 mb-1 text-black bg-blue-300 rounded-md">
        <span
          className={"p-2 py-1 bg-gray-400 rounded-2xl animate-pulse"}
        ></span>
      </div>
      <div className={`rounded-md px-2 overflow-hidden`}>
        <div
          className={"h-160 min-h-full max-w-7xl min-w-full overflow-y-auto"}
        >
          <div className={`overflow-hidden rounded-2xl`}>
            <table
              className={"w-full table-fixed border-separate border-spacing-0"}
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
                <tr className={"max-lg:hidden"}>
                  <td colSpan={tableDocumentMap.length} className="h-2"></td>
                </tr>
                {Array.from({ length: 5 }).map((_row, i, arr) => (
                  <tr
                    key={i}
                    className={
                      "text-center text-transparent odd:bg-white even:bg-blue-200 w-120 rounded-tl-2xl"
                    }
                  >
                    {tableDocumentMap.map((h, colIndex) => (
                      <td
                        key={h.key}
                        className={`p-2 ${h.key !== "ip_address" && "capitalize"} h-16 flex justify-between items-center lg:table-cell border-b border-gray-400 ${i === arr.length - 1 && colIndex === 0 ? "rounded-bl-md" : ""} ${i === arr.length - 1 && colIndex === tableDocumentMap.length - 1 ? "rounded-br-md" : ""} ${i === 0 && colIndex === 0 ? "rounded-tl-md" : ""} ${i === 0 && colIndex === tableDocumentMap.length - 1 ? "rounded-tr-md" : ""}`}
                      >
                        <span
                          className={
                            "font-medium p-1 bg-gray-400 animate-pulse rounded-md"
                          }
                        >
                          {h.label}
                        </span>

                        <span
                          className={
                            "w-20 h-10 bg-gray-400 animate-pulse rounded-md"
                          }
                        ></span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginHistorySkeleton;
