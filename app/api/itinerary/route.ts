export async function POST(req: Request) {
  try {
    const { days, style, lang } = await req.json();
    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

    // Χτυπάμε το STABLE v1 endpoint απευθείας, όχι το beta
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: "Γεια σου, πες μου μια λέξη για την Άνδρο." 
            }]
          }]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Google API Error');
    }

    // Επιστρέφουμε το κείμενο απλά (χωρίς streaming για να σιγουρευτούμε ότι δουλεύει)
    const text = data.candidates[0].content.parts[0].text;
    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    console.error("RAW API ERROR:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}