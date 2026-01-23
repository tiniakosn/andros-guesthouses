import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { days, style, lang } = await req.json();
    
    // Χρησιμοποιούμε το 1.5 Flash που είναι ταχύτατο και δωρεάν
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Είσαι ο τοπικός οδηγός για τα Andros Guesthouses στη Χώρα της Άνδρου.
      Πρότεινε ένα πρόγραμμα ${days} ημερών για ${style} στα ${lang === 'el' ? 'Ελληνικά' : 'Αγγλικά'}.
      Δώσε έμφαση στην αρχοντιά της Χώρας και την τοπική γαστρονομία.
    `;

    // 1. Καλούμε το Stream
    const result = await model.generateContentStream(prompt);
    
    // 2. Μετατρέπουμε την απάντηση σε Stream συμβατό με Vercel
    const stream = GoogleGenerativeAIStream(result);
    
    // 3. Επιστρέφουμε την "ζωντανή" απάντηση
    return new StreamingTextResponse(stream);

  } catch (error: any) {
    console.error("AI STREAM ERROR:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}