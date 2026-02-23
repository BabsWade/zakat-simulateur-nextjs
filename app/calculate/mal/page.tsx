"use client"

import { useState } from "react"

export default function ZakatMal() {

  const nisab = 380000
  const taux = 0.025

  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    cash: 0,
    bank: 0,
    goldSilver: 0,
    business: 0,
    debtsYou: 0,
    debtsOwed: 0,
  })

  const handleChange = (field: string, value: number) => {
    setForm({ ...form, [field]: value })
  }

  const totalAssets =
    form.cash +
    form.bank +
    form.goldSilver +
    form.business +
    form.debtsYou

  const netWealth = totalAssets - form.debtsOwed
  const zakat = netWealth >= nisab ? netWealth * taux : 0

  const progress = (step / 4) * 100

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 px-6 py-16">

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* SECTION EDUCATIVE PREMIUM */}
        <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl border border-emerald-100 shadow-xl space-y-6">

          <h1 className="text-4xl font-bold text-emerald-700">
            Zakat al-Mal
          </h1>

          <p className="text-gray-600 leading-relaxed">
            La Zakat al-Mal est obligatoire sur les richesses détenues
            pendant une année lunaire complète (Hawl), si votre patrimoine
            atteint le seuil du Nisab.
          </p>

          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5">
            <p className="text-sm text-gray-700">
              🇸🇳 Nisab estimatif au Sénégal :
            </p>
            <p className="text-2xl font-bold text-emerald-700 mt-1">
              {nisab.toLocaleString()} FCFA
            </p>
          </div>

          <div className="text-sm text-gray-500">
            Taux appliqué : <strong>2,5%</strong> (1/40)
          </div>

        </div>

        {/* CALCULATEUR PREMIUM */}
        <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl border border-emerald-100 shadow-2xl">

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Étape {step} sur 4
            </p>
          </div>

          {/* STEPS */}

          {step === 1 && (
            <StepWrapper>
              <Input label="Cash à domicile (FCFA)" onChange={(v: number) => handleChange("cash", v)} />
              <Input label="Comptes bancaires (FCFA)" onChange={(v: number) => handleChange("bank", v)} />
              <PrimaryButton onClick={() => setStep(2)}>Continuer</PrimaryButton>
            </StepWrapper>
          )}

          {step === 2 && (
            <StepWrapper>
              <Input label="Valeur de l’or et argent (FCFA)" onChange={(v: number) => handleChange("goldSilver", v)} />
              <Input label="Biens commerciaux / stock (FCFA)" onChange={(v: number) => handleChange("business", v)} />

              <ButtonRow>
                <SecondaryButton onClick={() => setStep(1)}>Retour</SecondaryButton>
                <PrimaryButton onClick={() => setStep(3)}>Continuer</PrimaryButton>
              </ButtonRow>
            </StepWrapper>
          )}

          {step === 3 && (
            <StepWrapper>
              <Input label="Dettes que l’on vous doit (FCFA)" onChange={(v: number) => handleChange("debtsYou", v)} />
              <Input label="Vos dettes à payer (FCFA)" onChange={(v: number) => handleChange("debtsOwed", v)} />

              <ButtonRow>
                <SecondaryButton onClick={() => setStep(2)}>Retour</SecondaryButton>
                <PrimaryButton onClick={() => setStep(4)}>Voir le résultat</PrimaryButton>
              </ButtonRow>
            </StepWrapper>
          )}

          {step === 4 && (
            <div className="text-center space-y-6">

              <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8">

                <p className="text-gray-600 mb-2">Patrimoine net</p>
                <p className="text-3xl font-bold">
                  {netWealth.toLocaleString()} FCFA
                </p>

                {netWealth >= nisab ? (
                  <>
                    <div className="mt-6 border-t pt-6">
                      <p className="text-emerald-700 font-semibold">
                        Zakat à payer (2,5%)
                      </p>
                      <p className="text-4xl font-extrabold text-emerald-700 mt-2">
                        {zakat.toLocaleString()} FCFA
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="text-red-500 font-semibold mt-4">
                    Le Nisab n’est pas atteint
                  </p>
                )}
              </div>

              <SecondaryButton onClick={() => setStep(1)}>
                Recommencer
              </SecondaryButton>

            </div>
          )}

        </div>
      </div>
    </main>
  )
}


/* UI COMPONENTS PREMIUM */

function StepWrapper({ children }: any) {
  return <div className="space-y-6">{children}</div>
}

function ButtonRow({ children }: any) {
  return <div className="flex justify-between gap-4">{children}</div>
}

function PrimaryButton({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all"
    >
      {children}
    </button>
  )
}

function SecondaryButton({ children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className="w-full border border-emerald-600 text-emerald-700 py-4 rounded-2xl font-semibold hover:bg-emerald-50 transition"
    >
      {children}
    </button>
  )
}

function Input({ label, onChange }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2 text-gray-700">
        {label}
      </label>
      <input
        type="number"
        min="0"
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 p-4 rounded-2xl outline-none transition"
        placeholder="0"
      />
    </div>
  )
}