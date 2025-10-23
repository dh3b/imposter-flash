import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Plus } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { PlayerSelector } from "@/components/PlayerSelector";
import { Category } from "@/types/game";
import {
  loadCategories,
  toggleCategory,
  deleteCategory,
} from "@/utils/storage";
import { initializeGame } from "@/utils/gameLogic";
import { toast } from "sonner";

export default function Index() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<Category[]>([]);
  const [playerCount, setPlayerCount] = useState(3);
  const [enableHint, setEnableHint] = useState(true);

  useEffect(() => {
    setCategories(loadCategories());
  }, []);

  const handleToggle = (id: string) => {
    setCategories(toggleCategory(id));
  };

  const handleDelete = (id: string) => {
    setCategories(deleteCategory(id));
    toast.success("Category deleted");
  };

  const handleEdit = (category: Category) => {
    navigate("/category-editor", { state: { category } });
  };

  const handleNewCategory = () => {
    navigate("/category-editor");
  };

  const handlePlay = () => {
    const enabledCategories = categories.filter((c) => c.enabled);

    if (playerCount < 3) {
      toast.error("Need at least 3 players to play!");
      return;
    }

    if (enabledCategories.length === 0) {
      toast.error("Please enable at least one category!");
      return;
    }

    const gameState = initializeGame(playerCount, enabledCategories, enableHint);
    if (!gameState) {
      toast.error("Failed to initialize game. Check your categories.");
      return;
    }

    navigate("/game", { state: { gameState } });
  };

  const canPlay = playerCount >= 3 && categories.some((c) => c.enabled);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Logo Area */}
      <div className="h-32 flex items-center justify-center bg-gradient-primary shadow-glow">
        <h1 className="text-5xl font-extrabold text-white tracking-tight">
          Impostor flash
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 space-y-8 max-w-2xl mx-auto w-full">
        {/* Categories Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Categories</h2>
            <Button onClick={handleNewCategory} size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              New
            </Button>
          </div>

          <ScrollArea className="h-[300px] rounded-lg border border-border p-2">
            <div className="space-y-2">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onToggle={handleToggle}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Enable Hint Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Enable hint for Impostor</h2>
          <div className="flex items-center justify-center space-x-4">
            <Switch
              checked={enableHint}
              onCheckedChange={(val) => setEnableHint(Boolean(val))}
              aria-label="Enable hint for impostor"
            />
            <span className="text-sm">{enableHint ? "Yes" : "No"}</span>
          </div>
        </div>

        {/* Player Count Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Number of Players</h2>
          <PlayerSelector count={playerCount} onChange={setPlayerCount} />
        </div>

        {/* Play Button */}
        <Button
          size="lg"
          onClick={handlePlay}
          disabled={!canPlay}
          className={`w-full h-16 text-xl font-bold transition-all duration-300 ${
            canPlay
              ? "bg-gradient-primary shadow-glow scale-100 hover:scale-105"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          {canPlay ? "Start Game" : "Select Players & Category"}
        </Button>

        {!canPlay && (
          <p className="text-center text-sm text-muted-foreground">
            {playerCount < 3
              ? "Need at least 3 players"
              : "Enable at least one category"}
          </p>
        )}
      </div>
    </div>
  );
}
