import { cn } from "../../../../shared/utils/cn";

const SessionProfile = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <img
      src={image}
      alt={"profile"}
      referrerPolicy={"no-referrer"}
      className={`p-2 mx-auto w-30 h-30 rounded-full ${cn()}`}
    ></img>
  );
};

export default SessionProfile;
