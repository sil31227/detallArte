import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MessageCircle } from "lucide-react"

interface ProductCardProps {
  name: string
  description: string
  image?: string
  images?: string[]
  whatsappMessage?: string
  link?: string
  imagePosition?: string // Nueva propiedad para posición de imagen
}

export function ProductCard({ name, description, image, images, whatsappMessage, link, imagePosition }: ProductCardProps) {
  const whatsappNumber = "5492494371107"
  const message = whatsappMessage || `Hola, quiero consultar por ${name}`
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

  // Si tenemos múltiples imágenes, usamos el carrusel, sino la imagen única
  const productImages = images && images.length > 0 ? images : [image || "/placeholder.svg"]

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square relative overflow-hidden bg-muted">
        {productImages.length > 1 ? (
          <Carousel className="w-full h-full">
            <CarouselContent>
              {productImages.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-square relative">
                    <Image
                      src={img}
                      alt={`${name} - Imagen ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : (
          <Image
            src={productImages[0]}
            alt={name}
            fill
            className={`object-contain hover:scale-105 transition-transform duration-300 ${imagePosition || ''}`}
          />
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        {link ? (
          <Button asChild className="w-full">
            <Link href={link}>Ver Catálogo Completo</Link>
          </Button>
        ) : (
          <Button asChild className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4 mr-2" />
              Consultar por WhatsApp
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
