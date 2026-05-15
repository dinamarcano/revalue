interface EmptyStateProps {
  message: string;
}

export default function EmptyState({
  message,
}: EmptyStateProps) {
  return (
    <div className="flex items-center justify-center py-16 bg-white rounded-[20px] shadow-md">
      <p className="text-[#A1A4B2] text-lg md:text-xl text-center px-6">
        {message}
      </p>
    </div>
  );
}
