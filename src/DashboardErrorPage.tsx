import { useState } from "preact/hooks";
import { redirect, useNavigate, useSearchParams } from "react-router-dom";
import useTimer from "./shared/hooks/useTimer";

const DashboardErrorPage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useTimer(timer, setTimer);

  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      <h2 className="text-lg font-semibold">Tab invalid</h2>

      <p>
        Tab-ul <b>{tab} </b>
        nu exista
      </p>
      <p>Te vei redirectiona la o pagina corecta in {timer}</p>
      <button onClick={() => redirect("/dashboard")}>Mergi acum</button>
    </div>
  );
};

export default DashboardErrorPage;
