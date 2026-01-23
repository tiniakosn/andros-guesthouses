import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai";

// Δήλωση του κλειδιού
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { days, style, lang } = await req.json();

    // Χρησιμοποιούμε το μοντέλο gemini-1.5-flash-latest που είναι το πλέον συμβατό
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

    const prompt = `Είσαι ο τοπικός οδηγός για τα Andros Guesthouses στη Χώρα της Άνδρου. 
                    Πρότεινε ένα πρόγραμμα ${days} ημερών για ${style} στα ${lang === 'el' ? 'Ελληνικά' : 'Αγγλικά'}.`;

    // Καλούμε το stream απευθείας από το Google SDK
    const result = await model.generateContentStream(prompt);

    // Μετατροπή σε stream συμβατό με Vercel
    const stream = GoogleGenerativeAIStream(result);
    
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error("FULL AI ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}