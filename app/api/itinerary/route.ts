export async function POST(req: Request) {
  try {
    const { days, style, lang } = await req.json();

    // Ένα έτοιμο, όμορφο πρόγραμμα για την Άνδρο
    const mockItinerary = {
      el: `Πρόγραμμα ${days} ημερών για ${style} στην Άνδρο:
      
      1η Ημέρα: Άφιξη στο Γαύριο και καφές στο Μπατσί. Βόλτα στα σοκάκια της Χώρας και διαμονή στα Andros Guesthouses.
      2η Ημέρα: Πεζοπορία στο μονοπάτι 1 προς τη Μονή Παναχράντου και μπάνιο στην παραλία Άχλα.
      3η Ημέρα: Επίσκεψη στο Μουσείο Σύγχρονης Τέχνης και φαγητό σε παραδοσιακή ταβέρνα στη Χώρα.`,
      
      en: `${days}-day ${style} itinerary for Andros:
      
      Day 1: Arrival at Gavrio and coffee in Batsi. Walk through the alleys of Chora and stay at Andros Guesthouses.
      Day 2: Hiking on Trail 1 to Panachrantou Monastery and swimming at Achla beach.
      Day 3: Visit the Museum of Contemporary Art and dinner at a traditional tavern in Chora.`
    };

    const text = lang === 'el' ? mockItinerary.el : mockItinerary.en;

    // Επιστρέφουμε την απάντηση αμέσως
    return new Response(JSON.stringify({ text }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: "Service temporarily unavailable" }), { status: 500 });
  }
}