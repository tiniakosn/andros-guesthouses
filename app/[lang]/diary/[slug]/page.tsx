import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";

const DIARY_CONTENT = {
  el: {
    "andros-routes-guide": {
      tag: "ADVENTURE",
      title: "Μονοπάτια της Άνδρου: Οι καλύτερες διαδρομές",
      subtitle: "Ανακαλύψτε το κορυφαίο δίκτυο πεζοπορίας στην Ευρώπη.",
      image: "/images/hiking-andros.webp",
      content: `Η Άνδρος είναι ο μοναδικός προορισμός στην Ευρώπη που συνδυάζει την κυκλαδίτικη θάλασσα με ένα δίκτυο μονοπατιών πιστοποιημένο με το σήμα "Leading Quality Trails - Best of Europe".<br/><br/>
      **Γιατί να περπατήσετε στην Άνδρο:**<br/>
      • **Ποικιλομορφία:** Θα διασχίσετε πέτρινα γεφύρια, αρχαίους οικισμούς, καταρράκτες και δάση από καστανιές.<br/>
      • **Σήμανση:** Το δίκτυο των 300χλμ είναι πλήρως χαρτογραφημένο και εύκολο στην πλοήγηση.<br/><br/>
      **Οι προτάσεις μας:**<br/>
      • **Διαδρομή 1 (Η Κλασική):** Ξεκινά από τη Χώρα, περνά από τα Λάμυρα και καταλήγει στις πηγές των Μαινήτων. Μια καταπράσινη διαδρομή 2,5 ωρών, ιδανική για αρχάριους.<br/>
      • **Διαδρομή 6 (Η Εντυπωσιακή):** Από τη Βουρκωτή προς την παραλία Άχλα. Θα δείτε το ποτάμι και τον εμβληματικό φάρο της Άχλας. (Δυσκολία: Μέτρια).<br/>
      • **Διαδρομή 2 (Η Δική μας):** Αν μένετε μαζί μας, η διαδρομή προς Αποίκια ξεκινάει λίγα λεπτά από το guesthouse και σας οδηγεί στους καταρράκτες της Πυθάρας.<br/><br/>
      ** Tip:** Προμηθευτείτε έναν χάρτη "Andros Routes" πριν ξεκινήσετε και έχετε πάντα μαζί σας νερό. Η καλύτερη εποχή είναι από Απρίλιο έως Ιούνιο και όλο τον Σεπτέμβριο.`
    },
    "chora-and-wind": {
      tag: "KNOW-HOW",
      title: "Η Χώρα & ο Άνεμος: Οδηγός Επιβίωσης",
      subtitle: "Πού να κρυφτείτε από τα μελτέμια και τι να δείτε στην αρχοντική πρωτεύουσα.",
      image: "/images/chora-guide-v2.webp",
      content: `Πολλοί φοβούνται τον άνεμο στις Κυκλάδες, αλλά στη Χώρα της Άνδρου έχουμε μάθει να ζούμε μαζί του. Η Χώρα είναι χτισμένη πάνω σε μια χερσόνησο που "σκίζει" το Αιγαίο, προσφέροντας μια αρχοντιά που δεν θα βρείτε πουθενά αλλού.<br/><br/>
**Πού να κολυμπήσετε όταν φυσάει:**<br/>
• **Νειμποριό:** Ακριβώς μπροστά από τα πόδια σας. Είναι ο κόλπος που προστατεύεται από τους βοριάδες. Ιδανικός για οικογένειες.<br/>
• **Πίσω Γυάλια:** Ένας μικρός παράδεισος με beach bar, που παραμένει γαλήνιος ακόμα και με 7 μποφόρ.<br/><br/>
**Τι να μην χάσετε στη Χώρα:**<br/>
• **Ο Αφανής Ναύτης:** Το σύμβολο του νησιού στην άκρη της παλιάς πόλης. Η θέα στο Ενετικό Κάστρο και τον φάρο Τουρλίτη είναι μαγική.<br/>
• **Πολιτισμός:** Το Μουσείο Σύγχρονης Τέχνης (Γουλανδρή) φιλοξενεί κάθε καλοκαίρι παγκόσμιας κλάσης εκθέσεις (Picasso, Miro κ.α.).<br/>
• **Η Αγορά:** Ο μαρμαρόστρωτος πεζόδρομος με τα νεοκλασικά καπετανόσπιτα είναι η καρδιά της κοινωνικής ζωής.`
    },
    "local-flavors": {
      tag: "GASTRONOMY",
      title: "Γεύση Άνδρου: Από το Νειμποριό στην Αγορά",
      subtitle: "Οι δικές μας στάσεις για αυθεντική φρουτάλια, θαλασσινά και γλυκά.",
      image: "/images/food-guide.webp",
      content: `Η γαστρονομία της Άνδρου βασίζεται στα φρέσκα προϊόντα των κήπων της και στην πλούσια ναυτική παράδοση. Εδώ το φαγητό είναι ιεροτελεστία.<br/><br/>
**Τα πιάτα που πρέπει να δοκιμάσετε:**<br/>
• **Φρουτάλια:** Η παραδοσιακή ομελέτα με πατάτες και ντόπια λουκάνικα αρωματισμένα με μαντζουράνα. Είναι το σήμα κατατεθέν μας.<br/>
• **Αμυγδαλωτά:** Τα διάσημα γλυκά της Χώρας με ανθόνερο. Θα τα βρείτε στα ιστορικά ζαχαροπλαστεία του πεζόδρομου.<br/><br/>
**Οι στάσεις μας:**<br/>
• **Στη Χώρα:** Για φρέσκο ψάρι ο "Νόνας" στο Νειμποριό και για μαγειρευτά ο "Πλάτανος" και η "Παρέα" στην Αγορά.<br/>
• **Στα χωριά:** Ο "Κόσσης" στον Άνω Φελλό είναι ο ναός του κρέατος, ενώ στον "Σταμάτη" στο Μπατσί θα φάτε την καλύτερη αστακομακαρονάδα.<br/><br/>
**Tip:** Ζητήστε το τοπικό τυρί "βολάκι" ή "μαλακό" με τη σαλάτα σας. Η γεύση είναι ασύγκριτη.`
    },
    "secret-beaches": {
      tag: "NATURE",
      title: "Παραλίες κοντά στη Χώρα & Μυστικά",
      subtitle: "Από το κινηματογραφικό Συνέτι μέχρι το απόκρημνο Λύδι.",
      image: "/images/beaches-guide.webp",
      content: `Η Άνδρος έχει παραλίες για κάθε γούστο. Κοντά στη Χώρα, οι πιο άμεσες επιλογές είναι το Παραπόρτι, το Νειμποριό και τα Γυαλιά (Μπροστά και Πίσω).<br/><br/>Αν ψάχνετε κάτι πραγματικά ιδιαίτερο, το Συνέτι είναι απαραίτητη στάση. Είναι η παραλία με τα βαθιά νερά και τις σπηλιές όπου γυρίστηκαν σκηνές από την ταινία "Μικρά Αγγλία".`
    },
    "athens-to-andros-guide": {
      tag: "TRAVEL GUIDE",
      title: "Πώς θα έρθετε στην Άνδρο από την Αθήνα (2026)",
      subtitle: "Ο πλήρης οδηγός για το πιο κοντινό νησί των Κυκλάδων από το λιμάνι της Ραφήνας.",
      image: "/images/gavrio-andros-greece.webp",
      content: `Η Άνδρος είναι η ιδανική επιλογή για premium απόδραση, καθώς είναι το μοναδικό νησί των Κυκλάδων που απέχει μόλις 2 ώρες από την Αθήνα. Εδώ θα βρείτε όλα όσα πρέπει να γνωρίζετε για το ταξίδι σας το 2026.<br/><br/>
      **1. Το Λιμάνι Αναχώρησης: Ραφήνα (Όχι Πειραιάς!)**<br/>
      Προσοχή: Τα πλοία για Άνδρο αναχωρούν **αποκλειστικά από το λιμάνι της Ραφήνας**. Είναι πολύ πιο κοντά στο Αεροδρόμιο (Ελ. Βενιζέλος) από ό,τι ο Πειραιάς.<br/><br/>
      **2. Από το Αεροδρόμιο στη Ραφήνα:**<br/>
      • **Λεωφορείο ΚΤΕΛ:** Η πιο οικονομική λύση. Η στάση βρίσκεται ακριβώς απέναντι από τις Αφίξεις του αεροδρομίου (ανάμεσα στις Εξόδους 2 και 3). Το εισιτήριο κοστίζει περίπου 4€ και η διαδρομή διαρκεί 30-40 λεπτά.<br/>
      • **Ταξί / Uber:** Θα σας πάρει περίπου 20 λεπτά και το κόστος κυμαίνεται στα 25-35€.<br/><br/>
      **3. Τα δρομολόγια των Πλοίων:**<br/>
      Το ταξίδι διαρκεί **2 ώρες** με τα συμβατικά πλοία και περίπου **1 ώρα και 15 λεπτά** με τα ταχύπλοα. Οι εταιρείες **Fast Ferries** και **Golden Star Ferries** έχουν καθημερινά δρομολόγια:<br/>
      • **Πρωινά:** Συνήθως αναχωρούν γύρω στις 07:30 - 08:00.<br/>
      • **Απογευματινά:** Υπάρχουν δρομολόγια στις 15:30, 17:30 και συχνά το βράδυ στις 19:30.<br/><br/>
      **4. Φτάνοντας στην Άνδρο (Λιμάνι Γαυρίου):**<br/>
      Μόλις αποβιβαστείτε στο Γαύριο, έχετε τρεις επιλογές για να έρθετε στη Χώρα (32 χλμ):<br/>
      • **Λεωφορείο ΚΤΕΛ:** Το λεωφορείο περιμένει **πάντα** έξω από το πλοίο, ό,τι ώρα και να φτάσει (ακόμα και με καθυστέρηση). Το εισιτήριο για Χώρα κοστίζει περίπου 4€.<br/>
      • **Ενοικίαση Αυτοκινήτου:** Σας το προτείνουμε ανεπιφύλακτα. Υπάρχουν πολλά γραφεία στο λιμάνι. Έχοντας δικό σας μέσο, θα εξερευνήσετε τα μονοπάτια και τις απομακρυσμένες παραλίες μας.<br/>
      • **Ταξί:** Υπάρχει σταθμός ταξί στο λιμάνι. Η διαδρομή για Χώρα κοστίζει περίπου 40-45€.<br/><br/>
      **Insider Tip:** Αν ταξιδεύετε Παρασκευή απόγευμα ή αν έχετε αυτοκίνητο, κλείστε τα εισιτήριά σας τουλάχιστον 10 μέρες πριν. Τα δρομολόγια της Ραφήνας γίνονται γρήγορα sold-out!`
    }
  },
  en: {
    "andros-routes-guide": {
      tag: "ADVENTURE",
      title: "Andros Routes: The Best Hiking Trails",
      subtitle: "Explore Europe's certified hiking paradise directly from Chora.",
      image: "/images/hiking-andros.webp",
      content: `Andros is the only destination in Europe that perfectly blends the Aegean blue with a hiking network certified with the **"Leading Quality Trails - Best of Europe"** label.<br/><br/>
**Why Hike in Andros:**<br/>
• **Diversity:** You will cross ancient stone bridges, watermills, waterfalls, and lush chestnut forests.<br/>
• **Infrastructure:** The 300km network is fully marked, maintained, and easy to navigate via the "Andros Routes" app.<br/><br/>
**Our Top Recommendations:**<br/>
• **Route 1 (The Classic):** Starts from Chora, passes through the green village of Lamyra, and ends at the famous Menites springs. An easy 2.5-hour lush walk.<br/>
• **Route 6 (The Scenic):** From Vourkoti to Achla beach. You’ll witness the river meeting the sea and the iconic Achla lighthouse. (Difficulty: Moderate).<br/>
• **Route 2 (From our Doorstep):** If you’re staying with us, the path to Apoikia starts just minutes away, leading you to the mesmerizing Pithara waterfalls.<br/><br/>
**Tip:** Check the "Andros Routes" website before you start and always carry water. The best hiking windows are April to June and the entire month of September.`
    },
    "chora-and-wind": {
      tag: "KNOW-HOW",
      title: "Chora & The Wind: A Survivor's Guide",
      subtitle: "Where to hide from the meltemi and how to experience the noble capital.",
      image: "/images/chora-guide-v2.webp",
      content: `Many fear the Cycladic winds, but in Chora, we’ve learned to embrace them. Built on a peninsula that cuts through the Aegean, Chora offers an aristocratic charm you won't find anywhere else in the islands.<br/><br/>
**Where to Swim when it’s Windy:**<br/>
• **Neimporio:** Right at your doorstep! This bay is naturally protected from the north winds (meltemi). Ideal for families.<br/>
• **Piso Gialia:** A small paradise with a great beach bar that remains calm even when the wind hits 7 Beaufort.<br/><br/>
**Chora’s Must-See Landmarks:**<br/>
• **The Invisible Sailor:** The island's symbol at the edge of the old town. The view of the Venetian Castle and the Tourlitis Lighthouse is legendary.<br/>
• **Culture:** The Goulandris Museum of Contemporary Art hosts world-class exhibitions every summer (Picasso, Miro, etc.).<br/>
• **The Agora:** The marble-paved main street with neoclassical captains' mansions is the heart of our social life.`
    },
    "local-flavors": {
      tag: "GASTRONOMY",
      title: "Taste of Andros: From Neimporio to the Market",
      subtitle: "Our personal recommendations for authentic 'froutalia' and fresh seafood.",
      image: "/images/food-guide.webp",
      content: `Andros' gastronomy is a blend of fresh garden produce and a long maritime tradition. Here, food is a ritual.<br/><br/>
**Dishes You Must Try:**<br/>
• **Froutalia:** The traditional slow-cooked omelet with potatoes and local sausages flavored with wild marjoram. It’s our signature dish.<br/>
• **Lambriatis:** If you are here for Easter, this slow-roasted goat stuffed with local cheeses and herbs is a life-changing experience.<br/>
• **Amygdalota:** Famous almond sweets with rosewater. Find them at the historic pastry shops in the main market.<br/><br/>
**Our Favorite Spots:**<br/>
• **In Chora:** "Nonas" in Neimporio for fresh fish and creative seafood, or "Platanos" in the Market for traditional Greek "meze."<br/>
• **In the Villages:** "Kossis" in Ano Fellos is a "temple" for meat lovers, and "Stamatis" in Batsi is legendary for its lobster pasta.<br/><br/>
** Tip:** Always ask for the local "Volaki" or "Malako" cheese with your salad. The flavor is unmatched.`
    },
    "secret-beaches": {
      tag: "NATURE",
      title: "Beaches Near Chora & Hidden Secrets",
      subtitle: "From the cinematic Sineti to the rugged beauty of Lidi.",
      image: "/images/beaches-guide.webp",
      content: `Andros boasts over 80 beaches. Some are cosmopolitan and organized, while others remain "secrets" for the few who know where to look.<br/><br/>
**Hidden Treasures:**<br/>
• **Sineti:** A cinematic bay. Deep turquoise waters and sea caves at the edge. It was the backdrop for the famous Greek film "Little England."<br/>
• **Lidi:** For total seclusion. Access requires a 15-minute hike down a slope, but the absolute silence and white sand are your rewards.<br/>
• **Achla:** The most famous but hard to reach (4x4 or boat). An earthly paradise where a river meets the sea under a lush forest.<br/><br/>
**Comfort & Vibes:**<br/>
• **Golden Sand (Chrysi Ammos):** The most popular beach on the island with fine sand and beach bars, perfect for a lively vibe.<br/>
• **Vitali:** An impressive pebble beach with crystal clear, cold waters, offering a wild Cycladic beauty.<br/><br/>
**Tip:** Before heading out, check the wind direction. If it's blowing from the North, head to the Southern beaches (like Apothikes) for crystal-calm waters.`
    },
    "athens-to-andros-guide": {
      tag: "TRAVEL GUIDE",
      title: "How to Get to Andros from Athens (2026)",
      subtitle: "The ultimate 2026 travel guide to the closest Cycladic island.",
      image: "/images/gavrio-andros-greece.webp",
      content: `Andros is the closest Cycladic island to Athens, making it the perfect choice for a premium getaway. In just 2 hours, you can go from the city buzz to your balcony with a sea view. Here is the ultimate 2026 travel guide.<br/><br/>
      **1. The Departure Port: Rafina (Not Piraeus!)**<br/>
      Ferries to Andros depart **exclusively from Rafina Port**. Rafina is much closer to the Athens International Airport (ATH) than Piraeus, saving you time and hassle.<br/><br/>
      **2. From Athens Airport to Rafina Port:**<br/>
      • **KTEL Bus (Shuttle):** The most efficient way. The bus stop is located right across from the Arrivals terminal (between Exits 2 and 3). Tickets cost around €4, and the trip takes 30-40 minutes.<br/>
      • **Taxi / Private Transfer:** Takes about 20 minutes and costs between €25 and €35.<br/><br/>
      **3. Ferry Schedules & Duration:**<br/>
      The crossing takes **2 hours** with conventional ferries and about **1h 15m** with high-speed vessels. Major operators include **Fast Ferries** and **Golden Star Ferries**.<br/>
      • **Morning Ferries:** Usually depart between 07:30 and 08:00 AM.<br/>
      • **Afternoon Ferries:** Options typically include 15:30, 17:30, and sometimes a late 19:30 departure.<br/><br/>
      **4. Arriving at Gavrio Port & Getting to Chora:**<br/>
      When you dock at Gavrio, Chora (the capital where we are located) is about 32km away:<br/>
      • **Local KTEL Bus:** A bus **always** waits at the port for every ferry arrival, even if there is a delay. It’s the easiest way to reach Chora for about €4.<br/>
      • **Car Rental:** Highly recommended! There are several rental agencies right at the port. Having a car is essential for visiting the "Andros Routes" hiking trails and secret beaches.<br/>
      • **Taxi:** A taxi rank is available at the port entrance. The fare to Chora is approximately €40-€45.<br/><br/>
      ** Insider Tip:** If you are traveling during a summer weekend or have a car, book your ferry tickets at least 10 days in advance. Rafina is the preferred port for locals, and ferries fill up quickly!`
    }
  }
};

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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.subtitle,
    "image": `https://www.androsguesthouses.gr${article.image}`,
    "datePublished": "2026-04-19T12:00:00+02:00",
    "dateModified": new Date().toISOString(),
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
          fetchPriority="high" 
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