import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"

export default function PapeleriaPage() {
  const products = [
    {
      name: "Sublimacion y Estampados",
      description: "Bolsas Tote, vajilla y lo que desees para sublimar. Personaliza con diseños únicos.",
      images: ["/papeleria1.jpg", "/papeleria.png", "/papeleria2.jpg", "/papeleria3.jpg", "/papeleria4.jpg"],
    },
    {
      name: "Tarjetas de Invitación",
      description: "Invitaciones únicas para bodas, cumpleaños y eventos especiales.",
      images: ["/elegant-wedding-invitation-cards.jpg", "/gift-tags-labels-elegant.jpg"],
    },
    {
      name: "Etiquetas y Stickers",
      description: "Etiquetas personalizadas para tus productos o eventos. Ver catálogo completo →",
      images: [
        "/custom-decorative-stickers-and-labels.jpg",
        "/decorative-stickers-collection.jpg",
        "/custom-logo-stickers.jpg",
        "/event-stickers-personalized.jpg",
        "/holographic-stickers-shiny.jpg",
        "/motivational-quote-stickers.jpg",
        "/themed-stickers-collection.jpg",
        "/planner-stickers-functional.jpg"
      ],
      link: "/papeleria/etiquetas-stickers",
    },
    {
      name: "Fotos polaroid",
      description: "Conjuntos de fotos polaroid personalizadas.",
      images: ["/papeleria5.png", "/papeleria6.jpg", "/papeleria7.jpg", "/papeleria8.jpg"],
    },
    {
      name: "Marcadores Personalizados",
      description: "Marcadores de libros únicos con diseños exclusivos y mensajes especiales.",
      image: "/gift-tags-labels-elegant.jpg",
    },
  ]

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Papelería Creativa</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Papelería artesanal que inspira creatividad. Cada pieza es única y está diseñada para acompañarte en tus
            proyectos y sueños.
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
