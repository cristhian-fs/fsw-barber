"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { SmartphoneIcon } from "lucide-react"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handlePhoneClick = () => {
    navigator.clipboard.writeText(phone)
    toast.message("Número copiado para a área de transferência")
  }

  return (
    <div className="flex justify-between gap-2">
      {/* ESQUERDA */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      {/* DIREITA */}
      <Button variant="outline" size="sm" onClick={() => handlePhoneClick()}>
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
