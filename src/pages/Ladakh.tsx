
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Palette, Camera, Music, BookOpen, Utensils, Mountain, TreePine, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Ladakh = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-orange-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => navigate('/')}
                className="p-2"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Ladakh - Land of High Passes
                </h1>
                <p className="text-sm text-gray-600">Union Territory | Buddhist Monasteries & High Altitude Culture</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-indigo-100 text-indigo-700">
              Union Territory
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="culture">Culture</TabsTrigger>
            <TabsTrigger value="heritage">Heritage</TabsTrigger>
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 text-indigo-600" />
                    About Ladakh
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Ladakh, known as the "Land of High Passes," is a high-altitude Union Territory famous for its Buddhist monasteries, dramatic landscapes, and unique mountain culture. This cold desert region offers breathtaking views of snow-capped peaks, pristine lakes, and ancient gompas.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Capital</h4>
                      <p className="text-gray-600">Leh</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Area</h4>
                      <p className="text-gray-600">59,146 sq km</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Population</h4>
                      <p className="text-gray-600">274,289</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Languages</h4>
                      <p className="text-gray-600">Ladakhi, Hindi, Urdu</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-purple-600" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mountain className="h-4 w-4 mr-2 text-indigo-500" />
                      <span className="text-sm">High altitude desert</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-indigo-500" />
                      <span className="text-sm">Buddhist majority region</span>
                    </div>
                    <div className="flex items-center">
                      <TreePine className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="text-sm">Ancient monasteries</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-indigo-500" />
                      <span className="text-sm">Adventure tourism hub</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="culture" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Music className="mr-2 text-purple-600" />
                    Music & Dance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Cham Dance</h4>
                      <p className="text-gray-600 text-sm">Masked dance performed in monasteries</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Ladakhi Folk Songs</h4>
                      <p className="text-gray-600 text-sm">Traditional mountain ballads</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Buddhist Chanting</h4>
                      <p className="text-gray-600 text-sm">Monastic prayer rituals</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2 text-indigo-600" />
                    Arts & Crafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Thangka Painting</h4>
                      <p className="text-gray-600 text-sm">Buddhist religious art on silk</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Pashmina Weaving</h4>
                      <p className="text-gray-600 text-sm">Fine wool from Changpa goats</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Metal Craft</h4>
                      <p className="text-gray-600 text-sm">Traditional Buddhist artifacts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Utensils className="mr-2 text-orange-600" />
                  Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Thukpa</h4>
                    <p className="text-gray-600 text-sm">Tibetan noodle soup</p>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Momos</h4>
                    <p className="text-gray-600 text-sm">Steamed dumplings</p>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Butter Tea</h4>
                    <p className="text-gray-600 text-sm">Traditional Tibetan tea</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="heritage" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2 text-purple-600" />
                    Historical Significance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Silk Route Heritage</h4>
                      <p className="text-gray-600 text-sm">Ancient trade route connections</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Buddhist Kingdom</h4>
                      <p className="text-gray-600 text-sm">Centuries of Buddhist rule and culture</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Tibetan Influence</h4>
                      <p className="text-gray-600 text-sm">Strong cultural ties with Tibet</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-indigo-600" />
                    Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Hemis Festival</h4>
                      <p className="text-gray-600 text-sm">Major Buddhist monastery festival</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Losar</h4>
                      <p className="text-gray-600 text-sm">Tibetan New Year celebration</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Ladakh Festival</h4>
                      <p className="text-gray-600 text-sm">Cultural showcase of Ladakhi traditions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="attractions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mountain className="mr-2 text-indigo-600" />
                    Pangong Lake
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    High-altitude lake with stunning blue waters.
                  </p>
                  <Badge variant="outline">Natural</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="mr-2 text-purple-600" />
                    Hemis Monastery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Largest and wealthiest monastery in Ladakh.
                  </p>
                  <Badge variant="outline">Monastery</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Mountain className="mr-2 text-indigo-600" />
                    Nubra Valley
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Cold desert valley with Bactrian camels.
                  </p>
                  <Badge variant="outline">Valley</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TreePine className="mr-2 text-purple-600" />
                    Thiksey Monastery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    12-story monastery complex with panoramic views.
                  </p>
                  <Badge variant="outline">Monastery</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Camera className="mr-2 text-indigo-600" />
                    Leh Palace
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Former royal palace overlooking Leh town.
                  </p>
                  <Badge variant="outline">Palace</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="mr-2 text-purple-600" />
                    Magnetic Hill
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Mysterious hill with gravitational anomaly.
                  </p>
                  <Badge variant="outline">Natural Wonder</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Ladakh;
