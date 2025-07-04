import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Users, ChefHat, Play, Lightbulb, Heart } from 'lucide-react';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Dish {
  id: number;
  name: string;
  image: string;
  region: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  videoId: string;
  nutrition: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  cookingTips: string[];
}

interface RecipeModalProps {
  dish: Dish;
  onClose: () => void;
}

const RecipeModal = ({ dish, onClose }: RecipeModalProps) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <img
              src={`https://images.unsplash.com/${dish.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80`}
              alt={dish.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
            >
              <X size={20} />
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-4xl font-bold mb-2">{dish.name}</h2>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  {dish.cookTime}
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  {dish.servings} servings
                </div>
                <div className="flex items-center gap-1">
                  <ChefHat size={16} />
                  {dish.difficulty}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {dish.description}
            </p>

            {/* Tabs for different sections */}
            <Tabs defaultValue="recipe" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="recipe">Recipe</TabsTrigger>
                <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
                <TabsTrigger value="tips">Cooking Tips</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
              </TabsList>

              {/* Recipe Tab */}
              <TabsContent value="recipe" className="mt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Ingredients */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Ingredients</h3>
                    <ul className="space-y-2">
                      {dish.ingredients.map((ingredient, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-2 text-gray-700"
                        >
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          {ingredient}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Instructions */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Instructions</h3>
                    <ol className="space-y-4">
                      {dish.instructions.map((instruction, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex gap-4 text-gray-700"
                        >
                          <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                            {index + 1}
                          </span>
                          <p className="leading-relaxed">{instruction}</p>
                        </motion.li>
                      ))}
                    </ol>
                  </div>
                </div>
              </TabsContent>

              {/* Nutrition Tab */}
              <TabsContent value="nutrition" className="mt-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="text-green-600" size={24} />
                    <h3 className="text-2xl font-bold text-gray-800">Nutritional Information</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600">{dish.nutrition.calories}</div>
                      <div className="text-gray-600">Calories</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{dish.nutrition.protein}</div>
                      <div className="text-gray-600">Protein</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{dish.nutrition.carbs}</div>
                      <div className="text-gray-600">Carbs</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">{dish.nutrition.fat}</div>
                      <div className="text-gray-600">Fat</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* Cooking Tips Tab */}
              <TabsContent value="tips" className="mt-6">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="text-amber-600" size={24} />
                    <h3 className="text-2xl font-bold text-gray-800">Pro Cooking Tips</h3>
                  </div>
                  <ul className="space-y-3">
                    {dish.cookingTips.map((tip, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <span className="w-6 h-6 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <p className="leading-relaxed">{tip}</p>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              {/* Video Tab */}
              <TabsContent value="video" className="mt-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Cooking Video</h3>
                  {!showVideo ? (
                    <div className="relative bg-gray-100 rounded-xl h-64 flex items-center justify-center cursor-pointer group"
                         onClick={() => setShowVideo(true)}>
                      <div className="bg-red-600 rounded-full p-4 group-hover:bg-red-700 transition-colors">
                        <Play size={32} className="text-white ml-1" />
                      </div>
                      <div className="absolute inset-0 bg-black/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  ) : (
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${dish.videoId}?autoplay=1`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RecipeModal;