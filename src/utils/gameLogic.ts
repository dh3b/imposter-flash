import { Category, GameState, WordHintPair } from "@/types/game";

export const initializeGame = (
  playerCount: number,
  enabledCategories: Category[]
): GameState | null => {
  if (enabledCategories.length === 0) return null;

  // Select random category
  const randomCategory =
    enabledCategories[Math.floor(Math.random() * enabledCategories.length)];

  // Select random word-hint pair
  if (randomCategory.wordHintPairs.length === 0) return null;

  const randomPair =
    randomCategory.wordHintPairs[
      Math.floor(Math.random() * randomCategory.wordHintPairs.length)
    ];

  // Select random impostor
  const impostorIndex = Math.floor(Math.random() * playerCount);

  // Select random hint for impostor
  const randomHint =
    randomPair.hints[Math.floor(Math.random() * randomPair.hints.length)];

  return {
    players: playerCount,
    currentPlayer: 0,
    impostor: impostorIndex,
    selectedWord: randomPair.word,
    selectedHint: randomHint,
    categoryName: randomCategory.name,
  };
};
