"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChatBubbleLeftRight, HiXMark } from "react-icons/hi2";

export default function ChatComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      
      if (data.error) throw new Error(data.error);
      
      setMessages((prev) => [...prev, { role: "ai", text: data.text }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: "ai", text: "Συγνώμη, είχαμε ένα τεχνικό θέμα. Δοκιμάστε ξανά σε λίγο!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white w-85 h-96 rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-stone-900 p-4 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-bold">Andros Concierge</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-stone-300 transition-colors">
                <HiXMark size={24} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-stone-50">
              {messages.map((m, i) => (
                <div 
                  key={`chat-item-${i}`} // Διορθωμένο key για το React
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                    m.role === "user" 
                      ? "bg-stone-800 text-white rounded-tr-none" 
                      : "bg-white border border-stone-200 text-stone-800 rounded-tl-none"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div key="loader-ui" className="flex justify-start">
                  <div className="bg-stone-200 text-stone-500 px-4 py-2 rounded-full text-xs animate-pulse">
                    Ο Concierge σκέφτεται...
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t bg-white flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Πώς μπορώ να βοηθήσω;"
                className="flex-1 text-sm p-2 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900/5 text-black"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading}
                className="bg-stone-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-stone-800 disabled:opacity-50 transition-all"
              >
                Πάμε
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-stone-900 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center border-2 border-white"
      >
        <HiChatBubbleLeftRight size={28} />
      </button>
    </div>
  );
}