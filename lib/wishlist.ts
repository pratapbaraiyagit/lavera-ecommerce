import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface WishlistStore {
  productIds: string[]
  toggleItem: (id: string) => void
  isInWishlist: (id: string) => boolean
}

export const useWishlist = create<WishlistStore>()(
  persist(
    (set, get) => ({
      productIds: [],
      toggleItem: (id) => {
        const current = get().productIds
        if (current.includes(id)) {
          set({ productIds: current.filter(itemId => itemId !== id) })
        } else {
          set({ productIds: [...current, id] })
        }
      },
      isInWishlist: (id) => get().productIds.includes(id),
    }),
    {
      name: 'lavera-wishlist-storage',
    }
  )
)
