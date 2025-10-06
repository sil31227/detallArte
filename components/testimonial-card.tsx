import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  text: string
  rating?: number
}

export function TestimonialCard({ name, text, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <div className="flex gap-1 mb-4">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed mb-4 italic">"{text}"</p>
        <p className="font-semibold text-foreground">— {name}</p>
      </CardContent>
    </Card>
  )
}
