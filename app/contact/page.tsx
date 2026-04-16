"use client";

import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

declare global {
  interface Window {
    clarity?: (...args: any[]) => void;
  }
}

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [lang, setLang] = useState("en");
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    setLang(document.documentElement.lang || "en");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    
    return () => {
      window.removeEventListener("langChange", handleLangChange);
      observer.disconnect();
    };
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity("set", "Form_Status", "Attempt_Send");
    }

    if (!form.current) return;

    emailjs.sendForm("service_te6x5kf", "template_ijeg768", form.current, "Cs5la_p5o9EuGW4qH")
      .then(() => {
        setSuccess(true);
        setLoading(false);
        form.current?.reset();
        if (typeof window !== "undefined" && window.clarity) {
          window.clarity("set", "Conversion", "Booking_Success");
        }
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setError(true);
        setLoading(false);
        if (typeof window !== "undefined" && window.clarity) {
          window.clarity("set", "Form_Error", "EmailJS_Fail");
        }
      });
  };

  const content = {
    en: {
      // English: Κρατάμε το Booking, με λίγο padding για το 'g'
      title: <>Contact <br /> <span className="text-olive-700">& Booking</span></>,
      directions: "Get Directions",
      subtitle: "Located in Neimporio, just a 5-minute walk from the beach and the main street of Chora.",
      addressLabel: "Address",
      address: "Neimporio, Chora Andros",
      phoneLabel: "Phone",
      emailLabel: "Email",
      formTitle: "Get in Touch",
      formSubtitle: "We usually respond within 24 hours.",
      name: "Name",
      namePlace: "Your full name",
      email: "Email",
      emailPlace: "email@example.com",
      checkIn: "Check In",
      checkOut: "Check Out",
      message: "Message",
      messagePlace: "Tell us about your trip...",
      send: "Send Request",
      sending: "Sending...",
      sent: "Sent",
      successMsg: "Message received! Thank you.",
      errorMsg: "Error sending message. Please try again."
    },
    el: {
      // Greek FIX: Μόνο "Επικοινωνία" για να αποφύγουμε το 'ς' και να είναι minimal
      title: <span className="text-stone-900">Επικοινωνία</span>,
      directions: "Οδηγίες Χάρτη",
      subtitle: "Στο Νειμποριό, μόλις 5 λεπτά με τα πόδια από την παραλία και τον κεντρικό πεζόδρομο της Χώρας.",
      addressLabel: "Διεύθυνση",
      address: "Νειμποριό, Χώρα Άνδρου",
      phoneLabel: "Τηλέφωνο",
      emailLabel: "Email",
      formTitle: "Επικοινωνήστε μαζί μας",
      formSubtitle: "Απαντάμε συνήθως εντός 24 ωρών.",
      name: "Ονοματεπώνυμο",
      namePlace: "Το όνομά σας",
      email: "Email",
      emailPlace: "email@example.com",
      checkIn: "Άφιξη",
      checkOut: "Αναχώρηση",
      message: "Μήνυμα",
      messagePlace: "Πείτε μας για το ταξίδι σας...",
      send: "Αποστολή",
      sending: "Αποστολή...",
      sent: "Εστάλη",
      successMsg: "Το μήνυμα ελήφθη! Ευχαριστούμε.",
      errorMsg: "Σφάλμα αποστολής. Παρακαλώ δοκιμάστε ξανά."
    }
  };

  const t = lang === "el" ? content.el : content.en;

  return (
    <main className="min-h-screen bg-[#fafaf9]"> 
      <Navbar />
      
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* LEFT SIDE: Info & Map */}
          {/* FIX: Μείωσα το space-y από 10 σε 4 για να έρθουν πιο κοντά */}
          <div className="space-y-4 mt-6">
            <Reveal>
              {/* FIX: Μεγάλο μέγεθος ξανά, pb-4 για το 'g' στα αγγλικά */}
              <h1 className="text-5xl md:text-7xl font-display text-stone-900 leading-tight pb-4">
                {t.title}
              </h1>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.2}>
                {/* Ο υπότιτλος έρχεται ακριβώς από κάτω */}
                <p className="text-stone-600 font-sans font-medium text-lg max-w-md leading-relaxed -mt-2">
                  {t.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-2">{t.addressLabel}</h3>
                  <p className="text-2xl font-serif text-stone-900 font-medium">{t.address}</p>
                  
                  <div 
                    ref={mapRef}
                    className="group w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative mt-6 bg-stone-200"
                    style={{ containIntrinsicSize: "auto 350px", contentVisibility: "auto" }}
                  >
                    {loadMap ? (
                      <iframe 
                        // --- ΕΔΩ ΒΑΖΕΙΣ ΤΟ EMBED LINK ΣΟΥ ---
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.0325698356105!2d24.92986747661425!3d37.83612337196989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2ff3fd9c3115b%3A0xb694eabb08bdd45!2sAndros%20Guesthouses!5e0!3m2!1sel!2sgr!4v1771246377963!5m2!1sel!2sgr" 
                        width="100%" height="100%" style={{ border: 0 }} 
                        allowFullScreen loading="lazy" title="Location Map"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                         <span className="text-stone-400 font-sans text-xs tracking-widest uppercase animate-pulse">Loading Map...</span>
                      </div>
                    )}
                    
                    <a 
                      // --- ΕΔΩ ΒΑΖΕΙΣ ΤΟ SHARE LINK ΣΟΥ ---
                      href="https://maps.app.goo.gl/cFPuNQpfBtq3vbVe8" 
                      target="_blank" rel="noopener noreferrer"
                      className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full text-[10px] font-bold text-stone-900 shadow-xl hover:bg-olive-700 hover:text-white transition-all z-10 uppercase tracking-widest active:scale-95"
                    >
                      {t.directions} →
                    </a>
                  </div>

                </div>
              </Reveal>

              <div className="flex flex-col gap-6 pt-8 border-t border-stone-300">
                <Reveal delay={0.4}>
                  <div className="active:scale-95 transition-transform origin-left py-1">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-1">{t.phoneLabel}</h3>
                    <a href="tel:+306936934390" className="text-xl md:text-2xl font-serif text-stone-900 hover:text-olive-600 transition-colors font-medium block">+30 693 693 4390</a>
                  </div>
                </Reveal>
                <Reveal delay={0.5}>
                  <div className="active:scale-95 transition-transform origin-left py-1">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-1">{t.emailLabel}</h3>
                    <a href="mailto:androsguesthouses@gmail.com" className="text-xl md:text-2xl font-serif text-stone-900 hover:text-olive-600 transition-colors font-medium block">androsguesthouses@gmail.com</a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-stone-100">
              <Reveal width="100%" delay={0.2}>
                
                <h3 className="text-3xl font-display text-stone-900 mb-2 leading-tight pb-2">
                  {t.formTitle}
                </h3>

                <p className="text-stone-500 font-sans text-sm mb-8 leading-relaxed pb-2">
                  {t.formSubtitle}
                </p>
                
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.name}</label>
                      <input name="user_name" required type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 focus:bg-white transition-colors font-serif text-lg text-stone-900" placeholder={t.namePlace} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.email}</label>
                      <input name="user_email" required type="email" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 focus:bg-white transition-colors font-serif text-lg text-stone-900" placeholder={t.emailPlace} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.checkIn}</label>
                      <input name="check_in" type="date" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 font-sans text-stone-600" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.checkOut}</label>
                      <input name="check_out" type="date" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 font-sans text-stone-600" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500">{t.message}</label>
                    <textarea name="message" required rows={4} className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:border-olive-600 focus:bg-white transition-colors font-serif text-lg text-stone-900 resize-none" placeholder={t.messagePlace}></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={loading || success} 
                    className={`w-full py-4 rounded-lg text-sm font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 mt-4 transform
                      ${success 
                        ? "bg-stone-400 text-white cursor-default" 
                        : "bg-olive-700 text-white hover:bg-stone-900 hover:shadow-xl hover:-translate-y-1 active:scale-95"
                      }
                      disabled:opacity-80 disabled:cursor-not-allowed
                    `}
                  >
                    {loading ? t.sending : success ? t.sent : t.send}
                  </button>

                  {success && <p className="text-olive-600 text-xs font-bold text-center mt-2 animate-pulse">{t.successMsg}</p>}
                  {error && <p className="text-red-600 text-xs font-bold text-center mt-2">{t.errorMsg}</p>}
                </form>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}