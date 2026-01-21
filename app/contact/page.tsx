"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Βεβαιώσου ότι έχεις Footer
import Reveal from "@/components/Reveal";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    if (!form.current) return;

    // Τα δικά σου κλειδιά (τα κράτησα ίδια)
    const SERVICE_ID = "service_te6x5kf"; 
    const TEMPLATE_ID = "template_ijeg768";
    const PUBLIC_KEY = "Cs5la_p5o9EuGW4qH";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          setLoading(false);
          form.current?.reset(); 
        },
        (error) => {
          console.error("FAILED...", error.text);
          setError(true);
          setLoading(false);
        }
      );
  };

  return (
    <main className="min-h-screen bg-[#fafaf9]"> 
      
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* --- LEFT SIDE: INFO & MAP --- */}
          <div className="space-y-10 mt-6">
            <div>
              <Reveal>
                <h1 className="text-5xl md:text-7xl font-display text-stone-900 leading-tight pb-2">
                  Contact <br /> <span className="text-olive-700">& Booking</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-stone-600 font-sans font-medium text-lg max-w-md leading-relaxed">
                  Located in Neimporio, just a 5-minute walk from the beach and the vibrant main pedestrian street of Chora.
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal delay={0.3}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-2">Address</h3>
                  <p className="text-2xl font-serif text-stone-900 font-medium">Neimporio, Chora Andros</p>
                  <p className="text-stone-600 mb-6">84500, Cyclades, Greece</p>
                  
                  {/* ΧΑΡΤΗΣ (Ενημερωμένος για Άνδρο) */}
                  {/* ΧΑΡΤΗΣ (ΕΓΧΡΩΜΟΣ) */}
                  <div className="group w-full h-[300px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative cursor-pointer">
                    <div className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105">
                      <iframe 
                        /* Αυτό το link δείχνει κεντρικά τη Χώρα της Άνδρου */
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6296.974637651036!2d24.934255642874135!3d37.83783781534438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a30a0815c4d5%3A0x6c6e755255474665!2sChora%20of%20Andros!5e0!3m2!1sen!2sgr!4v1705912345678!5m2!1sen!2sgr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        className="w-full h-full" // ΑΦΑΙΡΕΣΑ το 'grayscale' - Τώρα είναι έγχρωμος!
                      ></iframe>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col gap-6 pt-8 border-t border-stone-300">
                  
                  {/* Phone */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-1">Phone</h3>
                    <a href="tel:+306972127884" className="text-xl font-serif text-stone-900 hover:text-olive-600 transition-colors font-medium">
                      +30 697 212 7884
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                      <h3 className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-1">Email</h3>
                    <a href="mailto:androsguesthouses@gmail.com" className="text-xl font-serif text-stone-900 hover:text-olive-600 transition-colors font-medium">
                      androsguesthouses@gmail.com
                    </a>
                  </div>

                </div>
              </Reveal>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM (ENGLISH) --- */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-stone-100 h-fit sticky top-32">
              <Reveal width="100%" delay={0.2}>
                <h3 className="text-3xl font-display text-stone-900 mb-2">Get in Touch</h3>
                <p className="text-stone-500 font-sans text-sm mb-8">We usually respond within 24 hours.</p>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Name</label>
                        <input name="user_name" required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 focus:bg-white transition-colors font-serif text-lg text-stone-900" placeholder="Your full name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Email</label>
                        <input name="user_email" required type="email" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 focus:bg-white transition-colors font-serif text-lg text-stone-900" placeholder="email@example.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Check In</label>
                          <input name="check_in" type="date" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 font-sans text-stone-600" />
                      </div>
                      <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Check Out</label>
                          <input name="check_out" type="date" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 font-sans text-stone-600" />
                      </div>
                     </div>

                     <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Message</label>
                        <textarea name="message" required rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 focus:bg-white transition-colors font-serif text-lg text-stone-900 resize-none" placeholder="Tell us about your trip or ask us anything..."></textarea>
                     </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading || success} 
                    className={`w-full py-4 rounded-lg text-sm font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 mt-4 transform
                      ${success 
                        ? "bg-stone-400 text-white cursor-default" 
                        : "bg-olive-700 text-white hover:bg-stone-900 hover:shadow-xl hover:-translate-y-1"
                      }
                      disabled:opacity-80 disabled:cursor-not-allowed
                    `}
                  >
                    {loading ? "Sending..." : success ? "Sent" : "Send Request"}
                  </button>

                  {success && <p className="text-olive-600 text-xs font-bold text-center mt-2 animate-pulse">Message received! Thank you.</p>}
                  {error && <p className="text-red-600 text-xs font-bold text-center mt-2">Error sending message. Please try again.</p>}
                </form>
              </Reveal>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}