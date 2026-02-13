"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";

const DIARY_CONTENT = {
  el: {
    "chora-and-wind": {
      tag: "KNOW-HOW",
      title: "Η Χώρα & ο Άνεμος: Οδηγός Επιβίωσης",
      subtitle: "Πού να κρυφτείτε από τα μελτέμια και τι να δείτε στην αρχοντική πρωτεύουσα.",
      image: "/images/chora-guide-v2.webp",
      content: `Στη Χώρα της Άνδρου, ο αέρας δεν είναι εχθρός, είναι κομμάτι της ταυτότητάς μας. Όταν ο βοριάς επιμένει, εμείς οι Χωραΐτες δίνουμε ραντεβού στο Νειμποριό —ακριβώς μπροστά στα πόδια μας— ή στα Πίσω Γυαλιά. Αν έχετε όρεξη για μια μικρή βόλτα, οι Αποθήκες και η Χρυσή Άμμος είναι οι ιδανικές λύσεις για να βρείτε γαλήνια νερά.

      Μέσα στην πόλη, η εμπειρία είναι κινηματογραφική. Ξεκινήστε από τον Αφανή Ναύτη, περιπλανηθείτε στα στενά της αγοράς και κάντε μια στάση στα παγκόσμιας κλάσης μουσεία μας: το Μουσείο Σύγχρονης Τέχνης και το Αρχαιολογικό.

      Insider Tips:
      • Απόγευμα στη Χώρα: Κατεβείτε στον Αφανή την ώρα που πέφτει ο ήλιος. Είναι η στιγμή που η αρχοντιά της Άνδρου λάμπει περισσότερο.
      • Μοναστήρια: Ανηφορίστε προς την Αγία Μαρίνα ή τη Μονή Παναχράντου για την απόλυτη ηρεμία και θέα.`
    },
    "local-flavors": {
      tag: "GASTRONOMY",
      title: "Γεύση Άνδρου: Από το Νειμποριό στην Αγορά",
      subtitle: "Οι δικές μας στάσεις για αυθεντική φρουτάλια, θαλασσινά και γλυκά.",
      image: "/images/food-guide.webp",
      content: `Όταν μας ρωτάνε πού να φάνε στην Άνδρο, ξεκινάμε από τα στέκια που ξέρουμε και εμπιστευόμαστε χρόνια.

      Στον πεζόδρομο στο Νειμποριό, ο Μαδούρης είναι κλασική αξία για φαγητό δίπλα στο κύμα, ενώ ο Νόνας είναι η στάση σας για φρέσκα θαλασσινά. Ανεβαίνοντας στην Αγορά (τον κεντρικό πεζόδρομο), ο Πλάτανος και η Νοσταλγία είναι ιδανικά για ποικιλίες και ουζάκι κάτω από τη σκιά. Για κάτι πιο προσεγμένο, η Σκαλάκια και η Ενδοχώρα προσφέρουν εξαιρετικά πιάτα.

      Μην φύγετε χωρίς να δοκιμάσετε την παραδοσιακή μας Φρουτάλια και τα ζαχαροπλαστεία στην Αγορά για τα περίφημα αμυγδαλωτά και τις παραδοσιακές τους πάστες.

      Insider Tip: Αν βγείτε έξω από τη Χώρα, ο Κόσσης στον Άνω Φελλό για κρέας και ο Σταμάτης στο Μπατσί είναι εγγυημένες επιλογές.`
    },
    "secret-beaches": {
      tag: "NATURE",
      title: "Παραλίες κοντά στη Χώρα & Μυστικά",
      subtitle: "Από το κινηματογραφικό Συνέτι μέχρι το απόκρημνο Λύδι.",
      image: "/images/beaches-guide.webp",
      content: `Η Άνδρος έχει παραλίες για κάθε γούστο, αρκεί να ξέρεις πού να πας. Κοντά στη Χώρα, οι πιο άμεσες επιλογές είναι το Παραπόρτι, το Νειμποριό και τα Γυαλιά (Μπροστά και Πίσω).

      Αν ψάχνετε κάτι πραγματικά ιδιαίτερο, το Συνέτι είναι απαραίτητη στάση. Είναι η παραλία με τα βαθιά νερά και τις σπηλιές όπου γυρίστηκαν σκηνές από την ταινία "Μικρά Αγγλία". Η άγρια ομορφιά του τοπίου θα σας μαγέψει.

      Για τους λάτρεις της απομόνωσης, προτείνουμε το Λύδι. Θα χρειαστεί να κατεβείτε μια πλαγιά (έχει λίγη πεζοπορία), αλλά η ησυχία και τα κρυστάλλινα νερά θα σας αποζημιώσουν. Μην ξεχάσετε να πάρετε νερό μαζί σας!`
    }
  },
  en: {
  "chora-and-wind": {
    tag: "KNOW-HOW",
    title: "Chora & The Wind: A Survivor's Guide",
    subtitle: "Where to hide from the meltemi and how to experience the noble capital like a local.",
    image: "/images/chora-guide-v2.webp",
    content: `In Chora, the wind isn't an enemy; it’s an essential part of our island's soul. When the strong North wind (meltemi) kicks in, we locals don't stay home—we simply head to our "wind-shelters." 

    Your best bets for a calm swim are **Neimporio** —literally at your doorstep— or the scenic **Piso Gialia**. If you’re up for a short drive, **Apothikes** and **Golden Sand** (Chrisi Ammos) offer crystal clear, tranquil waters even on the windiest days.

    The town itself offers a cinematic, aristocratic experience. Start your walk from the **Invisible Sailor** square, wander through the marble-paved market alleys, and make sure to stop at our world-class museums: the **Museum of Contemporary Art** and the **Archaeological Museum**.

    **Insider Tips:**
    • **Lidi Beach:** For the adventurous souls, the hike down the slope reveals one of the most secluded and quiet spots on the island.
    • **Sineti:** The bay that "starred" in the movie 'Little England'. Its wild beauty and mysterious sea caves are unforgettable.
    • **Evening Magic:** Walk down to the main square at sunset. This is when the noble architecture of Chora truly shines.`
  },
  "local-flavors": {
    tag: "GASTRONOMY",
    title: "Taste of Andros: From Neimporio to the Market",
    subtitle: "Our personal recommendations for authentic 'froutalia', fresh seafood, and local treats.",
    image: "/images/food-guide.webp",
    content: `When guests ask us where to eat, we point them to the spots we’ve trusted for generations. Andros' cuisine is all about simple, high-quality local ingredients.

    Down at the **Neimporio promenade**, right by the waves, **Madouris** is a classic choice for traditional dishes, while **Nonas** is the go-to place for fresh seafood and creative appetizers. 

    As you move up to the **Main Market (Agora)**, the vibe changes. Under the cool shade of the alleys, **Platanos** and **Nostalgia** are perfect for an afternoon Ouzo with a variety of small plates ("poikilies"). For a more refined dining experience that blends tradition with modern touches, **Skalakia** and **Endochora** are absolute must-visits.

    Don't leave without trying our signature dish, **Froutalia** — a slow-cooked omelet with local sausages and potatoes. For dessert, the pastry shops in the Agora offer famous **almond sweets** (amygdalota) and traditional "pastes" that have been local favorites for decades.

    **Insider Tip:** If you venture outside Chora, **Kossis** in Ano Fellos is a legendary meat-lover's paradise, and **Stamatis** in Batsi is a guarantee for well-cooked, authentic Greek food.`
  },
  "secret-beaches": {
    tag: "NATURE",
    title: "Beaches Near Chora & Hidden Secrets",
    subtitle: "From the cinematic Sineti to the rugged beauty of Lidi.",
    image: "/images/beaches-guide.webp",
    content: `Andros is an island of endless coastlines, but the best spots often require a bit of local knowledge. Near Chora, your most convenient options for a quick dip are **Paraporti**, **Neimporio**, and the twin beaches of **Gialia** (Front and Back).

    However, if you are looking for something truly cinematic, **Sineti** is a must. Known for its deep turquoise waters and impressive sea caves, it served as the backdrop for the famous Greek film "Little England." Its wild, untamed beauty is breathtaking.

    For those seeking total seclusion, we recommend **Lidi**. It requires a bit of a hike down a steep path, but the absolute silence and the feeling of having the Aegean all to yourself is the ultimate reward. Just remember to bring your own water and supplies!

    **Explore More:**
    Beyond the sand, visit the **Tower of Agios Petros** or the ancient settlement of **Strofilas** —the largest Neolithic settlement in the Aegean— to see a different side of our island's history.`
  }
}
};

export default function DiaryPage() {
  const params = useParams();
  const lang = (params?.lang as "el" | "en") || "el";
  const slug = params?.slug as string;

  // QA Fix: Περιμένουμε να υπάρχουν τα params πριν κάνουμε το check
  if (!slug || !lang) return null; 

  const article = DIARY_CONTENT[lang]?.[slug as keyof typeof DIARY_CONTENT['el']];

  // Αν όντως το slug δεν υπάρχει στα δεδομένα μας, τότε μόνο δείξε 404
  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[65vh] w-full overflow-hidden">
        <Image 
          src={article.image} 
          alt={article.title} 
          fill 
          className="object-cover" 
          priority 
          fetchPriority="high" // ΑΠΑΡΑΙΤΗΤΟ ΓΙΑ ΤΟ LCP
          quality={80}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="max-w-4xl"
          >
            <span className="text-lime-400 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4 block">
              {article.tag}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light italic">
              {article.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 bg-white relative z-10">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-stone prose-lg leading-relaxed text-stone-800 font-normal"
            dangerouslySetInnerHTML={{ 
              __html: article.content
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Μετατρέπει τα **Bold** σε <strong>
                .replace(/\n/g, '<br />') // Μετατρέπει τις αλλαγές γραμμής σε <br />
            }} 
          />

          {/* Navigation Section */}
          <div className="pt-10 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              href="/" 
                className="group flex items-center gap-3 text-stone-900 font-bold text-[10px] uppercase tracking-[0.2em] transition-all"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span> 
              {lang === 'el' ? "Αρχική" : "Home"}
          </Link>

            <Link 
              href={`/${lang}/diary`} 
              className="px-8 py-3 border border-stone-200 rounded-full text-stone-800 font-bold text-[10px] uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all shadow-sm"
            >
              {lang === 'el' ? "Δείτε όλα τα άρθρα" : "View All Articles"}
            </Link>
            
            <div className="text-stone-300 text-[10px] tracking-widest uppercase font-bold italic">
              Andros Insider Guide
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}