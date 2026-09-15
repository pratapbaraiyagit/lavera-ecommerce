import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/product'
import { products as defaultProducts } from '@/data/products'

interface ProductStore {
  products: Product[]
  addProduct: (product: Product) => void
  updateProduct: (id: string, updates: Partial<Product>) => void
  removeProduct: (id: string) => void
  getProductBySlug: (slug: string) => Product | undefined
  getProductById: (id: string) => Product | undefined
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      // Initialize with default hardcoded products
      products: defaultProducts,
      addProduct: (product) => set({ products: [product, ...get().products] }),
      updateProduct: (id, updates) => set({
        products: get().products.map(p => p.id === id ? { ...p, ...updates } : p)
      }),
      removeProduct: (id) => set({
        products: get().products.filter(p => p.id !== id)
      }),
      getProductBySlug: (slug) => get().products.find(p => p.slug === slug),
      getProductById: (id) => get().products.find(p => p.id === id)
    }),
    {
      name: 'lavera-products-storage',
    }
  )
)
