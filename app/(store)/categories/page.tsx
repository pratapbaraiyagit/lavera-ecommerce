import Link from "next/link"
import Image from "next/image"
import { products } from "@/data/products"

export const metadata = {
  title: "Categories | LAVÉRA",
  description: "Browse our premium fashion collections by category.",
}

export default function CategoriesPage() {
  // Extract unique categories and their first product image for display
  const categoriesMap = new Map<string, string>()
  products.forEach(p => {
    if (!categoriesMap.has(p.category)) {
      categoriesMap.set(p.category, p.images[0])
    }
  })

  const categories = Array.from(categoriesMap.entries()).map(([name, image]) => ({
    name,
    image
  }))

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Collections</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Curated edits for every occasion.
        </p>
      </div>

      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {categories.map((category) => (
            <Link href={`/shop?category=${encodeURIComponent(category.name)}`} key={category.name} className="group relative block aspect-[4/5] overflow-hidden">
              <Image 
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                <h2 className="text-3xl font-serif mb-3 drop-shadow-sm">{category.name}</h2>
                <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
