import { notFound } from "next/navigation"
import { Metadata } from "next"
import { products } from "@/data/products"
import { ProductDetails } from "@/components/product/product-details"

interface ProductPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata(
  { params }: ProductPageProps
): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return {
      title: "Product Not Found | LAVÉRA",
    }
  }

  return {
    title: `${product.name} | LAVÉRA`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  // Get 4 related products from the same category
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="pt-24 pb-16">
      <ProductDetails product={product} relatedProducts={relatedProducts} />
    </div>
  )
}
