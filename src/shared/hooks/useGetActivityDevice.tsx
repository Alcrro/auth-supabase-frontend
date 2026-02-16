import { useEffect, type Dispatch } from "react";
import type { StateUpdater } from "preact/hooks";
import type {
  ActiveDevice,
  LoginAuditProps,
} from "../../features/auth/types/auth.types";
import { getActivityDevice } from "../../features/auth/services/getActivityDevice";
import { sortDevices } from "../utils/sortDevices";
import { mapperDbActiveDevices } from "../../features/auth/mapper/mapperActiveDevices";

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
        page,
        PAGE_SIZE,
      );

      if (error) {
        console.error(error);
        setLoading(false);
        return;
      }

      if (data) {
        console.log(data);

        setActivity((prev) => {
          const sorted = sortDevices<LoginAuditProps>(data).map(
            mapperDbActiveDevices,
          );
          console.log({ sorted });

          return [...prev, ...sorted];
        });

        // setActivity((prev) => [...prev, ...data]);
      }

      setLoading(false);
    }

    load();
  }, [page, setActivity]);
};

export default useGetActivityDevice;
