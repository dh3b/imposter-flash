import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface PlayerSelectorProps {
  count: number;
  onChange: (count: number) => void;
  min?: number;
  max?: number;
}

export const PlayerSelector = ({
  count,
  onChange,
  min = 2,
  max = 10,
}: PlayerSelectorProps) => {
  return (
    <div className="flex items-center justify-center gap-6">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onChange(Math.max(min, count - 1))}
        disabled={count <= min}
        className="h-12 w-12 rounded-full border-2"
      >
        <Minus className="h-5 w-5" />
      </Button>
      <div className="text-center min-w-[120px]">
        <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          {count}
        </div>
        <div className="text-sm text-muted-foreground mt-1">
          {count === 1 ? "player" : "players"}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onChange(Math.min(max, count + 1))}
        disabled={count >= max}
        className="h-12 w-12 rounded-full border-2"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  );
};
