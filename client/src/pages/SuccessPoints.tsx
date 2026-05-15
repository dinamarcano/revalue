import { useNavigate } from "react-router-dom";

export default function SuccessPoints() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-8 gap-5">

      {/* TITLE */}
      <h1
        className="font-extrabold text-[#2EBB4E]"
        style={{ fontSize: 34 }}
      >
        Success
      </h1>

      {/* SUBTITLE */}
      <p className="text-gray-400 text-sm text-center">
        You completed the goal for a reward
      </p>

      {/* CHECKMARK CIRCLE */}
      <div
        className="w-[120px] h-[120px] rounded-full border-[5px] border-[#2EBB4E] flex items-center justify-center mt-4"
      >
        <span
          className="text-[#2EBB4E] font-bold select-none"
          style={{ fontSize: 48 }}
        >
          ✓
        </span>
      </div>

      {/* POINTS */}
      <div className="flex flex-col items-center mt-4">
        <span
          className="font-extrabold text-[#2EBB4E] leading-none"
          style={{ fontSize: 42 }}
        >
          +3
        </span>
        <span
          className="font-extrabold text-[#2EBB4E]"
          style={{ fontSize: 28 }}
        >
          POINTS
        </span>
      </div>

      {/* CONTINUE BUTTON */}
      <button
        onClick={() => navigate("/home")}
        className="
          mt-8
          bg-[#2EBB4E] text-white
          rounded-full px-12 py-4
          text-base font-semibold
          transition hover:scale-[1.02]
        "
      >
        CONTINUE
      </button>

    </div>
  );
}
