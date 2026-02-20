import React, { type FC } from "react";
interface IEmptyStateProps {
  message: string;
}
const EmptyState: FC<IEmptyStateProps> = ({ message }) => {
  return (
    <div role="status" className="empty-state">
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
