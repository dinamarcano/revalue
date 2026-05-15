import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ScanQR() {
  const navigate = useNavigate();
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);
    setTimeout(() => navigate("/success"), 2000);
  };

  return (
    <div className="min-h-screen bg-black/95 flex flex-col items-center justify-center px-6 gap-10">

      {/* QR FRAME */}
      <div className="relative">

        {/* White card */}
        <div className="bg-white rounded-[20px] w-64 h-64 flex items-center justify-center overflow-hidden">

          {/* QR SVG placeholder */}
          <svg viewBox="0 0 100 100" width="200" height="200">
            {/* Top-left finder */}
            <rect x="5" y="5" width="28" height="28" rx="3" fill="none" stroke="#000" strokeWidth="4"/>
            <rect x="11" y="11" width="16" height="16" fill="#000"/>
            {/* Top-right finder */}
            <rect x="67" y="5" width="28" height="28" rx="3" fill="none" stroke="#000" strokeWidth="4"/>
            <rect x="73" y="11" width="16" height="16" fill="#000"/>
            {/* Bottom-left finder */}
            <rect x="5" y="67" width="28" height="28" rx="3" fill="none" stroke="#000" strokeWidth="4"/>
            <rect x="11" y="73" width="16" height="16" fill="#000"/>
            {/* Data modules */}
            <rect x="40" y="5" width="6" height="6" fill="#000"/>
            <rect x="50" y="5" width="6" height="6" fill="#000"/>
            <rect x="40" y="15" width="14" height="6" fill="#000"/>
            <rect x="57" y="15" width="6" height="6" fill="#000"/>
            <rect x="40" y="25" width="6" height="6" fill="#000"/>
            <rect x="50" y="25" width="6" height="6" fill="#000"/>
            <rect x="5" y="40" width="6" height="6" fill="#000"/>
            <rect x="15" y="40" width="14" height="6" fill="#000"/>
            <rect x="5" y="50" width="14" height="6" fill="#000"/>
            <rect x="23" y="50" width="6" height="6" fill="#000"/>
            <rect x="5" y="57" width="6" height="6" fill="#000"/>
            <rect x="40" y="40" width="6" height="6" fill="#000"/>
            <rect x="50" y="40" width="6" height="6" fill="#000"/>
            <rect x="60" y="40" width="6" height="6" fill="#000"/>
            <rect x="40" y="50" width="14" height="6" fill="#000"/>
            <rect x="60" y="50" width="6" height="6" fill="#000"/>
            <rect x="40" y="60" width="6" height="6" fill="#000"/>
            <rect x="50" y="60" width="6" height="6" fill="#000"/>
            <rect x="67" y="40" width="14" height="6" fill="#000"/>
            <rect x="85" y="40" width="8" height="6" fill="#000"/>
            <rect x="67" y="50" width="6" height="6" fill="#000"/>
            <rect x="77" y="50" width="14" height="6" fill="#000"/>
            <rect x="67" y="60" width="14" height="6" fill="#000"/>
            <rect x="40" y="70" width="6" height="6" fill="#000"/>
            <rect x="50" y="70" width="6" height="6" fill="#000"/>
            <rect x="60" y="70" width="6" height="6" fill="#000"/>
            <rect x="40" y="80" width="14" height="6" fill="#000"/>
            <rect x="57" y="80" width="6" height="6" fill="#000"/>
            <rect x="40" y="88" width="6" height="6" fill="#000"/>
            <rect x="67" y="70" width="6" height="6" fill="#000"/>
            <rect x="77" y="70" width="14" height="6" fill="#000"/>
            <rect x="67" y="80" width="14" height="6" fill="#000"/>
            <rect x="85" y="80" width="8" height="6" fill="#000"/>
            <rect x="67" y="88" width="14" height="6" fill="#000"/>
          </svg>

          {/* Scanning line animation */}
          {scanning && (
            <div className="absolute inset-0 flex flex-col justify-center pointer-events-none">
              <div
                className="w-full h-0.5 bg-[#2EBB4E]"
                style={{ animation: "scanLine 1s ease-in-out infinite alternate" }}
              />
            </div>
          )}

        </div>

        {/* Corner brackets — outside the card */}
        <div className="absolute -top-3 -left-3 w-10 h-10 border-t-[3px] border-l-[3px] border-[#2EBB4E] rounded-tl-sm" />
        <div className="absolute -top-3 -right-3 w-10 h-10 border-t-[3px] border-r-[3px] border-[#2EBB4E] rounded-tr-sm" />
        <div className="absolute -bottom-3 -left-3 w-10 h-10 border-b-[3px] border-l-[3px] border-[#2EBB4E] rounded-bl-sm" />
        <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-[3px] border-r-[3px] border-[#2EBB4E] rounded-br-sm" />

      </div>

      {/* FLASHLIGHT */}
      <button className="text-white text-4xl opacity-80 hover:opacity-100 transition">
        💡
      </button>

      {/* SCAN BUTTON */}
      <button
        onClick={handleScan}
        disabled={scanning}
        className="
          flex items-center gap-3
          bg-[#2EBB4E] text-white
          rounded-full px-8 py-4
          text-base font-semibold
          disabled:opacity-60
          transition hover:scale-[1.02]
        "
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <rect x="1" y="1" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2"/>
          <rect x="14" y="1" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2"/>
          <rect x="1" y="14" width="7" height="7" rx="1.5" stroke="white" strokeWidth="2"/>
          <rect x="14" y="14" width="4" height="4" fill="white"/>
          <rect x="14" y="10" width="4" height="4" fill="white"/>
          <rect x="18" y="14" width="3" height="3" fill="white"/>
        </svg>
        {scanning ? "Scanning..." : "Scan QR Code"}
      </button>

      <style>{`
        @keyframes scanLine {
          from { transform: translateY(-80px); }
          to   { transform: translateY(80px); }
        }
      `}</style>

    </div>
  );
}
