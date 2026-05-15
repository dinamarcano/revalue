import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import { signIn } from "../services/auth.service";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(UserContext)!;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      return;
    }

    setIsLoading(true);
    setError("");

    const { data, error: authError } = await signIn(email, password);

    setIsLoading(false);

    if (authError) {
      setError(authError.message);
      return;
    }

    if (data.user) {
      login({
        email: data.user.email!,
        company: data.user.user_metadata?.company,
        ubication: data.user.user_metadata?.ubication,
        profileImage: null,
      });
    }

    navigate("/home");
  };

  return (
    <AuthForm
      title="Welcome Back"
      buttonText="Sign in"
      loadingText="Signing in..."
      isLoading={isLoading}
      error={error}
      onSubmit={handleLogin}
      onBack={() => navigate("/choose-type")}
      footer={
        <>
          <p className="text-[#A1A4B2] mt-6 text-sm">
            Forgot your password?
          </p>
          <p className="text-[#A1A4B2] mt-2 text-sm text-center">
            Don't have an account?{" "}
            <span
              className="text-[#2EBB4E] cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Sign up
            </span>
          </p>
        </>
      }
    >
      <input
        type="email"
        placeholder="Email address"
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-4 md:p-5 mb-4 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-4 md:p-5 mb-6 rounded-2xl bg-[#F2F3F7] placeholder:text-[#A1A4B2] outline-none"
      />
    </AuthForm>
  );
}
