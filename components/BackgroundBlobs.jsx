export default function BackgroundBlobs() {
  return (
    <>
      {/* RIGHT */}
      <div className="absolute top-[80px] right-[-40px] w-[280px] h-[52px] bg-[#dfe3f1] dark:bg-[#1d2235] rounded-full opacity-60" />

      <div className="absolute top-[220px] right-[-30px] w-[360px] h-[52px] bg-[#dfe3f1] dark:bg-[#1d2235] rounded-full opacity-60" />

      <div className="absolute top-[330px] right-[-40px] w-[260px] h-[52px] bg-[#dfe3f1] dark:bg-[#1d2235] rounded-full opacity-60" />

      {/* LEFT */}
      <div className="absolute left-[-50px] top-[250px] w-[140px] h-[52px] bg-[#dfe3f1] dark:bg-[#1d2235] rounded-full opacity-60" />

      <div className="absolute left-[-20px] top-[360px] w-[150px] h-[52px] bg-[#dfe3f1] dark:bg-[#1d2235] rounded-full opacity-60" />

      <div className="absolute left-[-10px] bottom-[60px] w-[280px] h-[52px] bg-[#dfe3f1] dark:bg-[#1d2235] rounded-full opacity-60" />
    </>
  );
}