"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Indispensable pour éviter le flash d'hydratation
  useEffect(() => {
    setMounted(true)
  }, [])

  // Fermer le menu à chaque changement de page
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  if (!mounted) return null

  const isDark = theme === "dark"

  const navLink = (href: string, label: string) => {
    const active = pathname === href

    return (
      <Link
        href={href}
        className={`relative transition-all duration-300 font-semibold text-sm uppercase tracking-wider ${
          active
            ? "text-emerald-500"
            : isDark 
              ? "text-gray-400 hover:text-emerald-400" 
              : "text-gray-600 hover:text-emerald-600"
        }`}
      >
        {label}
        {active && (
          <span className={`absolute -bottom-2 left-0 w-full h-[3px] rounded-full transition-all ${
            isDark ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" : "bg-emerald-600"
          }`}></span>
        )}
      </Link>
    )
  }

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <header 
      className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-500 ${
        isDark 
          ? "bg-gray-900/80 border-gray-800 shadow-2xl" 
          : "bg-white/80 border-emerald-100 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-black tracking-tighter group">
          <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors">Zakat</span>
          <span className={`transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>
            SN
          </span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navLink("/", "Accueil")}
          {navLink("/select-zakat", "Simulateurs")}
          {navLink("/learn", "Guide")}

          <button
            onClick={toggleTheme}
            className={`p-3 rounded-2xl transition-all duration-300 ${
              isDark 
                ? "bg-gray-800 text-yellow-400 hover:bg-gray-700" 
                : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
            }`}
            aria-label="Changer de thème"
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </nav>

        {/* BOUTON MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-xl transition-colors ${
            isDark ? "text-emerald-400 hover:bg-gray-800" : "text-emerald-600 hover:bg-emerald-50"
          }`}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden border-t ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } ${isDark ? "border-gray-800 bg-gray-900" : "border-emerald-50 bg-white"}`}
      >
        <div className="px-8 py-10 flex flex-col gap-8">
          <div className="flex flex-col gap-6 text-left">
            {["/", "/select-zakat", "/learn"].map((href, i) => (
              <Link
                key={href}
                href={href}
                className={`text-xl font-bold transition-colors ${
                  pathname === href 
                    ? "text-emerald-500" 
                    : isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {href === "/" ? "Accueil" : href === "/select-zakat" ? "Calculer ma Zakat" : "Comprendre"}
              </Link>
            ))}
          </div>

          <div className={`pt-8 border-t ${isDark ? "border-gray-800" : "border-emerald-50"}`}>
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-between p-4 rounded-2xl font-bold transition-all ${
                isDark ? "bg-gray-800 text-yellow-400" : "bg-emerald-50 text-emerald-700"
              }`}
            >
              <span>{isDark ? "Passer en mode clair" : "Passer en mode sombre"}</span>
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}