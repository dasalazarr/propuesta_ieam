import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users, Globe, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import NewsletterCTA from '@/components/NewsletterCTA';

export default function DialogoMediterraneo() {
    const themes = [
        {
            icon: Users,
            title: 'Política Migratoria',
            description: 'Desarrollar marcos políticos inclusivos y basados en evidencia para la gestión migratoria en el Mediterráneo.'
        },
        {
            icon: Globe,
            title: 'Cooperación Regional',
            description: 'Fortalecer lazos entre países del norte y sur del Mediterráneo para abordar desafíos compartidos.'
        },
        {
            icon: FileText,
            title: 'Desarrollo Económico',
            description: 'Promover oportunidades económicas que beneficien tanto a países de origen como de destino.'
        },
        {
            icon: MapPin,
            title: 'Intercambio Cultural',
            description: 'Fomentar el entendimiento mutuo a través del diálogo intercultural y la cooperación académica.'
        }
    ];

    const pastEvents = [
        {
            id: 1,
            title: 'Cumbre Inaugural - Madrid 2024',
            date: '15 de Marzo, 2024',
            location: 'Madrid, España',
            participants: '45 líderes gubernamentales y expertos',
            description: 'Lanzamiento oficial del Diálogo Mediterráneo con la participación de representantes de 12 países mediterráneos.'
        },
        {
            id: 2,
            title: 'Panel de Expertos - Rabat',
            date: '8 de Mayo, 2024',
            location: 'Rabat, Marruecos',
            participants: '30 académicos y responsables políticos',
            description: 'Sesión técnica sobre desarrollo de marcos regulatorios para la movilidad laboral en el Mediterráneo.'
        },
        {
            id: 3,
            title: 'Taller Regional - Bruselas',
            date: '20 de Junio, 2024',
            location: 'Bruselas, Bélgica',
            participants: 'Representantes de la UE y países asociados',
            description: 'Diálogo sobre la integración de políticas migratorias en el marco de cooperación UE-Mediterráneo.'
        }
    ];

    const publications = [
        {
            title: 'Informe Anual - Diálogo Mediterráneo 2024',
            type: 'Informe',
            date: 'Julio 2024',
            pages: '86 páginas'
        },
        {
            title: 'Policy Brief: Movilidad Laboral en el Mediterráneo',
            type: 'Policy Brief',
            date: 'Mayo 2024',
            pages: '12 páginas'
        },
        {
            title: 'Declaración de Madrid: Principios del Diálogo Mediterráneo',
            type: 'Documento',
            date: 'Marzo 2024',
            pages: '8 páginas'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            <main>
                {/* Hero Section */}
                <section className="relative bg-gradient-to-br from-[#0B263F] via-[#0d3257] to-[#D4212A] text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }} />
                    </div>

                    <div className="page-shell py-24 lg:py-32 relative">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Badge className="bg-white/20 text-white border-white/30 mb-6 px-4 py-2 text-xs font-bold tracking-widest uppercase">
                                    Iniciativa Estratégica
                                </Badge>

                                <h1 className="text-5xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                                    Diálogo Mediterráneo
                                </h1>

                                <p className="text-2xl font-serif italic text-white/90 mb-8 leading-relaxed">
                                    Construyendo puentes de cooperación y entendimiento en el Mediterráneo
                                </p>

                                <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                                    Una plataforma de diálogo estratégico que reúne a líderes gubernamentales, académicos y sociedad civil para abordar los desafíos migratorios y de desarrollo en la región mediterránea.
                                </p>

                                <div className="flex flex-wrap justify-center gap-4 pt-8">
                                    <Button size="lg" className="bg-white text-[#0B263F] hover:bg-slate-100 rounded-none h-14 px-8 font-bold uppercase text-xs tracking-widest">
                                        Próximos Eventos
                                        <Calendar className="w-4 h-4 ml-2" />
                                    </Button>
                                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-none h-14 px-8 font-bold uppercase text-xs tracking-widest">
                                        Descargar Informe
                                        <Download className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-24 bg-white">
                    <div className="page-shell">
                        <div className="max-w-5xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-12"
                            >
                                <div className="text-center space-y-6">
                                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                                        ¿Qué es el Diálogo Mediterráneo?
                                    </h2>
                                    <div className="w-24 h-1 bg-[#0B263F] mx-auto" />
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <p className="text-xl text-slate-600 font-serif italic leading-relaxed border-l-4 border-[#D4212A] pl-6 py-4">
                                        El Diálogo Mediterráneo es una iniciativa del Instituto Español de Análisis Migratorio (IEAM) que busca crear un espacio permanente de intercambio entre actores clave de la región mediterránea.
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-[#D4212A] mb-2">12+</div>
                                            <div className="text-sm text-slate-600 uppercase tracking-wider">Países Participantes</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-[#D4212A] mb-2">150+</div>
                                            <div className="text-sm text-slate-600 uppercase tracking-wider">Expertos Involucrados</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-4xl font-bold text-[#D4212A] mb-2">3</div>
                                            <div className="text-sm text-slate-600 uppercase tracking-wider">Cumbres Realizadas</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Key Themes */}
                <section className="py-24 bg-slate-50">
                    <div className="page-shell">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                                    Áreas de Enfoque
                                </h2>
                                <div className="w-24 h-1 bg-[#D4212A] mx-auto" />
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                                {themes.map((theme, index) => {
                                    const Icon = theme.icon;
                                    return (
                                        <motion.div
                                            key={theme.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                        >
                                            <Card className="h-full hover:shadow-xl transition-all border-slate-200 hover:border-[#D4212A]">
                                                <CardContent className="p-6 space-y-4 text-center">
                                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D4212A]/10 text-[#D4212A] rounded-full">
                                                        <Icon className="w-8 h-8" />
                                                    </div>
                                                    <h3 className="text-lg font-bold text-slate-900">{theme.title}</h3>
                                                    <p className="text-sm text-slate-600 leading-relaxed">{theme.description}</p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Past Events */}
                <section className="py-24 bg-white">
                    <div className="page-shell">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4 mb-12">
                                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                                    Eventos Realizados
                                </h2>
                                <div className="w-24 h-1 bg-[#0B263F] mx-auto" />
                            </div>

                            <div className="max-w-4xl mx-auto space-y-6">
                                {pastEvents.map((event, index) => (
                                    <motion.div
                                        key={event.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Card className="hover:shadow-lg transition-all border-l-4 border-l-[#D4212A]">
                                            <CardContent className="p-8">
                                                <div className="flex flex-col md:flex-row gap-6">
                                                    <div className="md:w-32 shrink-0">
                                                        <div className="bg-[#0B263F] text-white p-4 text-center">
                                                            <div className="text-2xl font-bold">{event.date.split(' ')[0]}</div>
                                                            <div className="text-xs uppercase mt-1">{event.date.split(' ').slice(2).join(' ')}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-1 space-y-3">
                                                        <h3 className="text-2xl font-serif font-bold text-slate-900">{event.title}</h3>
                                                        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                                            <div className="flex items-center gap-2">
                                                                <MapPin className="w-4 h-4" />
                                                                {event.location}
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <Users className="w-4 h-4" />
                                                                {event.participants}
                                                            </div>
                                                        </div>
                                                        <p className="text-slate-600 leading-relaxed">{event.description}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Publications */}
                <section className="py-24 bg-slate-50">
                    <div className="page-shell">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-12"
                        >
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">
                                    Publicaciones y Recursos
                                </h2>
                                <div className="w-24 h-1 bg-[#D4212A] mx-auto" />
                            </div>

                            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                                {publications.map((pub, index) => (
                                    <motion.div
                                        key={pub.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        <Card className="h-full hover:shadow-xl transition-all group cursor-pointer">
                                            <CardContent className="p-6 space-y-4">
                                                <div className="w-12 h-12 bg-[#D4212A]/10 flex items-center justify-center group-hover:bg-[#D4212A] transition-colors">
                                                    <FileText className="w-6 h-6 text-[#D4212A] group-hover:text-white transition-colors" />
                                                </div>
                                                <Badge className="bg-slate-100 text-slate-700 rounded-none text-xs uppercase font-bold">
                                                    {pub.type}
                                                </Badge>
                                                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#D4212A] transition-colors">
                                                    {pub.title}
                                                </h3>
                                                <div className="flex justify-between text-xs text-slate-500">
                                                    <span>{pub.date}</span>
                                                    <span>{pub.pages}</span>
                                                </div>
                                                <Button variant="ghost" size="sm" className="w-full text-[#D4212A] hover:bg-[#D4212A]/10 rounded-none font-bold uppercase text-xs">
                                                    Descargar
                                                    <Download className="w-3 h-3 ml-2" />
                                                </Button>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Newsletter CTA */}
                <NewsletterCTA />
            </main>

            <Footer />
        </div>
    );
}
