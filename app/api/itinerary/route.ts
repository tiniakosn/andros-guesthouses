import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { days, style, lang } = await req.json();

    // Χρησιμοποιούμε το 1.0 Pro που είναι το πιο "παλιό" και σταθερό μοντέλο
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });

    const prompt = `
      Είσαι ο τοπικός οδηγός για τα Andros Guesthouses στη Χώρα της Άνδρου.
      Πρότεινε ένα πρόγραμμα ${days} ημερών για ${style} στα ${lang === 'el' ? 'Ελληνικά' : 'Αγγλικά'}.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });
  } catch (error: any) {
    console.error("DEBUG LOG:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}