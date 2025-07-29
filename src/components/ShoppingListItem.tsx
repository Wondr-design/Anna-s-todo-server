import React from "react";
import type { ShoppingItem } from "@/types";

interface ShoppingListItemProps {
  item: ShoppingItem;
  onToggleItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
  index: number;
}

const ShoppingListItem: React.FC<ShoppingListItemProps> = ({
  item,
  onToggleItem,
  onDeleteItem,
  index,
}) => {
  // Format the index as a three-digit number (e.g., 001, 002, ...)
  const formattedIndex = String(index + 1).padStart(3, "0");
  return (
    <div className="flex items-center border-b border-black last:border-b-0">
      <div
        onClick={() => onToggleItem(item.id)}
        className={`w-12 h-12 flex-shrink-0 border-r border-black cursor-pointer transition-colors duration-200
          ${item.completed ? "bg-[#FF0000]" : "bg-transparent"}`}
        aria-label={`Mark ${item.name} as ${
          item.completed ? "incomplete" : "complete"
        }`}
        role="checkbox"
        aria-checked={item.completed}
      >
        {/* The cell itself is the checkbox. An empty div when unchecked, and a red background when checked. */}
      </div>
      <div className="flex-grow flex justify-between items-center bg-transparent text-black h-12 px-4">
        <div>
          <span
            className={`font-bold transition-opacity duration-300 ${
              item.completed ? "line-through opacity-50" : "opacity-100"
            }`}
          >
            {item.name}
          </span>
        </div>
        <span className="font-mono text-sm opacity-60">{formattedIndex}</span>
      </div>
      <div
        onClick={() => onDeleteItem(item.id)}
        className="w-12 h-12 flex-shrink-0 border-l border-black cursor-pointer transition-colors duration-200 bg-red-100 hover:bg-red-200 flex items-center justify-center"
        aria-label={`Delete ${item.name}`}
        role="button"
      >
        <span className="text-red-600 text-sm">✕</span>
      </div>
    </div>
  );
};

export default ShoppingListItem;
