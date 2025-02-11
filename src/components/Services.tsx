import { CheckCircle } from "lucide-react"

const services = [
  "Gestión de citas y eventos",
  "Sincronización con múltiples dispositivos",
  "Integración con otras aplicaciones",
  "Análisis de productividad",
  "Soporte 24/7",
  "Copias de seguridad automáticas",
]

export default function Services() {
  return (
    <section id="services" className="py-36">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
              <p>{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

