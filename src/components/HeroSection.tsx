import { motion } from 'framer-motion';
import React from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { articles } from '@/data/articles';

const HeroSection = () => {
  const { t, i18n } = useTranslation();
  const featured = articles[0];

  const getLocalizedContent = (item: any) => {
    const isEn = i18n.language === 'en';
    return {
      title: (isEn && item.title_en) ? item.title_en : item.title,
      subtitle: (isEn && item.subtitle_en) ? item.subtitle_en : item.subtitle,
      image: (isEn && item.heroImage_en) ? item.heroImage_en : item.heroImage,
      type: (isEn && item.type_en) ? item.type_en : item.type,
    };
  };

  const content = featured ? getLocalizedContent(featured) : null;

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
                to="/eventos"
                className="inline-flex items-center justify-center px-7 py-3 text-[11px] font-bold uppercase tracking-[0.18em] border border-slate-300 text-[var(--color-text-primary)] bg-white hover:bg-slate-50 transition-colors"
              >
                {t('hero.cta_events')}
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative mt-8 lg:mt-0">
            {featured && (
              <div className="relative rounded-sm overflow-hidden border hairline group w-full aspect-video">
                <Link to={`/analisis/${featured.slug}`} className="absolute inset-0 z-10" aria-label={content?.title}></Link>
                <img
                  src={content?.image}
                  alt={content?.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-sm font-bold uppercase tracking-[0.2em] drop-shadow-md group-hover:opacity-0 group-hover:scale-110 transition-all duration-700 ease-out">
                    {t('hero.featured.read_now')}
                  </span>
                </div>
              </div>
            )}
            <div className="absolute -z-10 top-12 -right-12 w-64 h-64 bg-slate-50 rounded-full blur-3xl opacity-60"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
