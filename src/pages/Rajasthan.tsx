import React, { useState } from 'react';
import { ArrowLeft, MapPin, Landmark, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePalm, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Rajasthan = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    { 
      name: 'Amber Fort', 
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/amber-fort-jaipur-rajasthan-1-attr-hero?qlt=82&ts=1742157903972', 
      description: 'Majestic fort with mirror work and carvings',
      location: 'Jaipur'
    },
    { 
      name: 'Mehrangarh Fort', 
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/99/ae/7f/images-14-largejpg.jpg?w=700&h=400&s=1', 
      description: 'One of India\'s largest forts',
      location: 'Jodhpur'
    },
    { 
      name: 'Hawa Mahal', 
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg', 
      description: 'Palace of Winds with intricate latticework',
      location: 'Jaipur'
    },
    { 
      name: 'City Palace', 
      image: 'https://s7ap1.scene7.com/is/image/incredibleindia/city-palace-udaipur-rajasthan-1-new-attr-hero?qlt=82&ts=1727353238554', 
      description: 'Royal residence with museums',
      location: 'Udaipur'
    },
    { 
      name: 'Jaisalmer Fort', 
      image: 'https://jaisalmertourism.co.in/images/places-to-visit/headers/jaisalmer-fort-entry-fee-timings-holidays-reviews-header.jpg', 
      description: 'Golden fort rising from the desert',
      location: 'Jaisalmer'
    },
    { 
      name: 'Ranthambore', 
      image: 'https://ranthambhorenationalpark.in/images/Ranthambhore%20Tiger%20safari%20park.JPG', 
      description: 'Famous tiger reserve',
      location: 'Sawai Madhopur'
    }
  ];

  const economicData = [
    { sector: 'Agriculture', percentage: 25, description: 'Mustard, wheat, pulses', color: 'from-green-400 to-green-600' },
    { sector: 'Tourism', percentage: 20, description: 'Heritage hotels and palaces', color: 'from-blue-400 to-blue-600' },
    { sector: 'Mining', percentage: 15, description: 'Marble, zinc, sandstone', color: 'from-purple-400 to-purple-600' },
    { sector: 'Handicrafts', percentage: 12, description: 'Textiles, jewelry, pottery', color: 'from-orange-400 to-orange-600' },
    { sector: 'Industry', percentage: 28, description: 'Cement, textiles, auto', color: 'from-red-400 to-red-600' }
  ];

  const culturalElements = [
    { 
      title: 'Royal Heritage', 
      icon: Landmark, 
      items: ['Palaces & Forts', 'Rajput Valor', 'Royal Traditions'],
      image: 'https://t4.ftcdn.net/jpg/01/86/03/91/360_F_186039131_DtzFlukfaDy0Fdsgq6HzJwGGJ1II5Ls9.jpg',
      gradient: 'from-orange-400 to-red-500'
    },
    { 
      title: 'Folk Culture', 
      icon: Music, 
      items: ['Ghoomar Dance', 'Kalbeliya', 'Manganiyar Music', 'Puppetry'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ghoomar_dancers_%28Rajasthan%2C_India%2C_2023%29.jpg/1200px-Ghoomar_dancers_%28Rajasthan%2C_India%2C_2023%29.jpg',
      gradient: 'from-emerald-400 to-teal-500'
    },
    { 
      title: 'Cuisine', 
      icon: Utensils, 
      items: ['Dal Baati Churma', 'Laal Maas', 'Ghewar', 'Ker Sangri'],
      image: 'https://www.joviindia.com/cdn/shop/articles/1.jpg?v=1716982970&width=1100',
      gradient: 'from-amber-400 to-yellow-500'
    },
    { 
      title: 'Festivals', 
      icon: Calendar, 
      items: ['Pushkar Fair', 'Teej', 'Gangaur', 'Desert Festival'],
      image: 'https://i0.wp.com/deramasuda.com/wp-content/uploads/2018/10/pushkar-fair-2.jpg?fit=737%2C388&ssl=1',
      gradient: 'from-blue-400 to-indigo-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'State Government',
      icon: Flag,
      description: 'Elected state government with Chief Minister',
      details: ['Legislative Assembly (200 seats)', 'Governor as constitutional head', 'High Court in Jodhpur'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '50 districts across 7 divisions',
      details: ['Jaipur Division', 'Jodhpur Division', 'Ajmer Division', 'Udaipur Division', 'Bikaner Division', 'Bharatpur Division', 'Kota Division'],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Local Governance',
      icon: Users2,
      description: 'Three-tier Panchayati Raj system',
      details: ['Zila Parishads', 'Panchayat Samitis', 'Gram Panchayats'],
      color: 'from-purple-400 to-purple-600'
    }
  ];

  const politicalParties = [
    { name: 'Bharatiya Janata Party (BJP)', region: 'Statewide', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Indian National Congress', region: 'Statewide', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Rashtriya Loktantrik Party', region: 'Northern Rajasthan', color: 'bg-green-100', textColor: 'text-green-700' },
    { name: 'Bahujan Samaj Party', region: 'Eastern Rajasthan', color: 'bg-red-100', textColor: 'text-red-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Special Status',
      description: 'Special category state for development',
      impact: 'Additional central funds',
      status: 'Ongoing'
    },
    {
      title: 'Water Disputes',
      description: 'Inter-state water sharing issues',
      impact: 'Affects agriculture and drinking water',
      status: 'Ongoing'
    },
    {
      title: 'Desert Development',
      description: 'Thar Desert development programs',
      impact: 'Improving living conditions',
      status: 'Active'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Ghagra Choli',
      region: 'Women',
      description: 'Colorful traditional attire with odhni',
      features: ['Flared skirt', 'Embroidered blouse', 'Dupatta', 'Silver jewelry'],
      image: 'https://i.pinimg.com/736x/17/b2/5b/17b25b4317b4e906d785fb1b36e2102d.jpg',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Dhoti Kurta',
      region: 'Men',
      description: 'Traditional outfit with pagri',
      features: ['White dhoti', 'Angrakha kurta', 'Colorful pagri', 'Mojari footwear'],
      image: 'https://live.staticflickr.com/6177/6202387672_6aaa4d8907_z.jpg',
      gradient: 'from-red-400 to-pink-500'
    },
    {
      name: 'Bandhani',
      region: 'Women',
      description: 'Tie-dye textile tradition',
      features: ['Bright colors', 'Intricate patterns', 'Special occasions', 'Regional variations'],
      image: 'https://5.imimg.com/data5/IC/KK/TY/SELLER-55061345/rajasthani-bandhani-saree-with-gota-patti.jpg',
      gradient: 'from-orange-400 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-orange-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/')}
                className="flex items-center space-x-2 hover:bg-orange-50"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Landmark className="text-orange-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Rajasthan
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Land of Kings"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://www.shutterstock.com/image-photo/hawa-mahal-jaipur-rajasthan-260nw-1150541366.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Explore the Royal Heritage</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover the majestic forts, vibrant culture, and golden deserts of Rajasthan
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
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
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-orange-800">Capital</h3>
                  <p className="text-sm text-orange-600">Jaipur<br/>The Pink City</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-green-800">Population</h3>
                  <p className="text-sm text-green-600">68.5 Million<br/>Diverse communities</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                    <Landmark className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Geography</h3>
                  <p className="text-sm text-blue-600">Thar Desert<br/>342,239 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-yellow-800">Languages</h3>
                  <p className="text-sm text-yellow-600">Hindi (official)<br/>Rajasthani dialects</p>
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
                  <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌸</div>
                    <h4 className="font-semibold text-orange-700 text-lg">Winter</h4>
                    <p className="text-sm text-orange-600">Oct-Feb<br/>10-27°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-red-100 to-red-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="font-semibold text-red-700 text-lg">Summer</h4>
                    <p className="text-sm text-red-600">Mar-Jun<br/>24-46°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-100 to-green-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-green-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-green-600">Jul-Sep<br/>25-35°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🏜️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Desert Climate</h4>
                    <p className="text-sm text-gray-600">Scant rainfall<br/>Extreme temperatures</p>
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
                        src="https://media.istockphoto.com/id/1128518146/vector/activists-protest-political-riot-sign-banners-people-holding-protests-placards-and.jpg?s=612x612&w=0&k=20&c=sT7aO2LedFyyD1JU52Zq06aTrvFv_3QB3dqi4d_wVh4=" 
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
                            <Flag size={16} className="mr-3 text-blue-400 flex-shrink-0" />
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
                  <Building2 className="mr-3 text-indigo-500" size={32} />
                  Key Political Features & Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyPoliticalFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Ongoing' ? 'bg-yellow-200 text-yellow-700' :
                          'bg-green-200 text-green-700'
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
              <Card className="border-0 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Current Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 BJP Government</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ High Court at Jodhpur</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Election Commission</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ District Administration</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">📊</span>
                    Electoral Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~4.7 Crore</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 200</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 25</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~50,000</li>
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
                                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
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
                    { name: 'Dal Baati Churma', emoji: '🥘' },
                    { name: 'Laal Maas', emoji: '🍖' },
                    { name: 'Ghewar', emoji: '🍰' },
                    { name: 'Ker Sangri', emoji: '🥬' },
                    { name: 'Bajra Roti', emoji: '🫓' },
                    { name: 'Mawa Kachori', emoji: '🥮' }
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🌾 Wheat & Barley</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌽 Bajra & Maize</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🥜 Mustard & Pulses</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍯 Cotton & Guar</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏭</span>
                    Industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🧵 Textiles</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚡ Cement</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🚗 Auto</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">💎 Handicrafts</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">💼</span>
                    Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🏨 Tourism</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏦 Banking</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">💻 IT</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🚚 Logistics</li>
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
                      <Camera className="text-blue-500" size={20} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {selectedAttraction && (
              <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-2xl">
                      <Camera className="mr-3 text-orange-500" size={32} />
                      {selectedAttraction.name}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedAttraction(null)}
                      className="hover:bg-orange-100"
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
                        <span className="flex items-center bg-orange-100 px-3 py-1 rounded-full">
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
                    src="https://www.ranthamborenationalpark.com/wp-content/uploads/2020/05/rajasthan-wildlife.jpg" 
                    alt="Wildlife"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TreePalm className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Flora & Fauna</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Wildlife</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐅</span>
                          <p className="text-sm mt-1">Royal Bengal Tiger</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦌</span>
                          <p className="text-sm mt-1">Chinkara</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐻</span>
                          <p className="text-sm mt-1">Sloth Bear</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦅</span>
                          <p className="text-sm mt-1">Great Indian Bustard</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌵</span>
                          <p className="text-sm mt-1">Cacti & Succulents</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Khejri Trees</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌳</span>
                          <p className="text-sm mt-1">Desert Oak</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌸</span>
                          <p className="text-sm mt-1">Rohida Flowers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                  <img 
                    src="https://t4.ftcdn.net/jpg/06/31/02/21/360_F_631022109_PXYXdWEMMa494E6dwHC0GSTvqSeHc3My.jpg" 
                    alt="Desert"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl">🏜️</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Geographic Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <span className="text-xl mr-3">🏜️</span>
                      <span>Thar Desert</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-xl mr-3">⛰️</span>
                      <span>Aravalli Range</span>
                    </li>
                    <li className="flex items-center p-3 bg-purple-50 rounded-lg">
                      <span className="text-xl mr-3">🏞️</span>
                      <span>Chambal River Basin</span>
                    </li>
                    <li className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="text-xl mr-3">🏕️</span>
                      <span>Salt Lakes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Protected Areas & Wildlife Sanctuaries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Ranthambore National Park',
                    'Sariska Tiger Reserve',
                    'Keoladeo National Park',
                    'Desert National Park',
                    'Kumbhalgarh Wildlife Sanctuary',
                    'Mount Abu Wildlife Sanctuary'
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
                      <span className="font-bold text-blue-600 text-lg">66.11%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">24.87%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">75.13%</span>
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
                      { name: 'Pushkar Fair', emoji: '🐪' },
                      { name: 'Teej', emoji: '💃' },
                      { name: 'Gangaur', emoji: '👰' },
                      { name: 'Desert Festival', emoji: '🏜️' },
                      { name: 'Mewar Festival', emoji: '🎉' }
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
                      <span className="text-2xl mr-2">🎵</span>
                      Music & Dance
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Ghoomar</li>
                      <li className="bg-white/60 p-2 rounded">Kalbeliya</li>
                      <li className="bg-white/60 p-2 rounded">Bhavai</li>
                      <li className="bg-white/60 p-2 rounded">Manganiyar</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Blue Pottery</li>
                      <li className="bg-white/60 p-2 rounded">Block Printing</li>
                      <li className="bg-white/60 p-2 rounded">Jewelry Making</li>
                      <li className="bg-white/60 p-2 rounded">Miniature Painting</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Literature
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Folk Tales</li>
                      <li className="bg-white/60 p-2 rounded">Dingal Poetry</li>
                      <li className="bg-white/60 p-2 rounded">Historical Chronicles</li>
                      <li className="bg-white/60 p-2 rounded">Modern Novels</li>
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

export default Rajasthan;