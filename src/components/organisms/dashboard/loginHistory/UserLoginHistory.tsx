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
      <div className={` rounded-md overflow-hidden px-2`}>
        <table
          className={
            "max-w-7xl w-full table-fixed border-separate border-spacing-y-0"
          }
          aria-label={"login history"}
        >
          <thead className={"thead max-lg:hidden lg:table-header-group"}>
            <tr className="block lg:table-row odd:bg-white even:bg-blue-200">
              {tableDocumentMap.map((item) => (
                <th
                  key={item.key}
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
          <tbody className={"tbody "}>
            <tr className={"max-lg:hidden"}>
              <td colSpan={tableDocumentMap.length} className="h-2"></td>
            </tr>
            {loginHistories.slice(1, 10).map((row, i, arr) => (
              <tr
                key={row.id}
                className="block lg:table-row text-black odd:bg-white even:bg-blue-200 nth-of-type-[2]:rounded-t-2xl last:rounded-b-2xl"
              >
                {tableDocumentMap.map((h, colIndex) => (
                  <td
                    key={h.key}
                    className={`p-2 ${h.key !== "ip_address" && "capitalize"} flex justify-between items-center lg:table-cell text-center not-last:border-b border-gray-400 ${i === arr.length - 1 && colIndex === 0 ? "rounded-bl-md" : ""} ${i === arr.length - 1 && colIndex === tableDocumentMap.length - 1 ? "rounded-br-md" : ""} ${i === 0 && colIndex === 0 ? "rounded-tl-md" : ""} ${i === 0 && colIndex === tableDocumentMap.length - 1 ? "rounded-tr-md" : ""}`}
                  >
                    <span className={"lg:hidden font-medium max-lg:text-left"}>
                      {h.label}
                    </span>
                    <span className={"max-lg:float-end"}>
                      {h.key === "nr.crt"
                        ? i + 1
                        : (row[h.key as keyof LoginHistoryProps] ?? "-")}
                    </span>
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
