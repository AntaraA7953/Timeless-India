
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Palette, Camera, Music, BookOpen, Utensils, Waves, TreePine, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Lakshadweep = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-turquoise-50 to-teal-50">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                  Lakshadweep - Coral Paradise
                </h1>
                <p className="text-sm text-gray-600">Union Territory | Island Traditions with Arab Influence</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
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
                    <MapPin className="mr-2 text-cyan-600" />
                    About Lakshadweep
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Lakshadweep, meaning "hundred thousand islands" in Sanskrit, is India's smallest Union Territory. This tropical archipelago in the Arabian Sea is famous for its coral reefs, pristine lagoons, and unique island culture influenced by Arab traditions.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Capital</h4>
                      <p className="text-gray-600">Kavaratti</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Area</h4>
                      <p className="text-gray-600">32 sq km</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Population</h4>
                      <p className="text-gray-600">64,473</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Languages</h4>
                      <p className="text-gray-600">Malayalam, Jeseri, Mahl</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-teal-600" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Waves className="h-4 w-4 mr-2 text-cyan-500" />
                      <span className="text-sm">36 coral islands</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-cyan-500" />
                      <span className="text-sm">Coral reefs and lagoons</span>
                    </div>
                    <div className="flex items-center">
                      <TreePine className="h-4 w-4 mr-2 text-teal-500" />
                      <span className="text-sm">Coconut cultivation</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-cyan-500" />
                      <span className="text-sm">Smallest UT of India</span>
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
                    <Music className="mr-2 text-teal-600" />
                    Music & Dance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Lava Dance</h4>
                      <p className="text-gray-600 text-sm">Traditional folk dance performed during festivals</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Kolkali</h4>
                      <p className="text-gray-600 text-sm">Stick dance with rhythmic movements</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Island Songs</h4>
                      <p className="text-gray-600 text-sm">Maritime folk songs and ballads</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2 text-cyan-600" />
                    Arts & Crafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Coir Products</h4>
                      <p className="text-gray-600 text-sm">Traditional coconut fiber crafts</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Boat Making</h4>
                      <p className="text-gray-600 text-sm">Traditional dhow and fishing boat construction</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Shell Craft</h4>
                      <p className="text-gray-600 text-sm">Decorative items from sea shells</p>
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
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Seafood Curry</h4>
                    <p className="text-gray-600 text-sm">Fresh fish in coconut milk</p>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Mas Huni</h4>
                    <p className="text-gray-600 text-sm">Tuna with grated coconut</p>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Coconut Water</h4>
                    <p className="text-gray-600 text-sm">Fresh tender coconut drink</p>
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
                    <BookOpen className="mr-2 text-teal-600" />
                    Historical Significance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Arab Influence</h4>
                      <p className="text-gray-600 text-sm">Islamic traditions and architecture</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Maritime Heritage</h4>
                      <p className="text-gray-600 text-sm">Historic trade routes and navigation</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Coral Conservation</h4>
                      <p className="text-gray-600 text-sm">Traditional marine ecosystem protection</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-cyan-600" />
                    Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Eid Celebrations</h4>
                      <p className="text-gray-600 text-sm">Major Islamic festivals</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Island Festival</h4>
                      <p className="text-gray-600 text-sm">Celebration of island culture</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Coconut Festival</h4>
                      <p className="text-gray-600 text-sm">Harvest celebration</p>
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
                    <Waves className="mr-2 text-cyan-600" />
                    Agatti Island
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Gateway island with stunning coral reefs and lagoons.
                  </p>
                  <Badge variant="outline">Island</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="mr-2 text-teal-600" />
                    Bangaram Island
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Pristine uninhabited island perfect for water sports.
                  </p>
                  <Badge variant="outline">Beach</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Waves className="mr-2 text-cyan-600" />
                    Kavaratti Island
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Capital island with beautiful lagoons and marine museum.
                  </p>
                  <Badge variant="outline">Capital</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TreePine className="mr-2 text-teal-600" />
                    Coral Reefs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Diverse marine ecosystem with colorful coral formations.
                  </p>
                  <Badge variant="outline">Marine Life</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Camera className="mr-2 text-cyan-600" />
                    Water Sports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Scuba diving, snorkeling, and kayaking opportunities.
                  </p>
                  <Badge variant="outline">Adventure</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="mr-2 text-teal-600" />
                    Minicoy Island
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Southernmost island with unique Maldivian culture.
                  </p>
                  <Badge variant="outline">Cultural</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Lakshadweep;
