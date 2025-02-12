"use client"

import { useState } from "react"
import { signinAction } from "@/server/auth/auth"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

export function LoginForm() {

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    await signinAction(email, password);

    toast({
      title: "Error",
      description: "Usuario o contraseña incorrectos",
      variant: "destructive",
    })

    setIsLoading(false);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input id="email" name="email" placeholder="Correo electrónico" required type="email" className="w-full" />
      <Input id="password" name="password" placeholder="Contraseña" required type="password" className="w-full" />
      <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white" type="submit" disabled={isLoading}>
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Iniciar sesión"}
      </Button>

    </form>
  )
}

