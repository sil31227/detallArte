import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"

export default function RegaleriaPage() {
  const products = [
    {
      name: "Cajas de Regalo Personalizadas",
      description: "Cajas únicas con una selección cuidada de productos especiales para cada ocasión.",
      image: "/personalized-gift-box-with-flowers-and-treats.jpg",
    },
    {
      name: "Regalos Corporativos",
      description: "Detalles elegantes para clientes y colaboradores de tu empresa.",
      image: "/elegant-corporate-gift-set-with-branding.jpg",
    },
    {
      name: "Regalos para Bebés",
      description: "Canastillas y regalos tiernos para dar la bienvenida al nuevo integrante.",
      image: "/baby-gift-basket-with-soft-toys-and-clothes.jpg",
    },
    {
      name: "Regalos Románticos",
      description: "Detalles especiales para expresar tu amor en cualquier ocasión.",
      image: "/romantic-gift-with-roses-and-chocolates.jpg",
    },
    {
      name: "Regalos de Amistad",
      description: "Presentes únicos para celebrar la amistad verdadera.",
      image: "/friendship-gift-box-with-personalized-items.jpg",
    },
    {
      name: "Regalos Personalizados",
      description: "Creamos el regalo perfecto según tus ideas y presupuesto.",
      image: "/custom-personalized-gift-with-name-and-photo.jpg",
    },
    {
      name: "Sets de Spa y Relajación",
      description: "Kits de autocuidado con velas, sales de baño y productos aromáticos.",
      image: "/spa-relaxation-gift-set-with-candles-and-bath-salts.jpg",
    },
    {
      name: "Regalos para Maestras",
      description: "Detalles especiales para agradecer a esas personas que educan con amor.",
      image: "/teacher-appreciation-gift-with-flowers-and-card.jpg",
    },
    {
      name: "Anchetas Gourmet",
      description: "Selección de productos gourmet presentados en cajas elegantes.",
      image: "/gourmet-gift-basket-with-wine-cheese-and-treats.jpg",
    },
    {
      name: "Regalos para Mamá",
      description: "Detalles pensados con amor para celebrar a mamá en su día especial.",
      image: "/mothers-day-gift-with-flowers-and-jewelry.jpg",
    },
    {
      name: "Regalos de Cumpleaños",
      description: "Sorpresas únicas para hacer de cada cumpleaños un día inolvidable.",
      image: "/birthday-gift-box-with-balloons-and-treats.jpg",
    },
    {
      name: "Detalles de Boda",
      description: "Regalos elegantes para novios, padrinos y invitados especiales.",
      image: "/wedding-favor-gifts-with-elegant-packaging.jpg",
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
