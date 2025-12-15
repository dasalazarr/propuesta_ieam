import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from './ui/UnifiedCard';
import { events as eventsData } from '@/data/events';

const HomeEvents = () => {
    const events = eventsData.slice(0, 3);

    return (
        <section className="section-shell bg-[var(--color-paper-warm)] border-b hairline relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#F4F6F9] to-white opacity-70 pointer-events-none" aria-hidden="true" />
            <div className="page-shell">
                <div className="grid lg:grid-cols-12 gap-12">

                    <div className="lg:col-span-4 relative">
                        <span className="eyebrow mb-3">Agenda IEAM</span>
                        <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)] mb-6">
                            Próximos Eventos
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Espacios de encuentro para el debate constructivo. Conectamos expertos, decisores y sociedad civil.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {['Conferencia', 'Webinar', 'Taller'].map((tag) => (
                                <span key={tag} className="text-[11px] font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link
                            to="/eventos-y-actualidad"
                            className="inline-flex items-center px-6 py-3 border border-[var(--color-text-primary)] text-sm font-bold text-[var(--color-text-primary)] hover:bg-[var(--color-text-primary)] hover:text-white transition-colors"
                        >
                            Ver agenda completa
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="bg-white border hairline rounded-sm overflow-hidden">
                            {events.map((event, index) => (
                                <Card
                                    key={index}
                                    variant="compact"
                                    title={event.title}
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
