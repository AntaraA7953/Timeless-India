
import React, { useState } from 'react';
import { Trophy, Gamepad2, Brain, Star, Timer, Users, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import HeritageQuiz from './games/HeritageQuiz';
import CulturalExplorer from './games/CulturalExplorer';
import FestivalMatcher from './games/FestivalMatcher';
import MonumentBuilder from './games/MonumentBuilder';
import ChessGame from './games/ChessGame';

const GameSection = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [playerScores, setPlayerScores] = useState<{[key: string]: number}>({});

  const games = [
    {
      id: 'heritage-quiz',
      title: 'Heritage Quiz Master',
      description: 'Test your knowledge of Indian monuments, festivals, and traditions',
      icon: Brain,
      difficulty: 'Medium',
      players: '1-4',
      duration: '10-15 min',
      color: 'from-blue-400 to-indigo-500',
      features: ['Multiple Choice', 'Timer Challenge', 'Explanations']
    },
    {
      id: 'cultural-explorer',
      title: 'Cultural Explorer',
      description: 'Navigate through different states and discover hidden cultural gems',
      icon: Gamepad2,
      difficulty: 'Easy',
      players: '1',
      duration: '20-30 min',
      color: 'from-emerald-400 to-teal-500',
      features: ['Interactive Map', 'Story Mode', 'Collectibles']
    },
    {
      id: 'festival-matcher',
      title: 'Festival Matcher',
      description: 'Match festivals with their regions and learn about celebrations',
      icon: Star,
      difficulty: 'Easy',
      players: '1-2',
      duration: '5-10 min',
      color: 'from-purple-400 to-pink-500',
      features: ['Memory Game', 'Timer Challenge', 'Educational']
    },
    {
      id: 'monument-builder',
      title: 'Monument Builder',
      description: 'Build famous Indian monuments and learn their architectural styles',
      icon: Trophy,
      difficulty: 'Hard',
      players: '1',
      duration: '30-45 min',
      color: 'from-orange-400 to-red-500',
      features: ['3D Building', 'Historical Facts', 'Progress Tracking']
    },
    {
      id: 'chess-game',
      title: 'Chess Master',
      description: 'Play strategic chess against an AI opponent and improve your skills',
      icon: Brain,
      difficulty: 'Medium',
      players: '1 vs Computer',
      duration: '15-45 min',
      color: 'from-gray-600 to-gray-800',
      features: ['AI Opponent', 'Move History', 'Score Tracking']
    }
  ];

  const leaderboard = [
    { name: 'Arjun Kumar', score: 2850, level: 'Heritage Master' },
    { name: 'Priya Sharma', score: 2720, level: 'Cultural Expert' },
    { name: 'Vikram Singh', score: 2680, level: 'Cultural Expert' },
    { name: 'Anita Patel', score: 2540, level: 'Tradition Keeper' },
    { name: 'Rahul Gupta', score: 2490, level: 'Tradition Keeper' }
  ];

  const handleGameSelect = (gameId: string) => {
    setSelectedGame(gameId);
  };

  const handleGameComplete = (gameId: string, score: number) => {
    setPlayerScores({ ...playerScores, [gameId]: score });
    setSelectedGame(null);
  };

  const handleBackToGames = () => {
    setSelectedGame(null);
  };

  // Render individual game components
  if (selectedGame) {
    switch (selectedGame) {
      case 'heritage-quiz':
        return (
          <div className="container mx-auto px-4 py-8">
            <HeritageQuiz 
              onBack={handleBackToGames}
              onComplete={(score) => handleGameComplete('heritage-quiz', score)}
            />
          </div>
        );
      case 'cultural-explorer':
        return (
          <div className="container mx-auto px-4 py-8">
            <CulturalExplorer 
              onBack={handleBackToGames}
              onComplete={(score) => handleGameComplete('cultural-explorer', score)}
            />
          </div>
        );
      case 'festival-matcher':
        return (
          <div className="container mx-auto px-4 py-8">
            <FestivalMatcher 
              onBack={handleBackToGames}
              onComplete={(score) => handleGameComplete('festival-matcher', score)}
            />
          </div>
        );
      case 'monument-builder':
        return (
          <div className="container mx-auto px-4 py-8">
            <MonumentBuilder 
              onBack={handleBackToGames}
              onComplete={(score) => handleGameComplete('monument-builder', score)}
            />
          </div>
        );
      case 'chess-game':
        return (
          <div className="container mx-auto px-4 py-8">
            <ChessGame 
              onBack={handleBackToGames}
              onComplete={(score) => handleGameComplete('chess-game', score)}
            />
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Interactive Games & Quizzes
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Learn about Indian culture through engaging games and competitive challenges
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Games Grid */}
        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-2 gap-6">
            {games.map((game, index) => {
              const Icon = game.icon;
              const playerScore = playerScores[game.id];
              
              return (
                <Card 
                  key={game.id}
                  className="border-0 shadow-xl cursor-pointer transform transition-all duration-500 hover:scale-105 bg-white hover:shadow-2xl"
                >
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${game.color} 
                      flex items-center justify-center mb-4 hover:animate-float`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {game.title}
                    </CardTitle>
                    {playerScore && (
                      <div className="flex items-center space-x-2">
                        <Star className="text-yellow-500" size={16} />
                        <span className="text-sm font-medium text-green-600">
                          Best Score: {playerScore}
                        </span>
                      </div>
                    )}
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {game.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Difficulty:</span>
                        <span className={`font-medium ${
                          game.difficulty === 'Easy' ? 'text-green-600' :
                          game.difficulty === 'Medium' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {game.difficulty}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Players:</span>
                        <span className="font-medium text-gray-700">{game.players}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium text-gray-700">{game.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {game.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-gradient-to-r from-saffron-100 to-orange-100 
                              text-saffron-700 rounded-full text-xs font-medium"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleGameSelect(game.id)}
                      className={`w-full bg-gradient-to-r ${game.color} 
                        text-white hover:opacity-90 hover-scale`}
                    >
                      <Gamepad2 className="mr-2 h-4 w-4" />
                      Play Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Leaderboard & Stats */}
        <div className="space-y-6">
          {/* Leaderboard */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-purple-50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gradient flex items-center">
                <Trophy className="mr-2 text-yellow-500" />
                Top Players
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {leaderboard.map((player, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        index === 0 ? 'bg-yellow-100 text-yellow-600' :
                        index === 1 ? 'bg-gray-100 text-gray-600' :
                        index === 2 ? 'bg-orange-100 text-orange-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{player.name}</div>
                        <div className="text-xs text-gray-500">{player.level}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-saffron-600">{player.score}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Game Stats */}
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-emerald-50">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gradient">Game Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { icon: Users, label: 'Active Players', value: '25,847', color: 'text-blue-600' },
                  { icon: Trophy, label: 'Challenges Completed', value: '1,23,456', color: 'text-green-600' },
                  { icon: Timer, label: 'Hours Played', value: '45,678', color: 'text-purple-600' },
                  { icon: Star, label: 'Perfect Scores', value: '8,934', color: 'text-yellow-600' }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <stat.icon className={`${stat.color}`} size={20} />
                      <span className="text-gray-700">{stat.label}</span>
                    </div>
                    <span className="font-bold text-gray-800">{stat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Join Tournament */}
          <Card className="border-0 shadow-xl bg-gradient-to-r from-saffron-500 to-orange-600 text-white">
            <CardContent className="p-6 text-center">
              <Trophy className="mx-auto mb-3 animate-float" size={36} />
              <h3 className="text-lg font-bold mb-2">Weekly Tournament</h3>
              <p className="text-sm opacity-90 mb-4">
                Compete with players nationwide in our heritage knowledge championship
              </p>
              <Button 
                variant="secondary"
                className="bg-white text-saffron-600 hover:bg-gray-100 hover-scale"
              >
                Join Tournament
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
