
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Palette, Camera, Music, BookOpen, Utensils, TreePine, Building, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const DadraNavgarHaveliDamanDiu = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
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
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-600 to-red-600 bg-clip-text text-transparent">
                  Dadra & Nagar Haveli and Daman & Diu
                </h1>
                <p className="text-sm text-gray-600">Union Territory | Portuguese Influence & Tribal Culture</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-amber-100 text-amber-700">
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
                    <MapPin className="mr-2 text-amber-600" />
                    About Dadra & Nagar Haveli and Daman & Diu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This Union Territory was formed by merging two former Portuguese territories - Dadra & Nagar Haveli and Daman & Diu. It showcases a unique blend of Portuguese colonial architecture, tribal culture, and coastal beauty, offering visitors both historical heritage and natural splendor.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Capital</h4>
                      <p className="text-gray-600">Daman</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Area</h4>
                      <p className="text-gray-600">603 sq km</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Population</h4>
                      <p className="text-gray-600">585,764</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Languages</h4>
                      <p className="text-gray-600">Gujarati, Hindi, Portuguese</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 text-red-600" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm">Former Portuguese territories</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm">Colonial heritage sites</span>
                    </div>
                    <div className="flex items-center">
                      <TreePine className="h-4 w-4 mr-2 text-red-500" />
                      <span className="text-sm">Tribal communities</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-amber-500" />
                      <span className="text-sm">Coastal and inland regions</span>
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
                    <Music className="mr-2 text-red-600" />
                    Music & Dance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Tarpa Dance</h4>
                      <p className="text-gray-600 text-sm">Traditional tribal dance with flute music</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Portuguese Folk Music</h4>
                      <p className="text-gray-600 text-sm">Colonial era musical traditions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Warli Dance</h4>
                      <p className="text-gray-600 text-sm">Tribal dance celebrating harvests</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2 text-amber-600" />
                    Arts & Crafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Warli Painting</h4>
                      <p className="text-gray-600 text-sm">Traditional tribal art form</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Bamboo Craft</h4>
                      <p className="text-gray-600 text-sm">Utilitarian and decorative bamboo items</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Pottery</h4>
                      <p className="text-gray-600 text-sm">Traditional ceramic and terracotta work</p>
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
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Seafood Curry</h4>
                    <p className="text-gray-600 text-sm">Coastal fish preparations</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Portuguese Dishes</h4>
                    <p className="text-gray-600 text-sm">Colonial influenced cuisine</p>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Tribal Food</h4>
                    <p className="text-gray-600 text-sm">Traditional indigenous preparations</p>
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
                    <BookOpen className="mr-2 text-red-600" />
                    Historical Significance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Portuguese Colonial Rule</h4>
                      <p className="text-gray-600 text-sm">Over 450 years of Portuguese administration</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Liberation Struggle</h4>
                      <p className="text-gray-600 text-sm">Freedom movement and integration with India</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Tribal Heritage</h4>
                      <p className="text-gray-600 text-sm">Ancient tribal communities and traditions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-amber-600" />
                    Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Christmas</h4>
                      <p className="text-gray-600 text-sm">Portuguese Christian traditions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Warli Festival</h4>
                      <p className="text-gray-600 text-sm">Tribal harvest celebrations</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Liberation Day</h4>
                      <p className="text-gray-600 text-sm">Commemoration of freedom from Portuguese rule</p>
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
                    <Building className="mr-2 text-amber-600" />
                    Daman Fort
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Historic Portuguese fort with beautiful architecture.
                  </p>
                  <Badge variant="outline">Heritage</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="mr-2 text-red-600" />
                    Diu Island
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Scenic island with beaches and Portuguese architecture.
                  </p>
                  <Badge variant="outline">Island</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <TreePine className="mr-2 text-amber-600" />
                    Vasona Lion Safari
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Wildlife sanctuary with lion safari experience.
                  </p>
                  <Badge variant="outline">Wildlife</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Camera className="mr-2 text-red-600" />
                    Silvassa Tribal Museum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Showcases rich tribal culture and heritage.
                  </p>
                  <Badge variant="outline">Museum</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Palette className="mr-2 text-amber-600" />
                    Naida Caves
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Natural rock formations creating cave-like structures.
                  </p>
                  <Badge variant="outline">Natural</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Building className="mr-2 text-red-600" />
                    St. Paul's Church
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Beautiful Portuguese colonial church architecture.
                  </p>
                  <Badge variant="outline">Religious</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DadraNavgarHaveliDamanDiu;
