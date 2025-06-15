
import React, { useState, useEffect } from 'react';
import { Trophy, Clock, CheckCircle, Info, Hammer } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BuildingPart {
  id: string;
  name: string;
  description: string;
  placed: boolean;
  required: boolean;
  points: number;
}

interface Monument {
  id: string;
  name: string;
  description: string;
  architecturalStyle: string;
  historicalFact: string;
  parts: BuildingPart[];
  timeLimit: number;
}

const monuments: Monument[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    description: 'An ivory-white marble mausoleum, symbol of eternal love',
    architecturalStyle: 'Mughal Architecture',
    historicalFact: 'Built between 1632-1653 CE by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. Over 20,000 artisans worked on its construction.',
    timeLimit: 300,
    parts: [
      { id: 'foundation', name: 'Foundation Platform', description: 'Marble base platform', placed: false, required: true, points: 5 },
      { id: 'main-tomb', name: 'Main Tomb', description: 'Central white marble dome structure', placed: false, required: true, points: 15 },
      { id: 'central-dome', name: 'Central Dome', description: 'Iconic onion-shaped dome', placed: false, required: true, points: 20 },
      { id: 'minarets', name: 'Four Minarets', description: 'Four corner towers', placed: false, required: true, points: 10 },
      { id: 'gateway', name: 'Main Gateway', description: 'Grand red sandstone entrance', placed: false, required: false, points: 8 },
      { id: 'gardens', name: 'Charbagh Gardens', description: 'Symmetrical Mughal gardens', placed: false, required: false, points: 7 }
    ]
  },
  {
    id: 'red-fort',
    name: 'Red Fort (Lal Qila)',
    description: 'Historic fortified palace of the Mughal emperors',
    architecturalStyle: 'Indo-Islamic Architecture',
    historicalFact: 'Built by Emperor Shah Jahan in 1639 CE as the main residence of the Mughal dynasty. The Prime Minister hoists the national flag here every Independence Day.',
    timeLimit: 240,
    parts: [
      { id: 'walls', name: 'Red Sandstone Walls', description: 'Massive defensive walls', placed: false, required: true, points: 10 },
      { id: 'lahori-gate', name: 'Lahori Gate', description: 'Main entrance gate', placed: false, required: true, points: 8 },
      { id: 'diwan-i-am', name: 'Diwan-i-Am', description: 'Hall of Public Audience', placed: false, required: true, points: 12 },
      { id: 'diwan-i-khas', name: 'Diwan-i-Khas', description: 'Hall of Private Audience', placed: false, required: true, points: 15 },
      { id: 'rang-mahal', name: 'Rang Mahal', description: 'Palace of Colors', placed: false, required: false, points: 10 },
      { id: 'hammam', name: 'Royal Baths', description: 'Mughal-style baths', placed: false, required: false, points: 5 }
    ]
  }
];

interface MonumentBuilderProps {
  onBack: () => void;
  onComplete: (score: number) => void;
}

const MonumentBuilder: React.FC<MonumentBuilderProps> = ({ onBack, onComplete }) => {
  const [selectedMonument, setSelectedMonument] = useState<Monument | null>(null);
  const [currentMonument, setCurrentMonument] = useState<Monument | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameComplete, setGameComplete] = useState(false);
  const [selectedPart, setSelectedPart] = useState<BuildingPart | null>(null);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (gameStarted && timeLeft > 0 && !gameComplete) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && gameStarted && !gameComplete) {
      handleGameEnd();
    }
  }, [timeLeft, gameStarted, gameComplete]);

  const startGame = (monument: Monument) => {
    setSelectedMonument(monument);
    setCurrentMonument({
      ...monument,
      parts: monument.parts.map(part => ({ ...part, placed: false }))
    });
    setTimeLeft(monument.timeLimit);
    setScore(0);
    setGameStarted(true);
    setGameComplete(false);
    setSelectedPart(null);
  };

  const placePart = (partId: string) => {
    if (!currentMonument || gameComplete) return;

    const part = currentMonument.parts.find(p => p.id === partId);
    if (!part || part.placed) return;

    // Check if required parts are placed in order
    const requiredParts = currentMonument.parts.filter(p => p.required);
    const currentRequiredIndex = requiredParts.findIndex(p => p.id === partId);
    
    if (currentRequiredIndex > 0) {
      const previousRequired = requiredParts[currentRequiredIndex - 1];
      if (!previousRequired.placed) {
        alert(`You must place ${previousRequired.name} first!`);
        return;
      }
    }

    const updatedMonument = {
      ...currentMonument,
      parts: currentMonument.parts.map(p =>
        p.id === partId ? { ...p, placed: true } : p
      )
    };

    setCurrentMonument(updatedMonument);
    setScore(score + part.points);

    // Check if all required parts are placed
    const allRequiredPlaced = updatedMonument.parts
      .filter(p => p.required)
      .every(p => p.placed);

    if (allRequiredPlaced) {
      const bonusScore = Math.floor(timeLeft / 10);
      setScore(score + part.points + bonusScore);
      setGameComplete(true);
      onComplete(score + part.points + bonusScore);
    }
  };

  const handleGameEnd = () => {
    setGameComplete(true);
    onComplete(score);
  };

  const handleRestart = () => {
    setSelectedMonument(null);
    setCurrentMonument(null);
    setTimeLeft(0);
    setScore(0);
    setGameStarted(false);
    setGameComplete(false);
    setSelectedPart(null);
    setShowHint(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Monument selection screen
  if (!selectedMonument) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl flex items-center justify-center">
              <Hammer className="mr-3 text-orange-600" size={32} />
              Monument Builder
            </CardTitle>
            <p className="text-gray-600">Choose a monument to build and learn about Indian architecture</p>
          </CardHeader>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          {monuments.map((monument) => (
            <Card key={monument.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="text-xl">{monument.name}</CardTitle>
                <p className="text-sm text-gray-600">{monument.architecturalStyle}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{monument.description}</p>
                
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-1">Building Challenge:</h4>
                  <p className="text-blue-700 text-sm">
                    Place {monument.parts.filter(p => p.required).length} required parts
                  </p>
                  <p className="text-blue-700 text-sm">
                    Time Limit: {formatTime(monument.timeLimit)}
                  </p>
                </div>

                <Button 
                  onClick={() => startGame(monument)}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  Start Building
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button onClick={onBack} variant="outline" className="w-full">
          Back to Games
        </Button>
      </div>
    );
  }

  // Game completion screen
  if (gameComplete && currentMonument) {
    const allRequiredPlaced = currentMonument.parts.filter(p => p.required).every(p => p.placed);
    const allPartsPlaced = currentMonument.parts.every(p => p.placed);

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Trophy className="mx-auto mb-4 text-yellow-500" size={48} />
          <CardTitle className="text-2xl">
            {allRequiredPlaced ? 'Monument Built!' : 'Time\'s Up!'}
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-green-600">{score} points</div>
          
          <div className="bg-amber-50 p-4 rounded-lg text-left">
            <h4 className="font-semibold text-amber-800 mb-2">Historical Fact:</h4>
            <p className="text-amber-700 text-sm">{currentMonument.historicalFact}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">Required Parts:</p>
              <p>{currentMonument.parts.filter(p => p.required && p.placed).length}/{currentMonument.parts.filter(p => p.required).length}</p>
            </div>
            <div>
              <p className="font-semibold">Bonus Parts:</p>
              <p>{currentMonument.parts.filter(p => !p.required && p.placed).length}/{currentMonument.parts.filter(p => !p.required).length}</p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestart} className="bg-orange-500 hover:bg-orange-600">
              Build Another
            </Button>
            <Button onClick={onBack} variant="outline">
              Back to Games
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Main game screen
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Hammer className="text-orange-600" size={24} />
              <div>
                <span className="font-semibold">{currentMonument?.name}</span>
                <p className="text-sm text-gray-600">{currentMonument?.architecturalStyle}</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Trophy className="text-yellow-500" size={20} />
                <span className="font-bold">{score} pts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-red-500" size={20} />
                <span className={`font-bold ${timeLeft <= 30 ? 'text-red-500' : 'text-gray-700'}`}>
                  {formatTime(timeLeft)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Building Area */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Building Area</CardTitle>
                <Button 
                  onClick={() => setShowHint(!showHint)}
                  variant="outline"
                  size="sm"
                >
                  <Info className="mr-2 h-4 w-4" />
                  {showHint ? 'Hide' : 'Show'} Hint
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {showHint && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-blue-700 text-sm">
                    💡 <strong>Hint:</strong> Build required parts in order from foundation to top. 
                    Optional parts can be added anytime for bonus points!
                  </p>
                </div>
              )}

              {/* Visual Building Progress */}
              <div className="bg-gradient-to-b from-blue-100 to-green-100 rounded-lg p-6 min-h-64 relative">
                <div className="text-center text-gray-500 text-sm mb-4">
                  {currentMonument?.name} Construction Site
                </div>
                
                {/* Building Visualization */}
                <div className="space-y-2">
                  {currentMonument?.parts
                    .filter(part => part.placed)
                    .reverse() // Show from top to bottom
                    .map((part, index) => (
                      <div
                        key={part.id}
                        className={`p-3 rounded ${
                          part.required 
                            ? 'bg-gradient-to-r from-amber-200 to-orange-300' 
                            : 'bg-gradient-to-r from-purple-200 to-pink-300'
                        } text-center font-medium shadow-md`}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <CheckCircle className="text-green-600" size={16} />
                          <span>{part.name}</span>
                          <span className="text-sm">+{part.points}pts</span>
                        </div>
                      </div>
                    ))
                  }
                </div>

                {currentMonument?.parts.filter(p => p.placed).length === 0 && (
                  <div className="text-center text-gray-400 mt-12">
                    Start building by selecting parts from the right panel
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Parts Panel */}
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Building Parts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {currentMonument?.parts.map((part) => {
                const canPlace = part.required ? 
                  currentMonument.parts
                    .filter(p => p.required)
                    .slice(0, currentMonument.parts.filter(p => p.required).indexOf(part))
                    .every(p => p.placed) :
                  true;

                return (
                  <div
                    key={part.id}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      part.placed
                        ? 'border-green-300 bg-green-50'
                        : canPlace
                        ? 'border-blue-300 bg-blue-50 hover:bg-blue-100 cursor-pointer'
                        : 'border-gray-300 bg-gray-50 opacity-50'
                    }`}
                    onClick={() => canPlace && !part.placed && placePart(part.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{part.name}</span>
                          {part.required && (
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
                              Required
                            </span>
                          )}
                          {part.placed && (
                            <CheckCircle className="text-green-600" size={16} />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{part.description}</p>
                      </div>
                      <div className="text-sm font-bold text-green-600">
                        +{part.points}
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Progress */}
          <Card>
            <CardContent className="p-4">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-1">Progress</div>
                <div className="text-lg font-bold">
                  {currentMonument?.parts.filter(p => p.placed).length || 0} / {currentMonument?.parts.length || 0}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div 
                    className="bg-green-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentMonument?.parts.filter(p => p.placed).length || 0) / (currentMonument?.parts.length || 1)) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Button onClick={onBack} variant="outline">
        Back to Games
      </Button>
    </div>
  );
};

export default MonumentBuilder;
