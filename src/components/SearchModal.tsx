import React, { useState, useEffect, useMemo } from 'react';
import { X, Search, FileText, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '@/data/articles';
import { events } from '@/data/events';

interface SearchResult {
    type: 'article' | 'event';
    title: string;
    subtitle?: string;
    slug: string;
    date?: string;
    category?: string;
}

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
            // Focus input on open
            setTimeout(() => {
                document.getElementById('search-input')?.focus();
            }, 100);
        } else {
            setTimeout(() => setIsVisible(false), 300);
            document.body.style.overflow = 'unset';
            setQuery('');
        }
    }, [isOpen]);

    const results: SearchResult[] = useMemo(() => {
        if (!query.trim()) return [];

        const normalizedQuery = query.toLowerCase();

        const articleResults: SearchResult[] = articles
            .filter(article =>
                article.title.toLowerCase().includes(normalizedQuery) ||
                article.subtitle.toLowerCase().includes(normalizedQuery) ||
                article.author.name.toLowerCase().includes(normalizedQuery)
            )
            .map(article => ({
                type: 'article',
                title: article.title,
                subtitle: article.subtitle,
                slug: `/analisis/${article.slug}`,
                date: article.publishDate,
                category: article.type
            }));

        const eventResults: SearchResult[] = events
            .filter(event =>
                event.title.toLowerCase().includes(normalizedQuery) ||
                event.subtitle.toLowerCase().includes(normalizedQuery) ||
                event.location.toLowerCase().includes(normalizedQuery)
            )
            .map(event => ({
                type: 'event',
                title: event.title,
                subtitle: event.subtitle,
                slug: `/eventos/${event.slug}`,
                date: event.date,
                category: event.category
            }));

        return [...articleResults, ...eventResults].slice(0, 8); // Limit to 8 results
    }, [query]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-[#0A2540]/90 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className={`relative w-full max-w-3xl mx-auto mt-20 px-4 transition-all duration-300 transform ${isOpen ? 'translate-y-0 scale-100' : '-translate-y-4 scale-95'}`}>
                <div className="bg-white rounded-sm shadow-2xl overflow-hidden">
                    {/* Header / Input */}
                    <div className="flex items-center p-4 border-b border-slate-200">
                        <Search className="w-6 h-6 text-slate-400 mr-4" />
                        <input
                            id="search-input"
                            type="text"
                            placeholder="Buscar análisis, eventos, autores..."
                            className="flex-grow text-lg font-medium text-[#0A2540] placeholder:text-slate-400 focus:outline-none bg-transparent"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            onClick={onClose}
                            className="p-2 text-slate-400 hover:text-[#D4212A] transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Results Area */}
                    <div className="max-h-[60vh] overflow-y-auto">
                        {query.trim() === '' ? (
                            <div className="p-12 text-center text-slate-500">
                                <Search className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                <p className="text-sm">Escribe para buscar en nuestro archivo.</p>
                            </div>
                        ) : results.length > 0 ? (
                            <div className="divide-y divide-slate-100">
                                {results.map((result, index) => (
                                    <Link
                                        key={index}
                                        to={result.slug}
                                        onClick={onClose}
                                        className="block p-4 hover:bg-slate-50 transition-colors group"
                                    >
                                        <div className="flex items-start">
                                            <div className="mt-1 mr-4 flex-shrink-0">
                                                {result.type === 'article' ? (
                                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#006994] flex items-center justify-center">
                                                        <FileText className="w-4 h-4" />
                                                    </div>
                                                ) : (
                                                    <div className="w-8 h-8 rounded-full bg-red-50 text-[#D4212A] flex items-center justify-center">
                                                        <Calendar className="w-4 h-4" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex-grow min-w-0">
                                                <div className="flex items-center justify-between mb-1">
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                                                        {result.category}
                                                    </span>
                                                    <span className="text-xs text-slate-400">{result.date}</span>
                                                </div>
                                                <h4 className="text-base font-serif font-bold text-[#0A2540] group-hover:text-[#006994] transition-colors truncate">
                                                    {result.title}
                                                </h4>
                                                {result.subtitle && (
                                                    <p className="text-sm text-slate-500 truncate mt-0.5">
                                                        {result.subtitle}
                                                    </p>
                                                )}
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#006994] ml-4 self-center transition-colors" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="p-8 text-center text-slate-500">
                                <p>No se encontraron resultados para "{query}"</p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="bg-slate-50 p-3 text-center border-t border-slate-200">
                        <span className="text-xs text-slate-400">Presiona ESC para cerrar</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchModal;
