import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [company, setCompany] = useState("");
  const [ubication, setUbication] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email || !password || !repeatPassword || !company || !ubication) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    if (password !== repeatPassword) {
      setError("Passwords do not match");
      return;
    }

    const user = {
      email,
      password,
      company,
      ubication,
    };

    localStorage.setItem("user", JSON.stringify(user));

    setError("");
    alert("Registration successful ✅");

    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-6">

      {/* BACK BUTTON */}
      <div
        className="fixed top-4 left-4 md:top-6 md:left-6"
        onClick={() => navigate("/login")}
      >
        <div className="w-10 h-10 md:w-12 md:h-12 border border-[#2DCC70] rounded-full flex items-center justify-center text-[#2DCC70] text-lg md:text-xl cursor-pointer">
          ←
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="w-full max-w-sm flex flex-col items-center">

        {/* LOGO */}
        <img
          src="/logo.png"
          className="w-24 md:w-36 mb-2 md:mb-4"
        />

        {/* TITLE */}
        <h1 className="text-[#2DCC70] text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
          Create Your Account
        </h1>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 mb-4 text-sm">{error}</p>
        )}

        {/* INPUTS */}
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 md:p-5 mb-3 md:mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 md:p-5 mb-3 md:mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
        />

        <input
          type="password"
          placeholder="Repeat Password"
          onChange={(e) => setRepeatPassword(e.target.value)}
          className="w-full p-4 md:p-5 mb-3 md:mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
        />

        <input
          type="text"
          placeholder="Company Name"
          onChange={(e) => setCompany(e.target.value)}
          className="w-full p-4 md:p-5 mb-3 md:mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
        />

        <input
          type="text"
          placeholder="Ubication"
          onChange={(e) => setUbication(e.target.value)}
          className="w-full p-4 md:p-5 mb-5 md:mb-6 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
        />

        {/* BUTTON */}
        <button
          onClick={handleSignup}
          className="w-full py-4 md:py-5 rounded-full bg-[#2DCC70] text-white text-base md:text-lg font-medium"
        >
          Sign up
        </button>

      </div>
    </div>
  );
}