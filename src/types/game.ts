export interface WordHintPair {
  word: string;
  hints: string[];
}

export interface Category {
  id: string;
  name: string;
  enabled: boolean;
  wordHintPairs: WordHintPair[];
}

export interface GameState {
  players: number;
  currentPlayer: number;
  impostor: number;
  selectedWord: string;
  selectedHint: string;
  categoryName: string;
}
