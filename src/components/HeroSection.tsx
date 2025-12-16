import { motion } from 'framer-motion';
import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center bg-white border-b hairline">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F9FC] via-white to-white pointer-events-none" aria-hidden="true" />

      <div className="relative page-shell w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center py-8 lg:py-12">

          <div className="lg:col-span-5 space-y-8">
            <div className="eyebrow text-[var(--color-text-primary)]">
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500 ml-2">{t('hero.eyebrow')}</span>
            </div>


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight tracking-[-0.02em]">
              {t('hero.title_start')} <span className="italic text-[var(--color-accent-red)]">{t('hero.title_highlight')}</span> {t('hero.title_end')}
            </h1>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/investigacion"
                className="inline-flex items-center justify-center px-7 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white bg-[var(--color-navy-900)] hover:bg-[var(--color-mediterranean)] transition-colors shadow-sm rounded-none"
              >
                {t('hero.cta_explore')}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/eventos-y-actualidad"
                className="inline-flex items-center justify-center px-7 py-3 text-[11px] font-bold uppercase tracking-[0.18em] border border-slate-300 text-[var(--color-text-primary)] bg-white hover:bg-slate-50 transition-colors"
              >
                {t('hero.cta_events')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            <div className="relative rounded-sm overflow-hidden border hairline group h-[300px] md:h-[400px] lg:h-[450px]">
              <Link to="/analisis/movilidad-africa-europa" className="absolute inset-0 z-10" aria-label="Leer informe destacado"></Link>
              <img
                src="mali-europa-map.png"
                alt="Global Migration Map"
                className="w-full h-[420px] lg:h-[520px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A2540]/90 to-transparent p-8 pt-24">
                <div className="inline-flex items-center px-3 py-1 bg-white/90 text-[#0A3D62] text-[11px] font-bold uppercase tracking-wider mb-3 border border-[#B6D7FF] rounded-full">
                  {t('hero.featured.label')}
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {t('hero.featured.title')}
                </h3>
                <p className="text-slate-200 text-sm mb-4 max-w-xl">
                  {t('hero.featured.subtitle')}
                </p>
                <div className="flex items-center text-xs text-slate-300 font-medium uppercase tracking-wide">
                  <span className="flex items-center mr-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    {t('hero.featured.date_nov')}
                  </span>
                  <span>{t('hero.featured.reading_time')}</span>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-12 -right-12 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
