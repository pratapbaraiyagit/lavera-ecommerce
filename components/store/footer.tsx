import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl tracking-widest font-serif uppercase font-medium inline-block mb-6">
              LAVÉRA
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
              Modern silhouettes. Effortless confidence. Contemporary pieces designed to make every moment feel effortlessly yours.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-background transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.25 2.67 7.9 6.44 9.34-.1-.78-.18-1.98.04-2.84l1.37-5.83s-.35-.7-.35-1.74c0-1.63.95-2.85 2.13-2.85 1.01 0 1.5.76 1.5 1.67 0 1.01-.64 2.53-.98 3.94-.28 1.18.6 2.14 1.76 2.14 2.12 0 3.75-2.23 3.75-5.46 0-2.85-2.05-4.85-4.98-4.85-3.39 0-5.38 2.54-5.38 5.17 0 1.01.39 2.1.88 2.69.1.12.11.22.08.34l-.27 1.14c-.04.18-.14.22-.33.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.05 6.6-6.05 3.48 0 6.18 2.48 6.18 5.79 0 3.46-2.18 6.24-5.21 6.24-1.02 0-1.97-.53-2.3-1.15l-.63 2.38c-.23.86-.84 1.94-1.26 2.6A10 10 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors" aria-label="WhatsApp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-widest text-xs mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link href="/shop?sort=newest" className="text-muted-foreground hover:text-background transition-colors text-sm">New Arrivals</Link></li>
              <li><Link href="/shop?category=Dresses" className="text-muted-foreground hover:text-background transition-colors text-sm">Dresses</Link></li>
              <li><Link href="/shop?category=Tops" className="text-muted-foreground hover:text-background transition-colors text-sm">Tops</Link></li>
              <li><Link href="/shop?category=Co-ords" className="text-muted-foreground hover:text-background transition-colors text-sm">Co-ords</Link></li>
              <li><Link href="/shop?sale=true" className="text-muted-foreground hover:text-background transition-colors text-sm">Sale</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-widest text-xs mb-6">Help</h4>
            <ul className="space-y-4">
              <li><Link href="/contact" className="text-muted-foreground hover:text-background transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-background transition-colors text-sm">FAQ</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-background transition-colors text-sm">Shipping</Link></li>
              <li><Link href="/returns" className="text-muted-foreground hover:text-background transition-colors text-sm">Returns</Link></li>
              <li><Link href="/size-guide" className="text-muted-foreground hover:text-background transition-colors text-sm">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-widest text-xs mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-background transition-colors text-sm">About Us</Link></li>
              <li><Link href="/our-story" className="text-muted-foreground hover:text-background transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-background transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-background transition-colors text-sm">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#333333] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} LAVÉRA. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {/* Removed currency/region text per user request */}
          </div>
        </div>
      </div>
    </footer>
  )
}
