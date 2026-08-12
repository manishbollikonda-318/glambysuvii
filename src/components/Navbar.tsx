import { useState } from 'react';
import { Menu, X, Scissors, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Branding */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="bg-primary/15 p-2 rounded-xl group-hover:bg-primary/25 transition-colors">
              <Scissors className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-lg sm:text-xl text-text-dark tracking-tight leading-none">
                Glam By Suvii
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-0.5">
                Unisex Salon
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-7">
            <a href="#services" className="text-text-muted hover:text-primary transition-colors text-sm font-semibold">Services</a>
            <a href="#portfolio" className="text-text-muted hover:text-primary transition-colors text-sm font-semibold">Portfolio</a>
            <a href="#booking" className="text-text-muted hover:text-primary transition-colors text-sm font-semibold">Book Slot</a>
            <a href="#location" className="text-text-muted hover:text-primary transition-colors text-sm font-semibold">Location</a>
            <a href="#inquiry" className="text-text-muted hover:text-primary transition-colors text-sm font-semibold">Inquiry</a>
            
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-primary/20 cursor-pointer"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book Appointment
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden gap-2">
            <a 
              href="tel:+919059749977" 
              className="p-2.5 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
              aria-label="Call Salon"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary transition-colors p-2 rounded-xl"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 text-center">
              <a href="#services" className="block px-4 py-3 text-sm font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-xl" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#portfolio" className="block px-4 py-3 text-sm font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-xl" onClick={() => setIsOpen(false)}>Portfolio</a>
              <a href="#booking" className="block px-4 py-3 text-sm font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-xl" onClick={() => setIsOpen(false)}>Book Slot</a>
              <a href="#location" className="block px-4 py-3 text-sm font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-xl" onClick={() => setIsOpen(false)}>Location & Hours</a>
              <a href="#inquiry" className="block px-4 py-3 text-sm font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-xl" onClick={() => setIsOpen(false)}>Inquiry & Contact</a>
              
              <div className="pt-3">
                <button 
                  className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-md"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
