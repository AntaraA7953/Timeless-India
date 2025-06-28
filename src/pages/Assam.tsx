import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Assam = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

  const attractions = [
  {
    name: 'Kaziranga National Park',
    image: 'https://www.kaziranga-national-park.com/wp-content/uploads/2019/05/kaziranga-national-park2.jpg',
    description: 'UNESCO World Heritage Site, famous for one-horned rhinoceros',
    location: 'Golaghat & Nagaon'
  },
  {
    name: 'Majuli Island',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Doriya_River_of_Majuli.jpg',
    description: 'World’s largest river island with rich Vaishnavite culture',
    location: 'Brahmaputra River'
  },
  {
    name: 'Kamakhya Temple',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Kamakhya_Temple_-_DEV_8829.jpg/1280px-Kamakhya_Temple_-_DEV_8829.jpg',
    description: 'Ancient Shakti Peeth dedicated to Goddess Kamakhya',
    location: 'Guwahati'
  },
  {
    name: 'Sivasagar',
    image: 'https://t4.ftcdn.net/jpg/01/31/81/71/360_F_131817141_TihLsNLNvwQmezWZ0jZLIMykGUqqLkSe.jpg',
    description: 'Historic capital of Ahom dynasty with royal monuments',
    location: 'Sivasagar'
  },
  {
    name: 'Manas National Park',
    image: 'https://i0.wp.com/kaziranganationalparkassam.in/wp-content/uploads/2018/08/manas-np-entry-point-at-banasbari-range.jpg?resize=648%2C414&ssl=1',
    description: 'Biodiversity hotspot and Project Tiger reserve',
    location: 'Western Assam'
  }
];


  const economicData = [
  { sector: 'Agriculture', percentage: 38, description: 'Rice, tea, jute', color: 'from-green-400 to-green-600' },
  { sector: 'Tea Industry', percentage: 20, description: 'World’s largest tea-producing region', color: 'from-yellow-400 to-yellow-600' },
  { sector: 'Oil & Gas', percentage: 15, description: 'Crude oil, natural gas exploration', color: 'from-gray-400 to-gray-600' },
  { sector: 'Tourism', percentage: 12, description: 'Eco-tourism and cultural tourism', color: 'from-blue-400 to-blue-600' },
  { sector: 'Handloom & Sericulture', percentage: 15, description: 'Eri, Muga, and Assam silk production', color: 'from-purple-400 to-purple-600' }
];


  const culturalElements = [
  {
    title: 'Traditional Arts',
    icon: Users,
    items: ['Sattriya Dance', 'Bihu Music', 'Folk Dramas'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Noopurt.jpg',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    title: 'Festivals',
    icon: Star,
    items: ['Bihu', 'Ambubachi Mela', 'Baishagu'],
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Bihu-Dance-assam.jpg',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    title: 'Vaishnavite Culture',
    icon: Mountain,
    items: ['Namghars', 'Srimanta Sankardev legacy', 'Satra Institutions'],
    image: 'https://majuliriverisland.wordpress.com/wp-content/uploads/2016/10/img_1458.jpg',
    gradient: 'from-indigo-400 to-blue-500'
  },
  {
    title: 'Craftsmanship',
    icon: TreePine,
    items: ['Bell Metal Work', 'Silk Weaving', 'Mask Making'],
    image: 'https://easternroutes.com/wp-content/uploads/2019/01/Art_Craft_Northeast_India-1-1024x681.jpg',
    gradient: 'from-green-400 to-teal-500'
  }
];

  const politicalStructure = [
  {
    title: 'Statehood Status',
    icon: Flag,
    description: 'Became a state on August 15, 1947',
    details: [
      'One of the original provinces of independent India',
      'Legislative Assembly with 126 seats',
      'Chief Minister heads the executive branch'
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'Administrative Divisions',
    icon: Building2,
    description: '35 districts as of 2025',
    details: [
      'Divided into Upper and Lower Assam zones',
      'Important cities: Guwahati, Dibrugarh, Silchar'
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Governance Structure',
    icon: Users2,
    description: 'Constitutional democracy under Indian Union',
    details: [
      'Governor as constitutional head',
      'Legislative, executive and judiciary wings',
      'Active Panchayati Raj institutions'
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Electoral System',
    icon: Vote,
    description: 'Direct elections and proportional representation',
    details: [
      'Lok Sabha: 14 seats',
      'Rajya Sabha: 7 seats',
      'Legislative Assembly: 126 seats'
    ],
    color: 'from-orange-400 to-orange-600'
  }
];

  const politicalParties = [
  { name: 'Bharatiya Janata Party (BJP)', region: 'Ruling party', color: 'bg-orange-100', textColor: 'text-orange-700' },
  { name: 'Indian National Congress (INC)', region: 'Major opposition', color: 'bg-blue-100', textColor: 'text-blue-700' },
  { name: 'Asom Gana Parishad (AGP)', region: 'Regional ally', color: 'bg-green-100', textColor: 'text-green-700' },
  { name: 'All India United Democratic Front (AIUDF)', region: 'Minority-based party', color: 'bg-purple-100', textColor: 'text-purple-700' },
  { name: 'Raijor Dal', region: 'Emerging regional party', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
];


  const keyPoliticalFeatures = [
  {
    title: 'Assam Accord',
    description: 'Historic 1985 agreement to address illegal migration',
    impact: 'Shaped identity and citizenship policies',
    status: 'Implemented with amendments'
  },
  {
    title: 'NRC Update',
    description: 'National Register of Citizens revision in 2019',
    impact: 'Affected millions’ citizenship status',
    status: 'Controversial and ongoing'
  },
  {
    title: 'Autonomous Councils',
    description: 'Sixth Schedule provisions for tribal regions',
    impact: 'Empowers local governance in tribal belts',
    status: 'Active'
  },
  {
    title: 'Ethnic Harmony Policies',
    description: 'State-driven peace initiatives',
    impact: 'Reduced militancy and fostered development',
    status: 'Ongoing'
  }
];



  const traditionalDresses = [
  {
    name: 'Mekhela Chador',
    region: 'Assamese Women',
    description: 'Traditional handwoven attire with silk patterns',
    features: ['Worn like a saree', 'Made from Muga or Pat silk', 'Vibrant motifs'],
    image: 'https://1.bp.blogspot.com/-egmtkQrJqKI/Xjf6_xTdSeI/AAAAAAAAKN8/NWHHx6G2LVQpHpHJf_Dk56ubHE9sPzBdQCLcBGAsYHQ/s1600/assamese_women_mekhela_chador.jpg',
    gradient: 'from-pink-400 to-red-500'
  },
  {
    name: 'Dhoti-Kurta with Seleng',
    region: 'Assamese Men',
    description: 'Ceremonial dress for festivals and rituals',
    features: ['White dhoti', 'Kurta with traditional motifs', 'Seleng cloth on shoulder'],
    image: 'https://media.assettype.com/TNIE/import/uploads/user/ckeditor_images/article/2017/5/6/Assam_Govt.jpg',
    gradient: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'Dimasa Attire',
    region: 'Dimasa Tribe',
    description: 'Colorful and symbolic clothing',
    features: ['Riha (wrap)', 'Gamusa patterns', 'Tribal jewelry'],
    image: 'https://bododimasaarchive.org/system/files/atoms/image/beren.jpg',
    gradient: 'from-blue-400 to-indigo-500'
  },
  {
    name: 'Bodo Traditional Dress',
    region: 'Bodo Tribe',
    description: 'Handwoven Dokhona and Aronai',
    features: ['Dokhona wrap-around', 'Aronai scarf', 'Bright stripes and patterns'],
    image: 'https://i.pinimg.com/736x/46/c4/44/46c444e2d3f4c85afe6fbfc1e19611ba.jpg',
    gradient: 'from-purple-400 to-indigo-500'
  }
];



  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-lime-50 to-green-50">
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
                <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent">
                  Assam
                </h1>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic">
              "Land of Red Rivers and Blue Hills"
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/f/fe/Beauty_of_Kaziranga_National_Park.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-green-900/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Land of Tea & Heritage</h2>
            <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover Assam — rich in culture, biodiversity, and the aroma of world-famous tea.
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
        {/* ...rest of the TabsContent and other content... */}
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-yellow-50 to-yellow-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
          <MapPin className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-yellow-800">Capital</h3>
        <p className="text-sm text-yellow-600">Dispur (Guwahati)</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
          <Users className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-green-800">Population</h3>
        <p className="text-sm text-green-600">Over 35 Million<br />Ethnically diverse</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
          <Mountain className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-blue-800">Geography</h3>
        <p className="text-sm text-blue-600">Brahmaputra Valley<br />78,438 km²</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-purple-50 to-purple-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
          <Star className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-purple-800">Languages</h3>
        <p className="text-sm text-purple-600">Assamese, Bodo, Bengali, Hindi</p>
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
          <div className="text-4xl mb-2">🌱</div>
          <h4 className="font-semibold text-green-700 text-lg">Spring</h4>
          <p className="text-sm text-green-600">Mar-May<br />18-28°C</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">☀️</div>
          <h4 className="font-semibold text-blue-700 text-lg">Summer</h4>
          <p className="text-sm text-blue-600">Jun-Aug<br />25-35°C</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">🍁</div>
          <h4 className="font-semibold text-orange-700 text-lg">Autumn</h4>
          <p className="text-sm text-orange-600">Sep-Nov<br />20-30°C</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">❄️</div>
          <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
          <p className="text-sm text-gray-600">Dec-Feb<br />10-22°C</p>
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
              src="https://images.unsplash.com/photo-1589287703449-9261b0dceae4?w=400&h=200&fit=crop" 
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
  {/* Key Political Features */}
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
                feature.status === 'Historical' ? 'bg-gray-200 text-gray-700' :
                feature.status === 'Completed 2022' ? 'bg-green-200 text-green-700' :
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
    <Card className="border-0 bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <span className="text-2xl mr-2">🏛️</span>
          Current Administration
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center p-2 bg-white/50 rounded">👤 Governor: Appointed by President</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assam Legislative Assembly</li>
          <li className="flex items-center p-2 bg-white/50 rounded">⚖️ Gauhati High Court (Principal Bench)</li>
          <li className="flex items-center p-2 bg-white/50 rounded">📋 Panchayati Raj Institutions</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏘️ 35 District Administrations</li>
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
          <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~2.3 Crore</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 126</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 14</li>
          <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~28,000+</li>
          <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Political Parties: 30+</li>
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
        { name: 'Assamese Thali', emoji: '🍛' },
        { name: 'Khar', emoji: '🍲' },
        { name: 'Masor Tenga (Tangy Fish Curry)', emoji: '🐟' },
        { name: 'Pitha (Rice Cakes)', emoji: '🍘' },
        { name: 'Laru (Coconut Balls)', emoji: '🥥' },
        { name: 'Xaak Bhaji (Stir Fried Greens)', emoji: '🥬' }
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
          <li className="flex items-center p-2 bg-white/50 rounded">🌾 Rice (Sali, Boro, Ahu)</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🍃 Assam Tea (World-famous)</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🌶️ Mustard, Pulses & Chilies</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🍍 Pineapple, Banana & Citrus</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🥬 Leafy Vegetables & Spices</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="border-0 bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <span className="text-2xl mr-2">🎨</span>
          Handicrafts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center p-2 bg-white/50 rounded">🧵 Muga & Eri Silk Weaving</li>
          <li className="flex items-center p-2 bg-white/50 rounded">👗 Traditional Mekhela Chador Craft</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🪡 Bamboo & Cane Products</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🪵 Bell Metal & Brass Work (Sarthebari)</li>
          <li className="flex items-center p-2 bg-white/50 rounded">👜 Decorative Japi & Accessories</li>
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
          <li className="flex items-center p-2 bg-white/50 rounded">🛢️ Oil & Natural Gas (Digboi, Duliajan)</li>
          <li className="flex items-center p-2 bg-white/50 rounded">☕ Tea Processing Units</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏗️ Cement & Construction Materials</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🧵 Handloom & Textile Hubs</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🚢 Inland Water Transport & River Ports</li>
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
    <Card className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all">
      <div className="h-32 bg-gradient-to-r from-green-400 to-emerald-500 relative overflow-hidden">
        <img 
          src="https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2022/08/kaziranga-wildlife-2.jpg" 
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
                <span className="text-2xl">🦏</span>
                <p className="text-sm mt-1">One-Horned Rhino</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🐯</span>
                <p className="text-sm mt-1">Royal Bengal Tiger</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🐍</span>
                <p className="text-sm mt-1">King Cobra</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🦚</span>
                <p className="text-sm mt-1">Peacock</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌾</span>
                <p className="text-sm mt-1">Tea Bushes</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🎋</span>
                <p className="text-sm mt-1">Bamboo Forests</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌸</span>
                <p className="text-sm mt-1">Lotus & Water Lilies</p>
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
          src="https://images.unsplash.com/photo-1591632929387-6a2a59b8eac7?w=400&h=200&fit=crop" 
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
            <span>Brahmaputra River Basin</span>
          </li>
          <li className="flex items-center p-3 bg-green-50 rounded-lg">
            <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
            <span>Barak Valley Plains</span>
          </li>
          <li className="flex items-center p-3 bg-purple-50 rounded-lg">
            <span className="w-5 h-5 bg-purple-400 rounded mr-3"></span>
            <span>Hills of Karbi Anglong & Dima Hasao</span>
          </li>
          <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
            <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
            <span>Wetlands & Beels (Dipor Bil, etc.)</span>
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
          'Kaziranga National Park',
          'Manas National Park',
          'Orang National Park',
          'Nameri National Park',
          'Dibru-Saikhowa National Park',
          'Laokhowa Wildlife Sanctuary'
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
            <span className="font-bold text-blue-600 text-lg">73.18%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
            <span className="flex items-center">
              <span className="text-xl mr-2">🏙️</span>
              Urban Population
            </span>
            <span className="font-bold text-green-600 text-lg">14.1%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
            <span className="flex items-center">
              <span className="text-xl mr-2">🌾</span>
              Rural Population
            </span>
            <span className="font-bold text-orange-600 text-lg">85.9%</span>
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
            { name: 'Bihu (Rongali, Bhogali, Kongali)', emoji: '🎉' },
            { name: 'Eid & Durga Puja', emoji: '🕌' },
            { name: 'Baishagu (Bodo)', emoji: '🌸' },
            { name: 'Ali-Ai-Ligang (Mishing)', emoji: '🌿' },
            { name: 'Rath Yatra', emoji: '🚩' }
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
            <li className="bg-white/60 p-2 rounded">Bihu Dance</li>
            <li className="bg-white/60 p-2 rounded">Sattriya Dance</li>
            <li className="bg-white/60 p-2 rounded">Ojapali & Ankiya Nat</li>
            <li className="bg-white/60 p-2 rounded">Folk Songs (Borgeet, Zikir)</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
          <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">🎨</span>
            Handicrafts
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Eri & Muga Silk Weaving</li>
            <li className="bg-white/60 p-2 rounded">Cane & Bamboo Products</li>
            <li className="bg-white/60 p-2 rounded">Pottery & Mask Making (Majuli)</li>
            <li className="bg-white/60 p-2 rounded">Traditional Textile Art</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
          <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">📚</span>
            Oral Literature
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Folk Tales (Tejimola, etc.)</li>
            <li className="bg-white/60 p-2 rounded">Mythological Narratives</li>
            <li className="bg-white/60 p-2 rounded">Sattra Teachings</li>
            <li className="bg-white/60 p-2 rounded">Ancient Proverbs</li>
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

export default Assam;
