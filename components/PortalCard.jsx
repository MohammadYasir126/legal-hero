export default function PortalCard() {
  return (
    <div className="bg-[#aaa5f4] dark:bg-[#2b2950] rounded-full px-5 py-4 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] w-[240px]">

      <div className="w-[3px] h-10 bg-[#e67f22] rounded-full" />

      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-[#efc27f] flex items-center justify-center text-sm font-semibold text-[#222]">
          JD
        </div>

        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#5eff8d] rounded-full border-2 border-white" />
      </div>

      <div>
        <p className="text-[12px] font-semibold text-[#2f2f45] dark:text-white">
          John Doe - Portal
        </p>

        <p className="text-[9px] text-[#6d6d86] dark:text-[#b7b7d0] leading-4 mt-1">
          Hey! Could you please review a
          document for me?
        </p>

        <p className="text-[8px] mt-1 text-[#8d8daa]">
          MAT-223 • 2 h ago
        </p>
      </div>
    </div>
  );
}