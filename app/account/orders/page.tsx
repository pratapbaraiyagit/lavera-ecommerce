"use client"

import Link from "next/link"
import { Package, ArrowRight, ExternalLink } from "lucide-react"
import { useOrders } from "@/lib/orders"
import { useAuth } from "@/lib/auth"

export default function OrdersPage() {
  const { user } = useAuth()
  const { getOrdersByUserId } = useOrders()
  
  // Get dynamic orders from local storage for the logged in user
  const orders = user ? getOrdersByUserId(user.id) : []

  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Order History</h1>
      
      {orders.length === 0 ? (
        <div className="border border-border p-12 text-center bg-secondary/10">
          <Package className="w-8 h-8 mx-auto mb-4 text-muted-foreground stroke-[1]" />
          <h3 className="text-lg font-medium mb-2">You haven't placed any orders yet</h3>
          <p className="text-sm text-muted-foreground mb-6">When you do, their details will appear here.</p>
          <Link href="/shop" className="inline-block bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-black/90 transition-colors">
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border border-border p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:bg-secondary/5 transition-colors">
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <span className="font-medium">{order.id}</span>
                  <span className={`text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Placed on {order.date} • {order.items?.length || 0} items</p>
              </div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full md:w-auto">
                <span className="font-medium">${order.total.toFixed(2)}</span>
                <Link 
                  href={`/account/orders/${order.id}`}
                  className="flex items-center text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-black transition-colors"
                >
                  View Details <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}