import CurrentSessionRow from "../../molecules/CurrentSessionRow";
import { BsPersonCircle } from "react-icons/bs";
import { useAuthStore } from "../../../features/auth/store/useAuthStore";
import { mapperSessionToCurrentSession } from "../../../features/auth/mapper/mappSessionToCurrentSession";
import SessionProfile from "./currentSession/SessionProfile";

const CurrentSession = () => {
  const { session } = useAuthStore();
  if (!session) return null;
  const currentSession = mapperSessionToCurrentSession(session);

  return (
    <div
      className={
        "flex flex-col justify-center  bg-gray-300 text-black rounded-md min-h-full w-full"
      }
    >
      <div className="w-full max-w-xl mx-auto">
        {currentSession.image ? (
          <SessionProfile image={currentSession.image} />
        ) : (
          <div className="size-30 bg-gray-400  rounded-full mb-8 flex items-center justify-center ">
            <BsPersonCircle className={"text-gray-200 size-30"} />
          </div>
        )}

        <CurrentSessionRow name="userId" sessionTag={currentSession.userId} />
        <CurrentSessionRow name="email" sessionTag={currentSession.email} />
        <CurrentSessionRow
          name="provider"
          sessionTag={currentSession.provider}
        />
        <CurrentSessionRow
          name="createdAt"
          sessionTag={new Date(currentSession.createdAt).toLocaleDateString()}
        />
        <CurrentSessionRow
          name="expiresAt"
          sessionTag={currentSession.expiresAt}
        />
      </div>
    </div>
  );
};

export default CurrentSession;
