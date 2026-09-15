"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, ShoppingBag } from "lucide-react"
import { useWishlist } from "@/lib/wishlist"
import { useProductStore } from "@/lib/products"
import { useCart } from "@/lib/cart"

export default function WishlistPage() {
  const { productIds, toggleItem } = useWishlist()
  const { products } = useProductStore()
  const addItem = useCart(state => state.addItem)

  const wishlistItems = productIds
    .map(id => products.find(p => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p !== undefined)

  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Your Wishlist</h1>
      
      {wishlistItems.length === 0 ? (
        <div className="border border-border p-12 text-center bg-secondary/10">
          <Heart className="w-8 h-8 mx-auto mb-4 text-muted-foreground stroke-[1]" />
          <h3 className="text-lg font-medium mb-2">Your wishlist is empty</h3>
          <p className="text-sm text-muted-foreground mb-6">Save items you love to build your perfect wardrobe.</p>
          <Link href="/shop" className="inline-block bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-black/90 transition-colors">
            Discover Styles
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((product) => (
            <div key={product.id} className="group flex flex-col border border-border">
              <Link href={`/product/${product.slug}`} className="relative aspect-[3/4] overflow-hidden bg-secondary">
                <Image 
                  src={product.images[0]} 
                  alt={product.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-medium text-sm mb-1">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">${product.price.toFixed(2)}</p>
                
                <div className="mt-auto flex space-x-2">
                  <button 
                    onClick={() => addItem({ product, quantity: 1, color: product.colors[0], size: product.sizes[0] })}
                    className="flex-1 bg-black text-white py-2 text-xs font-medium uppercase tracking-widest hover:bg-black/90 transition-colors flex items-center justify-center"
                  >
                    <ShoppingBag className="w-3 h-3 mr-2" /> Add to Cart
                  </button>
                  <button 
                    onClick={() => toggleItem(product.id)}
                    className="p-2 border border-border hover:bg-secondary transition-colors" 
                    aria-label="Remove from wishlist"
                  >
                    <Heart className="w-4 h-4 fill-black text-black stroke-[1]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}