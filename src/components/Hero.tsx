import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <div className="bg-[url('/fondo.jpg')] bg-cover bg-center">
      <section
        className="py-52 bg-black bg-opacity-85 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Tu Agenda Digital en Línea</h1>
          <p className="text-xl mb-8">Organiza tu vida con facilidad y eficiencia</p>
          <Button size="lg" variant="secondary">
            Comienza Gratis
          </Button>
        </div>
      </section>
    </div>
  )
}

