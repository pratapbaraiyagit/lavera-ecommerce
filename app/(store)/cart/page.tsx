"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Trash2, ArrowRight } from "lucide-react"
import { useCart } from "@/lib/cart"

export default function CartPage() {
  const [mounted, setMounted] = useState(false)
  const { items, removeItem, updateQuantity } = useCart()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return (
    <div className="container mx-auto px-4 py-24 text-center">Loading cart...</div>
  )

  const subtotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  const shipping = subtotal > 10000 ? 0 : 500
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 md:px-6 py-24 min-h-[60vh] flex flex-col items-center justify-center border-t border-transparent">
        <h1 className="text-3xl font-serif mb-4">Your bag is empty.</h1>
        <p className="text-muted-foreground mb-8 text-center max-w-md leading-relaxed">
          Looks like you haven't added anything to your bag yet. Discover our latest arrivals and timeless classics.
        </p>
        <Link 
          href="/shop"
          className="bg-black text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-black/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <h1 className="text-3xl font-serif mb-12 border-b border-border pb-6">Shopping Bag</h1>
      
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Cart Items */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 md:gap-6 border-b border-border pb-8">
              <Link href={`/product/${item.product.slug}`} className="relative aspect-[3/4] w-24 md:w-32 flex-shrink-0 bg-secondary/30">
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </Link>
              
              <div className="flex flex-col flex-1 py-1">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <Link href={`/product/${item.product.slug}`} className="font-medium text-sm md:text-base hover:underline underline-offset-4">
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-muted-foreground mt-1">${item.product.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-muted-foreground hover:text-black transition-colors p-2 -mr-2 -mt-2"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="text-sm text-muted-foreground mt-2 space-y-1">
                  <p>Color: {item.color}</p>
                  <p>Size: {item.size}</p>
                </div>
                
                <div className="mt-auto pt-4 flex items-center gap-4">
                  <div className="flex border border-border">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                    >-</button>
                    <div className="w-8 h-8 flex items-center justify-center text-sm">{item.quantity}</div>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-secondary transition-colors"
                    >+</button>
                  </div>
                  <div className="text-sm font-medium ml-auto">
                    ${(item.product.price * item.quantity).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-secondary/20 p-6 md:p-8 sticky top-32">
            <h2 className="text-lg font-serif mb-6 border-b border-border pb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal ({items.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                <span>${subtotal.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Shipping</span>
                <span>{shipping === 0 ? "Free" : `$${shipping.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center text-base font-medium border-t border-border pt-4 mb-8">
              <span>Total</span>
              <span>${total.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </div>
            
            <Link 
              href="/checkout"
              className="w-full flex items-center justify-center bg-black text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-black/90 transition-colors"
            >
              Proceed to Checkout <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            
            <div className="mt-6 space-y-2">
              <p className="text-xs text-muted-foreground flex items-center before:content-[''] before:w-1 before:h-1 before:bg-black before:rounded-full before:mr-2">
                Free shipping on orders over $10,000
              </p>
              <p className="text-xs text-muted-foreground flex items-center before:content-[''] before:w-1 before:h-1 before:bg-black before:rounded-full before:mr-2">
                14-day return policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
