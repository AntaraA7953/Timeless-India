
import React, { useState } from 'react';
import { ArrowLeft, MapPin, Users, Calendar, Palette, Camera, Music, BookOpen, Utensils, Waves, Building, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Puducherry = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Puducherry - French Riviera of the East
                </h1>
                <p className="text-sm text-gray-600">Union Territory | French Colonial Heritage & Tamil Culture</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
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
                    <MapPin className="mr-2 text-blue-600" />
                    About Puducherry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Puducherry, formerly known as Pondicherry, is a Union Territory that beautifully blends French colonial heritage with Tamil culture. Known as the "French Riviera of the East," it offers a unique cultural experience with its charming colonial architecture, serene beaches, and spiritual atmosphere.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Capital</h4>
                      <p className="text-gray-600">Puducherry</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Area</h4>
                      <p className="text-gray-600">479 sq km</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Population</h4>
                      <p className="text-gray-600">1.24 million</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Languages</h4>
                      <p className="text-gray-600">Tamil, French, English</p>
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
                      <Building className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm">Former French colony</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm">Auroville spiritual community</span>
                    </div>
                    <div className="flex items-center">
                      <Waves className="h-4 w-4 mr-2 text-purple-500" />
                      <span className="text-sm">Beautiful beaches</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                      <span className="text-sm">Four districts</span>
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
                      <h4 className="font-semibold text-gray-800">Bharatanatyam</h4>
                      <p className="text-gray-600 text-sm">Classical Tamil dance form</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Carnatic Music</h4>
                      <p className="text-gray-600 text-sm">South Indian classical music tradition</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">French Chanson</h4>
                      <p className="text-gray-600 text-sm">French musical heritage</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2 text-blue-600" />
                    Arts & Crafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Paper Mache</h4>
                      <p className="text-gray-600 text-sm">Traditional paper craft</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Pottery</h4>
                      <p className="text-gray-600 text-sm">Local ceramic traditions</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Textile Art</h4>
                      <p className="text-gray-600 text-sm">Handwoven fabrics and designs</p>
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
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">French Pastries</h4>
                    <p className="text-gray-600 text-sm">Croissants and French breads</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Tamil Cuisine</h4>
                    <p className="text-gray-600 text-sm">Dosa, idli, and sambar</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Seafood</h4>
                    <p className="text-gray-600 text-sm">Fresh coastal delicacies</p>
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
                      <h4 className="font-semibold text-gray-800">French Colonial Period</h4>
                      <p className="text-gray-600 text-sm">French rule from 1674 to 1954</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sri Aurobindo Ashram</h4>
                      <p className="text-gray-600 text-sm">Spiritual center founded in 1926</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Cultural Synthesis</h4>
                      <p className="text-gray-600 text-sm">Unique blend of French and Tamil cultures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 text-blue-600" />
                    Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Bastille Day</h4>
                      <p className="text-gray-600 text-sm">French national day celebration</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Pongal</h4>
                      <p className="text-gray-600 text-sm">Tamil harvest festival</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">International Yoga Day</h4>
                      <p className="text-gray-600 text-sm">Celebration of yoga and spirituality</p>
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
                    <Building className="mr-2 text-blue-600" />
                    French Quarter
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Colonial architecture with tree-lined streets and cafes.
                  </p>
                  <Badge variant="outline">Heritage</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Star className="mr-2 text-purple-600" />
                    Auroville
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    International spiritual community and experimental township.
                  </p>
                  <Badge variant="outline">Spiritual</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Waves className="mr-2 text-blue-600" />
                    Paradise Beach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Pristine beach perfect for swimming and water sports.
                  </p>
                  <Badge variant="outline">Beach</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="mr-2 text-purple-600" />
                    Sri Aurobindo Ashram
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Spiritual center founded by Sri Aurobindo and The Mother.
                  </p>
                  <Badge variant="outline">Ashram</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Palette className="mr-2 text-blue-600" />
                    Pondy Bazaar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Vibrant market for local handicrafts and souvenirs.
                  </p>
                  <Badge variant="outline">Shopping</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Camera className="mr-2 text-purple-600" />
                    Promenade Beach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">
                    Popular beachfront with Gandhi statue and pier.
                  </p>
                  <Badge variant="outline">Landmark</Badge>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Puducherry;
