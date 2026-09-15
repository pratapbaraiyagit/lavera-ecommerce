"use client"

import { Search, Filter, Plus } from "lucide-react"

export default function CouponsDiscountsAdminPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-serif mb-2">Coupons & Discounts</h1>
          <p className="text-sm text-muted-foreground">Create and manage promotional codes.</p>
        </div>
        <button className="bg-black text-white px-4 py-2 text-sm font-medium flex items-center hover:bg-black/90 transition-colors">
          <Plus className="w-4 h-4 mr-2" /> Add New
        </button>
      </div>
      
      <div className="bg-white border border-border p-4 mb-6 flex justify-between items-center">
        <div className="relative w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-9 pr-4 py-2 text-sm border border-border focus:outline-none focus:border-black"
          />
        </div>
        <button className="flex items-center text-sm font-medium text-muted-foreground hover:text-black">
          <Filter className="w-4 h-4 mr-2" /> Filter
        </button>
      </div>
      
      <div className="border border-border bg-secondary/5 h-64 flex items-center justify-center text-muted-foreground text-sm">
        No data available for demo purposes.
      </div>
    </div>
  )
}
