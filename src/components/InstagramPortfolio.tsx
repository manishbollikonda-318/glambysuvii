import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, ExternalLink } from 'lucide-react';

const portfolioPosts = [
  {
    url: "/unnamed-2.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    title: "Luxury Salon Ambience"
  },
  {
    url: "/unnamed.jpg",
    fallbackUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80",
    title: "Precision Haircuts & Styling"
  },
  {
    url: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=600&q=80",
    fallbackUrl: "/unnamed-2.jpg",
    title: "Organic Facials & Skincare"
  },
  {
    url: "https://images.unsplash.com/photo-1516975080661-460d3fc3c03b?auto=format&fit=crop&w=600&q=80",
    fallbackUrl: "/unnamed.jpg",
    title: "Nail Art & Luxury Spa"
  },
  {
    url: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=600&q=80",
    fallbackUrl: "/unnamed-2.jpg",
    title: "Beard Styling & Grooming"
  },
  {
    url: "https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&w=600&q=80",
    fallbackUrl: "/unnamed.jpg",
    title: "Bridal Makeover & Styling"
  }
];

export default function InstagramPortfolio() {
  const [imageSources, setImageSources] = useState(
    portfolioPosts.map((post) => post.url)
  );

  const handleImageError = (index: number) => {
    setImageSources((prev) => {
      const next = [...prev];
      // Fallback to local image or alternative fallback
      next[index] = portfolioPosts[index].fallbackUrl || "/unnamed-2.jpg";
      return next;
    });
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background-pink/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Mobile Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-4 py-1.5 rounded-full mb-3">
            <Camera className="w-4 h-4" />
            <span>@glam_unisexsalon_</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight mb-3">
            Our Latest Salon Work
          </h2>
          <p className="text-sm text-text-muted max-w-md mx-auto">
            Browse our real client transformations and styling pictures straight from our Tellapur salon.
          </p>
        </div>

        {/* Symmetric Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
          {portfolioPosts.map((post, i) => (
            <motion.a 
              key={i}
              href="https://www.instagram.com/glam_unisexsalon_/" 
              target="_blank" 
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative aspect-square overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-all duration-300 border-2 border-white bg-gray-100"
            >
              <img 
                src={imageSources[i]} 
                alt={post.title}
                onError={() => handleImageError(i)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4 text-white">
                <span className="text-xs font-bold sm:text-sm">{post.title}</span>
                <span className="text-[10px] text-gray-300 flex items-center gap-1 mt-0.5 font-medium">
                  Instagram <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Center CTA Button */}
        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/glam_unisexsalon_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-secondary/30 hover:border-secondary text-text-dark font-semibold px-6 py-3 rounded-full text-sm shadow-sm hover:shadow-md transition-all"
          >
            <Camera className="w-4 h-4 text-secondary" />
            Follow @glam_unisexsalon_ on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
