import { Calendar, Clock, Users, Lock } from "lucide-react"

const features = [
  { icon: Calendar, title: "Calendario Intuitivo", description: "Gestiona tus eventos con facilidad" },
  { icon: Clock, title: "Recordatorios", description: "Nunca olvides una cita importante" },
  { icon: Users, title: "Colaboración", description: "Comparte y coordina con tu equipo" },
  { icon: Lock, title: "Seguridad", description: "Tus datos están protegidos" },
]

export default function Features() {
  return (
    <section id="features" className="py-36 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

