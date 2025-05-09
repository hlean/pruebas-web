import { Package, Truck, FileText, Clock } from 'lucide-react';
import { ServiceProps } from '@/types';

const services: ServiceProps[] = [
  {
    icon: <Package className="h-10 w-10 text-terracotta" />,
    title: 'Gestión de pedidos',
    description: 'Ingresá y gestioná pedidos de forma sencilla e intuitiva.'
  },
  {
    icon: <Truck className="h-10 w-10 text-terracotta" />,
    title: 'Seguimiento de pedidos',
    description: 'Conocé el estado actual de tus paquetes en todo momento.'
  },
  {
    icon: <FileText className="h-10 w-10 text-terracotta" />,
    title: 'Historial de pedidos',
    description: 'Accedé a un registro completo de todos tus pedidos anteriores.'
  },
  {
    icon: <Clock className="h-10 w-10 text-terracotta" />,
    title: 'Documentación digital',
    description: 'Generá y administrá documentación de manera digital.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-lightBeige">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-darkBlue mb-6 text-center">NUESTROS SERVICIOS</h2>
        <div className="w-20 h-1 bg-terracotta mx-auto mb-8"></div>
        <div className="grid grid-cols-1 gap-12">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div>{service.icon}</div>
                    <h3 className="text-xl font-semibold text-darkBlue">{service.title}</h3>
                  </div>
                  <p className="text-black">{service.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
