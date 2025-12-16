import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight, Check, Gift, Users, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { donationTiers, DONATION_CONFIG, formatAmount, getDonationUrl, DonationFrequency } from '@/lib/donation-config';
import { useTranslation } from 'react-i18next';

const CollaboratePage = () => {
  const { t } = useTranslation();
  const [frequency, setFrequency] = useState<DonationFrequency>('one-time');

  const handleDonate = (tierId: string) => {
    const url = getDonationUrl(tierId, frequency);
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-[var(--color-navy-900)] text-white">
        <div className="page-shell py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/60 mb-4">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-red)]" />
              {t('collaborate.hero.label')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight text-white">
              {t('collaborate.hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              {t('collaborate.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Donation Cards */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-serif font-bold text-[var(--color-navy-900)] mb-4">
                {t('collaborate.tiers.title')}
              </h2>
              <p className="text-slate-600">
                {t('collaborate.tiers.subtitle')}
              </p>
            </div>

            {/* Frequency Toggle */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-slate-100 p-1 rounded-full">
                <button
                  onClick={() => setFrequency('one-time')}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${frequency === 'one-time'
                    ? 'bg-[#0A2540] text-white shadow-md'
                    : 'text-slate-500 hover:text-[#0A2540]'
                    }`}
                >
                  {t('collaborate.switch.one_time')}
                </button>
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${frequency === 'monthly'
                    ? 'bg-[#0A2540] text-white shadow-md'
                    : 'text-slate-500 hover:text-[#0A2540]'
                    }`}
                >
                  {t('collaborate.switch.monthly')}
                </button>
              </div>
            </div>

            {/* Donation Tiers Grid */}
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {donationTiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`relative bg-white border-2 transition-all ${tier.featured
                    ? 'border-[var(--color-mediterranean)] shadow-lg'
                    : 'border-[var(--color-border)] hover:border-slate-300'
                    }`}
                >
                  {/* Featured Badge */}
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[var(--color-mediterranean)] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1">
                        {t('collaborate.tiers.solidarity.badge')}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Amount */}
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-[var(--color-navy-900)]">
                        {formatAmount(tier.amount, frequency)}
                      </div>
                      <div className="text-sm text-slate-500 mt-1 uppercase tracking-wide text-xs">
                        {frequency === 'monthly' ? t('collaborate.switch.monthly') : t('collaborate.tiers.frequency')}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-[var(--color-navy-900)] text-center mb-2">
                      {t(`collaborate.tiers.${tier.id}.title`)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 text-center mb-4">
                      {t(`collaborate.tiers.${tier.id}.description`)}
                    </p>

                    {/* Impact */}
                    <div className="bg-slate-50 p-3 mb-6">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-slate-600">{t(`collaborate.tiers.${tier.id}.impact`)}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleDonate(tier.id)}
                      className={`w-full py-3 font-bold uppercase tracking-[0.12em] text-sm transition-colors flex items-center justify-center gap-2 group ${tier.featured
                        ? 'bg-[var(--color-mediterranean)] text-white hover:bg-[var(--color-navy-900)]'
                        : 'bg-[var(--color-navy-900)] text-white hover:bg-[var(--color-mediterranean)]'
                        }`}
                    >
                      <Heart className="w-4 h-4" />
                      {t('collaborate.tiers.button')} {formatAmount(tier.amount, frequency)}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-white border-t border-[var(--color-border)]">
        <div className="page-shell section-shell">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-[var(--color-navy-900)] mb-4">
                {t('collaborate.impact.title')}
              </h2>
              <p className="text-slate-600">
                {t('collaborate.impact.subtitle')}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Impact 1 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-mediterranean)]/10 text-[var(--color-mediterranean)] mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[var(--color-navy-900)] mb-2">
                  {t('collaborate.impact.research.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('collaborate.impact.research.description')}
                </p>
              </div>

              {/* Impact 2 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[var(--color-navy-900)] mb-2">
                  {t('collaborate.impact.dialogue.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('collaborate.impact.dialogue.description')}
                </p>
              </div>

              {/* Impact 3 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-navy-900)]/10 text-[var(--color-navy-900)] mb-4">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[var(--color-navy-900)] mb-2">
                  {t('collaborate.impact.independence.title')}
                </h3>
                <p className="text-sm text-slate-600">
                  {t('collaborate.impact.independence.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[var(--color-paper-warm)] border-t border-[var(--color-border)]">
        <div className="page-shell section-shell">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-serif font-bold text-[var(--color-navy-900)] mb-4">
              {t('collaborate.other_ways.title')}
            </h2>
            <p className="text-slate-600 mb-6">
              {t('collaborate.other_ways.description')}
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white px-8 py-3 font-bold uppercase tracking-[0.12em] text-sm hover:bg-[var(--color-mediterranean)] transition-colors"
            >
              {t('collaborate.other_ways.button')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollaboratePage;
