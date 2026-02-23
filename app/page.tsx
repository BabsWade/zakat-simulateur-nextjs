"use client"

import Link from "next/link"
import { useRef, useEffect } from "react"
import { useState } from "react"

import { 
  FaLock 
} from "react-icons/fa"
export default function Home() {

  const nisabArgent = 412
  const nisabOr = 6200
const carouselRef = useRef<HTMLDivElement>(null);
const versets = [
  "« La Zakat n’est destinée qu’aux pauvres et aux nécessiteux… » (Sourate At-Tawba, 9:60)",
  "« Et accomplissez la Salât et acquittez la Zakat » (Sourate Al-Baqara, 2:43)",
  "« Et donnez une partie de ce que Nous vous avons attribué » (Sourate Al-Baqara, 2:267)"
]

const hadiths = [
  "Le Prophète ﷺ a dit : « La Zakat est un droit sur les richesses » (Sahih Al-Bukhari)",
  "« Celui qui paie la Zakat sera protégé de l’enfer » (Sahih Muslim)",
  "« Aucun propriétaire de richesse n’acquit la Zakat sauf que sa richesse sera purifiée » (Abu Dawood)"
]
const versetRef = useRef<HTMLDivElement>(null)
  const hadithRef = useRef<HTMLDivElement>(null)

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      [versetRef.current, hadithRef.current].forEach(ref => {
        if (ref) {
          const cardWidth = ref.firstElementChild?.clientWidth || 300
          ref.scrollBy({ left: cardWidth + 24, behavior: 'smooth' }) // 24 = gap
          if (ref.scrollLeft + ref.clientWidth >= ref.scrollWidth) {
            ref.scrollTo({ left: 0, behavior: 'smooth' })
          }
        }
      })
    }, 4000) // change de card toutes les 4s
    return () => clearInterval(interval)
  }, [])
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

          <p className="text-sm text-gray-500 mt-8 flex items-center justify-center gap-2">
  <FaLock className="text-gray-400" /> 100% confidentiel — aucune donnée sauvegardée
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


{/* =======================
   CAROUSEL PREMIUM 1 CARD
======================= */}
<section className="relative py-32 px-6 bg-gradient-to-br from-emerald-50 via-white to-emerald-100 overflow-hidden">

  {/* Glow décoratif */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-400/20 blur-[160px] rounded-full"></div>

  <div className="relative max-w-3xl mx-auto text-center">

    {/* ================= VERSETS ================= */}
    <PremiumCarousel
      badge="Coran"
      color="emerald"
      items={versets}
    />

    {/* ================= HADITHS ================= */}
    <div className="mt-28">
      <PremiumCarousel
        badge="Hadith"
        color="green"
        items={hadiths}
      />
    </div>

  </div>
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

type PremiumCarouselProps = {
  badge: string
  items: string[]
  color: "emerald" | "green"
}

function PremiumCarousel({ badge, items, color }: PremiumCarouselProps) {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [items.length])

  return (
    <div>
      <div className="relative h-[260px] flex items-center justify-center">
        <div
          key={index}
          className={`absolute w-full 
          bg-gradient-to-br ${color === "emerald"
            ? "from-emerald-600 via-emerald-500 to-green-500"
            : "from-green-800 via-emerald-600 to-green-500"}
          text-white
          backdrop-blur-xl
          rounded-3xl p-10 
          border border-white/10
          transition-all duration-700 ease-in-out`}
        >
          <span className="inline-block mb-6 text-xs font-semibold tracking-wider uppercase bg-white/20 text-white px-4 py-1 rounded-full">
            {badge}
          </span>

          <p className="text-white/90 text-lg leading-relaxed">
            {items[index]}
          </p>

          <div className="mt-8 h-1 w-20 bg-white/40 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  )
}
}
