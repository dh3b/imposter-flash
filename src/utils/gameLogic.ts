import { Category, GameState, WordHintPair } from "@/types/game";

export const initializeGame = (
  playerCount: number,
  impostorCount: number,
  enabledCategories: Category[],
  enableHint: boolean
): GameState | null => {
  if (enabledCategories.length === 0) return null;
  if (!Number.isInteger(playerCount) || playerCount <= 0) return null;
  if (!Number.isInteger(impostorCount) || impostorCount < 0) return null;
  if (impostorCount > playerCount) return null;

  // Select random category
  const randomCategory =
    enabledCategories[Math.floor(Math.random() * enabledCategories.length)];

  // Select random word-hint pair
  if (randomCategory.wordHintPairs.length === 0) return null;

  const randomPair =
    randomCategory.wordHintPairs[
      Math.floor(Math.random() * randomCategory.wordHintPairs.length)
    ];

  // Select random impostor(s)
  let n = playerCount
  const arr = [...Array(n).keys()];
  while (n) {
    const i = Math.floor(Math.random() * n--);
    [arr[n], arr[i]] = [arr[i], arr[n]];
  }

  const impostorArr = arr.slice(0, impostorCount);

  // Select random hint for impostor
  if (!randomPair.hints || randomPair.hints.length === 0) return null;
  const randomHint =
    randomPair.hints[Math.floor(Math.random() * randomPair.hints.length)];

  return {
    players: playerCount,
    currentPlayer: 0,
    impostorArr: impostorArr,
    selectedWord: randomPair.word,
    enabledHint: enableHint,
    selectedHint: randomHint,
    categoryName: randomCategory.name,
  };
};
