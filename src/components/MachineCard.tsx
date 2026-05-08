interface MachineCardProps {
  bottles: number;
  address: string;
  activity: string;
  onDelete: () => void;
  onEdit: () => void;
}

export default function MachineCard({
  bottles,
  address,
  activity,
  onDelete,
  onEdit,
}: MachineCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[35px]
        shadow-md
        p-4
        md:p-6
        flex
        items-center
        justify-between
        gap-4
        overflow-hidden
      "
    >

      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 flex-1 overflow-hidden">

        {/* GREEN BOX */}
        <div
          className="
            w-[90px]
            h-[90px]
            md:w-[160px]
            md:h-[160px]
            rounded-[24px]
            bg-[#2DCC70]
            flex
            items-center
            justify-center
            shadow-md
            flex-shrink-0
          "
        >

          <h1
            className="
              text-white
              text-4xl
              md:text-7xl
              font-bold
              leading-none
            "
          >
            {bottles}
          </h1>

        </div>

        {/* INFO */}
        <div className="overflow-hidden">

          {/* ADDRESS */}
          <h2
            className="
              text-base
              md:text-5xl
              font-semibold
              text-black
              leading-tight
              mb-1
              truncate
            "
          >
            {address}
          </h2>

          {/* ACTIVITY */}
          <p
            className="
              text-sm
              md:text-4xl
              font-medium
              text-black
              leading-tight
            "
          >
            {activity}
          </p>

        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex flex-col gap-2 flex-shrink-0">

        {/* EDIT */}
        <button
          onClick={onEdit}
          className="
            w-9
            h-9
            md:w-14
            md:h-14
            rounded-full
            bg-[#F2F3F7]
            flex
            items-center
            justify-center
            text-base
            md:text-2xl
            transition
            hover:scale-105
          "
        >
          ✏️
        </button>

        {/* DELETE */}
        <button
          onClick={onDelete}
          className="
            w-9
            h-9
            md:w-14
            md:h-14
            rounded-full
            bg-[#FFE5E5]
            flex
            items-center
            justify-center
            text-base
            md:text-2xl
            transition
            hover:scale-105
          "
        >
          🗑️
        </button>

      </div>

    </div>
  );
}