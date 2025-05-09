import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY, ROUTES } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-darkBlue text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Informacion de la compañia */}
          <div>
            <Link to={ROUTES.HOME} className="flex items-center gap-2 text-xl font-bold mb-4">
              <span>DUBRA Transporte y Logística</span>
            </Link>
            <p className="text-white/80 mb-4 max-w-xs">
              Soluciones de transporte y logística especializadas para
              empresas en Ciudad de la Costa y Montevideo.
            </p>
            <div className="flex space-x-4">
              <a href={COMPANY.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-terracotta transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rapidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to={ROUTES.HOME} className="text-white/80 hover:text-terracotta transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to={ROUTES.LOGIN} className="text-white/80 hover:text-terracotta transition-colors">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link to={ROUTES.SCHEDULE} className="text-white/80 hover:text-terracotta transition-colors">
                  Programar un envío
                </Link>
              </li>
              <li>
                <Link to={ROUTES.CONTACT} className="text-white/80 hover:text-terracotta transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Informacion de contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-terracotta mt-0.5" />
                <span className="text-white/80">{COMPANY.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-terracotta" />
                <a href={`tel:${COMPANY.phone}`} className="text-white/80 hover:text-terracotta transition-colors">
                  {COMPANY.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-terracotta" />
                <a href={`mailto:${COMPANY.email}`} className="text-white/80 hover:text-terracotta transition-colors">
                  {COMPANY.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-2 md:mb-0">
              &copy; {currentYear} {COMPANY.name}. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 text-sm text-white/60">
              <a href="#" className="hover:text-terracotta transition-colors">Política de privacidad</a>
              <a href="#" className="hover:text-terracotta transition-colors">Términos y condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;