import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { GameState } from "@/types/game";

export default function Game() {
  const navigate = useNavigate();
  const location = useLocation();
  const gameState = location.state?.gameState as GameState;

  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [touchStartTime, setTouchStartTime] = useState(0);

  useEffect(() => {
    if (!gameState) {
      navigate("/");
    }
  }, [gameState, navigate]);

  if (!gameState) return null;

  const isImpostor = currentPlayer === gameState.impostor;
  const displayText: string = isImpostor
  ? (gameState.enabledHint ? (gameState.selectedHint ?? "❌") : "❌")
  : (gameState.selectedWord ?? "");

  const handleTouchStart = () => {
    setTouchStartTime(Date.now());
    setRevealed(true);
  };

  const handleTouchEnd = () => {
    const duration = Date.now() - touchStartTime;
    // Only hide if held for less than 100ms (accidental tap)
    if (duration < 100) {
      setRevealed(false);
    }
  };

  const handleNextPlayer = () => {
    if (currentPlayer < gameState.players - 1) {
      setCurrentPlayer(currentPlayer + 1);
      setRevealed(false);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="text-sm text-muted-foreground">
          Category: {gameState.categoryName}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-8">
        <Card className="w-full max-w-md aspect-[3/4] bg-gradient-card shadow-glow relative overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="p-8 text-center border-b border-border/50">
              <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Player {currentPlayer + 1}
              </h1>
            </div>

            <div 
              className="flex-1 flex items-center justify-center p-8 relative cursor-pointer select-none"
              onMouseDown={handleTouchStart}
              onMouseUp={handleTouchEnd}
              onMouseLeave={() => setRevealed(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div className={`text-center transition-all duration-300 ${revealed ? 'blur-none opacity-100' : 'blur-2xl opacity-0'}`}>
                <div className="text-sm text-muted-foreground mb-4">
                  {isImpostor ? "You're the Impostor!" : "You're a regular player"}
                </div>
                <div className="text-3xl font-bold mb-4">
                  {isImpostor ? "Your Hint:" : "Your Word:"}
                </div>
                <div className="text-5xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">
                  {displayText}
                </div>
              </div>
              
              {!revealed && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4 animate-pulse">
                    <div className="text-6xl">👁️</div>
                    <div className="text-lg font-medium text-muted-foreground">
                      Press and hold to reveal
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        <Button
          size="lg"
          onClick={handleNextPlayer}
          className="bg-gradient-primary gap-2 min-w-[200px]"
        >
          {currentPlayer < gameState.players - 1 ? (
            <>
              Next Player
              <ChevronRight className="h-5 w-5" />
            </>
          ) : (
            "Finish Game"
          )}
        </Button>

        <div className="text-sm text-muted-foreground">
          Player {currentPlayer + 1} of {gameState.players}
        </div>
      </div>
    </div>
  );
}
