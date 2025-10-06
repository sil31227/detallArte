import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"

export default function DesayunosPage() {
  const products = [
    {
      name: "Desayuno Romántico",
      description:
        "Perfecto para sorprender a tu pareja con croissants, frutas frescas, flores y una nota personalizada.",
      image: "/romantic-breakfast-box-with-roses-and-pastries.jpg",
    },
    {
      name: "Desayuno Cumpleaños",
      description: "Celebra con un desayuno especial que incluye muffins, jugos naturales y decoración festiva.",
      image: "/birthday-breakfast-with-colorful-decorations.jpg",
    },
    {
      name: "Desayuno Saludable",
      description: "Opciones nutritivas con granola, yogurt, frutas de estación y frutos secos.",
      image: "/healthy-breakfast-bowl-with-fruits-and-granola.jpg",
    },
    {
      name: "Desayuno Empresarial",
      description: "Ideal para reuniones de trabajo con café premium, medialunas y jugos naturales.",
      image: "/business-breakfast-with-coffee-and-croissants.jpg",
    },
    {
      name: "Desayuno Día de la Madre",
      description: "Un homenaje especial con flores, chocolates y todo el amor en cada detalle.",
      image: "/mothers-day-breakfast-with-flowers.jpg",
    },
    {
      name: "Desayuno Personalizado",
      description: "Diseñamos el desayuno perfecto según tus preferencias y la ocasión especial.",
      image: "/custom-personalized-breakfast-box.jpg",
    },
  ]

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Desayunos Personalizados</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada desayuno es una experiencia única, preparada con ingredientes frescos y presentada con amor para hacer
            de tu mañana algo inolvidable.
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
