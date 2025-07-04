import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import DishCard from './DishCard';
import RecipeModal from './RecipeModal';
import SearchAndFilter from './SearchAndFilter';
import { dishes } from './dishes';
import './QuisineCorner.css';

const QuisineCorner = () => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    difficulty: ''
  });

  // Get unique regions and difficulties for filter options
  const regions = useMemo(() => 
    [...new Set(dishes.map(dish => dish.region))].sort(), []);
  const difficulties = useMemo(() => 
    [...new Set(dishes.map(dish => dish.difficulty))].sort(), []);

  // Filter dishes based on search and filters
  const filteredDishes = useMemo(() => {
    return dishes.filter(dish => {
      const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dish.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           dish.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesRegion = !filters.region || dish.region === filters.region;
      const matchesDifficulty = !filters.difficulty || dish.difficulty === filters.difficulty;
      
      return matchesSearch && matchesRegion && matchesDifficulty;
    });
  }, [searchQuery, filters]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterByRegion = (region: string) => {
    setFilters(prev => ({
      ...prev,
      region: prev.region === region ? '' : region
    }));
  };

  const handleFilterByDifficulty = (difficulty: string) => {
    setFilters(prev => ({
      ...prev,
      difficulty: prev.difficulty === difficulty ? '' : difficulty
    }));
  };

  const handleClearFilters = () => {
    setFilters({ region: '', difficulty: '' });
    setSearchQuery('');
  };

  return (
    <div className="quisine-corner">
      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="quisine-header"
      >
        {/* Background decorative elements */}
        <div className="quisine-bg-decorations">
          <div className="quisine-bg-element quisine-bg-element-1"></div>
          <div className="quisine-bg-element quisine-bg-element-2"></div>
        </div>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="quisine-title-container"
        >
          <h1 className="quisine-main-title">
            <span className="quisine-title-line-1">
              Flavours
            </span>
            <br />
            <span className="quisine-title-line-2">
              of India
            </span>
          </h1>
          
          {/* Decorative spice elements */}
          <div className="quisine-spice-decorations">
            <div className="quisine-spice quisine-spice-1"></div>
            <div className="quisine-spice quisine-spice-2"></div>
            <div className="quisine-spice quisine-spice-3"></div>
            <div className="quisine-spice quisine-spice-4"></div>
            <div className="quisine-spice quisine-spice-5"></div>
          </div>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="quisine-description"
        >
          <span className="quisine-description-main">
            Embark on a <span className="quisine-highlight-orange">culinary journey</span> through the 
            <span className="quisine-highlight-red"> vibrant tapestry</span> of Indian cuisine
          </span>
          <span className="quisine-description-sub">
            Discover authentic recipes, stunning visuals, and step-by-step cooking videos 
            from every corner of incredible India ✨
          </span>
        </motion.p>
        
        {/* Search and Filter Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SearchAndFilter
            onSearch={handleSearch}
            onFilterByRegion={handleFilterByRegion}
            onFilterByDifficulty={handleFilterByDifficulty}
            onClearFilters={handleClearFilters}
            regions={regions}
            difficulties={difficulties}
            activeFilters={filters}
          />
        </motion.div>
        
        {/* Results Counter */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="quisine-results-counter"
        >
          Showing <span className="quisine-counter-highlight-orange">{filteredDishes.length}</span> of <span className="quisine-counter-highlight-red">{dishes.length}</span> delicious dishes
        </motion.p>
      </motion.header>

      {/* Dishes Grid */}
      <div className="quisine-content">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="quisine-dishes-grid"
        >
          {filteredDishes.map((dish, index) => (
            <DishCard
              key={dish.id}
              dish={dish}
              index={index}
              onClick={() => setSelectedDish(dish)}
            />
          ))}
        </motion.div>
        
        {/* No Results Message */}
        {filteredDishes.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="quisine-no-results"
          >
            <h3 className="quisine-no-results-title">No dishes found</h3>
            <p className="quisine-no-results-text">Try adjusting your search or filters</p>
          </motion.div>
        )}
      </div>

      {/* Recipe Modal */}
      {selectedDish && (
        <RecipeModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}
    </div>
  );
};

export default QuisineCorner;