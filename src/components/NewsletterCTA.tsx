import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NewsletterCTA = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-[var(--color-navy-900)] section-shell border-t hairline relative">
            <div className="page-shell">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="space-y-4 text-center lg:text-left">
                        <div className="inline-flex items-center justify-center lg:justify-start space-x-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#9FC5E5]">
                            <span className="w-2 h-2 bg-[#9FC5E5] rounded-full" />
                            <span>{t('newsletter.label')}</span>
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-white">
                            {t('newsletter.title')}
                        </h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            {t('newsletter.subtitle')}
                        </p>
                    </div>

                    <form className="w-full bg-white/5 border border-[#1e4976] rounded-sm p-5 space-y-4">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder={t('newsletter.placeholder')}
                                className="flex-grow bg-white text-[#0A2540] placeholder:text-slate-400 px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#006994] rounded-sm"
                            />
                            <button className="bg-[var(--color-mediterranean)] hover:bg-[#005a80] text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center rounded-sm">
                                {t('newsletter.button')}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                        <div className="flex items-start">
                            <input
                                id="privacy"
                                type="checkbox"
                                className="mt-1 w-4 h-4 text-[#006994] border-slate-500 rounded focus:ring-[#006994] bg-[#0A2540]"
                            />
                            <label htmlFor="privacy" className="ml-2 text-xs text-slate-300 leading-snug">
                                {t('newsletter.privacy_text')} <a href="/privacy" className="text-white hover:underline">{t('newsletter.privacy_link')}</a>.
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCTA;
