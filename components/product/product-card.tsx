"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Product } from "@/types/product"
import { cn } from "@/lib/utils"
import { useWishlist } from "@/lib/wishlist"
import { useProductStore } from "@/lib/products"

interface ProductCardProps {
  product: Product
  className?: string
}

export function ProductCard({ product: initialProduct, className }: ProductCardProps) {
  const { toggleItem, isInWishlist } = useWishlist()
  // Hydrate from local storage store if edited in admin
  const storeProduct = useProductStore(state => state.getProductById(initialProduct.id))
  const product = storeProduct || initialProduct

  const isWishlisted = isInWishlist(product.id)

  const hasDiscount = product.originalPrice && product.originalPrice > product.price
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0

  return (
    <div className={cn("group flex flex-col", className)}>
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary/50 mb-4">
        {product.sale && (
          <span className="absolute top-3 left-3 z-10 bg-destructive text-destructive-foreground text-[10px] font-bold uppercase tracking-wider px-2 py-1">
            Sale {hasDiscount && `-${discountPercent}%`}
          </span>
        )}
        {product.newArrival && !product.sale && (
          <span className="absolute top-3 left-3 z-10 bg-foreground text-background text-[10px] font-bold uppercase tracking-wider px-2 py-1">
            New
          </span>
        )}
        
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleItem(product.id);
          }}
          className={cn(
            "absolute top-3 right-3 z-10 p-2 rounded-full backdrop-blur-sm transition-all",
            isWishlisted 
              ? "bg-white/90 text-red-500 opacity-100" 
              : "bg-background/80 text-foreground/70 hover:text-foreground opacity-0 group-hover:opacity-100"
          )}
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={cn("w-4 h-4", isWishlisted && "fill-current")} />
        </button>

        <Link href={`/product/${product.slug}`} className="block w-full h-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-500 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} - Alternate view`}
              fill
              className="object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
        </Link>
      </div>

      <div className="flex flex-col space-y-1">
        <div className="flex justify-between items-start gap-2">
          <Link href={`/product/${product.slug}`} className="text-sm font-medium hover:underline underline-offset-4 line-clamp-1">
            {product.name}
          </Link>
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">{product.category}</p>
        <div className="flex items-center space-x-2 pt-1">
          <span className="text-sm">${product.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
          {hasDiscount && (
            <span className="text-xs text-muted-foreground line-through">
              ${product.originalPrice?.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
