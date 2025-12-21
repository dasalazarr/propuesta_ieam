import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Card } from '@/components/ui/UnifiedCard';
import { articles, getArticleBySlug } from '@/data/articles';
import { useTranslation } from 'react-i18next';

const ArticlePage = () => {
    const { slug } = useParams<{ slug: string }>();
    const { t, i18n } = useTranslation();
    const article = getArticleBySlug(slug || '');

    // Localization helper
    const localizedArticle = article ? {
        title: (i18n.language === 'en' && article.title_en) ? article.title_en : article.title,
        subtitle: (i18n.language === 'en' && article.subtitle_en) ? article.subtitle_en : article.subtitle,
        content: (i18n.language === 'en' && article.content_en) ? article.content_en : article.content,
        category: (i18n.language === 'en' && article.category_en) ? article.category_en : article.category,
        type: (i18n.language === 'en' && article.type_en) ? article.type_en : article.type,
        heroImage: (i18n.language === 'en' && article.heroImage_en) ? article.heroImage_en : article.heroImage,
        mainImage: (i18n.language === 'en' && article.mainImage_en) ? article.mainImage_en : article.mainImage,
        mainImageCaption: (i18n.language === 'en' && article.mainImageCaption_en) ? article.mainImageCaption_en : article.mainImageCaption,
        pullQuote: (i18n.language === 'en' && article.pullQuote_en) ? article.pullQuote_en : article.pullQuote,
    } : null;

    if (!article || !localizedArticle) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl font-serif font-bold text-[#0A2540] mb-4">
                    {i18n.language === 'en' ? 'Article not found / 404' : 'Artículo no encontrado / 404'}
                </h1>
                <p className="text-slate-600 mb-8">
                    {i18n.language === 'en' ? 'Sorry, the analysis you are looking for is not available.' : 'Lo sentimos, el análisis que buscas no está disponible.'}
                </p>
                <a href="/" className="px-6 py-3 bg-[#D4212A] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#b01b22] transition-colors">
                    {i18n.language === 'en' ? 'Back to Home' : 'Volver al Inicio'}
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero */}
            <section className="relative bg-[#0A2540] text-white section-shell overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={localizedArticle.heroImage}
                        alt="Hero background"
                        className="w-full h-full object-cover opacity-30"
                        loading="eager"
                        decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/85 to-transparent"></div>
                </div>
                <div className="relative z-10 page-shell">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F2D4D6] mb-4">
                            <span className="inline-flex items-center gap-2">
                                <span className="w-2 h-2 bg-[var(--color-accent-red)] rounded-full" />
                                {localizedArticle.type}
                            </span>
                            <span className="text-white/70">{localizedArticle.category}</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-white">
                            {localizedArticle.title}
                        </h1>
                        <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mb-6">
                            {localizedArticle.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-slate-300">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.publishDate}</span>
                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {i18n.language === 'en' ? 'IEAM Team' : 'Equipo IEAM'}</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime} {i18n.language === 'en' ? 'read' : 'lectura'}</span>
                        </div>
                        {article.materials && article.materials.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-3">
                                {article.materials.map((mat) => (
                                    <a
                                        key={mat.url}
                                        href={mat.url}
                                        className="inline-flex items-center px-6 py-3 bg-[var(--color-accent-red)] text-white font-bold uppercase tracking-[0.18em] rounded-none hover:bg-[#b01b22] transition-colors"
                                        download
                                    >
                                        {(i18n.language === 'en' && mat.label_en) ? mat.label_en : mat.label}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Main image */}
            <section className="section-shell">
                <div className="page-shell">
                    <div className="relative overflow-hidden rounded-sm border hairline">
                        <div className="relative pt-[56.25%]">
                            <img
                                src={localizedArticle.mainImage}
                                alt="Main content visual"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-4 text-white text-sm text-center">
                            {localizedArticle.mainImageCaption}
                        </div>
                    </div>
                </div>
            </section>

            {/* Article body */}
            <section className="section-shell">
                <div className="page-shell">
                    <div className="mx-auto reading-width space-y-8 text-slate-700 leading-relaxed">

                        {/* Dynamic Content Rendering */}
                        <div dangerouslySetInnerHTML={{ __html: localizedArticle.content }} className="space-y-6 [&_p]:mb-6" />

                        {/* Pull Quote */}
                        {localizedArticle.pullQuote && (
                            <div className="border-l-4 border-[var(--color-accent-red)] bg-[var(--color-paper-warm)] px-6 py-4 text-lg font-serif italic text-[var(--color-text-primary)] my-8">
                                “{localizedArticle.pullQuote}”
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* Author(s) */}
            <section className="section-shell bg-[var(--color-paper-warm)] border-y hairline">
                <div className="page-shell">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-bold mb-4 text-center sm:text-left">
                            {i18n.language === 'en' ? (article.authors && article.authors.length > 1 ? 'Authors' : 'Author') : (article.authors && article.authors.length > 1 ? 'Autores' : 'Autor')}
                        </div>
                        <div className={`flex flex-col sm:flex-row gap-8 ${article.authors && article.authors.length > 1 ? 'justify-center' : 'items-center'}`}>
                            {(article.authors || [article.author]).map((auth, idx) => (
                                <div key={idx} className="flex flex-col sm:flex-row gap-4 items-center">
                                    <img
                                        src={auth.image}
                                        alt={auth.name}
                                        className="w-20 h-20 rounded-full object-cover border hairline"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-lg font-serif font-bold text-[var(--color-text-primary)] mb-1">{auth.name}</h3>
                                        <p className="text-slate-600 text-sm">
                                            {(i18n.language === 'en' && auth.role_en) ? auth.role_en : auth.role}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Related */}
            {articles.filter((a) => a.slug !== article.slug).length > 0 && (
                <section className="section-shell">
                    <div className="page-shell">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="eyebrow mb-2">
                                    {i18n.language === 'en' ? 'Related Articles' : 'Artículos relacionados'}
                                </span>
                                <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)]">
                                    {i18n.language === 'en' ? 'Keep exploring' : 'Sigue explorando'}
                                </h2>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {articles
                                .filter((a) => a.slug !== article.slug)
                                .slice(0, 3)
                                .map((rel) => {
                                    const localizedRel = {
                                        title: (i18n.language === 'en' && rel.title_en) ? rel.title_en : rel.title,
                                        subtitle: (i18n.language === 'en' && rel.subtitle_en) ? rel.subtitle_en : rel.subtitle,
                                        type: (i18n.language === 'en' && rel.type_en) ? rel.type_en : rel.type,
                                    };
                                    return (
                                        <Card
                                            key={rel.slug}
                                            variant="standard"
                                            title={localizedRel.title}
                                            summary={localizedRel.subtitle}
                                            image={(i18n.language === 'en' && rel.heroImage_en) ? rel.heroImage_en : rel.heroImage}
                                            badge={localizedRel.type}
                                            metadata={{ date: rel.publishDate, author: rel.author.name }}
                                            ctaLink={`/analisis/${rel.slug}`}
                                            ctaText={i18n.language === 'en' ? 'Read more' : 'Leer más'}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </section>
            )}

            <NewsletterCTA />
            <Footer />
        </div>
    );
};

export default ArticlePage;
