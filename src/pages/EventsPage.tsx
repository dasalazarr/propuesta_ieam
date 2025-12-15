import React, { useMemo, useState } from 'react';
import { Calendar, MapPin, ArrowRight, FileText } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Card } from '@/components/ui/UnifiedCard';
import { events as eventsData } from '@/data/events';
import { articles as articlesData } from '@/data/articles';

const EventsPage = () => {
    const [formatFilter, setFormatFilter] = useState<'Todos' | 'Presencial' | 'Online' | 'Híbrido'>('Todos');
    const latestEvent = eventsData[0];
    const filteredEvents = useMemo(() => {
        if (formatFilter === 'Todos') return eventsData;
        return eventsData.filter((ev) => ev.format.toLowerCase() === formatFilter.toLowerCase());
    }, [formatFilter]);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative bg-[#0A2540] text-[var(--color-cream)] py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Ocean background"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent"></div>
                </div>
                <div className="relative z-10 page-shell">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#D4212A] mb-4">
                            <span className="w-2 h-2 bg-[#D4212A] rounded-full"></span>
                            <span>Agenda IEAM</span>
                        </div>
                        <div className="border-l-4 border-[#D4212A] pl-6">
                            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 leading-tight text-[var(--color-cream)]">
                                Eventos y<br />actualidad
                            </h1>
                            <p className="text-xl font-light tracking-wide text-[var(--color-cream)]/85">
                                Lo último en investigación y debate migratorio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-shell section-shell">

                {/* Latest Launch Section */}
                {latestEvent && (
                    <div className="mb-24">
                        <h2 className="text-3xl font-serif font-bold text-[#0A2540] mb-12 text-center">
                            Último lanzamiento
                        </h2>
                        <div className="bg-slate-50 rounded-sm overflow-hidden shadow-sm border border-slate-100">
                            <div className="grid lg:grid-cols-2">
                                <a href={`/eventos/${latestEvent.slug}`} className="h-64 lg:h-auto relative block">
                                    <img
                                        src={latestEvent.highlightImage || latestEvent.heroImage}
                                        alt={latestEvent.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </a>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 uppercase tracking-wider font-bold">
                                        <span>{latestEvent.location}</span>
                                        <span>•</span>
                                        <span>{latestEvent.date}</span>
                                        <span>•</span>
                                        <span>{latestEvent.format}</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-[#0A2540] mb-6 leading-tight">
                                        {latestEvent.title}
                                    </h3>
                                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                        {latestEvent.summary}
                                    </p>
                                    <div>
                                        <a
                                            href={`/eventos/${latestEvent.slug}`}
                                            className="inline-flex items-center bg-[#0A2540] hover:bg-[#006994] text-white px-8 py-3 text-sm font-bold uppercase tracking-wider transition-colors rounded-sm"
                                        >
                                            Ver evento
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* All Articles Section */}
                <div className="mb-24">
                    <div className="mb-8">
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-400 block mb-2">ANÁLISIS E INVESTIGACIONES</span>
                        <h2 className="text-3xl font-serif font-bold text-[#0A2540]">
                            Todos los artículos
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {articlesData.slice(0, 8).map((article, index) => (
                            <a key={article.slug} className="group cursor-pointer block" href={`/analisis/${article.slug}`}>
                                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-sm">
                                <img
                                    src={article.heroImage}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                                    {index === 0 && (
                                        <div className="absolute top-4 left-4 bg-[#0A2540] text-white p-2 rounded-full">
                                            <FileText className="w-4 h-4" /> {/* Using icon as placeholder */}
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2540] leading-snug mb-3 group-hover:text-[#D4212A] transition-colors">
                                    {article.title}
                                </h3>
                                <span className="text-xs font-bold text-[#D4212A] uppercase tracking-wider">
                                    Leer +
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* All Events Section */}
                <div>
                    <div className="mb-8">
                        <span className="text-xs font-bold tracking-widest uppercase text-slate-400 block mb-2">EVENTOS Y TALLERES</span>
                        <h2 className="text-3xl font-serif font-bold text-[#0A2540]">
                            Todos los eventos
                        </h2>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {(['Todos', 'Presencial', 'Online', 'Híbrido'] as const).map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setFormatFilter(filter)}
                                    className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${
                                        formatFilter === filter
                                            ? 'bg-[#0A2540] text-white border-[#0A2540]'
                                            : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                        {filteredEvents.map((event) => (
                            <a key={event.slug} className="group cursor-pointer block" href={`/eventos/${event.slug}`}>
                                <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-sm">
                                    <img
                                        src={event.heroImage}
                                        alt={event.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <img src="/newlogowhite.png" alt="IEAM" className="h-6 w-auto" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2540] leading-snug mb-3 group-hover:text-[#D4212A] transition-colors">
                                    {event.title}
                                </h3>
                                <span className="text-xs font-bold text-[#D4212A] uppercase tracking-wider">
                                    Leer +
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            <NewsletterCTA />
            <Footer />
        </div>
    );
};

export default EventsPage;
