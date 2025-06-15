
import React, { useState } from 'react';
import { Music, Palette, Theater, Shirt, Play, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ArtForms = () => {
  const [activeCategory, setActiveCategory] = useState('dance');

  const categories = {
    dance: {
      title: 'Classical Dances',
      icon: Theater,
      items: [
        {
          name: 'Bharatanatyam',
          origin: 'Tamil Nadu',
          description: 'Ancient temple dance with intricate hand gestures and expressions',
          color: 'from-pink-400 to-rose-500'
        },
        {
          name: 'Kathak',
          origin: 'North India',
          description: 'Storytelling dance with graceful spins and rhythmic footwork',
          color: 'from-blue-400 to-indigo-500'
        },
        {
          name: 'Odissi',
          origin: 'Odisha',
          description: 'Lyrical dance inspired by temple sculptures',
          color: 'from-purple-400 to-violet-500'
        },
        {
          name: 'Kuchipudi',
          origin: 'Andhra Pradesh',
          description: 'Dance-drama with storytelling and character portrayal',
          color: 'from-emerald-400 to-teal-500'
        }
      ]
    },
    music: {
      title: 'Musical Traditions',
      icon: Music,
      items: [
        {
          name: 'Hindustani Classical',
          origin: 'North India',
          description: 'Raga-based classical music with improvisation',
          color: 'from-orange-400 to-red-500'
        },
        {
          name: 'Carnatic Classical',
          origin: 'South India',
          description: 'Composition-based classical music tradition',
          color: 'from-yellow-400 to-orange-500'
        },
        {
          name: 'Folk Music',
          origin: 'Pan-India',
          description: 'Regional folk songs and traditional instruments',
          color: 'from-green-400 to-emerald-500'
        },
        {
          name: 'Qawwali',
          origin: 'Sufi Tradition',
          description: 'Devotional music with powerful vocals',
          color: 'from-teal-400 to-cyan-500'
        }
      ]
    },
    visual: {
      title: 'Visual Arts',
      icon: Palette,
      items: [
        {
          name: 'Madhubani',
          origin: 'Bihar',
          description: 'Colorful folk paintings with geometric patterns',
          color: 'from-red-400 to-pink-500'
        },
        {
          name: 'Warli Art',
          origin: 'Maharashtra',
          description: 'Tribal art with simple geometric forms',
          color: 'from-amber-400 to-yellow-500'
        },
        {
          name: 'Miniature Paintings',
          origin: 'Rajasthan',
          description: 'Detailed small-scale paintings',
          color: 'from-indigo-400 to-purple-500'
        },
        {
          name: 'Kalamkari',
          origin: 'Andhra Pradesh',
          description: 'Hand-painted textile art',
          color: 'from-cyan-400 to-blue-500'
        }
      ]
    },
    textile: {
      title: 'Textile Arts',
      icon: Shirt,
      items: [
        {
          name: 'Banarasi Silk',
          origin: 'Varanasi',
          description: 'Luxurious silk sarees with gold brocade',
          color: 'from-yellow-400 to-gold-500'
        },
        {
          name: 'Bandhani',
          origin: 'Gujarat/Rajasthan',
          description: 'Tie-dye technique creating vibrant patterns',
          color: 'from-rose-400 to-pink-500'
        },
        {
          name: 'Ikat',
          origin: 'Odisha/Andhra Pradesh',
          description: 'Resist dyeing technique for geometric patterns',
          color: 'from-teal-400 to-emerald-500'
        },
        {
          name: 'Pashmina',
          origin: 'Kashmir',
          description: 'Fine cashmere wool shawls and scarves',
          color: 'from-purple-400 to-indigo-500'
        }
      ]
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Living Art Forms
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the diverse artistic expressions that have flourished across India for centuries
        </p>
      </div>

      {/* Category Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {Object.entries(categories).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-saffron-500 to-orange-600 text-white scale-105 shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-saffron-50 hover:text-saffron-600 border border-gray-200'
              }`}
            >
              <Icon size={20} />
              <span>{category.title}</span>
            </button>
          );
        })}
      </div>

      {/* Art Forms Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories[activeCategory].items.map((item, index) => (
          <Card 
            key={index}
            className="border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 
              bg-gradient-to-br from-white to-orange-50 overflow-hidden group animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} 
                flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
              </div>
              <CardTitle className="text-lg font-bold text-gray-800">
                {item.name}
              </CardTitle>
              <p className="text-sm text-saffron-600 font-medium">{item.origin}</p>
            </CardHeader>
            
            <CardContent>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover-scale"
                >
                  <Play className="mr-1 h-3 w-3" />
                  Watch
                </Button>
                <Button 
                  size="sm"
                  variant="outline"
                  className="border-saffron-200 text-saffron-700 hover:bg-saffron-50 hover-scale"
                >
                  <Heart className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-16 text-center">
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-saffron-500 to-orange-600 text-white">
          <CardContent className="py-12">
            <h3 className="text-3xl font-bold mb-4">Experience Art Like Never Before</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Immerse yourself in interactive workshops, virtual performances, and AR experiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-saffron-600 hover:bg-gray-100 hover-scale"
              >
                Virtual Workshop
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-saffron-600 hover-scale"
              >
                AR Art Gallery
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ArtForms;
