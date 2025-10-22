import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Category } from "@/types/game";

interface CategoryCardProps {
  category: Category;
  onToggle: (id: string) => void;
  onEdit: (category: Category) => void;
  onDelete: (id: string) => void;
}

export const CategoryCard = ({
  category,
  onToggle,
  onEdit,
  onDelete,
}: CategoryCardProps) => {
  return (
    <Card className="p-4 bg-gradient-card shadow-card hover:shadow-glow transition-all duration-300">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Switch
            checked={category.enabled}
            onCheckedChange={() => onToggle(category.id)}
          />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">{category.name}</h3>
            <p className="text-sm text-muted-foreground">
              {category.wordHintPairs.length} word
              {category.wordHintPairs.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onEdit(category)}
            className="hover:bg-primary/10 hover:text-primary"
          >
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onDelete(category.id)}
            className="hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
