import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "9.99",
    features: ["Calendario personal", "Recordatorios básicos", "Sincronización en 2 dispositivos"],
  },
  {
    name: "Pro",
    price: "19.99",
    features: ["Todo lo del plan Básico", "Colaboración en equipo", "Análisis avanzado", "Soporte prioritario"],
  },
  {
    name: "Empresas",
    price: "Personalizado",
    features: ["Todas las características Pro", "Integración personalizada", "Gestor de cuenta dedicado"],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Planes y Precios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold mb-6">
                ${plan.price} <span className="text-sm font-normal">/mes</span>
              </p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <CheckCircle className="w-5 h-5 text-primary mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full">Elegir Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

