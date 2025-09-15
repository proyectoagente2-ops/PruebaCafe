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

const formatPrice = (price: number) => {
    return price.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 })
}

interface ExperienceReservationDialogProps {
  children?: React.ReactNode
  experience?: {
    id: string;
    name: string;
    price: number;
    duration?: string;
  }
}

export function ExperienceReservationDialog({ children, experience }: ExperienceReservationDialogProps) {
  const [selectedDate, setSelectedDate] = useState<string>('')

  if (!experience) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || <Button variant="outline">Reservar</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reservar experiencia</DialogTitle>
          <DialogDescription>
            {experience.name} - {formatPrice(experience.price)}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label>Selecciona una fecha disponible</Label>
            <RadioGroup value={selectedDate} onValueChange={setSelectedDate}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="next-week" id="next-week" />
                <Label htmlFor="next-week">Próxima semana</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="next-month" id="next-month" />
                <Label htmlFor="next-month">Próximo mes</Label>
              </div>
            </RadioGroup>
          </div>
          {selectedDate && (
            <Button
              onClick={() => {
                const message = `Hola, me gustaría reservar la experiencia "${experience.name}" para ${
                  selectedDate === 'next-week' ? 'la próxima semana' : 'el próximo mes'
                }.`;
                window.open(`https://wa.me/+573015555555?text=${encodeURIComponent(message)}`);
              }}
            >
              Confirmar por WhatsApp
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}