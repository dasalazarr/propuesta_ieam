import React, { useMemo, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { events as eventsData, EventItem } from '@/data/events';
import { useTranslation } from 'react-i18next';

const EventsPage = () => {
    const { t, i18n } = useTranslation();

    const getLocalizedEvent = (event: EventItem) => {
        const isEn = i18n.language.startsWith('en');
        return {
            title: (isEn && event.title_en) ? event.title_en : event.title,
            subtitle: (isEn && event.subtitle_en) ? event.subtitle_en : event.subtitle,
            location: (isEn && event.location_en) ? event.location_en : event.location,
            category: (isEn && event.category_en) ? event.category_en : event.category,
            format: (isEn && event.format_en) ? event.format_en : event.format,
            summary: (isEn && event.summary_en) ? event.summary_en : event.summary,
            heroImage: (isEn && event.heroImage_en) ? event.heroImage_en : event.heroImage,
        };
    };

    // Helper to parse dates like "24 Sep 2025" or "Jan 2025"
    const parseDate = (dateString: string) => {
        const months: { [key: string]: number } = {
            'Ene': 0, 'Feb': 1, 'Mar': 2, 'Abr': 3, 'May': 4, 'Jun': 5,
            'Jul': 6, 'Ago': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dic': 11,
            'Jan': 0, 'Apr': 3, 'Aug': 7, 'Dec': 11
        };

        const parts = dateString.split(' ');

        // Format: "Jan 2025"
        if (parts.length === 2) {
            const month = months[parts[0]] !== undefined ? months[parts[0]] : 0;
            const year = parseInt(parts[1]);
            return new Date(year, month, 1);
        }

        // Format: "24 Sep 2025"
        if (parts.length === 3) {
            const day = parseInt(parts[0]);
            const month = months[parts[1]] !== undefined ? months[parts[1]] : 0;
            const year = parseInt(parts[2]);
            return new Date(year, month, day);
        }

        return new Date();
    };

    const sortedEvents = useMemo(() => {
        return [...eventsData].sort((a, b) => {
            return parseDate(b.date).getTime() - parseDate(a.date).getTime();
        });
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative bg-[#0A2540] text-white py-16 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop"
                        alt="Conference background"
                        className="w-full h-full object-cover opacity-20"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-transparent"></div>
                </div>

                <div className="relative z-10 page-shell">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="border-l-4 border-[#D4212A] pl-6">
                                <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight text-[#f8f5f0]">
                                    {t('events.hero')}
                                </h1>
                                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                                    {t('events.hero_description')}
                                </p>
                            </div>
                        </div>

                        {/* Floating Content Box */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm">
                            <p className="text-lg font-serif italic text-white leading-relaxed">
                                {t('events.hero_quote')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-shell section-shell">

                {/* Upcoming Events Placeholder */}
                <div className="mb-20">
                    <h2 className="text-2xl font-serif font-bold text-[#0A2540] mb-6">
                        {t('events.upcoming.title')}
                    </h2>
                    <div className="bg-slate-50 border border-slate-200 rounded-sm p-8 text-center">
                        <p className="text-slate-600 text-lg">
                            {t('events.upcoming.description')}
                        </p>
                    </div>
                </div>

                {/* Past Events List */}
                <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-[#0A2540] mb-8">
                        {t('events.past.title')}
                    </h2>

                    <div className="grid gap-8">
                        {sortedEvents.map((event) => {
                            const locEvent = getLocalizedEvent(event);
                            return (
                                <Link to={`/eventos/${event.slug}`} key={event.slug} className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow grid md:grid-cols-12">
                                    <div className="md:col-span-4 lg:col-span-3 relative overflow-hidden">
                                        <div className="relative w-full pt-[56.25%]">  {/* 16:9 Aspect Ratio */}
                                            <img
                                                src={locEvent.heroImage}
                                                alt={locEvent.title}
                                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-8 lg:col-span-9 p-8 flex flex-col justify-center h-full">
                                        <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                                            <span className="flex items-center text-[#D4212A]">
                                                <Calendar className="w-4 h-4 mr-1" />
                                                {event.date}
                                            </span>
                                            <span className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-1" />
                                                {locEvent.location}
                                            </span>
                                            <span className="bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
                                                {locEvent.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0A2540] mb-3 group-hover:text-[#006994] transition-colors line-clamp-2">
                                            {locEvent.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed line-clamp-2">
                                            {locEvent.summary}
                                        </p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

            </div>

            <NewsletterCTA />
            <Footer />
        </div>
    );
};

export default EventsPage;
