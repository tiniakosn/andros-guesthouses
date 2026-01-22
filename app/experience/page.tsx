"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Reveal from "@/components/Reveal";
import Image from "next/image";
import { useState, useEffect } from "react";

const experiencesData = [
  {
    en: {
      title: "Pristine Beaches",
      description: "From the turquoise waters of Achla and Zorkos to the iconic 'Old Lady’s Jump' (Tis Grias to Pidima). Andros boasts over 80 beaches, ranging from organized sandy shores to secluded wild coves. We highly recommend a quick swim at Neimporio, just steps away, or a day trip to the wild beauty of Vitali."
    },
    el: {
      title: "Κρυστάλλινες Παραλίες",
      description: "Από τα γαλαζοπράσινα νερά στα Άχλα και στο Ζόρκο μέχρι το εμβληματικό «Πήδημα της Γριάς». Η Άνδρος διαθέτει πάνω από 80 παραλίες, από οργανωμένες ακτές μέχρι απομονωμένους κόλπους. Σας προτείνουμε μια βουτιά στο Νειμποριό, λίγα βήματα μακριά μας, ή μια εκδρομή στην άγρια ομορφιά του Βιταλίου."
    },
    image: "/beach.jpg",
    reverse: false
  },
  {
    en: {
      title: "Culture & Chora",
      description: "Chora is unique in the Cyclades. Noble, neoclassical, and steeped in maritime tradition. Stroll down the marble pedestrian street, visit the world-renowned Goulandris Museum of Contemporary Art, and walk to the 'Unknown Sailor' statue to gaze at the magical Tourlitis Lighthouse rising from the sea."
    },
    el: {
      title: "Πολιτισμός & Χώρα",
      description: "Η Χώρα είναι μοναδική στις Κυκλάδες. Αρχοντική, νεοκλασική και ποτισμένη από τη ναυτική παράδοση. Περπατήστε στον μαρμάρινο πεζόδρομο, επισκεφθείτε το διεθνούς φήμης Μουσείο Σύγχρονης Τέχνης Γουλανδρή και φτάστε μέχρι τον «Αφανή Ναύτη» για να δείτε τον φάρο Τουρλίτη να αναδύεται μέσα από τη θάλασσα."
    },
    image: "/agora.jpg",
    reverse: true
  },
  {
    en: {
      title: "The Explosive Easter",
      description: "Experience one of the most spectacular Easter celebrations in Greece. In the village of Stenies, the 'Maskoula' tradition creates a breathtaking show. During the service at Agios Georgios church, locals ignite traditional iron cannons, filling the valley with gunpowder smoke and thunderous echoes."
    },
    el: {
      title: "Εκρηκτικό Πάσχα",
      description: "Ζήστε έναν από τους πιο εντυπωσιακούς εορτασμούς του Πάσχα στην Ελλάδα. Στο χωριό Στενιές, το έθιμο «Μάσκουλα» δημιουργεί ένα μοναδικό θέαμα. Κατά τη διάρκεια της λειτουργίας, οι ντόπιοι πυροδοτούν παραδοσιακά σιδερένια κανόνια, γεμίζοντας την κοιλάδα με καπνό και εκκωφαντικούς ήχους."
    },
    image: "/easter.jpg",
    reverse: false
  },
  {
    en: {
      title: "Hiking & Nature",
      description: "A hiker’s paradise. Andros features a vast network of ancient paths certified by European standards (Andros Routes). Explore lush ravines, running waterfalls, old stone bridges, and watermills. We can guide you to the best trails starting right from our doorstep."
    },
    el: {
      title: "Πεζοπορία & Φύση",
      description: "Ένας παράδεισος για τους πεζοπόρους. Η Άνδρος διαθέτει ένα τεράστιο δίκτυο αρχαίων μονοπατιών πιστοποιημένο με ευρωπαϊκά πρότυπα (Andros Routes). Εξερευνήστε καταπράσινες χαράδρες, καταρράκτες, πέτρινα γεφύρια και νερόμυλους. Μπορούμε να σας καθοδηγήσουμε στα καλύτερα μονοπάτια που ξεκινούν δίπλα μας."
    },
    image: "/5159.jpg",
    reverse: true
  },
  {
    en: {
      title: "Gastronomy",
      description: "A culinary journey. Don't leave without tasting the traditional 'Fourtalia' (omelet with local sausage), the sharp local cheeses, and the famous spoon sweets. Andros offers a rich gastronomic tradition that perfectly blends Cycladic flavors with mainland influences."
    },
    el: {
      title: "Γαστρονομία",
      description: "Ένα γαστρονομικό ταξίδι. Μην φύγετε χωρίς να δοκιμάσετε την παραδοσιακή «Φουρτάλια» (ομελέτα με ντόπια λουκάνικα), τα πικάντικα τυριά και τα περίφημα γλυκά του κουταλιού. Η Άνδρος προσφέρει μια πλούσια γαστρονομική παράδοση που συνδυάζει την κυκλαδίτικη απλότητα με τις εκλεκτές πρώτες ύλες της ανδριώτικης γης."
    },
    image: "/fourtalia.jpg",
    reverse: false
  }
];

export default function ExperiencePage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const handleLangChange = (e: any) => setLang(e.detail);
    window.addEventListener("langChange", handleLangChange);
    setLang(document.documentElement.lang || "en");
    return () => window.removeEventListener("langChange", handleLangChange);
  }, []);

  const t = {
    en: {
      heroTitle: "Discover Andros",
      heroSub: "An island of elegance, hidden gems, and untouched beauty.",
      expLabel: "Experience",
      ctaTitle: "Unlock the",
      ctaSpan: "Hidden Andros",
      ctaDesc: "Escape the ordinary. Access our curated map of secluded beaches and authentic spots not found in guidebooks.",
      ctaButton: "GET THE EXCLUSIVE LIST"
    },
    el: {
      heroTitle: "Ανακαλύψτε την Άνδρο",
      heroSub: "Ένα νησί αρχοντιάς, κρυμμένων θησαυρών και ανέγγιχτης ομορφιάς.",
      expLabel: "Εμπειρία",
      ctaTitle: "Ξεκλειδώστε την",
      ctaSpan: "Κρυφή Άνδρο",
      ctaDesc: "Αποδράστε από τα συνηθισμένα. Αποκτήστε πρόσβαση στον δικό μας χάρτη με απόκρυφες παραλίες και αυθεντικά σημεία που δεν υπάρχουν σε ταξιδιωτικούς οδηγούς.",
      ctaButton: "ΠΑΡΤΕ ΤΗΝ ΑΠΟΚΛΕΙΣΤΙΚΗ ΛΙΣΤΑ"
    }
  }[lang === "el" ? "el" : "en"];

  return (
    <main className="min-h-screen bg-[#fafaf9]">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="/androshero3.jpg"
          alt="Andros Island"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center px-4 mt-10">
          <Reveal>
            <h1 key={lang + "h1"} className="text-5xl md:text-8xl font-display text-white mb-4 drop-shadow-2xl shadow-black tracking-tight">
              {t.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p key={lang + "hsub"} className="text-white/95 text-lg md:text-2xl max-w-3xl mx-auto font-sans font-light tracking-wide drop-shadow-md text-center leading-relaxed">
              {t.heroSub}
            </p>
          </Reveal>
        </div>
      </div>

      {/* --- CONTENT SECTIONS --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">
        {experiencesData.map((item, index) => {
          const content = lang === "el" ? item.el : item.en;
          return (
            <div key={index} className={`flex flex-col md:flex-row gap-12 items-center ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <Reveal width="100%">
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-700 border-4 border-white group">
                    <Image
                      src={item.image}
                      alt={content.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-[1.5s]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </Reveal>
              </div>

              <div className="w-full md:w-1/2 space-y-6">
                <Reveal delay={0.2}>
                  <span key={lang + index + "l"} className="text-olive-700 font-bold tracking-widest text-xs uppercase mb-2 block">
                    {t.expLabel} {index + 1}
                  </span>
                  <h2 key={lang + index + "t"} className="text-4xl md:text-5xl font-display text-stone-900 leading-tight pb-2">
                    {content.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.3}>
                  <p key={lang + index + "d"} className="text-stone-600 text-lg leading-relaxed font-sans pb-2 font-light">
                    {content.description}
                  </p>
                </Reveal>
                <Reveal delay={0.4}>
                  <div className="h-1 w-20 bg-olive-500 mt-6"></div>
                </Reveal>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* --- LEAD MAGNET SECTION --- */}
      <section className="py-20 bg-stone-900 px-6 text-center"> 
        <div className="max-w-3xl mx-auto">
          <h2 key={lang + "cta-h"} className="text-3xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
            {t.ctaTitle} <span className="text-[#25D366]">{t.ctaSpan}</span>
          </h2>
          <p key={lang + "cta-p"} className="text-stone-300 mb-10 text-lg leading-relaxed font-light">
            {t.ctaDesc}
          </p>

          <div className="flex justify-center">
            <a
              href={`https://wa.me/306972127884?text=${lang === "el" ? "Γεια σας! Ενδιαφέρομαι για τον αποκλειστικό οδηγό της Άνδρου." : "Hi! I am interested in the exclusive guide for Andros."}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-sm font-bold tracking-widest uppercase rounded-full shadow-xl hover:bg-[#1da851] hover:scale-105 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              {t.ctaButton}
            </a>
          </div>
        </div>
      </section>
      
    </main>
  );
}