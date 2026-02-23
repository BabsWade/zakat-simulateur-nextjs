"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa"

export default function Navbar() {
  const pathname = usePathname()
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Charger thème sauvegardé
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") setDark(true)
  }, [])

  // Fermer automatiquement le menu à chaque navigation
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Appliquer thème
  useEffect(() => {
    const html = document.documentElement
    if (dark) {
      html.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      html.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [dark])

  const navLink = (href: string, label: string) => {
    const active = pathname === href

    return (
      <Link
        href={href}
        className={`relative transition font-medium ${
          active
            ? "text-emerald-600"
            : "text-gray-700 dark:text-gray-300 hover:text-emerald-600"
        }`}
      >
        {label}
        {active && (
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-emerald-600 rounded-full"></span>
        )}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-b border-emerald-100 dark:border-gray-800 shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-emerald-600">Zakat</span>
          <span className="text-gray-900 dark:text-white">SN</span>
        </Link>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-10">
          {navLink("/", "Accueil")}
          {navLink("/select-zakat", "Types")}
          {navLink("/learn", "Comprendre")}

          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-xl hover:bg-emerald-100 dark:hover:bg-gray-800 transition text-emerald-600"
          >
            {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </nav>

        {/* BOUTON MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-emerald-600"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-4 flex flex-col gap-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl">

          <div className="flex flex-col gap-6 text-center text-lg font-medium">

            <Link
              href="/"
              className="py-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition"
            >
              Accueil
            </Link>

            <Link
              href="/select-zakat"
              className="py-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition"
            >
              Types de Zakat
            </Link>

            <Link
              href="/learn"
              className="py-3 text-gray-700 dark:text-gray-300 hover:text-emerald-600 transition"
            >
              Comprendre la Zakat
            </Link>

          </div>

          <div className="border-t border-emerald-100 dark:border-gray-800 pt-6">

            <button
              onClick={() => setDark(!dark)}
              className="w-full flex justify-center items-center gap-3 text-emerald-600 font-medium py-3"
            >
              {dark ? <FaSun /> : <FaMoon />}
              {dark ? "Mode clair" : "Mode sombre"}
            </button>

          </div>

        </div>
      </div>

    </header>
  )
}