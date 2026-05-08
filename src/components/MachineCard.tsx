interface MachineCardProps {
  bottles: number;
  address: string;
  activity: string;
}

export default function MachineCard({
  bottles,
  address,
  activity,
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
        gap-5
      "
    >

      {/* GREEN BOX */}
      <div
        className="
          min-w-[110px]
          h-[110px]
          md:min-w-[160px]
          md:h-[160px]
          rounded-[28px]
          bg-[#2DCC70]
          flex
          items-center
          justify-center
          shadow-md
        "
      >

        <h1
          className="
            text-white
            text-5xl
            md:text-7xl
            font-bold
            leading-none
          "
        >
          {bottles}
        </h1>

      </div>

      {/* INFO */}
      <div className="flex flex-col justify-center">

        {/* ADDRESS */}
        <h2
          className="
            text-2xl
            md:text-5xl
            font-semibold
            text-black
            leading-tight
            mb-2
          "
        >
          {address}
        </h2>

        {/* ACTIVITY */}
        <p
          className="
            text-xl
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
  );
}