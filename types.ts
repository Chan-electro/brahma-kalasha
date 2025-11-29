export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'starter' | 'main' | 'dessert' | 'beverage';
  tags: string[];
  diet: 'veg' | 'non-veg';
  spiceLevel: 'mild' | 'medium' | 'spicy';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Booking {
  id: string;
  date: string;
  eventType: string;
  status: 'pending' | 'confirmed' | 'completed';
  headcount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  company?: string;
}

export interface Stat {
  label: string;
  value: string;
  trend?: string;
}