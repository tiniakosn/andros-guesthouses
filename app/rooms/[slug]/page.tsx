import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// --- ΤΑ ΔΕΔΟΜΕΝΑ ΜΑΣ (ENGLISH VERSION) ---
const roomsData = [
  {
    slug: "aegean-studio",
    title: "Aegean Studio",
    price: "50€",
    size: "25 m²",
    guests: "2-3 Guests",
    bed: "1 Double Bed",
    description:
      "Experience the pulse of Chora in a space designed for modern travelers. Located on the 1st floor, the Aegean Studio defines 'Smart Living'. Bright, modern, and fully equipped, it allows you to live like a local. Wake up to the brilliant Greek light, prepare breakfast in a full-size kitchen, and enjoy your Nespresso on the balcony while gazing at the mountain and the harbor.",
    features: [
      "Full Kitchen & Oven",
      "Washing Machine",
      "Private Balcony",
      "Mountain & Harbor View",
      "Nespresso Machine",
      "Smart TV & WiFi"
    ],
    images: [
      "/images/no5.6.jpg", 
      "/images/no5.1.jpg",
      "/images/no5.2.jpg",
      "/images/no5.3.jpg"
    ]
  },
  {
    slug: "garden-suite",
    title: "Garden Suite",
    price: "50€",
    size: "40 m²",
    guests: "2-5 Guests",
    bed: "2 Doubles + Sofa",
    description:
      "The ultimate summer home feeling. Located on the ground floor, the Garden Suite offers the luxury of comfort and direct connection with nature. Ideal for families or groups, featuring spacious areas (two double beds) and a large kitchen for family meals. The highlight? Direct access to the cool, private courtyard, which becomes your natural living room during warm afternoons.",
    features: [
      "2 Double Beds",
      "Private Courtyard Access",
      "Large Family Kitchen",
      "Washing Machine",
      "Spacious Living Area",
      "Easy Access (Ground Floor)"
    ],
    images: [
      "/images/balcony1.jpg",
      "/images/no2.2.jpg",
      "/images/no2.3.jpg"
    ]
  },
  {
    slug: "grand-residence",
    title: "Grand Residence",
    price: "60€",
    size: "55 m²",
    guests: "4+ Adults",
    bed: "Bedroom + Living Room",
    description:
      "Our hospitality flagship. Located on the 2nd floor (penthouse), privacy meets panoramic views. A true home away from home, with generous spaces comfortably hosting 4+ guests. Enjoy the sunset from the large veranda overlooking the entire Chora and the harbor, with all the comforts of a fully equipped household at your disposal.",
    features: [
      "Panoramic Veranda",
      "Spacious Living Room",
      "Separate Bedroom",
      "Full Household Equipment",
      "Washing Machine & Iron",
      "Premium Harbor View"
    ],
    images: [
      "/images/no5.5.jpg",
      "/images/no5.4.jpg",
      "/images/no5.7.jpg"
    ]
  }
];

export default async function RoomPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const room = roomsData.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return (
    <main className="bg-[#fafaf9] min-h-screen pb-0"> {/* Changed pb-20 to pb-0 because Footer handles spacing */}
      <Navbar />

      {/* --- HERO IMAGE --- */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={room.images[0] || "/images/studio-room.jpg"}
          alt={room.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-display text-white mb-2">{room.title}</h1>
            <p className="text-white/90 text-lg font-sans">{room.size} • {room.guests}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:w-2/3 space-y-10">
            <section>
              <h2 className="text-2xl font-display text-stone-900 mb-4">The Experience</h2>
              <p className="text-stone-600 leading-relaxed text-lg font-sans font-light">
                {room.description}
              </p>
            </section>

            <section className="border-t border-stone-200 pt-8">
              <h3 className="text-xl font-display text-stone-900 mb-6">Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-600">
                    <svg className="w-5 h-5 text-olive-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-sans font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-t border-stone-200 pt-8 mb-12">
              <h3 className="text-xl font-display text-stone-900 mb-6">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {room.images.map((img, i) => (
                  <div key={i} className="relative h-64 rounded-lg overflow-hidden group shadow-md">
                    <Image 
                      src={img} 
                      alt={`${room.title} ${i + 1}`} 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* --- RIGHT COLUMN (STICKY SIDEBAR) --- */}
          <div className="lg:w-1/3">
            <div className="sticky top-28 bg-white p-8 rounded-xl shadow-xl border border-stone-100">
              <div className="flex justify-between items-end mb-6 border-b border-stone-100 pb-6">
                <div>
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">Starting from</span>
                  <div className="text-3xl font-display text-stone-900"> {room.price} <span className="text-sm text-stone-500 font-sans">/night</span></div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm text-stone-600">
                  <span>Guests:</span>
                  <span className="font-bold text-stone-900">{room.guests}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-600">
                  <span>Beds:</span>
                  <span className="font-bold text-stone-900 text-right w-1/2">{room.bed}</span>
                </div>
                <div className="flex justify-between text-sm text-stone-600">
                  <span>Check-in:</span>
                  <span className="font-bold text-stone-900">15:00</span>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="block w-full py-4 bg-stone-900 text-white text-center rounded-full font-bold uppercase tracking-widest hover:bg-olive-600 transition-colors shadow-lg hover:-translate-y-1 transform duration-200 text-sm"
              >
                Book Your Stay
              </Link>
              <p className="text-[10px] text-stone-400 text-center mt-3 uppercase tracking-wide">
                Best Rate Guarantee
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </main>
  );
}