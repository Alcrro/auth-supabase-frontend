export const SkeletonCard = () => (
  <div className={`p-2 rounded-xl bg-(--background-container)`}>
    <div
      style={{ display: "flex", justifyContent: "space-between", gap: ".5rem" }}
    >
      <div style={skeletonLine("140px", "16px")} />
      <div style={skeletonLine("60px", "16px")} />
    </div>
    <div
      style={{
        marginTop: "8px",
        paddingBlock: "8px",
        ...skeletonLine("120px"),
      }}
    />
    <div
      style={{
        marginTop: "8px",
        paddingBlock: "8px",
        ...skeletonLine("160px"),
      }}
    />
    <div
      style={{
        marginTop: "8px",
        paddingBlock: "8px",
        ...skeletonLine("100px"),
      }}
    />
    <div
      style={{ marginTop: "8px", paddingBlock: "8px", ...skeletonLine("80px") }}
    />
    <div
      style={{
        marginTop: "8px",
        paddingBlock: "8px",
        ...skeletonLine("220px"),
      }}
    />
  </div>
);

const skeletonPulse = {
  animation: "pulse 1.5s ease-in-out infinite",
  background: "var(--text-secondary)",
  borderRadius: "6px",
};

const skeletonLine = (width: string, height = "12px") => ({
  ...skeletonPulse,
  width,
  height,
});
