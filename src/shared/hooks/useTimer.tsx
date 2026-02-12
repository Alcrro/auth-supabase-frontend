import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

const useTimer = (
  timer: number,
  setTimer: Dispatch<SetStateAction<number>>,
) => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [setTimer]);

  useEffect(() => {
    if (timer === 0) navigate("/dashboard");
  }, [timer, navigate]);
};

export default useTimer;
