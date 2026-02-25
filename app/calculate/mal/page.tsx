"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaArrowLeft, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa"

export default function ZakatMal() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

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

  // Hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = theme === "dark"

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
    <main className={`min-h-screen transition-colors duration-500 px-6 py-16 ${
      isDark 
        ? "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100" 
        : "bg-gradient-to-br from-emerald-50 via-white to-green-50 text-gray-900"
    }`}>
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 relative z-10">

        {/* SECTION EDUCATIVE */}
        <div className={`backdrop-blur-xl p-10 rounded-3xl border transition-all duration-500 ${
          isDark 
            ? "bg-gray-800/40 border-gray-700 shadow-2xl" 
            : "bg-white/80 border-emerald-100 shadow-xl"
        }`}>
          <h1 className={`text-4xl font-bold mb-6 ${
            isDark ? "text-emerald-400" : "text-emerald-700"
          }`}>
            Zakat al-Mal
          </h1>

          <p className={`leading-relaxed mb-8 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            La Zakat al-Mal est obligatoire sur les richesses détenues
            pendant une année lunaire complète (Hawl), si votre patrimoine
            atteint le seuil du Nisab.
          </p>

          <div className={`rounded-2xl p-6 border transition-colors ${
            isDark 
              ? "bg-emerald-900/20 border-emerald-500/30" 
              : "bg-emerald-50 border-emerald-200"
          }`}>
            <p className={`text-sm mb-1 ${isDark ? "text-emerald-300/70" : "text-emerald-600"}`}>
              🇸🇳 Nisab actuel (Sénégal) :
            </p>
            <p className={`text-3xl font-black ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
              {nisab.toLocaleString()} <span className="text-lg font-normal">FCFA</span>
            </p>
          </div>

          <div className={`mt-8 p-4 rounded-xl text-sm flex items-center gap-3 ${
            isDark ? "bg-gray-900/50 text-gray-400" : "bg-white text-gray-500"
          }`}>
            <span className={`w-2 h-2 rounded-full ${isDark ? "bg-emerald-500" : "bg-emerald-600"}`} />
            Taux de prélèvement : <strong>2,5% (1/40ème)</strong>
          </div>
        </div>

        {/* CALCULATEUR */}
        <div className={`backdrop-blur-xl p-10 rounded-3xl border transition-all duration-500 relative ${
          isDark 
            ? "bg-gray-900/60 border-gray-700 shadow-2xl" 
            : "bg-white border-emerald-100 shadow-2xl"
        }`}>
          
          {/* Progress Bar */}
          <div className="mb-10">
            <div className={`h-1.5 rounded-full overflow-hidden ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
              <div
                className={`h-full transition-all duration-700 ease-out ${
                  isDark ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "bg-emerald-600"
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-3">
               <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Progression</span>
               <span className={`text-xs font-bold ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
                Étape {step} / 4
               </span>
            </div>
          </div>

          {/* Formulaire par étapes */}
          <div className="min-h-[300px] flex flex-col justify-center">
            {step === 1 && (
              <StepWrapper>
                <Input isDark={isDark} label="Liquidités (Cash à domicile)" onChange={(v) => handleChange("cash", v)} />
                <Input isDark={isDark} label="Solde comptes bancaires" onChange={(v) => handleChange("bank", v)} />
                <PrimaryButton isDark={isDark} onClick={() => setStep(2)}>Continuer</PrimaryButton>
              </StepWrapper>
            )}

            {step === 2 && (
              <StepWrapper>
                <Input isDark={isDark} label="Valeur de l'or et de l'argent" onChange={(v) => handleChange("goldSilver", v)} />
                <Input isDark={isDark} label="Valeur des stocks (Commerce)" onChange={(v) => handleChange("business", v)} />
                <ButtonRow>
                  <SecondaryButton isDark={isDark} onClick={() => setStep(1)}>Retour</SecondaryButton>
                  <PrimaryButton isDark={isDark} onClick={() => setStep(3)}>Continuer</PrimaryButton>
                </ButtonRow>
              </StepWrapper>
            )}

            {step === 3 && (
              <StepWrapper>
                <Input isDark={isDark} label="Argent que l'on vous doit" onChange={(v) => handleChange("debtsYou", v)} />
                <Input isDark={isDark} label="Vos dettes à déduire" onChange={(v) => handleChange("debtsOwed", v)} />
                <ButtonRow>
                  <SecondaryButton isDark={isDark} onClick={() => setStep(2)}>Retour</SecondaryButton>
                  <PrimaryButton isDark={isDark} onClick={() => setStep(4)}>Calculer</PrimaryButton>
                </ButtonRow>
              </StepWrapper>
            )}

            {step === 4 && (
              <div className="text-center animate-in fade-in zoom-in duration-500">
                <div className={`rounded-3xl p-8 mb-8 border ${
                  isDark ? "bg-gray-950/50 border-gray-800" : "bg-gray-50 border-gray-100"
                }`}>
                  <p className={`text-sm uppercase tracking-widest font-bold mb-2 ${isDark ? "text-gray-500" : "text-gray-400"}`}>
                    Patrimoine Net Calculé
                  </p>
                  <p className="text-3xl font-bold mb-6">
                    {netWealth.toLocaleString()} <span className="text-lg">FCFA</span>
                  </p>

                  {netWealth >= nisab ? (
                    <div className={`pt-6 border-t ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                      <div className={`inline-flex items-center gap-2 mb-3 px-4 py-1 rounded-full text-sm font-medium ${
                        isDark ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-100 text-emerald-700"
                      }`}>
                        <FaCheckCircle /> Éligible à la Zakat
                      </div>
                      <p className={`text-4xl font-black ${isDark ? "text-emerald-400" : "text-emerald-600"}`}>
                        {zakat.toLocaleString()} <span className="text-xl">FCFA</span>
                      </p>
                    </div>
                  ) : (
                    <div className={`pt-6 border-t flex flex-col items-center ${isDark ? "border-gray-800" : "border-gray-200"}`}>
                       <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium ${
                        isDark ? "bg-amber-500/10 text-amber-400" : "bg-amber-50 text-amber-700"
                      }`}>
                        <FaExclamationTriangle /> Seuil du Nisab non atteint
                      </div>
                      <p className="text-sm text-gray-500 mt-4 max-w-[250px]">
                        Vous n'avez pas l'obligation de payer la Zakat sur ce montant.
                      </p>
                    </div>
                  )}
                </div>

                <SecondaryButton isDark={isDark} onClick={() => setStep(1)}>
                  Nouveau calcul
                </SecondaryButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

/* SOUS-COMPOSANTS STYLISÉS */

function StepWrapper({ children }: any) {
  return <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">{children}</div>
}

function ButtonRow({ children }: any) {
  return <div className="flex justify-between gap-4">{children}</div>
}

function PrimaryButton({ children, onClick, isDark }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 rounded-2xl font-bold shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300 ${
        isDark 
          ? "bg-emerald-500 text-white hover:bg-emerald-400" 
          : "bg-emerald-600 text-white hover:bg-emerald-700"
      }`}
    >
      {children}
    </button>
  )
}

function SecondaryButton({ children, onClick, isDark }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 rounded-2xl font-bold border transition-all duration-300 ${
        isDark 
          ? "border-gray-700 text-gray-300 hover:bg-gray-800" 
          : "border-emerald-200 text-emerald-700 hover:bg-emerald-50"
      }`}
    >
      {children}
    </button>
  )
}
type InputProps = {
  label: string
  onChange: (value: number) => void
  isDark: boolean
}
function Input({ label, onChange, isDark }: InputProps) {
  return (
    <div className="group">
      <label className={`block text-xs font-bold uppercase tracking-wider mb-2 transition-colors ${
        isDark ? "text-gray-500 group-focus-within:text-emerald-400" : "text-gray-400 group-focus-within:text-emerald-600"
      }`}>
        {label}
      </label>
      <input
        type="number"
        min="0"
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full p-4 rounded-2xl outline-none border transition-all duration-300 font-medium ${
          isDark 
            ? "bg-gray-950 border-gray-800 focus:border-emerald-500/50 text-white focus:ring-4 focus:ring-emerald-500/10" 
            : "bg-white border-gray-100 focus:border-emerald-400 text-gray-900 focus:ring-4 focus:ring-emerald-100"
        }`}
        placeholder="0"
      />
    </div>
  )
}