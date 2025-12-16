import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-8">
      <div className="page-shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Column 1: Explore & Navigation */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-6 text-[#006994]">{t('footer.sections.explore')}</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-300 hover:text-white transition-colors">{t('navigation.home')}</Link></li>
              <li><Link to="/nosotros" className="text-slate-300 hover:text-white transition-colors">{t('navigation.about')}</Link></li>
              <li><Link to="/eventos-y-actualidad" className="text-slate-300 hover:text-white transition-colors">{t('navigation.events')}</Link></li>
              <li><Link to="/investigacion" className="text-slate-300 hover:text-white transition-colors">{t('navigation.research')}</Link></li>
              <li><a href="https://mediterraneandialogue.org/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">{t('navigation.dialogue')}</a></li>
            </ul>
          </div>

          {/* Column 2: Connect */}
          <div className="md:col-span-1 lg:col-start-3 lg:col-span-2">
            <div className="mb-6">
              <img
                src="/ieam-logo-new.png"
                alt="IEAM Logo"
                className="h-32 w-auto mb-6 brightness-0 invert opacity-90"
              />
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t('footer.contact_info')}
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

            {/* Contact Info */}
            <div className="pt-6 border-t border-[#1e4976]">
              <h4 className="text-sm font-bold mb-2">{t('footer.sections.contact')}</h4>
              <p className="text-sm text-slate-400 mb-2">
                <Link to="/contacto" className="hover:text-white transition-colors">{t('navigation.contact')}</Link>
              </p>
              <p className="text-sm text-slate-400">
                {t('footer.location')}
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1e4976] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} IEAM. {t('footer.rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.legal.privacy')}</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">{t('footer.legal.cookies')}</Link>
            <Link to="/legal" className="hover:text-white transition-colors">{t('footer.legal.legal_notice')}</Link>
            <a href="mailto:info@ieam.es" className="hover:text-white transition-colors">{t('navigation.contact')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
