"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { FaSun, FaMoon } from "react-icons/fa"
import { Home, Calculator, BookOpen } from "lucide-react" // Plus moderne pour le mobile
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
    
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Si on scroll vers le haut, on montre. Si on scroll vers le bas, on cache.
        if (window.scrollY > lastScrollY && window.scrollY > 80) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
      }
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [lastScrollY])

  if (!mounted) return null
  const isDark = theme === "dark"

  const toggleTheme = () => setTheme(isDark ? "light" : "dark")

  // Liens pour le menu mobile
  const mobileLinks = [
    { href: "/", label: "Accueil", icon: <Home size={20} /> },
    { href: "/select-zakat", label: "Calcul", icon: <Calculator size={20} /> },
    { href: "/learn", label: "Guide", icon: <BookOpen size={20} /> },
  ]

  return (
    <>
      {/* --- HEADER DESKTOP + THEME SWITCHER (Toujours en haut) --- */}
      <header 
        className={`fixed top-0 w-full z-50 transition-colors duration-500 border-b backdrop-blur-xl ${
          isDark ? "bg-gray-900/80 border-gray-800" : "bg-white/80 border-emerald-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-black tracking-tighter group">
            <span className="text-emerald-500">Zakat</span>
            <span className={isDark ? "text-white" : "text-gray-900"}>SN</span>
          </Link>

          {/* NAV DESKTOP */}
          <nav className="hidden md:flex items-center gap-10">
            {["/", "/select-zakat", "/learn"].map((href) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  pathname === href ? "text-emerald-500" : isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {href === "/" ? "Accueil" : href === "/select-zakat" ? "Simulateurs" : "Guide"}
              </Link>
            ))}
          </nav>

          {/* THEME TOGGLE (Mobile & Desktop) */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-2xl transition-all ${
              isDark ? "bg-gray-800 text-yellow-400" : "bg-emerald-50 text-emerald-600"
            }`}
          >
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
        </div>
      </header>

      {/* --- BOTTOM NAVBAR MOBILE --- */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed bottom-6 left-0 right-0 z-50 px-6 md:hidden"
          >
            <nav className={`flex justify-around items-center p-2 rounded-[2.5rem] shadow-2xl border backdrop-blur-2xl ${
              isDark ? "bg-gray-950/90 border-white/10" : "bg-white/90 border-emerald-100"
            }`}>
              {mobileLinks.map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex flex-col items-center gap-1 transition-all duration-300 ${
                      active 
                        ? "text-emerald-500 scale-110" 
                        : isDark ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    <div className={`p-2 rounded-xl ${active && (isDark ? "bg-emerald-500/10" : "bg-emerald-50")}`}>
                      {link.icon}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter">{link.label}</span>
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}