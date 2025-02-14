import { LoginForm } from "@/components/LoginForm"
import { BookOpen } from "lucide-react"
import Link from "next/link"

export default async function LoginPage() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <BookOpen className="h-12 w-12 mx-auto text-gray-800 mb-2" />
          <h2 className="text-2xl font-semibold text-gray-800">Inicio de sesión</h2>
        </div>
        <LoginForm />
        <div className="text-center mt-5">
          <Link className=" text-sm text-blue-400 hover:text-blue-500 hover:underline" href="/register">Crear una cuenta</Link>
        </div>
        <div className="text-center mt-5">
          <Link className=" text-sm text-blue-400 hover:text-blue-500 hover:underline"
            href="/reset">Olvidé mi contraseña</Link>
        </div>
      </div>
    </div>
  )
}

