// lib/rooms.ts
// Single source of truth για τα δεδομένα των δωματίων.
// Import αυτό το αρχείο από Server Components, Client Components, και generateMetadata.

export type Lang = "el" | "en";

export interface RoomContent {
  seoTitle: string;
  metaDesc: string;
  subtitle: string;
  size: string;
  guests: string;
  bed: string;
  description: string;
  features: string[];
  sidebar: {
    back: string;
    start: string;
    night: string;
    guests: string;
    beds: string;
    checkin: string;
    button: string;
    guarantee: string;
    experience: string;
    highlights: string;
    gallery: string;
  };
}

export interface Room {
  slug: string;
  name: string;
  price: string;
  images: string[];
  el: RoomContent;
  en: RoomContent;
}

export const roomsData: Room[] = [
  {
    slug: "aegean-studio",
    name: "Aegean Studio",
    price: "50€",
    images: [
      "/images/no5.6.webp",
      "/images/no5.1.webp",
      "/images/no5.2.webp",
      "/images/no5.3.webp",
    ],
    el: {
      seoTitle: "Aegean Studio | Ενοικιαζόμενα Δωμάτια με Θέα Χώρα Άνδρος",
      metaDesc:
        "Διαμονή στη Χώρα της Άνδρου στο Aegean Studio. Μοντέρνο δωμάτιο με θέα θάλασσα, πλήρη κουζίνα και πρόσβαση στα Andros Routes.",
      subtitle: "Μοντέρνο δωμάτιο με θέα θάλασσα στη Χώρα",
      size: "25 τ.μ.",
      guests: "2-3 Άτομα",
      bed: "1 Διπλό Κρεβάτι",
      description:
        "Νιώστε τον παλμό της Χώρας σε έναν χώρο σχεδιασμένο για τον σύγχρονο ταξιδιώτη. Στον 1ο όροφο, το Aegean Studio ορίζει το 'Smart Living'. Φωτεινό, μοντέρνο και πλήρως εξοπλισμένο, σας επιτρέπει να ζήσετε σαν ντόπιος.",
      features: [
        "Πλήρης Κουζίνα & Φούρνος",
        "Πλυντήριο Ρούχων",
        "Ιδιωτικό Μπαλκόνι",
        "Θέα Βουνό & Λιμάνι",
        "Μηχανή Nespresso",
        "Smart TV & WiFi",
      ],
      sidebar: {
        back: "ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ",
        start: "Από",
        night: "/νύχτα",
        guests: "Επισκέπτες:",
        beds: "Κρεβάτια:",
        checkin: "Check-in:",
        button: "Κάντε Κράτηση",
        guarantee: "Εγγύηση Καλύτερης Τιμής",
        experience: "Η Εμπειρία",
        highlights: "Χαρακτηριστικά",
        gallery: "Φωτογραφίες",
      },
    },
    en: {
      seoTitle: "Aegean Studio | Sea View Accommodation Chora Andros",
      metaDesc:
        "Stay in Chora Andros at Aegean Studio. Modern room with sea view, full kitchen, and easy access to Andros Routes hiking trails.",
      subtitle: "Modern Sea View Studio in Chora",
      size: "25 m²",
      guests: "2-3 Guests",
      bed: "1 Double Bed",
      description:
        "Experience the pulse of Chora in a space designed for modern travelers. Located on the 1st floor, the Aegean Studio defines 'Smart Living'. Bright, modern, and fully equipped, it allows you to live like a local.",
      features: [
        "Full Kitchen & Oven",
        "Washing Machine",
        "Private Balcony",
        "Mountain & Harbor View",
        "Nespresso Machine",
        "Smart TV & WiFi",
      ],
      sidebar: {
        back: "BACK TO HOME",
        start: "Starting from",
        night: "/night",
        guests: "Guests:",
        beds: "Beds:",
        checkin: "Check-in:",
        button: "Book Your Stay",
        guarantee: "Best Rate Guarantee",
        experience: "The Experience",
        highlights: "Highlights",
        gallery: "Gallery",
      },
    },
  },
  {
    slug: "garden-suite",
    name: "Garden Suite",
    price: "60€",
    images: [
      "/images/balcony1.webp",
      "/images/no2.2.webp",
      "/images/no2.3.webp",
    ],
    el: {
      seoTitle: "Garden Suite | Διαμονή με Ιδιωτική Αυλή Χώρα Άνδρος",
      metaDesc:
        "Garden Suite στη Χώρα της Άνδρου. Ιδανικό για οικογένειες, με άμεση πρόσβαση σε δροσερή ιδιωτική αυλή.",
      subtitle: "Οικογενειακή σουίτα με δροσερή ιδιωτική αυλή",
      size: "40 τ.μ.",
      guests: "2-5 Άτομα",
      bed: "2 Διπλά + Καναπές",
      description:
        "Η απόλυτη αίσθηση εξοχικής κατοικίας. Στο ισόγειο, η Garden Suite προσφέρει την πολυτέλεια της άνεσης και την άμεση επαφή με τη φύση. Ιδανική για οικογένειες ή παρέες.",
      features: [
        "2 Διπλά Κρεβάτια",
        "Πρόσβαση σε Ιδιωτική Αυλή",
        "Μεγάλη Οικογενειακή Κουζίνα",
        "Πλυντήριο Ρούχων",
        "Ευρύχωρο Καθιστικό",
        "Εύκολη Πρόσβαση (Ισόγειο)",
      ],
      sidebar: {
        back: "ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ",
        start: "Από",
        night: "/νύχτα",
        guests: "Επισκέπτες:",
        beds: "Κρεβάτια:",
        checkin: "Check-in:",
        button: "Κάντε Κράτηση",
        guarantee: "Εγγύηση Καλύτερης Τιμής",
        experience: "Η Εμπειρία",
        highlights: "Χαρακτηριστικά",
        gallery: "Φωτογραφίες",
      },
    },
    en: {
      seoTitle: "Garden Suite | Family Accommodation Chora Andros",
      metaDesc:
        "Garden Suite in Chora Andros. Perfect for families, featuring direct access to a cool private courtyard.",
      subtitle: "Family Suite with Private Courtyard",
      size: "40 m²",
      guests: "2-5 Guests",
      bed: "2 Doubles + Sofa",
      description:
        "The ultimate summer home feeling. Located on the ground floor, the Garden Suite offers the luxury of comfort and direct connection with nature. Ideal for families or groups.",
      features: [
        "2 Double Beds",
        "Private Courtyard Access",
        "Large Family Kitchen",
        "Washing Machine",
        "Spacious Living Area",
        "Easy Access (Ground Floor)",
      ],
      sidebar: {
        back: "BACK TO HOME",
        start: "Starting from",
        night: "/night",
        guests: "Guests:",
        beds: "Beds:",
        checkin: "Check-in:",
        button: "Book Your Stay",
        guarantee: "Best Rate Guarantee",
        experience: "The Experience",
        highlights: "Highlights",
        gallery: "Gallery",
      },
    },
  },
  {
    slug: "grand-residence",
    name: "Grand Residence",
    price: "70€",
    images: [
      "/images/no5.5.webp",
      "/images/no5.4.webp",
      "/images/no5.7.webp",
    ],
    el: {
      seoTitle: "Grand Residence | Penthouse με Πανοραμική Θέα Άνδρος",
      metaDesc:
        "Το Grand Residence προσφέρει πανοραμική θέα στο λιμάνι της Άνδρου. Πολυτελής διαμονή για 4+ άτομα.",
      subtitle: "Πολυτελές ρετιρέ με πανοραμική θέα στο λιμάνι",
      size: "55 τ.μ.",
      guests: "4+ Ενήλικες",
      bed: "Υπνοδωμάτιο + Σαλόνι",
      description:
        "Η ναυαρχίδα της φιλοξενίας μας. Στον 2ο όροφο, η ιδιωτικότητα συναντά την πανοραμική θέα. Ένα πραγματικό σπίτι μακριά από το σπίτι, με γενναιόδωρους χώρους που φιλοξενούν άνετα 4+ άτομα.",
      features: [
        "Πανοραμική Βεράντα",
        "Ευρύχωρο Σαλόνι",
        "Ξεχωριστό Υπνοδωμάτιο",
        "Πλήρης Οικιακός Εξοπλισμός",
        "Πλυντήριο & Σίδερο",
        "Προνομιακή Θέα Λιμάνι",
      ],
      sidebar: {
        back: "ΠΙΣΩ ΣΤΗΝ ΑΡΧΙΚΗ",
        start: "Από",
        night: "/νύχτα",
        guests: "Επισκέπτες:",
        beds: "Κρεβάτια:",
        checkin: "Check-in:",
        button: "Κάντε Κράτηση",
        guarantee: "Εγγύηση Καλύτερης Τιμής",
        experience: "Η Εμπειρία",
        highlights: "Χαρακτηριστικά",
        gallery: "Φωτογραφίες",
      },
    },
    en: {
      seoTitle: "Grand Residence | Penthouse Accommodation Chora Andros",
      metaDesc:
        "Grand Residence offers panoramic views of Andros harbor. Luxury stay for 4+ guests in the heart of Chora.",
      subtitle: "Luxury Penthouse with Panoramic Harbor View",
      size: "55 m²",
      guests: "4+ Adults",
      bed: "Bedroom + Living Room",
      description:
        "Our hospitality flagship. Located on the 2nd floor, privacy meets panoramic views. A true home away from home, with generous spaces comfortably hosting 4+ guests.",
      features: [
        "Panoramic Veranda",
        "Spacious Living Room",
        "Separate Bedroom",
        "Full Household Equipment",
        "Washing Machine & Iron",
        "Premium Harbor View",
      ],
      sidebar: {
        back: "BACK TO HOME",
        start: "Starting from",
        night: "/night",
        guests: "Guests:",
        beds: "Beds:",
        checkin: "Check-in:",
        button: "Book Your Stay",
        guarantee: "Best Rate Guarantee",
        experience: "The Experience",
        highlights: "Highlights",
        gallery: "Gallery",
      },
    },
  },
];

// Helper: βρες δωμάτιο από slug — επιστρέφει undefined αν δεν υπάρχει
export function getRoomBySlug(slug: string): Room | undefined {
  return roomsData.find((r) => r.slug === slug);
}

// Helper: όλα τα slugs — χρήσιμο για generateStaticParams
export function getAllRoomSlugs(): string[] {
  return roomsData.map((r) => r.slug);
}