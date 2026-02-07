import { useState } from "preact/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import useTimer from "./shared/hooks/useTimer";
import { tabs } from "./shared/data/dashboard/dashboardTabsData";

const DashboardErrorPage = () => {
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  const tabExist = tabs.filter((f) => f.key === tab);

  if (!tabExist) useTimer(timer, setTimer);

  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      <h2 className="text-lg font-semibold">Tab invalid</h2>
      {tab}
      <p>
        Tab-ul <b>{tab} </b>
        nu exista
      </p>
      <p>Te vei redirectiona la o pagina corecta in {timer}</p>
      <button onClick={() => navigate("/dashboard")}>Mergi acum</button>
    </div>
  );
};

export default DashboardErrorPage;
