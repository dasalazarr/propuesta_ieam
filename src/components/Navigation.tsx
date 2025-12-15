import React, { useState } from 'react';
import { Menu, X, Globe, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    {
      name: 'Eventos y Actualidad',
      path: '/eventos-y-actualidad',
    },
    {
      name: 'Investigación',
      path: '/investigacion',
    },
    { name: 'Diálogo Mediterráneo', path: 'https://mediterraneandialogue.org/', external: true },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b hairline">
      <div className="page-shell">
        <div className="flex items-center justify-between h-[72px]">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/ieam-logo-new.png"
                alt="IEAM Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.name}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-1 pt-1 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 text-slate-500 hover:text-[var(--color-text-primary)]"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`inline-flex items-center px-1 pt-1 text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${isActive(item.path)
                    ? 'text-[var(--color-text-primary)] border-b-2 border-[var(--color-text-primary)]'
                    : 'text-slate-500 hover:text-[var(--color-text-primary)]'
                    }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex lg:items-center lg:space-x-5">
            <button className="text-slate-400 hover:text-[var(--color-text-primary)] transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="flex items-center text-slate-600 hover:text-[var(--color-text-primary)] transition-colors">
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-[11px] font-bold tracking-[0.18em]">ES</span>
            </button>
            <Link
              to="/colabora"
              className="inline-flex items-center px-6 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-[var(--color-navy-900)] hover:bg-[var(--color-mediterranean)] transition-colors shadow-sm rounded-none"
            >
              Colabora
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t hairline">
          <div className="pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.external ? '/' : item.path}
                className={`block pl-4 pr-4 py-2 border-l-4 text-sm font-medium ${isActive(item.path)
                  ? 'bg-slate-50 border-[var(--color-text-primary)] text-[var(--color-text-primary)]'
                  : 'border-transparent text-slate-600 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-800'
                  }`}
                onClick={() => {
                  setIsOpen(false);
                  if (item.external) window.open(item.path, '_blank', 'noopener,noreferrer');
                }}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 pb-4 border-t hairline">
              <div className="flex items-center px-4 space-x-4">
                <button className="flex items-center text-slate-600">
                  <Globe className="w-5 h-5 mr-2" />
                  ES
                </button>
              <Link
                  to="/colabora"
                  className="block w-full text-center px-4 py-2 text-sm font-bold tracking-[0.18em] text-white bg-[var(--color-navy-900)] hover:bg-[var(--color-mediterranean)]"
                  onClick={() => setIsOpen(false)}
                >
                  Colabora
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
