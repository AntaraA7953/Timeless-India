
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const JammuKashmir = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    { 
      name: 'Dal Lake', 
      image: '/lovable-uploads/placeholder.svg', 
      description: 'Famous for houseboats and shikaras',
      location: 'Srinagar'
    },
    { 
      name: 'Gulmarg', 
      image: '/lovable-uploads/placeholder.svg', 
      description: 'Premier skiing destination',
      location: 'Baramulla'
    },
    { 
      name: 'Pahalgam', 
      image: '/lovable-uploads/placeholder.svg', 
      description: 'Valley of shepherds',
      location: 'Anantnag'
    },
    { 
      name: 'Sonamarg', 
      image: '/lovable-uploads/placeholder.svg', 
      description: 'Meadow of gold',
      location: 'Ganderbal'
    },
    { 
      name: 'Vaishno Devi', 
      image: '/lovable-uploads/placeholder.svg', 
      description: 'Sacred pilgrimage site',
      location: 'Jammu'
    },
    { 
      name: 'Amarnath Cave', 
      image: '/lovable-uploads/placeholder.svg', 
      description: 'Holy ice lingam shrine',
      location: 'Anantnag'
    }
  ];

  const economicData = [
    { sector: 'Agriculture', percentage: 23, description: 'Saffron, apples, walnuts' },
    { sector: 'Tourism', percentage: 18, description: 'Major revenue source' },
    { sector: 'Handicrafts', percentage: 15, description: 'Carpets, shawls, woodwork' },
    { sector: 'Horticulture', percentage: 20, description: 'Fruits and dry fruits' },
    { sector: 'Services', percentage: 24, description: 'Government and private services' }
  ];

  const culturalElements = [
    { title: 'Kashmiri Pandit Culture', icon: Users, items: ['Shivaratri Festival', 'Sanskrit Literature', 'Traditional Music'] },
    { title: 'Islamic Heritage', icon: Star, items: ['Sufi Traditions', 'Islamic Architecture', 'Kashmiri Cuisine'] },
    { title: 'Buddhist Legacy', icon: Mountain, items: ['Ladakhi Monasteries', 'Tibetan Buddhism', 'Ancient Stupas'] },
    { title: 'Dogra Heritage', icon: TreePine, items: ['Dogri Language', 'Folk Traditions', 'Royal History'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-blue-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Mountain className="text-blue-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Jammu & Kashmir
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              "Paradise on Earth"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-64 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Explore the Crown of India</h2>
            <p className="text-xl opacity-90">Discover the breathtaking beauty, rich culture, and diverse heritage of Jammu & Kashmir</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="economy">Economy</TabsTrigger>
            <TabsTrigger value="tourism">Tourism</TabsTrigger>
            <TabsTrigger value="nature">Nature</TabsTrigger>
            <TabsTrigger value="society">Society</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <MapPin className="mx-auto mb-4 text-blue-500" size={32} />
                  <h3 className="font-bold text-lg mb-2">Capitals</h3>
                  <p className="text-sm text-gray-600">Srinagar (Summer)<br/>Jammu (Winter)</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="mx-auto mb-4 text-green-500" size={32} />
                  <h3 className="font-bold text-lg mb-2">Population</h3>
                  <p className="text-sm text-gray-600">12.5 Million<br/>Multi-ethnic</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Mountain className="mx-auto mb-4 text-purple-500" size={32} />
                  <h3 className="font-bold text-lg mb-2">Geography</h3>
                  <p className="text-sm text-gray-600">Himalayan Region<br/>222,236 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Star className="mx-auto mb-4 text-yellow-500" size={32} />
                  <h3 className="font-bold text-lg mb-2">Languages</h3>
                  <p className="text-sm text-gray-600">Kashmiri, Urdu<br/>Dogri, Hindi</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Thermometer className="mr-2 text-blue-500" />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-700">Spring</h4>
                    <p className="text-sm">Mar-May<br/>15-25°C</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-700">Summer</h4>
                    <p className="text-sm">Jun-Aug<br/>20-30°C</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-700">Autumn</h4>
                    <p className="text-sm">Sep-Nov<br/>10-20°C</p>
                  </div>
                  <div className="text-center p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-gray-700">Winter</h4>
                    <p className="text-sm">Dec-Feb<br/>-5-10°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Culture Tab */}
          <TabsContent value="culture" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {culturalElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <IconComponent className="mr-2 text-purple-500" size={24} />
                        {element.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {element.items.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <Star size={12} className="mr-2 text-yellow-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="mr-2 text-red-500" />
                  Traditional Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Rogan Josh', 'Wazwan', 'Kahwa', 'Modur Pulav', 'Yakhni', 'Tabak Maaz'].map((dish, index) => (
                    <div key={index} className="text-center p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                      <h4 className="font-semibold text-red-700">{dish}</h4>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Economy Tab */}
          <TabsContent value="economy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coins className="mr-2 text-green-500" />
                  Economic Sectors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {economicData.map((sector, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-32 text-sm font-medium">{sector.sector}</div>
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-blue-500 h-4 rounded-full transition-all duration-1000"
                          style={{ width: `${sector.percentage}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-sm font-bold">{sector.percentage}%</div>
                      <div className="w-48 text-xs text-gray-600">{sector.description}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Agricultural Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>🌾 Rice & Wheat</li>
                    <li>🍎 Apples & Pears</li>
                    <li>🥜 Walnuts & Almonds</li>
                    <li>🌸 Saffron (World's finest)</li>
                    <li>☘️ Medicinal Plants</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Handicrafts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>🧶 Pashmina Shawls</li>
                    <li>🏺 Paper Mache</li>
                    <li>🪵 Walnut Wood Carving</li>
                    <li>🧿 Kashmir Carpets</li>
                    <li>⚱️ Copper & Silverware</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Industries</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>🏭 Silk Production</li>
                    <li>⚡ Hydroelectric Power</li>
                    <li>🧵 Textile Manufacturing</li>
                    <li>🍯 Food Processing</li>
                    <li>💎 Handicraft Export</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Tourism Tab */}
          <TabsContent value="tourism" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {attractions.map((attraction, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setSelectedAttraction(attraction)}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="font-bold text-lg">{attraction.name}</h3>
                      <p className="text-sm opacity-90">{attraction.location}</p>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-gray-600">{attraction.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedAttraction && (
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center">
                      <Camera className="mr-2 text-blue-500" />
                      {selectedAttraction.name}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedAttraction(null)}
                    >
                      Close
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{selectedAttraction.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {selectedAttraction.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Nature Tab */}
          <TabsContent value="nature" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TreePine className="mr-2 text-green-500" />
                    Flora & Fauna
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Wildlife</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span>🐆 Snow Leopard</span>
                        <span>🦌 Hangul Deer</span>
                        <span>🐻 Himalayan Black Bear</span>
                        <span>🦅 Golden Eagle</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">Flora</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <span>🌲 Deodar</span>
                        <span>🌿 Alpine Meadows</span>
                        <span>🌸 Rhododendron</span>
                        <span>🌾 Medicinal Herbs</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mountain className="mr-2 text-blue-500" />
                    Geographic Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Mountain size={16} className="mr-2 text-blue-500" />
                      Himalayan & Karakoram Ranges
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-blue-400 rounded mr-2"></span>
                      Kashmir Valley
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-green-400 rounded mr-2"></span>
                      Jammu Plains
                    </li>
                    <li className="flex items-center">
                      <span className="w-4 h-4 bg-purple-400 rounded mr-2"></span>
                      Ladakh Plateau
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Protected Areas & National Parks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Dachigam National Park',
                    'Hemis National Park',
                    'Kishtwar National Park',
                    'Salim Ali National Park',
                    'Kazinag National Park',
                    'Hirpora Wildlife Sanctuary'
                  ].map((park, index) => (
                    <div key={index} className="p-3 bg-green-50 rounded-lg text-center">
                      <span className="text-green-700 font-medium text-sm">{park}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Society Tab */}
          <TabsContent value="society" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-blue-500" />
                    Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Literacy Rate</span>
                      <span className="font-bold text-blue-600">68.74%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Urban Population</span>
                      <span className="font-bold text-green-600">27.38%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Rural Population</span>
                      <span className="font-bold text-orange-600">72.62%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-purple-500" />
                    Major Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <Star size={12} className="mr-2 text-yellow-400" />
                      Shivratri (Herath)
                    </li>
                    <li className="flex items-center">
                      <Star size={12} className="mr-2 text-yellow-400" />
                      Eid-ul-Fitr
                    </li>
                    <li className="flex items-center">
                      <Star size={12} className="mr-2 text-yellow-400" />
                      Baisakhi
                    </li>
                    <li className="flex items-center">
                      <Star size={12} className="mr-2 text-yellow-400" />
                      Diwali
                    </li>
                    <li className="flex items-center">
                      <Star size={12} className="mr-2 text-yellow-400" />
                      Losar (Ladakh)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Music className="mr-2 text-indigo-500" />
                  Traditional Arts & Crafts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-indigo-700 mb-3">Music & Dance</h4>
                    <ul className="text-sm space-y-1">
                      <li>Rouf Dance</li>
                      <li>Hafiza Dance</li>
                      <li>Sufi Music</li>
                      <li>Folk Songs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-700 mb-3">Handicrafts</h4>
                    <ul className="text-sm space-y-1">
                      <li>Carpet Weaving</li>
                      <li>Shawl Making</li>
                      <li>Wood Carving</li>
                      <li>Paper Mache</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-700 mb-3">Literature</h4>
                    <ul className="text-sm space-y-1">
                      <li>Kashmiri Poetry</li>
                      <li>Sufi Literature</li>
                      <li>Dogri Literature</li>
                      <li>Folk Tales</li>
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

export default JammuKashmir;
