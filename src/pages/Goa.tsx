import React, { useState } from 'react';
import { ArrowLeft, MapPin, Mountain, Users, Coins, Camera, Utensils, Music, Star, Calendar, Thermometer, TreePine, Flag, Vote, Building2, Users2, Landmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';

const Goa = () => {
  const navigate = useNavigate();
  const [selectedAttraction, setSelectedAttraction] = useState(null);

 const attractions = [
  {
    name: 'Basilica of Bom Jesus',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Front_Elevation_of_Basilica_of_Bom_Jesus.jpg',
    description: 'UNESCO World Heritage baroque church housing the relics of St. Francis Xavier',
    location: 'Old Goa'
  },
  {
    name: 'Dudhsagar Falls',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Doodhsagar_Fall.jpg',
    description: 'Spectacular four-tiered waterfall on the Mandovi River',
    location: 'Sonaulim, Goa-Karnataka border'
  },
  {
    name: 'Fort Aguada',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Fort_aguada.jpg',
    description: '17th-century Portuguese fort with a lighthouse and sweeping sea views',
    location: 'Sinquerim'
  },
  {
    name: 'Calangute Beach',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/calangute-beach-goa-7-musthead-hero?qlt=82&ts=1726735078814',
    description: 'Bustling beach with water sports, shacks, and nightlife',
    location: 'North Goa'
  },
  {
    name: 'Salim Ali Bird Sanctuary',
    image: 'https://s7ap1.scene7.com/is/image/incredibleindia/dr-salim-ali-bird-sanctuary-goa-goa-1-attr-hero?qlt=82&ts=1726735361333',
    description: 'Mangrove forest sanctuary named after ornithologist Dr. Salim Ali',
    location: 'Chorao Island'
  }
];

  const economicData = [
  { sector: 'Tourism', percentage: 40, description: 'Hotels, beaches, heritage tourism', color: 'from-blue-400 to-blue-600' },
  { sector: 'Mining', percentage: 20, description: 'Iron ore, bauxite extraction', color: 'from-gray-700 to-gray-900' },
  { sector: 'Fisheries', percentage: 15, description: 'Marine and inland fishing economy', color: 'from-green-400 to-teal-500' },
  { sector: 'Agriculture', percentage: 10, description: 'Rice, cashew, coconut, areca nuts', color: 'from-yellow-400 to-green-500' },
  { sector: 'Pharmaceuticals & IT', percentage: 15, description: 'Growing pharma and startup sector', color: 'from-purple-400 to-indigo-500' }
];

  const culturalElements = [
  {
    title: 'Portuguese Influence',
    icon: Mountain,
    items: ['Catholic festivals', 'Architecture & cuisine', 'Latin Quarters in Panaji'],
    image: 'https://www.worldhistory.org/img/r/p/1500x1500/14223.png',
    gradient: 'from-pink-500 to-red-600'
  },
  {
    title: 'Festivals',
    icon: Star,
    items: ['Goa Carnival', 'Feast of St. Francis Xavier', 'Sao Joao Festival'],
    image: 'https://cdn.wionews.com/sites/default/files/2023/02/19/333411-untitled-design-2023-02-19t115959151.png',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    title: 'Traditional Music & Dance',
    icon: Music,
    items: ['Mando', 'Dekhni', 'Fugdi and Dhalo'],
    image: 'https://storage.googleapis.com/goa-app-12a91.appspot.com/2023-09-05T07%3A12%3A47.638Zgoa-dances.webp?GoogleAccessId=firebase-adminsdk-zeqcj%40goa-app-12a91.iam.gserviceaccount.com&Expires=16447017600&Signature=ZS4QnOYfsQRDht25iqBK4zzggiFwqa3mpX0gRFN1NxzyhmL0zlke%2BGpOX4IlhG2gX%2FbOnBCbJla754ay%2Bp5zPQFvDAPZiyqAcPuXWuudpUT%2BGXlPuGNPI9mivfXxaIAnnDUvaObneIo%2BegAnmjp3uKM2qfxyh8gSLOB2hbBtVKLsFZShIs4A2%2FsZeFZ2Y4Ugmc3YF7JdwDLfHrAayL6tar74czlethA0okN13F79oBtuTpVnqQ43QtC7w2%2FRB3Wj2rxOi%2B%2BqfLnJwiaF%2Fa0Fdl%2FMtA%2Fp%2BUAvDhR93FvjNJ5vnpjYZoXY%2FJQhzi69zngFrl7ZHVaqR8CQ%2FMjcFsvB%2BQ%3D%3D',
    gradient: 'from-purple-400 to-indigo-500'
  },
  {
    title: 'Cuisine & Food Culture',
    icon: Utensils,
    items: ['Fish curry rice', 'Vindaloo', 'Bebinca dessert'],
    image: 'https://static.toiimg.com/thumb/55224612.cms?width=1200&height=900',
    gradient: 'from-red-500 to-yellow-600'
  }
];

  const politicalStructure = [
  {
    title: 'Statehood Status',
    icon: Flag,
    description: 'Became a state on May 30, 1987',
    details: [
      '27th state of India',
      'Unicameral legislature with 40 MLAs',
      'Chief Minister leads the executive'
    ],
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'Administrative Divisions',
    icon: Building2,
    description: '2 districts — North Goa and South Goa',
    details: [
      'Key cities: Panaji, Margao, Vasco da Gama',
      '11 talukas'
    ],
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'Governance Structure',
    icon: Users2,
    description: 'Parliamentary system under Indian Constitution',
    details: [
      'Governor as constitutional head',
      'Panchayati Raj institutions in rural areas',
      'Strong urban civic bodies'
    ],
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'Electoral System',
    icon: Vote,
    description: 'Direct elections with high voter turnout',
    details: [
      'Lok Sabha: 2 seats',
      'Rajya Sabha: 1 seat',
      'State Assembly: 40 seats'
    ],
    color: 'from-orange-400 to-orange-600'
  }
];

  const politicalParties = [
  { name: 'Bharatiya Janata Party (BJP)', region: 'Ruling party (2023)', color: 'bg-orange-100', textColor: 'text-orange-700' },
  { name: 'Indian National Congress (INC)', region: 'Main opposition', color: 'bg-blue-100', textColor: 'text-blue-700' },
  { name: 'Goa Forward Party (GFP)', region: 'Regional presence', color: 'bg-green-100', textColor: 'text-green-700' },
  { name: 'Aam Aadmi Party (AAP)', region: 'Emerging player', color: 'bg-yellow-100', textColor: 'text-yellow-700' }
];

  const keyPoliticalFeatures = [
  {
    title: 'Mining Policy Challenges',
    description: 'Ban and regulation of iron ore mining',
    impact: 'Economic slowdown and unemployment in mining belts',
    status: 'Under legal and policy review'
  },
  {
    title: 'Sustainable Tourism Push',
    description: 'Efforts to regulate tourism and protect ecology',
    impact: 'Promotion of eco-tourism and heritage conservation',
    status: 'In implementation phase'
  },
  {
    title: 'Language & Identity Issues',
    description: 'Debate over Konkani and Marathi dominance',
    impact: 'Cultural and political mobilization',
    status: 'Konkani recognized in 8th Schedule'
  },
  {
    title: 'Liquor and Casino Policies',
    description: 'Revenue source vs moral debates',
    impact: 'Casino tax benefits vs social criticism',
    status: 'Ongoing regulatory scrutiny'
  }
];

  const traditionalDresses = [
  {
    name: 'Pano Bhaju',
    region: 'Goan Hindu Women',
    description: 'Traditional dress for festive and wedding occasions',
    features: ['Bright colors', 'Gold jewelry', 'Silk and cotton blends'],
    image: 'https://pm1.narvii.com/6422/3479eba0e348b09d89bb930302328af036cec097_hq.jpg',
    gradient: 'from-red-400 to-pink-500'
  },
  {
    name: 'Nau-Vari Saree',
    region: 'Goan Brahmin & Konkan Women',
    description: 'Nine-yard saree draped traditionally for ceremonies',
    features: ['Worn during dances and rituals', 'Intricate draping style'],
    image: 'https://content.jdmagicbox.com/rep/b2b/nauvari-saree/nauvari-saree-10.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit',
    gradient: 'from-orange-400 to-yellow-500'
  },
  {
    name: 'Kashti & Kunbi Saree',
    region: 'Tribal & rural women',
    description: 'Simple red cotton saree of Kunbi community',
    features: ['Plain patterns', 'Worn with tied knot on shoulder'],
    image: 'https://grandmaslegacy.wordpress.com/wp-content/uploads/2018/07/kunbi-tribe-dance.jpg',
    gradient: 'from-green-400 to-teal-500'
  },
  {
    name: 'Shirt & Lungi / Half Pants',
    region: 'Goan Men (Traditional)',
    description: 'Casual village attire especially near coasts',
    features: ['Comfortable cotton wear', 'Sometimes paired with caps'],
    image: 'https://i.pinimg.com/736x/28/ba/fb/28bafb3c378569ac2f822fa6b32aefe9.jpg',
    gradient: 'from-blue-400 to-indigo-500'
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
              <Landmark className="text-yellow-600" size={28} />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Goa
              </h1>
            </div>
          </div>
          <div className="text-sm text-gray-600 italic">
            "Pearl of the Orient & Land of Beaches"
          </div>
        </div>
      </div>
    </div>

    {/* Hero Section with Background Image */}
    <div className="relative h-80 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://s7ap1.scene7.com/is/image/incredibleindia/calangute-beach-goa-7-musthead-hero?qlt=82&ts=1726735078814)'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/70 to-orange-900/70"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl font-bold mb-4 animate-fade-in-up">Welcome to the Sunshine State of India</h2>
          <p className="text-xl opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore Goa — where golden beaches meet vibrant culture and colonial charm.
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
        <p className="text-sm text-yellow-700">Panaji (Panjim)</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-orange-50 to-orange-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center">
          <Users className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-orange-800">Population</h3>
        <p className="text-sm text-orange-700">~1.6 Million<br />High urban ratio</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-amber-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center">
          <Mountain className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-amber-800">Geography</h3>
        <p className="text-sm text-amber-700">Coastal plains & western ghats<br />3,702 km²</p>
      </CardContent>
    </Card>

    <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-blue-100">
      <CardContent className="p-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
          <Star className="text-white" size={28} />
        </div>
        <h3 className="font-bold text-lg mb-2 text-blue-800">Languages</h3>
        <p className="text-sm text-blue-700">Konkani, Marathi, English, Hindi</p>
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
          <p className="text-sm text-lime-600">Feb-Apr<br />25-32°C</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">☀️</div>
          <h4 className="font-semibold text-yellow-700 text-lg">Summer</h4>
          <p className="text-sm text-yellow-600">Apr-Jun<br />28-36°C</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">🌧️</div>
          <h4 className="font-semibold text-blue-700 text-lg">Monsoon</h4>
          <p className="text-sm text-blue-600">Jun-Sep<br />Heavy coastal rain</p>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl hover:shadow-lg transition-all">
          <div className="text-4xl mb-2">🌬️</div>
          <h4 className="font-semibold text-gray-700 text-lg">Winter</h4>
          <p className="text-sm text-gray-600">Nov-Jan<br />20-28°C</p>
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
              src="https://images.unsplash.com/photo-1580407922521-fd7d2d7d5d5f?w=400&h=200&fit=crop" 
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
          <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Legislative Assembly (40 Seats)</li>
          <li className="flex items-center p-2 bg-white/50 rounded">⚖️ Bombay High Court – Goa Bench</li>
          <li className="flex items-center p-2 bg-white/50 rounded">📋 Active Panchayat System</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏘️ 2 Districts: North & South Goa</li>
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
          <li className="flex items-center p-2 bg-white/50 rounded">🗳️ Total Voters: ~11 Lakh</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏛️ Assembly Seats: 40</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🏢 Lok Sabha Seats: 2</li>
          <li className="flex items-center p-2 bg-white/50 rounded">📍 Polling Stations: ~1,700+</li>
          <li className="flex items-center p-2 bg-white/50 rounded">👥 Registered Political Parties: 10+</li>
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
        { name: 'Goan Fish Curry', emoji: '🐟' },
        { name: 'Prawn Balchão', emoji: '🍤' },
        { name: 'Sorpotel', emoji: '🍖' },
        { name: 'Bebinca (Layered Dessert)', emoji: '🍰' },
        { name: 'Xacuti (Spiced Curry)', emoji: '🍛' },
        { name: 'Poi (Goan Bread)', emoji: '🥖' }
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
          <span className="text-2xl mr-2">🌴</span>
          Agricultural Products
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center p-2 bg-white/50 rounded">🌾 Rice (Staple crop)</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🥥 Coconut</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🥜 Cashew Nut</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🍌 Banana, Mango</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🫚 Arecanut & Spices</li>
        </ul>
      </CardContent>
    </Card>

    {/* Handicrafts */}
    <Card className="border-0 bg-gradient-to-br from-yellow-50 to-yellow-100 hover:shadow-xl transition-all">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <span className="text-2xl mr-2">🧶</span>
          Handicrafts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center p-2 bg-white/50 rounded">🐚 Shell Craft & Sea Art</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🪵 Bamboo & Cane Products</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🥻 Kunbi Saree Weaving</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🪔 Brassware & Earthen Lamps</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🎭 Festive Masks & Puppets</li>
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
          <li className="flex items-center p-2 bg-white/50 rounded">🧪 Pharmaceuticals & Biotech</li>
          <li className="flex items-center p-2 bg-white/50 rounded">⛏️ Iron Ore Mining</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🖥️ Electronics & IT Parks</li>
          <li className="flex items-center p-2 bg-white/50 rounded">🧴 Cashew & Seafood Processing</li>
          <li className="flex items-center p-2 bg-white/50 rounded">⚡ Power & Infrastructure Projects</li>
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
          src="https://map.sahapedia.org/admin/assets/images/202205816015372Goa_PortraitInline_Salim_Ali_Sanctuary_DSC00645.jpg" 
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
                <span className="text-2xl">🦜</span>
                <p className="text-sm mt-1">Hornbills & Kingfishers</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🦝</span>
                <p className="text-sm mt-1">Indian Civet & Mongoose</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🐘</span>
                <p className="text-sm mt-1">Wild Elephants (Occasional)</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🦀</span>
                <p className="text-sm mt-1">Marine Life & Crabs</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-green-700 mb-3 text-lg">Flora</h4>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌴</span>
                <p className="text-sm mt-1">Coconut & Palm Trees</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌺</span>
                <p className="text-sm mt-1">Bougainvillea & Hibiscus</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌳</span>
                <p className="text-sm mt-1">Mango, Cashew & Jackfruit</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg text-center">
                <span className="text-2xl">🌿</span>
                <p className="text-sm mt-1">Mangroves & Medicinal Plants</p>
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
          src="https://goa-tourism.org.in/images/places-to-visit/headers/vagator-beach-goa-entry-fee-timings-holidays-reviews-header.jpg" 
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
            <span>Western Ghats Hills</span>
          </li>
          <li className="flex items-center p-3 bg-green-50 rounded-lg">
            <span className="w-5 h-5 bg-green-400 rounded mr-3"></span>
            <span>Coastal Plains & Lagoons</span>
          </li>
          <li className="flex items-center p-3 bg-yellow-50 rounded-lg">
            <span className="w-5 h-5 bg-yellow-400 rounded mr-3"></span>
            <span>Zauri, Mandovi & Sal Rivers</span>
          </li>
          <li className="flex items-center p-3 bg-indigo-50 rounded-lg">
            <span className="w-5 h-5 bg-indigo-400 rounded mr-3"></span>
            <span>Golden Beaches & Sea Cliffs</span>
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
          'Bhagwan Mahavir Wildlife Sanctuary',
          'Mollem National Park',
          'Salim Ali Bird Sanctuary',
          'Cotigao Wildlife Sanctuary',
          'Bondla Wildlife Sanctuary',
          'Netravali Wildlife Sanctuary'
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
            <span className="font-bold text-blue-600 text-lg">88.7%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
            <span className="flex items-center">
              <span className="text-xl mr-2">🏙️</span>
              Urban Population
            </span>
            <span className="font-bold text-green-600 text-lg">62.2%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-white/70 rounded-lg">
            <span className="flex items-center">
              <span className="text-xl mr-2">🌾</span>
              Rural Population
            </span>
            <span className="font-bold text-orange-600 text-lg">37.8%</span>
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
            { name: 'Goa Carnival', emoji: '🎭' },
            { name: 'Shigmo Festival', emoji: '🎊' },
            { name: 'Feast of St. Francis Xavier', emoji: '⛪' },
            { name: 'Sao Joao (Monsoon Festival)', emoji: '🌧️' },
            { name: 'Ganesh Chaturthi', emoji: '🐘' }
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
            <li className="bg-white/60 p-2 rounded">Mando & Dulpod</li>
            <li className="bg-white/60 p-2 rounded">Fugdi & Dhalo</li>
            <li className="bg-white/60 p-2 rounded">Portuguese Folk Tunes</li>
            <li className="bg-white/60 p-2 rounded">Ghumat & Dhol Performances</li>
          </ul>
        </div>

        {/* Handicrafts */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
          <h4 className="font-semibold text-purple-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">🎨</span>
            Handicrafts
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Coconut Shell Art</li>
            <li className="bg-white/60 p-2 rounded">Sea Shell Ornaments</li>
            <li className="bg-white/60 p-2 rounded">Terracotta & Clay Items</li>
            <li className="bg-white/60 p-2 rounded">Brass Lamps & Furniture</li>
          </ul>
        </div>

        {/* Oral Literature */}
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
          <h4 className="font-semibold text-pink-700 mb-4 text-lg flex items-center">
            <span className="text-2xl mr-2">📚</span>
            Oral Literature
          </h4>
          <ul className="space-y-2">
            <li className="bg-white/60 p-2 rounded">Konkani Proverbs & Songs</li>
            <li className="bg-white/60 p-2 rounded">Local Folk Narratives</li>
            <li className="bg-white/60 p-2 rounded">Portuguese Tales & Sayings</li>
            <li className="bg-white/60 p-2 rounded">Sea Legends & Folklore</li>
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

export default Goa;