import React, { useState } from 'react';
import { Reveal } from '../components/motion/Reveal';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { CheckCircle } from 'lucide-react';

const Catering: React.FC = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-20 text-center">
        <Reveal>
          <h1 className="text-5xl font-serif text-primary mb-4">Events remembered for the food.</h1>
          <p className="text-text-muted max-w-2xl mx-auto">
            From all-hands townhalls to intimate poojas, our catering team plans, cooks, and serves with ritual-like precision.
          </p>
        </Reveal>
      </section>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* Information */}
        <div className="space-y-12">
           <Reveal>
             <h3 className="text-2xl font-serif text-primary border-b border-secondary/30 pb-4 mb-6">How It Works</h3>
             <ul className="space-y-6">
               {[
                 { title: "1. Discover & Enquire", desc: "Tell us the occasion, headcount, and preferences." },
                 { title: "2. Curate Your Menu", desc: "We suggest menus, tastings, and pairings based on your needs." },
                 { title: "3. Plan the Flow", desc: "Logistics, service staff, setup, and timing – mapped in advance." },
                 { title: "4. Serve the Experience", desc: "Our team arrives early, plates generously, and wraps up neatly." }
               ].map((item) => (
                 <li key={item.title} className="flex gap-4">
                   <CheckCircle className="text-secondary shrink-0 mt-1" size={20} />
                   <div>
                     <h4 className="font-bold text-primary">{item.title}</h4>
                     <p className="text-sm text-text-muted">{item.desc}</p>
                   </div>
                 </li>
               ))}
             </ul>
           </Reveal>
           
           <Reveal delay={0.2}>
             <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-secondary">
               <h4 className="text-lg font-bold mb-2">Transparent Pricing</h4>
               <p className="text-text-muted text-sm mb-4">
                 Our catering menus typically start from ₹450 per plate. Share your budget and we'll shape a spread that fits.
               </p>
             </div>
           </Reveal>
        </div>

        {/* Inquiry Form */}
        <Reveal delay={0.4}>
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-serif text-primary mb-6">Start your enquiry</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Event Date" type="date" required label="Date" />
                  <Input placeholder="Est. Headcount" type="number" required label="Guests" />
                </div>
                
                <Input placeholder="Full Name" required label="Name" />
                <Input placeholder="Company (Optional)" label="Company" />
                <Input placeholder="Email Address" type="email" required label="Email" />
                <Input placeholder="Phone Number" type="tel" required label="Phone" />
                
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-primary/80">Event Type</label>
                  <select className="px-4 py-3 rounded-lg border border-secondary/30 bg-white/50 focus:outline-none focus:border-primary">
                    <option>Corporate Lunch</option>
                    <option>Wedding / Reception</option>
                    <option>Social Gathering</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-primary/80">Additional Notes</label>
                  <textarea 
                    className="px-4 py-3 rounded-lg border border-secondary/30 bg-white/50 focus:outline-none focus:border-primary min-h-[100px]"
                    placeholder="Dietary restrictions, cuisine preferences..."
                  ></textarea>
                </div>

                <Button fullWidth type="submit">Request Proposal</Button>
              </form>
            ) : (
              <div className="text-center py-20">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-serif text-primary mb-2">Request Received</h3>
                <p className="text-text-muted mb-8">
                  Thank you for choosing Brahma Kalasha. Our catering curator will reach out to you within 24 hours.
                </p>
                <Button variant="secondary" onClick={() => setSubmitted(false)}>Send Another</Button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Catering;