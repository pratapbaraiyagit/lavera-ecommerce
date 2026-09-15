"use client"

import { useState } from "react"
import { useAuth } from "@/lib/auth"

export default function SettingsPage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    currentPassword: "",
    newPassword: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsEditing(false)
    // Handle save logic for demo
  }

  return (
    <div>
      <h1 className="text-2xl font-serif mb-6">Account Settings</h1>
      
      <div className="border border-border p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-medium">Profile Information</h2>
          {!isEditing && (
            <button 
              onClick={() => setIsEditing(true)}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-black transition-colors underline underline-offset-4"
            >
              Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 max-w-md">
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Full Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                disabled={!isEditing}
                className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors disabled:bg-secondary/20 disabled:text-muted-foreground" 
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                disabled={!isEditing}
                className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors disabled:bg-secondary/20 disabled:text-muted-foreground" 
              />
            </div>

            {isEditing && (
              <>
                <div className="pt-4 border-t border-border mt-2">
                  <h3 className="text-sm font-medium mb-4">Change Password</h3>
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Current Password</label>
                  <input 
                    type="password" 
                    value={formData.currentPassword}
                    onChange={(e) => setFormData({...formData, currentPassword: e.target.value})}
                    className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors mb-4" 
                  />
                  
                  <label className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">New Password</label>
                  <input 
                    type="password" 
                    value={formData.newPassword}
                    onChange={(e) => setFormData({...formData, newPassword: e.target.value})}
                    className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
                  />
                </div>
              </>
            )}
          </div>

          {isEditing && (
            <div className="mt-8 flex space-x-4">
              <button 
                type="submit"
                className="bg-black text-white px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-black/90 transition-colors"
              >
                Save Changes
              </button>
              <button 
                type="button"
                onClick={() => setIsEditing(false)}
                className="border border-border px-8 py-3 text-sm font-medium tracking-widest uppercase hover:bg-secondary transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}