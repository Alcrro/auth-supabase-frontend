const SessionProfile = ({ image }: { image: string }) => {
  return (
    <img
      src={image}
      alt={"profile"}
      referrerPolicy={"no-referrer"}
      style={{
        margin: "2rem auto",
        width: 120,
        height: 120,
        borderRadius: "50%",
      }}
    ></img>
  );
};

export default SessionProfile;
