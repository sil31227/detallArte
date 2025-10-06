import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EtiquetasStickersPage() {
  const stickerTypes = [
    {
      name: "Etiquetas Escolares",
      description: "Etiquetas personalizadas con nombre para útiles escolares, resistentes y duraderas.",
      image: "/school-name-labels-colorful.jpg",
    },
    {
      name: "Stickers Decorativos",
      description: "Stickers con diseños únicos para decorar tus cuadernos, laptop o lo que quieras.",
      image: "/decorative-stickers-collection.jpg",
    },
    {
      name: "Etiquetas para Productos",
      description: "Etiquetas profesionales para tus productos artesanales o emprendimiento.",
      image: "/product-labels-professional.jpg",
    },
    {
      name: "Stickers para Planner",
      description: "Stickers funcionales y decorativos para organizar tu agenda con estilo.",
      image: "/planner-stickers-functional.jpg",
    },
    {
      name: "Etiquetas para Eventos",
      description: "Etiquetas personalizadas para cumpleaños, baby shower, bodas y más.",
      image: "/event-stickers-personalized.jpg",
    },
    {
      name: "Stickers con Logo",
      description: "Stickers personalizados con tu logo o marca para promocionar tu negocio.",
      image: "/custom-logo-stickers.jpg",
    },
    {
      name: "Etiquetas Impermeables",
      description: "Etiquetas resistentes al agua, perfectas para botellas, termos y más.",
      image: "/waterproof-labels-bottles.jpg",
    },
    {
      name: "Stickers Temáticos",
      description: "Colecciones temáticas: unicornios, dinosaurios, flores, y muchos más.",
      image: "/themed-stickers-collection.jpg",
    },
    {
      name: "Etiquetas para Frascos",
      description: "Etiquetas elegantes para frascos de cocina, despensa o productos artesanales.",
      image: "/jar-labels-kitchen.jpg",
    },
    {
      name: "Stickers Motivacionales",
      description: "Frases inspiradoras y motivacionales para decorar tu espacio.",
      image: "/motivational-quote-stickers.jpg",
    },
    {
      name: "Etiquetas para Regalos",
      description: "Etiquetas especiales para personalizar tus regalos y detalles.",
      image: "/gift-tags-labels-elegant.jpg",
    },
    {
      name: "Stickers Holográficos",
      description: "Stickers con acabado holográfico para un toque brillante y especial.",
      image: "/holographic-stickers-shiny.jpg",
    },
  ]

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/papeleria">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver a Papelería
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Etiquetas y Stickers</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre nuestra colección completa de etiquetas y stickers personalizados. Desde etiquetas escolares hasta
            stickers decorativos, tenemos el diseño perfecto para cada necesidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stickerTypes.map((sticker) => (
            <ProductCard key={sticker.name} {...sticker} />
          ))}
        </div>

        <div className="mt-12 text-center bg-card p-8 rounded-lg border">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-4">¿Buscas algo específico?</h2>
          <p className="text-muted-foreground mb-6">
            Todos nuestros stickers y etiquetas pueden personalizarse según tus necesidades. Contáctanos para crear el
            diseño perfecto para ti.
          </p>
          <a
            href="https://wa.me/5491234567890?text=Hola! Me interesan las etiquetas y stickers personalizados"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
