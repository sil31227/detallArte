import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const whatsappNumber = "5492494371107"
  const defaultMessage = "¡Hola! Me interesa conocer más sobre sus productos y servicios."
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 animate-bounce-slow"
    >
      <Button size="lg" className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-lg">
        <MessageCircle className="h-6 w-6 text-white" />
        <span className="sr-only">Contactar por WhatsApp</span>
      </Button>
    </a>
  )
}
