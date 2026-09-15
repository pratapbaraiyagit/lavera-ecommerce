"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, ChevronRight, Share2, Ruler, CheckCircle2, X } from "lucide-react"
import { Product } from "@/types/product"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useCart } from "@/lib/cart"
import { useWishlist } from "@/lib/wishlist"
import { useProductStore } from "@/lib/products"
import { motion, AnimatePresence } from "framer-motion"
import { FadeIn } from "@/components/ui/fade-in"

export function ProductDetails({ product: initialProduct, relatedProducts }: { product: Product, relatedProducts: Product[] }) {
  // Hydrate from local storage store if edited in admin
  const storeProduct = useProductStore(state => state.getProductById(initialProduct.id))
  const product = storeProduct || initialProduct

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const addItem = useCart(state => state.addItem)
  const { toggleItem, isInWishlist } = useWishlist()
  
  const isWishlisted = isInWishlist(product.id)

  const handleAddToCart = () => {
    addItem({
      product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    })
    setShowModal(true)
    setTimeout(() => {
      setShowModal(false)
    }, 4000)
  }

  const hasDiscount = product.originalPrice && product.originalPrice > product.price

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 relative">
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 right-4 md:right-8 z-50 bg-white border border-border shadow-lg p-4 w-[340px] flex flex-col"
          >
            <div className="flex justify-between items-start mb-4 border-b border-border pb-3">
              <div className="flex items-center text-green-600 font-medium">
                <CheckCircle2 className="w-5 h-5 mr-2" />
                <span>Added to your bag</span>
              </div>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-black">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-4">
              <div className="relative aspect-[3/4] w-16 bg-secondary/30 flex-shrink-0">
                <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col flex-1">
                <span className="font-medium text-sm line-clamp-1">{product.name}</span>
                <span className="text-xs text-muted-foreground mt-1">{selectedColor} / {selectedSize}</span>
                <span className="text-xs text-muted-foreground mt-1">Qty: {quantity}</span>
              </div>
            </div>
            <Link 
              href="/cart"
              className="mt-6 w-full bg-black text-white text-center py-3 text-xs font-medium uppercase tracking-widest hover:bg-black/90 transition-colors"
            >
              View Bag & Checkout
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Breadcrumbs */}
      <FadeIn delay={0.1}>
        <nav className="flex items-center text-xs text-muted-foreground uppercase tracking-widest mb-8">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <Link href={`/shop?category=${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
          <ChevronRight className="w-3 h-3 mx-2" />
          <span className="text-black">{product.name}</span>
        </nav>
      </FadeIn>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-24">
        {/* Left: Image Gallery */}
        <FadeIn direction="right" delay={0.2} className="w-full lg:w-3/5 flex flex-col md:flex-row-reverse gap-4">
          <div className="relative aspect-[3/4] w-full bg-secondary/30">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex md:flex-col gap-4 overflow-x-auto md:w-24 flex-shrink-0 hide-scrollbar pb-2 md:pb-0">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={cn(
                  "relative aspect-[3/4] w-20 md:w-full flex-shrink-0 border transition-colors",
                  selectedImage === idx ? "border-black" : "border-transparent hover:border-border"
                )}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Right: Product Info */}
        <FadeIn direction="left" delay={0.3} className="w-full lg:w-2/5 flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <span className="text-xl">${product.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                {hasDiscount && (
                  <span className="text-muted-foreground line-through">${product.originalPrice?.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span className="text-black">★ {product.rating}</span>
                <span>({product.reviews} reviews)</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm uppercase tracking-widest font-medium">Color: {selectedColor}</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={cn(
                    "px-4 py-2 border text-sm transition-colors",
                    selectedColor === color ? "border-black border-2 font-medium" : "border-border hover:border-black/50 text-muted-foreground"
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm uppercase tracking-widest font-medium">Size: {selectedSize}</span>
              <button className="text-xs text-muted-foreground hover:text-black underline underline-offset-4 flex items-center">
                <Ruler className="w-3 h-3 mr-1" /> Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={cn(
                    "w-12 h-12 flex items-center justify-center border text-sm transition-colors",
                    selectedSize === size ? "border-black border-2 font-medium bg-black text-white" : "border-border hover:border-black/50 text-muted-foreground"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 mb-10">
            <div className="flex border border-border">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
              >-</button>
              <div className="w-10 h-12 flex items-center justify-center text-sm">{quantity}</div>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-12 flex items-center justify-center hover:bg-secondary transition-colors"
              >+</button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white text-sm font-medium uppercase tracking-widest hover:bg-black/90 transition-colors"
            >
              Add to Bag
            </button>
            <button 
              onClick={() => toggleItem(product.id)}
              className={cn(
                "w-12 h-12 border transition-colors flex items-center justify-center",
                isWishlisted ? "border-red-500 bg-red-50" : "border-border hover:border-black"
              )}
              aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={cn("w-5 h-5", isWishlisted ? "fill-red-500 text-red-500" : "text-muted-foreground")} />
            </button>
          </div>

          {/* Accordions (Simulated) */}
          <div className="border-t border-border">
            {[
              { title: "Description", content: product.description },
              { title: "Fabric & Care", content: "Dry clean only. Do not bleach. Iron on low heat if needed." },
              { title: "Shipping & Returns", content: "Free standard shipping on all orders over $10,000. Returns accepted within 14 days of delivery." }
            ].map((section, idx) => (
              <details key={idx} className="group border-b border-border py-4" open={idx === 0}>
                <summary className="flex justify-between items-center cursor-pointer list-none font-medium text-sm uppercase tracking-widest">
                  {section.title}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{section.content}</p>
              </details>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="border-t border-border pt-16">
          <h2 className="text-2xl font-serif mb-8 text-center">You may also like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {relatedProducts.map(p => (
              <Link href={`/product/${p.slug}`} key={p.id} className="group block">
                <div className="relative aspect-[3/4] mb-4 bg-secondary/30">
                  <Image src={p.images[0]} alt={p.name} fill className="object-cover transition-opacity duration-500 group-hover:opacity-80" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <h3 className="text-sm font-medium line-clamp-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground">${p.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
