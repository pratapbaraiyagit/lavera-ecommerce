import Image from "next/image"
import { products } from "@/data/products"
import { ProductCard } from "@/components/product/product-card"

export const metadata = {
  title: "New Arrivals | LAVÉRA",
  description: "Discover the latest additions to our premium fashion collection.",
}

export default function NewArrivalsPage() {
  const newProducts = products.filter(p => p.newArrival)

  return (
    <div className="pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full flex flex-col justify-center items-center text-center px-4 mb-16">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&q=90"
          alt="New Arrivals Fashion"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-2xl text-white">
          <p className="uppercase tracking-[0.2em] text-sm font-medium mb-4">Just Landed</p>
          <h1 className="text-5xl md:text-6xl font-serif mb-6">New Arrivals</h1>
          <p className="text-lg text-white/90 font-light">
            Explore the latest silhouettes and modern designs crafted for the new season.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16">
          {newProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
