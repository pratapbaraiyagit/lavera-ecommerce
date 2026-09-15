"use client"

import { useAuth } from "@/lib/auth"
import Link from "next/link"

export default function AccountDashboardPage() {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Welcome, {user?.name}</h1>
      
      <p className="text-muted-foreground mb-8 text-sm">
        From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-border p-6 bg-secondary/10">
          <h3 className="text-lg font-medium mb-4">Recent Orders</h3>
          <p className="text-sm text-muted-foreground mb-4">You have no recent orders.</p>
          <Link href="/shop" className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground">Start Shopping</Link>
        </div>
        
        <div className="border border-border p-6 bg-secondary/10">
          <h3 className="text-lg font-medium mb-4">Account Details</h3>
          <p className="text-sm text-muted-foreground mb-1">{user?.name}</p>
          <p className="text-sm text-muted-foreground mb-4">{user?.email}</p>
          <Link href="/account/settings" className="text-sm font-medium underline underline-offset-4 hover:text-muted-foreground">Edit Details</Link>
        </div>
      </div>
    </div>
  )
}
