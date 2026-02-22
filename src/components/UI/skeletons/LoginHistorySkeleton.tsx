import { tableDocumentMap } from "../../../shared/data/dashboard/loginHistoryData";
import TableContainer from "../../organisms/TableContainer";

const LoginHistorySkeleton = () => {
  return (
    <div className={"bg-(--background-container) p-2 rounded-md"}>
      <div className="title pb-2 w-30 h-10 mx-auto bg-gray-300 rounded-2xl animate-pulse"></div>
      <div className="flex justify-center w-10 h-8 mx-2 ml-auto text-center mb-1 text-white bg-white/30 backdrop-blur-lg p-2 rounded-md">
        <span className={"p-2 bg-gray-400 rounded-2xl animate-pulse"}></span>
      </div>
      <TableContainer>
        <table
          className={"w-full table-fixed border-separate border-spacing-0"}
          aria-label={"login history"}
        >
          <thead className={"w-full max-xl:hidden xl:table-header-group"}>
            <tr className="block xl:table-row bg-white/20 hover:bg-white/35 transition rounded-md">
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
            <tr className={"max-xl:hidden bg-(--background-container)"}>
              <td colSpan={tableDocumentMap.length} className="h-2"></td>
            </tr>
            {Array.from({ length: 5 }).map((_row, i, arr) => (
              <tr
                key={i}
                className={`text-center text-transparent xl:table-row bg-white/15 backdrop-blur-lg shadow-lg lg:hover:bg-white/30 w-120  ${i === 0 ? "rounded-tl-md" : ""}`}
              >
                {tableDocumentMap.map((h, colIndex) => (
                  <td
                    key={h.key}
                    className={`p-2 ${h.key !== "ip_address" && "capitalize"} h-16 flex justify-between items-center xl:table-cell ${i === arr.length - 1 && colIndex === 0 ? "rounded-bl-md" : ""} ${i === arr.length - 1 && colIndex === 5 - 1 ? "rounded-br-md" : ""} ${i === 0 && colIndex === 0 ? "rounded-tl-md" : ""} ${i === 0 && colIndex === tableDocumentMap.length - 1 ? "rounded-tr-md" : ""}`}
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
            <div className={"max-xl:hidden"}>
              {Array.from({ length: 5 }, (_, i) => (
                <tr
                  key={i}
                  className={`block xl:table-row nth-of-type-[2]:rounded-t-md last:rounded-b-md max-lg:hidden ${tableDocumentMap.length - 1 === 3 && "text-red-500"}`}
                >
                  {Array.from({ length: tableDocumentMap.length }, (_, i) => (
                    <td
                      key={i}
                      className={`p-2 h-16 flex justify-between items-center lg:table-cell text-center max-lg:not-last:border-b max-lg:border-gray-400`}
                    ></td>
                  ))}
                </tr>
              ))}
            </div>
          </tbody>
        </table>
      </TableContainer>
    </div>
  );
};

export default LoginHistorySkeleton;
