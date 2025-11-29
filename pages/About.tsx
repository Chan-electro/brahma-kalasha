import React from 'react';
import { Reveal } from '../components/motion/Reveal';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl font-serif text-primary mb-6">For us, the kitchen is a sanctum.</h1>
            <p className="text-lg text-text-muted leading-relaxed">
              Brahma Kalasha was born from a simple idea: if feeding is sacred, then every meal – from daily office lunches to grand celebrations – deserves ritual-level care.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mb-24 items-center">
           <Reveal>
             <img src="https://picsum.photos/600/800?random=20" alt="Kitchen" className="rounded-2xl shadow-xl w-full" />
           </Reveal>
           <div className="space-y-8">
             <Reveal delay={0.2}>
               <h2 className="text-3xl font-serif text-primary">Why the Kalasha?</h2>
               <p className="text-text-muted">
                 In rituals, the Kalasha holds water, grains, and leaves – the elements of life and prosperity. Our Kalasha stands for the same promise: abundance, purity, and auspicious beginnings. Every service we deliver is an offering from this sacred vessel.
               </p>
             </Reveal>
             <Reveal delay={0.3}>
               <h2 className="text-3xl font-serif text-primary">A Kitchen of Discipline</h2>
               <p className="text-text-muted">
                 Our chefs come from diverse regions and culinary schools, but share one belief – food tastes different when it's cooked with intention. From mise en place to plating, our kitchen runs on documented SOPs, regular training, and a shared respect for the guest's plate.
               </p>
             </Reveal>
           </div>
        </div>
        
        {/* Stats */}
        <div className="bg-primary rounded-3xl p-12 text-center text-white">
          <div className="grid md:grid-cols-3 gap-8 divide-x divide-white/20">
            <div>
              <div className="text-4xl font-serif font-bold text-secondary mb-2">50+</div>
              <div className="text-sm opacity-70 uppercase tracking-widest">Corporate Partners</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-secondary mb-2">200k+</div>
              <div className="text-sm opacity-70 uppercase tracking-widest">Plates Served</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-secondary mb-2">4.8</div>
              <div className="text-sm opacity-70 uppercase tracking-widest">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;