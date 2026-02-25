"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { FaMoon, FaUsers, FaMoneyBillWave, FaArrowLeft } from "react-icons/fa"

export default function ZakatFitrPage() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [people, setPeople] = useState(1)
  const [amountPerPerson, setAmountPerPerson] = useState(1500)

  // Gestion de l'hydratation pour éviter les erreurs next-themes
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"
  const total = people * amountPerPerson

  return (
    <main className={`min-h-screen transition-colors duration-500 px-6 py-20 relative overflow-hidden ${
      isDark 
        ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100" 
        : "bg-gradient-to-br from-emerald-50 via-white to-green-50 text-gray-900"
    }`}>
      
      {/* Décoration d'arrière-plan */}
      <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20 transition-colors ${
        isDark ? "bg-emerald-500/20" : "bg-emerald-400"
      }`} />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 relative z-10">

        {/* SECTION EDUCATIVE */}
        <div className={`backdrop-blur-xl p-10 rounded-3xl border transition-all duration-500 ${
          isDark 
            ? "bg-gray-800/40 border-gray-700 shadow-2xl" 
            : "bg-white/70 border-emerald-100 shadow-xl"
        }`}>
          <div className="space-y-6">
            <span className={`inline-block px-4 py-2 text-sm rounded-full font-medium transition-colors ${
              isDark ? "bg-emerald-900/40 text-emerald-300" : "bg-emerald-100 text-emerald-700"
            }`}>
              Ramadan & Solidarité
            </span>

            <h1 className={`text-4xl font-bold flex items-center gap-3 ${
              isDark ? "text-emerald-400" : "text-emerald-700"
            }`}>
              Zakat al-Fitr <FaMoon className="text-2xl opacity-80" />
            </h1>

            <p className={`leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              La Zakat al-Fitr est une aumône obligatoire à verser avant la
              prière de l’Aïd. Elle purifie le jeûne du Ramadan et permet aux
              plus démunis de célébrer l’Aïd dignement.
            </p>

            <div className="space-y-4">
              <h2 className="font-bold flex items-center gap-2">
                <FaUsers className={isDark ? "text-emerald-400" : "text-emerald-600"} />
                Qui doit la payer ?
              </h2>
              <ul className={`space-y-2 list-none ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Tout musulman ayant de quoi nourrir sa famille
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Pour lui-même et chaque personne à sa charge
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Y compris les nouveau-nés
                </li>
              </ul>
            </div>

            <div className={`rounded-2xl p-6 border transition-colors ${
              isDark 
                ? "bg-emerald-900/20 border-emerald-500/30" 
                : "bg-emerald-50 border-emerald-200"
            }`}>
              <p className={`text-sm mb-1 ${isDark ? "text-emerald-300/70" : "text-emerald-600"}`}>
                🇸🇳 Montant courant au Sénégal :
              </p>
              <p className={`text-2xl font-black ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                1 500 – 2 000 <span className="text-lg font-normal">FCFA / personne</span>
              </p>
            </div>
          </div>
        </div>

        {/* CALCULATEUR */}
        <div className={`backdrop-blur-xl p-10 rounded-3xl border transition-all duration-500 ${
          isDark 
            ? "bg-gray-900/60 border-gray-700 shadow-2xl" 
            : "bg-white/90 border-emerald-100 shadow-2xl"
        }`}>
          <h2 className="text-2xl font-bold mb-8 text-center">Calculer votre aumône</h2>

          <div className="space-y-8">
            {/* Nombre de personnes */}
            <div className="group">
              <label className={`block text-xs font-bold uppercase tracking-wider mb-3 transition-colors ${
                isDark ? "text-gray-500 group-focus-within:text-emerald-400" : "text-gray-400 group-focus-within:text-emerald-600"
              }`}>
                Nombre de personnes à charge
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  value={people}
                  onChange={(e) => setPeople(Number(e.target.value))}
                  className={`w-full p-4 rounded-2xl outline-none border transition-all duration-300 font-bold text-lg ${
                    isDark 
                      ? "bg-gray-950 border-gray-800 focus:border-emerald-500/50 text-white" 
                      : "bg-white border-gray-100 focus:border-emerald-400 text-gray-900"
                  }`}
                />
                <FaUsers className={`absolute right-4 top-1/2 -translate-y-1/2 opacity-30 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
              </div>
            </div>

            {/* Montant par personne */}
            <div className="group">
              <label className={`block text-xs font-bold uppercase tracking-wider mb-3 transition-colors ${
                isDark ? "text-gray-500 group-focus-within:text-emerald-400" : "text-gray-400 group-focus-within:text-emerald-600"
              }`}>
                Montant par personne (FCFA)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="100"
                  value={amountPerPerson}
                  onChange={(e) => setAmountPerPerson(Number(e.target.value))}
                  className={`w-full p-4 rounded-2xl outline-none border transition-all duration-300 font-bold text-lg ${
                    isDark 
                      ? "bg-gray-950 border-gray-800 focus:border-emerald-500/50 text-white" 
                      : "bg-white border-gray-100 focus:border-emerald-400 text-gray-900"
                  }`}
                />
                <FaMoneyBillWave className={`absolute right-4 top-1/2 -translate-y-1/2 opacity-30 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
              </div>

              {/* Quick select */}
              <div className="flex gap-4 mt-4">
                {[1500, 2000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmountPerPerson(amt)}
                    className={`flex-1 py-3 rounded-xl font-bold transition-all duration-300 border ${
                      amountPerPerson === amt
                        ? (isDark ? "bg-emerald-500 border-emerald-400 text-white shadow-lg shadow-emerald-500/20" : "bg-emerald-600 border-emerald-500 text-white")
                        : (isDark ? "border-gray-800 text-gray-400 hover:bg-gray-800" : "border-emerald-200 text-emerald-700 hover:bg-emerald-50")
                    }`}
                  >
                    {amt.toLocaleString()} <span className="text-xs font-normal">FCFA</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Résultat final */}
            <div className={`rounded-3xl p-8 text-center transition-all transform hover:scale-[1.02] ${
              isDark 
                ? "bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30" 
                : "bg-gradient-to-br from-emerald-600 to-green-500 text-white shadow-xl shadow-emerald-200"
            }`}>
              <p className={`text-sm font-medium mb-2 ${isDark ? "text-emerald-300" : "text-emerald-50"}`}>
                Montant total à verser
              </p>
              <p className="text-5xl font-black mb-2">
                {total.toLocaleString()} <span className="text-2xl font-light">FCFA</span>
              </p>
              <div className={`h-px w-16 mx-auto my-4 ${isDark ? "bg-emerald-500/30" : "bg-white/30"}`} />
              <p className={`text-xs uppercase tracking-widest font-bold ${isDark ? "text-emerald-400/80" : "text-emerald-100"}`}>
                {people} personne(s) × {amountPerPerson.toLocaleString()} FCFA
              </p>
            </div>

            <div className="text-center pt-4">
              <Link
                href="/select-zakat"
                className={`inline-flex items-center gap-2 font-bold transition-colors ${
                  isDark ? "text-emerald-400 hover:text-emerald-300" : "text-emerald-700 hover:text-emerald-900"
                }`}
              >
                <FaArrowLeft className="text-xs" /> Retour au choix
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}