"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Lock, ArrowLeft, CheckCircle2 } from "lucide-react"
import { useCart } from "@/lib/cart"
import { useOrders } from "@/lib/orders"
import { useAuth } from "@/lib/auth"
import { useAddresses } from "@/lib/addresses"

export default function CheckoutPage() {
  const [mounted, setMounted] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { items, clearCart } = useCart()
  const { user } = useAuth()
  const { addOrder } = useOrders()
  const { getAddressesByUserId } = useAddresses()
  const router = useRouter()
  
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
  })

  useEffect(() => {
    setMounted(true)
    if (user) {
      const addrs = getAddressesByUserId(user.id)
      const defaultAddr = addrs.find(a => a.isDefault) || addrs[0]
      if (defaultAddr) {
        setFormData({
          email: user.email,
          firstName: defaultAddr.firstName,
          lastName: defaultAddr.lastName,
          address: defaultAddr.address1,
          apartment: defaultAddr.address2 || "",
          city: defaultAddr.city,
          state: defaultAddr.state,
          zip: defaultAddr.zip
        })
      } else {
        setFormData(prev => ({ ...prev, email: user.email, firstName: user.name.split(' ')[0] || '', lastName: user.name.split(' ')[1] || '' }))
      }
    }
  }, [user])

  if (!mounted) return <div className="min-h-screen bg-secondary/10" />

  const subtotal = items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
  const shipping = subtotal > 10000 ? 0 : 500
  const tax = subtotal * 0.08 // 8% demo tax
  const total = subtotal + shipping + tax

  if (items.length === 0 && !isSuccess) {
    router.push('/cart')
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Save order
    const orderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}-LV`
    const newOrder = {
      id: orderId,
      userId: user?.id,
      customerEmail: formData.email,
      customerName: `${formData.firstName} ${formData.lastName}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' }),
      status: 'Processing' as const,
      items: [...items],
      subtotal,
      shipping,
      tax,
      total,
      shippingAddress: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        address1: formData.address,
        address2: formData.apartment,
        city: formData.city,
        state: formData.state,
        zip: formData.zip,
        country: "United States"
      }
    }
    
    addOrder(newOrder)
    setIsSuccess(true)
    clearCart()
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-24 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <CheckCircle2 className="w-16 h-16 text-green-600 mb-6" />
        <h1 className="text-3xl font-serif mb-4">Order Confirmed</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Thank you for your purchase. Your order has been received and is being processed. 
          We've sent a confirmation email with your order details.
        </p>
        <Link 
          href="/shop"
          className="bg-black text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-black/90 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary/10 pb-24">
      {/* Minimal Checkout Header */}
      <header className="bg-white border-b border-border py-6">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/cart" className="text-muted-foreground hover:text-black transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="text-2xl tracking-widest font-serif uppercase font-medium">
            LAVÉRA
          </Link>
          <div className="flex items-center text-muted-foreground">
            <Lock className="w-4 h-4 mr-2" />
            <span className="text-xs font-medium uppercase tracking-widest hidden sm:inline">Secure Checkout</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 pt-12">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16">
          
          {/* Checkout Form */}
          <div className="w-full lg:w-[55%]">
            <form onSubmit={handleSubmit}>
              <div className="bg-white p-6 md:p-8 shadow-sm border border-border mb-8">
                <h2 className="text-lg font-serif mb-6 border-b border-border pb-4">Contact Information</h2>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" id="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="you@example.com" />
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 shadow-sm border border-border mb-8">
                <h2 className="text-lg font-serif mb-6 border-b border-border pb-4">Shipping Address</h2>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">First Name</label>
                    <input type="text" id="firstName" required value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Last Name</label>
                    <input type="text" id="lastName" required value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Address</label>
                  <input type="text" id="address" required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="mb-4">
                  <label htmlFor="apartment" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Apartment, suite, etc. (optional)</label>
                  <input type="text" id="apartment" value={formData.apartment} onChange={e => setFormData({...formData, apartment: e.target.value})} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                  <div className="md:col-span-1">
                    <label htmlFor="city" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">City</label>
                    <input type="text" id="city" required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                  <div className="md:col-span-1">
                    <label htmlFor="state" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">State</label>
                    <input type="text" id="state" required value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label htmlFor="zip" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">ZIP Code</label>
                    <input type="text" id="zip" required value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 md:p-8 shadow-sm border border-border mb-8 opacity-70">
                <h2 className="text-lg font-serif mb-6 border-b border-border pb-4">Payment (Demo)</h2>
                <p className="text-sm text-muted-foreground mb-4">This is a demo store. No real payment will be processed.</p>
                <div className="mb-4">
                  <label htmlFor="card" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Card Number</label>
                  <input type="text" id="card" defaultValue="4242 4242 4242 4242" disabled className="w-full border border-border bg-secondary/50 px-4 py-3 text-sm" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="exp" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Expiry Date</label>
                    <input type="text" id="exp" defaultValue="12/26" disabled className="w-full border border-border bg-secondary/50 px-4 py-3 text-sm" />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">CVV</label>
                    <input type="text" id="cvv" defaultValue="123" disabled className="w-full border border-border bg-secondary/50 px-4 py-3 text-sm" />
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-black text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-black/90 transition-colors flex items-center justify-center"
              >
                <Lock className="w-4 h-4 mr-2" /> Place Order — ${total.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-[45%]">
            <div className="bg-white p-6 md:p-8 shadow-sm border border-border sticky top-8">
              <h2 className="text-lg font-serif mb-6 border-b border-border pb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative aspect-[3/4] w-16 flex-shrink-0 bg-secondary/30">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" />
                      <span className="absolute -top-2 -right-2 bg-muted text-muted-foreground text-xs font-medium w-5 h-5 rounded-full flex items-center justify-center border border-border">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <span className="text-sm font-medium line-clamp-1">{item.product.name}</span>
                      <span className="text-xs text-muted-foreground">{item.color} / {item.size}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium">${(item.product.price * item.quantity).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-6 text-sm border-t border-border pt-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}`}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center text-lg font-serif border-t border-border pt-6">
                <span>Total</span>
                <span>${total.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
