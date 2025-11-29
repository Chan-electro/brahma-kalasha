import { MenuItem, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Grand South Indian Thali',
    description: 'A traditional spread with 12 items including sambar, rasam, kootu, poriyal, rice, chapati, and payasam on a banana leaf.',
    price: 450,
    image: 'https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=800',
    category: 'main',
    tags: ['restaurant', 'lunch'],
    diet: 'veg',
    spiceLevel: 'medium'
  },
  {
    id: '2',
    name: 'Ghee Roast Masala Dosa',
    description: 'Crispy fermented crepe roasted in pure ghee, filled with spiced potato masala, served with coconut chutney and sambar.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1589301760557-cd28b27885a6?auto=format&fit=crop&q=80&w=800',
    category: 'main',
    tags: ['restaurant', 'breakfast', 'dinner'],
    diet: 'veg',
    spiceLevel: 'medium'
  },
  {
    id: '3',
    name: 'Mutton Chukka Varuval',
    description: 'Spicy dry roasted mutton tossed with curry leaves, crushed pepper, and shallots. A Chettinad specialty.',
    price: 420,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=800',
    category: 'starter',
    tags: ['restaurant', 'starter'],
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },
  {
    id: '4',
    name: 'Filter Coffee Panna Cotta',
    description: 'A fusion dessert combining traditional Kumbakonam filter coffee with silky Italian panna cotta.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1515442261605-65987783cb6a?auto=format&fit=crop&q=80&w=800',
    category: 'dessert',
    tags: ['restaurant', 'sweet'],
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: '5',
    name: 'Corporate Box: Curd Rice & Sides',
    description: 'Creamy curd rice served with spicy mango pickle, fried mor milagai, and potato roast.',
    price: 150,
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=800',
    category: 'main',
    tags: ['catering', 'lunch'],
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: '6',
    name: 'Chicken Chettinad Biryani',
    description: 'Seeraga samba rice cooked with aromatic Chettinad spices and tender chicken pieces.',
    price: 380,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    category: 'main',
    tags: ['restaurant', 'cloud-kitchen'],
    diet: 'non-veg',
    spiceLevel: 'spicy'
  },
  {
    id: '7',
    name: 'Medu Vada (2 pcs)',
    description: 'Crispy lentil doughnuts, fluffy on the inside, served with sambar and chutney.',
    price: 90,
    image: 'https://images.unsplash.com/photo-1630395822970-201552192cb9?auto=format&fit=crop&q=80&w=800',
    category: 'starter',
    tags: ['breakfast', 'snack'],
    diet: 'veg',
    spiceLevel: 'mild'
  },
  {
    id: '8',
    name: 'Mysore Pak',
    description: 'Melt-in-your-mouth sweet made with gram flour, plenty of ghee, and sugar.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1569388330292-7a6a8411a233?auto=format&fit=crop&q=80&w=800',
    category: 'dessert',
    tags: ['sweet'],
    diet: 'veg',
    spiceLevel: 'mild'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Anjali Menon',
    role: 'HR Manager',
    company: 'TechFlow Systems',
    quote: 'Brahma Kalasha has transformed our office lunches. The team actually looks forward to the meal now.'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    role: 'Event Host',
    quote: 'The wedding catering was divine. Every guest praised the authenticity of the flavors.'
  },
  {
    id: '3',
    name: 'Sarah Jenkins',
    role: 'Frequent Diner',
    quote: 'A sanctuary of taste in the middle of Bangalore. The ambiance is as good as the food.'
  }
];