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

const ActiveDevices = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activity, setActivity] = useState<ActiveDevice[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalRows, setTotalRows] = useState<number>(0);
  const initialLimit = Number(searchParams.get("limit") ?? 1);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState<number>(initialLimit);

  const [_maxH, setMaxH] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const data = activity.slice(0, limit);
  // extend limit to fetch more devices history
  const { addMoreItems } = useAddItems(
    setLimit,
    setPage,
    activity.length,
    totalRows,
    setSearchParams,
  );

  // fetching activity devices
  useGetActivityDevice(setLoading, setActivity, page);

  // fetching total rows of activity devices history
  useGetTotalRows(setTotalRows);
  useLayoutActivityDevice(ref, setMaxH, activity, limit);

  if (loading) return <ActiveDeviceSkeleton />;

  if (!activity.length) {
    return <div>No device activity yet</div>;
  }

  return (
    <div className="activities relative z-10">
      <div className="header">
        <Title />
        <ActiveDevicesCounter rowsVisible={data.length} />
      </div>
      <ActiveDeviceLayout limit={limit} ref={ref}>
        {data.map((a, i) => {
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
      {totalRows > 1 && (
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
