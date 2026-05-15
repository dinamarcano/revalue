import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav";

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  avatarColor: string;
  isCurrentUser?: boolean;
}

const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Maria G.",  score: 2840, avatarColor: "#FF6B6B" },
  { rank: 2, name: "Carlos M.", score: 2210, avatarColor: "#4ECDC4" },
  { rank: 3, name: "Ana P.",    score: 1980, avatarColor: "#45B7D1" },
  { rank: 4, name: "Luis R.",   score: 1650, avatarColor: "#96CEB4" },
  { rank: 5, name: "Sofia L.",  score: 1340, avatarColor: "#F7DC6F" },
  { rank: 6, name: "Diego F.",  score: 980,  avatarColor: "#DDA0DD" },
  { rank: 7, name: "You",       score: 720,  avatarColor: "#2EBB4E", isCurrentUser: true },
];

function Shield({
  color,
  size,
  elevated,
}: {
  color: string;
  size: number;
  elevated: boolean;
}) {
  const h = Math.round(size * 1.15);
  return (
    <div
      style={{ marginBottom: elevated ? 0 : 24 }}
      className="flex items-end"
    >
      <svg
        width={size}
        height={h}
        viewBox="0 0 80 92"
      >
        <path
          d="M40 4 L76 18 L76 56 Q76 84 40 90 Q4 84 4 56 L4 18 Z"
          fill={color}
        />
        {/* White four-pointed star */}
        <path
          d="M40 28 L43 37 L52 40 L43 43 L40 52 L37 43 L28 40 L37 37 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default function Progress() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col pb-28">

      {/* TOP BAR */}
      <div className="flex items-center justify-between px-5 pt-8 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="text-[#2EBB4E] text-base font-semibold"
        >
          ← Back
        </button>
        <h1 className="text-xl font-semibold text-black">
          Progress
        </h1>
        <div className="w-12" />
      </div>

      {/* SHIELDS PODIUM */}
      <div className="flex items-end justify-center gap-4 px-8 pt-6 pb-2">

        {/* Left — Silver (smaller) */}
        <Shield color="#C0C0C0" size={70} elevated={false} />

        {/* Center — Bronze (largest, elevated) */}
        <div className="-mb-2">
          <Shield color="#CD7F32" size={100} elevated={true} />
        </div>

        {/* Right — Gold (smaller) */}
        <Shield color="#FFD700" size={70} elevated={false} />

      </div>

      {/* BRONZE LABEL */}
      <p
        className="text-center font-extrabold text-black mt-1 mb-6"
        style={{ fontSize: 34 }}
      >
        BRONZE
      </p>

      {/* LEADERBOARD */}
      <div className="px-4 flex flex-col gap-0">

        {leaderboard.map((entry) => (
          <div
            key={entry.rank}
            className={`
              flex items-center px-4 py-3 rounded-[20px]
              ${entry.isCurrentUser
                ? "bg-[#2EBB4E]"
                : "bg-white border-b border-gray-100"}
            `}
          >

            {/* RANK */}
            <span
              className={`
                w-8 text-sm font-semibold
                ${entry.isCurrentUser ? "text-white" : "text-gray-400"}
              `}
            >
              {entry.rank}
            </span>

            {/* AVATAR */}
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 flex-shrink-0"
              style={{ backgroundColor: entry.isCurrentUser ? "rgba(255,255,255,0.3)" : entry.avatarColor }}
            >
              {entry.name.charAt(0)}
            </div>

            {/* NAME */}
            <span
              className={`
                flex-1 text-sm font-medium
                ${entry.isCurrentUser ? "text-white" : "text-black"}
              `}
            >
              {entry.name}
            </span>

            {/* SCORE */}
            <span
              className={`
                text-sm font-semibold
                ${entry.isCurrentUser ? "text-white" : "text-[#2EBB4E]"}
              `}
            >
              {entry.score.toLocaleString()}
            </span>

          </div>
        ))}

      </div>

      <BottomNav />

    </div>
  );
}
