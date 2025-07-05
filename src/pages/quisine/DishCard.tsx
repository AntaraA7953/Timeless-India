import { motion } from 'framer-motion';
import { Clock, Users, ChefHat } from 'lucide-react';

interface Dish {
  id: number;
  name: string;
  image: string;
  region: string;
  cookTime: string;
  servings: number;
  difficulty: string;
  description: string;
}

interface DishCardProps {
  dish: Dish;
  index: number;
  onClick: () => void;
}

const DishCard = ({ dish, index, onClick }: DishCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img
          src={`https://images.unsplash.com/${dish.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
          alt={dish.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {dish.region}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
          {dish.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {dish.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
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
    </motion.div>
  );
};

export default DishCard;