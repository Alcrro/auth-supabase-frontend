const LoadingSpinner = ({ className }: { className: string }) => {
  return (
    <div className={`rounded-full border-b animate-spin ${className}`}></div>
  );
};

export default LoadingSpinner;
