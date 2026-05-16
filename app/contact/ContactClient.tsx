"use client";

import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import { useRef, useState, useEffect, Suspense } from "react";
import emailjs from "@emailjs/browser";

declare global {
  interface Window {
    clarity?: (...args: any[]) => void;
  }
}

function ContactContent({ initialLang }: { initialLang: "el" | "en" }) {
  const form = useRef<HTMLFormElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [lang, setLang] = useState<"el" | "en">(initialLang);
  const [loadMap, setLoadMap] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (mapRef.current) observer.observe(mapRef.current);

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
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  };

  const tr = lang === "el" ? {
    title: "Επικοινωνία",
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
  } : {
    title: "Contact & Booking",
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
  };

  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Navbar />

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

          <div className="space-y-4 mt-6">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-display text-stone-900 leading-tight pb-4">
                {lang === "el"
                  ? <span className="text-stone-900">Επικοινωνία</span>
                  : <>{"Contact"} <br /> <span className="text-olive-700">{"& Booking"}</span></>
                }
              </h1>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.2}>
                <p className="text-stone-600 font-sans font-medium text-lg max-w-md leading-relaxed -mt-2">
                  {tr.subtitle}
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-olive-700 mb-2">{tr.addressLabel}</h3>
                  <p className="text-2xl font-serif text-stone-900 font-medium">{tr.address}</p>

                  <div
                    ref={mapRef}
                    className="group w-full h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl border-4 border-white relative mt-6 bg-stone-200"
                  >
                    {loadMap ? (
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.0325698355923!2d24.929867475706402!3d37.83612337196996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2ff3fd9c3115b%3A0xb694eabb08bdd45!2sAndros%20Guesthouses!5e0!3m2!1sel!2sgr!4v1776605399709!5m2!1sel!2sgr"
                        width="100%" height="100%" style={{ border: 0 }}
                        allowFullScreen loading="lazy" title="Location Map"
                      />
                    ) : (
                      <div className="w-full h-full bg-stone-200 animate-pulse" />
                    )}
                  </div>

                  <div className="mt-4">
                    <a
                      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.0325698355923!2d24.929867475706402!3d37.83612337196996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a2ff3fd9c3115b%3A0xb694eabb08bdd45!2sAndros%20Guesthouses!5e0!3m2!1sel!2sgr!4v1777902325941!5m2!1sel!2sgr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-olive-700 hover:text-olive-900 transition-colors uppercase tracking-widest"
                    >
                      {tr.directions} →
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="space-y-3 text-stone-600">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-olive-700">{tr.phoneLabel}</span>
                    <p className="text-lg font-medium text-stone-900">+30 693 693 4390</p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-olive-700">{tr.emailLabel}</span>
                    <p className="text-lg font-medium text-stone-900">androsguesthouses@gmail.com</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="mt-6">
            <Reveal delay={0.2}>
              <div className="bg-white rounded-2xl shadow-xl border border-stone-100 p-8 md:p-10">
                <h2 className="text-2xl font-display text-stone-900 mb-2">{tr.formTitle}</h2>
                <p className="text-stone-500 text-sm mb-8">{tr.formSubtitle}</p>

                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">{tr.name}</label>
                    <input
                      type="text" name="user_name" required
                      placeholder={tr.namePlace}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-olive-400 transition"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">{tr.email}</label>
                    <input
                      type="email" name="user_email" required
                      placeholder={tr.emailPlace}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-olive-400 transition"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">{tr.checkIn}</label>
                      <input
                        type="date" name="check_in"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-olive-400 transition"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">{tr.checkOut}</label>
                      <input
                        type="date" name="check_out"
                        className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-olive-400 transition"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-stone-500 block mb-2">{tr.message}</label>
                    <textarea
                      name="message" required rows={4}
                      placeholder={tr.messagePlace}
                      className="w-full border border-stone-200 rounded-xl px-4 py-3 text-stone-900 text-sm focus:outline-none focus:ring-2 focus:ring-olive-400 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit" disabled={loading || success}
                    className="w-full py-4 bg-stone-900 text-white font-bold uppercase tracking-widest rounded-full hover:bg-stone-700 transition-colors shadow-lg disabled:opacity-60"
                  >
                    {success ? tr.sent : loading ? tr.sending : tr.send}
                  </button>

                  {success && <p className="text-green-600 text-sm text-center font-medium">{tr.successMsg}</p>}
                  {error && <p className="text-red-500 text-sm text-center font-medium">{tr.errorMsg}</p>}
                </form>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </main>
  );
}

export default function ContactClient({ initialLang }: { initialLang: "el" | "en" }) {
  return (
    <Suspense fallback={<div className="h-screen bg-[#fafaf9]" />}>
      <ContactContent initialLang={initialLang} />
    </Suspense>
  );
}