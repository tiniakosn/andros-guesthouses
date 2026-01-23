import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);

async function run() {
  const text = fs.readFileSync('knowledge.txt', 'utf8');
  const model = genAI.getGenerativeModel({ model: "text-embedding-004" });

  console.log("⏳ Δημιουργία Embeddings...");
  const result = await model.embedContent(text);
  const embedding = result.embedding.values;

  console.log("🚀 Ανέβασμα στη Supabase...");
  const { error } = await supabase.from('documents').insert([
    { content: text, embedding: embedding }
  ]);

  if (error) console.error("❌ Σφάλμα:", error);
  else console.log("✅ Η γνώση αποθηκεύτηκε επιτυχώς!");
}

run();