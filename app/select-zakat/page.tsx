import Link from "next/link"
import { 
  FaMoneyBillWave, 
  FaMoon, 
  FaLeaf,
  FaBuilding, 
  FaChartLine 
} from "react-icons/fa"
import { FaCow } from "react-icons/fa6"

const zakatTypes = [
  {
    title: "Zakat al-Mal",
    icon: <FaMoneyBillWave />,
    description: "Épargne, or, argent, comptes bancaires, dettes récupérables",
    href: "/calculate/mal",
  },
  {
    title: "Zakat al-Fitr",
    icon: <FaMoon />,
    description: "Aumône obligatoire de fin de Ramadan (par personne à charge)",
    href: "/calculate/fitr",
  },
  {
    title: "Zakat agricole",
    icon: <FaLeaf />,
    description: "Récoltes et production agricole",
    href: "/calculate/agriculture",
  },
  {
    title: "Zakat du bétail",
    icon: <FaCow />,
    description: "Chameaux, bovins, ovins et caprins",
    href: "/calculate/livestock",
  },
  {
    title: "Zakat professionnelle",
    icon: <FaBuilding />,
    description: "Commerce, stock, trésorerie, bénéfices",
    href: "/calculate/business",
  },
  {
    title: "Zakat sur investissement",
    icon: <FaChartLine />,
    description: "Actions, crypto, immobilier locatif",
    href: "/calculate/investments",
  },
]

export default function SelectZakatType() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 px-6 py-20 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_40%)]"></div>

      <div className="relative max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
            Sélection du calcul
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choisissez le type de Zakat
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sélectionnez la catégorie correspondant à votre situation
            pour lancer un calcul précis et conforme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zakatTypes.map((type, index) => (
            <Link
              key={index}
              href={type.href}
              className="group relative bg-white/70 backdrop-blur-lg p-8 rounded-3xl border border-emerald-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-emerald-500/10 to-green-400/10"></div>

              <div className="relative">

                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 text-2xl mb-6 group-hover:scale-110 transition">
                  {type.icon}
                </div>

                <h2 className="text-xl font-semibold mb-3 group-hover:text-emerald-700 transition">
                  {type.title}
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {type.description}
                </p>

                <div className="mt-6 text-sm text-emerald-600 font-medium opacity-0 group-hover:opacity-100 transition">
                  Calculer →
                </div>

              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className="text-emerald-700 hover:text-emerald-900 font-medium transition"
          >
            ← Retour à l’accueil
          </Link>
        </div>

      </div>
    </main>
  )
}