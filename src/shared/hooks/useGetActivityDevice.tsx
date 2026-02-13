import { useEffect, type Dispatch } from "react";
import type { StateUpdater } from "preact/hooks";
import type { ActiveDevice } from "../../features/auth/types/auth.types";
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
        const mapper = data.map(mapperDbActiveDevices);
        const mapped = sortDevices(mapper);

        setActivity((prev) => {
          const map = new Map(prev.map((x) => [x.id, x]));

          for (const row of mapped) {
            map.set(row.id, row);
          }

          return Array.from(map.values());
        });

        // setActivity((prev) => [...prev, ...data]);
      }

      setLoading(false);
    }

    load();
  }, [page, setActivity]);
};

export default useGetActivityDevice;
