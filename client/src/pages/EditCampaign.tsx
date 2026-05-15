import { useNavigate } from "react-router-dom";
import { useState } from "react";

import CampaignCard from "../components/CampaignCard";
import BottomNav from "../components/BottomNav";
import MachineMap from "../components/MachineMap";

interface Campaign {
  status: "ON" | "OFF";
  image: string;
  title: string;
  reward: string;
  machineAddress: string;
  background: string;
  textColor: string;
}

export default function EditCampaign() {
  const navigate = useNavigate();

  const [campaigns, setCampaigns] = useState<Campaign[]>(() => {
    const savedCampaigns =
      localStorage.getItem("campaigns");

    if (savedCampaigns) {
      return JSON.parse(savedCampaigns);
    }

    return [
      {
        status: "ON",
        image: "/campaign.png",
        title: "Recycle 15 bottles today",
        reward: "EARN 15 POINTS",
        machineAddress: "09th Street #21-2",
        background: "#2EBB4E",
        textColor: "text-white",
      },
      {
        status: "OFF",
        image: "/Group 37014.png",
        title: "Recycle 12 bottles today",
        reward: "EARN 15% DISCOUNT",
        machineAddress: "Green Avenue #14-8",
        background: "#FFFBBC",
        textColor: "text-black",
      },
    ];
  });

  localStorage.setItem(
    "campaigns",
    JSON.stringify(campaigns)
  );

  const handleToggle = (
    indexToToggle: number
  ) => {
    const updatedCampaigns = [...campaigns];

    updatedCampaigns[indexToToggle].status =
      updatedCampaigns[indexToToggle].status === "ON"
        ? "OFF"
        : "ON";

    setCampaigns(updatedCampaigns);
  };

  const handleDelete = (
    indexToDelete: number
  ) => {
    setCampaigns((prev) =>
      prev.filter(
        (_, index) => index !== indexToDelete
      )
    );
  };

  const handleEdit = (
    indexToEdit: number
  ) => {
    const campaign = campaigns[indexToEdit];

    const newReward = prompt(
      "Edit reward title",
      campaign.reward
    );

    const newTitle = prompt(
      "Edit recycle goal",
      campaign.title
    );

    const newMachine = prompt(
      "Edit machine address",
      campaign.machineAddress
    );

    if (
      !newReward ||
      !newTitle ||
      !newMachine
    ) {
      return;
    }

    const updatedCampaigns = [...campaigns];

    updatedCampaigns[indexToEdit] = {
      ...campaign,
      reward: newReward,
      title: newTitle,
      machineAddress: newMachine,
    };

    setCampaigns(updatedCampaigns);
  };

  const savedMachines = JSON.parse(
    localStorage.getItem("machines") || "[]"
  );

  const mapMachines = savedMachines.map(
    (machine: {
      address: string;
    }, index: number) => ({
      address: machine.address,
      position: [
        40.7128 + index * 0.01,
        -74.006 + index * 0.01,
      ] as [number, number],
    })
  );

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center pb-28 overflow-x-hidden">

      {/* CONTAINER */}
      <div className="w-full max-w-[1200px] px-4 md:px-10 py-6 md:py-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">

          {/* BACK */}
          <button
            onClick={() => navigate("/home")}
            className="text-[#2EBB4E] text-base md:text-lg"
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
              border-[#2EBB4E]
              flex
              items-center
              justify-center
              text-[#2EBB4E]
              text-lg
              transition
              hover:bg-[#2EBB4E]
              hover:text-white
            "
          >
            👤
          </button>
        </div>

        {/* TITLE */}
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-7xl
            font-bold
            text-black
            mb-8
            leading-none
          "
        >
          My campaigns
        </h1>

        {/* MAP */}
        <MachineMap machines={mapMachines} />

        {/* CAMPAIGNS */}
        <div className="flex flex-col gap-8 mb-12">

          {campaigns.map((campaign, index) => (
            <CampaignCard
              key={index}
              status={campaign.status}
              image={campaign.image}
              title={campaign.title}
              reward={campaign.reward}
              machineAddress={campaign.machineAddress}
              background={campaign.background}
              textColor={campaign.textColor}
              onToggle={() =>
                handleToggle(index)
              }
              onEdit={() =>
                handleEdit(index)
              }
              onDelete={() =>
                handleDelete(index)
              }
            />
          ))}

        </div>

        {/* CREATE TITLE */}
        <h1
          className="
            text-3xl
            sm:text-4xl
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
          onClick={() =>
            navigate("/create-campaign")
          }
          className="
            w-full
            rounded-[20px]
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