import { useRef } from "preact/hooks";
import { useToggleElementStore } from "../../features/auth/store/useToggleEleStore";
import {
  currentSessionMapper,
  type CurrentSessionVM,
} from "../../features/auth/types/auth.types";
import SessionProfile from "./dashboard/currentSession/SessionProfile";
import useToggleDiv from "../../shared/hooks/useToggleDiv";
import { useCurrentDashboardTab } from "../../shared/hooks/currentDashboardTab";

const CurrentSessionCard = ({ session }: { session: CurrentSessionVM }) => {
  const { isToggled, removeToggle } = useToggleElementStore((store) => store);

  const ref = useRef(null);
  const currentTab = useCurrentDashboardTab();

  const isShowing = isToggled["currentTab"];
  useToggleDiv({
    ref,
    active: isToggled["currentTab"],
    setActive: () => removeToggle("currentTab"),
  });
  const visibleKeys: (keyof CurrentSessionVM)[] = [
    "userId",
    "email",
    "createdAt",
    "expiresAt",
  ];

  return (
    <div
      className={`absolute z-999 top-0 h-95 transition-all duration-500 ease-out transform ${isShowing ? "translate-x-full opacity-100" : "translate-x-0 opacity-0 pointer-events-none"}
  `}
      ref={ref}
    >
      <div
        className={`flex flex-col gap-2 bg-gray-300 w-70 h-full rounded-r-md transition-all duration-500 ease-out ${isShowing ? "opacity-100 scale-100" : "opacity-0 scale-95"}
`}
      >
        {currentTab === "current" ? null : (
          <SessionProfile image={session.image!} />
        )}

        <div
          className={`flex flex-col gap-2 transition-all duration-500 ease-out delay-100 ${isShowing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
  `}
        >
          {/* <div className="flex-col"> */}
          {visibleKeys.map((key) => (
            <div
              key={key}
              className={`flex flex-col items-center text-center transition-all duration-300 ease-out ${isShowing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
    `}
            >
              <div className={"font-semibold"}>{currentSessionMapper[key]}</div>
              <div>{session[key]}</div>
            </div>
          ))}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CurrentSessionCard;
