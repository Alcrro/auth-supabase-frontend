import { useEffect, type Dispatch } from "react";
import { supabase } from "../libs/supabase/supabaseinsta";
import { mapperDbActDev } from "../../features/auth/mapper/mapperActiveDevices";
import type { ActiveDevice } from "../../features/auth/types/auth.types";
import type { StateUpdater } from "preact/hooks";
import { sortDevices } from "../utils/sortDevices";

const useGetActivityDevice = (
  setLoading: (value: boolean) => void,
  setActivity: Dispatch<StateUpdater<ActiveDevice[]>>,
) => {
  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("login_audit")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      if (data) {
        const currentSessionId = localStorage.getItem("session_id");

        const mappedParsed = data.map((row) =>
          mapperDbActDev({
            ...row,
            isCurrent: row.session_id === currentSessionId,
          }),
        );

        setActivity(sortDevices(mappedParsed));
      }

      setLoading(false);
    }

    load();
  }, []);
};

export default useGetActivityDevice;
