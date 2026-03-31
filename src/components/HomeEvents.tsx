import React, { useMemo } from 'react';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from './ui/UnifiedCard';
import { events as eventsData, EventItem } from '@/data/events';
import { useTranslation } from 'react-i18next';

const HomeEvents = () => {
    const { t, i18n } = useTranslation();

    // Helper to parse dates like "24 Sep 2025" or "Jan 2025"
    const parseDate = (dateString: string) => {
        const months: { [key: string]: number } = {
            'Ene': 0, 'Feb': 1, 'Mar': 2, 'Abr': 3, 'May': 4, 'Jun': 5,
            'Jul': 6, 'Ago': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dic': 11,
            'Jan': 0, 'Apr': 3, 'Aug': 7, 'Dec': 11
        };
        const parts = dateString.split(' ');
        if (parts.length === 2) {
            const month = months[parts[0]] !== undefined ? months[parts[0]] : 0;
            const year = parseInt(parts[1]);
            return new Date(year, month, 1);
        }
        if (parts.length === 3) {
            const day = parseInt(parts[0]);
            const month = months[parts[1]] !== undefined ? months[parts[1]] : 0;
            const year = parseInt(parts[2]);
            return new Date(year, month, day);
        }
        return new Date();
    };

    const getLocalizedContent = (item: EventItem) => {
        const isEn = i18n.language.startsWith('en');
        return {
            title: (isEn && item.title_en) ? item.title_en : item.title,
            subtitle: (isEn && item.subtitle_en) ? item.subtitle_en : item.subtitle,
            location: (isEn && item.location_en) ? item.location_en : item.location,
            category: (isEn && item.category_en) ? item.category_en : item.category,
            heroImage: (isEn && item.heroImage_en) ? item.heroImage_en : item.heroImage,
        };
    };

    const { upcomingEvent, pastEvents } = useMemo(() => {
        const now = new Date();
        const upcoming = eventsData
            .filter(event => parseDate(event.date) >= now)
            .sort((a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime());
        const past = eventsData
            .filter(event => parseDate(event.date) < now)
            .sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
            .slice(0, 3);
        return { upcomingEvent: upcoming[0] || null, pastEvents: past };
    }, []);

    return (
        <section className="section-shell bg-[var(--color-paper-warm)] border-b hairline relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#F4F6F9] to-white opacity-70 pointer-events-none" aria-hidden="true" />
            <div className="page-shell relative">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
                    <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-4 sm:mb-0">
                        {t('home_events.section_title')}
                    </h2>
                    <Link
                        to="/eventos"
                        className="inline-flex items-center px-6 py-3 border border-[var(--color-text-primary)] text-sm font-bold text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-colors self-start"
                    >
                        {t('home_events.view_agenda')}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                {/* Upcoming Event - Featured */}
                {upcomingEvent && (
                    <div className="mb-10">
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-gold)] mb-4">
                            {i18n.language.startsWith('en') ? 'Upcoming Event' : 'Próximo Evento'}
                        </div>
                        <Link
                            to={`/eventos/${upcomingEvent.slug}`}
                            className="group block bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                        >
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Content */}
                                <div className="p-8 lg:p-10 flex flex-col justify-center">
                                    <span className="inline-block px-3 py-1 bg-[var(--color-accent-gold)] text-[var(--color-text-primary)] text-xs font-bold uppercase tracking-wider rounded-sm mb-4 w-fit">
                                        {getLocalizedContent(upcomingEvent).category}
                                    </span>
                                    <h3 className="text-2xl lg:text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-red)] transition-colors">
                                        {getLocalizedContent(upcomingEvent).title}
                                    </h3>
                                    <p className="text-slate-600 mb-6 line-clamp-2">
                                        {getLocalizedContent(upcomingEvent).subtitle}
                                    </p>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-6">
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-[var(--color-accent-red)]" />
                                            {upcomingEvent.date}
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-[var(--color-accent-red)]" />
                                            {getLocalizedContent(upcomingEvent).location}
                                        </span>
                                    </div>
                                    <span className="inline-flex items-center text-sm font-bold text-[var(--color-accent-red)] group-hover:underline">
                                        {i18n.language.startsWith('en') ? 'Learn more' : 'Más información'}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                                {/* Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={getLocalizedContent(upcomingEvent).heroImage}
                                        alt={getLocalizedContent(upcomingEvent).title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Past Events */}
                {pastEvents.length > 0 && (
                    <div>
                        <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
                            {i18n.language.startsWith('en') ? 'Recent Events' : 'Eventos Recientes'}
                        </div>
                        <div className="bg-white border hairline rounded-sm overflow-hidden">
                            {pastEvents.map((event, index) => (
                                <Card
                                    key={event.slug}
                                    variant="compact"
                                    title={getLocalizedContent(event).title}
                                    badge={getLocalizedContent(event).category}
                                    metadata={{
                                        date: event.date,
                                        location: getLocalizedContent(event).location,
                                        format: event.format
                                    }}
                                    ctaLink={`/eventos/${event.slug}`}
                                    className={index === pastEvents.length - 1 ? "border-b-0" : ""}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default HomeEvents;

