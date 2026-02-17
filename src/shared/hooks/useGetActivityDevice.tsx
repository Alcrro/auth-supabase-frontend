import { useEffect, type Dispatch } from "react";
import type { StateUpdater } from "preact/hooks";
import type {
  ActiveDevice,
  LoginAuditProps,
} from "../../features/auth/types/auth.types";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import { sortDevices } from "../utils/sortDevices";
import { mapperDbActiveDevices } from "../../features/auth/mapper/mapperActiveDevices";
import { supabase } from "../libs/supabase/supabaseinsta";

const PAGE_SIZE = 30;

const useGetActivityDevice = (
  setLoading: (value: boolean) => void,
  setActivity: Dispatch<StateUpdater<ActiveDevice[]>>,
  page: number,
) => {
  useEffect(() => {
    async function load() {
      const { data, error } = await getActivityDevice(
        { action: "login" },
        0,
        PAGE_SIZE,
      );

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      if (data) {
        console.log(data);
        const { data: session } = await supabase.auth.getSession();
        const currentSession = session?.session;
        if (!currentSession) return;

        const payload = JSON.parse(
          atob(currentSession?.access_token.split(".")[1]),
        );

        const sessionId = payload.session_id;

        setActivity(
          sortDevices<LoginAuditProps>(data).map((device) =>
            mapperDbActiveDevices(device, sessionId),
          ),
        );

        // setActivity((prev) => [...prev, ...data]);
      }

      setLoading(false);
    }

    load();
  }, [page, setActivity]);
};

export default useGetActivityDevice;
