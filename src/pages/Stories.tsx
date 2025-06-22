
import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, Calendar, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  location: string;
  date: string;
  likes: number;
  category: string;
}

const Stories = () => {
  const navigate = useNavigate();
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    location: '',
    category: 'personal'
  });

  // Sample stories data
  const [stories] = useState<Story[]>([
    {
      id: '1',
      title: 'Grandmother\'s Recipe from Bengal',
      content: 'Every Durga Puja, my grandmother would wake up at 4 AM to prepare the traditional sweets. The aroma of kheer and sandesh would fill our entire neighborhood. She taught me that food is not just sustenance, but a way to preserve our heritage and bring families together.',
      author: 'Priya Sharma',
      location: 'Kolkata, West Bengal',
      date: '2024-01-15',
      likes: 24,
      category: 'tradition'
    },
    {
      id: '2',
      title: 'The Village Potter\'s Legacy',
      content: 'In our small village in Rajasthan, Kaka ji has been making pottery for 40 years. His hands tell stories of generations of craftsmen. When I visited him last summer, he taught me that every pot has a soul, and every creation carries the spirit of our ancestors.',
      author: 'Arjun Patel',
      location: 'Jaipur, Rajasthan',
      date: '2024-02-08',
      likes: 31,
      category: 'craft'
    },
    {
      id: '3',
      title: 'Monsoon Memories from Kerala',
      content: 'The backwaters during monsoon season are magical. I remember sitting with my grandfather on our houseboat, listening to his stories about ancient spice traders. The rain on the coconut leaves created a symphony that I carry in my heart wherever I go.',
      author: 'Maya Nair',
      location: 'Alleppey, Kerala',
      date: '2024-01-22',
      likes: 18,
      category: 'nature'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Story submitted successfully!",
      description: "Thank you for sharing your story with the community."
    });
    
    setFormData({
      title: '',
      content: '',
      author: '',
      location: '',
      category: 'personal'
    });
    setShowSubmitForm(false);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tradition': return 'bg-orange-100 text-orange-700';
      case 'craft': return 'bg-purple-100 text-purple-700';
      case 'nature': return 'bg-green-100 text-green-700';
      case 'festival': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-blue-100 text-blue-700';
    }
  };

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
                <h1 className="text-2xl font-bold text-gradient">Stories of India</h1>
                <p className="text-sm text-gray-600">Share and discover the heart of our nation</p>
              </div>
            </div>
            
            <Button 
              onClick={() => setShowSubmitForm(!showSubmitForm)}
              className="bg-gradient-to-r from-saffron-500 to-emerald-500 hover:from-saffron-600 hover:to-emerald-600"
            >
              {showSubmitForm ? 'View Stories' : 'Share Your Story'}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {showSubmitForm ? (
          // Submit Story Form
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span>Share Your Story</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Story Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                      placeholder="Give your story a meaningful title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Your Story *</label>
                    <Textarea
                      value={formData.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      className="min-h-[150px] focus:ring-saffron-500"
                      placeholder="Tell us about your experience, tradition, memory, or any story that connects you to India's rich heritage..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <input
                        type="text"
                        value={formData.author}
                        onChange={(e) => setFormData({...formData, author: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        placeholder="How should we credit you?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Location</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                        placeholder="City, State (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-saffron-500"
                    >
                      <option value="personal">Personal Experience</option>
                      <option value="tradition">Tradition & Customs</option>
                      <option value="craft">Arts & Crafts</option>
                      <option value="festival">Festivals & Celebrations</option>
                      <option value="nature">Nature & Places</option>
                    </select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-saffron-500 to-emerald-500 hover:from-saffron-600 hover:to-emerald-600"
                  >
                    Share My Story
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        ) : (
          // Stories Display
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gradient mb-4">Community Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover heartwarming stories, traditions, and experiences from across India. 
                Each story is a thread in the rich tapestry of our cultural heritage.
              </p>
            </div>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {stories.map((story) => (
                <Card key={story.id} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{story.author}</span>
                          </div>
                          {story.location && (
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{story.location}</span>
                            </div>
                          )}
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(story.date).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(story.category)}`}>
                        {story.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed mb-4">{story.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                          <Heart className="h-4 w-4 mr-1" />
                          {story.likes}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button 
                onClick={() => setShowSubmitForm(true)}
                className="bg-gradient-to-r from-saffron-500 to-emerald-500 hover:from-saffron-600 hover:to-emerald-600"
              >
                Share Your Story
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stories;
