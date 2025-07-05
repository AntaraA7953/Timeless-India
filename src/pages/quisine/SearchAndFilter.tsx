import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchAndFilterProps {
  onSearch: (query: string) => void;
  onFilterByRegion: (region: string) => void;
  onFilterByDifficulty: (difficulty: string) => void;
  onClearFilters: () => void;
  regions: string[];
  difficulties: string[];
  activeFilters: {
    region: string;
    difficulty: string;
  };
}

const SearchAndFilter = ({
  onSearch,
  onFilterByRegion,
  onFilterByDifficulty,
  onClearFilters,
  regions,
  difficulties,
  activeFilters
}: SearchAndFilterProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const hasActiveFilters = activeFilters.region || activeFilters.difficulty;

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          placeholder="Search dishes..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="pl-10 pr-4 py-3 text-lg rounded-full border-2 border-orange-200 focus:border-orange-500 transition-colors"
        />
      </div>

      {/* Filter Toggle */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => setShowFilters(!showFilters)}
          variant="outline"
          className="rounded-full border-orange-300 text-orange-600 hover:bg-orange-50"
        >
          <Filter size={16} className="mr-2" />
          Filters
        </Button>
        
        {hasActiveFilters && (
          <Button
            onClick={onClearFilters}
            variant="outline"
            className="rounded-full border-red-300 text-red-600 hover:bg-red-50"
          >
            <X size={16} className="mr-2" />
            Clear Filters
          </Button>
        )}
      </div>

      {/* Filter Options */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* Region Filter */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Filter by Region</h3>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <Button
                      key={region}
                      onClick={() => onFilterByRegion(region)}
                      variant={activeFilters.region === region ? "default" : "outline"}
                      size="sm"
                      className="rounded-full"
                    >
                      {region}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Filter by Difficulty</h3>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty}
                      onClick={() => onFilterByDifficulty(difficulty)}
                      variant={activeFilters.difficulty === difficulty ? "default" : "outline"}
                      size="sm"
                      className="rounded-full"
                    >
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchAndFilter;