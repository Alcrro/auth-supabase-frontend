import { useState } from "preact/hooks";
import useTimer from "./shared/hooks/useTimer";

type RouteErrorPageProps = {
  errorMessage?: string;
};
const RouteErrorPage = ({ errorMessage }: RouteErrorPageProps) => {
  const [timer, setTimer] = useState(5);

  useTimer(timer, setTimer);

  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      <div>{errorMessage}</div>
      Ruta nu exista. Redirect la dashboard in {timer}
    </div>
  );
};

export default RouteErrorPage;
