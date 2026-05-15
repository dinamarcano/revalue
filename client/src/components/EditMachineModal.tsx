import { useState } from "react";

interface Machine {
  bottles: number;
  address: string;
  activity: string;
}

interface EditMachineModalProps {
  machine: Machine;
  onClose: () => void;
  onSave: (machine: Machine) => void;
}

export default function EditMachineModal({
  machine,
  onClose,
  onSave,
}: EditMachineModalProps) {

  const [bottles, setBottles] = useState(
    machine.bottles.toString()
  );
  const [address, setAddress] = useState(machine.address);
  const [activity, setActivity] = useState(machine.activity);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!bottles || !address || !activity) {
      setError("Please fill all fields");
      return;
    }

    onSave({
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
          rounded-[20px]
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
          Edit Machine
        </h1>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-4">
            {error}
          </p>
        )}

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
              bg-[#2EBB4E]
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
