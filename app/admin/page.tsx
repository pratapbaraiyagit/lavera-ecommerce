"use client"

import { DollarSign, Users, ShoppingBag, Package } from "lucide-react"
import { useOrders } from "@/lib/orders"
import { useProductStore } from "@/lib/products"

export default function AdminDashboardPage() {
  const { orders } = useOrders()
  const { products } = useProductStore()

  // Calculate dynamic stats
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  
  // Sort orders by most recent
  const recentOrders = [...orders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5)

  const stats = [
    { title: "Total Revenue", value: `$${totalRevenue.toLocaleString(undefined, {minimumFractionDigits: 2})}`, icon: DollarSign, change: "Dynamic Demo Data" },
    { title: "Orders", value: orders.length.toString(), icon: ShoppingBag, change: "Dynamic Demo Data" },
    { title: "Customers", value: new Set(orders.map(o => o.customerEmail)).size.toString(), icon: Users, change: "Dynamic Demo Data" },
    { title: "Active Products", value: products.length.toString(), icon: Package, change: "Dynamic Demo Data" },
  ]

  return (
    <div className="space-y-8">
      {/* Stats Overview */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <div key={i} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-500">{stat.title}</h3>
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800 mb-1">{stat.value}</div>
              <p className="text-xs text-emerald-600 font-medium">{stat.change}</p>
            </div>
          )
        })}
      </div>

      <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
        {/* Recent Orders List */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-200">
            <h3 className="text-base font-semibold text-slate-800">Recent Orders</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Order ID</th>
                  <th className="px-6 py-3 font-medium">Customer</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium">Total</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {recentOrders.map((order, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-indigo-600">{order.id}</td>
                    <td className="px-6 py-4 text-slate-800">{order.customerName}</td>
                    <td className="px-6 py-4 text-slate-500">{order.date}</td>
                    <td className="px-6 py-4 font-medium text-slate-800">${order.total.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' :
                        order.status === 'Processing' ? 'bg-amber-100 text-amber-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Selling Products */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
          <div className="px-6 py-5 border-b border-slate-200">
            <h3 className="text-base font-semibold text-slate-800">Top Selling Products</h3>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {products.filter(p => p.bestseller).slice(0, 3).map((product, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-800 line-clamp-1">{product.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{product.category}</p>
                  </div>
                  <div className="text-sm font-semibold text-slate-800">${product.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
