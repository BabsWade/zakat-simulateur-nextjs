"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { 
  FaBookOpen, FaCheckDouble, FaScaleBalanced, 
  FaCalendarCheck, FaHandHoldingHeart, FaChevronDown 
} from "react-icons/fa6"

const data = [
  {
    title: "Définition de la Zakat",
    icon: <FaBookOpen />,
    content: `La zakat est le troisième pilier de l’islam. 
C’est une aumône obligatoire prélevée sur les biens des musulmans ayant atteint le nisab.
Elle purifie les richesses et soutient les plus démunis.`,
  },
  {
    title: "Conditions d’obligation",
    icon: <FaCheckDouble />,
    content: `La zakat devient obligatoire lorsque :
• On est musulman
• On possède un patrimoine atteignant le nisab
• Ce patrimoine est détenu pendant une année lunaire complète (hawl)
• On est pleinement propriétaire des biens`,
  },
  {
    title: "Le Nisab",
    icon: <FaScaleBalanced />,
    content: `Le nisab est le seuil minimum à partir duquel la zakat est due.

Il correspond à la valeur de :
• 85 grammes d’or
ou
• 595 grammes d’argent

Si votre patrimoine dépasse ce seuil pendant une année lunaire, la zakat devient obligatoire.`,
  },
  {
    title: "Le Hawl (année lunaire)",
    icon: <FaCalendarCheck />,
    content: `Le hawl est une période d’une année lunaire complète.

La zakat n’est obligatoire que si le patrimoine reste au-dessus du nisab pendant toute cette période.
Chaque type de richesse possède son propre hawl.`,
  },
  {
    title: "Catégories bénéficiaires",
    icon: <FaHandHoldingHeart />,
    content: `La zakat est destinée exclusivement aux catégories suivantes :

1. Les pauvres (al-fuqara)
2. Les nécessiteux (al-masakin)
3. Les collecteurs de la zakat
4. Ceux dont les cœurs sont à rapprocher
5. L’affranchissement des esclaves
6. Les endettés
7. Dans le sentier d’Allah
8. Le voyageur en difficulté`,
  },
]

export default function LearnPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [openIndexes, setOpenIndexes] = useState<number[]>([0])

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === "dark"

  const toggle = (index: number) => {
    setOpenIndexes(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  return (
    <main className={`min-h-screen px-6 py-20 relative overflow-hidden transition-colors duration-500 ${
      isDark ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100" : "bg-gradient-to-br from-emerald-50 via-white to-green-50 text-gray-900"
    }`}>
      
      {/* Background glow dynamique */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        isDark 
          ? "bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_45%)]" 
          : "bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_45%)]"
      }`} />

      <div className="relative max-w-4xl mx-auto">

        {/* HERO SECTION */}
        <div className="text-center mb-16">
          <span className={`inline-block mb-4 px-4 py-2 text-xs uppercase tracking-widest rounded-full font-bold border transition-colors ${
            isDark ? "bg-emerald-900/30 text-emerald-400 border-emerald-500/20" : "bg-emerald-100 text-emerald-700 border-emerald-200"
          }`}>
            Centre d’apprentissage
          </span>

          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            Comprendre la <span className={isDark ? "text-emerald-400" : "text-emerald-600"}>Zakat</span>
          </h1>

          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            Découvrez les règles essentielles, les conditions
            et les principes fondamentaux pour accomplir votre devoir sereinement.
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-4">
          {data.map((item, index) => {
            const isOpen = openIndexes.includes(index)
            return (
              <div
                key={index}
                className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? (isDark ? "bg-gray-800/60 border-emerald-500/30 shadow-2xl shadow-emerald-900/20" : "bg-white border-emerald-200 shadow-xl shadow-emerald-100") 
                    : (isDark ? "bg-gray-900/40 border-gray-800 hover:border-gray-700" : "bg-white/50 border-emerald-100 hover:border-emerald-200")
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left outline-none"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-2xl text-xl transition-all duration-300 ${
                      isOpen 
                        ? (isDark ? "bg-emerald-500 text-white" : "bg-emerald-600 text-white") 
                        : (isDark ? "bg-gray-800 text-emerald-400" : "bg-emerald-50 text-emerald-600")
                    }`}>
                      {item.icon}
                    </div>
                    <span className={`font-bold text-lg md:text-xl transition-colors ${
                      isOpen ? (isDark ? "text-white" : "text-emerald-800") : (isDark ? "text-gray-300" : "text-gray-700")
                    }`}>
                      {item.title}
                    </span>
                  </div>

                  <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen 
                      ? "rotate-180 bg-emerald-500/10 text-emerald-500" 
                      : "text-gray-400"
                  }`}>
                    <FaChevronDown size={14} />
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className={`px-6 pb-8 md:px-24 md:pb-10 text-base md:text-lg leading-relaxed whitespace-pre-line border-t ${
                    isDark ? "text-gray-400 border-gray-800/50" : "text-gray-600 border-emerald-50"
                  }`}>
                    <div className="pt-6">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* FOOTER NOTE */}
        <div className="mt-16 text-center">
           <p className={`text-sm italic ${isDark ? "text-gray-500" : "text-gray-400"}`}>
             Note : Les informations ci-dessus sont basées sur les principes généraux du droit musulman. <br className="hidden md:block"/>
             Pour des cas spécifiques, nous vous recommandons de consulter un expert en jurisprudence.
           </p>
        </div>

      </div>
    </main>
  )
}