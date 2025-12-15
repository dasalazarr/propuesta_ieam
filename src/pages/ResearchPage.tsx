import React, { useMemo, useState } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Card } from '@/components/ui/UnifiedCard';
import { articles, Article } from '@/data/articles';

const ResearchPage = () => {
    const [activeTab, setActiveTab] = useState<'Informes' | 'Infografías' | 'Reseña de eventos' | 'Entrevistas y prensa'>('Informes');

    const categories = [
        { id: 'Informes', label: 'Informes' },
        { id: 'Infografías', label: 'Infografías' },
        { id: 'Reseña de eventos', label: 'Reseña de eventos' },
        { id: 'Entrevistas y prensa', label: 'Entrevistas y prensa' },
    ] as const;

    const filteredArticles = useMemo(() => {
        return articles.filter((article) => {
            switch (activeTab) {
                case 'Informes':
                    return article.type === 'Informe' || article.type === 'Policy Brief' || article.type === 'Análisis';
                case 'Infografías':
                    return article.type === 'Infografía';
                case 'Reseña de eventos':
                    return article.type === 'Reseña de evento';
                case 'Entrevistas y prensa':
                    return article.type === 'Entrevista' || article.type === 'Nota de prensa';
                default:
                    return false;
            }
        });
    }, [activeTab]);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative bg-[#0A2540] text-[var(--color-cream)] py-20 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                        alt="Research background"
                        className="w-full h-full object-cover opacity-25"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/90 to-transparent"></div>
                </div>
                <div className="relative z-10 page-shell">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 leading-tight text-[var(--color-cream)]">
                        Investigación
                    </h1>
                    <p className="text-xl leading-relaxed text-[var(--color-cream)]/85 max-w-2xl">
                        Análisis riguroso y basado en evidencia para informar políticas públicas.
                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="page-shell section-shell">

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-1">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-6 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === category.id
                                    ? 'border-[#D4212A] text-[#0A2540]'
                                    : 'border-transparent text-slate-500 hover:text-[#0A2540] hover:border-slate-300'
                                }`}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                {filteredArticles.length > 0 ? (
                    <div className="space-y-10">
                        {/* Featured Article (First one) */}
                        <Card
                            variant="featured"
                            title={filteredArticles[0].title}
                            summary={filteredArticles[0].subtitle}
                            image={filteredArticles[0].heroImage}
                            badge={filteredArticles[0].type}
                            metadata={{ date: filteredArticles[0].publishDate, author: filteredArticles[0].author.name }}
                            ctaLink={`/analisis/${filteredArticles[0].slug}`}
                            className="w-full"
                        />

                        {/* Rest of articles */}
                        {filteredArticles.length > 1 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        )}

                        <div className="mt-12 text-center">
                            <button className="inline-flex items-center px-8 py-3 border border-slate-300 text-sm font-bold text-[#0B263F] hover:bg-[#0B263F] hover:text-white transition-colors">
                                Cargar más publicaciones
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-sm">
                        <p className="text-slate-500 text-lg">No hay publicaciones en esta categoría por el momento.</p>
                    </div>
                )}
            </div>

            <NewsletterCTA />
            <Footer />
        </div>
    );
};

export default ResearchPage;
