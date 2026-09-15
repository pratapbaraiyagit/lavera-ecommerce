"use client"

import { useState } from "react"
import Link from "next/link"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col pt-24 pb-12">
      <div className="flex-1 flex items-center justify-center bg-secondary/10 px-4">
        <div className="w-full max-w-md bg-white p-8 md:p-10 shadow-sm border border-border">
          <h1 className="text-2xl font-serif mb-2 text-center">Reset Password</h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Enter your email to receive a password reset link
          </p>
          
          {submitted ? (
            <div className="text-center">
              <div className="bg-secondary/30 text-black text-sm p-4 mb-6 border border-border">
                If an account exists for <strong>{email}</strong>, you will receive a password reset link shortly.
              </div>
              <Link href="/login" className="text-sm font-medium uppercase tracking-widest border-b border-black pb-1 hover:text-muted-foreground hover:border-muted-foreground transition-colors">
                Return to Login
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
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
              
              <button 
                type="submit"
                className="w-full bg-black text-white py-4 text-sm font-medium tracking-widest uppercase hover:bg-black/90 transition-colors"
              >
                Send Reset Link
              </button>
            </form>
          )}
          
          {!submitted && (
            <div className="mt-8 pt-6 border-t border-border text-center">
              <Link href="/login" className="text-sm text-muted-foreground hover:text-black font-medium hover:underline underline-offset-4">
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}