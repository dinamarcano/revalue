import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";

interface Machine {
  bottles: number;
  address: string;
  activity: string;
}

interface Campaign {
  status: string;
  image: string | null;
  title: string;
  reward: string;
  machineAddress: string;
  background: string;
  textColor: string;
}

export default function Home() {
  const navigate = useNavigate();

  const { logout } = useContext(UserContext)!;

  const machines: Machine[] = JSON.parse(
    localStorage.getItem("machines") || "[]"
  );

  const campaigns: Campaign[] = JSON.parse(
    localStorage.getItem("campaigns") || "[]"
  );

  const totalForDay = machines.reduce(
    (sum, m) => sum + m.bottles,
    0
  );

  const totalForWeek = totalForDay * 7;

  const featuredCampaign =
    campaigns[0] ?? null;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center">

      {/* CONTENEDOR */}
      <div className="w-full max-w-[1200px] px-4 md:px-10 py-6 md:py-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">

          {/* LOGOUT */}
          <button
            onClick={handleLogout}
            className="text-[#2DCC70] text-base md:text-lg"
          >
            ← Log out
          </button>

          {/* PROFILE BUTTON */}
          <button
            onClick={() =>
              navigate("/profile")
            }
            className="w-12 h-12 rounded-full border-2 border-[#2DCC70] flex items-center justify-center text-[#2DCC70] text-xl hover:bg-[#2DCC70] hover:text-white transition"
          >
            👤
          </button>

        </div>

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 md:mb-10 leading-none">
          My campaigns
        </h1>

        {/* CAMPAIGN CARD */}
        {featuredCampaign ? (
          <div className="bg-white rounded-[35px] shadow-md overflow-hidden mb-10">

            {/* TOP */}
            <div
              className="relative flex items-center justify-between px-5 md:px-10 py-8 md:py-10 min-h-[180px] md:min-h-[240px] overflow-hidden"
              style={{
                backgroundColor:
                  featuredCampaign.background,
              }}
            >

              {/* IMAGE */}
              <img
                src={
                  featuredCampaign.image ||
                  "/campaign.png"
                }
                className="w-[120px] md:w-[260px] object-contain"
              />

              {/* TEXT */}
              <h2
                className={`${featuredCampaign.textColor} text-3xl md:text-5xl font-bold text-right leading-tight`}
              >
                {featuredCampaign.reward}
              </h2>

            </div>

            {/* BOTTOM */}
            <div className="p-5 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">

              <h3 className="text-2xl md:text-4xl font-semibold text-black leading-tight max-w-[700px]">
                {featuredCampaign.title}
              </h3>

              <button
                onClick={() =>
                  navigate("/edit")
                }
                className="bg-[#2DCC70] text-white px-7 py-3 rounded-2xl text-xl md:text-2xl font-semibold w-full md:w-auto"
              >
                EDIT
              </button>

            </div>

          </div>
        ) : (
          <div className="bg-white rounded-[35px] shadow-md p-10 text-center mb-10">

            <h2 className="text-3xl font-bold mb-4">
              No campaigns yet
            </h2>

            <p className="text-gray-500 mb-8">
              Create your first campaign
            </p>

            <button
              onClick={() =>
                navigate("/create-campaign")
              }
              className="
                bg-[#2DCC70]
                text-white
                px-8
                py-4
                rounded-2xl
                text-xl
                font-semibold
                hover:scale-105
                transition
              "
            >
              Create Campaign
            </button>

          </div>
        )}

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">

          {/* WEEK */}
          <div className="bg-white shadow-md rounded-[30px] p-6 md:p-8 text-center">

            <p className="text-xl md:text-2xl mb-3">
              Total for the week
            </p>

            <h2 className="text-6xl md:text-7xl font-bold leading-none mb-3">
              {totalForWeek}
            </h2>

            <p className="text-xl md:text-2xl font-semibold">
              <span className="text-[#2DCC70]">
                Recycled
              </span>{" "}
              bottles
            </p>

          </div>

          {/* DAY */}
          <div className="bg-white shadow-md rounded-[30px] p-6 md:p-8 text-center">

            <p className="text-xl md:text-2xl mb-3">
              Total for the day
            </p>

            <h2 className="text-6xl md:text-7xl font-bold leading-none mb-3">
              {totalForDay}
            </h2>

            <p className="text-xl md:text-2xl font-semibold">
              <span className="text-[#2DCC70]">
                Recycled
              </span>{" "}
              bottles
            </p>

          </div>

        </div>

        {/* MACHINES TITLE */}
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
          Machines
        </h1>

        {/* MACHINE CARD */}
        <button
          onClick={() =>
            navigate("/machines")
          }
          className="w-full bg-white rounded-[35px] shadow-md overflow-hidden"
        >
          <img
            src="/machines3.png"
            className="w-full h-[240px] md:h-[420px] object-cover hover:scale-[1.02] transition duration-300"
          />
        </button>

      </div>
    </div>
  );
}