import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Header from "@/components/Header";
import AddItemForm from "@/components/AddItemForm";
import ShoppingList from "@/components/ShoppingList";
import Summary from "@/components/Summary";
import type { ShoppingItem } from "@/types";

const App = () => {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔄 Fetch items from Supabase on mount
  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase
        .from("shopping_items")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) {
        console.error("Fetch error:", error);
        setError("Failed to fetch items.");
      } else {
        setItems(data);
      }
      setLoading(false);
    };

    fetchItems();
  }, []);

  // ✅ Toggle complete/incomplete
  const handleToggleItem = async (id: string) => {
    const item = items.find((item) => item.id === id);
    if (!item) return;

    const { error } = await supabase
      .from("shopping_items")
      .update({ completed: !item.completed })
      .eq("id", id);

    if (!error) {
      setItems((prev) =>
        prev.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
      );
    }
  };

  // ➕ Add new item
  const handleAddItem = async (name: string) => {
    const { data, error } = await supabase
      .from("shopping_items")
      .insert([{ name, completed: false }])
      .select()
      .single();

    if (!error && data) {
      setItems((prev) => [...prev, data]);
    }
  };

  // ❌ Delete item
  const handleDeleteItem = async (id: string) => {
    const { error } = await supabase
      .from("shopping_items")
      .delete()
      .eq("id", id);
    if (!error) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const completedCount = items.filter((item) => item.completed).length;
  const uncompletedCount = items.length - completedCount;

  return (
    <>
      {loading && <p className="text-center text-gray-500">Loading items...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      {!loading && !items.length && !error && (
        <p className="text-center text-gray-600 mt-4">No items found.</p>
      )}
      <div className="min-h-screen text-black flex flex-col items-center p-4 sm:p-6 md:p-8 font-sans">
        <div className="w-full max-w-4xl mx-auto">
          <div className="border border-black">
            <div className="px-6 sm:px-8 pt-6 sm:pt-8">
              <Header />
              <AddItemForm onAddItem={handleAddItem} />
            </div>
            <div className="mt-8 border-t border-black">
              <ShoppingList
                items={items}
                onToggleItem={handleToggleItem}
                onDeleteItem={handleDeleteItem} // you'll pass this to list item
              />
            </div>
          </div>
          <Summary
            completed={completedCount}
            uncompleted={uncompletedCount}
            total={items.length}
          />
        </div>
      </div>
    </>
  );
};

export default App;
