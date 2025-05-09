import { 
  Truck, 
  BarChart3, 
  UserCheck, 
  MapPin
} from 'lucide-react';
import { FeatureProps } from '@/types';

const features: FeatureProps[] = [
  {
    icon: <Truck className="h-8 w-8 text-darkBlue" />,
    title: 'FLOTA MODERNA',
    description: 'Vehículos de última generación para un servicio óptimo'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-darkBlue" />,
    title: 'EFICIENCIA',
    description: 'Optimización de rutas y recursos para la mejor relación costo-beneficio'
  },
  {
    icon: <UserCheck className="h-8 w-8 text-darkBlue" />,
    title: 'EQUIPO EXPERTO',
    description: 'Personal calificado y con amplia experiencia en logística'
  },
  {
    icon: <MapPin className="h-8 w-8 text-darkBlue" />,
    title: 'TRAZABILIDAD',
    description: 'Seguimiento en tiempo real de sus envíos'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-lightBeige">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-darkBlue mb-4">¿POR QUÉ ELEGIRNOS?</h2>
          <div className="w-20 h-1 bg-terracotta mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-darkBlue mb-2">{feature.title}</h3>
              <p className="text-black">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;