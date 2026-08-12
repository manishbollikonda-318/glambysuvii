import { useState } from 'react';
import { Send, Phone, MapPin, Clock, Scissors, ShieldCheck, Heart, Camera } from 'lucide-react';

export default function InquirySection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('General Salon Inquiry');
  const [message, setMessage] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMsg = `*Glam By Suvii Salon - General Inquiry*\n` +
      `----------------------------------------\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `💇 *Topic/Service:* ${service}\n` +
      `💬 *Message:* ${message || 'No additional message provided'}\n` +
      `----------------------------------------\n` +
      `_Sent via Website Inquiry Form_`;

    const whatsappUrl = `https://wa.me/919059749977?text=${encodeURIComponent(formattedMsg)}`;
    window.open(whatsappUrl, '_blank');

    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section id="inquiry" className="py-20 bg-text-dark text-white relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/20 px-4 py-1.5 rounded-full inline-block mb-3">
            Have Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Salon Inquiry & Information
          </h2>
          <p className="text-sm text-gray-300">
            Have a custom requirement, bridal booking request, or feedback? Send us a quick message below!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry Form */}
          <div className="lg:col-span-6 bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-secondary" />
              Send Us an Inquiry
            </h3>

            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Your Full Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Priya Reddy" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-primary focus:outline-none text-white text-sm placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Phone / WhatsApp Number</label>
                <input 
                  required
                  type="tel" 
                  placeholder="+91 90597 49977" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-primary focus:outline-none text-white text-sm placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Inquiry Category</label>
                <select 
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-primary focus:outline-none text-white text-sm"
                >
                  <option value="General Salon Inquiry" className="text-text-dark">General Salon Inquiry</option>
                  <option value="Bridal / Event Makeup Package" className="text-text-dark">Bridal / Event Makeup Package</option>
                  <option value="Hair Spa & Chemical Treatments" className="text-text-dark">Hair Spa & Chemical Treatments</option>
                  <option value="Career & Stylist Hiring" className="text-text-dark">Career & Stylist Hiring</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Message (Optional)</label>
                <textarea 
                  rows={3}
                  placeholder="Write your questions or special requests here..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 focus:border-primary focus:outline-none text-white text-sm placeholder-gray-400"
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-hover text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-secondary/25 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                Submit Inquiry via WhatsApp
              </button>
            </form>
          </div>

          {/* Salon Details Slide */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                <Scissors className="w-4 h-4" />
                About Glam By Suvii
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Tellapur's Favorite Unisex Beauty Destination
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Glam By Suvii Unisex Salon brings world-class hair styling, skin therapies, manicures, and bridal makeover services under one roof. Designed with a clean, hygienic environment and top-tier products for your total satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <MapPin className="w-5 h-5 text-primary mb-2" />
                <h4 className="font-bold text-sm text-white mb-1">Address</h4>
                <p className="text-xs text-gray-300">Tellapur Main Rd, Hyderabad, Telangana 502032</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Phone className="w-5 h-5 text-secondary mb-2" />
                <h4 className="font-bold text-sm text-white mb-1">Call / WhatsApp</h4>
                <p className="text-xs text-gray-300">+91 90597 49977</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Clock className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="font-bold text-sm text-white mb-1">Opening Hours</h4>
                <p className="text-xs text-gray-300">Mon - Sun: 9:00 AM – 9:00 PM</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Camera className="w-5 h-5 text-pink-400 mb-2" />
                <h4 className="font-bold text-sm text-white mb-1">Instagram</h4>
                <p className="text-xs text-gray-300">@glam_unisexsalon_</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
              <p className="text-xs text-gray-300">
                <span className="font-bold text-white">DPDP Act 2023 Compliant:</span> Your phone number and details are strictly protected and never shared with third parties.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Footer Line */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Glam By Suvii Unisex Salon. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" />
            <span>for Tellapur, Hyderabad</span>
          </div>
        </div>

      </div>
    </section>
  );
}
