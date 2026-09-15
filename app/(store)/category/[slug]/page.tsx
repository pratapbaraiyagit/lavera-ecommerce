import { redirect } from "next/navigation"

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  // Capitalize the slug to match our category naming convention (e.g. 'dresses' -> 'Dresses')
  const categoryName = resolvedParams.slug.charAt(0).toUpperCase() + resolvedParams.slug.slice(1)
  redirect(`/shop?category=${categoryName}`)
}