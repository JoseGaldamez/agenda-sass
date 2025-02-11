import Image from "next/image"

const testimonials = [
  {
    name: "María García",
    role: "Emprendedora",
    content: "AgendaDigital ha revolucionado la forma en que manejo mi tiempo. ¡Es increíble!",
    avatar: "/placeholder.png",
  },
  {
    name: "Carlos Rodríguez",
    role: "Gerente de Proyectos",
    content: "La colaboración en equipo nunca había sido tan fácil. Altamente recomendado.",
    avatar: "/placeholder.png",
  },
  {
    name: "Ana Martínez",
    role: "Freelancer",
    content: "Me encanta la flexibilidad y la facilidad de uso. Es una herramienta esencial para mi trabajo.",
    avatar: "/placeholder.png",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4 italic">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

