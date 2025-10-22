import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import { Category, WordHintPair } from "@/types/game";
import { addCategory, updateCategory } from "@/utils/storage";
import { toast } from "sonner";

export default function CategoryEditor() {
  const navigate = useNavigate();
  const location = useLocation();
  const editingCategory = location.state?.category as Category | undefined;

  const [name, setName] = useState(editingCategory?.name || "");
  const [wordHintPairs, setWordHintPairs] = useState<WordHintPair[]>(
    editingCategory?.wordHintPairs || [{ word: "", hints: [""] }]
  );

  const addWordHintPair = () => {
    setWordHintPairs([...wordHintPairs, { word: "", hints: [""] }]);
  };

  const removeWordHintPair = (index: number) => {
    if (wordHintPairs.length > 1) {
      setWordHintPairs(wordHintPairs.filter((_, i) => i !== index));
    }
  };

  const updateWord = (index: number, word: string) => {
    const updated = [...wordHintPairs];
    updated[index].word = word;
    setWordHintPairs(updated);
  };

  const updateHint = (pairIndex: number, hintIndex: number, hint: string) => {
    const updated = [...wordHintPairs];
    updated[pairIndex].hints[hintIndex] = hint;
    setWordHintPairs(updated);
  };

  const addHint = (pairIndex: number) => {
    const updated = [...wordHintPairs];
    updated[pairIndex].hints.push("");
    setWordHintPairs(updated);
  };

  const removeHint = (pairIndex: number, hintIndex: number) => {
    const updated = [...wordHintPairs];
    if (updated[pairIndex].hints.length > 1) {
      updated[pairIndex].hints = updated[pairIndex].hints.filter(
        (_, i) => i !== hintIndex
      );
      setWordHintPairs(updated);
    }
  };

  const handleSave = () => {
    if (!name.trim()) {
      toast.error("Please enter a category name");
      return;
    }

    const validPairs = wordHintPairs.filter(
      (pair) =>
        pair.word.trim() &&
        pair.hints.some((hint) => hint.trim())
    );

    if (validPairs.length === 0) {
      toast.error("Please add at least one word with hints");
      return;
    }

    const cleanedPairs = validPairs.map((pair) => ({
      word: pair.word.trim(),
      hints: pair.hints.filter((hint) => hint.trim()).map((hint) => hint.trim()),
    }));

    const category: Category = {
      id: editingCategory?.id || `category_${Date.now()}`,
      name: name.trim(),
      enabled: editingCategory?.enabled ?? true,
      wordHintPairs: cleanedPairs,
    };

    if (editingCategory) {
      updateCategory(category);
      toast.success("Category updated!");
    } else {
      addCategory(category);
      toast.success("Category created!");
    }

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="shrink-0"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {editingCategory ? "Edit Category" : "New Category"}
          </h1>
        </div>

        <Card className="p-6 bg-gradient-card shadow-card">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Category Name
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter category name..."
                className="text-lg"
              />
            </div>
          </div>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Words & Hints</h2>
            <Button onClick={addWordHintPair} size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Word
            </Button>
          </div>

          {wordHintPairs.map((pair, pairIndex) => (
            <Card key={pairIndex} className="p-6 bg-gradient-card shadow-card">
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={pair.word}
                    onChange={(e) => updateWord(pairIndex, e.target.value)}
                    placeholder="Word (e.g., 'Titanic')"
                    className="flex-1"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeWordHintPair(pairIndex)}
                    className="shrink-0 hover:bg-destructive/10 hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2 pl-4 border-l-2 border-primary/20">
                  <label className="text-sm font-medium text-muted-foreground">
                    Hints for impostor:
                  </label>
                  {pair.hints.map((hint, hintIndex) => (
                    <div key={hintIndex} className="flex gap-2">
                      <Input
                        value={hint}
                        onChange={(e) =>
                          updateHint(pairIndex, hintIndex, e.target.value)
                        }
                        placeholder={`Hint ${hintIndex + 1}`}
                        className="flex-1"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeHint(pairIndex, hintIndex)}
                        className="shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addHint(pairIndex)}
                    className="w-full"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Hint
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button onClick={handleSave} className="flex-1 bg-gradient-primary">
            Save Category
          </Button>
        </div>
      </div>
    </div>
  );
}
