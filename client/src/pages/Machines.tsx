import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import BottomNav from "../components/BottomNav";
import MachineCard from "../components/MachineCard";
import AddMachineModal from "../components/AddMachineModal";
import EditMachineModal from "../components/EditMachineModal";
import EmptyState from "../components/EmptyState";

interface Machine {
  bottles: number;
  address: string;
  activity: string;
}

export default function Machines() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const [machines, setMachines] = useState<Machine[]>(() => {
    const savedMachines =
      localStorage.getItem("machines");

    if (savedMachines) {
      return JSON.parse(savedMachines);
    }

    return [
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
    ];
  });

  useEffect(() => {
    localStorage.setItem("machines", JSON.stringify(machines));
  }, [machines]);

  const totalForDay = machines.reduce(
    (total, machine) => total + machine.bottles,
    0
  );

  const totalForWeek = totalForDay * 7;

  const handleAddMachine = (machine: Machine) => {
    setMachines((prev) => [...prev, machine]);
  };

  const handleDeleteMachine = (
    indexToDelete: number
  ) => {
    setMachines((prev) =>
      prev.filter(
        (_, index) => index !== indexToDelete
      )
    );
  };

  const handleSaveEdit = (
    updated: Machine
  ) => {
    if (editIndex === null) return;

    setMachines((prev) =>
      prev.map((m, i) => (i === editIndex ? updated : m))
    );

    setEditIndex(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center pb-28 overflow-x-hidden">

      {/* CONTAINER */}
      <div className="w-full max-w-[1200px] px-4 md:px-10 py-6 md:py-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-6">

          {/* BACK */}
          <button
            onClick={() => navigate(-1)}
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
          My machines
        </h1>

        {/* IMAGE */}
        <div
          className="
            bg-white
            rounded-[20px]
            overflow-hidden
            shadow-md
            mb-10
          "
        >

          <img
            src="/machine2.png"
            className="
              w-full
              h-[140px]
              sm:h-[180px]
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
              rounded-[20px]
              shadow-md
              p-5
              md:p-8
              text-center
            "
          >

            <p className="text-lg md:text-2xl mb-3">
              Total for the week
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-bold
                leading-none
                mb-3
              "
            >
              {totalForWeek}
            </h2>

            <p className="text-lg md:text-2xl font-semibold">
              <span className="text-[#2EBB4E]">
                Recycled
              </span>{" "}
              bottles
            </p>

          </div>

          {/* DAY */}
          <div
            className="
              bg-white
              rounded-[20px]
              shadow-md
              p-5
              md:p-8
              text-center
            "
          >

            <p className="text-lg md:text-2xl mb-3">
              Total for the day
            </p>

            <h2
              className="
                text-4xl
                sm:text-5xl
                md:text-7xl
                font-bold
                leading-none
                mb-3
              "
            >
              {totalForDay}
            </h2>

            <p className="text-lg md:text-2xl font-semibold">
              <span className="text-[#2EBB4E]">
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
            py-4
            md:py-5
            rounded-full
            bg-[#2EBB4E]
            text-white
            text-xl
            md:text-3xl
            font-bold
            transition
            hover:scale-[1.01]
          "
        >
          + Add Machine
        </button>

        {/* MACHINE LIST */}
        {machines.length === 0 ? (
          <EmptyState message="No machines added yet. Add your first one!" />
        ) : (
          <div className="flex flex-col gap-5">

            {machines.map((machine, index) => (
              <MachineCard
                key={index}
                bottles={machine.bottles}
                address={machine.address}
                activity={machine.activity}
                onDelete={() =>
                  handleDeleteMachine(index)
                }
                onEdit={() => setEditIndex(index)}
              />
            ))}

          </div>
        )}

      </div>

      {/* ADD MODAL */}
      {showModal && (
        <AddMachineModal
          onClose={() => setShowModal(false)}
          onAddMachine={handleAddMachine}
        />
      )}

      {/* EDIT MODAL */}
      {editIndex !== null && (
        <EditMachineModal
          machine={machines[editIndex]}
          onClose={() => setEditIndex(null)}
          onSave={handleSaveEdit}
        />
      )}

      {/* BOTTOM NAV */}
      <BottomNav />

    </div>
  );
}