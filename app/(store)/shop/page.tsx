"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Filter, X, ChevronDown } from "lucide-react"
import { useProductStore } from "@/lib/products"
import { ProductCard } from "@/components/product/product-card"

function ShopContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const products = useProductStore(state => state.products)
  
  const initialCategory = searchParams.get("category") || "All"
  const initialSort = searchParams.get("sort") || "featured"
  const initialSale = searchParams.get("sale") === "true"
  const searchQuery = searchParams.get("q") || ""

  const [category, setCategory] = useState(initialCategory)
  const [sort, setSort] = useState(initialSort)
  const [showSaleOnly, setShowSaleOnly] = useState(initialSale)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))]

  // Filter products
  let filteredProducts = products.filter(p => {
    if (category !== "All" && p.category !== category) return false
    if (showSaleOnly && !p.sale) return false
    if (searchQuery) {
      const q = searchQuery.toLowerCase()
      return p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
    }
    return true
  })

  // Sort products
  filteredProducts = filteredProducts.sort((a, b) => {
    switch (sort) {
      case "price-asc": return a.price - b.price
      case "price-desc": return b.price - a.price
      case "newest": return (a.newArrival === b.newArrival) ? 0 : a.newArrival ? -1 : 1
      case "bestselling": return (a.bestseller === b.bestseller) ? 0 : a.bestseller ? -1 : 1
      default: return (a.featured === b.featured) ? 0 : a.featured ? -1 : 1
    }
  })

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (category !== "All") params.set("category", category)
    if (sort !== "featured") params.set("sort", sort)
    if (showSaleOnly) params.set("sale", "true")
    if (searchQuery) params.set("q", searchQuery)
    
    router.replace(`/shop?${params.toString()}`, { scroll: false })
  }, [category, sort, showSaleOnly, searchQuery, router])

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {/* Header & Mobile Filter Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-8 border-b border-border">
        <div>
          <h1 className="text-3xl font-serif mb-2">
            {searchQuery ? `Search results for "${searchQuery}"` : (category === "All" ? "All Products" : category)}
          </h1>
          <p className="text-sm text-muted-foreground">{filteredProducts.length} Results</p>
        </div>
        
        <div className="mt-6 md:mt-0 flex items-center justify-between gap-4">
          <button 
            className="md:hidden flex items-center text-sm font-medium border border-border px-4 py-2"
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <Filter className="w-4 h-4 mr-2" /> Filters
          </button>
          
          <div className="flex items-center">
            <span className="text-sm text-muted-foreground mr-3">Sort by:</span>
            <div className="relative">
              <select 
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none bg-transparent text-sm font-medium border border-border pl-4 pr-10 py-2 focus:outline-none focus:border-black rounded-none"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="bestselling">Best Selling</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-24">
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Categories</h3>
              <ul className="space-y-3">
                {categories.map(c => (
                  <li key={c}>
                    <button 
                      onClick={() => setCategory(c)}
                      className={`text-sm hover:text-black transition-colors ${category === c ? 'text-black font-medium' : 'text-muted-foreground'}`}
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Filters</h3>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={showSaleOnly}
                  onChange={(e) => setShowSaleOnly(e.target.checked)}
                  className="w-4 h-4 rounded-none border-border text-black focus:ring-black"
                />
                <span className="text-sm text-muted-foreground">Sale Items Only</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Mobile Filters Drawer */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileFiltersOpen(false)} />
            <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white p-6 shadow-xl overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-serif">Filters</h2>
                <button onClick={() => setIsMobileFiltersOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map(c => (
                    <li key={c}>
                      <button 
                        onClick={() => {
                          setCategory(c)
                          setIsMobileFiltersOpen(false)
                        }}
                        className={`text-sm ${category === c ? 'text-black font-medium' : 'text-muted-foreground'}`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-8">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={showSaleOnly}
                    onChange={(e) => setShowSaleOnly(e.target.checked)}
                    className="w-4 h-4 rounded-none border-border text-black focus:ring-black"
                  />
                  <span className="text-sm">Sale Items Only</span>
                </label>
              </div>
              
              <button 
                onClick={() => setIsMobileFiltersOpen(false)}
                className="w-full bg-black text-white py-3 text-sm font-medium uppercase tracking-widest"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24 border border-dashed border-border">
              <p className="text-muted-foreground">No products found matching your criteria.</p>
              <button 
                onClick={() => { setCategory("All"); setShowSaleOnly(false); setSort("featured") }}
                className="mt-4 text-sm font-medium underline underline-offset-4"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <div className="pt-24 pb-16">
      <Suspense fallback={<div className="container mx-auto px-4 py-24 text-center">Loading...</div>}>
        <ShopContent />
      </Suspense>
    </div>
  )
}
