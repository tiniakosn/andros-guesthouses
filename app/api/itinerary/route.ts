import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {

  console.log("LOGGING KEY START:", process.env.GOOGLE_GENERATIVE_AI_API_KEY?.substring(0, 7));
  console.log("LOGGING KEY LENGTH:", process.env.GOOGLE_GENERATIVE_AI_API_KEY?.length);
  try {
    const { days, style, lang } = await req.json();
    const model = genAI.getGenerativeModel({ model: "models/gemini-1.5-flash" });

    const prompt = `Είσαι ο τοπικός οδηγός για τα Andros Guesthouses στη Χώρα της Άνδρου. 
                    Πρότεινε ένα πρόγραμμα ${days} ημερών για ${style} στα ${lang === 'el' ? 'Ελληνικά' : 'Αγγλικά'}.`;

    // Καλούμε το stream
    const result = await model.generateContentStream(prompt);

    // Η νέα σύνταξη που δεν είναι deprecated: περνάμε το result απευθείας
    const stream = GoogleGenerativeAIStream(result); 
    
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error("AI Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}