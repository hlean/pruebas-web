import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTES } from '@/lib/constants';
import { NavItem } from '@/types';
import { cn } from '@/lib/utils';

const navItems: NavItem[] = [
  { title: 'Iniciar sesión', href: ROUTES.LOGIN, isButton: true },
  { title: 'Crear cuenta', href: ROUTES.REGISTER, isButton: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn('top-0 w-full z-50 transition-all duration-300', 'bg-darkBlue text-white py-4')}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to={ROUTES.HOME} 
          className="flex items-center gap-2 font-bold">
              <img 
                src="src/assets/navbar_logo.png" 
                alt="Logo de Dubra logistica y transporte" 
                className="rounded-lg relative z-10 object-cover w-60"
              />
        </Link>

        {/* Navegacion desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => 
            item.isButton ? (
              <Button
                key={item.href}
                asChild
                variant="secondary"
                className="animate-fade-in bg-terracotta hover:bg-darkRed"
              >
                <Link to={item.href}>{item.title}</Link>
              </Button>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'transition-colors hover:text-terracotta',
                  location.pathname === item.href && 'text-terracotta font-medium'
                )}
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Boton de menu mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Navegacion mobile */}
      {isOpen && (
        <nav className="md:hidden bg-darkBlue py-4 px-4 absolute top-full left-0 w-full shadow-md animate-slide-in">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => 
              item.isButton ? (
                <Button
                  key={item.href}
                  asChild
                  variant="secondary"
                  className="bg-terracotta hover:bg-darkRed w-full"
                >
                  <Link to={item.href}>{item.title}</Link>
                </Button>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'py-2 block transition-colors hover:text-terracotta',
                    location.pathname === item.href && 'text-terracotta font-medium'
                  )}
                >
                  {item.title}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;