"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { notFound } from "next/navigation";


const roomsData = [
  {
    slug: "aegean-studio",
    name: "Aegean Studio", // Καθαρό όνομα για τον πελάτη
    price: "90€",
    images: ["/images/no5.6.webp", "/images/no5.1.webp", "/images/no5.2.webp", "/images/no5.3.webp"],
    el: {
      seoTitle: "Aegean Studio | Ενοικιαζόμενα Δωμάτια με Θέα Χώρα Άνδρος",
      subtitle: "Μοντέρνο δωμάτιο με θέα θάλασσα στη Χώρα", // H2 Keyword Injection
      metaDesc: "Διαμονή στη Χώρα της Άνδρου στο Aegean Studio. Μοντέρνο δωμάτιο με θέα θάλασσα, πλήρη κουζίνα και πρόσβαση στα Andros Routes.",
      size: "25 τ.μ.", guests: "2-3 Άτομα", bed: "1 Διπλό Κρεβάτι",
      description: "Νιώστε τον παλμό της Χώρας σε έναν χώρο σχεδιασμένο για τον σύγχρονο ταξιδιώτη. Στον 1ο όροφο, το Aegean Studio ορίζει το 'Smart Living'. Φωτεινό, μοντέρνο και πλήρως εξοπλισμένο, σας επιτρέπει να ζήσετε σαν ντόπιος. Ξυπνήστε με το λαμπερό ελληνικό φως, ετοιμάστε το πρωινό σας σε μια κουζίνα πλήρους μεγέθους και απολαύστε τον Nespresso σας στο μπαλκόνι ατενίζοντας το βουνό και το λιμάνι.",
      features: ["Πλήρης Κουζίνα & Φούρνος", "Πλυντήριο Ρούχων", "Ιδιωτικό Μπαλκόνι", "Θέα Βουνό & Λιμάνι", "Μηχανή Nespresso", "Smart TV & WiFi"],
      sidebar: { back: "ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ", start: "Από", night: "/νύχτα", guests: "Επισκέπτες:", beds: "Κρεβάτια:", checkin: "Check-in:", button: "Κάντε Κράτηση", guarantee: "Εγγύηση Καλύτερης Τιμής", experience: "Η Εμπειρία", highlights: "Χαρακτηριστικά", gallery: "Φωτογραφίες" }
    },
    en: {
      seoTitle: "Aegean Studio | Sea View Accommodation Chora Andros",
      subtitle: "Modern Sea View Studio in Chora", // H2 Keyword Injection
      metaDesc: "Stay in Chora Andros at Aegean Studio. Modern room with sea view, full kitchen, and easy access to Andros Routes hiking trails.",
      size: "25 m²", guests: "2-3 Guests", bed: "1 Double Bed",
      description: "Experience the pulse of Chora in a space designed for modern travelers. Located on the 1st floor, the Aegean Studio defines 'Smart Living'. Bright, modern, and fully equipped, it allows you to live like a local. Wake up to the brilliant Greek light, prepare breakfast in a full-size kitchen, and enjoy your Nespresso on the balcony while gazing at the mountain and the harbor.",
      features: ["Full Kitchen & Oven", "Washing Machine", "Private Balcony", "Mountain & Harbor View", "Nespresso Machine", "Smart TV & WiFi"],
      sidebar: { back: "BACK TO HOME", start: "Starting from", night: "/night", guests: "Guests:", beds: "Beds:", checkin: "Check-in:", button: "Book Your Stay", guarantee: "Best Rate Guarantee", experience: "The Experience", highlights: "Highlights", gallery: "Gallery" }
    }
  },
  {
    slug: "garden-suite",
    name: "Garden Suite",
    price: "90€",
    images: ["/images/balcony1.webp", "/images/no2.2.webp", "/images/no2.3.webp"],
    el: {
      seoTitle: "Garden Suite | Διαμονή με Ιδιωτική Αυλή Χώρα Άνδρος",
      subtitle: "Οικογενειακή σουίτα με δροσερή ιδιωτική αυλή",
      metaDesc: "Garden Suite στη Χώρα της Άνδρου. Ιδανικό για οικογένειες, με άμεση πρόσβαση σε δροσερή ιδιωτική αυλή.",
      size: "40 τ.μ.", guests: "2-5 Άτομα", bed: "2 Διπλά + Καναπές",
      description: "Η απόλυτη αίσθηση εξοχικής κατοικίας. Στο ισόγειο, η Garden Suite προσφέρει την πολυτέλεια της άνεσης και την άμεση επαφή με τη φύση. Ιδανική για οικογένειες ή παρέες, διαθέτει ευρύχωρους χώρους (δύο διπλά κρεβάτια) και μεγάλη κουζίνα. Το highlight; Η άμεση πρόσβαση στη δροσερή, ιδιωτική αυλή, που γίνεται το φυσικό σας καθιστικό τα ζεστά απογεύματα.",
      features: ["2 Διπλά Κρεβάτια", "Πρόσβαση σε Ιδιωτική Αυλή", "Μεγάλη Οικογενειακή Κουζίνα", "Πλυντήριο Ρούχων", "Ευρύχωρο Καθιστικό", "Εύκολη Πρόσβαση (Ισόγειο)"],
      sidebar: { back: "ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ", start: "Από", night: "/νύχτα", guests: "Επισκέπτες:", beds: "Κρεβάτια:", checkin: "Check-in:", button: "Κάντε Κράτηση", guarantee: "Εγγύηση Καλύτερης Τιμής", experience: "Η Εμπειρία", highlights: "Χαρακτηριστικά", gallery: "Φωτογραφίες" }
    },
    en: {
      seoTitle: "Garden Suite | Family Accommodation Chora Andros",
      subtitle: "Family Suite with Private Courtyard",
      metaDesc: "Garden Suite in Chora Andros. Perfect for families, featuring direct access to a cool private courtyard.",
      size: "40 m²", guests: "2-5 Guests", bed: "2 Doubles + Sofa",
      description: "The ultimate summer home feeling. Located on the ground floor, the Garden Suite offers the luxury of comfort and direct connection with nature. Ideal for families or groups, featuring spacious areas (two double beds) and a large kitchen for family meals. The highlight? Direct access to the cool, private courtyard.",
      features: ["2 Double Beds", "Private Courtyard Access", "Large Family Kitchen", "Washing Machine", "Spacious Living Area", "Easy Access (Ground Floor)"],
      sidebar: { back: "BACK TO HOME", start: "Starting from", night: "/night", guests: "Guests:", beds: "Beds:", checkin: "Check-in:", button: "Book Your Stay", guarantee: "Best Rate Guarantee", experience: "The Experience", highlights: "Highlights", gallery: "Gallery" }
    }
  },
  {
    slug: "grand-residence",
    name: "Grand Residence",
    price: "100€",
    images: ["/images/no5.5.webp", "/images/no5.4.webp", "/images/no5.7.webp"],
    el: {
      seoTitle: "Grand Residence | Penthouse με Πανοραμική Θέα Άνδρος",
      subtitle: "Πολυτελές ρετιρέ με πανοραμική θέα στο λιμάνι",
      metaDesc: "Το Grand Residence προσφέρει πανοραμική θέα στο λιμάνι της Άνδρου. Πολυτελής διαμονή για 4+ άτομα.",
      size: "55 τ.μ.", guests: "4+ Ενήλικες", bed: "Υπνοδωμάτιο + Σαλόνι",
      description: "Η ναυαρχίδα της φιλοξενίας μας. Στον 2ο όροφο (ρετιρέ), η ιδιωτικότητα συναντά την πανοραμική θέα. Ένα πραγματικό σπίτι μακριά από το σπίτι, με γενναιόδωρους χώρους που φιλοξενούν άνετα 4+ άτομα. Απολαύστε το ηλιοβασίλεμα από τη μεγάλη βεράντα με θέα σε όλη τη Χώρα και το λιμάνι.",
      features: ["Πανοραμική Βεράντα", "Ευρύχωρο Σαλόνι", "Ξεχωριστό Υπνοδωμάτιο", "Πλήρης Οικιακός Εξοπλισμός", "Πλυντήριο & Σίδερο", "Προνομιακή Θέα Λιμάνι"],
      sidebar: { back: "ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ", start: "Από", night: "/νύχτα", guests: "Επισκέπτες:", beds: "Κρεβάτια:", checkin: "Check-in:", button: "Κάντε Κράτηση", guarantee: "Εγγύηση Καλύτερης Τιμής", experience: "Η Εμπειρία", highlights: "Χαρακτηριστικά", gallery: "Φωτογραφίες" }
    },
    en: {
      seoTitle: "Grand Residence | Penthouse Accommodation Chora Andros",
      subtitle: "Luxury Penthouse with Panoramic Harbor View",
      metaDesc: "Grand Residence offers panoramic views of Andros harbor. Luxury stay for 4+ guests in the heart of Chora.",
      size: "55 m²", guests: "4+ Adults", bed: "Bedroom + Living Room",
      description: "Our hospitality flagship. Located on the 2nd floor (penthouse), privacy meets panoramic views. A true home away from home, with generous spaces comfortably hosting 4+ guests. Enjoy the sunset from the large veranda overlooking the entire Chora and the harbor.",
      features: ["Panoramic Veranda", "Spacious Living Room", "Separate Bedroom", "Full Household Equipment", "Washing Machine & Iron", "Premium Harbor View"],
      sidebar: { back: "BACK TO HOME", start: "Starting from", night: "/night", guests: "Guests:", beds: "Beds:", checkin: "Check-in:", button: "Book Your Stay", guarantee: "Best Rate Guarantee", experience: "The Experience", highlights: "Highlights", gallery: "Gallery" }
    }
  }
];


export default function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  // SRE FIX: Ξεκλειδώνουμε το slug γιατί πλέον είναι Promise
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const [lang, setLang] = useState("en"); 
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get("lang");
    
    if (urlLang === "el" || urlLang === "en") {
      setLang(urlLang);
    } else {
      setLang(document.documentElement.lang || "en");
    }

    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    
    setIsLoaded(true);
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  // SRE FIX: Χρησιμοποιούμε το slug που ξεκλειδώσαμε παραπάνω
  const room = roomsData.find((r) => r.slug === slug);
  if (!room) notFound();

  const content = lang === "el" ? room.el : room.en;

  if (!isLoaded) return <div className="min-h-screen bg-[#fafaf9]" />;

  return (
    <main className="bg-[#fafaf9] min-h-screen pb-12">
      <Navbar />
      
      {/* Back Button - Προσθήκη ?lang=en στο link */}
      <div className="absolute top-28 left-6 z-20 md:left-12">
        <Link 
          href={lang === "en" ? "/?lang=en" : "/"} 
          className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/30 transition-all inline-block active:scale-95"
        >
          ← {content.sidebar.back}
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image 
          src={room.images[0]} 
          alt={`${room.name} Andros Chora`} 
          fill 
          className="object-cover" 
          priority 
          sizes="100vw" 
          quality={80} 
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent text-white">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-display text-white mb-2 drop-shadow-lg leading-tight">
              {room.name}
            </h1>
            <h2 className="text-lg md:text-xl text-white/95 font-sans font-medium mb-3">
              {content.subtitle}
            </h2>
            <p className="text-sm md:text-base text-white/80 font-sans font-light tracking-wide">
              {content.size} • {content.guests}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-10">
          <section>
            <h2 className="text-2xl font-display text-stone-900 mb-4">{content.sidebar.experience}</h2>
            <p className="text-stone-600 leading-relaxed text-lg font-sans font-light">{content.description}</p>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <h3 className="text-xl font-display text-stone-900 mb-6">{content.sidebar.highlights}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive-600" />
                  <span className="font-sans font-medium">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8 mb-12">
            <h3 className="text-xl font-display text-stone-900 mb-6">{content.sidebar.gallery}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {room.images.slice(1).map((img, i) => (
                <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md bg-stone-100">
                  <Image src={img} alt={`${room.name} gallery ${i}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column / Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-28 bg-white p-8 rounded-xl shadow-xl border border-stone-100">
            <div className="mb-6 border-b border-stone-100 pb-6">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">{content.sidebar.start}</span>
              <div className="text-3xl font-display text-stone-900"> {room.price} <span className="text-sm text-stone-500 font-sans">{content.sidebar.night}</span></div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm text-stone-600">
                <span>{content.sidebar.guests}</span>
                <span className="font-bold text-stone-900">{content.guests}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>{content.sidebar.beds}</span>
                <span className="font-bold text-stone-900 text-right w-1/2">{content.bed}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>Check-in:</span>
                <span className="font-bold text-stone-900">15:00</span>
              </div>
            </div>

            <Link href="/contact" className="block w-full py-4 bg-stone-900 text-white text-center rounded-full font-bold uppercase tracking-widest hover:bg-olive-600 transition-colors shadow-lg active:scale-95">
              {content.sidebar.button}
            </Link>
            <p className="text-[10px] text-stone-600 text-center mt-3 uppercase tracking-wide">{content.sidebar.guarantee}</p>
          </div>
        </div>
      </div>
    </main>
  );
}