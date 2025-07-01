import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Lakshadweep = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    {
      name: 'Agatti Island',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      description: 'Gateway to Lakshadweep with pristine beaches',
      location: 'Agatti'
    },
    {
      name: 'Bangaram Island',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
      description: 'Uninhabited coral island paradise',
      location: 'Bangaram'
    },
    {
      name: 'Minicoy Island',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop',
      description: 'Southernmost island with unique culture',
      location: 'Minicoy'
    },
    {
      name: 'Kavaratti Marine Aquarium',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop',
      description: 'Rich marine life display',
      location: 'Kavaratti'
    },
    {
      name: 'Coral Reefs',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
      description: 'Spectacular underwater coral formations',
      location: 'Multiple Islands'
    },
    {
      name: 'Kalpeni Island',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=400&h=300&fit=crop',
      description: 'Three islets connected by coral reef',
      location: 'Kalpeni'
    }
  ];

  const economicData = [
    { sector: 'Fisheries', percentage: 45, description: 'Tuna fishing, marine products', color: 'from-blue-400 to-blue-600' },
    { sector: 'Tourism', percentage: 35, description: 'Eco-tourism, water sports', color: 'from-green-400 to-green-600' },
    { sector: 'Agriculture', percentage: 20, description: 'Coconut cultivation, copra', color: 'from-orange-400 to-orange-600' }
  ];

  const culturalElements = [
    {
      title: 'Island Heritage',
      icon: Users,
      items: ['Maliku (Minicoy) Culture', 'Traditional Lava Dance', 'Folk Music'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      gradient: 'from-blue-400 to-teal-500'
    },
    {
      title: 'Marine Culture',
      icon: Star,
      items: ['Fishing Traditions', 'Boat Building', 'Sea Navigation'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop',
      gradient: 'from-emerald-400 to-cyan-500'
    },
    {
      title: 'Islamic Traditions',
      icon: Mountain,
      items: ['Mosques', 'Islamic Architecture', 'Religious Festivals'],
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=200&fit=crop',
      gradient: 'from-amber-400 to-yellow-500'
    },
    {
      title: 'Coastal Lifestyle',
      icon: TreePine,
      items: ['Coconut Cultivation', 'Traditional Crafts', 'Island Cuisine'],
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=300&h=200&fit=crop',
      gradient: 'from-green-400 to-blue-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'Union Territory',
      icon: Flag,
      description: 'Directly administered by Central Government',
      details: ['Administrator as Head', 'Appointed by President', 'No Legislative Assembly'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Administrative Structure',
      icon: Building2,
      description: '10 inhabited islands, 1 district',
      details: ['Kavaratti as Capital', 'Island Development Agency', 'Panchayat System'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Local Governance',
      icon: Users2,
      description: 'Island-level administration',
      details: ['Village Panchayats', 'Island Councils', 'Traditional Leadership'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Parliamentary Representation',
      icon: Vote,
      description: 'Limited parliamentary presence',
      details: ['Lok Sabha: 1 seat', 'No Assembly seats', 'Rajya Sabha: No direct seats'],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const politicalParties = [
    { name: 'Indian National Congress', region: 'National party', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Bharatiya Janata Party (BJP)', region: 'National party', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Nationalist Congress Party (NCP)', region: 'National party', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Independent Candidates', region: 'Local', color: 'bg-gray-100', textColor: 'text-gray-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Union Territory Status',
      description: 'Administered directly by Central Government since 1956',
      impact: 'Direct central administration',
      status: 'Established 1956'
    },
    {
      title: 'Environmental Protection',
      description: 'Strict environmental regulations for coral protection',
      impact: 'Sustainable tourism development',
      status: 'Ongoing'
    },
    {
      title: 'Island Development',
      description: 'Special focus on island infrastructure',
      impact: 'Improved connectivity and facilities',
      status: 'Under Progress'
    },
    {
      title: 'Permit System',
      description: 'Restricted entry to protect ecosystem',
      impact: 'Controlled tourism and development',
      status: 'Active'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Kachi & Thattam',
      region: 'Minicoy Island',
      description: 'Traditional women\'s attire',
      features: ['Colorful sarongs', 'Traditional blouses', 'Coconut fiber accessories', 'Floral patterns'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Mundu & Shirt',
      region: 'All Islands',
      description: 'Traditional men\'s wear',
      features: ['White mundu', 'Cotton shirts', 'Simple styling', 'Comfortable fabric'],
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop',
      gradient: 'from-green-400 to-teal-500'
    },
    {
      name: 'Maliku Traditional Dress',
      region: 'Minicoy',
      description: 'Unique Minicoy island attire',
      features: ['Dhivehi influence', 'Bright colors', 'Traditional patterns', 'Island-specific design'],
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      name: 'Fishermen\'s Attire',
      region: 'Coastal Areas',
      description: 'Traditional fishing community dress',
      features: ['Practical clothing', 'Water-resistant materials', 'Functional design', 'Simple patterns'],
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop',
      gradient: 'from-cyan-400 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-cyan-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-cyan-50"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <TreePine className="text-cyan-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Lakshadweep
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Emerald Islands of India"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-blue-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Discover the Coral Paradise</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Experience the pristine beauty, marine wonders, and unique island culture of Lakshadweep
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-teal-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Culture</TabsTrigger>
              <TabsTrigger value="economy" className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Nature</TabsTrigger>
              <TabsTrigger value="society" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Society</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-cyan-50 to-cyan-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-cyan-800">Capital</h3>
                  <p className="text-sm text-cyan-600">Kavaratti<br/>Administrative Center</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Population</h3>
                  <p className="text-sm text-blue-600">64,473<br/>Smallest UT by population</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-teal-50 to-teal-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-teal-800">Geography</h3>
                  <p className="text-sm text-teal-600">36 Islands<br/>32 km² total area</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Languages</h3>
                  <p className="text-sm text-green-600">Malayalam, Jeseri<br/>Mahl (Minicoy)</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-cyan-500" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌊</div>
                    <h4 className="font-semibold text-cyan-700 text-lg">Winter</h4>
                    <p className="text-sm text-cyan-600">Dec-Feb<br/>23-32°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Summer</h4>
                    <p className="text-sm text-blue-600">Mar-May<br/>25-35°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-teal-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-teal-600">Jun-Sep<br/>24-30°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌴</div>
                    <h4 className="font-semibold text-green-700 text-lg">Post-Monsoon</h4>
                    <p className="text-sm text-green-600">Oct-Nov<br/>25-32°C</p>
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
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
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
                            <Flag size={16} className="mr-3 text-cyan-400 flex-shrink-0" />
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
                  <Users2 className="mr-3 text-purple-500" size={32} />
                  Major Political Parties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
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
                  <Building2 className="mr-3 text-indigo-500" size={32} />
                  Key Political Features & Governance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyPoliticalFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Established 1956' ? 'bg-green-200 text-green-700' :
                          feature.status === 'Under Progress' ? 'bg-blue-200 text-blue-700' :
                          feature.status === 'Active' ? 'bg-orange-200 text-orange-700' :
                          'bg-yellow-200 text-yellow-700'
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
              <Card className="border-0 bg-gradient-to-br from-cyan-50 to-cyan-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Administrator System</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ High Court jurisdiction from Kerala</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏝️ Island Development Agency</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 Panchayat Raj System</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ Island Collectors</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Administrative Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~51,000</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Lok Sabha: 1 seat</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏝️ Inhabited Islands: 10</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Panchayats: 10</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 District: 1</li>
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
                            <Star size={16} className="mr-3 text-blue-400 flex-shrink-0" />
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
                                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></span>
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
                  <Utensils className="mr-3 text-blue-500" size={32} />
                  Traditional Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'Tuna Curry', emoji: '🐟' },
                    { name: 'Coconut Rice', emoji: '🥥' },
                    { name: 'Mas Riha', emoji: '🍛' },
                    { name: 'Coconut Water', emoji: '🥤' },
                    { name: 'Fish Cutlet', emoji: '🐠' },
                    { name: 'Octopus Curry', emoji: '🐙' }
                  ].map((dish, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                      <div className="text-3xl mb-2">{dish.emoji}</div>
                      <h4 className="font-semibold text-blue-700 text-lg">{dish.name}</h4>
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
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🐟</span>
                    Marine Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🐟 Tuna Fishing</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🦐 Lobster</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🐠 Skipjack</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🐙 Octopus</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪸 Ornamental Fish</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🌴</span>
                    Agriculture & Crafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🥥 Coconut Cultivation</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌾 Copra Production</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧺 Coir Products</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🎨 Handicrafts</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌿 Vegetable Gardens</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-cyan-50 to-cyan-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏖️</span>
                    Tourism & Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏝️ Eco-Tourism</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🤿 Water Sports</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🚤 Boat Services</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏨 Hospitality</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📞 Communication</li>
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
                      <Camera className="text-cyan-500" size={20} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedAttraction && (
              <Card className="bg-gradient-to-r from-cyan-50 to-blue-50 border-cyan-200 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-2xl">
                      <Camera className="mr-3 text-cyan-500" size={32} />
                      {selectedAttraction.name}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedAttraction(null)}
                      className="hover:bg-cyan-100"
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
                        <span className="flex items-center bg-cyan-100 px-3 py-1 rounded-full">
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
                <div className="h-32 bg-gradient-to-r from-blue-400 to-cyan-500 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
                    alt="Marine Life"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TreePine className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Marine Life</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3 text-lg">Sea Creatures</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐠</span>
                          <p className="text-sm mt-1">Tropical Fish</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐢</span>
                          <p className="text-sm mt-1">Sea Turtles</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦈</span>
                          <p className="text-sm mt-1">Sharks</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐙</span>
                          <p className="text-sm mt-1">Octopus</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-3 text-lg">Coral Ecosystem</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🪸</span>
                          <p className="text-sm mt-1">Coral Reefs</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌊</span>
                          <p className="text-sm mt-1">Lagoons</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐚</span>
                          <p className="text-sm mt-1">Seashells</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Seagrass</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-green-400 to-teal-500 relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=200&fit=crop"
                    alt="Island Geography"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mountain className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Island Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Mountain size={20} className="mr-3 text-blue-500" />
                      <span>Coral Atolls</span>
                    </li>
                    <li className="flex items-center p-3 bg-cyan-50 rounded-lg">
                      <span className="w-5 h-5 bg-cyan-400 rounded mr-3"></span>
                      <span>Pristine Beaches</span>
                    </li>
                    <li className="flex items-center p-3 bg-teal-50 rounded-lg">
                      <span className="w-5 h-5 bg-teal-400 rounded mr-3"></span>
                      <span>Coconut Groves</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Lagoon Systems</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Protected Marine Areas & Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Coral Reef Conservation',
                    'Marine Protected Areas',
                    'Turtle Nesting Sites',
                    'Seabird Sanctuaries',
                    'Mangrove Conservation',
                    'Fishing Reserves'
                  ].map((area, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
                      <span className="text-2xl mb-2 block">🌊</span>
                      <span className="text-blue-700 font-medium">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Society Tab */}
          <TabsContent value="society" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-cyan-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Users className="mr-3 text-cyan-500" size={28} />
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
                      <span className="font-bold text-cyan-600 text-lg">92.3%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏝️</span>
                        Island Population
                      </span>
                      <span className="font-bold text-blue-600 text-lg">100% Rural</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🕌</span>
                        Religion
                      </span>
                      <span className="font-bold text-green-600 text-lg">96% Muslim</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-teal-50 to-green-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Calendar className="mr-3 text-teal-500" size={28} />
                    Major Festivals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      { name: 'Eid ul-Fitr', emoji: '🌙' },
                      { name: 'Eid ul-Adha', emoji: '🐐' },
                      { name: 'Muharram', emoji: '🕌' },
                      { name: 'Maulid', emoji: '📖' },
                      { name: 'Lava Dance Festival', emoji: '💃' }
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
                  Traditional Arts & Island Culture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-blue-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">💃</span>
                      Dance & Music
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Lava Dance</li>
                      <li className="bg-white/60 p-2 rounded">Kolkali</li>
                      <li className="bg-white/60 p-2 rounded">Folk Songs</li>
                      <li className="bg-white/60 p-2 rounded">Traditional Drums</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-teal-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Coir Products</li>
                      <li className="bg-white/60 p-2 rounded">Shell Crafts</li>
                      <li className="bg-white/60 p-2 rounded">Boat Making</li>
                      <li className="bg-white/60 p-2 rounded">Coconut Shell Items</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-green-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Island Traditions
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Fishing Customs</li>
                      <li className="bg-white/60 p-2 rounded">Oral Literature</li>
                      <li className="bg-white/60 p-2 rounded">Islamic Culture</li>
                      <li className="bg-white/60 p-2 rounded">Maritime Heritage</li>
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

export default Lakshadweep;