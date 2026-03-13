import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const DIARY_CONTENT = {
  el: {
    "chora-and-wind": {
      tag: "KNOW-HOW",
      title: "Η Χώρα & ο Άνεμος: Οδηγός Επιβίωσης",
      subtitle: "Πού να κρυφτείτε από τα μελτέμια και τι να δείτε στην αρχοντική πρωτεύουσα.",
      image: "/images/chora-guide-v2.webp",
      content: `Στη Χώρα της Άνδρου, ο αέρας δεν είναι εχθρός, είναι κομμάτι της ταυτότητάς μας. Όταν ο βοριάς επιμένει, εμείς οι Χωραΐτες δίνουμε ραντεβού στο Νειμποριό —ακριβώς μπροστά στα πόδια μας— ή στα Πίσω Γυαλιά. Αν έχετε όρεξη για μια μικρή βόλτα, οι Αποθήκες και η Χρυσή Άμμος είναι οι ιδανικές λύσεις για να βρείτε γαλήνια νερά.<br/><br/>Μέσα στην πόλη, η εμπειρία είναι κινηματογραφική. Ξεκινήστε από τον Αφανή Ναύτη, περιπλανηθείτε στα στενά της αγοράς και κάντε μια στάση στα παγκόσμιας κλάσης μουσεία μας: το Μουσείο Σύγχρονης Τέχνης και το Αρχαιολογικό.<br/><br/>**Insider Tips:**<br/>• Απόγευμα στη Χώρα: Κατεβείτε στον Αφανή την ώρα που πέφτει ο ήλιος. Είναι η στιγμή που η αρχοντιά της Άνδρου λάμπει περισσότερο.<br/>• Μοναστήρια: Ανηφορίστε προς την Αγία Μαρίνα ή τη Μονή Παναχράντου για την απόλυτη ηρεμία και θέα.`
    },
    "local-flavors": {
      tag: "GASTRONOMY",
      title: "Γεύση Άνδρου: Από το Νειμποριό στην Αγορά",
      subtitle: "Οι δικές μας στάσεις για αυθεντική φρουτάλια, θαλασσινά και γλυκά.",
      image: "/images/food-guide.webp",
      content: `Όταν μας ρωτάνε πού να φάνε στην Άνδρο, ξεκινάμε από τα στέκια που ξέρουμε και εμπιστευόμαστε χρόνια.<br/><br/>Στον πεζόδρομο στο Νειμποριό, ο Μαδούρης είναι κλασική αξία για φαγητό δίπλα στο κύμα, ενώ ο Νόνας είναι η στάση σας για φρέσκα θαλασσινά. Ανεβαίνοντας στην Αγορά (τον κεντρικό πεζόδρομο), ο Πλάτανος και η Νοσταλγία είναι ιδανικά για ποικιλίες και ουζάκι κάτω από τη σκιά. Για κάτι πιο προσεγμένο, η Σκαλάκια και η Ενδοχώρα προσφέρουν εξαιρετικά πιάτα.<br/><br/>Μην φύγετε χωρίς να δοκιμάσετε την παραδοσιακή μας Φρουτάλια και τα ζαχαροπλαστεία στην Αγορά για τα περίφημα αμυγδαλωτά και τις παραδοσιακές τους πάστες.<br/><br/>**Insider Tip:** Αν βγείτε έξω από τη Χώρα, ο Κόσσης στον Άνω Φελλό για κρέας και ο Σταμάτης στο Μπατσί είναι εγγυημένες επιλογές.`
    },
    "secret-beaches": {
      tag: "NATURE",
      title: "Παραλίες κοντά στη Χώρα & Μυστικά",
      subtitle: "Από το κινηματογραφικό Συνέτι μέχρι το απόκρημνο Λύδι.",
      image: "/images/beaches-guide.webp",
      content: `Η Άνδρος έχει παραλίες για κάθε γούστο, αρκεί να ξέρεις πού να πας. Κοντά στη Χώρα, οι πιο άμεσες επιλογές είναι το Παραπόρτι, το Νειμποριό και τα Γυαλιά (Μπροστά και Πίσω).<br/><br/>Αν ψάχνετε κάτι πραγματικά ιδιαίτερο, το Συνέτι είναι απαραίτητη στάση. Είναι η παραλία με τα βαθιά νερά και τις σπηλιές όπου γυρίστηκαν σκηνές από την ταινία "Μικρά Αγγλία". Η άγρια ομορφιά του τοπίου θα σας μαγέψει.<br/><br/>Για τους λάτρεις της απομόνωσης, προτείνουμε το Λύδι. Θα χρειαστεί να κατεβείτε μια πλαγιά (έχει λίγη πεζοπορία), αλλά η ησυχία και τα κρυστάλλινα νερά θα σας αποζημιώσουν. Μην ξεχάσετε να πάρετε νερό μαζί σας!`
    },
    "athens-to-andros-guide": {
      tag: "TRAVEL GUIDE",
      title: "Πώς θα έρθετε στην Άνδρο από την Αθήνα",
      subtitle: "Ο πλήρης οδηγός για το πιο κοντινό νησί των Κυκλάδων.",
      image: "/images/gavrio-andros-greece.webp",
      content: `Η Άνδρος είναι το ιδανικό νησί για μια γρήγορη, premium απόδραση, ακριβώς επειδή η πρόσβαση είναι πανεύκολη και δεν απαιτεί πολύωρα ταξίδια με πλοίο.<br/><br/>**Από το Αεροδρόμιο στο Λιμάνι της Ραφήνας:**<br/>Το λιμάνι αναχώρησης για την Άνδρο είναι αποκλειστικά η Ραφήνα (όχι ο Πειραιάς). Αν προσγειωθείτε στο Ελευθέριος Βενιζέλος, η Ραφήνα απέχει μόλις 20-30 λεπτά. Μπορείτε να πάρετε ταξί, ιδιωτικό transfer ή το απευθείας λεωφορείο (ΚΤΕΛ) που αναχωρεί ακριβώς έξω από το επίπεδο των Αφίξεων.<br/><br/>**Το Ταξίδι με το Πλοίο:**<br/>Η διαδρομή Ραφήνα - Γαύριο (το λιμάνι της Άνδρου) διαρκεί μόλις 2 ώρες. Τα δρομολόγια είναι πολύ συχνά (3-5 φορές τη μέρα), κυρίως με την Fast Ferries και την Golden Star Ferries. Το ταξίδι είναι άνετο και συνήθως ήπιο.<br/><br/>**Φτάνοντας στην Άνδρο:**<br/>Μόλις φτάσετε στο Γαύριο, η Χώρα της Άνδρου απέχει περίπου 45 λεπτά οδικώς. Προτείνουμε να νοικιάσετε αυτοκίνητο κατευθείαν στο λιμάνι, καθώς το νησί είναι μεγάλο και θα το χρειαστείτε για να εξερευνήσετε τα μονοπάτια και τις παραλίες. Εναλλακτικά, υπάρχει πάντα σταθμός ταξί κατά την άφιξη του πλοίου.`
    }
  },
  en: {
    "chora-and-wind": {
      tag: "KNOW-HOW",
      title: "Chora & The Wind: A Survivor's Guide",
      subtitle: "Where to hide from the meltemi and how to experience the noble capital like a local.",
      image: "/images/chora-guide-v2.webp",
      content: `In Chora, the wind isn't an enemy; it’s an essential part of our island's soul. When the strong North wind (meltemi) kicks in, we locals don't stay home—we simply head to our "wind-shelters."<br/><br/>Your best bets for a calm swim are **Neimporio** —literally at your doorstep— or the scenic **Piso Gialia**. If you’re up for a short drive, **Apothikes** and **Golden Sand** (Chrisi Ammos) offer crystal clear, tranquil waters even on the windiest days.<br/><br/>The town itself offers a cinematic, aristocratic experience. Start your walk from the **Invisible Sailor** square, wander through the marble-paved market alleys, and make sure to stop at our world-class museums: the **Museum of Contemporary Art** and the **Archaeological Museum**.<br/><br/>**Insider Tips:**<br/>• **Lidi Beach:** For the adventurous souls, the hike down the slope reveals one of the most secluded and quiet spots on the island.<br/>• **Sineti:** The bay that "starred" in the movie 'Little England'. Its wild beauty and mysterious sea caves are unforgettable.<br/>• **Evening Magic:** Walk down to the main square at sunset. This is when the noble architecture of Chora truly shines.`
    },
    "local-flavors": {
      tag: "GASTRONOMY",
      title: "Taste of Andros: From Neimporio to the Market",
      subtitle: "Our personal recommendations for authentic 'froutalia', fresh seafood, and local treats.",
      image: "/images/food-guide.webp",
      content: `When guests ask us where to eat, we point them to the spots we’ve trusted for generations. Andros' cuisine is all about simple, high-quality local ingredients.<br/><br/>Down at the **Neimporio promenade**, right by the waves, **Madouris** is a classic choice for traditional dishes, while **Nonas** is the go-to place for fresh seafood and creative appetizers.<br/><br/>As you move up to the **Main Market (Agora)**, the vibe changes. Under the cool shade of the alleys, **Platanos** and **Nostalgia** are perfect for an afternoon Ouzo with a variety of small plates ("poikilies"). For a more refined dining experience that blends tradition with modern touches, **Skalakia** and **Endochora** are absolute must-visits.<br/><br/>Don't leave without trying our signature dish, **Froutalia** — a slow-cooked omelet with local sausages and potatoes. For dessert, the pastry shops in the Agora offer famous **almond sweets** (amygdalota) and traditional "pastes" that have been local favorites for decades.<br/><br/>**Insider Tip:** If you venture outside Chora, **Kossis** in Ano Fellos is a legendary meat-lover's paradise, and **Stamatis** in Batsi is a guarantee for well-cooked, authentic Greek food.`
    },
    "secret-beaches": {
      tag: "NATURE",
      title: "Beaches Near Chora & Hidden Secrets",
      subtitle: "From the cinematic Sineti to the rugged beauty of Lidi.",
      image: "/images/beaches-guide.webp",
      content: `Andros is an island of endless coastlines, but the best spots often require a bit of local knowledge. Near Chora, your most convenient options for a quick dip are **Paraporti**, **Neimporio**, and the twin beaches of **Gialia** (Front and Back).<br/><br/>However, if you are looking for something truly cinematic, **Sineti** is a must. Known for its deep turquoise waters and impressive sea caves, it served as the backdrop for the famous Greek film "Little England." Its wild, untamed beauty is breathtaking.<br/><br/>For those seeking total seclusion, we recommend **Lidi**. It requires a bit of a hike down a steep path, but the absolute silence and the feeling of having the Aegean all to yourself is the ultimate reward. Just remember to bring your own water and supplies!<br/><br/>**Explore More:**<br/>Beyond the sand, visit the **Tower of Agios Petros** or the ancient settlement of **Strofilas** —the largest Neolithic settlement in the Aegean— to see a different side of our island's history.`
    },
    "athens-to-andros-guide": {
      tag: "TRAVEL GUIDE",
      title: "How to Get to Andros from Athens Airport",
      subtitle: "The ultimate 2026 travel guide to the closest Cycladic island.",
      image: "/images/gavrio-andros-greece.webp",
      content: `Andros is the ultimate destination for an authentic, premium Greek island escape, largely because of how easy it is to reach. As the closest Cycladic island to the Greek capital, you can go from landing at the airport to sipping wine on your private sea-view balcony in just a few hours.<br/><br/>**Step 1: Airport to Rafina Port**<br/>Unlike other islands, ferries to Andros depart exclusively from the Port of Rafina (not Piraeus). Rafina is extremely close to the Athens International Airport (ATH) — just a 20-30 minute drive. You can grab a taxi right outside the arrivals gate, book a private transfer, or take the direct Airport-to-Rafina shuttle bus (KTEL).<br/><br/>**Step 2: The Ferry Ride**<br/>The ferry crossing from Rafina to Gavrio (the port of Andros) takes exactly 2 hours. Ferries run frequently throughout the day (usually 3 to 5 daily departures), operated primarily by Fast Ferries and Golden Star Ferries. The modern vessels offer spacious VIP lounges and open decks to enjoy the Aegean breeze.<br/><br/>**Step 3: Arriving in Andros**<br/>Once you dock at Gavrio, the aristocratic capital (Chora) is a scenic 45-minute drive away. We highly recommend renting a car right at the port upon arrival. Andros is a large, majestic island with famous hiking trails (Andros Routes) and hidden beaches, so having a vehicle is essential for exploring. Alternatively, a taxi rank is always available when ferries arrive.`
    }
  }
};

// 1. ΔΥΝΑΜΙΚΟ SEO: Προσθήκη Canonical & Article Type
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = (DIARY_CONTENT as any)[lang]?.[slug];
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Andros Insider Guide`,
    description: article.subtitle,
    alternates: { 
      canonical: `https://www.androsguesthouses.gr/${lang}/diary/${slug}` 
    },
    openGraph: {
      type: "article",
      images: [article.image],
    }
  };
}

export async function generateStaticParams() {
  const paths: any[] = [];
  Object.keys(DIARY_CONTENT).forEach((lang) => {
    Object.keys((DIARY_CONTENT as any)[lang]).forEach((slug) => {
      paths.push({ lang, slug });
    });
  });
  return paths;
}

export default async function DiaryPage({ params }: any) {
  const { lang, slug } = await params;
  const article = (DIARY_CONTENT as any)[lang]?.[slug];

  if (!article) return notFound();

  // SRE Addition: JSON-LD Schema για τα Articles
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.subtitle,
    "image": `https://www.androsguesthouses.gr${article.image}`,
    "author": {
      "@type": "Organization",
      "name": "Andros Guesthouses"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Andros Guesthouses",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.androsguesthouses.gr/favicon-v4.png"
      }
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Ενσωμάτωση του Schema για την Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative h-[65vh] w-full overflow-hidden">
        <Image 
          src={article.image} 
          alt={article.title} 
          fill 
          className="object-cover" 
          priority 
          fetchPriority="high" // SRE Fix: Επιτάχυνση LCP
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <div className="max-w-4xl">
            <span className="text-lime-400 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase mb-4 block">
              {article.tag}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight drop-shadow-md">
              {article.title}
            </h1>
            {/* SRE Fix: Μετατροπή σε <h2> για On-Page SEO */}
            <h2 className="text-lg md:text-xl text-white/90 font-light italic">
              {article.subtitle}
            </h2>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 bg-white relative z-10">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-stone prose-lg leading-relaxed text-stone-800 font-normal"
            dangerouslySetInnerHTML={{ 
              __html: article.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            }} 
          />

          {/* SRE CONVERSION INJECTOR: Το "Δόλωμα" για κρατήσεις */}
          <div className="mt-16 mb-8 p-10 bg-stone-50 rounded-2xl border border-stone-200 text-center shadow-sm">
            <h3 className="text-2xl font-serif text-stone-900 mb-3">
              {lang === 'el' ? "Ζήστε την εμπειρία από κοντά" : "Experience it yourself"}
            </h3>
            <p className="text-stone-600 font-sans mb-8">
              {lang === 'el' 
                ? "Κλείστε τη διαμονή σας στη Χώρα της Άνδρου και ανακαλύψτε όλα τα μυστικά του νησιού με αφετηρία τα δωμάτιά μας." 
                : "Book your stay in Chora, Andros and discover all the island's secrets directly from our doorstep."}
            </p>
            <Link 
              href="/#rooms" 
              className="inline-block px-10 py-4 bg-stone-900 text-white rounded-full font-bold text-xs uppercase tracking-[0.15em] hover:bg-lime-800 transition-colors shadow-lg hover:-translate-y-1"
            >
              {lang === 'el' ? "ΔΕΙΤΕ ΤΑ ΔΩΜΑΤΙΑ" : "VIEW OUR ROOMS"}
            </Link>
          </div>

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