import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"

export default function DecoracionPage() {
  const products = [
    {
      name: "Bodas",
      description: "Decoración elegante y romántica para el día más importante de tu vida.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Cumpleaños",
      description: "Ambientaciones festivas y coloridas para celebraciones inolvidables.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Baby Shower",
      description: "Decoración tierna y delicada para recibir al bebé con amor.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Eventos Corporativos",
      description: "Ambientación profesional y sofisticada para eventos empresariales.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Fiestas Temáticas",
      description: "Decoración personalizada según la temática que elijas.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Eventos Personalizados",
      description: "Diseñamos la decoración perfecta para tu evento único.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Decoración de Eventos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transformamos espacios en experiencias inolvidables. Cada evento es único y merece una decoración que lo
            refleje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
