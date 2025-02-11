import Link from "next/link"

export default function Header() {
    return (
        <header className="py-4 px-6 bg-white shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-primary">
                    AgendaDigital
                </Link>
                <nav className="hidden md:flex space-x-4">
                    <Link href="#features" className="text-gray-600 hover:text-primary">
                        Características
                    </Link>
                    <Link href="#services" className="text-gray-600 hover:text-primary">
                        Servicios
                    </Link>
                    <Link href="#pricing" className="text-gray-600 hover:text-primary">
                        Planes
                    </Link>
                    <Link href="#contact" className="text-gray-600 hover:text-primary">
                        Contacto
                    </Link>
                </nav>
                <Link href={"/login"}
                    className="bg-gray-900 hover:bg-gray-950 text-gray-100 hover:text-white py-3 px-5 rounded-lg">Iniciar sesión</Link>
            </div>
        </header>
    )
}

