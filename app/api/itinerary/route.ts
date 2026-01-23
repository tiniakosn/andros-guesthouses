import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function POST(req: Request) {
  try {
    const { days, style, lang } = await req.json();

    const result = await streamText({
      // Χρησιμοποιούμε το 'models/' πρόθεμα που απαιτεί το stable API
      model: google('models/gemini-1.5-flash'), 
      prompt: `Είσαι ο τοπικός οδηγός για τα Andros Guesthouses στη Χώρα της Άνδρου. 
               Πρότεινε ένα πρόγραμμα ${days} ημερών για ${style} στα ${lang === 'el' ? 'Ελληνικά' : 'Αγγλικά'}.`,
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    // Εκτύπωση του πλήρους σφάλματος στα Vercel Logs για debug
    console.error("FULL AI ERROR:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}