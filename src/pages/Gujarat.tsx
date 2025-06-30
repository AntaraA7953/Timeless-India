import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Gujarat = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
    {
      name: 'Statue of Unity',
      image: 'https://cdn.britannica.com/29/240229-050-ADA5E0E5/The-Statue-of-Unity-in-Gujarat-India.jpg',
      description: 'World\'s tallest statue dedicated to Sardar Vallabhbhai Patel',
      location: 'Kevadia, Narmada District'
    },
    {
      name: 'Gir National Park',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Gir_lion-Gir_forest%2Cjunagadh%2Cgujarat%2Cindia.jpeg',
      description: 'Only natural habitat of the Asiatic Lions',
      location: 'Junagadh District'
    },
    {
      name: 'Rani ki Vav',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Rani_ki_vav_02.jpg',
      description: 'UNESCO World Heritage intricately carved stepwell',
      location: 'Patan'
    },
    {
      name: 'White Desert (Rann of Kutch)',
      image: 'https://www.gujarattourism.com/content/dam/gujrattourism/images/weekend-get-aways/great-rann-of-kutch/Great-Rann-Of-Kutch-Banner.jpg',
      description: 'Salt desert known for Rann Utsav and moonlit landscapes',
      location: 'Kutch District'
    },
    {
      name: 'Somnath Temple',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Somanath_mandir_%28cropped%29.jpg/1200px-Somanath_mandir_%28cropped%29.jpg',
      description: 'Ancient Shiva temple and one of the 12 Jyotirlingas',
      location: 'Veraval'
    },
    {
      name: 'Dwarkadhish Temple',
      image: 'https://www.tusktravel.com/blog/wp-content/uploads/2019/12/Dwarkadhish-Temple-in-Dwarka.jpg',
      description: 'Sacred Hindu temple dedicated to Lord Krishna, one of the Char Dham pilgrimage sites',
      location: 'Dwarka'
    }
  ];

  const economicData = [
    { sector: 'Industries & Manufacturing', percentage: 35, description: 'Textiles, chemicals, petrochemicals', color: 'from-gray-600 to-gray-800' },
    { sector: 'Agriculture', percentage: 20, description: 'Cotton, groundnut, cumin, sugarcane', color: 'from-green-400 to-teal-500' },
    { sector: 'Tourism', percentage: 15, description: 'Heritage, wildlife, religious circuits', color: 'from-yellow-400 to-orange-500' },
    { sector: 'Diamond & Gems', percentage: 15, description: 'World hub of diamond polishing (Surat)', color: 'from-indigo-400 to-purple-500' },
    { sector: 'Ports & Logistics', percentage: 15, description: 'Major ports like Mundra and Kandla', color: 'from-blue-400 to-blue-600' }
  ];

  const culturalElements = [
    {
      title: 'Folk Dances & Music',
      icon: Music,
      items: ['Garba', 'Dandiya Raas', 'Bhavai dance'],
      image: 'https://travel-blog.happyeasygo.com/wp-content/uploads/2024/10/Garba-Ahmedabad.png',
      gradient: 'from-orange-400 to-red-500'
    },
    {
      title: 'Festivals',
      icon: Star,
      items: ['Navratri', 'Uttarayan (kite festival)', 'Rann Utsav'],
      image: 'https://www.rannutsav.com/assets/front/gallerynew/Gallery_New_%20(10).jpg',
      gradient: 'from-yellow-500 to-pink-500'
    },
    {
      title: 'Architecture & Craft',
      icon: Mountain,
      items: ['Sun Temple Modhera', 'Patola silk', 'Bandhani tie-dye'],
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Surya_mandhir.jpg',
      gradient: 'from-teal-400 to-green-500'
    },
    {
      title: 'Cuisine & Food Culture',
      icon: Utensils,
      items: ['Dhokla', 'Undhiyu', 'Fafda & Jalebi'],
      image: 'https://t3.ftcdn.net/jpg/01/25/95/58/360_F_125955869_qRmUszpJTLfY4mDA9B245qk6W58nnrsT.jpg',
      gradient: 'from-purple-400 to-indigo-500'
    }
  ];

  const politicalStructure = [
    {
      title: 'Statehood Status',
      icon: Flag,
      description: 'Became a state on May 1, 1960 after bifurcation from Bombay State',
      details: [
        'Unicameral legislature',
        '182-member Vidhan Sabha',
        'Chief Minister leads the executive'
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      title: 'Administrative Divisions',
      icon: Building2,
      description: '33 districts across western India',
      details: [
        'Major cities: Ahmedabad, Surat, Vadodara, Rajkot',
        'Taluka and Panchayat-level governance'
      ],
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Governance Structure',
      icon: Users2,
      description: 'Follows parliamentary democracy model',
      details: [
        'Governor as constitutional head',
        'Strong focus on industrial policies',
        'Panchayati Raj institutions active'
      ],
      color: 'from-purple-400 to-purple-600'
    },
    {
      title: 'Electoral System',
      icon: Vote,
      description: 'Direct elections every 5 years',
      details: [
        'Lok Sabha: 26 seats',
        'Rajya Sabha: 11 seats',
        'State Assembly: 182 seats'
      ],
      color: 'from-orange-400 to-orange-600'
    }
  ];

  const politicalParties = [
    { name: 'Bharatiya Janata Party (BJP)', region: 'Ruling party', color: 'bg-orange-100', textColor: 'text-orange-700' },
    { name: 'Indian National Congress (INC)', region: 'Main opposition', color: 'bg-blue-100', textColor: 'text-blue-700' },
    { name: 'Aam Aadmi Party (AAP)', region: 'New entrant with growing presence', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
  ];

  const keyPoliticalFeatures = [
    {
      title: 'Industrial Development Model',
      description: 'Rapid industrialization under Gujarat Model',
      impact: 'Economic growth and infrastructure boost',
      status: 'Nationally discussed model'
    },
    {
      title: 'Water & Irrigation Projects',
      description: 'Narmada Canal and Sardar Sarovar Dam schemes',
      impact: 'Agricultural support & drinking water access',
      status: 'Ongoing implementation'
    },
    {
      title: 'Communal Harmony Challenges',
      description: '2002 riots and aftermath',
      impact: 'Political polarization and policy reforms',
      status: 'Subject of national discourse'
    },
    {
      title: 'Smart Cities & Urban Development',
      description: 'Ahmedabad, Surat in smart city projects',
      impact: 'Improved civic amenities and digital governance',
      status: 'In advanced development'
    }
  ];

  const traditionalDresses = [
    {
      name: 'Chaniya Choli',
      region: 'Gujarati Women',
      description: 'Traditional festive attire with mirror work',
      features: ['Colorful embroidery', 'Worn during Navratri'],
      image: 'https://i.pinimg.com/736x/20/41/b0/2041b090f6408fc5abb05380be66575b.jpg',
      gradient: 'from-pink-400 to-red-500'
    },
    {
      name: 'Bandhani Saree',
      region: 'Across Gujarat',
      description: 'Tie-dye saree with intricate patterns',
      features: ['Bright colors', 'Dots and waves design'],
      image: 'https://soojidaara.in/cdn/shop/articles/Bandhani_Sarees_Gujarat-261027.jpg?v=1744570457',
      gradient: 'from-orange-400 to-yellow-500'
    },
    {
      name: 'Kediya & Dhoti',
      region: 'Gujarati Men',
      description: 'Traditional men\'s outfit worn during dances',
      features: ['Short frilled kurta', 'Paired with dhoti or tight pants'],
      image: 'https://5.imimg.com/data5/ANDROID/Default/2024/8/446833044/TK/LN/PB/229369390/product-jpeg.jpg',
      gradient: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Rabari Dress',
      region: 'Kutch Tribes',
      description: 'Embroidered dress with mirror work and veils',
      features: ['Heavy embroidery', 'Worn with silver jewelry'],
      image: 'https://i.pinimg.com/236x/cf/79/44/cf79443f2fce96a1178d44ea1e7ed896.jpg',
      gradient: 'from-green-400 to-teal-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
      <div className="bg-white/90 backdrop-blur-md border-b border-yellow-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/')} className="flex items-center space-x-2 hover:bg-yellow-50">
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Mountain className="text-yellow-600" size={28} />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Gujarat
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Land of Legends & Lions"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://media.istockphoto.com/id/803612302/photo/multicolored-sunset-landscape-silhouette-of-the-great-rann-of-kutch-gujarat.jpg?s=612x612&w=0&k=20&c=NmO9VN5HWZLS2732Tlwv5RXdauoGMxwUl10x4FGAtm8=)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-orange-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Land of Vibrance</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover Gujarat — a state where heritage, industry, and nature flourish side by side.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="w-full">
          <div className="mb-8">
            <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 gap-1 bg-white/70 backdrop-blur-sm h-auto p-2">
              <TabsTrigger value="overview" className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Overview</TabsTrigger>
              <TabsTrigger value="politics" className="data-[state=active]:bg-red-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Politics</TabsTrigger>
              <TabsTrigger value="culture" className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Culture</TabsTrigger>
              <TabsTrigger value="economy" className="data-[state=active]:bg-green-700 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Economy</TabsTrigger>
              <TabsTrigger value="tourism" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Tourism</TabsTrigger>
              <TabsTrigger value="nature" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Nature</TabsTrigger>
              <TabsTrigger value="society" className="data-[state=active]:bg-indigo-500 data-[state=active]:text-white text-xs sm:text-sm px-2 py-2">Society</TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-yellow-800">Capital</h3>
                  <p className="text-sm text-yellow-700">Gandhinagar</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-orange-800">Population</h3>
                  <p className="text-sm text-orange-700">~70 Million<br />Densely urban-industrial</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-amber-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <Mountain className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Geography</h3>
                  <p className="text-sm text-amber-700">Arid deserts, salt plains, coastline<br />196,024 km²</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <Star className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-blue-800">Languages</h3>
                  <p className="text-sm text-blue-700">Gujarati, Hindi, English</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Thermometer className="mr-3 text-yellow-600" size={32} />
                  Climate & Seasons
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-6 bg-gradient-to-br from-lime-100 to-lime-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌿</div>
                    <h4 className="font-semibold text-lime-700 text-lg">Spring</h4>
                    <p className="text-sm text-lime-600">Feb-Apr<br />24-34°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">☀️</div>
                    <h4 className="font-semibold text-yellow-700 text-lg">Summer</h4>
                    <p className="text-sm text-yellow-600">Apr-Jun<br />30-43°C</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌧️</div>
                    <h4 className="font-semibold text-blue-700 text-lg">Monsoon</h4>
                    <p className="text-sm text-blue-600">Jun-Sep<br />Moderate to low rainfall</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
                    <div className="text-4xl mb-2">🌬️</div>
                    <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
                    <p className="text-sm text-gray-600">Nov-Jan<br />12-28°C</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Politics Tab */}
          <TabsContent value="politics" className="space-y-6">
            {/* Political Structure Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {politicalStructure.map((structure, index) => {
                const IconComponent = structure.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                    <div className={`h-32 bg-gradient-to-r ${structure.color} relative`}>
                      <img 
                        src="https://images.unsplash.com/photo-1602432041983-c28a3f126744?w=400&h=200&fit=crop" 
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

            {/* Major Political Parties */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users2 className="mr-3 text-yellow-600" size={32} />
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

            {/* Key Political Features */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Building2 className="mr-3 text-orange-600" size={32} />
                  Key Political Features & Changes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyPoliticalFeatures.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-lg text-gray-800">{feature.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          feature.status === 'Historical' ? 'bg-gray-200 text-gray-700' :
                          feature.status === 'Implemented' ? 'bg-blue-200 text-blue-700' :
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

            {/* Administration & Stats */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 bg-gradient-to-br from-yellow-50 to-orange-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏛️</span>
                    Current Administration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">👤 Governor: Appointed by President</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Legislative Assembly (182 Seats)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚖️ Gujarat High Court – Ahmedabad</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📋 Active Panchayati Raj System</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏘️ 33 Districts across the state</li>
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
                    <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~5 Crore</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 182</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 26</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~51,000+</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Political Parties: 15+</li>
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
                  <Utensils className="mr-3 text-yellow-600" size={32} />
                  Traditional Cuisine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { name: 'Dhokla', emoji: '🍥' },
                    { name: 'Undhiyu', emoji: '🥦' },
                    { name: 'Khandvi', emoji: '🌯' },
                    { name: 'Thepla', emoji: '🫓' },
                    { name: 'Fafda-Jalebi', emoji: '🍬' },
                    { name: 'Khichdi & Kadhi', emoji: '🍲' }
                  ].map((dish, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl hover:shadow-lg transition-all hover:scale-105">
                      <div className="text-3xl mb-2">{dish.emoji}</div>
                      <h4 className="font-semibold text-yellow-700 text-lg">{dish.name}</h4>
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
              {/* Agricultural Products */}
              <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🌾</span>
                    Agricultural Products
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🌿 Cotton (Main cash crop)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌻 Groundnut</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🥭 Mango (Kesar & Alphonso)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🌾 Wheat & Bajra</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🍬 Sugarcane</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Handicrafts */}
              <Card className="border-0 bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🧵</span>
                    Handicrafts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🧣 Bandhani Tie-Dye Fabric</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪡 Embroidery of Kutch</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🎨 Rogan Art (Nirona Village)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪑 Lacquered Woodwork</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🪔 Terracotta & Pottery</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Industries */}
              <Card className="border-0 bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <span className="text-2xl mr-2">🏭</span>
                    Industries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center p-2 bg-white/50 rounded">🛢️ Petrochemicals & Refining</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧪 Pharmaceuticals & Chemicals</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🧵 Textiles & Garments</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">🚢 Shipbuilding & Ports (Kandla, Mundra)</li>
                    <li className="flex items-center p-2 bg-white/50 rounded">⚙️ Engineering, Auto, and SEZs</li>
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
              <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200 border-2">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center text-2xl">
                      <Camera className="mr-3 text-blue-500" size={32} />
                      {selectedAttraction.name}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setSelectedAttraction(null)}
                      className="hover:bg-blue-100"
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
                        <span className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
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
              {/* Flora & Fauna Card */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-green-400 to-emerald-500 relative overflow-hidden">
                  <img 
                    src="https://www.gujarattrips.com/assets/images/resources/destinations/34.png" 
                    alt="Wildlife"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TreePine className="text-white" size={48} />
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
                          <span className="text-2xl">🦁</span>
                          <p className="text-sm mt-1">Asiatic Lions (Gir)</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦌</span>
                          <p className="text-sm mt-1">Blackbuck & Chinkara</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🦅</span>
                          <p className="text-sm mt-1">Flamingos & Cranes</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🐊</span>
                          <p className="text-sm mt-1">Crocodiles & Marine Life</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌳</span>
                          <p className="text-sm mt-1">Teak, Neem & Babul</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌿</span>
                          <p className="text-sm mt-1">Thorny Shrubs & Grasslands</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌴</span>
                          <p className="text-sm mt-1">Date Palms & Coconut</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                          <span className="text-2xl">🌺</span>
                          <p className="text-sm mt-1">Bougainvillea & Acacia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Geographic Features Card */}
              <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
                <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative overflow-hidden">
                  <img 
                    src="https://media.istockphoto.com/id/1248245938/photo/rann-festival-in-india.jpg?s=612x612&w=0&k=20&c=poKruB4X9IOXelYf9HFQZYFbndlzGoJGSkyOGortspA=" 
                    alt="Geography"
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Mountain className="text-white" size={48} />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">Geographic Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <Mountain size={20} className="mr-3 text-blue-500" />
                      <span>Aravalli Hills & Gir Hills</span>
                    </li>
                    <li className="flex items-center p-3 bg-green-50 rounded-lg">
                      <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
                      <span>Rann of Kutch Salt Desert</span>
                    </li>
                    <li className="flex items-center p-3 bg-yellow-50 rounded-lg">
                      <span className="w-5 h-5 bg-yellow-400 rounded mr-3"></span>
                      <span>Narmada, Tapi & Sabarmati Rivers</span>
                    </li>
                    <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
                      <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
                      <span>Coastal Belt & Gulf of Khambhat</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Protected Areas & Parks */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Protected Areas & Wildlife Sanctuaries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    'Gir National Park',
                    'Velavadar Blackbuck Sanctuary',
                    'Marine National Park, Gulf of Kutch',
                    'Wild Ass Sanctuary, Little Rann',
                    'Jessore Sloth Bear Sanctuary',
                    'Balaram-Ambaji Wildlife Sanctuary'
                  ].map((park, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105">
                      <span className="text-2xl mb-2 block">🌿</span>
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
              {/* Demographics Card */}
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
                      <span className="font-bold text-blue-600 text-lg">82.4%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🏙️</span>
                        Urban Population
                      </span>
                      <span className="font-bold text-green-600 text-lg">43.9%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
                      <span className="flex items-center">
                        <span className="text-xl mr-2">🌾</span>
                        Rural Population
                      </span>
                      <span className="font-bold text-orange-600 text-lg">56.1%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Major Festivals Card */}
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
                      { name: 'Navratri (Garba Nights)', emoji: '🪔' },
                      { name: 'Uttarayan (Kite Festival)', emoji: '🪁' },
                      { name: 'Rath Yatra, Ahmedabad', emoji: '🚩' },
                      { name: 'Modhera Dance Festival', emoji: '💃' },
                      { name: 'Janmashtami – Dwarka', emoji: '👶' }
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

            {/* Traditional Arts & Crafts Card */}
            <Card className="border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Music className="mr-3 text-indigo-500" size={32} />
                  Traditional Arts & Crafts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Music & Dance */}
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-indigo-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎵</span>
                      Music & Dance
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Garba & Dandiya Raas</li>
                      <li className="bg-white/60 p-2 rounded">Bhavai Folk Theatre</li>
                      <li className="bg-white/60 p-2 rounded">Sugam Sangeet</li>
                      <li className="bg-white/60 p-2 rounded">Dayro & Lok Geet</li>
                    </ul>
                  </div>

                  {/* Handicrafts */}
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">🎨</span>
                      Handicrafts
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Bandhani Tie-Dye</li>
                      <li className="bg-white/60 p-2 rounded">Patola Silk Weaving</li>
                      <li className="bg-white/60 p-2 rounded">Kutchi Embroidery</li>
                      <li className="bg-white/60 p-2 rounded">Terracotta & Wood Carvings</li>
                    </ul>
                  </div>

                  {/* Oral Literature */}
                  <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
                    <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
                      <span className="text-2xl mr-2">📚</span>
                      Oral Literature
                    </h4>
                    <ul className="space-y-2">
                      <li className="bg-white/60 p-2 rounded">Folk Tales of Vikram-Betal</li>
                      <li className="bg-white/60 p-2 rounded">Charan Songs & Bhajans</li>
                      <li className="bg-white/60 p-2 rounded">Saint Poetry (Narsinh Mehta)</li>
                      <li className="bg-white/60 p-2 rounded">Local Proverbs & Legends</li>
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

export default Gujarat;