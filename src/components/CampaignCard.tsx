interface CampaignCardProps {
  status: "ON" | "OFF";
  image: string;
  title: string;
  reward: string;
  machineAddress: string;
  background: string;
  textColor?: string;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export default function CampaignCard({
  status,
  image,
  title,
  reward,
  machineAddress,
  background,
  textColor = "text-black",
  onToggle,
  onEdit,
  onDelete,
}: CampaignCardProps) {
  return (
    <div className="bg-white rounded-[35px] shadow-md overflow-hidden">

      {/* TOP */}
      <div
        className="
          relative
          overflow-hidden
          rounded-t-[35px]
          px-4
          md:px-8
          py-4
          md:py-6
          h-[170px]
          md:h-[280px]
        "
        style={{ backgroundColor: background }}
      >

        {/* ON / OFF */}
        <button
          onClick={onToggle}
          className={`
            absolute
            top-4
            left-4
            md:top-5
            md:left-6
            text-3xl
            md:text-5xl
            font-bold
            leading-none
            transition
            hover:scale-105
            ${
              status === "ON"
                ? "text-white"
                : "text-black"
            }
          `}
        >
          {status}
        </button>

        {/* CONTENT */}
        <div className="flex items-center justify-between h-full pt-6">

          {/* IMAGE */}
          <div className="flex-1 flex items-center">

            <img
              src={image}
              className="
                w-[180px]
                md:w-[420px]
                object-contain
                select-none
              "
            />

          </div>

          {/* TEXT */}
          <div className="flex-1 flex justify-end">

            <h2
              className={`
                text-right
                font-bold
                leading-tight
                text-lg
                md:text-5xl
                max-w-[120px]
                md:max-w-none
                break-words
                md:whitespace-nowrap
                ${textColor}
              `}
            >
              {reward}
            </h2>

          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="px-5 py-4 md:px-8 md:py-6">

        {/* TITLE */}
        <h3
          className="
            text-xl
            md:text-4xl
            font-medium
            leading-tight
            text-black
            mb-3
          "
        >
          {title}
        </h3>

        {/* MACHINE */}
        <p
          className="
            text-sm
            md:text-xl
            text-[#777]
            mb-5
          "
        >
          📍 {machineAddress}
        </p>

        {/* ACTIONS */}
        <div className="flex gap-3">

          {/* EDIT */}
          <button
            onClick={onEdit}
            className="
              flex-1
              py-3
              rounded-2xl
              bg-[#2DCC70]
              text-white
              font-semibold
              text-sm
              md:text-lg
              transition
              hover:scale-[1.02]
            "
          >
            Edit
          </button>

          {/* DELETE */}
          <button
            onClick={onDelete}
            className="
              px-5
              rounded-2xl
              bg-[#FFE5E5]
              text-xl
              transition
              hover:scale-105
            "
          >
            🗑️
          </button>

        </div>

      </div>

    </div>
  );
}