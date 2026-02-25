"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { 
  ShieldCheck, 
  ArrowRight, 
  Coins, 
  Scale, 
  ChevronLeft, 
  ChevronRight,
  Quote
} from "lucide-react"
import { FaLock } from "react-icons/fa"

// Simulation de la fonction format (à remplacer par ton import réel)
const formatFCFA = (val: number) => new Intl.NumberFormat('fr-FR').format(val) + " FCFA"

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => setMounted(true), [])

  const nisabArgent = 380000
  const nisabOr = 4000000

  const sagesses = [
    { text: "« La Zakat n’est destinée qu’aux pauvres et aux nécessiteux… »", ref: "Sourate At-Tawba, 9:60", type: "Coran" },
    { text: "« Et accomplissez la Salât et acquittez la Zakat »", ref: "Sourate Al-Baqara, 2:43", type: "Coran" },
    { text: "« La Zakat est un droit sur les richesses »", ref: "Sahih Al-Bukhari", type: "Hadith" },
    { text: "« Celui qui paie la Zakat sera protégé de l’enfer »", ref: "Sahih Muslim", type: "Hadith" },
  ]

  if (!mounted) return null
  const isDark = theme === "dark"

  return (
    <main className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-[#050505] text-white" : "bg-slate-50 text-slate-900"}`}>
      
      {/* --- HERO SECTION --- */}
      <section

        className={`relative overflow-hidden transition-all duration-500 ${

          theme === "dark"

            ? "bg-gradient-to-br from-[#0b0f14] via-[#050505] to-[#0b0f14]"

            : "bg-gradient-to-br from-emerald-50 via-white to-green-50"

        }`}

      >

        {/* Lueur d'ambiance */}

        <div className={`absolute inset-0 ${

          theme === "dark"

            ? "bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.08),_transparent_40%)]"

            : "bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15),_transparent_40%)]"

        }`} />



        <div className="relative flex flex-col items-center text-center px-6 py-10 max-w-5xl mx-auto">

          <span

            className={`mb-6 px-5 py-2 text-sm rounded-full font-medium shadow-sm backdrop-blur-md border ${

              theme === "dark"

                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"

                : "bg-emerald-100 text-emerald-700 border-emerald-200"

            }`}

          >

            Conforme aux pratiques malikites – Sénégal

          </span>



          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight">

            Calculez votre Zakat <br />

            <span className={theme === "dark" ? "text-emerald-400" : "text-emerald-600"}>

              avec précision et sérénité

            </span>

          </h1>



          <p className={`max-w-2xl mb-12 text-xl leading-relaxed ${

            theme === "dark" ? "text-gray-400" : "text-gray-600"

          }`}>

            Un simulateur moderne, confidentiel et conforme aux principes islamiques.

            Estimez votre zakat selon le nisab actuel en quelques secondes.

          </p>



          <div className="flex flex-col md:flex-row gap-6">

            <Link

              href="/select-zakat"

              className={`group flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105 active:scale-95 ${isDark ? "bg-emerald-500 text-white hover:bg-emerald-400 shadow-emerald-500/20 shadow-2xl" : "bg-emerald-600 text-white hover:bg-emerald-700 shadow-xl"}`}

            >

              Commencer le calcul
<ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>



            <Link

              href="/learn"

              className={`px-10 py-5 rounded-2xl text-lg transition-all border font-medium ${

                theme === "dark"

                  ? "bg-transparent border-gray-800 text-gray-300 hover:bg-gray-900"

                  : "bg-white border-emerald-200 text-emerald-700 hover:bg-emerald-50"

              }`}

            >

              Comprendre la Zakat

            </Link>

          </div>



          <p className={`text-sm mt-8 flex items-center gap-2 ${

            theme === "dark" ? "text-gray-500" : "text-gray-400"

          }`}>

            <FaLock className={theme === "dark" ? "text-emerald-500/50" : "text-emerald-600/50"} />

            100% confidentiel — aucune donnée sauvegardée

          </p>

        </div>

      </section>



      {/* --- NISAB SECTION --- */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Valeurs du Nisab</h2>
            <p className={isDark ? "text-slate-400" : "text-slate-500"}>
Valeurs indicatives — synchronisation automatique des prix bientôt disponible            </p>
          </div>
          <div className={`px-4 py-2 rounded-xl text-xs font-bold border ${isDark ? "border-slate-800 text-slate-400" : "bg-white text-slate-500"}`}>
            FÉVRIER 2026
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <NisabCard 
            icon={<Coins className="text-slate-400" />} 
            title="Référence Argent" 
            value={formatFCFA(nisabArgent)} 
            desc="Seuil recommandé pour plus de solidarité (595g)"
            isDark={isDark}
          />
          <NisabCard 
            icon={<Scale className="text-amber-500" />} 
            title="Référence Or" 
            value={formatFCFA(nisabOr)} 
            desc="Seuil basé sur le métal précieux (85g)"
            isDark={isDark}
            highlight
          />
        </div>
      </section>

{/* --- WISDOM CAROUSEL --- */}
<section className={`py-2 px-6 overflow-hidden transition-colors duration-500 ${
  isDark 
    ? "bg-emerald-500/10" 
    : "bg-emerald-500/10" 
    // ^ Créer une bande sombre profonde au milieu de la page claire pour casser le blanc
}`}>
  <div className="max-w-6xl mx-auto">
    <div className={`relative p-8 md:p-14 rounded-[3.5rem] transition-all duration-700 ${
      isDark 
        ? "bg-emerald-0/10" 
        : "bg-emerald-0/0"
        // ^ En mode clair, la carte devient sombre et profonde (Vert Nuit)
    }`}>
      
      {/* Icône de citation stylisée */}
      <Quote className={`absolute top-10 right-12 w-24 h-24 opacity-10 transition-colors ${
        isDark ? "text-emerald-800" : "text-emerald-400"
      }`} />
      
      <div className="relative z-10">
        {/* Badge de Type */}
        <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.15em] mb-8 border transition-colors ${
          isDark 
            ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" 
            : "bg-emerald-800 text-white border-white/10 backdrop-blur-md"
        }`}>
          {sagesses[activeTab].type}
        </span>
        
        {/* Texte de la Sagesse */}
        <div className="min-h-[10px] flex items-center">
          <p className={`text-1xl md:text-2xl font-serif italic leading-tight mb-10 transition-all duration-500 ${
            isDark ? "text-slate-100" : "text-emerald-800"
          }`}>
            {sagesses[activeTab].text}
          </p>
        </div>
        
        {/* Footer de la carte */}
        <div className="flex items-center justify-between border-t border-white/10 pt-8">
<span
  className={`font-bold tracking-tight text-xs sm:text-sm md:text-base lg:text-lg ${
    isDark ? "text-slate-500" : "text-emerald-400/80"
  }`}
>
  — {sagesses[activeTab].ref}
</span>
          
          {/* Boutons de Navigation */}
          <div className="flex gap-3">
            {[
              { icon: <ChevronLeft size={18} />, action: () => setActiveTab(prev => (prev === 0 ? sagesses.length - 1 : prev - 1)) },
              { icon: <ChevronRight size={18} />, action: () => setActiveTab(prev => (prev === sagesses.length - 1 ? 0 : prev + 1)) }
            ].map((btn, i) => (
              <button 
                key={i}
                onClick={btn.action}
                className={`p-2 rounded-2xl transition-all active:scale-90 ${
                  isDark 
                    ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20 hover:bg-slate-700 shadow-lg" 
                    : "bg-emerald-800 text-white hover:bg-emerald-700 border border-emerald-800 backdrop-blur-md shadow-xl"
                }`}
              >
                {btn.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 text-center">
        <div className={`max-w-5xl mx-auto p-12 md:p-20 rounded-[4rem] relative overflow-hidden ${isDark ? "bg-emerald-600" : "bg-emerald-700"}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.2),_transparent)]" />
          <h2 className="relative z-10 text-4xl md:text-5xl font-black text-white mb-10">
            Prêt à accomplir <br /> votre devoir ?
          </h2>
          <Link href="/select-zakat" className="relative z-10 inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-emerald-700 font-black text-xl shadow-2xl hover:scale-105 transition-transform active:scale-95">
            Lancer le simulateur
          </Link>
        </div>
      </section>
    </main>
  )
}

function NisabCard({ icon, title, value, desc, highlight, isDark }: any) {
  return (
    <div className={`p-8 rounded-[2.5rem] border transition-all duration-300 hover:translate-y-[-8px] ${
      highlight 
        ? (isDark ? "bg-slate-900/60 border-amber-500/30 shadow-2xl" : "bg-white border-amber-200 shadow-xl shadow-amber-50") 
        : (isDark ? "bg-slate-900/40 border-slate-800" : "bg-white border-slate-200 shadow-xl shadow-slate-100")
    }`}>
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${isDark ? "bg-slate-800" : "bg-slate-50"}`}>
        {icon}
      </div>
      <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
        {title}
      </h3>
      <p className={`text-3xl font-black mb-4 ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
        {value}
      </p>
      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-500" : "text-slate-500"}`}>
        {desc}
      </p>
    </div>
  )
}