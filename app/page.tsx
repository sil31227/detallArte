import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CategoryCard } from "@/components/category-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"

export default function HomePage() {
  const categories = [
    {
      title: "Desayunos Personalizados",
      description: "Sorprende con desayunos únicos y deliciosos, diseñados especialmente para cada ocasión.",
      image: "desayuno.JPG",
      href: "/desayunos",
    },
    {
      title: "Papelería Creativa",
      description: "Diseños en papel, estampados, sublimación, fotos polaroid y más. Personaliza tu mundo con estilo.",
      image: "papeleria.png",
      href: "/papeleria",
    },
    {
      title: "Regalería",
      description: "Regalos pensados con amor para momentos especiales y personas únicas.",
      image: "regaleria.png",
      href: "/regaleria",
    },
    {
      title: "Decoración de Eventos",
      description: "Transformamos tus eventos en experiencias inolvidables con decoración personalizada.",
      image: "decoracion.jpg",
      href: "/decoracion",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      text: "El desayuno sorpresa que le envié a mi mamá fue perfecto. Silvina cuidó cada detalle y la presentación fue hermosa.",
    },
    {
      name: "Laura Fernández",
      text: "La papelería es de excelente calidad y el diseño es único. Me encanta trabajar con sus cuadernos.",
    },
    {
      name: "Carolina Ruiz",
      text: "Decoró mi baby shower y fue un sueño hecho realidad. Todo quedó precioso y mis invitados quedaron encantados.",
    },
  ]

  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
            Detallarte
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Detalles que enamoran, momentos que inspiran
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
              <a href="https://wa.me/5492494371107" target="_blank" rel="noopener noreferrer">
                Hacer un pedido
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://instagram.com/silvinatorres" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Sígueme en Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Mis Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada producto está hecho con dedicación y amor para crear momentos especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category.href} {...category} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lo que dicen mis clientes
            </h2>
            <p className="text-lg text-muted-foreground">
              Testimonios de quienes confiaron en mí para sus momentos especiales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl p-12 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            ¿Lista para crear algo especial?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctame por WhatsApp y conversemos sobre cómo puedo ayudarte a hacer realidad tus ideas
          </p>
          <Button size="lg" asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
            <a href="https://wa.me/5492494371107" target="_blank" rel="noopener noreferrer">
              Contactar ahora
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </>
  )
}
