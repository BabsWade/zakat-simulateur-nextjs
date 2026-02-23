"use client"

import { useState } from "react"
import Link from "next/link"

export default function ZakatFitrPage() {
  const [people, setPeople] = useState(1)
  const [amountPerPerson, setAmountPerPerson] = useState(1500)

  const total = people * amountPerPerson

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 px-6 py-20">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* SECTION EDUCATIVE PREMIUM */}
        <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-emerald-100 shadow-xl space-y-6">

          <div>
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium mb-4">
              Ramadan & Solidarité
            </span>

            <h1 className="text-4xl font-bold text-emerald-700">
              Zakat al-Fitr 🌙
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            La Zakat al-Fitr est une aumône obligatoire à verser avant la
            prière de l’Aïd. Elle purifie le jeûne du Ramadan et permet aux
            plus démunis de célébrer l’Aïd dignement.
          </p>

          <div>
            <h2 className="font-semibold mb-2">Qui doit la payer ?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Tout musulman ayant de quoi nourrir sa famille</li>
              <li>Pour lui-même</li>
              <li>Pour chaque personne à sa charge</li>
            </ul>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
            <p className="text-sm text-gray-700">
              🇸🇳 Montant courant au Sénégal
            </p>
            <p className="text-2xl font-bold text-emerald-700 mt-1">
              1 500 – 2 000 FCFA par personne
            </p>
          </div>

        </div>

        {/* CALCULATEUR PREMIUM */}
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-emerald-100 shadow-2xl">

          <h2 className="text-2xl font-bold mb-8 text-center">
            Calculer votre montant
          </h2>

          {/* Nombre de personnes */}
          <div className="mb-8">
            <label className="block font-medium mb-3 text-gray-700">
              Nombre de personnes à charge
            </label>
            <input
              type="number"
              min="1"
              value={people}
              onChange={(e) => setPeople(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            />
          </div>

          {/* Montant par personne */}
          <div className="mb-8">
            <label className="block font-medium mb-3 text-gray-700">
              Montant par personne (FCFA)
            </label>

            <input
              type="number"
              step="100"
              value={amountPerPerson}
              onChange={(e) => setAmountPerPerson(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-2xl px-4 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition"
            />

            {/* Quick select */}
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => setAmountPerPerson(1500)}
                className="flex-1 border border-emerald-600 text-emerald-700 py-2 rounded-xl hover:bg-emerald-50 transition"
              >
                1 500 FCFA
              </button>
              <button
                onClick={() => setAmountPerPerson(2000)}
                className="flex-1 border border-emerald-600 text-emerald-700 py-2 rounded-xl hover:bg-emerald-50 transition"
              >
                2 000 FCFA
              </button>
            </div>
          </div>

          {/* Résultat Premium */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center mb-8">

            <p className="text-gray-600 mb-2">Montant total à verser</p>

            <p className="text-4xl font-extrabold text-emerald-700">
              {total.toLocaleString()} FCFA
            </p>

            <p className="text-sm text-gray-500 mt-2">
              {people} personne(s) × {amountPerPerson.toLocaleString()} FCFA
            </p>

          </div>

          <div className="text-center">
            <Link
              href="/"
              className="text-emerald-700 hover:text-emerald-900 font-medium transition"
            >
              ← Retour à l’accueil
            </Link>
          </div>

        </div>

      </div>
    </main>
  )
}