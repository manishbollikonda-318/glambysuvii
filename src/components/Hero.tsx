import { motion } from 'framer-motion';
import { Phone, ArrowRight, Sparkles, Scissors, Star, MapPin } from 'lucide-react';

export default function Hero() {
  const handleCall = async () => {
    try {
      await fetch('/api/call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phoneNumber: '+919059749977' })
      });
      alert('Connecting your call to Glam By Suvii (+91 9059749977)...');
    } catch (e) {
      console.error(e);
      window.location.href = 'tel:+919059749977';
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      
      {/* Hero Background Image: unnamed-2.jpg */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/unnamed-2.jpg" 
          alt="Glam By Suvii Salon Interior Background"
          className="w-full h-full object-cover object-center scale-105 transform filter brightness-90"
        />
        {/* Sleek Dark & Translucent Blush Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-text-dark/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-radial from-secondary/20 via-transparent to-transparent opacity-60 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          
          {/* Prominent, Large Salon Business Branding */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-xl mx-auto mb-6 p-4 sm:p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <Scissors className="w-7 h-7 sm:w-9 sm:h-9 text-primary animate-pulse" />
              <div className="flex items-center gap-1 bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full text-xs font-extrabold border border-amber-400/30">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>4.9 Rated Salon</span>
              </div>
            </div>
            
            {/* BIG BOLD BRANDING TITLE FOR MOBILE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              GLAM BY SUVII
            </h1>
            <div className="text-sm sm:text-lg font-bold tracking-[0.25em] uppercase text-secondary mt-1">
              UNISEX SALON
            </div>
            <div className="flex items-center justify-center gap-1.5 text-xs sm:text-sm text-gray-200 mt-2 font-medium">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Tellapur Main Road, Hyderabad</span>
            </div>
          </motion.div>
          
          {/* Headline Slogan */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug mb-4"
          >
            Elevate Your <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-emerald-300 to-secondary">
              Everyday Glamour
            </span>
          </motion.h2>
          
          {/* Subheading text */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto px-2"
          >
            Step into Tellapur's premier luxury salon. From precision haircuts & beard styling to HD bridal makeovers and organic facial glow treatments.
          </motion.p>
          
          {/* Action Buttons Centered & Symmetric */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-xl shadow-primary/30 cursor-pointer"
            >
              <Sparkles className="w-5 h-5" />
              Book Appointment Slot
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCall}
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-base transition-all backdrop-blur-md shadow-lg cursor-pointer"
            >
              <Phone className="w-5 h-5 text-secondary" />
              Call +91 90597 49977
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
