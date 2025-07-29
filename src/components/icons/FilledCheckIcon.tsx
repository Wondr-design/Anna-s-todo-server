import React from "react";

const FilledCheckIcon: React.FC = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    <rect width="24" height="24" fill="#FF0000" />
    <path
      d="M5 13l4 4L19 7"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FilledCheckIcon;
