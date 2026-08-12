import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X, Calendar as CalendarIcon, User, Phone, CheckCircle2 } from 'lucide-react';

export default function AppointmentBooking() {
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [selectedService, setSelectedService] = useState('Hair Styling & Cut');
  const [consentGiven, setConsentGiven] = useState(false);

  const handleDateSelect = (selectInfo: any) => {
    setSelectedSlot(selectInfo);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consentGiven) {
      alert("Please check the consent box as required by DPDP Act 2023 to complete your booking.");
      return;
    }
    
    // Extract date and time
    const startDate = selectedSlot?.startStr ? selectedSlot.startStr.split('T')[0] : new Date().toISOString().split('T')[0];
    const startTime = selectedSlot?.startStr ? selectedSlot.startStr.split('T')[1]?.substring(0, 5) : '10:00';
    const resourceTitle = selectedSlot?.resource?.title || 'General Stylist';

    // Construct formatted WhatsApp message payload
    const whatsappMsg = `*Glam By Suvii Salon - Appointment Request*\n` +
      `----------------------------------------\n` +
      `👤 *Client Name:* ${clientName}\n` +
      `📞 *Phone Number:* ${clientPhone}\n` +
      `💇 *Service / Specialist:* ${selectedService} (${resourceTitle})\n` +
      `📅 *Date:* ${startDate}\n` +
      `⏰ *Time Slot:* ${startTime}\n` +
      `----------------------------------------\n` +
      `_Consent Provided (DPDP Act 2023 Compliance)_`;

    const whatsappUrl = `https://wa.me/919059749977?text=${encodeURIComponent(whatsappMsg)}`;

    // Trigger WhatsApp Redirection directly
    window.open(whatsappUrl, '_blank');

    // Reset Form
    setSelectedSlot(null);
    setClientName('');
    setClientPhone('');
    setConsentGiven(false);
  };

  return (
    <section id="booking" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 px-4 py-1.5 rounded-full inline-block mb-3">
            Real-Time Slot Booking
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight mb-3">
            Choose Stylist & Time
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Tap any available slot below to pick your preferred stylist and time. Your details will be sent directly to our WhatsApp for instant booking confirmation.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-primary/10 border border-secondary/15 p-3 sm:p-6 overflow-hidden">
          <FullCalendar
            schedulerLicenseKey="CC-Attribution-NonCommercial"
            plugins={[resourceTimeGridPlugin as any, interactionPlugin as any]}
            initialView="resourceTimeGridDay"
            // @ts-ignore
            resources={[
              { id: 'a', title: 'Stylist Suvii (Hair & Makeup)' },
              { id: 'b', title: 'Senior Stylist (Hair Cut)' },
              { id: 'c', title: 'Spa & Facial Specialist' }
            ]}
            slotMinTime="09:00:00"
            slotMaxTime="20:00:00"
            allDaySlot={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            select={handleDateSelect}
            height="520px"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'resourceTimeGridDay'
            }}
            eventColor="#76C47A"
          />
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {selectedSlot && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-secondary/20"
            >
              <button 
                onClick={() => setSelectedSlot(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                  <CalendarIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark">Confirm Booking</h3>
                  <p className="text-xs text-text-muted">
                    {selectedSlot.startStr?.split('T')[0]} at {selectedSlot.startStr?.split('T')[1]?.substring(0,5)}
                  </p>
                </div>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-text-dark mb-1">Select Service</label>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-sm bg-gray-50/50"
                  >
                    <option value="Haircut & Styling">Haircut & Styling</option>
                    <option value="Hair Coloring / Highlights">Hair Coloring / Highlights</option>
                    <option value="Bridal / Party Makeup">Bridal / Party Makeup</option>
                    <option value="Facial & Organic Glow">Facial & Organic Glow</option>
                    <option value="Foot Spa & Pedicure">Foot Spa & Pedicure</option>
                    <option value="Beard Grooming">Beard Grooming</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-dark mb-1">Your Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input 
                      required 
                      type="text" 
                      placeholder="e.g. Ananya Sharma" 
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-sm" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-text-dark mb-1">WhatsApp Phone Number</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input 
                      required 
                      type="tel" 
                      placeholder="+91 98765 43210" 
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:outline-none text-sm" 
                    />
                  </div>
                </div>
                
                {/* DPDP Act 2023 Consent Section */}
                <div className="pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-xs font-bold text-text-dark">DPDP Act 2023 Privacy Notice</span>
                  </div>
                  
                  <label className="flex items-start gap-2.5 cursor-pointer mb-2">
                    <input 
                      type="checkbox" 
                      required
                      checked={consentGiven}
                      onChange={(e) => setConsentGiven(e.target.checked)}
                      className="mt-0.5 shrink-0 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                    />
                    <span className="text-[11px] text-text-muted leading-tight">
                      I consent to sharing my booking details with Glam By Suvii Salon via WhatsApp for appointment confirmation.
                    </span>
                  </label>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 rounded-xl font-bold transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 cursor-pointer mt-2 text-sm"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  Send Booking via WhatsApp
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
