import { motion } from 'framer-motion';
import { Scissors, Sparkles, Smile, Droplets, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'hair',
    title: 'Haircuts & Styling',
    description: 'Precision cuts, hair coloring, keratin treatments, and custom styling for men, women & kids.',
    icon: Scissors,
  },
  {
    id: 'makeup',
    title: 'Bridal & Party Makeup',
    description: 'HD bridal makeup, engagement styling, and party glam tailored to highlight your best features.',
    icon: Sparkles,
  },
  {
    id: 'facial',
    title: 'Facial & Skin Care',
    description: 'Organic glow facials, skin brightening, de-tan treatments, and deep cleansing care.',
    icon: Droplets,
  },
  {
    id: 'spa',
    title: 'Foot Spa & Pedicure',
    description: 'Relaxing foot massages, luxury pedicures, manicures, and stress-relieving spa care.',
    icon: Smile,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Our Salon Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight mb-4">
            Unisex Hair & Beauty Care
          </h2>
          <p className="text-base text-text-muted leading-relaxed">
            High-end styling and rejuvenating treatments crafted for comfort, hygiene, and perfection in Tellapur.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gradient-to-b from-background-pink/40 to-background-lime/30 p-6 sm:p-8 rounded-3xl border border-secondary/15 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex flex-col items-center text-center sm:items-start sm:text-left group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary shrink-0">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-2.5">{service.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {service.description}
              </p>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-primary-hover transition-colors"
              >
                <span>Book Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
