import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CampaignCard from "../components/CampaignCard";
import BottomNav from "../components/BottomNav";

export default function EditCampaign() {
  const navigate = useNavigate();

  const [campaignOne, setCampaignOne] = useState<"ON" | "OFF">("ON");
  const [campaignTwo, setCampaignTwo] = useState<"ON" | "OFF">("OFF");

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center pb-28">

      {/* CONTAINER */}
      <div className="w-full max-w-[1200px] px-4 md:px-10 py-6 md:py-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">

          {/* BACK */}
          <button
            onClick={() => navigate("/home")}
            className="text-[#2DCC70] text-base md:text-lg"
          >
            ← Back
          </button>

          {/* PROFILE */}
          <button
            onClick={() => navigate("/profile")}
            className="
              w-11
              h-11
              rounded-full
              border-2
              border-[#2DCC70]
              flex
              items-center
              justify-center
              text-[#2DCC70]
              text-lg
              transition
              hover:bg-[#2DCC70]
              hover:text-white
            "
          >
            👤
          </button>
        </div>

        {/* TITLE */}
        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            text-black
            mb-8
            md:mb-10
            leading-none
          "
        >
          My campaigns
        </h1>

        {/* FIRST CAMPAIGN */}
        <div className="mb-8">

          <CampaignCard
            status={campaignOne}
            image="/campaign.png"
            title="Recycle 15 bottles today"
            reward="EARN 15 POINTS"
            background="#2DCC70"
            textColor="text-white"
            onToggle={() =>
              setCampaignOne(
                campaignOne === "ON" ? "OFF" : "ON"
              )
            }
          />

        </div>

        {/* SECOND CAMPAIGN */}
        <div className="mb-12">

          <CampaignCard
            status={campaignTwo}
            image="/Group 37014.png"
            title="Recycle 12 bottles today"
            reward="EARN 15% DISCOUNT"
            background="#FFFBBC"
            textColor="text-black"
            onToggle={() =>
              setCampaignTwo(
                campaignTwo === "ON" ? "OFF" : "ON"
              )
            }
          />

        </div>

        {/* CREATE TITLE */}
        <h1
          className="
            text-4xl
            md:text-6xl
            font-bold
            text-black
            mb-5
            leading-none
          "
        >
          Create Campaign
        </h1>

        {/* CREATE CARD */}
        <button
          onClick={() => navigate("/create-campaign")}
          className="
            w-full
            rounded-[35px]
            shadow-md
            overflow-hidden
            transition
            duration-300
            hover:scale-[1.01]
          "
        >

          <img
            src="/Foundation 6.png"
            className="
              w-full
              h-[150px]
              md:h-[320px]
              object-cover
            "
          />

        </button>

      </div>

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  );
}