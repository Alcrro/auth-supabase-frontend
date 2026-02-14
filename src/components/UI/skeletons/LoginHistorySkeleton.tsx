import { tableDocumentMap } from "../../../shared/data/dashboard/loginHistoryData";

const LoginHistorySkeleton = () => {
  return (
    <div className={"h-full"}>
      <div className="title py-2 w-30 h-10 mx-auto my-4 bg-gray-300 rounded-2xl animate-pulse"></div>
      <div className="flex justify-center w-10 h-8 mx-2 ml-auto text-center mb-1 text-white bg-white/30 backdrop-blur-lg p-2 rounded-md">
        <span className={"p-2 bg-gray-400 rounded-2xl animate-pulse"}></span>
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
                <tr className="block xl:table-row bg-white/20 hover:bg-white/35 transition">
                  {tableDocumentMap.map((item) => (
                    <th
                      scope={"col"}
                      className={
                        "sticky top-0 bg-white/30 backdrop-blur-md text-gray-900 p-3 text-sm font-semibold tracking-wide first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md capitalize"
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
                <tr className={"max-xl:hidden bg-[#242424]"}>
                  <td colSpan={tableDocumentMap.length} className="h-2"></td>
                </tr>
                {Array.from({ length: 5 }).map((_row, i, arr) => (
                  <tr
                    key={i}
                    className={
                      "text-center text-transparent  bg-white/15 backdrop-blur-lg shadow-lg lg:hover:bg-white/30 w-120 rounded-tl-2xl"
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
