import React from 'react';
import { Reveal } from '../components/motion/Reveal';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          
          <Reveal>
             <h1 className="text-4xl font-serif text-primary mb-6">Let's start with a conversation.</h1>
             <p className="text-text-muted mb-12">
               Whether you're planning a one-time feast or a long-term meal program, we're here to help.
             </p>
             
             <div className="space-y-8">
               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-primary mb-1">Restaurant & Kitchen</h3>
                   <p className="text-text-muted text-sm">124, 80ft Road, Indiranagar, Bangalore, KA 560038</p>
                 </div>
               </div>
               
               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                   <Phone size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-primary mb-1">Call Us</h3>
                   <p className="text-text-muted text-sm">+91 98765 43210</p>
                   <p className="text-text-muted text-sm text-xs mt-1">Mon - Sun, 10am - 10pm</p>
                 </div>
               </div>

               <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                   <Mail size={24} />
                 </div>
                 <div>
                   <h3 className="font-bold text-primary mb-1">Email Us</h3>
                   <p className="text-text-muted text-sm">namaste@brahmakalasha.com</p>
                 </div>
               </div>
             </div>
          </Reveal>

          <Reveal delay={0.2}>
            <form className="bg-white p-8 rounded-2xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-primary">Send a message</h3>
              <Input label="Name" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="Your email" />
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-primary/80">Message</label>
                <textarea 
                  className="px-4 py-3 rounded-lg border border-secondary/30 bg-white/50 focus:outline-none focus:border-primary min-h-[150px]"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <Button type="submit" fullWidth>SendMessage</Button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;