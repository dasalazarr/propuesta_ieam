import { useState } from 'react';
import { Heart, ArrowRight, Check, Gift, Users, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { donationTiers, DONATION_CONFIG, formatAmount, getDonationUrl } from '@/lib/donation-config';

const CollaboratePage = () => {
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleDonate = (tierId: string) => {
    const url = getDonationUrl(tierId);
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCustomDonate = () => {
    const url = DONATION_CONFIG.paymentLinks.custom;
    if (url) {
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
              Colabora con nosotros
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Impulsa el análisis independiente
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
              Tu apoyo hace posible la investigación rigurosa sobre seguridad,
              migraciones y geopolítica en el espacio euro-africano y mediterráneo.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Cards */}
      <section className="section-shell">
        <div className="page-shell">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-[var(--color-navy-900)] mb-4">
                Elige tu forma de colaborar
              </h2>
              <p className="text-slate-600">
                Todas las contribuciones apoyan directamente nuestra misión de análisis independiente.
              </p>
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
                        Más popular
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    {/* Amount */}
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-[var(--color-navy-900)]">
                        {formatAmount(tier.amount)}
                      </div>
                      <div className="text-sm text-slate-500 mt-1">Donación única</div>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-serif font-bold text-[var(--color-navy-900)] text-center mb-2">
                      {tier.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-600 text-center mb-4">
                      {tier.description}
                    </p>

                    {/* Impact */}
                    <div className="bg-slate-50 p-3 mb-6">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-slate-600">{tier.impact}</p>
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
                      Donar {formatAmount(tier.amount)}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="bg-white border border-[var(--color-border)] p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="font-serif font-bold text-[var(--color-navy-900)] mb-1">
                    Monto personalizado
                  </h3>
                  <p className="text-sm text-slate-600">
                    Elige la cantidad que desees aportar
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">€</span>
                    <input
                      type="number"
                      min="1"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      placeholder="Cantidad"
                      className="pl-8 pr-4 py-2 border border-[var(--color-border)] w-32 focus:outline-none focus:border-[var(--color-mediterranean)]"
                    />
                  </div>
                  <button
                    onClick={handleCustomDonate}
                    className="bg-[var(--color-navy-900)] text-white px-6 py-2 font-bold uppercase tracking-[0.12em] text-sm hover:bg-[var(--color-mediterranean)] transition-colors"
                  >
                    Donar
                  </button>
                </div>
              </div>
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
                Tu impacto
              </h2>
              <p className="text-slate-600">
                Cada contribución fortalece nuestra capacidad de análisis independiente.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Impact 1 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-mediterranean)]/10 text-[var(--color-mediterranean)] mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[var(--color-navy-900)] mb-2">
                  Investigación
                </h3>
                <p className="text-sm text-slate-600">
                  Publicamos análisis rigurosos sobre seguridad, migraciones y geopolítica mediterránea.
                </p>
              </div>

              {/* Impact 2 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-accent-red)]/10 text-[var(--color-accent-red)] mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[var(--color-navy-900)] mb-2">
                  Diálogo
                </h3>
                <p className="text-sm text-slate-600">
                  Organizamos encuentros entre expertos, académicos y decisores políticos.
                </p>
              </div>

              {/* Impact 3 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-navy-900)]/10 text-[var(--color-navy-900)] mb-4">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[var(--color-navy-900)] mb-2">
                  Independencia
                </h3>
                <p className="text-sm text-slate-600">
                  Tu apoyo garantiza nuestra independencia editorial y analítica.
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
              ¿Prefieres colaborar de otra forma?
            </h2>
            <p className="text-slate-600 mb-6">
              Para donaciones institucionales, patrocinios o colaboraciones especiales,
              contacta con nuestro equipo.
            </p>
            <a
              href={`mailto:${DONATION_CONFIG.contactEmail}`}
              className="inline-flex items-center gap-2 bg-[var(--color-navy-900)] text-white px-8 py-3 font-bold uppercase tracking-[0.12em] text-sm hover:bg-[var(--color-mediterranean)] transition-colors"
            >
              Contactar
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollaboratePage;
