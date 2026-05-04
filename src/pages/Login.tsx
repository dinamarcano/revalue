import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    const savedUser = localStorage.getItem("user");

    if (!savedUser) {
      setError("No account found");
      return;
    }

    const user = JSON.parse(savedUser);

    if (email === user.email && password === user.password) {
      setError("");
      alert("Login successful ✅");
    } else {
      setError("Incorrect email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-6">

      {/* BACK BUTTON (AHORA GLOBAL) */}
      <div className="fixed top-6 left-6">
        <div className="w-12 h-12 border border-[#2DCC70] rounded-full flex items-center justify-center text-[#2DCC70] text-xl cursor-pointer">
          ←
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="w-full max-w-sm flex flex-col items-center">

        {/* LOGO */}
        <img src="/logo.png" className="w-36 mb-4" />

        {/* TITLE */}
        <h1 className="text-[#2DCC70] text-4xl font-bold mb-8">
          Welcome Back
        </h1>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 mb-4 text-sm">{error}</p>
        )}

        {/* INPUT EMAIL */}
        <input
          type="email"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-5 mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
        />

        {/* INPUT PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-5 mb-6 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full py-5 rounded-full bg-[#2DCC70] text-white text-lg font-medium"
        >
          Sign in
        </button>

        {/* LINKS */}
        <p className="text-[#A1A4B2] mt-6 text-sm">
          Forgot your password?
        </p>

        <p className="text-[#A1A4B2] mt-2 text-sm">
          Don’t have an account?{" "}
          <span
            className="text-[#2DCC70] cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}