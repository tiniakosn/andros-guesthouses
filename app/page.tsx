import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar"; 

// Server-side imports
const About = dynamic(() => import("@/components/About"));
const Rooms = dynamic(() => import("@/components/Rooms"));
const Amenities = dynamic(() => import("@/components/Amenities"));
const LocalInsider = dynamic(() => import("@/components/LocalInsider"));

// SRE FIX: Αφαιρέσαμε το { ssr: false } για συμβατότητα με Server Components
const Testimonials = dynamic(() => import("@/components/Testimonials"), { 
  loading: () => <div className="h-20" /> 
});
const InstaFeed = dynamic(() => import("@/components/InstaFeed"));

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  const lang = params.lang === "el" ? "el" : "en";

  return (
    <main className="min-h-screen bg-[#fafaf9] overflow-x-hidden">
      <Navbar />
      
      <section className="relative h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/no5.5.webp"
            alt="Andros Guesthouses Panoramic Sea View"
            fill
            className="object-cover object-top"
            priority
            fetchPriority="high" 
            quality={85}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-5xl text-center space-y-8 mt-10">
          <div className="flex justify-center">
            <span className="inline-block text-white/95 font-sans font-bold tracking-[0.3em] text-xs md:text-sm uppercase mb-2 border-b border-white/30 pb-2 animate-fadein">
              {lang === "el" ? "Καλώς ήρθατε στη Χώρα" : "Welcome to Chora"}
            </span>
          </div>

          <div className="flex justify-center">
            <h1 className="text-5xl md:text-8xl font-display text-white tracking-tighter leading-none animate-entrance">
              Andros <br className="md:hidden" /> Guesthouses
            </h1>
          </div>

          <div className="flex justify-center">
            <h2 className="text-lg md:text-2xl text-white font-sans font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {lang === "el" 
                ? "Boutique Διαμονή στη Χώρα της Άνδρου. Το ιδιωτικό σας πέτρινο καταφύγιο στο Αιγαίο." 
                : "Boutique Accommodation in Andros Chora. Your private stone sanctuary in the Aegean."}
            </h2>
          </div>
            
          <div className="flex justify-center pt-8">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
              <a 
                href="#rooms" 
                className="px-10 py-4 bg-white text-stone-900 rounded-full hover:bg-stone-100 transition duration-300 shadow-2xl font-sans text-xs font-bold tracking-[0.15em] uppercase hover:-translate-y-1 animate-fadein"
              >
                {lang === "el" ? "Δείτε τα Δωμάτια" : "View Rooms"}
              </a>
              <a 
                href="/experience" 
                className="px-10 py-4 border border-white text-white rounded-full hover:bg-white hover:text-stone-900 transition duration-300 bg-white/10 backdrop-blur-sm font-sans text-xs font-bold tracking-[0.15em] uppercase animate-fadein"
              >
                {lang === "el" ? "Η Εμπειρία" : "The Experience"}
              </a>
            </div>
          </div>
        </div>
        
        <Link 
          href="#about" 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 hover:text-white transition-colors animate-bounce p-2"
          aria-label="Scroll to About"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </Link>
      </section>

      <About />
      <Rooms />
      <Amenities />
      <LocalInsider lang={lang} />
      <Testimonials />
      <InstaFeed />
    </main>
  );
}