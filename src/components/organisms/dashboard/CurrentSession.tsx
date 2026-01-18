import { type FC } from "react";
import CurrentSessionRow from "../../molecules/CurrentSessionRow";
import { BsPersonCircle } from "react-icons/bs";

export type CurrentSessionVM = {
  userId: string;
  email: string;
  provider: string;
  image?: string;
  ip?: string;
  createdAt: string;
  expiresAt: string;
};

type CurrentSessionVMProps = {
  currentSession: CurrentSessionVM;
};

const CurrentSession: FC<CurrentSessionVMProps> = ({ currentSession }) => {
  return (
    <>
      {currentSession.image ? (
        <img
          src={currentSession.image}
          alt={"profile"}
          referrerPolicy={"no-referrer"}
          style={{
            margin: "2rem auto",
            width: 120,
            height: 120,
            borderRadius: "50%",
          }}
        ></img>
      ) : (
        <div className="size-30 bg-gray-400 mx-auto rounded-full mb-8 flex items-center justify-center">
          <BsPersonCircle className={"text-gray-200 size-30"} />
        </div>
      )}
      <CurrentSessionRow name="userId" sessionTag={currentSession.userId} />
      <CurrentSessionRow name="email" sessionTag={currentSession.email} />
      <CurrentSessionRow name="provider" sessionTag={currentSession.provider} />
      <CurrentSessionRow
        name="created at"
        sessionTag={new Date(currentSession.createdAt).toLocaleDateString()}
      />
      <CurrentSessionRow
        name="expires in"
        sessionTag={currentSession.expiresAt}
      />
    </>
  );
};

export default CurrentSession;
