import React, { useMemo, useState } from 'react';
import { Search, FileText, BarChart, Mic, Video, ArrowRight, ShieldCheck, Briefcase, Globe2, Scale, Map, Users, Database, LineChart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Card } from '@/components/ui/UnifiedCard';
import { articles } from '@/data/articles';

const ResearchPage = () => {
    const [selectedType, setSelectedType] = useState<'all' | 'policy' | 'analisis' | 'infografia' | 'entrevista' | 'nota-prensa' | 'reseña-evento'>('all');

    const filteredArticles = useMemo(() => {
        if (selectedType === 'all') return articles;
        return articles.filter((article) => article.contentKind === selectedType);
    }, [selectedType]);

    const topicCategories = useMemo(() => {
        const counts: Record<string, number> = {};
        articles.forEach((a) => {
            counts[a.category] = (counts[a.category] || 0) + 1;
        });
        return Object.entries(counts).map(([title, count]) => ({ title, count }));
    }, []);

    const filters = [
        { label: 'Todos', value: 'all' },
        { label: 'Informes', value: 'policy' },
        { label: 'Análisis', value: 'analisis' },
        { label: 'Infografías', value: 'infografia' },
        { label: 'Entrevistas', value: 'entrevista' },
        { label: 'Notas de prensa', value: 'nota-prensa' },
        { label: 'Reseña de evento', value: 'reseña-evento' },
    ] as const;

    const corePillars = [
        { title: 'Movilidad legal y ordenada', description: 'Diseño y escalado de vías seguras como herramienta eficaz contra la trata y la explotación.', tone: 'navy', Icon: ShieldCheck },
        { title: 'Rutas y geografías clave', description: 'Foco en Mediterráneo y Atlántico (Mauritania, Senegal, Costa de Marfil) con lectura integrada del Sahel y África Central.', tone: 'red', Icon: Map },
        { title: 'Gobernanza y marcos normativos', description: 'Seguimiento comparado de políticas y leyes en Europa y África; mejoras procedimentales en España.', tone: 'navy', Icon: Scale },
        { title: 'Economía, empleo y empresa', description: 'Cooperación público-privada para vincular demanda real de mano de obra, movilidad circular e inversión conjunta.', tone: 'red', Icon: Briefcase },
        { title: 'Diásporas y desarrollo', description: 'Liderazgo, emprendimiento y remesas productivas; contrarrelatos frente a la desinformación.', tone: 'navy', Icon: Globe2 },
        { title: 'Percepciones y narrativas públicas', description: 'Diagnóstico multi-actor para orientar comunicación y políticas basadas en evidencia.', tone: 'red', Icon: Users },
        { title: 'Alianzas y diplomacia UE-África', description: 'Incentivos para cooperar con Europa, incidencia parlamentaria y benchmarking con Italia y Francia.', tone: 'navy', Icon: LineChart },
        { title: 'Protección y salvaguardas', description: 'Gobernanza fronteriza con enfoque de derechos, género y retornos con dignidad.', tone: 'red', Icon: ShieldCheck },
        { title: 'Datos, evaluación y aprendizaje', description: 'Monitorización de tendencias por país, métricas de impacto y ajuste continuo de programas.', tone: 'navy', Icon: Database },
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative bg-[#0A2540] text-[var(--color-cream)] py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Research background"
                        className="w-full h-full object-cover opacity-25"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-transparent"></div>
                </div>
                <div className="relative z-10 page-shell">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-[#D4212A] mb-4">
                            <span className="w-2 h-2 bg-[#D4212A] rounded-full"></span>
                            <span>Centro de Conocimiento</span>
                        </div>
                        <div className="border-l-4 border-[#D4212A] pl-6">
                            <h1 className="text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight text-[var(--color-cream)]">
                                Investigación IEAM
                            </h1>
                            <p className="text-xl leading-relaxed text-[var(--color-cream)]/85 max-w-2xl">
                                Análisis riguroso y basado en evidencia para informar políticas públicas y enriquecer el debate social sobre migraciones.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Pillars */}
            <section className="section-shell bg-white">
                <div className="page-shell">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B263F]">Nuestros pilares</h2>
                        <p className="text-slate-600 mt-2">En el IEAM tenemos nueve pilares clave, conócelos.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {corePillars.map((pillar, idx) => {
                            const toneClasses = pillar.tone === 'navy'
                                ? 'bg-[#0A1F36] text-[var(--color-cream)]'
                                : 'bg-[#C33F2B] text-[var(--color-cream)]';
                            return (
                                <div key={idx} className={`p-6 rounded-sm shadow-sm ${toneClasses}`}>
                                    <pillar.Icon className="w-6 h-6 mb-4 opacity-80" />
                                    <h3 className="text-lg font-serif font-bold mb-2" style={{ color: '#f8f5f0' }}>{pillar.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: '#f8f5f0cc' }}>{pillar.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Pillars Grid */}
            <div className="bg-slate-50 border-b hairline py-12">
                <div className="page-shell">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Explorar por Temas</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {topicCategories.map((topic, index) => (
                            <button
                                key={index}
                                className="bg-white p-4 rounded-sm border border-slate-200 hover:border-[#D4212A] hover:shadow-md transition-all text-left group"
                            >
                                <h3 className="font-bold text-[#0B263F] text-sm mb-1 group-hover:text-[#D4212A] transition-colors">{topic.title}</h3>
                                <span className="text-xs text-slate-400">{topic.count} publicaciones</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Publications List */}
            <div className="page-shell section-shell">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <h2 className="text-3xl font-serif font-bold text-[#0B263F]">Publicaciones Recientes</h2>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2">
                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setSelectedType(filter.value)}
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${selectedType === filter.value ? 'bg-[#0B263F] text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="space-y-10">
                    {filteredArticles[0] && (
                        <Card
                            key={filteredArticles[0].slug}
                            variant="featured"
                            title={filteredArticles[0].title}
                            summary={filteredArticles[0].subtitle}
                            image={filteredArticles[0].heroImage}
                            badge={filteredArticles[0].type}
                            metadata={{ date: filteredArticles[0].publishDate, author: filteredArticles[0].author.name }}
                            ctaLink={`/analisis/${filteredArticles[0].slug}`}
                            className="w-full"
                        />
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredArticles.slice(1).map((pub) => (
                            <Card
                                key={pub.slug}
                                variant="standard"
                                title={pub.title}
                                summary={pub.subtitle}
                                image={pub.heroImage}
                                badge={pub.type}
                                metadata={{ date: pub.publishDate, author: pub.author.name }}
                                ctaLink={`/analisis/${pub.slug}`}
                                className="h-full"
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <button className="inline-flex items-center px-8 py-3 border border-slate-300 text-sm font-bold text-[#0B263F] hover:bg-[#0B263F] hover:text-white transition-colors">
                        Cargar más publicaciones
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                </div>
            </div>

            <NewsletterCTA />
            <Footer />
        </div>
    );
};

export default ResearchPage;
