import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import BottomNav from "../components/BottomNav";

interface Machine {
  address: string;
}

export default function CreateCampaign() {
  const navigate = useNavigate();

  const savedMachines: Machine[] = JSON.parse(
    localStorage.getItem("machines") || "[]"
  );

  const [image, setImage] = useState<string | null>(null);

  const [reward, setReward] = useState("");
  const [goal, setGoal] = useState("");

  const [machine, setMachine] = useState(
    savedMachines[0]?.address || ""
  );

  const [background, setBackground] =
    useState("#2EBB4E");

  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const handlePublish = () => {
    if (!reward || !goal || !machine) {
      toast.error("Please fill all fields");
      return;
    }

    setIsLoading(true);

    const newCampaign = {
      status: "ON",
      image,
      reward,
      title: goal,
      machineAddress: machine,
      background,
      textColor:
        background === "#2EBB4E"
          ? "text-white"
          : "text-black",
    };

    const savedCampaigns = JSON.parse(
      localStorage.getItem("campaigns") || "[]"
    );

    localStorage.setItem(
      "campaigns",
      JSON.stringify([
        ...savedCampaigns,
        newCampaign,
      ])
    );

    toast.success("Campaign published!");

    navigate("/edit");
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center pb-28">

      {/* CONTAINER */}
      <div className="w-full max-w-[1200px] px-4 md:px-10 py-6 md:py-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-8">

          {/* BACK */}
          <button
            onClick={() => navigate(-1)}
            className="text-[#2EBB4E] text-base md:text-lg"
          >
            ← Back
          </button>

          {/* TITLE */}
          <h1 className="text-3xl md:text-5xl font-bold">
            Create Campaign
          </h1>

          <div className="w-10" />
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-[20px] shadow-md p-6 md:p-10">

          {/* IMAGE */}
          <div className="mb-8">

            <label className="text-[#2EBB4E] font-semibold">
              Campaign Image
            </label>

            <label
              className="
                mt-3
                h-[220px]
                rounded-2xl
                border-2
                border-dashed
                border-[#2EBB4E]
                flex
                items-center
                justify-center
                overflow-hidden
                cursor-pointer
                bg-[#F8F8F8]
              "
            >

              {image ? (
                <img
                  src={image}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-[#777] text-center px-4">
                  Click to upload image
                </span>
              )}

              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />

            </label>

          </div>

          {/* REWARD */}
          <div className="mb-6">

            <label className="text-[#2EBB4E] font-semibold">
              Reward Title
            </label>

            <input
              type="text"
              placeholder="EARN 20 POINTS"
              value={reward}
              onChange={(e) =>
                setReward(e.target.value)
              }
              className="
                w-full
                mt-2
                p-4
                rounded-2xl
                bg-[#F2F3F7]
                outline-none
              "
            />

          </div>

          {/* GOAL */}
          <div className="mb-6">

            <label className="text-[#2EBB4E] font-semibold">
              Campaign Goal
            </label>

            <input
              type="text"
              placeholder="Recycle 20 bottles today"
              value={goal}
              onChange={(e) =>
                setGoal(e.target.value)
              }
              className="
                w-full
                mt-2
                p-4
                rounded-2xl
                bg-[#F2F3F7]
                outline-none
              "
            />

          </div>

          {/* MACHINE */}
          <div className="mb-6">

            <label className="text-[#2EBB4E] font-semibold">
              Select Machine
            </label>

            <select
              value={machine}
              onChange={(e) =>
                setMachine(e.target.value)
              }
              className="
                w-full
                mt-2
                p-4
                rounded-2xl
                bg-[#F2F3F7]
                outline-none
              "
            >

              {savedMachines.map((machine, index) => (
                <option
                  key={index}
                  value={machine.address}
                >
                  {machine.address}
                </option>
              ))}

            </select>

          </div>

          {/* COLOR */}
          <div className="mb-10">

            <label className="text-[#2EBB4E] font-semibold">
              Campaign Color
            </label>

            <input
              type="color"
              value={background}
              onChange={(e) =>
                setBackground(e.target.value)
              }
              className="
                w-full
                mt-3
                h-[60px]
                rounded-2xl
                cursor-pointer
              "
            />

          </div>

          {/* PUBLISH */}
          <button
            onClick={handlePublish}
            disabled={isLoading}
            className="
              w-full
              py-5
              rounded-full
              bg-[#2EBB4E]
              text-white
              text-xl
              md:text-2xl
              font-bold
              transition
              hover:scale-[1.01]
              disabled:opacity-60
            "
          >
            {isLoading ? "Publishing..." : "Publish Campaign"}
          </button>

        </div>

      </div>

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  );
}