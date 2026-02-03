import { useEffect, type Dispatch } from "react";
import { supabase } from "../libs/supabase/supabaseinsta";
import { mapperDbActDev } from "../../features/auth/mapper/mapperActiveDevices";
import type { ActiveDevice } from "../../features/auth/types/auth.types";
import type { StateUpdater } from "preact/hooks";
import { sortDevices } from "../utils/sortDevices";

const useGetActivityDevice = (
  setLoading: (value: boolean) => void,
  setActivity: Dispatch<StateUpdater<ActiveDevice[]>>,
  limit: number,
  setTotalRows: Dispatch<StateUpdater<number>>,
) => {
  useEffect(() => {
    async function load() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      const { data, error } = await supabase
        .from("login_audit")
        .select("*")
        .eq("user_id", session?.user.id)
        .eq("action", "login")
        .order("created_at", { ascending: false })
        .limit(limit);

      const { data: totalRows, error: errorTotalRows } =
        await supabase.rpc("get_login_total");

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      if (data) {
        const currentSessionId = localStorage.getItem("session_id");
        // console.log(data);

        const mappedParsed = data.map((row) =>
          mapperDbActDev({
            ...row,
            isCurrent: row.session_id === currentSessionId,
          }),
        );
        console.log(mappedParsed);
        setTotalRows(totalRows);
        setActivity(sortDevices(mappedParsed));
      }

      setLoading(false);
    }

    load();
  }, [limit]);
};

export default useGetActivityDevice;
