import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

interface CounterSelectorProps {
  count: number;
  onChange: (count: number) => void;
  min?: number;
  max?: number;
  label: string;
  labelPlural?: string;
  players?: number; // only needed for impostor logic
  maxFromPlayers?: (players: number) => number; // custom max calculation
}

export const CounterSelector = ({
  count,
  onChange,
  min = 1,
  max,
  label,
  labelPlural,
  players,
  maxFromPlayers,
}: CounterSelectorProps) => {
  const computedMax =
    typeof max === "number"
      ? max
      : typeof maxFromPlayers === "function" && typeof players === "number"
      ? Math.max(min, maxFromPlayers(players))
      : typeof players === "number"
      ? Math.max(min, Math.floor(players))
      : 25; // default fallback

  const upper = Math.max(min, computedMax);
  const pluralLabel = labelPlural ?? `${label}s`;

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
          {count === 1 ? label : pluralLabel}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => onChange(Math.min(upper, count + 1))}
        disabled={count >= upper}
        className="h-12 w-12 rounded-full border-2"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </div>
  );
};