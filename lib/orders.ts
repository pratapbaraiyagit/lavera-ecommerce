import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem } from './cart'

export interface Order {
  id: string
  userId?: string // null for guest checkout
  customerEmail: string
  customerName: string
  date: string
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
  items: CartItem[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  shippingAddress: any
}

interface OrderStore {
  orders: Order[]
  addOrder: (order: Order) => void
  updateOrderStatus: (id: string, status: Order['status']) => void
  getOrdersByUserId: (userId: string) => Order[]
}

export const useOrders = create<OrderStore>()(
  persist(
    (set, get) => ({
      orders: [],
      addOrder: (order) => set({ orders: [order, ...get().orders] }),
      updateOrderStatus: (id, status) => set({
        orders: get().orders.map(o => o.id === id ? { ...o, status } : o)
      }),
      getOrdersByUserId: (userId) => get().orders.filter(o => o.userId === userId)
    }),
    {
      name: 'lavera-orders-storage',
    }
  )
)
