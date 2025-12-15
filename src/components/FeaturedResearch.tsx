import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { featuredContent } from '@/data/mockData';

export default function FeaturedResearch() {
    return (
        <section className="bg-slate-50 py-24 border-b border-slate-100">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-8 lg:sticky lg:top-24"
                    >
                        <div className="space-y-4">
                            <Badge className="bg-red-700 text-white rounded-none font-bold tracking-widest text-xs uppercase px-3 py-1">
                                Informe Destacado
                            </Badge>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-[1.1]">
                                {featuredContent.title}
                            </h2>
                        </div>

                        <div className="w-16 h-1 bg-[#0A2540]" />

                        <p className="text-xl text-slate-700 font-serif italic leading-relaxed border-l-4 border-[#0A2540] pl-6 py-2">
                            {featuredContent.subtitle}
                        </p>

                        <p className="text-slate-600 leading-relaxed font-light text-lg">
                            {featuredContent.description}
                        </p>

                        {/* Metadata */}
                        <div className="flex flex-wrap gap-6 text-sm text-slate-500 py-4 border-y border-slate-200">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span className="font-medium">Publicado: {featuredContent.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                <span className="font-medium">PDF, 2.4 MB</span>
                            </div>
                        </div>

                        {/* Author (if available) */}
                        <div className="flex items-center gap-4 p-4 bg-white border border-slate-200">
                            <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center">
                                <span className="text-slate-600 font-serif font-bold text-lg">EM</span>
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-900">Equipo de Investigación</p>
                                <p className="text-xs text-slate-500">Instituto Español de Análisis Migratorio</p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button className="h-12 px-8 bg-[#0A2540] text-white hover:bg-[#0d3257] rounded-none text-sm font-bold tracking-widest uppercase">
                                Leer el Informe
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="outline" className="h-12 px-8 border-slate-300 hover:bg-white rounded-none text-slate-900 text-sm font-bold tracking-widest uppercase">
                                <Download className="w-4 h-4 mr-2" />
                                Descargar PDF
                            </Button>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 shadow-2xl border-8 border-white">
                            <img
                                src={featuredContent.image}
                                alt={featuredContent.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {featuredContent.tags.map((tag) => (
                                <span key={tag} className="text-xs font-medium text-slate-500 bg-white px-3 py-1.5 border border-slate-200">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
