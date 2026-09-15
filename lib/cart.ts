import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from '@/types/product'

export interface CartItem {
  id: string
  product: Product
  color: string
  size: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'id'>) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getUniqueId: (productId: string, color: string, size: string) => string
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      getUniqueId: (productId, color, size) => `${productId}-${color}-${size}`,
      addItem: (item) => {
        const id = get().getUniqueId(item.product.id, item.color, item.size)
        const existingItem = get().items.find((i) => i.id === id)

        if (existingItem) {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity + item.quantity } : i
            ),
          })
        } else {
          set({ items: [...get().items, { ...item, id }] })
        }
      },
      removeItem: (id) =>
        set({ items: get().items.filter((i) => i.id !== id) }),
      updateQuantity: (id, quantity) =>
        set({
          items: get().items.map((i) =>
            i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        }),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'lavera-cart-storage',
    }
  )
)
