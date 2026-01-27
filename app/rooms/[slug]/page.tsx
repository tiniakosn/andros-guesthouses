"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect, use } from "react";

// --- ΔΕΔΟΜΕΝΑ ΔΩΜΑΤΙΩΝ (BILINGUAL VERSION) ---
const roomsData = [
  {
    slug: "aegean-studio",
    price: "50€",
    images: ["/images/no5.6.jpg", "/images/no5.1.jpg", "/images/no5.2.jpg", "/images/no5.3.jpg"],
    en: {
      title: "Aegean Studio",
      size: "25 m²",
      guests: "2-3 Guests",
      bed: "1 Double Bed",
      description: "Experience the pulse of Chora in a space designed for modern travelers. Located on the 1st floor, the Aegean Studio defines 'Smart Living'. Bright, modern, and fully equipped, it allows you to live like a local. Wake up to the brilliant Greek light, prepare breakfast in a full-size kitchen, and enjoy your Nespresso on the balcony while gazing at the mountain and the harbor.",
      features: ["Full Kitchen & Oven", "Washing Machine", "Private Balcony", "Mountain & Harbor View", "Nespresso Machine", "Smart TV & WiFi"],
      sidebar: { start: "Starting from", night: "/night", guests: "Guests:", beds: "Beds:", checkin: "Check-in:", button: "Book Your Stay", guarantee: "Best Rate Guarantee", experience: "The Experience", highlights: "Highlights", gallery: "Gallery" }
    },
    el: {
      title: "Aegean Studio",
      size: "25 τ.μ.",
      guests: "2-3 Άτομα",
      bed: "1 Διπλό Κρεβάτι",
      description: "Νιώστε τον παλμό της Χώρας σε έναν χώρο σχεδιασμένο για τον σύγχρονο ταξιδιώτη. Στον 1ο όροφο, το Aegean Studio ορίζει το 'Smart Living'. Φωτεινό, μοντέρνο και πλήρως εξοπλισμένο, σας επιτρέπει να ζήσετε σαν ντόπιος. Ξυπνήστε με το λαμπερό ελληνικό φως, ετοιμάστε το πρωινό σας σε μια κουζίνα πλήρους μεγέθους και απολαύστε τον Nespresso σας στο μπαλκόνι ατενίζοντας το βουνό και το λιμάνι.",
      features: ["Πλήρης Κουζίνα & Φούρνος", "Πλυντήριο Ρούχων", "Ιδιωτικό Μπαλκόνι", "Θέα Βουνό & Λιμάνι", "Μηχανή Nespresso", "Smart TV & WiFi"],
      sidebar: { start: "Από", night: "/νύχτα", guests: "Επισκέπτες:", beds: "Κρεβάτια:", checkin: "Check-in:", button: "Κάντε Κράτηση", guarantee: "Εγγύηση Καλύτερης Τιμής", experience: "Η Εμπειρία", highlights: "Χαρακτηριστικά", gallery: "Φωτογραφίες" }
    }
  },
  {
    slug: "garden-suite",
    price: "50€",
    images: ["/images/balcony1.jpg", "/images/no2.2.jpg", "/images/no2.3.jpg"],
    en: {
      title: "Garden Suite",
      size: "40 m²",
      guests: "2-5 Guests",
      bed: "2 Doubles + Sofa",
      description: "The ultimate summer home feeling. Located on the ground floor, the Garden Suite offers the luxury of comfort and direct connection with nature. Ideal for families or groups, featuring spacious areas (two double beds) and a large kitchen for family meals. The highlight? Direct access to the cool, private courtyard, which becomes your natural living room during warm afternoons.",
      features: ["2 Double Beds", "Private Courtyard Access", "Large Family Kitchen", "Washing Machine", "Spacious Living Area", "Easy Access (Ground Floor)"],
      sidebar: { start: "Starting from", night: "/night", guests: "Guests:", beds: "Beds:", checkin: "Check-in:", button: "Book Your Stay", guarantee: "Best Rate Guarantee", experience: "The Experience", highlights: "Highlights", gallery: "Gallery" }
    },
    el: {
      title: "Garden Suite",
      size: "40 τ.μ.",
      guests: "2-5 Άτομα",
      bed: "2 Διπλά + Καναπές",
      description: "Η απόλυτη αίσθηση εξοχικής κατοικίας. Στο ισόγειο, η Garden Suite προσφέρει την πολυτέλεια της άνεσης και την άμεση επαφή με τη φύση. Ιδανική για οικογένειες ή παρέες, διαθέτει ευρύχωρους χώρους (δύο διπλά κρεβάτια) και μεγάλη κουζίνα. Το highlight; Η άμεση πρόσβαση στη δροσερή, ιδιωτική αυλή, που γίνεται το φυσικό σας καθιστικό τα ζεστά απογεύματα.",
      features: ["2 Διπλά Κρεβάτια", "Πρόσβαση σε Ιδιωτική Αυλή", "Μεγάλη Οικογενειακή Κουζίνα", "Πλυντήριο Ρούχων", "Ευρύχωρο Καθιστικό", "Εύκολη Πρόσβαση (Ισόγειο)"],
      sidebar: { start: "Από", night: "/νύχτα", guests: "Επισκέπτες:", beds: "Κρεβάτια:", checkin: "Check-in:", button: "Κάντε Κράτηση", guarantee: "Εγγύηση Καλύτερης Τιμής", experience: "Η Εμπειρία", highlights: "Χαρακτηριστικά", gallery: "Φωτογραφίες" }
    }
  },
  {
    slug: "grand-residence",
    price: "60€",
    images: ["/images/no5.5.webp", "/images/no5.4.jpg", "/images/no5.7.jpg"],
    en: {
      title: "Grand Residence",
      size: "55 m²",
      guests: "4+ Adults",
      bed: "Bedroom + Living Room",
      description: "Our hospitality flagship. Located on the 2nd floor (penthouse), privacy meets panoramic views. A true home away from home, with generous spaces comfortably hosting 4+ guests. Enjoy the sunset from the large veranda overlooking the entire Chora and the harbor, with all the comforts of a fully equipped household at your disposal.",
      features: ["Panoramic Veranda", "Spacious Living Room", "Separate Bedroom", "Full Household Equipment", "Washing Machine & Iron", "Premium Harbor View"],
      sidebar: { start: "Starting from", night: "/night", guests: "Guests:", beds: "Beds:", checkin: "Check-in:", button: "Book Your Stay", guarantee: "Best Rate Guarantee", experience: "The Experience", highlights: "Highlights", gallery: "Gallery" }
    },
    el: {
      title: "Grand Residence",
      size: "55 τ.μ.",
      guests: "4+ Ενήλικες",
      bed: "Υπνοδωμάτιο + Σαλόνι",
      description: "Η ναυαρχίδα της φιλοξενίας μας. Στον 2ο όροφο (ρετιρέ), η ιδιωτικότητα συναντά την πανοραμική θέα. Ένα πραγματικό σπίτι μακριά από το σπίτι, με γενναιόδωρους χώρους που φιλοξενούν άνετα 4+ άτομα. Απολαύστε το ηλιοβασίλεμα από τη μεγάλη βεράντα με θέα σε όλη τη Χώρα και το λιμάνι.",
      features: ["Πανοραμική Βεράντα", "Ευρύχωρο Σαλόνι", "Ξεχωριστό Υπνοδωμάτιο", "Πλήρης Οικιακός Εξοπλισμός", "Πλυντήριο & Σίδερο", "Προνομιακή Θέα Λιμάνι"],
      sidebar: { start: "Από", night: "/νύχτα", guests: "Επισκέπτες:", beds: "Κρεβάτια:", checkin: "Check-in:", button: "Κάντε Κράτηση", guarantee: "Εγγύηση Καλύτερης Τιμής", experience: "Η Εμπειρία", highlights: "Χαρακτηριστικά", gallery: "Φωτογραφίες" }
    }
  }
];

export default function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [lang, setLang] = useState("en");
  
  const room = roomsData.find((r) => r.slug === slug);

  useEffect(() => {
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    setLang(document.documentElement.lang || "en");
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  if (!room) {
    notFound();
  }

  const t = lang === "el" ? room.el : room.en;

  return (
    <main className="bg-[#fafaf9] min-h-screen pb-0">
      <Navbar />

      {/* --- HERO IMAGE --- */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={room.images[0] || "/images/studio-room.jpg"}
          alt={t.title}
          fill
          className="object-cover"
          priority
          sizes="100vw" // 2. Λέει στον browser ότι είναι full-width
          quality={85}
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 key={lang + "h1"} className="text-4xl md:text-6xl font-display text-white mb-2">{t.title}</h1>
            <p key={lang + "sub"} className="text-white/90 text-lg font-sans">{t.size} • {t.guests}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:w-2/3 space-y-10">
            <section>
              <h2 key={lang + "exp"} className="text-2xl font-display text-stone-900 mb-4">{t.sidebar.experience}</h2>
              <p key={lang + "desc"} className="text-stone-600 leading-relaxed text-lg font-sans font-light">
                {t.description}
              </p>
            </section>

            <section className="border-t border-stone-200 pt-8">
              <h3 key={lang + "high"} className="text-xl font-display text-stone-900 mb-6">{t.sidebar.highlights}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {t.features.map((feature, i) => (
                  <div key={i + lang} className="flex items-center gap-3 text-stone-600">
                    <svg className="w-5 h-5 text-olive-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-stone-200 pt-8 mb-12">
              <h3 key={lang + "gal"} className="text-xl font-display text-stone-900 mb-6">{t.sidebar.gallery}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.images.map((img, i) => (
                  <div key={i} className="relative h-64 rounded-lg overflow-hidden group shadow-md">
                    <Image 
                      src={img} 
                      alt={`${t.title} ${i + 1}`} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-xl shadow-xl border border-stone-100">
              <div className="flex justify-between items-end mb-6 border-b border-stone-100 pb-6">
                <div>
                  <span key={lang + "start"} className="text-xs font-bold text-stone-400 uppercase tracking-wider">{t.sidebar.start}</span>
                  <div key={lang + "price"} className="text-3xl font-display text-stone-900"> {room.price} <span className="text-sm text-stone-500 font-sans">{t.sidebar.night}</span></div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-stone-600">
                  <span key={lang + "gst"}>{t.sidebar.guests}</span>
                  <span key={lang + "gstv"} className="font-bold text-stone-900">{t.guests}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-600">
                  <span key={lang + "bedlabel"}>{t.sidebar.beds}</span>
                  <span key={lang + "bedv"} className="font-bold text-stone-900 text-right w-1/2">{t.bed}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-600">
                  <span key={lang + "chk"}>{t.sidebar.checkin}</span>
                  <span className="font-bold text-stone-900">15:00</span>
                </div>
              </div>

              <Link 
                href="/contact" 
                aria-label={`Book your stay in ${t.title}`}
                className="block w-full py-4 bg-stone-900 text-white text-center rounded-full font-bold uppercase tracking-widest hover:bg-olive-600 transition-colors shadow-lg hover:-translate-y-1 transform duration-200 text-sm"
              >
                {t.sidebar.button}
              </Link>
              <p key={lang + "guar"} className="text-[10px] text-stone-400 text-center mt-3 uppercase tracking-wide">
                {t.sidebar.guarantee}
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}