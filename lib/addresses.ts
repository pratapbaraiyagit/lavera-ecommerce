import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Address {
  id: string
  userId: string
  isDefault: boolean
  firstName: string
  lastName: string
  company?: string
  address1: string
  address2?: string
  city: string
  state: string
  zip: string
  country: string
}

interface AddressStore {
  addresses: Address[]
  addAddress: (address: Address) => void
  updateAddress: (id: string, updates: Partial<Address>) => void
  removeAddress: (id: string) => void
  setDefaultAddress: (userId: string, id: string) => void
  getAddressesByUserId: (userId: string) => Address[]
}

export const useAddresses = create<AddressStore>()(
  persist(
    (set, get) => ({
      addresses: [],
      addAddress: (address) => {
        // If it's the first address, make it default
        const userAddresses = get().getAddressesByUserId(address.userId)
        const newAddr = { ...address, isDefault: userAddresses.length === 0 ? true : address.isDefault }
        
        if (newAddr.isDefault) {
          // Unset other defaults
          set({
            addresses: [newAddr, ...get().addresses.map(a => 
              a.userId === address.userId ? { ...a, isDefault: false } : a
            )]
          })
        } else {
          set({ addresses: [newAddr, ...get().addresses] })
        }
      },
      updateAddress: (id, updates) => set({
        addresses: get().addresses.map(a => a.id === id ? { ...a, ...updates } : a)
      }),
      removeAddress: (id) => set({
        addresses: get().addresses.filter(a => a.id !== id)
      }),
      setDefaultAddress: (userId, id) => set({
        addresses: get().addresses.map(a => {
          if (a.userId !== userId) return a
          return { ...a, isDefault: a.id === id }
        })
      }),
      getAddressesByUserId: (userId) => get().addresses.filter(a => a.userId === userId)
    }),
    {
      name: 'lavera-addresses-storage',
    }
  )
)
