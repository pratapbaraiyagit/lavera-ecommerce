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
              {/* Social placeholders */}
              <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm uppercase tracking-wider">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm uppercase tracking-wider">Facebook</a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm uppercase tracking-wider">Pinterest</a>
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
            <span className="text-muted-foreground text-xs">INR / India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
