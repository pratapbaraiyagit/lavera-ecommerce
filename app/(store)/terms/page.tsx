"use client"

export default function TermsofServicePage() {
  return (
    <div className="pt-24 pb-16 md:pt-32 md:pb-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-serif mb-12 text-center">Terms of Service</h1>
        
        <div className="prose prose-neutral max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is a demo page for Terms of Service. In a real production environment, this page would contain detailed legal, operational, or brand information.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            LAVÉRA is committed to providing an exceptional experience. For the purposes of this demonstration, we have designed this layout to reflect how our typography and spacing rules apply to long-form text content.
          </p>
          <h2 className="text-2xl font-serif mt-12 mb-4">Section Heading</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our approach blends modern aesthetics with timeless elegance. Every detail of the user interface is crafted to ensure clarity, readability, and a premium feel.
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Premium typography and ample whitespace</li>
            <li>Consistent brand messaging</li>
            <li>Clear, accessible information hierarchy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
