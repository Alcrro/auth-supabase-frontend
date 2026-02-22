import { useRef, useState } from "preact/hooks";
import useGetActivityDevice from "../../../shared/hooks/useGetActivityDevice";
import { ActiveDeviceSkeleton } from "../../UI/skeletons/ActivDeviceSkeletonCard";
import useLayoutActivityDevice from "../../../shared/hooks/useLaoutActivityDevice";
import { useSearchParams } from "react-router-dom";
import useAddItems from "../../../shared/hooks/useAddItems";
import useGetTotalRows from "../../../shared/hooks/useGetTotalRows";
import Title from "../../molecules/activeDevices/Title";
import ActiveDevicesCounter from "../../molecules/activeDevices/ActiveDevicesCounter";
import ActiveDeviceLayout from "../../molecules/activeDevices/ActiveDeviceLayout";
import ActiveDeviceCard from "./ActiveDeviceCard";
import ExpendActiveDevicesButton from "../../UI/buttons/ExpendActiveDevicesButton";
import type { ActiveDevice } from "../../../features/auth/types/auth.types";
import useClientPagination from "../../../shared/hooks/useClientPagination";
import { useServerPage } from "../../../shared/hooks/useServerPagination";

const ActiveDevices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activity, setActivity] = useState<ActiveDevice[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState<number>(0);
  const initialLimit = Number(searchParams.get("limit") ?? 5);
  const [uiPage, _setUiPage] = useState(1);
  const [limit, setLimit] = useState<number>(initialLimit);

  const [_maxH, setMaxH] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const serverPage = useServerPage(uiPage, limit, 30);

  // extend limit to fetch more devices history
  //TODOS de reglat show more ,current arata de la 5 la 30 items si trebuie din 5 in 5
  const { addMoreItems } = useAddItems(setLimit, totalRows, setSearchParams);

  // fetching activity devices
  useGetActivityDevice(setLoading, setActivity, serverPage);

  // fetching total rows of activity devices history
  useGetTotalRows(setTotalRows, "login");
  useLayoutActivityDevice(ref, setMaxH, activity, limit);

  const data = activity.slice(0, limit);

  const dataPaginated = useClientPagination(activity, uiPage, limit, 30);
  if (loading) return <ActiveDeviceSkeleton />;

  if (!activity.length) {
    return <div>No device activity yet</div>;
  }

  return (
    <div className="w-full h-full bg-(--background-container) text-(--text-primary) rounded-md p-2">
      <div className="header">
        <Title />
        <ActiveDevicesCounter rowsVisible={totalRows} />
      </div>
      <ActiveDeviceLayout limit={limit} ref={ref}>
        {dataPaginated.map((a, i) => {
          const deviceLabel =
            a.deviceModel ||
            (a.deviceType === "mobile" ? "📱 Mobile device" : "💻 Desktop");

          return (
            <ActiveDeviceCard
              key={a.id ?? i}
              deviceLabel={deviceLabel}
              {...a}
            />
          );
        })}
      </ActiveDeviceLayout>
      {limit < totalRows && (
        <ExpendActiveDevicesButton
          dataSliced={data.length}
          limit={limit}
          totalRows={totalRows}
          addMoreItems={addMoreItems}
        />
      )}
    </div>
  );
};

export default ActiveDevices;
