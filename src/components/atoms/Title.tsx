import type { FC } from "preact/compat";

interface TitleProps {
  description: string;
}
const Title: FC<TitleProps> = ({ description }) => {
  return (
    <div className="title text-2xl text-center pb-2 text-(--text-primary)">
      {description}
    </div>
  );
};

export default Title;
