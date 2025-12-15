import React, { useMemo, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { events as eventsData } from '@/data/events';

const EventsPage = () => {
    // Sort events by date if needed, but they seem to be in order in the data file (newest first hopefully)
    // Actually, let's trust the array order or sort by date string parsing if needed. 
    // For now, displaying them as they are in the array (Hungria first)

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative bg-[#0A2540] text-white py-20 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-transparent"></div>
                </div>
                <div className="relative z-10 page-shell">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight text-white">
                        Eventos
                    </h1>
                </div>
            </div>

            <div className="page-shell section-shell">

                {/* Upcoming Events Placeholder */}
                <div className="mb-20">
                    <h2 className="text-2xl font-serif font-bold text-[#0A2540] mb-6">
                        Próximos eventos
                    </h2>
                    <div className="bg-slate-50 border border-slate-200 rounded-sm p-8 text-center">
                        <p className="text-slate-600 text-lg">
                            En esta sección publicaremos los próximos eventos y actividades del IEAM.
                        </p>
                    </div>
                </div>

                {/* Past Events List */}
                <div className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-[#0A2540] mb-8">
                        Eventos pasados
                    </h2>

                    <div className="grid gap-8">
                        {eventsData.map((event) => (
                            <div key={event.slug} className="group bg-white border border-slate-200 rounded-sm overflow-hidden hover:shadow-md transition-shadow grid md:grid-cols-12">
                                <div className="md:col-span-4 lg:col-span-3 aspect-video md:aspect-auto relative overflow-hidden">
                                    <img
                                        src={event.heroImage}
                                        alt={event.title}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="md:col-span-8 lg:col-span-9 p-8 flex flex-col justify-center">
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                                        <span className="flex items-center text-[#D4212A]">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {event.date}
                                        </span>
                                        <span className="flex items-center">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {event.location}
                                        </span>
                                        <span className="bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
                                            {event.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-serif font-bold text-[#0A2540] mb-3 group-hover:text-[#006994] transition-colors">
                                        {event.title}
                                    </h3>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        {event.summary}
                                    </p>
                                    <div>
                                        <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#0A2540] group-hover:text-[#D4212A] transition-colors">
                                            Ver detalles
                                            <ArrowRight className="w-4 h-4 ml-1" />
                                        </span>
                                    </div>
                                </div>
                            </div>
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
