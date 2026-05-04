import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseType() {
  const navigate = useNavigate();

  const [type, setType] = useState<"gatherer" | "allies" | null>(() => {
    const savedType = localStorage.getItem("userType");
    if (savedType === "gatherer" || savedType === "allies") {
      return savedType;
    }
    return null;
  });

  const [step, setStep] = useState<"choose" | "selected">(() => {
    const savedType = localStorage.getItem("userType");
    return savedType === "allies" ? "selected" : "choose";
  });

  const handleSelect = (selected: "gatherer" | "allies") => {
    if (selected === "gatherer") {
      alert("Coming soon 🚧");
      return;
    }

    setType(selected);
    setStep("selected");
    localStorage.setItem("userType", selected);
  };

  const handleBack = () => {
    setStep("choose");
    setType(null);
    localStorage.removeItem("userType");
  };

  return (
    <div className="min-h-screen bg-[#2DCC70] flex flex-col justify-between">

      {/* BACK BUTTON */}
      {step === "selected" && (
        <div
          onClick={handleBack}
          className="fixed top-6 left-6 z-20 cursor-pointer"
        >
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white text-xl">
            ←
          </div>
        </div>
      )}

      {/* TOP */}
      <div className="flex flex-col items-center pt-20 px-6 text-center">

        {/* LOGO GRANDE */}
        <img
          src="/logo-white.png"
          className="w-64 mb-12"
        />

        {/* TEXTO */}
        <h1 className="text-white text-xl font-semibold">
          {step === "choose"
            ? "Start helping the world"
            : type === "gatherer"
            ? "Gatherer"
            : "Allies"}
        </h1>
      </div>

      {/* PANEL BLANCO GRANDE */}
      <div className="bg-white rounded-t-[50px] pt-10 pb-16 px-6 flex flex-col items-center">

        {/* DOTS */}
        <div className="flex gap-2 mb-10">
          <div className={`w-3 h-3 rounded-full ${step === "choose" ? "bg-[#2DCC70]" : "bg-gray-300"}`} />
          <div className={`w-3 h-3 rounded-full ${step === "selected" ? "bg-[#2DCC70]" : "bg-gray-300"}`} />
        </div>

        {/* BOTONES */}
        {step === "choose" ? (
          <>
            <button
              onClick={() => handleSelect("gatherer")}
              className="w-full max-w-xs py-4 mb-4 rounded-2xl bg-[#2DCC70]/40 text-white text-lg font-semibold cursor-not-allowed"
            >
              Gatherers
            </button>

            <button
              onClick={() => handleSelect("allies")}
              className="w-full max-w-xs py-4 rounded-2xl bg-[#1E4D2B] text-white text-lg font-semibold"
            >
              Allies
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="w-full max-w-xs py-4 mb-4 rounded-2xl bg-[#2DCC70] text-white text-lg font-semibold"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="w-full max-w-xs py-4 rounded-2xl bg-[#1E4D2B] text-white text-lg font-semibold"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
}