import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Nombre" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Mensaje" />
            <Button type="button" className="w-full">
              Enviar Mensaje
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

