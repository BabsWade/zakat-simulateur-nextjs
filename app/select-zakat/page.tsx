"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
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
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Évite les erreurs d'hydratation (différence serveur/client)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <main className={`min-h-screen transition-colors duration-500 px-6 py-20 relative overflow-hidden ${
      isDark 
        ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100" 
        : "bg-gradient-to-br from-emerald-50 via-white to-green-50 text-gray-900"
    }`}>

      {/* Background glow dynamique */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        isDark
          ? "bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.06),_transparent_40%)]"
          : "bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_40%)]"
      }`} />

      <div className="relative max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className={`inline-block mb-4 px-4 py-2 text-sm rounded-full font-medium transition-colors ${
            isDark
              ? "bg-emerald-900/40 text-emerald-300 border border-emerald-500/20"
              : "bg-emerald-100 text-emerald-700 border border-emerald-200"
          }`}>
            Sélection du calcul
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Choisissez le type de Zakat
          </h1>

          <p className={`text-lg max-w-2xl mx-auto transition-colors ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}>
            Sélectionnez la catégorie correspondant à votre situation
            pour lancer un calcul précis et conforme.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zakatTypes.map((type, index) => (
            <Link
              key={index}
              href={type.href}
              className={`group relative backdrop-blur-lg p-8 rounded-3xl border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                isDark
                  ? "bg-gray-800/40 border-gray-700 hover:border-emerald-500/30"
                  : "bg-white/80 border-emerald-100 hover:border-emerald-300"
              }`}
            >
              {/* Effet de lueur au survol */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 ${
                isDark
                  ? "bg-gradient-to-r from-emerald-400/5 to-green-300/5"
                  : "bg-gradient-to-r from-emerald-500/5 to-green-400/5"
              }`} />

              <div className="relative">
                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl text-2xl mb-6 group-hover:scale-110 transition duration-300 ${
                  isDark
                    ? "bg-emerald-900/40 text-emerald-300"
                    : "bg-emerald-100 text-emerald-600"
                }`}>
                  {type.icon}
                </div>

                <h2 className={`text-xl font-semibold mb-3 transition-colors ${
                  isDark 
                    ? "group-hover:text-emerald-400" 
                    : "group-hover:text-emerald-700"
                }`}>
                  {type.title}
                </h2>

                <p className={`text-sm leading-relaxed transition-colors ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  {type.description}
                </p>

                <div className={`mt-6 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 ${
                  isDark ? "text-emerald-400" : "text-emerald-600"
                }`}>
                  Calculer →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/"
            className={`font-medium transition-colors ${
              isDark
                ? "text-emerald-400 hover:text-emerald-300"
                : "text-emerald-700 hover:text-emerald-900"
            }`}
          >
            ← Retour à l’accueil
          </Link>
        </div>

      </div>
    </main>
  )
}