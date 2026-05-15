import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signUp } from "../services/auth.service";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [company, setCompany] = useState("");
  const [ubication, setUbication] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
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

    setIsLoading(true);
    setError("");

    const { error: authError } = await signUp(email, password, {
      company,
      ubication,
    });

    setIsLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    // Save non-sensitive profile data for Profile page — no password stored.
    localStorage.setItem(
      "user",
      JSON.stringify({ email, company, ubication })
    );

    navigate("/login");
  };

  return (
    <AuthForm
      title="Create Your Account"
      buttonText="Sign up"
      loadingText="Creating account..."
      isLoading={isLoading}
      error={error}
      onSubmit={handleSignup}
      onBack={() => navigate("/login")}
    >
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
    </AuthForm>
  );
}
