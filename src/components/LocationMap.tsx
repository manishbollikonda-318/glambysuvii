import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export default function LocationMap() {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-white via-background-pink/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Find Us Easily
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight mb-3">
            Salon Location & Hours
          </h2>
          <p className="text-sm text-text-muted">
            Visit us at our conveniently accessible unisex salon in Tellapur, Hyderabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-4 sm:p-8 shadow-xl shadow-primary/10 border border-secondary/15">
          
          {/* Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-background-pink/50 border border-secondary/10">
              <div className="p-3 bg-secondary/15 text-secondary rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-dark text-base mb-1">Glam By Suvii Unisex Salon</h4>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Tellapur Main Road, Near Citizens Hospital Circle,<br />
                  Tellapur, Hyderabad, Telangana 502032
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-background-lime/50 border border-primary/10">
              <div className="p-3 bg-primary/15 text-primary rounded-xl shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-dark text-base mb-1">Operating Hours</h4>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
                  Monday – Sunday: <span className="font-semibold text-text-dark">9:00 AM – 9:00 PM</span><br />
                  Open all 7 days for your convenience.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-text-dark text-base mb-1">Direct Contact</h4>
                <p className="text-xs sm:text-sm text-text-muted">
                  Phone / WhatsApp: <a href="tel:+919059749977" className="font-bold text-primary hover:underline">+91 90597 49977</a>
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Tellapur+Main+Road+Hyderabad+Glam+By+Suvii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-hover text-white py-3.5 px-6 rounded-2xl font-bold transition-all shadow-md shadow-primary/20 text-sm cursor-pointer"
            >
              <Navigation className="w-4 h-4" />
              Get Directions on Google Maps
            </a>
          </div>

          {/* Embedded Interactive Google Map */}
          <div className="lg:col-span-7 h-[350px] sm:h-[420px] rounded-2xl overflow-hidden shadow-inner border border-gray-200 relative">
            <iframe
              title="Glam By Suvii Salon Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.330752174307!2d78.2721865!3d17.4725514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b95c32ab5d%3A0x8bbef131f4e5a95f!2sTellapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
