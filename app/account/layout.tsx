"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import { Header } from "@/components/store/header"
import { Footer } from "@/components/store/footer"
import { cn } from "@/lib/utils"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && (!isAuthenticated || user?.role !== 'customer')) {
      router.push('/login')
    }
  }, [mounted, isAuthenticated, user, router])

  if (!mounted || !isAuthenticated || user?.role !== 'customer') {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const links = [
    { name: "Dashboard", href: "/account" },
    { name: "Orders", href: "/account/orders" },
    { name: "Wishlist", href: "/account/wishlist" },
    { name: "Addresses", href: "/account/addresses" },
    { name: "Settings", href: "/account/settings" },
  ]

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16 bg-secondary/10 min-h-[80vh]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            
            {/* Sidebar */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <div className="bg-white p-6 shadow-sm border border-border">
                <h2 className="text-xl font-serif mb-6 pb-4 border-b border-border">My Account</h2>
                <nav className="flex flex-col space-y-2 mb-8">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={cn(
                        "px-4 py-2 text-sm font-medium transition-colors",
                        pathname === link.href 
                          ? "bg-secondary text-black" 
                          : "text-muted-foreground hover:bg-secondary/50 hover:text-black"
                      )}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <button 
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-sm font-medium text-destructive hover:bg-destructive/10 transition-colors"
                >
                  Logout
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white p-6 md:p-10 shadow-sm border border-border">
                {children}
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
