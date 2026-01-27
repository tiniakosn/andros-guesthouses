"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Reveal from "@/components/Reveal";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";


declare global {
  interface Window {
    clarity: any;
  }
}

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    setLang(document.documentElement.lang || "en");
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    // Σήμα στο Clarity ότι ξεκίνησε η προσπάθεια αποστολής
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity("set", "Form_Status", "Attempt_Send");
    }

    if (!form.current) return;

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
          
          // Σήμα στο Clarity ότι η κράτηση/μήνυμα ολοκληρώθηκε!
          if (typeof window !== "undefined" && window.clarity) {
            window.clarity("set", "Conversion", "Booking_Success");
          }
        },
        (error) => {
          console.error("FAILED...", error.text);
          setError(true);
          setLoading(false);
          
          // Σήμα στο Clarity ότι υπήρξε σφάλμα (για να δεις τι πήγε λάθος)
          if (typeof window !== "undefined" && window.clarity) {
            window.clarity("set", "Form_Error", "EmailJS_Fail");
          }
        }
      );
  };

  const content = {
    en: {
      title: <>Contact <br /> <span className="text-olive-700">& Booking</span></>,
      subtitle: "Located in Neimporio, just a 5-minute walk from the beach and the vibrant main pedestrian street of Chora.",
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
      title: <>Επικοινωνία <br /> <span className="text-olive-700">& Κρατήσεις</span></>,
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
          
          {/* --- LEFT SIDE --- */}
          <div className="space-y-10 mt-6">
            <div>
              <Reveal>
                <h1 key={lang + "title"} className="text-5xl md:text-7xl font-display text-stone-900 leading-tight pb-2">
                  {t.title}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p key={lang + "sub"} className="mt-6 text-stone-600 font-sans font-medium text-lg max-w-md leading-relaxed">
                  {t.subtitle}
                </p>
              </Reveal>
            </div>

            <div className="space-y-8">
              <Reveal delay={0.3}>
                <div>
                  <h3 key={lang + "al"} className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-2">{t.addressLabel}</h3>
                  <p className="text-2xl font-serif text-stone-900 font-medium">{t.address}</p>
                  <p className="text-stone-600 mb-6">84500, Cyclades, Greece</p>
                  
                  <div className="group w-full h-[300px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative cursor-pointer">
                    <div className="w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.032569835595!2d24.929867476614245!3d37.8361233719699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2ff3fd9c3115b%3A0xb694eabb08bdd45!2sAndros%20Guesthouses!5e0!3m2!1sel!2sgr!4v1769521733657!5m2!1sel!2sgr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                        title="Andros Guesthouses Location"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="flex flex-col gap-6 pt-8 border-t border-stone-300">
                  <div>
                    <h3 key={lang + "pl"} className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-1">{t.phoneLabel}</h3>
                    <a href="tel:+306936934390" className="text-xl font-serif text-stone-900 hover:text-olive-600 transition-colors font-medium">+30 693 693 4390</a>
                  </div>
                  <div>
                      <h3 key={lang + "el"} className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-1">{t.emailLabel}</h3>
                    <a href="mailto:androsguesthouses@gmail.com" className="text-xl font-serif text-stone-900 hover:text-olive-600 transition-colors font-medium">androsguesthouses@gmail.com</a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-stone-100 h-fit sticky top-32">
              <Reveal width="100%" delay={0.2}>
                <h3 key={lang + "ft"} className="text-3xl font-display text-stone-900 mb-2">{t.formTitle}</h3>
                <p key={lang + "fs"} className="text-stone-500 font-sans text-sm mb-8">{t.formSubtitle}</p>
                
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
                        : "bg-olive-700 text-white hover:bg-stone-900 hover:shadow-xl hover:-translate-y-1"
                      }
                      disabled:opacity-80 disabled:cursor-not-allowed
                    `}
                  >
                    {loading ? t.sending : success ? t.sent : t.send}
                  </button>

                  {success && <p key={lang + "sm"} className="text-olive-600 text-xs font-bold text-center mt-2 animate-pulse">{t.successMsg}</p>}
                  {error && <p key={lang + "em"} className="text-red-600 text-xs font-bold text-center mt-2">{t.errorMsg}</p>}
                </form>
              </Reveal>
          </div>

        </div>
      </div>
    </main>
  );
}