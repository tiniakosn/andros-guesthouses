import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fafaf9] text-center px-6 relative overflow-hidden">
      
      {/* Ένα μεγάλο "404" στο φόντο για στυλ */}
      <h1 className="text-[12rem] md:text-[20rem] font-display font-bold text-stone-200/50 absolute select-none z-0">
        404
      </h1>

      <div className="relative z-10 max-w-lg">
        <h2 className="text-3xl md:text-5xl font-display text-stone-900 mb-6 font-bold">
          Χαθήκατε στα στενά;
        </h2>
        
        <p className="text-stone-600 mb-10 text-lg leading-relaxed">
          Μην ανησυχείτε, συμβαίνει και στους καλύτερους περιηγητές της Χώρας. 
          Η σελίδα που ψάχνετε δεν υπάρχει, αλλά η φιλοξενία μας σας περιμένει στην αρχική.
        </p>

        <Link
          href="/"
          className="inline-block px-10 py-4 bg-stone-900 text-white font-bold uppercase tracking-widest text-sm shadow-xl rounded-full hover:bg-[#65a30d] hover:scale-105 transition-all duration-300"
        >
          Επιστροφη στην Αρχικη
        </Link>
      </div>

    </div>
  );
}