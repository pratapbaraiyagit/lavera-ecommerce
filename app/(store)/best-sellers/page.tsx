import Image from "next/image"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/product-card"

export const metadata = {
  title: "Best Sellers | LAVÉRA",
  description: "Shop our most loved and popular premium pieces.",
}

export default function BestSellersPage() {
  const bestSellers = products.filter(p => p.bestseller)

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Best Sellers</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our most coveted pieces, loved by our community. Discover the effortless staples that define the LAVÉRA aesthetic.
        </p>
      </div>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
          {bestSellers.map((product, index) => (
            <div key={product.id} className="relative">
              {/* Rank Badge */}
              <div className="absolute top-4 left-4 z-10 w-8 h-8 bg-white text-black flex items-center justify-center rounded-full font-serif font-bold text-sm shadow-sm border border-border">
                {index + 1}
              </div>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
