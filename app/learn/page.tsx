"use client"

import { useState } from "react"

const data = [
  {
    title: "Définition de la Zakat",
    content: `
La zakat est le troisième pilier de l’islam. 
C’est une aumône obligatoire prélevée sur les biens des musulmans ayant atteint le nisab.
Elle purifie les richesses et soutient les plus démunis.
    `,
  },
  {
    title: "Conditions d’obligation",
    content: `
La zakat devient obligatoire lorsque :
• On est musulman
• On possède un patrimoine atteignant le nisab
• Ce patrimoine est détenu pendant une année lunaire complète (hawl)
• On est pleinement propriétaire des biens
    `,
  },
  {
    title: "Le Nisab",
    content: `
Le nisab est le seuil minimum à partir duquel la zakat est due.

Il correspond à la valeur de :
• 85 grammes d’or
ou
• 595 grammes d’argent

Si votre patrimoine dépasse ce seuil pendant une année lunaire, la zakat devient obligatoire.
    `,
  },
  {
    title: "Le Hawl (année lunaire)",
    content: `
Le hawl est une période d’une année lunaire complète.

La zakat n’est obligatoire que si le patrimoine reste au-dessus du nisab pendant toute cette période.
Chaque type de richesse possède son propre hawl.
    `,
  },
  {
    title: "Catégories bénéficiaires (8 catégories)",
    content: `
La zakat est destinée exclusivement aux catégories suivantes :

1. Les pauvres (al-fuqara)
2. Les nécessiteux (al-masakin)
3. Les collecteurs de la zakat
4. Ceux dont les cœurs sont à rapprocher de l’islam
5. L’affranchissement des esclaves
6. Les endettés
7. Dans le sentier d’Allah
8. Le voyageur en difficulté
    `,
  },
]

export default function LearnPage() {

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 px-6 py-20 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_40%)]"></div>

      <div className="relative max-w-4xl mx-auto">

        {/* HERO */}
        <div className="text-center mb-16">
          <span className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
            Centre d’apprentissage
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Comprendre la Zakat
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez les règles essentielles, les conditions
            et les principes fondamentaux liés à la zakat.
          </p>
        </div>

        {/* ACCORDION PREMIUM */}
        <div className="space-y-6">

          {data.map((item, index) => {

            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-xl rounded-3xl border border-emerald-100 shadow-xl transition-all"
              >

                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center p-6 text-left"
                >
                  <span className="font-semibold text-lg">
                    {item.title}
                  </span>

                  <span
                    className={`text-2xl transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-emerald-600" : "text-gray-400"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {item.content}
                  </div>
                </div>

              </div>
            )
          })}

        </div>

      </div>

    </main>
  )
}