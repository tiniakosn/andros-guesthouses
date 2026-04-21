// translations.ts
// Κεντρικό dictionary για όλο το site.
// Χρήση: import { t } from "@/translations"; → t.el.nav.home

export type Lang = "el" | "en";

export const t = {
  en: {
    nav: {
      home: "Home",
      rooms: "Rooms",
      experience: "Experience",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      welcome: "Welcome to Chora, Andros",
      title: "Andros Guesthouses",
      subtitle:
        "Boutique Accommodation in Andros Chora. Your private stone sanctuary with Aegean Sea views.",
      viewRooms: "View Our Rooms",
      experience: "The Andros Experience",
    },
    about: {
      tag: "Our Story",
      title: "A Home in the Heart of Chora",
      p1: "Nestled in the historic Neimporio neighbourhood of Chora, Andros Guesthouses offers an intimate escape where Cycladic tradition meets contemporary comfort.",
      p2: "Each of our three handcrafted suites tells a story — from the modern Aegean Studio to the family-friendly Garden Suite and the panoramic Grand Residence.",
      cta: "Explore Our Rooms",
    },
    rooms: {
      tag: "Accommodations",
      title: "Our Rooms",
      from: "From",
      night: "/ night",
      guests: "Guests",
      details: "View Details",
    },
    amenities: {
      tag: "Amenities",
      title: "Everything You Need",
    },
    diary: {
      tag: "Andros Insider",
      title: "Andros Diary",
      back: "Back to Home",
    },
    contact: {
      tag: "Get in Touch",
      title: "Contact & Booking",
      subtitle:
        "Located in Neimporio, just a 5-minute walk from the beach and the main street of Chora.",
      address: "Neimporio, Chora Andros",
      directions: "Get Directions",
      formTitle: "Send a Message",
      formSubtitle: "We usually respond within 24 hours.",
      name: "Name",
      namePlaceholder: "Your full name",
      email: "Email",
      emailPlaceholder: "email@example.com",
      checkIn: "Check In",
      checkOut: "Check Out",
      message: "Message",
      messagePlaceholder: "Tell us about your trip...",
      send: "Send Request",
      sending: "Sending...",
      sent: "Sent",
      successMsg: "Message received! Thank you.",
      errorMsg: "Error sending message. Please try again.",
    },
    footer: {
      tagline: "Your next escape starts here.",
      description:
        "Book directly through our website for the best rates and exclusive benefits.",
      bookNow: "Book Now",
      explore: "Explore",
      contact: "Contact",
      address: "Neimporio, Chora Andros",
      rights: "All rights reserved.",
      madeBy: "Handcrafted by",
    },
    cookie: {
      message:
        "We use cookies to improve your experience. By continuing, you accept our",
      policy: "cookie policy",
      accept: "Accept",
      decline: "Decline",
    },
    whatsapp: {
      chat: "Chat with us!",
    },
  },
  el: {
    nav: {
      home: "Αρχική",
      rooms: "Δωμάτια",
      experience: "Εμπειρία",
      contact: "Επικοινωνία",
      bookNow: "Κράτηση",
    },
    hero: {
      welcome: "Καλώς ήρθατε στη Χώρα της Άνδρου",
      title: "Andros Guesthouses",
      subtitle:
        "Boutique Διαμονή στη Χώρα της Άνδρου. Το ιδιωτικό σας πέτρινο καταφύγιο με θέα στο Αιγαίο.",
      viewRooms: "Δείτε τα Δωμάτια",
      experience: "Η Εμπειρία στην Άνδρο",
    },
    about: {
      tag: "Η Ιστορία μας",
      title: "Ένα Σπίτι στην Καρδιά της Χώρας",
      p1: "Στη γειτονιά Νειμποριό της Χώρας, τα Andros Guesthouses προσφέρουν μια οικεία απόδραση όπου η κυκλαδική παράδοση συναντά τη σύγχρονη άνεση.",
      p2: "Καθένα από τα τρία χειροποίητα δωμάτιά μας αφηγείται μια ιστορία — από το μοντέρνο Aegean Studio έως την οικογενειακή Garden Suite και το πανοραμικό Grand Residence.",
      cta: "Δείτε τα Δωμάτιά μας",
    },
    rooms: {
      tag: "Καταλύματα",
      title: "Τα Δωμάτιά μας",
      from: "Από",
      night: "/ νύχτα",
      guests: "Επισκέπτες",
      details: "Περισσότερα",
    },
    amenities: {
      tag: "Παροχές",
      title: "Όλα όσα χρειάζεστε",
    },
    diary: {
      tag: "Οδηγός Άνδρου",
      title: "Andros Diary",
      back: "Επιστροφή στην Αρχική",
    },
    contact: {
      tag: "Επικοινωνία",
      title: "Επικοινωνία",
      subtitle:
        "Στο Νειμποριό, μόλις 5 λεπτά με τα πόδια από την παραλία και τον κεντρικό πεζόδρομο της Χώρας.",
      address: "Νειμποριό, Χώρα Άνδρου",
      directions: "Οδηγίες Χάρτη",
      formTitle: "Επικοινωνήστε μαζί μας",
      formSubtitle: "Απαντάμε συνήθως εντός 24 ωρών.",
      name: "Ονοματεπώνυμο",
      namePlaceholder: "Το όνομά σας",
      email: "Email",
      emailPlaceholder: "email@example.com",
      checkIn: "Άφιξη",
      checkOut: "Αναχώρηση",
      message: "Μήνυμα",
      messagePlaceholder: "Πείτε μας για το ταξίδι σας...",
      send: "Αποστολή",
      sending: "Αποστολή...",
      sent: "Εστάλη",
      successMsg: "Το μήνυμα ελήφθη! Ευχαριστούμε.",
      errorMsg: "Σφάλμα αποστολής. Παρακαλώ δοκιμάστε ξανά.",
    },
    footer: {
      tagline: "Η επόμενη απόδρασή σας ξεκινά εδώ.",
      description:
        "Κάντε κράτηση απευθείας για τις καλύτερες τιμές και αποκλειστικά οφέλη.",
      bookNow: "Κράτηση",
      explore: "Εξερεύνηση",
      contact: "Επικοινωνία",
      address: "Νειμποριό, Χώρα Άνδρου",
      rights: "Με επιφύλαξη παντός δικαιώματος.",
      madeBy: "Φτιαγμένο από τον",
    },
    cookie: {
      message:
        "Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας. Συνεχίζοντας, αποδέχεστε την",
      policy: "πολιτική cookies",
      accept: "Αποδοχή",
      decline: "Απόρριψη",
    },
    whatsapp: {
      chat: "Μιλήστε μαζί μας!",
    },
  },
} as const;

// Helper: παίρνει το σωστό dictionary με βάση το lang param
export function getT(lang: Lang) {
  return t[lang];
}