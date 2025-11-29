import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../constants';
import { Reveal } from '../components/motion/Reveal';
import Button from '../components/ui/Button';
import { Filter, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filterDiet, setFilterDiet] = useState<string>('all');
  const { addToCart } = useCart();

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const catMatch = activeCategory === 'all' || item.category === activeCategory;
      const dietMatch = filterDiet === 'all' || item.diet === filterDiet;
      return catMatch && dietMatch;
    });
  }, [activeCategory, filterDiet]);

  const categories = ['all', 'starter', 'main', 'dessert'];

  return (
    <div className="pt-24 pb-20 min-h-screen bg-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <Reveal>
            <h1 className="text-4xl font-serif text-primary mb-2">South Indian Specialties</h1>
            <p className="text-text-muted">Authentic flavors from the southern kitchens.</p>
          </Reveal>
          
          <Reveal delay={0.1}>
            <div className="flex gap-4 mt-6 md:mt-0 items-center bg-white px-4 py-2 rounded-full shadow-sm">
              <Filter size={16} className="text-secondary" />
              <div className="flex gap-2">
                <button 
                  onClick={() => setFilterDiet('all')}
                  className={`text-sm px-3 py-1 rounded-full transition-colors ${filterDiet === 'all' ? 'bg-primary text-white' : 'hover:bg-bg-alt'}`}
                >All</button>
                <button 
                  onClick={() => setFilterDiet('veg')}
                  className={`text-sm px-3 py-1 rounded-full transition-colors ${filterDiet === 'veg' ? 'bg-green-700 text-white' : 'hover:bg-bg-alt'}`}
                >Veg</button>
                <button 
                  onClick={() => setFilterDiet('non-veg')}
                  className={`text-sm px-3 py-1 rounded-full transition-colors ${filterDiet === 'non-veg' ? 'bg-red-700 text-white' : 'hover:bg-bg-alt'}`}
                >Non-Veg</button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-8 mb-12 overflow-x-auto pb-4 border-b border-secondary/20 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-lg font-serif capitalize whitespace-nowrap transition-colors relative ${
                activeCategory === cat ? 'text-primary' : 'text-text-muted hover:text-primary'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div layoutId="underline" className="absolute -bottom-4 left-0 right-0 h-1 bg-secondary" />
              )}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
              >
                <div className="h-56 overflow-hidden relative shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold uppercase text-white shadow-md ${item.diet === 'veg' ? 'bg-green-600' : 'bg-red-600'}`}>
                      {item.diet}
                    </span>
                    {item.spiceLevel === 'spicy' && (
                       <span className="px-2 py-1 rounded text-xs font-bold uppercase text-white bg-orange-500 shadow-md">Spicy</span>
                    )}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-serif font-bold text-primary leading-tight">{item.name}</h3>
                    <span className="text-secondary font-bold whitespace-nowrap ml-2">₹{item.price}</span>
                  </div>
                  <p className="text-text-muted text-sm mb-6 line-clamp-2 flex-grow">{item.description}</p>
                  <Button fullWidth variant="secondary" className="text-sm py-2 mt-auto" onClick={() => addToCart(item)}>
                    Add to Cart
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-text-muted">
            <p>No items found for this selection.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;