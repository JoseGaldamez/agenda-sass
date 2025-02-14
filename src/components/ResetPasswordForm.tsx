"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"
import { createClient } from "@/utils/supabase/client"

export function ResetPasswordForm() {

  const [isLoading, setIsLoading] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const password = formData.get("password") as string;

    if (password.length < 6) {
      toast({
        title: "Error",
        description: "La contraseña debe tener al menos 6 caracteres",
        variant: "destructive",
      })
      setIsLoading(false);
      return;
    }


    const supabase = await createClient();
    const result = await supabase.auth.updateUser({
      password,
    })

    console.log({ result });

    toast({
      title: "Contraseña modificada",
      description: "La contraseña se ha cambiado correctamente",
    })

    setIsLoading(false);
    setShowLogin(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">

      <Input id="password" name="password" placeholder="Contraseña" required type="password" className="w-full" />

      <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white" type="submit" disabled={isLoading}>
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Cambiar contraseña"}
      </Button>

      {
        showLogin && <Link className="w-full block text-blue-400 hover:text-blue-500 text-center hover:underline" href="/login">Volver a iniciar sesión</Link>
      }

    </form>
  )
}

