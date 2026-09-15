import { Product } from "@/types/product"

export const products: Product[] = [
  // Dresses (3)
  {
    id: "p1",
    name: "Elara Draped Maxi Dress",
    slug: "elara-draped-maxi-dress",
    description: "An elegant draped maxi dress cut from smooth, fluid satin. Features an asymmetric neckline and a subtle side slit. Perfect for evening wear.",
    price: 120,
    category: "Dresses",
    images: [
      "https://plus.unsplash.com/premium_photo-1724220736652-8514fef4f067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bW9kZXN0JTIwZmFzaGlvbnxlbnwwfHx8fDE3ODk0OTU5MTd8MA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1772474500365-c2c520545f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Black", "Champagne"],
    sizes: ["XS", "S", "M", "L"],
    stock: 24,
    rating: 4.8,
    reviews: 12,
    featured: true,
    bestseller: true,
    newArrival: false,
    sale: false
  },
  {
    id: "p2",
    name: "Serena Pleated Gown",
    slug: "serena-pleated-gown",
    description: "Floor-length pleated gown designed for evening elegance. Lightweight georgette falls beautifully with every step, ensuring modest coverage.",
    price: 147,
    originalPrice: 176,
    category: "Dresses",
    images: [
      "https://images.unsplash.com/photo-1772474578035-bebcd90b355d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1772474557170-4818d01d7bca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Emerald", "Navy"],
    sizes: ["S", "M", "L"],
    stock: 8,
    rating: 4.9,
    reviews: 8,
    featured: false,
    bestseller: false,
    newArrival: true,
    sale: true
  },
  {
    id: "p3",
    name: "Luna Modest Wrap Dress",
    slug: "luna-modest-wrap-dress",
    description: "A versatile wrap dress in a breathable linen blend with full sleeves and a long hemline. Perfect for daytime wear.",
    price: 85,
    category: "Dresses",
    images: [
      "https://plus.unsplash.com/premium_photo-1712844225978-9599d7920747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1762605135376-ae5af70a5628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Terracotta", "Olive"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 45,
    rating: 4.6,
    reviews: 34,
    featured: true,
    bestseller: false,
    newArrival: false,
    sale: false
  },

  // Tops (3)
  {
    id: "p4",
    name: "Lyra High-Neck Blouse",
    slug: "lyra-high-neck-blouse",
    description: "A luxury silk blouse featuring a sophisticated high neckline and long gathered sleeves.",
    price: 75,
    category: "Tops",
    images: [
      "https://images.unsplash.com/photo-1762605135326-5c4bcc5ef006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1554882195-8cf792f9a571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Pearl", "Midnight Blue"],
    sizes: ["S", "M", "L"],
    stock: 40,
    rating: 4.8,
    reviews: 42,
    featured: false,
    bestseller: true,
    newArrival: false,
    sale: false
  },
  {
    id: "p5",
    name: "Vera Long-Sleeve Knit",
    slug: "vera-long-sleeve-knit",
    description: "An essential heavy-weight ribbed cotton long-sleeve top with a high neckline for excellent coverage.",
    price: 45,
    category: "Tops",
    images: [
      "https://plus.unsplash.com/premium_photo-1680012589533-9ba597be37b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1554881070-74595ca2b74c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["White", "Black", "Grey"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 120,
    rating: 4.9,
    reviews: 156,
    featured: false,
    bestseller: true,
    newArrival: false,
    sale: false
  },
  {
    id: "p6",
    name: "Cleo Draped Tunic",
    slug: "cleo-draped-tunic",
    description: "Elegant draped tunic top that falls gracefully below the hips. Soft jersey fabric.",
    price: 55,
    originalPrice: 65,
    category: "Tops",
    images: [
      "https://images.unsplash.com/photo-1771162766051-c330f1d664ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1765691893389-909e5adf93af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1vZGVzdCUyMGZhc2hpb258ZW58MHx8fHwxNzg5NDk1OTE3fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Mocha", "Black"],
    sizes: ["S", "M", "L"],
    stock: 18,
    rating: 4.5,
    reviews: 21,
    featured: false,
    bestseller: false,
    newArrival: false,
    sale: true
  },

  // Shirts (3)
  {
    id: "p7",
    name: "Aria Relaxed Linen Shirt",
    slug: "aria-relaxed-linen-shirt",
    description: "Our signature oversized linen shirt. Breathable, effortless, and endlessly versatile.",
    price: 56,
    category: "Shirts",
    images: [
      "https://plus.unsplash.com/premium_photo-1683134633584-55abb712f9a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1616313253719-c46514cddee1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["White", "Oatmeal", "Sky Blue"],
    sizes: ["S", "M", "L", "XL"],
    stock: 65,
    rating: 4.9,
    reviews: 89,
    featured: true,
    bestseller: true,
    newArrival: false,
    sale: false
  },
  {
    id: "p8",
    name: "Stella Silk Button-Down",
    slug: "stella-silk-button-down",
    description: "Classic silk button-down blouse with a fluid drape and hidden placket for a seamless look.",
    price: 88,
    category: "Shirts",
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1721990336298-90832e791b5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Ivory", "Black"],
    sizes: ["XS", "S", "M", "L"],
    stock: 15,
    rating: 4.7,
    reviews: 28,
    featured: false,
    bestseller: false,
    newArrival: true,
    sale: false
  },
  {
    id: "p9",
    name: "Rowan Poplin Overshirt",
    slug: "rowan-poplin-overshirt",
    description: "Crisp cotton poplin overshirt tailored for a relaxed, clean fit. A modest workwear essential.",
    price: 65,
    originalPrice: 85,
    category: "Shirts",
    images: [
      "https://plus.unsplash.com/premium_photo-1674327105078-5b2cdcc86929?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1570382667048-23b581258f6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["White", "Light Blue"],
    sizes: ["S", "M", "L", "XL"],
    stock: 35,
    rating: 4.5,
    reviews: 41,
    featured: false,
    bestseller: false,
    newArrival: false,
    sale: true
  },

  // Co-ords (3)
  {
    id: "p10",
    name: "Siena Modest Linen Set",
    slug: "siena-modest-linen-set",
    description: "Matching full-sleeve linen top and wide-leg trousers. The perfect relaxed summer uniform.",
    price: 130,
    category: "Co-ords",
    images: [
      "https://images.unsplash.com/photo-1600102427329-d5b2cde7e162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1668028554553-f83cac89ce0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Beige", "Olive"],
    sizes: ["XS", "S", "M", "L"],
    stock: 22,
    rating: 4.8,
    reviews: 33,
    featured: true,
    bestseller: true,
    newArrival: false,
    sale: false
  },
  {
    id: "p11",
    name: "Milan Tailored Suit Set",
    slug: "milan-tailored-suit-set",
    description: "Modern two-piece suit set featuring an oversized blazer and long straight-leg trousers.",
    price: 185,
    category: "Co-ords",
    images: [
      "https://plus.unsplash.com/premium_photo-1664299029145-ef7deb0c5eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bW9kZXN0JTIwZHJlc3N8ZW58MHx8fHwxNzg5NDk2NzU5fDA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1668028563825-f3b7138db3de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Charcoal", "Cream"],
    sizes: ["S", "M", "L"],
    stock: 10,
    rating: 4.9,
    reviews: 18,
    featured: false,
    bestseller: false,
    newArrival: true,
    sale: false
  },
  {
    id: "p12",
    name: "Kyoto Plisse Co-ord",
    slug: "kyoto-plisse-coord",
    description: "Effortless plisse set with a relaxed long-sleeve top and flowy elasticated trousers.",
    price: 110,
    originalPrice: 130,
    category: "Co-ords",
    images: [
      "https://images.unsplash.com/photo-1659297949927-06fa02629af0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1668028554854-245f8ccae15b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Black", "Rust"],
    sizes: ["S", "M", "L", "XL"],
    stock: 28,
    rating: 4.6,
    reviews: 45,
    featured: false,
    bestseller: false,
    newArrival: false,
    sale: true
  },

  // Denim (3)
  {
    id: "p13",
    name: "Isla Straight Leg Denim",
    slug: "isla-straight-leg-denim",
    description: "Classic high-rise straight leg jeans crafted from premium non-stretch denim. Full length.",
    price: 75,
    category: "Denim",
    images: [
      "https://plus.unsplash.com/premium_photo-1663011069200-43ca559dac75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1760083545495-b297b1690672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Vintage Blue", "Black"],
    sizes: ["26", "28", "30", "32"],
    stock: 50,
    rating: 4.7,
    reviews: 112,
    featured: true,
    bestseller: true,
    newArrival: false,
    sale: false
  },
  {
    id: "p14",
    name: "Farrah Wide Leg Jeans",
    slug: "farrah-wide-leg-jeans",
    description: "On-trend wide leg silhouette with a comfortable high-rise fit and clean, long hem.",
    price: 85,
    category: "Denim",
    images: [
      "https://images.unsplash.com/photo-1777888766713-8176cb05fb42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1707997089167-be6cd01ef6db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Light Wash", "Ecru"],
    sizes: ["26", "28", "30", "32"],
    stock: 35,
    rating: 4.8,
    reviews: 56,
    featured: false,
    bestseller: false,
    newArrival: true,
    sale: false
  },
  {
    id: "p15",
    name: "Lola Oversized Denim Jacket",
    slug: "lola-oversized-denim-jacket",
    description: "An oversized vintage-inspired long denim jacket that layers perfectly over anything.",
    price: 95,
    originalPrice: 110,
    category: "Denim",
    images: [
      "https://plus.unsplash.com/premium_photo-1669366530561-dabdd7e5b944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTd8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1583903597301-bd5237537396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Mid Blue"],
    sizes: ["S", "M", "L"],
    stock: 20,
    rating: 4.9,
    reviews: 38,
    featured: false,
    bestseller: false,
    newArrival: false,
    sale: true
  },

  // Trousers (3)
  {
    id: "p16",
    name: "Nova Wide-Leg Trousers",
    slug: "nova-wide-leg-trousers",
    description: "Flowy full-length wide-leg trousers with front pleats and a flattering high waist.",
    price: 85,
    category: "Trousers",
    images: [
      "https://images.unsplash.com/photo-1767469697194-ac997d70b1ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1767469697275-cfbe1c412d83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fG1vZGVzdCUyMGRyZXNzfGVufDB8fHx8MTc4OTQ5Njc1OXww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Black", "Taupe"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 45,
    rating: 4.8,
    reviews: 76,
    featured: true,
    bestseller: true,
    newArrival: false,
    sale: false
  },
  {
    id: "p17",
    name: "Harper Tailored Pants",
    slug: "harper-tailored-pants",
    description: "Straight-fit tailored trousers in a premium wool blend. Clean, sharp lines for modest office wear.",
    price: 95,
    category: "Trousers",
    images: [
      "https://plus.unsplash.com/premium_photo-1696949708601-a657428c3e60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1591948083708-6edc852d7275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Navy", "Grey"],
    sizes: ["S", "M", "L"],
    stock: 25,
    rating: 4.6,
    reviews: 24,
    featured: false,
    bestseller: false,
    newArrival: true,
    sale: false
  },
  {
    id: "p18",
    name: "Ria Flowy Palazzo Pants",
    slug: "ria-flowy-palazzo-pants",
    description: "Ultra-relaxed palazzo pants with an elastic waist for all-day comfort and excellent coverage.",
    price: 70,
    originalPrice: 90,
    category: "Trousers",
    images: [
      "https://images.unsplash.com/photo-1758186168047-00dd2621d27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1763256294324-db9a0a9e32e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Cream", "Black"],
    sizes: ["S", "M", "L", "XL"],
    stock: 55,
    rating: 4.5,
    reviews: 31,
    featured: false,
    bestseller: false,
    newArrival: false,
    sale: true
  },

  // Skirts (3)
  {
    id: "p19",
    name: "Chloe Silk Maxi Skirt",
    slug: "chloe-silk-maxi-skirt",
    description: "A bias-cut silk maxi skirt that drapes beautifully down to the ankles. An elegant wardrobe builder.",
    price: 85,
    category: "Skirts",
    images: [
      "https://plus.unsplash.com/premium_photo-1696949625246-a2615ae8725d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1775461487585-c3afc22049f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Black", "Champagne", "Navy"],
    sizes: ["XS", "S", "M", "L"],
    stock: 38,
    rating: 4.7,
    reviews: 62,
    featured: false,
    bestseller: true,
    newArrival: false,
    sale: false
  },
  {
    id: "p20",
    name: "Zara Pleated Maxi Skirt",
    slug: "zara-pleated-maxi-skirt",
    description: "Structured A-line pleated maxi skirt in a durable cotton blend. Modest and sophisticated.",
    price: 75,
    originalPrice: 90,
    category: "Skirts",
    images: [
      "https://images.unsplash.com/photo-1591950838253-e2577979eb78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1589565920470-c051a55c9c5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["White", "Navy"],
    sizes: ["S", "M", "L"],
    stock: 18,
    rating: 4.5,
    reviews: 19,
    featured: false,
    bestseller: false,
    newArrival: false,
    sale: true
  },
  {
    id: "p21",
    name: "Amara Tiered Skirt",
    slug: "amara-tiered-skirt",
    description: "Voluminous tiered maxi skirt perfect for breezy summer days. Full length and flowing.",
    price: 80,
    category: "Skirts",
    images: [
      "https://plus.unsplash.com/premium_photo-1671379102281-7225f3d3d97d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OXx8bG9uZyUyMHNraXJ0fGVufDB8fHx8MTc4OTQ5Njc2MHww&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1784633319432-fdd743ac4271?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fGxvbmclMjBza2lydHxlbnwwfHx8fDE3ODk0OTY3NjB8MA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Olive", "Rust"],
    sizes: ["XS", "S", "M", "L", "XL"],
    stock: 42,
    rating: 4.9,
    reviews: 22,
    featured: true,
    bestseller: false,
    newArrival: true,
    sale: false
  },

  // Ethnic Wear (3)
  {
    id: "p22",
    name: "Anika Silk Kurta Set",
    slug: "anika-silk-kurta-set",
    description: "Modern, minimalist long silk kurta set with subtle tonal embroidery. Includes full-length straight pants.",
    price: 150,
    category: "Ethnic Wear",
    images: [
      "https://images.unsplash.com/photo-1762343041454-8f1fdd459811?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGxvbmclMjBza2lydHxlbnwwfHx8fDE3ODk0OTY3NjB8MA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1762342685668-a76f1a57d7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fGxvbmclMjBza2lydHxlbnwwfHx8fDE3ODk0OTY3NjB8MA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Blush Pink", "Sage Green"],
    sizes: ["S", "M", "L", "XL"],
    stock: 12,
    rating: 4.9,
    reviews: 27,
    featured: true,
    bestseller: true,
    newArrival: true,
    sale: false
  },
  {
    id: "p23",
    name: "Meera Embroidered Anarkali",
    slug: "meera-embroidered-anarkali",
    description: "Floor-length flowing anarkali suit featuring delicate threadwork and a matching dupatta.",
    price: 180,
    category: "Ethnic Wear",
    images: [
      "https://plus.unsplash.com/premium_photo-1696949678220-3cebcbcad95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTN8fGxvbmclMjBza2lydHxlbnwwfHx8fDE3ODk0OTY3NjB8MA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1778395407599-a35d673b4568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fGxvbmclMjBza2lydHxlbnwwfHx8fDE3ODk0OTY3NjB8MA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Deep Red", "Navy Blue"],
    sizes: ["XS", "S", "M", "L"],
    stock: 8,
    rating: 5.0,
    reviews: 14,
    featured: false,
    bestseller: false,
    newArrival: true,
    sale: false
  },
  {
    id: "p24",
    name: "Zoya Cotton Kurti",
    slug: "zoya-cotton-kurti",
    description: "Breathable everyday long cotton kurti with a classic block print design. Perfect for casual wear.",
    price: 65,
    originalPrice: 80,
    category: "Ethnic Wear",
    images: [
      "https://images.unsplash.com/photo-1620196639702-311ce41b2be9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fGxvbmclMjBza2lydHxlbnwwfHx8fDE3ODk0OTY3NjB8MA&ixlib=rb-4.1.0&q=80&w=800&q=80",
      "https://images.unsplash.com/photo-1784388233269-9e7ae960091b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fGxvbmclMjBza2lydHxlbnwwfHx8fDE3ODk0OTY3NjB8MA&ixlib=rb-4.1.0&q=80&w=800&q=80"
    ],
    colors: ["Indigo", "Mustard"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    stock: 60,
    rating: 4.6,
    reviews: 88,
    featured: false,
    bestseller: false,
    newArrival: false,
    sale: true
  }
]
