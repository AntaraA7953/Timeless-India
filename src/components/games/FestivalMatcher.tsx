
import React, { useState, useEffect } from 'react';
import { Star, Clock, RotateCcw, Trophy, Shuffle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Festival {
  id: string;
  name: string;
  region: string;
  matched: boolean;
}

interface GameCard {
  id: string;
  content: string;
  type: 'festival' | 'region';
  festivalId: string;
  flipped: boolean;
  matched: boolean;
}

const festivals: Festival[] = [
  { id: 'diwali', name: 'Diwali', region: 'Pan India', matched: false },
  { id: 'durga-puja', name: 'Durga Puja', region: 'West Bengal', matched: false },
  { id: 'onam', name: 'Onam', region: 'Kerala', matched: false },
  { id: 'baisakhi', name: 'Baisakhi', region: 'Punjab', matched: false },
  { id: 'ganesh-chaturthi', name: 'Ganesh Chaturthi', region: 'Maharashtra', matched: false },
  { id: 'pongal', name: 'Pongal', region: 'Tamil Nadu', matched: false },
  { id: 'karva-chauth', name: 'Karva Chauth', region: 'North India', matched: false },
  { id: 'navratri', name: 'Navratri', region: 'Gujarat', matched: false }
];

interface FestivalMatcherProps {
  onBack: () => void;
  onComplete: (score: number) => void;
}

const FestivalMatcher: React.FC<FestivalMatcherProps> = ({ onBack, onComplete }) => {
  const [cards, setCards] = useState<GameCard[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  // Timer
  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !gameComplete) {
      handleGameEnd();
    }
  }, [timeLeft, gameStarted, gameComplete]);

  const initializeGame = () => {
    const gameCards: GameCard[] = [];
    
    // Create cards for festivals and regions
    festivals.forEach(festival => {
      gameCards.push({
        id: `festival-${festival.id}`,
        content: festival.name,
        type: 'festival',
        festivalId: festival.id,
        flipped: false,
        matched: false
      });
      
      gameCards.push({
        id: `region-${festival.id}`,
        content: festival.region,
        type: 'region',
        festivalId: festival.id,
        flipped: false,
        matched: false
      });
    });

    // Shuffle cards
    const shuffledCards = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  };

  const handleCardClick = (cardId: string) => {
    if (!gameStarted) {
      setGameStarted(true);
    }

    if (flippedCards.length >= 2) return;

    const card = cards.find(c => c.id === cardId);
    if (!card || card.flipped || card.matched) return;

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    // Update card state
    setCards(prevCards => 
      prevCards.map(c => 
        c.id === cardId ? { ...c, flipped: true } : c
      )
    );

    // Check for match when two cards are flipped
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      setTimeout(() => {
        checkForMatch(newFlippedCards);
      }, 1000);
    }
  };

  const checkForMatch = (flippedCardIds: string[]) => {
    const [firstCardId, secondCardId] = flippedCardIds;
    const firstCard = cards.find(c => c.id === firstCardId);
    const secondCard = cards.find(c => c.id === secondCardId);

    if (firstCard && secondCard && firstCard.festivalId === secondCard.festivalId) {
      // Match found
      const newMatchedPairs = [...matchedPairs, firstCard.festivalId];
      setMatchedPairs(newMatchedPairs);
      setScore(score + 10);

      setCards(prevCards => 
        prevCards.map(c => 
          c.id === firstCardId || c.id === secondCardId 
            ? { ...c, matched: true, flipped: true }
            : c
        )
      );

      // Check if game is complete
      if (newMatchedPairs.length === festivals.length) {
        setGameComplete(true);
        const finalScore = score + 10 + Math.max(0, timeLeft) + Math.max(0, 50 - moves);
        onComplete(finalScore);
      }
    } else {
      // No match - flip cards back
      setCards(prevCards => 
        prevCards.map(c => 
          c.id === firstCardId || c.id === secondCardId 
            ? { ...c, flipped: false }
            : c
        )
      );
    }

    setFlippedCards([]);
  };

  const handleGameEnd = () => {
    setGameComplete(true);
    const finalScore = score + Math.max(0, timeLeft) + Math.max(0, 50 - moves);
    onComplete(finalScore);
  };

  const handleRestart = () => {
    setCards([]);
    setFlippedCards([]);
    setMatchedPairs([]);
    setScore(0);
    setMoves(0);
    setTimeLeft(180);
    setGameStarted(false);
    setGameComplete(false);
    initializeGame();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (gameComplete) {
    const finalScore = score + Math.max(0, timeLeft) + Math.max(0, 50 - moves);
    
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Trophy className="mx-auto mb-4 text-yellow-500" size={48} />
          <CardTitle className="text-2xl">
            {matchedPairs.length === festivals.length ? 'Perfect Match!' : 'Game Over!'}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-green-600">{finalScore}</div>
          <div className="space-y-2">
            <p>Matched Pairs: {matchedPairs.length}/{festivals.length}</p>
            <p>Moves: {moves}</p>
            <p>Time Bonus: +{Math.max(0, timeLeft)}</p>
            <p>Efficiency Bonus: +{Math.max(0, 50 - moves)}</p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestart} className="bg-purple-500 hover:bg-purple-600">
              <RotateCcw className="mr-2 h-4 w-4" />
              Play Again
            </Button>
            <Button onClick={onBack} variant="outline">
              Back to Games
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Star className="text-purple-600" size={24} />
              <span className="font-semibold">Festival Matcher</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Trophy className="text-yellow-500" size={20} />
                <span className="font-bold">{score} pts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-blue-500" size={20} />
                <span className={`font-bold ${timeLeft <= 30 ? 'text-red-500' : 'text-gray-700'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                Moves: {moves} | Matched: {matchedPairs.length}/{festivals.length}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Instructions */}
      {!gameStarted && (
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold text-purple-800 mb-4">How to Play</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <Star className="mx-auto mb-2 text-purple-600" size={24} />
                <p><strong>Match festivals</strong> with their regions</p>
              </div>
              <div>
                <Clock className="mx-auto mb-2 text-blue-600" size={24} />
                <p><strong>Beat the clock</strong> - 3 minutes to complete</p>
              </div>
              <div>
                <Trophy className="mx-auto mb-2 text-yellow-600" size={24} />
                <p><strong>Score points</strong> for matches and efficiency</p>
              </div>
            </div>
            <p className="mt-4 text-purple-700">Click any card to start!</p>
          </CardContent>
        </Card>
      )}

      {/* Game Board */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square cursor-pointer transition-all duration-300 transform ${
                  card.flipped || card.matched
                    ? 'rotate-0'
                    : 'hover:scale-105'
                }`}
              >
                <div className={`w-full h-full rounded-lg shadow-md ${
                  card.flipped || card.matched
                    ? card.type === 'festival'
                      ? 'bg-gradient-to-br from-purple-400 to-pink-500 text-white'
                      : 'bg-gradient-to-br from-blue-400 to-indigo-500 text-white'
                    : 'bg-gradient-to-br from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500'
                } flex items-center justify-center p-2 border-2 ${
                  card.matched ? 'border-green-400' : 'border-transparent'
                }`}>
                  {card.flipped || card.matched ? (
                    <div className="text-center">
                      <div className="text-xs font-bold mb-1">
                        {card.type === 'festival' ? '🎉' : '📍'}
                      </div>
                      <div className="text-xs font-medium leading-tight">
                        {card.content}
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl">❓</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button onClick={onBack} variant="outline">
          Back to Games
        </Button>
        <Button onClick={handleRestart} variant="outline">
          <Shuffle className="mr-2 h-4 w-4" />
          Restart Game
        </Button>
      </div>
    </div>
  );
};

export default FestivalMatcher;
