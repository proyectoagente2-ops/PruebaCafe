import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { tourismExperiences } from '@/lib/products'
const formatPrice = (price: number) => {
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
}

interface ExperienceReservationDialogProps {
  children?: React.ReactNode
}

export function ExperienceReservationDialog({ children }: ExperienceReservationDialogProps) {
  const [selectedExperience, setSelectedExperience] = useState<string>("")
  
  const handleWhatsAppRedirect = () => {
    if (!selectedExperience) return
    
    const experience = tourismExperiences.find(exp => exp.id === selectedExperience)
    if (!experience) return
    
    const message = `¡Hola! Me gustaría reservar la experiencia "${experience.name}" por ${formatPrice(experience.price)}. ¿Podrían darme más información sobre disponibilidad y horarios?`
    const phoneNumber = "573113678555" // Reemplaza con el número real
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" className="bg-white text-orange-600 hover:bg-orange-100">
            📅 Reservar Experiencia
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-2xl text-orange-900">Reservar Experiencia</DialogTitle>
          <DialogDescription className="text-base text-gray-600">
            Selecciona la experiencia que te gustaría reservar. Te contactaremos por WhatsApp para confirmar disponibilidad y horarios.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-6">
          <RadioGroup
            value={selectedExperience}
            onValueChange={setSelectedExperience}
            className="grid gap-4"
          >
            {tourismExperiences.map((experience) => (
              <div 
                key={experience.id} 
                className="flex items-start space-x-4 rounded-lg border border-orange-100 p-4 hover:bg-orange-50 transition-colors duration-200"
              >
                <RadioGroupItem value={experience.id} id={experience.id} className="mt-2" />
                <Label htmlFor={experience.id} className="flex-grow cursor-pointer space-y-2">
                  <div className="font-semibold text-lg text-orange-900">{experience.name}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{experience.description}</div>
                  <div className="text-lg font-medium text-orange-600">
                    {formatPrice(experience.price)}
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4 border-t border-gray-100">
          <Button
            onClick={handleWhatsAppRedirect}
            disabled={!selectedExperience}
            className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 transition-colors"
          >
            {selectedExperience ? 'Continuar a WhatsApp' : 'Selecciona una experiencia'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
