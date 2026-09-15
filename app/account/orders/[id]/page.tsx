"use client"

import { use } from "react"
import Link from "next/link"
import { ArrowLeft, Package, Truck, CheckCircle2 } from "lucide-react"
import { useOrders } from "@/lib/orders"
import Image from "next/image"

export default function OrderDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { orders } = useOrders()
  
  const order = orders.find(o => o.id === resolvedParams.id)
  
  if (!order) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-xl font-serif mb-2">Order Not Found</h2>
        <p className="text-muted-foreground mb-6">We couldn't find the details for this order.</p>
        <Link href="/account/orders" className="text-sm font-medium underline underline-offset-4">Return to Orders</Link>
      </div>
    )
  }

  return (
    <div>
      <Link href="/account/orders" className="inline-flex items-center text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-black transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Orders
      </Link>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 border-b border-border pb-6">
        <div>
          <h1 className="text-2xl font-serif mb-2">Order {order.id}</h1>
          <p className="text-sm text-muted-foreground">Placed on {order.date}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <span className={`text-xs uppercase tracking-widest px-3 py-1.5 rounded-sm font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
            {order.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-lg font-medium mb-4">Items</h3>
          <div className="border border-border">
            {order.items.map((item, index) => (
              <div key={`${item.id}-${index}`} className="p-4 flex gap-4 border-b border-border last:border-b-0">
                <div className="w-20 h-24 bg-secondary/20 relative">
                  <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                </div>
                <div className="flex-1 flex justify-between">
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-muted-foreground">Color: {item.color}</p>
                    <p className="text-sm text-muted-foreground">Size: {item.size}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.product.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="border border-border p-6 bg-secondary/5 mb-6">
            <h3 className="text-lg font-medium mb-4">Order Summary</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${order.subtotal.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>{order.shipping === 0 ? "Free" : `$${order.shipping.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${order.tax.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-border font-medium text-base">
                <span>Total</span>
                <span>${order.total.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
              </div>
            </div>
          </div>

          {order.shippingAddress && (
            <div className="border border-border p-6 bg-secondary/5">
              <h3 className="font-medium mb-2">Shipping Address</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {order.shippingAddress.firstName} {order.shippingAddress.lastName}<br />
                {order.shippingAddress.address1}<br />
                {order.shippingAddress.address2 && <>{order.shippingAddress.address2}<br /></>}
                {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}<br />
                {order.shippingAddress.country}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}