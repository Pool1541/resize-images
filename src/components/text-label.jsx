import { Button } from "@material-tailwind/react";

export default function TextLabel({ text, onClose, onClick }) {
  return (
    <div
      className="text-xs font-semibold text-white bg-black py-1 pr-1 pl-2 rounded-md flex gap-2 items-center cursor-pointer"
      onClick={onClick}
    >
      {text}
      <Button
        className="p-0 rounded-sm bg-transparent hover:bg-[#212121]"
        onClick={(e) => {
          e.stopPropagation();
          return onClose();
        }}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </span>
      </Button>
    </div>
  );
}
