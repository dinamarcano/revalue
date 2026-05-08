import { useNavigate } from "react-router-dom";
import { useState } from "react";

import BottomNav from "../components/BottomNav";
import MachineCard from "../components/MachineCard";
import AddMachineModal from "../components/AddMachineModal";

interface Machine {
  bottles: number;
  address: string;
  activity: string;
}

export default function Machines() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const [machines, setMachines] = useState<Machine[]>([
    {
      bottles: 18,
      address: "09th Street #21-2",
      activity: "Very high activity",
    },
    {
      bottles: 9,
      address: "Green Avenue #14-8",
      activity: "Medium activity",
    },
    {
      bottles: 5,
      address: "Palm Street #7-11",
      activity: "Low activity",
    },
  ]);

  const totalForDay = machines.reduce(
    (total, machine) => total + machine.bottles,
    0
  );

  const totalForWeek = totalForDay * 7;

  const handleAddMachine = (machine: Machine) => {
    setMachines((prev) => [...prev, machine]);
  };

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
            leading-none
          "
        >
          My machines
        </h1>

        {/* IMAGE */}
        <div
          className="
            bg-white
            rounded-[35px]
            overflow-hidden
            shadow-md
            mb-10
          "
        >

          <img
            src="/machine2.png"
            className="
              w-full
              h-[160px]
              md:h-[300px]
              object-cover
            "
          />

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">

          {/* WEEK */}
          <div
            className="
              bg-white
              rounded-[35px]
              shadow-md
              p-6
              md:p-8
              text-center
            "
          >

            <p className="text-xl md:text-2xl mb-3">
              Total for the week
            </p>

            <h2
              className="
                text-6xl
                md:text-7xl
                font-bold
                leading-none
                mb-3
              "
            >
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
          <div
            className="
              bg-white
              rounded-[35px]
              shadow-md
              p-6
              md:p-8
              text-center
            "
          >

            <p className="text-xl md:text-2xl mb-3">
              Total for the day
            </p>

            <h2
              className="
                text-6xl
                md:text-7xl
                font-bold
                leading-none
                mb-3
              "
            >
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

        {/* ADD BUTTON */}
        <button
          onClick={() => setShowModal(true)}
          className="
            w-full
            mb-8
            py-5
            rounded-[28px]
            bg-[#2DCC70]
            text-white
            text-2xl
            md:text-3xl
            font-bold
            transition
            hover:scale-[1.01]
          "
        >
          + Add Machine
        </button>

        {/* MACHINE LIST */}
        <div className="flex flex-col gap-5">

          {machines.map((machine, index) => (
            <MachineCard
              key={index}
              bottles={machine.bottles}
              address={machine.address}
              activity={machine.activity}
            />
          ))}

        </div>

      </div>

      {/* MODAL */}
      {showModal && (
        <AddMachineModal
          onClose={() => setShowModal(false)}
          onAddMachine={handleAddMachine}
        />
      )}

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  );
}