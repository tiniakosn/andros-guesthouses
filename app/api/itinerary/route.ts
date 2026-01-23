export async function POST(req: Request) {
  try {
    const { days, style, lang } = await req.json();

    const itineraries: any = {
      el: {
        Relaxation: {
          "1": "✨ Express Χαλάρωση: Πρωινό με θέα το Αιγαίο στα Andros Guesthouses, βουτιά στα κρυστάλλινα νερά του Νημποριού και κλείσιμο της μέρας με cocktail στη Χώρα κάτω από τα αστέρια.",
          "3": "🌿 Τριήμερο Ηρεμίας:\n1η: Άφιξη και χαλάρωση στη Χώρα.\n2η: Επίσκεψη στις καταπράσινες Μένητες και φαγητό κάτω από τα πλατάνια.\n3η: Μπάνιο στη Χρυσή Άμμο και ηλιοβασίλεμα στο Μπατσί.",
          "5": "🧘 Απόλυτο Zen: Ένα πλήρες ταξίδι στις πιο ήσυχες γωνιές του νησιού, με spa sessions, κρυφές παραλίες όπως τα Άχλα και γιόγκα με θέα το πέλαγος."
        },
        Adventure: {
          "1": "🥾 Adventure Day: Πεζοπορία στο Μονοπάτι 1 προς τη Μονή Παναχράντου και κατάβαση για βουτιά στην άγρια ομορφιά της παραλίας Βόρη.",
          "3": "⛰️ Extreme 3-Day:\n1η: Διάσχιση των καταρρακτών στην Πυθάρα.\n2η: Trekking στη βόρεια Άνδρο και εξερεύνηση του Κάστρου της Φανερωμένης.\n3η: Watersports στο Κόρθι.",
          "5": "🌋 The Great Explorer: Πλήρης διάσχιση του νησιού μέσω των Andros Routes, εξερεύνηση σπηλαίων και νυχτερινή πεζοπορία."
        },
        "Food & Culture": {
          "1": "🎭 Πολιτιστική Μύηση: Επίσκεψη στο Μουσείο Σύγχρονης Τέχνης (Γουλανδρή) και δοκιμή παραδοσιακής Φρουτάλιας στη Χώρα.",
          "3": "🍲 Gastronomy Tour:\n1η: Wine tasting σε τοπικό αμπελώνα.\n2η: Cooking class παραδοσιακών γλυκών του κουταλιού.\n3η: Επίσκεψη στο Ναυτικό Μουσείο και δείπνο με θαλασσινά στο Γαύριο.",
          "5": "🏛️ Heritage Journey: Μια βαθιά βουτιά στην ιστορία των Καπεταναίων, επίσκεψη σε όλες τις μονές και καθημερινές γαστρονομικές εκπλήξεις."
        }
      }
    };

    // Επιλογή του σωστού κειμένου (Default σε Relaxation 3 ημερών αν κάτι λείπει)
    const selectedContent = itineraries["el"][style]?.[days] || itineraries["el"]["Relaxation"]["3"];

    return new Response(JSON.stringify({ text: selectedContent }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: "Service update in progress" }), { status: 500 });
  }
}