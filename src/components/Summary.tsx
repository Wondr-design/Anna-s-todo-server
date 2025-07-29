import React from "react";

interface SummaryProps {
  completed: number;
  uncompleted: number;
  total: number;
}

const Summary: React.FC<SummaryProps> = ({ completed, uncompleted, total }) => {
  const completionPercentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="mt-6 p-6 border-t-4 border-black">
      <h2 className="text-2xl font-bold text-center text-black mb-4">
        Shopping Progress
      </h2>
      <div className="w-full bg-transparent border border-black h-4 mb-4">
        <div
          className="bg-[#FF0000] h-full transition-all duration-500 ease-out"
          style={{ width: `${completionPercentage}%` }}
          aria-valuenow={completionPercentage}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
          aria-label="Shopping completion percentage"
        ></div>
      </div>
      <div className="flex justify-around text-center text-black">
        <div>
          <p className="text-3xl font-bold">{completed}</p>
          <p className="text-sm opacity-80">Completed</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{uncompleted}</p>
          <p className="text-sm opacity-80">Remaining</p>
        </div>
        <div>
          <p className="text-3xl font-bold">{total}</p>
          <p className="text-sm opacity-80">Total Items</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
