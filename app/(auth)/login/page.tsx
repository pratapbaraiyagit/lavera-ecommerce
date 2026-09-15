"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth"
import { ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const login = useAuth(state => state.login)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (email === "customer@lavera.com" && password === "123456") {
      login({
        id: "c1",
        name: "Jane Doe",
        email,
        role: "customer"
      })
      router.push("/account")
    } else if (email === "admin@lavera.com" && password === "admin123") {
      login({
        id: "a1",
        name: "Admin User",
        email,
        role: "admin"
      })
      router.push("/admin")
    } else {
      setError("Invalid email or password. Use demo credentials.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col pt-24 pb-12">
      
      <div className="flex-1 flex items-center justify-center bg-secondary/10 px-4">
        <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-sm border border-border">
          <h1 className="text-2xl font-serif mb-2 text-center">Welcome Back</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">Sign in to your account</p>
          
          {error && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 mb-6 border border-destructive/20 text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
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
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-xs font-medium text-muted-foreground uppercase tracking-widest">Password</label>
                <Link href="/forgot-password" className="text-xs text-muted-foreground hover:text-black hover:underline underline-offset-4">Forgot Password?</Link>
              </div>
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
              Sign In
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account? <Link href="/register" className="text-black font-medium hover:underline underline-offset-4">Register</Link>
            </p>
          </div>
          
          <div className="mt-8 bg-secondary/30 p-4 border border-border">
            <p className="text-xs font-medium uppercase tracking-widest mb-2">Demo Credentials</p>
            <p className="text-xs text-muted-foreground mb-1">Customer: customer@lavera.com / 123456</p>
            <p className="text-xs text-muted-foreground">Admin: admin@lavera.com / admin123</p>
          </div>
        </div>
      </div>
    </div>
  )
}
