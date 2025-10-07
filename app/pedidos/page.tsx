import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, CreditCard, MessageCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PedidosPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-4">Pedidos, Entregas y Envíos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Todo lo que necesitas saber para hacer tu pedido
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* How to Order */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">¿Cómo hacer un pedido?</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">1. Contacto:</strong> Escríbeme por WhatsApp o Instagram con
                      tu consulta.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">2. Personalización:</strong> Conversamos sobre tus
                      preferencias, colores, y detalles especiales.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">3. Confirmación:</strong> Te envío un presupuesto y
                      confirmamos el pedido.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">4. Entrega:</strong> Coordinamos fecha y forma de entrega.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 mt-6">
                    <Button asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white">
                      <a href="https://wa.me/5492494371107" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Contactar por WhatsApp
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://instagram.com/silvinatorres" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2 h-4 w-4" />
                        Escribir por Instagram
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Times */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Tiempos de Anticipación</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Desayunos:</strong> Mínimo 48 horas de anticipación.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Papelería y Regalos:</strong> Entre 3 a 7 días según
                      personalización.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Decoración de Eventos:</strong> Mínimo 2 semanas de
                      anticipación.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Pedidos urgentes:</strong> Consultame disponibilidad por
                      WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Zones */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Zonas de Entrega</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Entrega sin cargo:</strong> Zona Norte de Buenos Aires
                      (Belgrano, Núñez, Palermo, Recoleta).
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Entrega con cargo:</strong> Resto de CABA y GBA (consultar
                      costo).
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Retiro en persona:</strong> Coordinar punto de encuentro.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Envíos al interior:</strong> A través de correo (consultar
                      disponibilidad).
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-3">Formas de Pago</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Transferencia bancaria:</strong> CBU/Alias disponible al
                      confirmar pedido.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Mercado Pago:</strong> Aceptamos pagos con tarjeta de crédito
                      y débito.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Efectivo:</strong> Al momento de la entrega o retiro.
                    </p>
                    <p className="leading-relaxed">
                      <strong className="text-foreground">Seña:</strong> Se requiere 50% de seña para confirmar pedidos
                      personalizados.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-12 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4 text-center">Zona de Cobertura</h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Zona Norte de Buenos Aires</p>
                  <p className="text-sm">Belgrano • Núñez • Palermo • Recoleta</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center mt-4">
                Para otras zonas, consultame por WhatsApp y coordinamos la mejor opción de entrega
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </>
  )
}
