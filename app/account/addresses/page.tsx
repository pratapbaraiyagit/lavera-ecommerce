"use client"

import { useState } from "react"
import { MapPin, Plus, Edit2, Trash2, X } from "lucide-react"
import { useAddresses, Address } from "@/lib/addresses"
import { useAuth } from "@/lib/auth"

export default function AddressesPage() {
  const { user } = useAuth()
  const { getAddressesByUserId, addAddress, removeAddress, setDefaultAddress } = useAddresses()
  const addresses = user ? getAddressesByUserId(user.id) : []

  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    country: "United States"
  })

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    const newAddr: Address = {
      id: Math.random().toString(36).substring(7),
      userId: user.id,
      isDefault: addresses.length === 0,
      ...formData
    }
    
    addAddress(newAddr)
    setIsAdding(false)
    setFormData({
      firstName: "", lastName: "", company: "", address1: "", address2: "", city: "", state: "", zip: "", country: "United States"
    })
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-serif">Saved Addresses</h1>
        {!isAdding && (
          <button onClick={() => setIsAdding(true)} className="flex items-center text-sm font-medium uppercase tracking-widest hover:text-muted-foreground transition-colors">
            <Plus className="w-4 h-4 mr-2" /> Add New
          </button>
        )}
      </div>

      {isAdding && (
        <div className="border border-border p-6 mb-8 bg-secondary/5">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Add New Address</h2>
            <button onClick={() => setIsAdding(false)}><X className="w-5 h-5 text-muted-foreground" /></button>
          </div>
          <form onSubmit={handleAddSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">First Name</label>
                <input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} className="w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-black" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">Last Name</label>
                <input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} className="w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-black" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">Address Line 1</label>
              <input required type="text" value={formData.address1} onChange={e => setFormData({...formData, address1: e.target.value})} className="w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-black" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">City</label>
                <input required type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-black" />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">State</label>
                <input required type="text" value={formData.state} onChange={e => setFormData({...formData, state: e.target.value})} className="w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-black" />
              </div>
              <div className="col-span-1">
                <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-1">ZIP</label>
                <input required type="text" value={formData.zip} onChange={e => setFormData({...formData, zip: e.target.value})} className="w-full border border-border px-3 py-2 text-sm focus:outline-none focus:border-black" />
              </div>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-2 text-sm font-medium uppercase tracking-widest hover:bg-black/90">
              Save Address
            </button>
          </form>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((addr) => (
          <div key={addr.id} className="border border-border p-6 flex flex-col h-full relative">
            {addr.isDefault && (
              <span className="absolute top-0 right-0 bg-secondary px-3 py-1 text-[10px] uppercase tracking-widest border-l border-b border-border font-medium">
                Default
              </span>
            )}
            
            <MapPin className="w-5 h-5 mb-4 text-muted-foreground" />
            
            <p className="font-medium mb-1">{addr.firstName} {addr.lastName}</p>
            {addr.company && <p className="text-sm text-muted-foreground mb-1">{addr.company}</p>}
            <p className="text-sm text-muted-foreground mb-1">{addr.address1}</p>
            {addr.address2 && <p className="text-sm text-muted-foreground mb-1">{addr.address2}</p>}
            <p className="text-sm text-muted-foreground mb-4">{addr.city}, {addr.state} {addr.zip}</p>
            <p className="text-sm text-muted-foreground">{addr.country}</p>
            
            <div className="mt-auto pt-6 flex space-x-4">
              {!addr.isDefault && user && (
                <button onClick={() => setDefaultAddress(user.id, addr.id)} className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-black transition-colors">
                  Set Default
                </button>
              )}
              <button onClick={() => removeAddress(addr.id)} className="text-xs font-medium uppercase tracking-widest text-muted-foreground hover:text-destructive flex items-center transition-colors">
                <Trash2 className="w-3 h-3 mr-1" /> Remove
              </button>
            </div>
          </div>
        ))}

        {!isAdding && (
          <button onClick={() => setIsAdding(true)} className="border border-dashed border-border p-6 flex flex-col items-center justify-center text-center hover:bg-secondary/5 transition-colors min-h-[250px] group">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-white transition-colors">
              <Plus className="w-5 h-5" />
            </div>
            <span className="font-medium">Add New Address</span>
            <span className="text-sm text-muted-foreground mt-2 max-w-[200px]">Save a new address for faster checkout</span>
          </button>
        )}
      </div>
    </div>
  )
}