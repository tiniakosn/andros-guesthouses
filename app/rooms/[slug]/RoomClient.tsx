"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { type Room } from "@/lib/rooms";

interface RoomClientProps {
  room: Room;
  initialLang: "el" | "en";
}

export default function RoomClient({ room, initialLang }: RoomClientProps) {
  const [lang, setLang] = useState<"el" | "en">(initialLang);

  useEffect(() => {
    const handleLangChange = (e: CustomEvent) => {
      setLang(e.detail as "el" | "en");
    };
    window.addEventListener("langChange", handleLangChange as EventListener);
    return () =>
      window.removeEventListener("langChange", handleLangChange as EventListener);
  }, []);

  const content = lang === "el" ? room.el : room.en;

  return (
    <main className="bg-[#fafaf9] min-h-screen pb-12">
      <Navbar />

      {/* Back Button */}
      <div className="absolute top-28 left-6 z-20 md:left-12">
        <Link
          href={lang === "en" ? "/?lang=en" : "/"}
          className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/30 transition-all inline-block active:scale-95"
        >
          ← {content.sidebar.back}
        </Link>
      </div>

      {/* Hero */}
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
        <div className="absolute inset-0 bg-black/40" />
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

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        {/* Left Column */}
        <div className="lg:w-2/3 space-y-10">
          <section>
            <h2 className="text-2xl font-display text-stone-900 mb-4">
              {content.sidebar.experience}
            </h2>
            <p className="text-stone-600 leading-relaxed text-lg font-sans font-light">
              {content.description}
            </p>
          </section>

          <section className="border-t border-stone-200 pt-8">
            <h3 className="text-xl font-display text-stone-900 mb-6">
              {content.sidebar.highlights}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                  <span className="font-sans font-medium">{f}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-stone-200 pt-8 mb-12">
            <h3 className="text-xl font-display text-stone-900 mb-6">
              {content.sidebar.gallery}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {room.images.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative h-64 rounded-lg overflow-hidden shadow-md bg-stone-100"
                >
                  <Image
                    src={img}
                    alt={`${room.name} gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="sticky top-28 bg-white p-8 rounded-xl shadow-xl border border-stone-100">
            <div className="mb-6 border-b border-stone-100 pb-6">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                {content.sidebar.start}
              </span>
              <div className="text-3xl font-display text-stone-900">
                {room.price}{" "}
                <span className="text-sm text-stone-500 font-sans">
                  {content.sidebar.night}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm text-stone-600">
                <span>{content.sidebar.guests}</span>
                <span className="font-bold text-stone-900">{content.guests}</span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>{content.sidebar.beds}</span>
                <span className="font-bold text-stone-900 text-right w-1/2">
                  {content.bed}
                </span>
              </div>
              <div className="flex justify-between text-sm text-stone-600">
                <span>Check-in:</span>
                <span className="font-bold text-stone-900">15:00</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="block w-full py-4 bg-stone-900 text-white text-center rounded-full font-bold uppercase tracking-widest hover:bg-stone-700 transition-colors shadow-lg active:scale-95"
            >
              {content.sidebar.button}
            </Link>
            <p className="text-[10px] text-stone-600 text-center mt-3 uppercase tracking-wide">
              {content.sidebar.guarantee}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}