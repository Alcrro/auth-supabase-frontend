import { useState } from "preact/hooks";
import useTimer from "./shared/hooks/useTimer";

const RouteErrorPage = () => {
  const [timer, setTimer] = useState(5);

  useTimer(timer, setTimer);

  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      Ruta nu exista. Redirect la dashboard in {timer}
    </div>
  );
};

export default RouteErrorPage;
