"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false)
  const [errorText, setErrorText] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await result.json();

    if (data.success === false) {
      setErrorText("Correo electrónico o contraseña incorrectos");
      setIsLoading(false);
    } else {
      setErrorText("");
      setIsLoading(false);
      router.push("/dashboard");
    }

  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input id="email" name="email" placeholder="Correo electrónico" required type="email" className="w-full" />
      <Input id="password" name="password" placeholder="Contraseña" required type="password" className="w-full" />
      <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white" type="submit" disabled={isLoading}>
        {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Iniciar sesión"}
      </Button>
      {
        (errorText !== "") && (
          <p className="text-red-500 text-sm">{errorText}</p>
        )
      }
    </form>
  )
}

