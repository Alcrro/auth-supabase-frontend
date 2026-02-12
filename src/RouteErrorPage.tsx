import { useState } from "react";
import useTimer from "./shared/hooks/useTimer";
import { useRouteError } from "react-router-dom";

type RouteErrorPageProps = {
  errorMessage?: string;
};
const RouteErrorPage = ({ errorMessage }: RouteErrorPageProps) => {
  const [timer, setTimer] = useState(5);

  const error = useRouteError();
  useTimer(timer, setTimer);

  return (
    <>
      <div>{(error as Error)?.message}</div>
      <div className={"h-screen flex flex-col justify-center items-center"}>
        <div>{errorMessage}</div>
        Ruta nu exista. Redirect la dashboard in {timer}
      </div>
    </>
  );
};

export default RouteErrorPage;
