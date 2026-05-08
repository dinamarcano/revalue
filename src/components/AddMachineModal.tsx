import { useState } from "react";

interface AddMachineModalProps {
  onClose: () => void;
  onAddMachine: (
    machine: {
      bottles: number;
      address: string;
      activity: string;
    }
  ) => void;
}

export default function AddMachineModal({
  onClose,
  onAddMachine,
}: AddMachineModalProps) {

  const [bottles, setBottles] = useState("");
  const [address, setAddress] = useState("");
  const [activity, setActivity] = useState("");

  const handleSubmit = () => {
    if (!bottles || !address || !activity) {
      alert("Please fill all fields");
      return;
    }

    onAddMachine({
      bottles: Number(bottles),
      address,
      activity,
    });

    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/40
        flex
        items-center
        justify-center
        z-50
        px-4
      "
    >

      {/* MODAL */}
      <div
        className="
          w-full
          max-w-[500px]
          bg-white
          rounded-[35px]
          p-6
          md:p-8
          shadow-xl
        "
      >

        {/* TITLE */}
        <h1
          className="
            text-3xl
            md:text-5xl
            font-bold
            text-black
            mb-6
            leading-none
          "
        >
          Add Machine
        </h1>

        {/* INPUTS */}
        <div className="flex flex-col gap-4">

          {/* BOTTLES */}
          <input
            type="number"
            placeholder="Bottles recycled today"
            value={bottles}
            onChange={(e) => setBottles(e.target.value)}
            className="
              w-full
              p-4
              rounded-2xl
              bg-[#F2F3F7]
              outline-none
            "
          />

          {/* ADDRESS */}
          <input
            type="text"
            placeholder="Machine address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="
              w-full
              p-4
              rounded-2xl
              bg-[#F2F3F7]
              outline-none
            "
          />

          {/* ACTIVITY */}
          <input
            type="text"
            placeholder="Activity level"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="
              w-full
              p-4
              rounded-2xl
              bg-[#F2F3F7]
              outline-none
            "
          />

        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-8">

          {/* CANCEL */}
          <button
            onClick={onClose}
            className="
              flex-1
              py-4
              rounded-2xl
              bg-[#EAEAEA]
              text-black
              font-semibold
            "
          >
            Cancel
          </button>

          {/* SAVE */}
          <button
            onClick={handleSubmit}
            className="
              flex-1
              py-4
              rounded-2xl
              bg-[#2DCC70]
              text-white
              font-semibold
            "
          >
            Save
          </button>

        </div>

      </div>

    </div>
  );
}