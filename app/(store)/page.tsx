"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useProductStore } from "@/lib/products"
import { ProductCard } from "@/components/product/product-card"
import { HeroSlider } from "@/components/store/hero-slider"
import { FadeIn } from "@/components/ui/fade-in"

export default function HomePage() {
  const products = useProductStore(state => state.products)
  
  const newArrivals = products.filter(p => p.newArrival).slice(0, 4)
  const bestSellers = products.filter(p => p.bestseller).slice(0, 4)

  const categories = [
    { name: "Dresses", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80", slug: "dresses" },
    { name: "Tops", image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80", slug: "tops" },
    { name: "Co-ords", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800&q=80", slug: "co-ords" },
    { name: "Denim", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80", slug: "denim" },
  ]

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <HeroSlider />

      {/* 2. New Arrivals */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <FadeIn className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif mb-2">New Arrivals</h2>
            <p className="text-muted-foreground text-sm">The latest additions to our collection.</p>
          </div>
          <Link href="/new-arrivals" className="hidden md:flex items-center text-sm font-medium hover:underline underline-offset-4 tracking-widest uppercase">
            View All <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">
          {newArrivals.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* NEW SECTION: Brand Philosophy Split Screen */}
      <section className="w-full bg-secondary/20">
        <div className="flex flex-col md:flex-row">
          <FadeIn direction="right" className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh]">
            <Image 
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=1200&q=80" 
              alt="Model wearing Lavera clothing" 
              fill 
              className="object-cover" 
            />
          </FadeIn>
          <div className="w-full md:w-1/2 flex items-center justify-center p-12 md:p-24 lg:p-32 text-center md:text-left">
            <FadeIn direction="left" delay={0.2} className="max-w-md">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Effortless Elegance.</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                At LAVÉRA, we believe that true style should never feel forced. Our pieces are meticulously crafted using premium fabrics and timeless silhouettes to bring out your natural confidence. Sustainability and ethical craftsmanship are woven into every stitch.
              </p>
              <Link href="/about" className="inline-block border-b border-black pb-1 text-sm font-medium uppercase tracking-widest hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                Discover Our Story
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-2">Shop by Category</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, i) => (
              <FadeIn key={category.slug} delay={i * 0.1} className="relative group aspect-[3/4] overflow-hidden bg-secondary">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="text-2xl font-serif mb-4">{category.name}</h3>
                  <Link
                    href={`/shop?category=${category.slug}`}
                    className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    Shop Now
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Editorial Banner */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=2000&q=90"
          alt="Editorial fashion shoot"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <FadeIn direction="up" className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-serif mb-6">The Evening Collection</h2>
          <p className="text-sm md:text-base mb-8 opacity-90 font-light">
            Elevate your after-dark wardrobe with our new arrivals of stunning evening wear, 
            designed to make an unforgettable entrance.
          </p>
          <Link
            href="/shop?category=Dresses"
            className="border border-white text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            Explore the Edit
          </Link>
        </FadeIn>
      </section>

      {/* 5. Best Sellers */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <FadeIn className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif mb-2">Best Sellers</h2>
            <p className="text-muted-foreground text-sm">Our most loved pieces.</p>
          </div>
          <Link href="/best-sellers" className="hidden md:flex items-center text-sm font-medium hover:underline underline-offset-4 tracking-widest uppercase">
            Shop All <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </FadeIn>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">
          {bestSellers.map((product, i) => (
            <FadeIn key={product.id} delay={i * 0.1}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 6. Brand Story & Newsletter */}
      <section className="border-t border-border bg-secondary/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 py-24 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 max-w-xl">
            <FadeIn direction="right">
              <h2 className="text-3xl font-serif mb-6">Why LAVÉRA?</h2>
              <div className="space-y-6">
                <div className="border-b border-border pb-6">
                  <h3 className="font-medium text-sm tracking-widest uppercase mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">We source only the finest fabrics that feel luxurious against the skin and are built to last.</p>
                </div>
                <div className="border-b border-border pb-6">
                  <h3 className="font-medium text-sm tracking-widest uppercase mb-2">Thoughtful Design</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">Every silhouette is meticulously tailored to flatter and empower the modern woman.</p>
                </div>
                <div>
                  <h3 className="font-medium text-sm tracking-widest uppercase mb-2">Sustainable Approach</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">We produce in small batches to minimize waste and ensure the highest attention to detail.</p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn direction="left" className="flex-1 w-full bg-white p-10 md:p-14 border border-border">
            <h2 className="text-2xl font-serif mb-4 text-center">Stay in the know.</h2>
            <p className="text-muted-foreground text-sm text-center mb-8">
              Sign up for our newsletter to receive updates on new arrivals, exclusive access to sales, and editorial stories.
            </p>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Email address" 
                required
                className="border-b border-black py-3 px-2 text-sm focus:outline-none focus:border-black transition-colors"
              />
              <button 
                type="submit"
                className="bg-black text-white py-3 px-6 text-sm font-medium uppercase tracking-widest hover:bg-black/90 transition-colors mt-4"
              >
                Subscribe
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
