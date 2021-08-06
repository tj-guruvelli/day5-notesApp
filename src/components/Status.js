function Status({ status }) {
  return (
    <div
      className="mb-6 text-xl text-white
    animate-pulse
    inline-block
    text-center
    py-1 px-4
    font-bold"
    >
      Changes: {status}
    </div>
  );
}

export default Status;
