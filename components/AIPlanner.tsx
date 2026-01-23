"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIPlanner({ lang }: { lang: string }) {
  // States για τη διαχείριση της ροής δεδομένων
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState("");
  const [days, setDays] = useState("3");
  const [style, setStyle] = useState(lang === "el" ? "Χαλάρωση" : "Relaxation");

  const generatePlan = async () => {
    setLoading(true);
    setItinerary("");
    try {
      const response = await fetch("/api/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ days, style, lang }),
      });
      const data = await response.json();
      setItinerary(data.text);
    } catch (error) {
      console.error("Failed to fetch itinerary:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-stone-100 p-8 rounded-2xl shadow-inner my-12 max-w-4xl mx-auto">
      <h3 className="font-display text-3xl mb-6 text-stone-900 text-center">
        {lang === "el" ? "Σχεδιάστε τη μέρα σας με AI" : "Plan your day with AI"}
      </h3>
      
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {/* Επιλογή Ημερών */}
        <select 
          value={days} 
          onChange={(e) => setDays(e.target.value)}
          className="p-3 rounded-lg border border-stone-300 bg-white"
        >
          <option value="1">1 {lang === "el" ? "Ημέρα" : "Day"}</option>
          <option value="3">3 {lang === "el" ? "Ημέρες" : "Days"}</option>
          <option value="5">5 {lang === "el" ? "Ημέρες" : "Days"}</option>
        </select>

        {/* Επιλογή Στυλ */}
        <select 
          value={style} 
          onChange={(e) => setStyle(e.target.value)}
          className="p-3 rounded-lg border border-stone-300 bg-white"
        >
          <option value="Relaxation">{lang === "el" ? "Χαλάρωση" : "Relaxation"}</option>
          <option value="Adventure">{lang === "el" ? "Πεζοπορία & Περιπέτεια" : "Adventure & Hiking"}</option>
          <option value="Food & Culture">{lang === "el" ? "Γαστρονομία & Πολιτισμός" : "Food & Culture"}</option>
        </select>

        <button
          onClick={generatePlan}
          disabled={loading}
          className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-olive-800 transition-all disabled:opacity-50"
        >
          {loading ? (lang === "el" ? "Σκέφτεται..." : "Thinking...") : (lang === "el" ? "Δημιουργία" : "Generate")}
        </button>
      </div>

      {/* Εμφάνιση Αποτελέσματος */}
      <AnimatePresence>
        {itinerary && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-stone max-w-none bg-white p-8 rounded-xl shadow-sm border border-stone-200"
          >
            <div className="whitespace-pre-line text-stone-800 leading-relaxed">
              {itinerary}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}