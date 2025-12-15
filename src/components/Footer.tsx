import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-8">
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Explore */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-[#006994]">Explorar</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/eventos-y-actualidad" className="text-slate-300 hover:text-white transition-colors">Eventos y Actualidad</Link></li>
              <li><Link to="/investigacion" className="text-slate-300 hover:text-white transition-colors">Investigación</Link></li>
              <li><a href="https://mediterraneandialogue.org/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">Diálogo Mediterráneo</a></li>
            </ul>
          </div>

          {/* Column 2: The Institute */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-[#006994]">El Instituto</h3>
            <ul className="space-y-3">
              <li><Link to="/nosotros" className="text-slate-300 hover:text-white transition-colors">Quiénes somos</Link></li>
              <li><Link to="/nosotros#equipo" className="text-slate-300 hover:text-white transition-colors">Equipo</Link></li>
              <li><Link to="/nosotros#colabora" className="text-slate-300 hover:text-white transition-colors">Colabora</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-[#006994]">Recursos</h3>
            <ul className="space-y-3">
              <li><Link to="/investigacion" className="text-slate-300 hover:text-white transition-colors">Artículos</Link></li>
              <li><Link to="/analisis/reseña-presentacion-informe-mediterraneo-2024" className="text-slate-300 hover:text-white transition-colors">Informes</Link></li>
              <li><Link to="/analisis/entrevista-beatriz-mauritania-canarias" className="text-slate-300 hover:text-white transition-colors">Entrevistas</Link></li>
              <li><Link to="/analisis/comparativa-llegadas-espana-2025" className="text-slate-300 hover:text-white transition-colors">Infografías</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <div className="mb-6">
              <img
                src="/ieam-logo-new.png"
                alt="IEAM Logo"
                className="h-32 w-auto mb-6 brightness-0 invert opacity-90"
              />
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Centro independiente de investigación y reflexión sobre migraciones. Construyendo puentes entre Europa, África y el Mediterráneo.
              </p>
            </div>

            <div className="flex space-x-4 mb-6">
              <a href="https://x.com/ieamigratorio" target="_blank" rel="noopener noreferrer" className="bg-[#1e4976] p-2 rounded-full hover:bg-[#006994] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/ieamigratorio" target="_blank" rel="noopener noreferrer" className="bg-[#1e4976] p-2 rounded-full hover:bg-[#006994] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/ieamigratorio/" target="_blank" rel="noopener noreferrer" className="bg-[#1e4976] p-2 rounded-full hover:bg-[#006994] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-6 border-t border-[#1e4976]">
              <h4 className="text-sm font-bold mb-2">Contacto</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-[#006994]" />
                  <span>contacto@ieam.es</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-[#006994]" />
                  <span>+34 91 123 45 67</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e4976] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} IEAM. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacidad</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Aviso Legal</Link>
            <a href="mailto:info@fundacionfortius.org" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
