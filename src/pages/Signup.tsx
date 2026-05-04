import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-white px-6">

      {/* BACK BUTTON */}
      <div className="absolute top-6 left-6">
        <div
          onClick={() => navigate("/")}
          className="w-12 h-12 border border-[#2DCC70] rounded-full flex items-center justify-center text-[#2DCC70] text-xl cursor-pointer"
        >
          ←
        </div>
      </div>

      {/* LOGO */}
      <img src="/logo.png" className="w-36 mb-3" />

      {/* TITLE */}
      <h1 className="text-[#2DCC70] text-4xl font-bold mb-8">
        Create Your Account
      </h1>

      {/* INPUT EMAIL */}
      <input
        type="email"
        placeholder="Email address"
        className="w-full max-w-sm p-5 mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
      />

      {/* INPUT PASSWORD */}
      <input
        type="password"
        placeholder="Password"
        className="w-full max-w-sm p-5 mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
      />

      {/* REPEAT PASSWORD */}
      <input
        type="password"
        placeholder="Repeat Password"
        className="w-full max-w-sm p-5 mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
      />

      {/* COMPANY NAME */}
      <input
        type="text"
        placeholder="Company Name"
        className="w-full max-w-sm p-5 mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
      />

      {/* LOCATION */}
      <input
        type="text"
        placeholder="Location"
        className="w-full max-w-sm p-5 mb-6 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
      />

      {/* BUTTON */}
      <button className="w-full max-w-sm py-5 rounded-full bg-[#2DCC70] text-white text-lg font-medium">
        Sign up
      </button>

    </div>
  );
}