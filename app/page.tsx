import Link from "next/link"

export default function Home() {

  const nisabArgent = 412
  const nisabOr = 6200

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_40%)]"></div>

        <div className="relative flex flex-col items-center text-center px-6 py-28 max-w-5xl mx-auto">

          <span className="mb-6 px-4 py-2 text-sm bg-emerald-100 text-emerald-700 rounded-full font-medium shadow-sm">
            Conforme aux pratiques malikites – Sénégal
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">
            Calculez votre Zakat <br />
            <span className="text-emerald-600">avec précision et sérénité</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mb-12 text-xl leading-relaxed">
            Un simulateur moderne, confidentiel et conforme aux principes islamiques.
            Estimez votre zakat selon le nisab actuel en quelques secondes.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <Link
              href="/select-zakat"
              className="bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white px-10 py-5 rounded-2xl text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Commencer le calcul
            </Link>

            <Link
              href="/learn"
              className="backdrop-blur-md bg-white/60 border border-emerald-200 text-emerald-700 px-10 py-5 rounded-2xl text-lg hover:bg-white transition"
            >
              Comprendre la Zakat
            </Link>
          </div>

          <p className="text-sm text-gray-500 mt-8">
            🔒 100% confidentiel — aucune donnée sauvegardée
          </p>
        </div>
      </section>



      {/* NISAB */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nisab actuel
          </h2>
          <p className="text-gray-600">
            Basé sur les valeurs de référence de l’or et de l’argent
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

          <div className="group relative bg-white/70 backdrop-blur-lg p-10 rounded-3xl border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs px-4 py-1 rounded-full shadow">
              Argent
            </div>
            <h3 className="font-semibold text-gray-700 mb-4 mt-4">
              Basé sur l'argent (595g)
            </h3>
            <p className="text-4xl font-extrabold text-emerald-600">
              {nisabArgent} €
            </p>
          </div>

          <div className="group relative bg-white/70 backdrop-blur-lg p-10 rounded-3xl border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-500 text-white text-xs px-4 py-1 rounded-full shadow">
              Or
            </div>
            <h3 className="font-semibold text-gray-700 mb-4 mt-4">
              Basé sur l'or (85g)
            </h3>
            <p className="text-4xl font-extrabold text-emerald-600">
              {nisabOr} €
            </p>
          </div>

        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Valeurs indicatives — synchronisation automatique des prix bientôt disponible.
        </p>
      </section>



      {/* CTA FINAL */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-700 text-white py-24 px-6 text-center overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),_transparent_60%)]"></div>

        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Prêt à calculer votre Zakat ?
          </h2>

          <Link
            href="/select-zakat"
            className="bg-white text-emerald-700 px-10 py-5 rounded-2xl font-semibold text-lg shadow-2xl hover:-translate-y-1 transition-all"
          >
            Commencer maintenant
          </Link>
        </div>

      </section>

    </main>
  )
}