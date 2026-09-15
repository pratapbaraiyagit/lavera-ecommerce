"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const login = useAuth(state => state.login)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // For demo purposes, we'll just log them in as a new user
    login({
      id: "new_user",
      name: `${firstName} ${lastName}`.trim(),
      email,
      role: "customer"
    })
    router.push("/account")
  }

  return (
    <div className="min-h-screen flex flex-col pt-24 pb-12">
      <div className="flex-1 flex items-center justify-center bg-secondary/10 px-4">
        <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-sm border border-border">
          <h1 className="text-2xl font-serif mb-2 text-center">Create an Account</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">Join LAVÉRA for exclusive benefits</p>
          
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 mb-6 border border-destructive/20 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">First Name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required 
                  className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required 
                  className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                className="w-full border border-border px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" 
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-black text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-black/90 transition-colors"
            >
              Create Account
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account? <Link href="/login" className="text-black font-medium hover:underline underline-offset-4">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}