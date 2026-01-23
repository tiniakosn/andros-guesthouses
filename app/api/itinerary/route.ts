import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export async function POST(req: Request) {
  try {
    const { days, style, lang } = await req.json();

    const result = await streamText({
      model: google('gemini-1.5-flash'), 
      prompt: `Είσαι ο τοπικός οδηγός για τα Andros Guesthouses στην Άνδρο. 
               Πρότεινε ένα πρόγραμμα ${days} ημερών για ${style} στα ${lang === 'el' ? 'Ελληνικά' : 'Αγγλικά'}.`,
    });

    return result.toTextStreamResponse();
  } catch (error: any) {
    console.error("AI ERROR:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}