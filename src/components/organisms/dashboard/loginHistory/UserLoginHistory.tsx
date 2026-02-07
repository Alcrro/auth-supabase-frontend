import type { LoginHistoryProps } from "../../../../features/auth/types/auth.types";
import { tableDocumentMap } from "../../../../shared/data/dashboard/loginHistoryData";

const UserLoginHistory = ({
  loginHistories,
}: {
  loginHistories: LoginHistoryProps[];
}) => {
  return (
    <div className={"max-h-200 overflow-y-auto"}>
      <div className="title text-2xl text-center py-2">Login History</div>
      <div className={`table rounded-md overflow-hidden`}>
        <table
          className={"max-w-120 w-full border-separate border-spacing-y-0"}
          aria-label={"login history"}
        >
          <thead className={"thead max-lg:hidden"}>
            <tr className={""}>
              {tableDocumentMap.map((item) => (
                <th
                  scope={"col"}
                  className={
                    "capitalize bg-blue-300 p-2 first:rounded-tl-md first:rounded-bl-md last:rounded-tr-md last:rounded-br-md"
                  }
                  data-label={item.label}
                >
                  <span>{item.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={"tbody"}>
            <tr className={"max-md:hidden"}>
              <td colSpan={tableDocumentMap.length} className="h-2"></td>
            </tr>
            {loginHistories.slice(1, 10).map((row, i, arr) => (
              <tr
                key={row.id}
                className={
                  "text-center text-black odd:bg-white even:bg-blue-200 w-120"
                }
              >
                {tableDocumentMap.map((h, colIndex) => (
                  <td
                    key={h.key}
                    className={`p-2 ${h.key !== "ip_address" && "capitalize"} lg:table-cell flex justify-between w-120 border-b border-gray-400 ${i === arr.length - 1 && colIndex === 0 ? "rounded-bl-md" : ""} ${i === arr.length - 1 && colIndex === tableDocumentMap.length - 1 ? "rounded-br-md" : ""} ${i === 0 && colIndex === 0 ? "rounded-tl-md" : ""} ${i === 0 && colIndex === tableDocumentMap.length - 1 ? "rounded-tr-md" : ""}`}
                  >
                    <span className={"lg:hidden font-medium"}>{h.label}</span>
                    {h.key === "nr.crt"
                      ? i + 1
                      : (row[h.key as keyof LoginHistoryProps] ??
                        row[h.key as keyof LoginHistoryProps] ??
                        "-")}
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

export default UserLoginHistory;
