
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Palette, Camera, Music, BookOpen, Utensils, Waves, TreePine, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const AndamanNicobar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Andaman & Nicobar Islands - Pearl of the Orient
                </h1>
                <p className="text-sm text-gray-600">Union Territory | Tribal Culture & Marine Heritage</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-teal-100 text-teal-700">
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
                    <MapPin className="mr-2 text-teal-600" />
                    About Andaman & Nicobar Islands
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The Andaman & Nicobar Islands are a group of islands in the Bay of Bengal, known for their pristine beaches, rich marine life, and indigenous tribal communities. These tropical islands offer crystal-clear waters, coral reefs, and untouched natural beauty.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Capital</h4>
                      <p className="text-gray-600">Port Blair</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Area</h4>
                      <p className="text-gray-600">8,249 sq km</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Population</h4>
                      <p className="text-gray-600">379,944</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Languages</h4>
                      <p className="text-gray-600">Hindi, English, Bengali</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-blue-600" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Waves className="h-4 w-4 mr-2 text-teal-500" />
                      <span className="text-sm">572 islands total</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-teal-500" />
                      <span className="text-sm">Rich marine biodiversity</span>
                    </div>
                    <div className="flex items-center">
                      <TreePine className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm">Tropical rainforests</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-teal-500" />
                      <span className="text-sm">Indigenous tribes</span>
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
                    <Music className="mr-2 text-blue-600" />
                    Music & Dance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Tribal Folk Songs</h4>
                      <p className="text-gray-600 text-sm">Traditional songs of indigenous communities</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Island Music</h4>
                      <p className="text-gray-600 text-sm">Unique blend of various cultural influences</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sea Shanties</h4>
                      <p className="text-gray-600 text-sm">Maritime musical traditions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2 text-teal-600" />
                    Arts & Crafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Shell Craft</h4>
                      <p className="text-gray-600 text-sm">Beautiful artifacts made from seashells</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Wood Carving</h4>
                      <p className="text-gray-600 text-sm">Traditional carvings from local timber</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Coconut Craft</h4>
                      <p className="text-gray-600 text-sm">Utilitarian and decorative coconut items</p>
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
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Fresh Seafood</h4>
                    <p className="text-gray-600 text-sm">Lobster, crab, and fish varieties</p>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Coconut Curry</h4>
                    <p className="text-gray-600 text-sm">Rich coconut-based preparations</p>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Tropical Fruits</h4>
                    <p className="text-gray-600 text-sm">Fresh mangoes, bananas, and papayas</p>
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
                    <BookOpen className="mr-2 text-blue-600" />
                    Historical Significance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Cellular Jail</h4>
                      <p className="text-gray-600 text-sm">Historic prison used during British rule</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Indigenous Tribes</h4>
                      <p className="text-gray-600 text-sm">Ancient tribal communities and traditions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Maritime History</h4>
                      <p className="text-gray-600 text-sm">Strategic location in maritime trade routes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-teal-600" />
                    Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Island Tourism Festival</h4>
                      <p className="text-gray-600 text-sm">Annual celebration of island culture</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Beach Festival</h4>
                      <p className="text-gray-600 text-sm">Coastal celebrations and water sports</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Monsoon Festival</h4>
                      <p className="text-gray-600 text-sm">Celebration during the rainy season</p>
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
                    <BookOpen className="mr-2 text-teal-600" />
                    Cellular Jail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Historic colonial prison, now a national memorial.
                  </p>
                  <Badge variant="outline">Heritage</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Waves className="mr-2 text-blue-600" />
                    Radhanagar Beach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Award-winning beach with pristine white sand.
                  </p>
                  <Badge variant="outline">Beach</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Waves className="mr-2 text-teal-600" />
                    Scuba Diving
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    World-class diving spots with coral reefs.
                  </p>
                  <Badge variant="outline">Adventure</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TreePine className="mr-2 text-blue-600" />
                    Mahatma Gandhi Marine Park
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Protected marine ecosystem with diverse wildlife.
                  </p>
                  <Badge variant="outline">National Park</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Camera className="mr-2 text-teal-600" />
                    Ross Island
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Former administrative headquarters with ruins.
                  </p>
                  <Badge variant="outline">Historical</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="mr-2 text-blue-600" />
                    Neil Island
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Serene island perfect for relaxation and nature walks.
                  </p>
                  <Badge variant="outline">Island</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AndamanNicobar;
