import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChefHat, Users, Building2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { Reveal } from '../components/motion/Reveal';
import { TESTIMONIALS } from '../constants';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroTextRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // GSAP Animation for Hero Text Stagger
    if (heroTextRef.current) {
      const elements = heroTextRef.current.children;
      gsap.fromTo(elements, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 bg-bg overflow-hidden">
        {/* Decorative Circle Background */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-[#E6DCD3] rounded-bl-[200px] z-0 hidden lg:block" />

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div ref={heroTextRef} className="space-y-8">
            <h2 className="text-secondary font-medium tracking-widest uppercase text-sm">Est. 2024 • Bangalore</h2>
            <h1 className="text-5xl md:text-7xl font-serif text-primary leading-[1.1]">
              The Soul of <br />
              <span className="italic text-secondary">South India.</span>
            </h1>
            <p className="text-lg text-text-muted max-w-md leading-relaxed">
              Brahma Kalasha brings the authentic taste of Udupi, Chettinad, and coastal kitchens to your daily meals – for offices, events, and family dining.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/menu">
                <Button>Order Now</Button>
              </Link>
              <Link to="/catering">
                <Button variant="secondary">Plan Catering</Button>
              </Link>
            </div>
          </div>
          
          <Reveal>
            <div className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&q=80&w=1200"
                  alt="Traditional South Indian Thali" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements replacing 3D model */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full z-0 hidden md:block" />
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary/10 rounded-full z-0 hidden md:block" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Brand Story Strip */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 md:order-1">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&q=80&w=800" 
                    alt="Chefs making dosa" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary p-6 rounded-lg shadow-xl hidden md:block max-w-[200px]">
                  <p className="text-white font-serif text-xl italic text-center">"Every grain is a blessing."</p>
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-4xl font-serif text-primary">The Art of the South</h2>
                <p className="text-text-muted leading-relaxed">
                  South Indian cuisine is more than just Idli and Dosa. It is the aroma of roasted spices in Chettinad curries, the comforting texture of Udupi sambar, and the richness of Mysore ghee sweets. At Brahma Kalasha, we preserve these regional nuances with strict adherence to traditional recipes.
                </p>
                <Link to="/about" className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors gap-2 border-b border-primary pb-1 hover:border-secondary">
                  Our Culinary Journey <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-bg-alt/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-serif text-primary">For Every Occasion</h2>
            <p className="text-text-muted">Whatever the gathering, we bring the flavor.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Corporate Lunch", desc: "Healthy, homestyle South Indian meals for your team." },
              { icon: Users, title: "Grand Events", desc: "Live Dosa counters and Banana Leaf feasts." },
              { icon: ChefHat, title: "Restaurant & Cloud", desc: "Authentic flavors delivered to your doorstep." }
            ].map((item, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 group border-t-4 border-transparent hover:border-secondary h-full flex flex-col">
                  <item.icon className="w-10 h-10 text-secondary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-bg overflow-hidden">
        <div className="container mx-auto px-6">
           <Reveal>
            <h2 className="text-3xl font-serif text-center mb-16 text-secondary">Voices from the Table</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t, i) => (
                <motion.div 
                  key={t.id}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 p-8 rounded-xl border border-white/10 flex flex-col"
                >
                  <p className="text-lg italic mb-6 font-serif opacity-90 flex-grow">"{t.quote}"</p>
                  <div>
                    <p className="font-bold text-secondary">{t.name}</p>
                    <p className="text-xs text-white/50 uppercase tracking-wider">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
           </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-bg text-center">
        <div className="container mx-auto px-6">
          <Reveal>
            <h2 className="text-5xl font-serif text-primary mb-6">Let's plan your feast.</h2>
            <p className="text-text-muted mb-10 max-w-xl mx-auto">
              From filter coffee to full course meals, we serve it all with love.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
               <Link to="/contact"><Button>Contact Us</Button></Link>
               <Link to="/menu"><Button variant="secondary">Order Online</Button></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;