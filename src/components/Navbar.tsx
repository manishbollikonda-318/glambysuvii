import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle smooth scroll with navbar offset
  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'portfolio', 'booking', 'location', 'inquiry'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-md border-b border-secondary/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Authentic Storefront Logo Image (unnamed-3.jpg) & Branding */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-3 text-left group cursor-pointer"
            aria-label="Glam By Suvii Home"
          >
            {/* Real Salon Logo Image */}
            <div className="relative h-12 w-auto overflow-hidden rounded-xl bg-white p-1 border border-secondary/20 shadow-sm group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/unnamed-3.jpg" 
                alt="Glam By Suvii Unisex Salon Logo"
                className="h-full w-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl text-text-dark tracking-tight leading-none group-hover:text-primary transition-colors">
                Glam By Suvii
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary mt-0.5 flex items-center gap-1">
                Unisex Salon <span className="w-1 h-1 rounded-full bg-primary" /> Tellapur
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('services')} 
              className={`text-sm font-semibold transition-colors cursor-pointer px-2 py-1 ${activeSection === 'services' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className={`text-sm font-semibold transition-colors cursor-pointer px-2 py-1 ${activeSection === 'portfolio' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'}`}
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('booking')} 
              className={`text-sm font-semibold transition-colors cursor-pointer px-2 py-1 ${activeSection === 'booking' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'}`}
            >
              Book Slot
            </button>
            <button 
              onClick={() => scrollToSection('location')} 
              className={`text-sm font-semibold transition-colors cursor-pointer px-2 py-1 ${activeSection === 'location' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'}`}
            >
              Location
            </button>
            <button 
              onClick={() => scrollToSection('inquiry')} 
              className={`text-sm font-semibold transition-colors cursor-pointer px-2 py-1 ${activeSection === 'inquiry' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-primary'}`}
            >
              Inquiry
            </button>
            
            <motion.button 
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-primary/25 flex items-center gap-2 cursor-pointer ml-2"
              onClick={() => scrollToSection('booking')}
            >
              <Sparkles className="w-4 h-4" />
              Book Appointment
            </motion.button>
          </div>

          {/* Mobile Action & Menu Controls */}
          <div className="flex items-center md:hidden gap-2">
            <a 
              href="tel:+919059749977" 
              className="p-2.5 rounded-full bg-secondary/15 text-secondary hover:bg-secondary/25 transition-colors border border-secondary/20"
              aria-label="Call Salon"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-dark hover:text-primary transition-colors p-2.5 rounded-2xl bg-gray-50 border border-gray-200 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-text-dark" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/98 backdrop-blur-lg border-t border-gray-100 shadow-2xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2 text-center">
              <button 
                onClick={() => scrollToSection('services')} 
                className="w-full text-center px-4 py-3.5 text-base font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-2xl transition-all cursor-pointer"
              >
                Services & Pricing
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="w-full text-center px-4 py-3.5 text-base font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-2xl transition-all cursor-pointer"
              >
                Recent Salon Work
              </button>
              <button 
                onClick={() => scrollToSection('booking')} 
                className="w-full text-center px-4 py-3.5 text-base font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-2xl transition-all cursor-pointer"
              >
                Book Appointment Slot
              </button>
              <button 
                onClick={() => scrollToSection('location')} 
                className="w-full text-center px-4 py-3.5 text-base font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-2xl transition-all cursor-pointer"
              >
                Salon Location & Hours
              </button>
              <button 
                onClick={() => scrollToSection('inquiry')} 
                className="w-full text-center px-4 py-3.5 text-base font-bold text-text-dark hover:bg-background-lime hover:text-primary rounded-2xl transition-all cursor-pointer"
              >
                Inquiry & Contact Form
              </button>
              
              <div className="pt-3">
                <button 
                  className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-4 rounded-2xl font-extrabold text-base shadow-lg shadow-primary/30 flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => scrollToSection('booking')}
                >
                  <Sparkles className="w-5 h-5" />
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
