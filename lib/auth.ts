import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Role = 'customer' | 'admin'

export interface User {
  id: string
  name: string
  email: string
  role: Role
  phone?: string
}

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (user) => set({ user, isAuthenticated: true }),
      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'lavera-auth-storage',
    }
  )
)
