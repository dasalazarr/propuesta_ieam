import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from './ui/UnifiedCard';
import { articles } from '@/data/articles';
import { useTranslation } from 'react-i18next';

const LatestAnalysis = () => {
    const { t, i18n } = useTranslation();

    // Helper function to parse dates like "14 Nov 2024" or "20 Sep 2025"
    const parseDate = (dateString: string) => {
        const months: { [key: string]: number } = {
            'Ene': 0, 'Feb': 1, 'Mar': 2, 'Abr': 3, 'May': 4, 'Jun': 5,
            'Jul': 6, 'Ago': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dic': 11,
            'Jan': 0, 'Apr': 3, 'Aug': 7, 'Dec': 11 // English adjustments
        };

        const parts = dateString.split(' ');
        if (parts.length !== 3) return new Date();

        const day = parseInt(parts[0]);
        const month = months[parts[1]] !== undefined ? months[parts[1]] : 0;
        const year = parseInt(parts[2]);

        return new Date(year, month, day);
    };

    const featuredAnalysis = articles[0];

    // Get all other articles, sort them by date (newest first), filter for Infographics, and take the top 3
    const analysisItems = articles.slice(1)
        .filter(article => article.type === 'Infografía')
        .sort((a, b) => parseDate(b.publishDate).getTime() - parseDate(a.publishDate).getTime())
        .slice(0, 3);

    const getLocalizedContent = (item: any) => {
        const isEn = i18n.language === 'en';
        return {
            title: (isEn && item.title_en) ? item.title_en : item.title,
            subtitle: (isEn && item.subtitle_en) ? item.subtitle_en : item.subtitle,
            image: (isEn && item.heroImage_en) ? item.heroImage_en : item.heroImage,
        };
    };

    return (
        <section className="section-shell bg-white border-b hairline">
            <div className="page-shell">

                <div className="flex flex-col sm:flex-row justify-between items-end mb-10 pb-6 border-b hairline">
                    <h2 className="text-4xl font-serif font-bold text-[var(--color-text-primary)]">
                        {t('analysis.section_title')}
                    </h2>
                    <Link
                        to="/investigacion"
                        className="hidden sm:flex items-center text-sm font-bold text-[var(--color-accent-red)] hover:text-[var(--color-text-primary)] transition-colors"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        {t('analysis.view_archive')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {featuredAnalysis && (
                        <div className="lg:col-span-12">
                            <Card
                                variant="featured"
                                title={getLocalizedContent(featuredAnalysis).title}
                                summary={getLocalizedContent(featuredAnalysis).subtitle}
                                image={getLocalizedContent(featuredAnalysis).image}
                                badge={featuredAnalysis.type}
                                metadata={{ date: featuredAnalysis.publishDate, readTime: featuredAnalysis.readTime, author: featuredAnalysis.author.name }}
                                ctaLink={`/analisis/${featuredAnalysis.slug}`}
                            />
                        </div>
                    )}

                    {analysisItems.map((item) => (
                        <div key={item.slug} className="lg:col-span-4 md:col-span-6">
                            <Card
                                variant="standard"
                                title={getLocalizedContent(item).title}
                                image={getLocalizedContent(item).image}
                                summary={getLocalizedContent(item).subtitle}
                                badge={item.type}
                                metadata={{ date: item.publishDate, readTime: item.readTime, author: item.author.name }}
                                ctaLink={`/analisis/${item.slug}`}
                                className="h-full"
                            />
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link
                        to="/investigacion"
                        className="inline-flex items-center text-sm font-bold text-[var(--color-mediterranean)]"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        {t('analysis.view_archive')}
                        <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default LatestAnalysis;
