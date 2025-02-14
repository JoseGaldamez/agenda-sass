"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"
import { createClient } from "@/utils/supabase/client"

export function RequestResetPasswordForm() {

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;

    const supabase = await createClient();
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })

    toast({
      title: "Email enviado",
      description: "Se ha enviado un email con instrucciones para restablecer la contraseña",
    })

    setIsLoading(false);

  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">

      <Input id="email" name="email" placeholder="Email" required
        type="email" className="w-full" />

      <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white" type="submit" disabled={isLoading}>
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Solicitar email de restablecimiento"}
      </Button>

    </form>
  )
}

