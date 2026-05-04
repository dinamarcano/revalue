import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    // VALIDACIONES
    if (!email || !password || !repeatPassword || !company || !location) {
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

    // GUARDAR EN LOCALSTORAGE
    const user = { email, password, company, location };
    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully ✅");
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-6">

      {/* BACK */}
      <div className="absolute top-6 left-6">
        <div
          onClick={() => navigate("/")}
          className="w-12 h-12 border border-[#2DCC70] rounded-full flex items-center justify-center text-[#2DCC70] text-xl cursor-pointer"
        >
          ←
        </div>
      </div>

      <img src="/logo.png" className="w-36 mb-3" />

      <h1 className="text-[#2DCC70] text-4xl font-bold mb-6">
        Create Your Account
      </h1>

      {/* ERROR */}
      {error && (
        <p className="text-red-500 mb-4 text-sm">{error}</p>
      )}

      <input
        type="email"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full max-w-sm p-5 mb-4 rounded-2xl bg-[#F2F3F7] outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full max-w-sm p-5 mb-4 rounded-2xl bg-[#F2F3F7] outline-none"
      />

      <input
        type="password"
        placeholder="Repeat Password"
        onChange={(e) => setRepeatPassword(e.target.value)}
        className="w-full max-w-sm p-5 mb-4 rounded-2xl bg-[#F2F3F7] outline-none"
      />

      <input
        type="text"
        placeholder="Company Name"
        onChange={(e) => setCompany(e.target.value)}
        className="w-full max-w-sm p-5 mb-4 rounded-2xl bg-[#F2F3F7] outline-none"
      />

      <input
        type="text"
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
        className="w-full max-w-sm p-5 mb-6 rounded-2xl bg-[#F2F3F7] outline-none"
      />

      <button
        onClick={handleSignup}
        className="w-full max-w-sm py-5 rounded-full bg-[#2DCC70] text-white text-lg"
      >
        Sign up
      </button>

    </div>
  );
}