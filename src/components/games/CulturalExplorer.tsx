
import React, { useState, useEffect } from 'react';
import { MapPin, Star, Gift, ArrowRight, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Location {
  id: string;
  name: string;
  state: string;
  description: string;
  culturalGem: string;
  visited: boolean;
  points: number;
  x: number;
  y: number;
}

const locations: Location[] = [
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    state: 'Uttar Pradesh',
    description: 'A symbol of eternal love built by Shah Jahan',
    culturalGem: 'Mughal Architecture Masterpiece',
    visited: false,
    points: 15,
    x: 60,
    y: 35
  },
  {
    id: 'golden-temple',
    name: 'Golden Temple',
    state: 'Punjab',
    description: 'The holiest Gurudwara of Sikhism',
    culturalGem: 'Community Kitchen serving millions',
    visited: false,
    points: 12,
    x: 45,
    y: 20
  },
  {
    id: 'backwaters',
    name: 'Kerala Backwaters',
    state: 'Kerala',
    description: 'Serene network of lagoons and lakes',
    culturalGem: 'Traditional Houseboat Experience',
    visited: false,
    points: 10,
    x: 30,
    y: 85
  },
  {
    id: 'hampi',
    name: 'Hampi',
    state: 'Karnataka',
    description: 'Ruins of the Vijayanagara Empire',
    culturalGem: 'UNESCO World Heritage Site',
    visited: false,
    points: 18,
    x: 35,
    y: 70
  },
  {
    id: 'rajasthan-forts',
    name: 'Rajasthan Forts',
    state: 'Rajasthan',
    description: 'Majestic forts and palaces',
    culturalGem: 'Royal Heritage and Folk Culture',
    visited: false,
    points: 20,
    x: 35,
    y: 40
  },
  {
    id: 'darjeeling',
    name: 'Darjeeling',
    state: 'West Bengal',
    description: 'Tea gardens and mountain views',
    culturalGem: 'Himalayan Railway Heritage',
    visited: false,
    points: 14,
    x: 75,
    y: 25
  }
];

interface CulturalExplorerProps {
  onBack: () => void;
  onComplete: (score: number) => void;
}

const CulturalExplorer: React.FC<CulturalExplorerProps> = ({ onBack, onComplete }) => {
  const [gameLocations, setGameLocations] = useState<Location[]>(locations);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [totalScore, setTotalScore] = useState(0);
  const [collectibles, setCollectibles] = useState<string[]>([]);
  const [gameComplete, setGameComplete] = useState(false);

  const handleLocationClick = (location: Location) => {
    if (location.visited) return;
    setSelectedLocation(location);
  };

  const handleExploreLocation = () => {
    if (!selectedLocation) return;

    const updatedLocations = gameLocations.map(loc => 
      loc.id === selectedLocation.id 
        ? { ...loc, visited: true }
        : loc
    );

    setGameLocations(updatedLocations);
    setTotalScore(totalScore + selectedLocation.points);
    setCollectibles([...collectibles, selectedLocation.culturalGem]);

    // Check if all locations are visited
    if (updatedLocations.every(loc => loc.visited)) {
      setGameComplete(true);
      onComplete(totalScore + selectedLocation.points);
    }

    setSelectedLocation(null);
  };

  const handleRestart = () => {
    setGameLocations(locations.map(loc => ({ ...loc, visited: false })));
    setSelectedLocation(null);
    setTotalScore(0);
    setCollectibles([]);
    setGameComplete(false);
  };

  if (gameComplete) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <Star className="mx-auto mb-4 text-yellow-500" size={48} />
          <CardTitle className="text-2xl">Cultural Explorer Complete!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-4xl font-bold text-green-600">{totalScore} points</div>
          <p className="text-gray-600">
            You've discovered all the cultural gems of India!
          </p>
          <div className="bg-amber-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Cultural Gems Collected:</h4>
            <div className="space-y-1">
              {collectibles.map((gem, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <Gift className="text-amber-600" size={16} />
                  <span className="text-sm">{gem}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button onClick={handleRestart} className="bg-green-500 hover:bg-green-600">
              Explore Again
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
              <MapPin className="text-green-600" size={24} />
              <span className="font-semibold">Cultural Explorer</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-500" size={20} />
                <span className="font-bold">{totalScore} points</span>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="text-purple-500" size={20} />
                <span>{collectibles.length} gems</span>
              </div>
              <div className="text-sm text-gray-500">
                {gameLocations.filter(loc => loc.visited).length} of {gameLocations.length} explored
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Interactive Map */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Explore India's Cultural Heritage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 overflow-hidden">
                {/* Simplified India Map Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-blue-200 opacity-50"></div>
                
                {/* Location Markers */}
                {gameLocations.map((location) => (
                  <button
                    key={location.id}
                    onClick={() => handleLocationClick(location)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                      location.visited 
                        ? 'text-green-600 scale-110' 
                        : selectedLocation?.id === location.id
                        ? 'text-blue-600 scale-125'
                        : 'text-red-500 hover:scale-110'
                    }`}
                    style={{ 
                      left: `${location.x}%`, 
                      top: `${location.y}%` 
                    }}
                  >
                    <div className="relative">
                      <MapPin size={32} fill="currentColor" />
                      {location.visited && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                          <Star size={10} className="text-white" />
                        </div>
                      )}
                    </div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs font-medium whitespace-nowrap">
                      {location.name}
                    </div>
                  </button>
                ))}

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
                  <div className="text-xs font-semibold mb-2">Legend:</div>
                  <div className="space-y-1 text-xs">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-red-500" />
                      <span>Unexplored</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <MapPin size={16} className="text-green-600" />
                        <Star size={8} className="absolute -top-1 -right-1 text-green-500" />
                      </div>
                      <span>Explored</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Location Details */}
        <div className="space-y-4">
          {selectedLocation ? (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">{selectedLocation.name}</CardTitle>
                <p className="text-sm text-gray-600">{selectedLocation.state}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{selectedLocation.description}</p>
                
                <div className="bg-amber-50 p-3 rounded-lg">
                  <h4 className="font-semibold text-amber-800 mb-1">Cultural Gem:</h4>
                  <p className="text-amber-700 text-sm">{selectedLocation.culturalGem}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Reward:</span>
                  <span className="font-bold text-green-600">+{selectedLocation.points} points</span>
                </div>

                <Button 
                  onClick={handleExploreLocation}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Explore Location
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-4 text-gray-400" size={48} />
                <h3 className="font-semibold text-gray-600 mb-2">Select a Location</h3>
                <p className="text-sm text-gray-500">
                  Click on any red marker to explore that cultural destination
                </p>
              </CardContent>
            </Card>
          )}

          {/* Collectibles */}
          {collectibles.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Gift className="mr-2 text-purple-500" size={20} />
                  Cultural Gems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {collectibles.map((gem, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-purple-50 rounded">
                      <Star className="text-purple-600" size={16} />
                      <span className="text-sm text-purple-800">{gem}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <Button onClick={onBack} variant="outline">
        <Home className="mr-2 h-4 w-4" />
        Back to Games
      </Button>
    </div>
  );
};

export default CulturalExplorer;
