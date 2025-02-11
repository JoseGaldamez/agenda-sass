"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard");
    }, 2000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input id="email" placeholder="Correo electrónico" required type="email" className="w-full" />
      <Input id="password" placeholder="Contraseña" required type="password" className="w-full" />
      <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white" type="submit" disabled={isLoading}>
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Iniciar sesión"}
      </Button>
    </form>
  )
}

