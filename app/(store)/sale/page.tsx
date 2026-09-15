import Image from "next/image"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/product-card"

export const metadata = {
  title: "Sale | LAVÉRA",
  description: "Exclusive discounts on premium LAVÉRA fashion.",
}

export default function SalePage() {
  const saleProducts = products.filter(p => p.sale)

  return (
    <div className="pt-24 pb-24 bg-secondary/10 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-[1px] flex-1 bg-red-600/30" />
          <h1 className="text-4xl md:text-5xl font-serif text-red-600 uppercase tracking-wider">Archive Sale</h1>
          <div className="h-[1px] flex-1 bg-red-600/30" />
        </div>
        <p className="text-muted-foreground text-center max-w-xl mx-auto">
          Limited time offers on past season favorites. Exceptional quality at an exclusive value.
        </p>
      </div>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
          {saleProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {saleProducts.length === 0 && (
          <div className="text-center py-24 border border-border bg-white">
            <h2 className="text-2xl font-serif mb-2">No active sales right now.</h2>
            <p className="text-muted-foreground">Subscribe to our newsletter to be notified of our next Archive Sale.</p>
          </div>
        )}
      </section>
    </div>
  )
}
