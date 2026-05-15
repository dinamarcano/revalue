interface AuthFormProps {
  title: string;
  buttonText: string;
  loadingText?: string;
  isLoading: boolean;
  error: string;
  onSubmit: () => void;
  onBack: () => void;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export default function AuthForm({
  title,
  buttonText,
  loadingText = "Loading...",
  isLoading,
  error,
  onSubmit,
  onBack,
  children,
  footer,
}: AuthFormProps) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-6">

      {/* BACK BUTTON */}
      <div
        className="fixed top-6 left-6 z-20"
        onClick={onBack}
      >
        <div className="w-12 h-12 border border-[#2EBB4E] rounded-full flex items-center justify-center text-[#2EBB4E] text-xl cursor-pointer">
          ←
        </div>
      </div>

      {/* CONTENT */}
      <div className="w-full max-w-sm flex flex-col items-center">

        {/* LOGO */}
        <img
          src="/logo.png"
          className="w-28 md:w-36 mb-4"
        />

        {/* TITLE */}
        <h1 className="text-[#2EBB4E] text-3xl md:text-4xl font-bold mb-8 text-center">
          {title}
        </h1>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 mb-4 text-sm text-center">
            {error}
          </p>
        )}

        {/* INPUTS */}
        {children}

        {/* SUBMIT BUTTON */}
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="w-full py-4 md:py-5 rounded-full bg-[#2EBB4E] text-white text-base md:text-lg font-medium disabled:opacity-60"
        >
          {isLoading ? loadingText : buttonText}
        </button>

        {/* FOOTER */}
        {footer}

      </div>
    </div>
  );
}
