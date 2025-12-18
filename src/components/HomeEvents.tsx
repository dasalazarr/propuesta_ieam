import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from './ui/UnifiedCard';
import { events as eventsData } from '@/data/events';
import { useTranslation } from 'react-i18next';

const HomeEvents = () => {
    const { t, i18n } = useTranslation();
    const events = eventsData.slice(0, 3);

    const getLocalizedContent = (item: any) => {
        const isEn = i18n.language === 'en';
        return {
            title: (isEn && item.title_en) ? item.title_en : item.title,
            // Assuming we display title only in card here, if subtitle used, add it.
        };
    };

    return (
        <section className="section-shell bg-[var(--color-paper-warm)] border-b hairline relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#F4F6F9] to-white opacity-70 pointer-events-none" aria-hidden="true" />
            <div className="page-shell">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    <div className="lg:col-span-4 relative">
                        <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                            {t('home_events.section_title')}
                        </h2>
                        <Link
                            to="/eventos"
                            className="inline-flex items-center px-6 py-3 border border-[var(--color-text-primary)] text-sm font-bold text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-colors"
                        >
                            {t('home_events.view_agenda')}
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="bg-white border hairline rounded-sm overflow-hidden">
                            {events.map((event, index) => (
                                <Card
                                    key={index}
                                    variant="compact"
                                    title={getLocalizedContent(event).title}
                                    badge={event.category || 'Evento'}
                                    metadata={{
                                        date: event.date,
                                        location: event.location,
                                        format: event.format
                                    }}
                                    ctaLink={`/eventos/${event.slug}`}
                                    className={index === events.length - 1 ? "border-b-0" : ""}
                                />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeEvents;
