import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from './ui/UnifiedCard';
import { articles } from '@/data/articles';

const LatestAnalysis = () => {
    const featuredAnalysis = articles[0];
    const analysisItems = articles.slice(1, 5);
    const topics = ["Fronteras UE", "Sahel", "Movilidad laboral", "Migración climática", "Cooperación África-Europa"];

    return (
        <section className="section-shell bg-white border-b hairline">
            <div className="page-shell">

                <div className="flex flex-col gap-6 mb-10 border-b hairline pb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                        <div>
                            <span className="eyebrow mb-2">Últimos análisis</span>
                            <h2 className="text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-1">Lecturas recientes y dossiers</h2>
                            <p className="text-slate-600">Selección curada con etiquetas de color para navegar por temas clave.</p>
                        </div>
                        <Link to="/investigacion" className="hidden sm:flex items-center text-sm font-bold text-[var(--color-accent-red)] hover:text-[var(--color-text-primary)] transition-colors">
                            Ver archivo completo
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {['Todos', 'Informes', 'Actualidad', 'Entrevistas'].map((filter, i) => (
                            <button
                                key={i}
                                className={`text-[11px] font-bold uppercase tracking-wider px-3 py-2 rounded-full transition-colors border ${i === 0 ? 'bg-[var(--color-text-primary)] text-white border-[var(--color-text-primary)]' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'}`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {topics.map((topic) => (
                            <span key={topic} className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-[#F4F6F9] px-3 py-2 rounded-full border border-slate-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mediterranean)]" />
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {featuredAnalysis && (
                        <div className="lg:col-span-12">
                            <Card
                                variant="featured"
                                title={featuredAnalysis.title}
                                summary={featuredAnalysis.subtitle}
                                image={featuredAnalysis.heroImage}
                                badge={featuredAnalysis.type}
                                metadata={{ date: featuredAnalysis.publishDate, readTime: featuredAnalysis.readTime, author: featuredAnalysis.author.name }}
                                ctaLink={`/analisis/${featuredAnalysis.slug}`}
                            />
                        </div>
                    )}

                    {analysisItems.slice(0, 3).map((item) => (
                        <div key={item.slug} className="lg:col-span-4 md:col-span-6">
                            <Card
                                variant="standard"
                                title={item.title}
                                image={item.heroImage}
                                summary={item.subtitle}
                                badge={item.type}
                                metadata={{ date: item.publishDate, readTime: item.readTime, author: item.author.name }}
                                ctaLink={`/analisis/${item.slug}`}
                                className="h-full"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link to="/investigacion" className="inline-flex items-center text-sm font-bold text-[var(--color-mediterranean)]">
                        Ver archivo completo
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default LatestAnalysis;
