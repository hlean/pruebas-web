import { useState } from 'react';
import { motion } from 'framer-motion'; // 👈 Importación para animaciones
import { Package, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ROUTES } from '@/lib/constants';

const Traking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showDetails, setShowDetails] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    setShowDetails(true);
  };

  return (
    <section className="relative bg-darkBlue pt-10 pb-20 md:pt-10 md:pb-10 text-white overflow-hidden">
      <div className="container mx-auto relative z-10 justify-items-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Seguí tu envío
          </h1>
          <p className="text-lg text-white/80 mb-2 max-w-lg">
            Ingresá el número de tu pedido para conocer su estado actual.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
            <Link 
              to={ROUTES.SCHEDULE}
              className="flex items-center gap-2 font-medium hover:text-terracotta transition-colors group"
            >
              Programar un envío 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
            <Link 
              to={ROUTES.REGISTER}
              className="flex items-center gap-2 font-medium hover:text-terracotta transition-colors group"
            >
              Crear tu cuenta
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>  

          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-3 max-w-lg mb-6">
            <div className="flex-grow relative">
              <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 text-darkBlue" />
              <Input 
                type="text" 
                placeholder="Nº de pedido" 
                className="pl-10 bg-white text-darkBlue h-12"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="bg-terracotta hover:bg-darkRed h-12 px-6"
            >
              Rastrear
            </Button>
          </form>

          
          {/* se podria hacer como un componente aparte y ademas habria que ver detalles*/}
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.5, // Duración rápida para la apertura
              }}
              className="relative bg-white text-darkBlue rounded-xl shadow-lg p-6 max-w-md mx-auto text-left"
            >
              {/* Botón de cerrar */}
              <button
                onClick={() => {
                  setShowDetails(false);
                  setTrackingNumber('');
                }}
                className="absolute top-2 right-2 text-darkBlue hover:text-red-500 text-xl font-bold"
                aria-label="Cerrar detalles"
              >
                &times;
              </button>

              <h2 className="text-xl font-semibold mb-4 text-center">Detalles del pedido</h2>
              <div className="grid grid-cols-2 gap-2">
                <div className="font-medium">Número:</div>
                <div>{trackingNumber}AAA333000</div>
                <div className="font-medium">Estado:</div>
                <div>En tránsito</div>
                <div className="font-medium">Última ubicación:</div>
                <div>Montevideo</div>
                <div className="font-medium">Estimado de entrega:</div>
                <div>10 de mayo</div>
              </div>
            </motion.div>
          )}

          {!showDetails && (
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.75,  
                ease: 'easeInOut', 
              }}
            />
          )}


        
        </div>
      </div>
    </section>
  );
};

export default Traking;
