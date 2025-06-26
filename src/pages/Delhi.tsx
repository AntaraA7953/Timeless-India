
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Building2, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Users2, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Delhi = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    { 
      name: 'Red Fort', 
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop', 
      description: 'Iconic Mughal fortress and UNESCO World Heritage Site',
      location: 'Old Delhi'
    },
    { 
      name: 'India Gate', 
      image: 'https://images.unsplash.com/photo-1583223962930-cd3ee5bef85a?w=400&h=300&fit=crop', 
      description: 'War memorial and national monument',
      location: 'Central Delhi'
    },
    { 
      name: 'Qutub Minar', 
      image: 'https://images.unsplash.com/photo-1598366443919-3b9de7bc5e3d?w=400&h=300&fit=crop', 
      description: 'Tallest brick minaret in the world',
      location: 'South Delhi'
    },
    { 
      name: 'Lotus Temple', 
      image: 'https://images.unsplash.com/photo-1554131484-17fb2b1d3c5d?w=400&h=300&fit=crop', 
      description: 'Bahai House of Worship',
      location: 'South Delhi'
    },
    { 
      name: 'Humayuns Tomb', 
      image: 'https://images.unsplash.com/photo-1598366443919-3b9de7bc5e3d?w=400&h=300&fit=crop', 
      description: 'Mughal garden tomb and UNESCO site',
      location: 'South Delhi'
    },
    { 
      name: 'Chandni Chowk', 
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop', 
      description: 'Historic market and cultural hub',
      location: 'Old Delhi'
    }
  ];

  const economicData = [
    { sector: 'Services', percentage: 70, description: 'Finance, IT, Government services', color: 'from-blue-400 to-blue-600' },
    { sector: 'Manufacturing', percentage: 12, description: 'Textiles, electronics, automotive', color: 'from-orange-400 to-orange-600' },
    { sector: 'Trade & Commerce', percentage: 10, description: 'Wholesale and retail trade', color: 'from-green-400 to-green-600' },
    { sector: 'Construction', percentage: 5, description: 'Real estate and infrastructure', color: 'from-purple-400 to-purple-600' },
    { sector: 'Others', percentage: 3, description: 'Agriculture, transport, utilities', color: 'from-gray-400 to-gray-600' }
  ];

  const traditionalDresses = [
    {
      name: 'Punjabi Suit',
      region: 'Delhi Punjabi Community',
      description: 'Traditional dress worn by Punjabi women',
      features: ['Salwar kameez', 'Dupatta', 'Colorful fabrics', 'Festival wear'],
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      name: 'Dhoti Kurta',
      region: 'Delhi Traditional Wear',
      description: 'Traditional attire for men in formal occasions',
      features: ['White dhoti', 'Cotton kurta', 'Ceremonial wear', 'Religious festivals'],
      image: 'https://images.unsplash.com/photo-1583391733956-3794bc9ce64f?w=400&h=300&fit=crop',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Saree',
      region: 'All Communities',
      description: 'Elegant traditional wear for women',
      features: ['Silk fabric', 'Various draping styles', 'Wedding attire', 'Festival occasions'],
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Bandhgala',
      region: 'Delhi Elite Fashion',
      description: 'Formal Indian suit for men',
      features: ['High collar', 'Button-up jacket', 'Formal occasions', 'Political attire'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      gradient: 'from-gray-400 to-black'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-red-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-red-50"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Landmark className="text-red-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Delhi
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Heart of India"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&h=400&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-orange-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Discover India's Capital</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore the political heart, cultural center, and historical treasure of India
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Culture</TabsTrigger>
              <TabsTrigger value="economy" className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Nature</TabsTrigger>
              <TabsTrigger value="society" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Society</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-red-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-red-800">Status</h3>
                  <p className="text-sm text-red-600">National Capital Territory<br/>Union Territory</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-orange-800">Population</h3>
                  <p className="text-sm text-orange-600">32.9 Million<br/>Metropolitan Area</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Building2 className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Area</h3>
                  <p className="text-sm text-green-600">1,484 km²<br/>11 Districts</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Languages</h3>
                  <p className="text-sm text-blue-600">Hindi, English<br/>Punjabi, Urdu</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-orange-500" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌱</div>
                    <h4 className="font-semibold text-green-700 text-lg">Spring</h4>
                    <p className="text-sm text-green-600">Mar-Apr<br/>20-30°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🔥</div>
                    <h4 className="font-semibold text-red-700 text-lg">Summer</h4>
                    <p className="text-sm text-red-600">May-Jun<br/>35-45°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-blue-600">Jul-Sep<br/>28-35°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🍂</div>
                    <h4 className="font-semibold text-orange-700 text-lg">Winter</h4>
                    <p className="text-sm text-orange-600">Oct-Feb<br/>5-20°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Politics Tab */}
          <TabsContent value="politics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-red-400 to-red-600 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=200&fit=crop" 
                    alt="Government Structure"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Flag className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Government Structure</CardTitle>
                  <p className="text-gray-600">National Capital Territory with Special Status</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center p-2 bg-gray-50 rounded-lg">
                      <Building2 size={16} className="mr-3 text-red-400 flex-shrink-0" />
                      <span className="text-gray-700">Lieutenant Governor (Central Appointee)</span>
                    </li>
                    <li className="flex items-center p-2 bg-gray-50 rounded-lg">
                      <Vote size={16} className="mr-3 text-red-400 flex-shrink-0" />
                      <span className="text-gray-700">Delhi Legislative Assembly (70 seats)</span>
                    </li>
                    <li className="flex items-center p-2 bg-gray-50 rounded-lg">
                      <Users2 size={16} className="mr-3 text-red-400 flex-shrink-0" />
                      <span className="text-gray-700">Chief Minister & Council of Ministers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-orange-400 to-orange-600 relative">
                  <img 
                    src="https://images.unsplash.com/photo-1583223962930-cd3ee5bef85a?w=400&h=200&fit=crop" 
                    alt="Political Parties"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Users2 className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Major Political Parties</CardTitle>
                  <p className="text-gray-600">Active political landscape</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <h4 className="font-semibold text-blue-700">Aam Aadmi Party (AAP)</h4>
                      <p className="text-sm text-blue-600">Currently ruling party</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <h4 className="font-semibold text-orange-700">Bharatiya Janata Party (BJP)</h4>
                      <p className="text-sm text-orange-600">Main opposition</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-lg">
                      <h4 className="font-semibold text-green-700">Indian National Congress</h4>
                      <p className="text-sm text-green-600">Traditional party</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Culture Tab */}
          <TabsContent value="culture" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {traditionalDresses.map((dress, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                  <div className={`h-32 bg-gradient-to-r ${dress.gradient} relative`}>
                    <img 
                      src={dress.image} 
                      alt={dress.name}
                      className="w-full h-full object-cover opacity-40"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{dress.name}</CardTitle>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {dress.region}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{dress.description}</p>
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-800">Key Features:</h5>
                      <ul className="grid grid-cols-2 gap-2">
                        {dress.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 flex-shrink-0"></span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Utensils className="mr-3 text-red-500" size={32} />
                  Delhi Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'Chole Bhature', emoji: '🍛' },
                    { name: 'Butter Chicken', emoji: '🍗' },
                    { name: 'Paranthas', emoji: '🥞' },
                    { name: 'Rajma Chawal', emoji: '🍚' },
                    { name: 'Kulfi', emoji: '🍦' },
                    { name: 'Kebabs', emoji: '🍢' }
                  ].map((dish, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                      <div className="text-3xl mb-2">{dish.emoji}</div>
                      <h4 className="font-semibold text-red-700 text-lg">{dish.name}</h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Economy Tab */}
          <TabsContent value="economy" className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Coins className="mr-3 text-green-500" size={32} />
                  Economic Sectors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {economicData.map((sector, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium text-lg">{sector.sector}</div>
                        <div className="font-bold text-xl">{sector.percentage}%</div>
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-6 mb-2">
                        <div 
                          className={`bg-gradient-to-r ${sector.color} h-6 rounded-full transition-all duration-1000 flex items-center justify-end pr-2`}
                          style={{ width: `${sector.percentage}%` }}
                        >
                          <span className="text-white text-xs font-bold">{sector.percentage}%</span>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">{sector.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Tourism Tab */}
          <TabsContent value="tourism" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((attraction, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0 overflow-hidden group"
                  onClick={() => setSelectedAttraction(attraction)}
                >
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={attraction.image} 
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-xl">{attraction.name}</h3>
                      <p className="text-sm opacity-90 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {attraction.location}
                      </p>
                    </div>
                  </div>
                  <CardContent className="p-4 bg-gradient-to-br from-white to-red-50">
                    <p className="text-gray-600">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Nature Tab */}
          <TabsContent value="nature" className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <TreePine className="mr-3 text-green-500" size={32} />
                  Green Spaces & Parks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Lodhi Gardens',
                    'India Gate Lawns',
                    'Nehru Park',
                    'Deer Park',
                    'Raj Ghat',
                    'Buddha Jayanti Park'
                  ].map((park, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
                      <span className="text-2xl mb-2 block">🌳</span>
                      <span className="text-green-700 font-medium">{park}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Society Tab */}
          <TabsContent value="society" className="space-y-6">
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 text-purple-500" size={32} />
                  Demographics & Society
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">📚</span>
                        Literacy Rate
                      </span>
                      <span className="font-bold text-purple-600 text-lg">86.34%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-blue-600 text-lg">97.5%</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-purple-700 text-lg">Major Festivals</h4>
                    <ul className="space-y-2">
                      {[
                        { name: 'Diwali', emoji: '🪔' },
                        { name: 'Holi', emoji: '🎨' },
                        { name: 'Dussehra', emoji: '🏹' },
                        { name: 'Eid', emoji: '🌙' }
                      ].map((festival, index) => (
                        <li key={index} className="flex items-center p-2 bg-orange-50 rounded-lg">
                          <span className="text-xl mr-3">{festival.emoji}</span>
                          <span>{festival.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Delhi;
