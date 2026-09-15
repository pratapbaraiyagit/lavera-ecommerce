"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Search, Heart, User, ShoppingBag, Menu, X, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useCart } from "@/lib/cart"

function CartCount() {
  const [mounted, setMounted] = useState(false)
  const items = useCart(state => state.items)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const count = items.reduce((total, item) => total + item.quantity, 0)
  
  if (count === 0) return null

  return (
    <span className="absolute -top-1 -right-2 bg-foreground text-background text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
      {count}
    </span>
  )
}

const navLinks = [
  { name: "New Arrivals", href: "/new-arrivals" },
  { name: "Shop", href: "/shop" },
  { name: "Categories", href: "/categories" },
  { name: "Best Sellers", href: "/best-sellers" },
  { name: "Sale", href: "/sale" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu and search when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/shop?q=${encodeURIComponent(searchQuery)}`)
      setSearchOpen(false)
      setSearchQuery("")
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-border shadow-sm py-4"
          : "bg-background py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -ml-2 text-foreground"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="z-10 flex items-center justify-center relative w-32 h-8 md:w-40 md:h-10"
        >
          <Image 
            src="/logo.svg" 
            alt="LAVÉRA Logo" 
            fill 
            priority
            className="object-contain" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider text-[11px] font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 z-10">
          <button 
            aria-label="Search" 
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-foreground hover:opacity-70 transition-opacity"
          >
            {searchOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Search className="w-5 h-5 stroke-[1.5]" />}
          </button>
          <Link href="/account/wishlist" aria-label="Wishlist" className="hidden md:block text-foreground hover:opacity-70 transition-opacity">
            <Heart className="w-5 h-5 stroke-[1.5]" />
          </Link>
          <Link href="/account" aria-label="Account" className="text-foreground hover:opacity-70 transition-opacity">
            <User className="w-5 h-5 stroke-[1.5]" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="text-foreground hover:opacity-70 transition-opacity relative">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            <CartCount />
          </Link>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-border shadow-sm p-6 md:p-8 z-40"
          >
            <div className="container mx-auto max-w-3xl">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-muted-foreground stroke-[1.5]" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full bg-secondary/30 border-none py-4 pl-12 pr-12 text-lg focus:outline-none focus:ring-0 placeholder:text-muted-foreground font-light"
                  autoFocus
                />
                <button type="submit" className="absolute right-4 text-black hover:opacity-70 transition-opacity">
                  <ArrowRight className="w-5 h-5 stroke-[1.5]" />
                </button>
              </form>
              <div className="mt-6 flex items-center space-x-4 text-sm text-muted-foreground">
                <span className="font-medium text-black">Popular:</span>
                <Link href="/shop?category=Dresses" onClick={() => setSearchOpen(false)} className="hover:text-black hover:underline underline-offset-4">Dresses</Link>
                <Link href="/shop?sort=newest" onClick={() => setSearchOpen(false)} className="hover:text-black hover:underline underline-offset-4">New Arrivals</Link>
                <Link href="/shop?category=Denim" onClick={() => setSearchOpen(false)} className="hover:text-black hover:underline underline-offset-4">Denim</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-3/4 max-w-sm bg-background border-r border-border z-50 p-6 flex flex-col md:hidden"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="relative w-28 h-6">
                  <Image src="/logo.svg" alt="LAVÉRA Logo" fill className="object-contain" />
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 -mr-2 text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col space-y-6 flex-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg uppercase tracking-wider font-light"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6 border-t border-border flex flex-col space-y-4">
                <Link href="/account/wishlist" className="flex items-center space-x-3 text-sm uppercase tracking-wider">
                  <Heart className="w-4 h-4" />
                  <span>Wishlist</span>
                </Link>
                <Link href="/account" className="flex items-center space-x-3 text-sm uppercase tracking-wider">
                  <User className="w-4 h-4" />
                  <span>Account</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
