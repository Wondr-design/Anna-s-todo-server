import React from "react";
import type { ShoppingItem } from "@/types";
import ShoppingListItem from "@/components/ShoppingListItem";

interface ShoppingListProps {
  items: ShoppingItem[];
  onToggleItem: (id: string) => void;
  onDeleteItem: (id: string) => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({
  items,
  onToggleItem,
  onDeleteItem,
}) => {
  return (
    <div className="flex flex-col">
      {items.map((item, index) => (
        <ShoppingListItem
          key={item.id}
          item={item}
          onToggleItem={onToggleItem}
          onDeleteItem={onDeleteItem}
          index={index}
        />
      ))}
    </div>
  );
};
export default ShoppingList;
