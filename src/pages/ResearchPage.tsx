import React, { useMemo, useState } from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Card } from '@/components/ui/UnifiedCard';
import ResearchPillars from '@/components/ResearchPillars';
import { articles, Article } from '@/data/articles';
import { useTranslation } from 'react-i18next';

const ResearchPage = () => {
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = useState<'Informes' | 'Infografías' | 'Entrevistas y prensa'>('Informes');

    const categories = [
        { id: 'Informes', label: t('research.categories.reports') },
        { id: 'Infografías', label: t('research.categories.infographics') },
        { id: 'Entrevistas y prensa', label: t('research.categories.press') },
    ] as const;

    const filteredArticles = useMemo(() => {
        return articles.filter((article) => {
            switch (activeTab) {
                case 'Informes':
                    return article.type === 'Informe' || article.type === 'Policy Brief' || article.type === 'Análisis';
                case 'Infografías':
                    return article.type === 'Infografía';
                case 'Entrevistas y prensa':
                    return article.type === 'Entrevista' || article.type === 'Nota de prensa';
                default:
                    return false;
            }
        });
    }, [activeTab]);

    const getLocalizedArticle = (article: Article) => {
        const isEn = i18n.language.startsWith('en');
        return {
            title: (isEn && article.title_en) ? article.title_en : article.title,
            subtitle: (isEn && article.subtitle_en) ? article.subtitle_en : article.subtitle,
            type: isEn ? getLocalizedType(article.type) : article.type
        };
    };

    const getLocalizedType = (type: string) => {
        switch (type) {
            case 'Informe': return t('research.categories.reports'); // Approximate mapping, or specific if needed
            case 'Policy Brief': return t('research.categories.policy_brief');
            case 'Análisis': return t('research.categories.analysis');
            case 'Infografía': return t('research.categories.infographics');
            case 'Reseña de evento': return t('research.categories.events_review');
            case 'Entrevista': return 'Interview';
            case 'Nota de prensa': return 'Press Release';
            default: return type;
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative bg-[#0A2540] text-white py-16 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop"
                        alt="Research background"
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
                                    {t('research.hero.title')}
                                </h1>
                                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                                    {t('research.hero.subtitle')}
                                </p>
                            </div>
                        </div>

                        {/* Floating Content Box */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm">
                            <p className="text-lg font-serif italic text-white leading-relaxed">
                                {t('research.hero.quote')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Research Pillars */}
            <ResearchPillars />

            {/* Content Section */}
            <div className="page-shell section-shell">

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-12 border-b border-slate-200 pb-1">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id as any)}
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
                        {(() => {
                            const featured = filteredArticles[0];
                            const locFeatured = getLocalizedArticle(featured);
                            return (
                                <Card
                                    variant="featured"
                                    title={locFeatured.title}
                                    summary={locFeatured.subtitle}
                                    image={featured.heroImage}
                                    badge={locFeatured.type}
                                    metadata={{ date: featured.publishDate, author: featured.author.name }}
                                    ctaLink={`/analisis/${featured.slug}`}
                                    className="w-full"
                                />
                            );
                        })()}

                        {/* Rest of articles */}
                        {filteredArticles.length > 1 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredArticles.slice(1).map((pub) => {
                                    const locPub = getLocalizedArticle(pub);
                                    return (
                                        <Card
                                            key={pub.slug}
                                            variant="standard"
                                            title={locPub.title}
                                            summary={locPub.subtitle}
                                            image={pub.heroImage}
                                            badge={locPub.type}
                                            metadata={{ date: pub.publishDate, author: pub.author.name }}
                                            ctaLink={`/analisis/${pub.slug}`}
                                            className="h-full"
                                        />
                                    );
                                })}
                            </div>
                        )}

                        {filteredArticles.length > 4 && (
                            <div className="mt-12 text-center">
                                <button className="inline-flex items-center px-8 py-3 border border-slate-300 text-sm font-bold text-[#0B263F] hover:bg-[#0B263F] hover:text-white transition-colors">
                                    {t('research.load_more')}
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-sm">
                        <p className="text-slate-500 text-lg">{t('research.no_results')}</p>
                    </div>
                )}
            </div>

            <NewsletterCTA />
            <Footer />
        </div>
    );
};

export default ResearchPage;
