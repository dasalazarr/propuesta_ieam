import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from './ui/UnifiedCard';
import { articles } from '@/data/articles';

const LatestAnalysis = () => {
    const featuredAnalysis = articles[0];
    const analysisItems = articles.slice(1, 5);

    return (
        <section className="section-shell bg-white border-b hairline py-16">
            <div className="page-shell">

                <div className="flex flex-col sm:flex-row justify-between items-end mb-10 pb-6 border-b hairline">
                    <h2 className="text-4xl font-serif font-bold text-[var(--color-text-primary)]">
                        Últimos análisis
                    </h2>
                    <Link to="/investigacion" className="hidden sm:flex items-center text-sm font-bold text-[var(--color-accent-red)] hover:text-[var(--color-text-primary)] transition-colors">
                        Ver archivo completo
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
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
