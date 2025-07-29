import React, { useState } from "react";

interface AddItemFormProps {
  onAddItem: (name: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (itemName.trim()) {
      onAddItem(itemName.trim());
      setItemName("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex gap-2"
      aria-label="Add new item form"
    >
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="Add a new item..."
        aria-label="New shopping item name"
        className="flex-grow bg-transparent border border-black text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF0000] focus:border-[#FF0000] placeholder:text-black/60"
      />
      <button
        type="submit"
        className="bg-black hover:bg-zinc-800 text-white font-bold py-2 px-6 transition-colors disabled:bg-black/50 disabled:cursor-not-allowed"
        disabled={!itemName.trim()}
        aria-label="Add item to the list"
      >
        Add
      </button>
    </form>
  );
};

export default AddItemForm;
