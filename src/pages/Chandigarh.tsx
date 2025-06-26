
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Palette, Camera, Music, BookOpen, Utensils, TreePine, Building, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Chandigarh = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-saffron-600 to-emerald-600 bg-clip-text text-transparent">
                  Chandigarh - The City Beautiful
                </h1>
                <p className="text-sm text-gray-600">Union Territory | Modern Urban Planning & Punjabi Heritage</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
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
                    <MapPin className="mr-2 text-saffron-600" />
                    About Chandigarh
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Chandigarh, known as "The City Beautiful," is a Union Territory and planned city that serves as the capital of both Punjab and Haryana. Designed by renowned architect Le Corbusier, it represents modern urban planning at its finest while maintaining its cultural roots.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Capital</h4>
                      <p className="text-gray-600">Chandigarh</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Area</h4>
                      <p className="text-gray-600">114 sq km</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Population</h4>
                      <p className="text-gray-600">1.05 million</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Languages</h4>
                      <p className="text-gray-600">Hindi, Punjabi, English</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-emerald-600" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-orange-500" />
                      <span className="text-sm">First planned city of India</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-orange-500" />
                      <span className="text-sm">Designed by Le Corbusier</span>
                    </div>
                    <div className="flex items-center">
                      <TreePine className="h-4 w-4 mr-2 text-emerald-500" />
                      <span className="text-sm">Green city with parks</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                      <span className="text-sm">Capital of two states</span>
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
                    <Music className="mr-2 text-emerald-600" />
                    Music & Dance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Bhangra</h4>
                      <p className="text-gray-600 text-sm">Energetic folk dance of Punjab</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Giddha</h4>
                      <p className="text-gray-600 text-sm">Traditional women's folk dance</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Classical Music</h4>
                      <p className="text-gray-600 text-sm">Rich tradition of classical music</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2 text-saffron-600" />
                    Arts & Crafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Modern Art</h4>
                      <p className="text-gray-600 text-sm">Contemporary art galleries and museums</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Rock Garden</h4>
                      <p className="text-gray-600 text-sm">Unique art installation by Nek Chand</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Architecture</h4>
                      <p className="text-gray-600 text-sm">Modernist architectural style</p>
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
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Chole Bhature</h4>
                    <p className="text-gray-600 text-sm">Popular North Indian dish</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Butter Chicken</h4>
                    <p className="text-gray-600 text-sm">Creamy tomato-based curry</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Lassi</h4>
                    <p className="text-gray-600 text-sm">Traditional yogurt drink</p>
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
                    <BookOpen className="mr-2 text-emerald-600" />
                    Historical Significance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Post-Independence Planning</h4>
                      <p className="text-gray-600 text-sm">First planned city after independence</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Le Corbusier's Vision</h4>
                      <p className="text-gray-600 text-sm">Modernist urban planning principles</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Administrative Importance</h4>
                      <p className="text-gray-600 text-sm">Joint capital of Punjab and Haryana</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-saffron-600" />
                    Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Baisakhi</h4>
                      <p className="text-gray-600 text-sm">Harvest festival of Punjab</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Rose Festival</h4>
                      <p className="text-gray-600 text-sm">Annual celebration at Rose Garden</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Karva Chauth</h4>
                      <p className="text-gray-600 text-sm">Traditional festival for married women</p>
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
                    <Camera className="mr-2 text-emerald-600" />
                    Rock Garden
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Unique sculpture garden created by Nek Chand from industrial waste.
                  </p>
                  <Badge variant="outline">Art Installation</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TreePine className="mr-2 text-emerald-600" />
                    Rose Garden
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Asia's largest rose garden with over 1,600 varieties.
                  </p>
                  <Badge variant="outline">Botanical Garden</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Building className="mr-2 text-saffron-600" />
                    Capitol Complex
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    UNESCO World Heritage Site designed by Le Corbusier.
                  </p>
                  <Badge variant="outline">UNESCO Heritage</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="mr-2 text-emerald-600" />
                    Sukhna Lake
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Artificial lake perfect for boating and morning walks.
                  </p>
                  <Badge variant="outline">Recreation</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Palette className="mr-2 text-saffron-600" />
                    Government Museum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Rich collection of Gandhara sculptures and contemporary art.
                  </p>
                  <Badge variant="outline">Museum</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TreePine className="mr-2 text-emerald-600" />
                    Leisure Valley
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Chain of parks running through the heart of the city.
                  </p>
                  <Badge variant="outline">Parks</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Chandigarh;
