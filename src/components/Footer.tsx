import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <Link href="/" className="text-2xl font-bold">
            AgendaDigital
          </Link>
          <p className="text-sm mt-2">© 2023 AgendaDigital. Todos los derechos reservados.</p>
        </div>
        <nav className="flex flex-wrap justify-center md:justify-end gap-4">
          <Link href="#" className="hover:text-primary">
            Términos de Servicio
          </Link>
          <Link href="#" className="hover:text-primary">
            Política de Privacidad
          </Link>
          <Link href="#" className="hover:text-primary">
            FAQ
          </Link>
        </nav>
      </div>
    </footer>
  )
}

