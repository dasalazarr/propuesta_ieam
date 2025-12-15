import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, User } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';
import { Card } from '@/components/ui/UnifiedCard';
import { articles, getArticleBySlug } from '@/data/articles';

const ArticlePage = () => {
    const { slug } = useParams<{ slug: string }>();
    // Default to the first article if no slug provided (for direct /articulo-ejemplo access pattern if strictly needed, though routing handles slug)
    // Or handle 404

    const article = getArticleBySlug(slug || '');

    if (!article) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl font-serif font-bold text-[#0A2540] mb-4">Artículo no encontrado / 404</h1>
                <p className="text-slate-600 mb-8">Lo sentimos, el análisis que buscas no está disponible.</p>
                <a href="/" className="px-6 py-3 bg-[#D4212A] text-white font-bold uppercase tracking-wider rounded-sm hover:bg-[#b01b22] transition-colors">
                    Volver al Inicio
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
                        src={article.heroImage}
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
                                {article.type}
                            </span>
                            <span className="text-white/70">{article.category}</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-white">
                            {article.title}
                        </h1>
                        <p className="text-xl text-slate-200 leading-relaxed max-w-3xl mb-6">
                            {article.subtitle}
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.12em] text-slate-300">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.publishDate}</span>
                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> Equipo IEAM</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime} lectura</span>
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
                                        {mat.label}
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
                        <img
                            src={article.mainImage}
                            alt="Main content visual"
                            className="w-full h-[420px] object-cover"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-6 py-4 text-white text-sm">
                            {article.mainImageCaption}
                        </div>
                    </div>
                </div>
            </section>

            {/* Article body */}
            <section className="section-shell">
                <div className="page-shell">
                    <div className="mx-auto reading-width space-y-8 text-slate-700 leading-relaxed">

                        {/* Dynamic Content Rendering */}
                        <div dangerouslySetInnerHTML={{ __html: article.content }} className="space-y-6 [&_p]:mb-6" />

                        {/* Pull Quote */}
                        {article.pullQuote && (
                            <div className="border-l-4 border-[var(--color-accent-red)] bg-[var(--color-paper-warm)] px-6 py-4 text-lg font-serif italic text-[var(--color-text-primary)] my-8">
                                “{article.pullQuote}”
                            </div>
                        )}

                    </div>
                </div>
            </section>

            {/* Author */}
            <section className="section-shell bg-[var(--color-paper-warm)] border-y hairline">
                <div className="page-shell">
                    <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-6 items-center">
                        <img
                            src={article.author.image}
                            alt={article.author.name}
                            className="w-24 h-24 rounded-full object-cover border hairline"
                            loading="lazy"
                            decoding="async"
                        />
                        <div>
                            <div className="text-xs uppercase tracking-[0.18em] text-slate-500 font-bold mb-2">Autor</div>
                            <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-1">{article.author.name}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                {article.author.bio}
                            </p>
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
                                <span className="eyebrow mb-2">Artículos relacionados</span>
                                <h2 className="text-3xl font-serif font-bold text-[var(--color-text-primary)]">Sigue explorando</h2>
                            </div>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {articles
                                .filter((a) => a.slug !== article.slug)
                                .slice(0, 3)
                                .map((rel) => (
                                    <Card
                                        key={rel.slug}
                                        variant="standard"
                                        title={rel.title}
                                        summary={rel.subtitle}
                                        image={rel.heroImage}
                                        badge={rel.type}
                                        metadata={{ date: rel.publishDate, author: rel.author.name }}
                                        ctaLink={`/analisis/${rel.slug}`}
                                    />
                                ))}
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
