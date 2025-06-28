import React, { useState } from "react";
import { ArrowLeft, MapPin, Landmark, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, Building2, Waves, Mountain, Factory } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Meghalaya = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    { 
      name: 'Cherrapunji', 
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=300&fit=crop', 
      description: 'One of the wettest places on Earth with living root bridges',
      location: 'East Khasi Hills'
    },
    { 
      name: 'Mawlynnong', 
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=300&fit=crop', 
      description: 'Asia\'s cleanest village with sky views',
      location: 'East Khasi Hills'
    },
    { 
      name: 'Dawki River', 
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=300&fit=crop', 
      description: 'Crystal clear river bordering Bangladesh',
      location: 'West Jaintia Hills'
    },
    { 
      name: 'Nohkalikai Falls', 
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=300&fit=crop', 
      description: 'India\'s tallest plunge waterfall',
      location: 'East Khasi Hills'
    },
    { 
      name: 'Shillong Peak', 
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=300&fit=crop', 
      description: 'Highest point offering panoramic views',
      location: 'East Khasi Hills'
    },
    { 
      name: 'Mawphlang Sacred Forest', 
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=300&fit=crop', 
      description: 'Ancient preserved forest with spiritual significance',
      location: 'East Khasi Hills'
    }
  ];

  const economicData = [
    { sector: 'Agriculture', percentage: 35, description: 'Potatoes, rice, maize, horticulture', color: 'from-green-400 to-green-600' },
    { sector: 'Mining', percentage: 25, description: 'Coal, limestone, uranium', color: 'from-gray-400 to-gray-600' },
    { sector: 'Tourism', percentage: 20, description: 'Nature and adventure tourism', color: 'from-blue-400 to-blue-600' },
    { sector: 'Forestry', percentage: 15, description: 'Bamboo, timber, medicinal plants', color: 'from-emerald-400 to-emerald-600' },
    { sector: 'Handicrafts', percentage: 5, description: 'Weaving, wood carving', color: 'from-purple-400 to-purple-600' }
  ];

  const culturalElements = [
    { 
      title: 'Performing Arts', 
      icon: Music, 
      items: ['Wangala dance', 'Shad Suk Mynsiem', 'Nongkrem dance', 'Behdienkhlam festival'],
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=300&h=200&fit=crop',
      gradient: 'from-orange-400 to-red-500'
    },
    { 
      title: 'Festivals', 
      icon: Calendar, 
      items: ['Wangala (Harvest)', 'Shad Suk Mynsiem', 'Behdienkhlam', 'Nongkrem Dance'],
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=300&h=200&fit=crop',
      gradient: 'from-green-400 to-teal-500'
    },
    { 
      title: 'Cuisine', 
      icon: Utensils, 
      items: ['Jadoh (rice with meat)', 'Dohneiiong (pork with sesame)', 'Tungrymbai (fermented soy)', 'Pukhlein (rice cake)'],
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=300&h=200&fit=crop',
      gradient: 'from-yellow-400 to-amber-500'
    },
    { 
      title: 'Traditions', 
      icon: Star, 
      items: ['Matrilineal society', 'Sacred groves', 'Oral storytelling', 'Drum traditions'],
      image: 'https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=300&h=200&fit=crop',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'State Government',
      icon: Building2,
      description: 'Parliamentary system of government',
      details: ['Governor as constitutional head', 'Chief Minister as executive head', 'Unicameral legislature (60 seats)'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Administrative Divisions',
      icon: MapPin,
      description: '12 districts across 3 regions',
      details: ['Khasi Hills', 'Garo Hills', 'Jaintia Hills'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Local Governance',
      icon: Users,
      description: 'Traditional tribal institutions',
      details: ['Autonomous District Councils', 'Village councils', 'Traditional chiefs (Dolloi/Syiems)'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Electoral System',
      icon: Star,
      description: 'Multi-party democracy',
      details: ['Lok Sabha: 2 seats', 'Legislative Assembly: 60 seats', 'High tribal representation'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const politicalParties = [
    { name: 'National People\'s Party', region: 'Statewide', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'United Democratic Party', region: 'Khasi/Jaintia areas', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Bharatiya Janata Party', region: 'Statewide', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Indian National Congress', region: 'Statewide', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Garo National Council', region: 'Garo areas', color: 'bg-red-100', textColor: 'text-red-700' },
    { name: 'Hill State People\'s Democratic Party', region: 'Khasi areas', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Autonomous Councils',
      description: 'Special administrative arrangements for tribal areas',
      impact: 'Preservation of tribal customs and laws',
      status: 'Implemented'
    },
    {
      title: 'Land Ownership',
      description: 'Community land ownership system',
      impact: 'Protection of tribal land rights',
      status: 'Ongoing'
    },
    {
      title: 'Border Infrastructure',
      description: 'Development along Bangladesh border',
      impact: 'Improved connectivity and security',
      status: 'Progressing'
    },
    {
      title: 'Tourism Promotion',
      description: 'Focus on eco-tourism and adventure sports',
      impact: 'Growing tourism industry',
      status: 'Developing'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Jainsem',
      region: 'Khasi women',
      description: 'Traditional two-piece dress',
      features: ['Woolen or cotton fabric', 'Distinctive check patterns', 'Worn with shawl', 'Festive occasions'],
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      name: 'Dhara',
      region: 'Jaintia women',
      description: 'Elegant wrap-around dress',
      features: ['Silk or cotton material', 'Bright colors', 'Worn with silver jewelry', 'Cultural significance'],
      image: 'https://images.unsplash.com/photo-1583391733956-3794bc9ce64f?w=400&h=300&fit=crop',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      name: 'Garo Attire',
      region: 'Garo tribe',
      description: 'Traditional tribal clothing',
      features: ['Dakmanda (wrap-around)', 'Ganna (upper cloth)', 'Beaded ornaments', 'Distinct patterns'],
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Traditional Shawls',
      region: 'All tribes',
      description: 'Handwoven ceremonial shawls',
      features: ['Intricate designs', 'Wool or cotton', 'Symbol of status', 'Passed through generations'],
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop',
      gradient: 'from-yellow-400 to-amber-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white-50 to-blue-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-green-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-green-50"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Mountain className="text-green-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Meghalaya
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "The Abode of Clouds"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=1200&h=400&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/70 to-blue-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Explore Meghalaya's Wonders</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover the living root bridges, waterfalls, and vibrant tribal culture
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Culture</TabsTrigger>
              <TabsTrigger value="economy" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Nature</TabsTrigger>
              <TabsTrigger value="society" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Society</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Capital</h3>
                  <p className="text-sm text-green-600">Shillong<br/>"Scotland of the East"</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white-50 to-white-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-white-400 to-white-600 rounded-full flex items-center justify-center">
                    <Users className="text-gray-800" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">Population</h3>
                  <p className="text-sm text-gray-600">3.3 Million<br/>Majority tribal communities</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Landmark className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Geography</h3>
                  <p className="text-sm text-blue-600">Northeast India<br/>22,429 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-purple-800">Languages</h3>
                  <p className="text-sm text-purple-600">Khasi, Garo, English<br/>Assamese, Bengali</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-green-500" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌞</div>
                    <h4 className="font-semibold text-green-700 text-lg">Summer</h4>
                    <p className="text-sm text-green-600">Mar-Jun<br/>15-25°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-blue-600">Jun-Sep<br/>Heavy rainfall</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🍂</div>
                    <h4 className="font-semibold text-orange-700 text-lg">Autumn</h4>
                    <p className="text-sm text-orange-600">Oct-Nov<br/>Pleasant weather</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">❄️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
                    <p className="text-sm text-gray-600">Dec-Feb<br/>2-16°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Politics Tab */}
          <TabsContent value="politics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {politicalStructure.map((structure, index) => {
                const IconComponent = structure.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-r ${structure.color} relative`}>
                      <img 
                        src="https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=200&fit=crop" 
                        alt={structure.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="text-white" size={48} />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{structure.title}</CardTitle>
                      <p className="text-gray-600">{structure.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {structure.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center p-2 bg-gray-50 rounded-lg">
                            <Building2 size={16} className="mr-3 text-green-400 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 text-blue-500" size={32} />
                  Major Political Parties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {politicalParties.map((party, index) => (
                    <div key={index} className={`${party.color} p-4 rounded-xl hover:shadow-lg transition-all hover:scale-105`}>
                      <h4 className={`font-semibold text-lg mb-2 ${party.textColor}`}>{party.name}</h4>
                      <p className={`text-sm ${party.textColor} opacity-80`}>{party.region}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Factory className="mr-3 text-indigo-500" size={32} />
                  Key Political Features & Policies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyPoliticalFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Implemented' ? 'bg-green-200 text-green-700' :
                          feature.status === 'Ongoing' ? 'bg-blue-200 text-blue-700' :
                          feature.status === 'Progressing' ? 'bg-yellow-200 text-yellow-700' :
                          'bg-purple-200 text-purple-700'
                        }`}>
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-2">{feature.description}</p>
                      <p className="text-sm text-gray-500 italic">Impact: {feature.impact}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Current Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Parliamentary System</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ High Court at Shillong</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Autonomous District Councils</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 Traditional Tribal Governance</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ Village Councils</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Electoral Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~2 Million</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 60</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 2</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~3,000</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Parties: 30+</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Culture Tab */}
          <TabsContent value="culture" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {culturalElements.map((element, index) => {
                const IconComponent = element.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-r ${element.gradient} relative`}>
                      <img 
                        src={element.image} 
                        alt={element.title}
                        className="w-full h-full object-cover opacity-30"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="text-white" size={48} />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{element.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {element.items.map((item, idx) => (
                          <li key={idx} className="flex items-center p-2 bg-gray-50 rounded-lg">
                            <Star size={16} className="mr-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Traditional Dresses Section */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <span className="text-2xl mr-3">👘</span>
                  Traditional Dresses & Attire
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
                                <span className="text-gray-600">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Utensils className="mr-3 text-red-500" size={32} />
                  Traditional Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'Jadoh', emoji: '🍚' },
                    { name: 'Dohneiiong', emoji: '🐖' },
                    { name: 'Tungrymbai', emoji: '🧆' },
                    { name: 'Pukhlein', emoji: '🍘' },
                    { name: 'Nakham Bitchi', emoji: '🍲' },
                    { name: 'Minil Songa', emoji: '🥬' }
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

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🌾</span>
                    Agricultural Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🥔 Potatoes (Major producer)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍍 Pineapple</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍊 Oranges</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌾 Rice</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌽 Maize</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">⛏️</span>
                    Mining Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🪨 Coal</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Limestone</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">☢️ Uranium</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">💎 Sillimanite</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧱 Clay</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏭</span>
                    Key Industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🧶 Handloom & Handicrafts</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍶 Food Processing</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⛏️ Mining</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌿 Medicinal Plants</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Cement</li>
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
                  <CardContent className="p-4 bg-gradient-to-br from-white to-gray-50">
                    <p className="text-gray-600">{attraction.description}</p>
                    <div className="mt-3 flex justify-end">
                      <Camera className="text-green-500" size={20} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedAttraction && (
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-2xl">
                      <Camera className="mr-3 text-green-500" size={32} />
                      {selectedAttraction.name}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedAttraction(null)}
                      className="hover:bg-green-100"
                    >
                      Close
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={selectedAttraction.image} 
                        alt={selectedAttraction.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-gray-700 mb-4 text-lg">{selectedAttraction.description}</p>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <span className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                          <MapPin size={16} className="mr-2" />
                          {selectedAttraction.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Nature Tab */}
          <TabsContent value="nature" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-green-400 to-emerald-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=200&fit=crop" 
                    alt="Wildlife"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Flora & Fauna</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg flex items-center">
                        <span className="text-2xl mr-2">🦅</span>
                        Wildlife
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐅</span>
                          <p className="text-sm mt-1">Clouded Leopard</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐒</span>
                          <p className="text-sm mt-1">Hoolock Gibbon</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦜</span>
                          <p className="text-sm mt-1">Hornbill</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦌</span>
                          <p className="text-sm mt-1">Barking Deer</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg flex items-center">
                        <span className="text-2xl mr-2">🌿</span>
                        Flora
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🎋</span>
                          <p className="text-sm mt-1">Bamboo</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌳</span>
                          <p className="text-sm mt-1">Oak</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌸</span>
                          <p className="text-sm mt-1">Orchids</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Medicinal Plants</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581852057103-68e8115e1e47?w=400&h=200&fit=crop" 
                    alt="Waterbodies"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Waves className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Geographic Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Waves size={20} className="mr-3 text-blue-500" />
                      <span>Cherrapunji (Wettest place)</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Garo Hills</span>
                    </li>
                    <li className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="w-5 h-5 bg-yellow-400 rounded mr-3"></span>
                      <span>Khasi Hills</span>
                    </li>
                    <li className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <span className="w-5 h-5 bg-purple-400 rounded mr-3"></span>
                      <span>Jaintia Hills</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Protected Areas & National Parks</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Nokrek National Park',
                    'Balpakram National Park',
                    'Nongkhyllem Wildlife Sanctuary',
                    'Siju Bird Sanctuary',
                    'Baghmara Pitcher Plant Sanctuary',
                    'Narpuh Wildlife Sanctuary'
                  ].map((park, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
                      <span className="text-2xl mb-2 block">🏞️</span>
                      <span className="text-green-700 font-medium">{park}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Society Tab */}
          <TabsContent value="society" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="mr-3 text-blue-500" size={28} />
                    Demographics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">📚</span>
                        Literacy Rate
                      </span>
                      <span className="font-bold text-blue-600 text-lg">75.48%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">24.03%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">75.97%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Calendar className="mr-3 text-purple-500" size={28} />
                    Major Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { name: 'Wangala (Harvest)', emoji: '🌾' },
                      { name: 'Shad Suk Mynsiem', emoji: '💃' },
                      { name: 'Behdienkhlam', emoji: '🏠' },
                      { name: 'Nongkrem Dance', emoji: '🕺' },
                      { name: 'Christmas', emoji: '🎄' }
                    ].map((festival, index) => (
                      <li key={index} className="flex items-center p-3 bg-white/70 rounded-lg">
                        <span className="text-xl mr-3">{festival.emoji}</span>
                        <span>{festival.name}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Music className="mr-3 text-indigo-500" size={32} />
                  Traditional Arts & Crafts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-indigo-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">💃</span>
                      Performing Arts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Wangala Dance</li>
                      <li className="bg-white/60 p-2 rounded">Shad Suk Mynsiem</li>
                      <li className="bg-white/60 p-2 rounded">Nongkrem Dance</li>
                      <li className="bg-white/60 p-2 rounded">Drum Beating</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🧶</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Bamboo Crafts</li>
                      <li className="bg-white/60 p-2 rounded">Weaving</li>
                      <li className="bg-white/60 p-2 rounded">Wood Carving</li>
                      <li className="bg-white/60 p-2 rounded">Cane Products</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Social Structure
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Matrilineal Society</li>
                      <li className="bg-white/60 p-2 rounded">Clan System</li>
                      <li className="bg-white/60 p-2 rounded">Village Councils</li>
                      <li className="bg-white/60 p-2 rounded">Sacred Groves</li>
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

export default Meghalaya;