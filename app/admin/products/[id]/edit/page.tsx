"use client"

import { useState, useEffect, use } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useProductStore } from "@/lib/products"

export default function EditProductAdminPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const router = useRouter()
  const { products, updateProduct } = useProductStore()
  
  const product = products.find(p => p.id === resolvedParams.id)

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "0"
  })

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        category: product.category,
        stock: product.stock.toString()
      })
    }
  }, [product])

  if (!product) {
    return (
      <div className="py-12 text-center">
        <h2 className="text-xl font-serif mb-2">Product Not Found</h2>
        <Link href="/admin/products" className="text-sm font-medium underline underline-offset-4">Return to Products</Link>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    updateProduct(product.id, {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      stock: parseInt(formData.stock, 10),
    })

    router.push("/admin/products")
  }

  return (
    <div className="max-w-3xl">
      <Link href="/admin/products" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Products
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-serif mb-2">Edit Product: {product.name}</h1>
        <p className="text-sm text-muted-foreground">Update product details.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Product Name</label>
            <input 
              required type="text" 
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} 
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <textarea 
              required rows={4}
              value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} 
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Price (USD)</label>
              <input 
                required type="number" step="0.01" min="0"
                value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} 
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Stock Quantity</label>
              <input 
                required type="number" min="0"
                value={formData.stock} onChange={e => setFormData({...formData, stock: e.target.value})} 
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <select 
              value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})}
              className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            >
              <option value="Dresses">Dresses</option>
              <option value="Tops">Tops</option>
              <option value="Co-ords">Co-ords</option>
              <option value="Outerwear">Outerwear</option>
              <option value="Knitwear">Knitwear</option>
            </select>
          </div>
        </div>
        
        <div className="pt-4 flex justify-end">
          <button type="submit" className="bg-indigo-600 text-white px-6 py-2 text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  )
}
