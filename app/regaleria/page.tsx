import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"

export default function RegaleriaPage() {
  const products = [
    {
      name: "Box infusión",
      description: "Cajas únicas con una selección de infusiones.",
      image: "/boxinfusion.jpg",
      imagePosition: "object-bottom",
    },
    {
      name: "Box Día de la Madre",
      description: "Contiene un repasador, bandeja cerámica, tazón, infusiones en bolsita, mini porción brownie, alfajor maicena, alfajor chocolate, porción budín.",
      images: ["/regaleria1.jpg", "/regaleria11.jpg"]
    },
    {
      name: "Box mate",
      description: "Contiene repasador estampado, mate, blend de mate, bombilla, ramito de flores, vela de soja, cuchara madera, maceta cerámica.",
      images: ["/regaleria2.jpg", "/regaleria22.jpg"]
    },
      {
      name: "Box taza",
      description: "Contiene taza, infusión, infusor, cuchara madera, alfajor chocolate y mini pastaflora.",
      images: ["/regaleria3.jpg", "/regaleria33.jpg"]
    },
    {
      name: "Regalos Personalizados",
      description: "Creamos el regalo perfecto según tus ideas y presupuesto.",
      image: "/regaleria.png",
    },
    {
      name: "Velas Aromáticas",
      description: "Ideales para regalar en cualquier ocasión. ¡Diseña tu propio escrito!",
      images: ["/velas.png", "/velas1.jpg", "/velas2.png", "/velas3.jpg" ]  
    },
  
  ]

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Regalería</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Regalos pensados con amor para cada ocasión. Cada detalle cuenta una historia y crea un recuerdo especial.
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
