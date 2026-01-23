"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIPlanner({ lang }: { lang: string }) {
  const [days, setDays] = useState("3");
  const [style, setStyle] = useState("Relaxation");
  const [completion, setCompletion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleGenerate = async () => {
    setIsLoading(true);
    setError(false);
    setCompletion("");

    try {
      const response = await fetch("/api/itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ days, style, lang }),
      });

      if (!response.ok) throw new Error("API Error");

      const data = await response.json();
      // Εδώ παίρνουμε το κείμενο από το 'text' πεδίο του Mock Data που φτιάξαμε στο route.ts
      setCompletion(data.text);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-stone-100 p-8 rounded-2xl shadow-inner my-12 max-w-4xl mx-auto border border-stone-200">
      <h3 className="font-display text-3xl mb-6 text-stone-900 text-center">
        {lang === "el" ? "Σχεδιάστε τη μέρα σας με AI" : "Plan your day with AI"}
      </h3>
      
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <select 
          value={days} 
          onChange={(e) => setDays(e.target.value)}
          className="p-3 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-olive-500 outline-none text-black"
        >
          <option value="1">1 {lang === "el" ? "Ημέρα" : "Day"}</option>
          <option value="3">3 {lang === "el" ? "Ημέρες" : "Days"}</option>
          <option value="5">5 {lang === "el" ? "Ημέρες" : "Days"}</option>
        </select>

        <select 
          value={style} 
          onChange={(e) => setStyle(e.target.value)}
          className="p-3 rounded-lg border border-stone-300 bg-white focus:ring-2 focus:ring-olive-500 outline-none text-black"
        >
          <option value="Relaxation">{lang === "el" ? "Χαλάρωση" : "Relaxation"}</option>
          <option value="Adventure">{lang === "el" ? "Πεζοπορία & Περιπέτεια" : "Adventure & Hiking"}</option>
          <option value="Food & Culture">{lang === "el" ? "Γαστρονομία & Πολιτισμός" : "Food & Culture"}</option>
        </select>

        <button
          onClick={handleGenerate}
          disabled={isLoading}
          className="bg-stone-900 text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition-all disabled:opacity-50 shadow-lg"
        >
          {isLoading ? (lang === "el" ? "Συνθέτει..." : "Drafting...") : (lang === "el" ? "Δημιουργία" : "Generate")}
        </button>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-4">
          {lang === "el" ? "Κάτι πήγε στραβά. Δοκιμάστε ξανά." : "Something went wrong. Please try again."}
        </div>
      )}

      <AnimatePresence>
        {completion && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-stone max-w-none bg-white p-8 rounded-xl shadow-md border border-stone-200"
          >
            <div className="whitespace-pre-line text-stone-800 leading-relaxed font-sans">
              {completion}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}