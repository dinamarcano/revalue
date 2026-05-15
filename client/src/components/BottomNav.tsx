import {
  useNavigate,
  useLocation,
} from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const isActive = pathname === "/home";

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        w-full
        h-[70px]
        bg-[#2DCC70]
        flex
        justify-center
        items-start
        z-50
        rounded-t-[25px]
      "
    >

      {/* HOME BUTTON */}
      <button
        onClick={() => navigate("/home")}
        className={`
          -mt-5
          w-[70px]
          h-[70px]
          rounded-full
          flex
          flex-col
          items-center
          justify-center
          shadow-md
          transition
          hover:scale-105
          ${
            isActive
              ? "bg-[#2DCC70] text-white"
              : "bg-[#27B863] text-white/70"
          }
        `}
      >

        <span className="text-2xl leading-none">
          ⌂
        </span>

        <span className="text-[11px] font-semibold">
          Home
        </span>

      </button>

    </div>
  );
}