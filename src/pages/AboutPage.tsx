import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Eye, ArrowRight, Linkedin, Plus, X, Shield, Users, Globe, Lightbulb, MapPin, CheckCircle, PieChart, Coins, Twitter, BookOpen } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import NewsletterCTA from '@/components/NewsletterCTA';
import { coreTeam, researchFellows, TeamMember } from '@/data/team';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t, i18n } = useTranslation();
    const [selectedBio, setSelectedBio] = useState<TeamMember | null>(null);

    const getLocalizedMember = (member: TeamMember) => {
        const isEn = i18n.language === 'en';
        return {
            ...member,
            role: (isEn && member.role_en) ? member.role_en : member.role,
            bio: (isEn && member.bio_en) ? member.bio_en : member.bio,
        };
    };

    const principles = [
        { icon: MapPin, key: 'national_interest' },
        { icon: Target, key: 'evidence' },
        { icon: CheckCircle, key: 'coresponsibility' },
        { icon: Users, key: 'dignity' },
        { icon: PieChart, key: 'public_utility' },
        { icon: Coins, key: 'integrity' }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative bg-[#0A2540] text-white py-16 lg:py-24 overflow-hidden">
                {/* Background Image Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
                        alt="Team collaboration"
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
                                    {t('about.hero.title')}
                                </h1>
                                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                                    {t('about.hero.description')}
                                </p>
                            </div>
                        </div>

                        {/* Floating Content Box */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm">
                            <p className="text-lg font-serif italic text-white leading-relaxed">
                                {t('about.hero.floating_quote')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="py-20 bg-white section-shell">
                <div className="page-shell">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-[#0A2540] mb-6 border-b-2 border-[#D4212A] pb-2 inline-block">
                                {t('about.mission.title')}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t('about.mission.description')}
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-[#0A2540] mb-6 border-b-2 border-[#D4212A] pb-2 inline-block">
                                {t('about.vision.title')}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                {t('about.vision.description')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Principles Section */}
            <div className="py-20 bg-slate-50">
                <div className="page-shell">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2540] mb-4">
                                {t('about.principles.title')}
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t('about.principles.subtitle')}</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            {principles.map(({ icon: Icon, key }) => (
                                <div key={key} className="flex items-start p-6 bg-white border border-slate-100 rounded-sm hover:shadow-sm transition-shadow">
                                    <div className="flex-shrink-0 mr-5">
                                        <Icon className="w-8 h-8 text-[#0A2540] stroke-[1.5]" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#0A2540] mb-2">
                                            {t(`about.principles.items.${key}.title`)}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed">
                                            {t(`about.principles.items.${key}.description`)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="page-shell">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-[#D4212A] mb-4">
                            <span className="w-2 h-2 bg-[#D4212A] rounded-full"></span>
                            <span>{t('about.team.label')}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2540]">
                            {t('about.team.title')}
                        </h2>
                    </div>

                    {/* Core Team Grid */}
                    <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-5xl mx-auto">
                        {coreTeam.map((member, index) => {
                            const localizedMember = getLocalizedMember(member);
                            return (
                                <div key={index} className="group text-center flex flex-col items-center">
                                    <div className="relative mb-6 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                        <img
                                            src={localizedMember.img}
                                            alt={localizedMember.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-[#0A2540] mb-1">{localizedMember.name}</h3>
                                    <p className="text-sm font-bold uppercase tracking-wider text-[#D4212A] mb-4">{localizedMember.role}</p>

                                    <div className="flex gap-3 justify-center mb-3">
                                        {localizedMember.linkedin && localizedMember.linkedin !== '#' && (
                                            <a href={localizedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-[#0077b5] hover:text-white transition-colors">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {localizedMember.twitter && localizedMember.twitter !== '#' && (
                                            <a href={localizedMember.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-black hover:text-white transition-colors">
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                        )}
                                        {localizedMember.scholar && localizedMember.scholar !== '#' && (
                                            <a href={localizedMember.scholar} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-blue-700 hover:text-white transition-colors">
                                                <BookOpen className="w-4 h-4" />
                                            </a>
                                        )}
                                        {localizedMember.website && localizedMember.website !== '#' && (
                                            <a href={localizedMember.website} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-[#D4212A] hover:text-white transition-colors">
                                                <Globe className="w-4 h-4" />
                                            </a>
                                        )}
                                        {/* Email Link in Grid */}
                                        {localizedMember.email && (
                                            <a
                                                href={`mailto:${localizedMember.email}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-[#D4212A] hover:text-white transition-colors"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                            </a>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => setSelectedBio(localizedMember)}
                                        className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#D4212A] hover:text-[#0A2540] transition-colors"
                                    >
                                        <Plus className="w-3 h-3 mr-1" />
                                        {t('about.team.bio_button')}
                                    </button>
                                </div>
                            );
                        })}
                    </div>

                    <div className="w-full h-px bg-slate-200 mb-16"></div>

                    {/* Research Fellows Grid */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
                        {researchFellows.map((member, index) => {
                            const localizedMember = getLocalizedMember(member);
                            return (
                                <div key={index} className="group text-center flex flex-col items-center">
                                    <div className="relative mb-4 w-32 h-32 rounded-full overflow-hidden border-2 border-slate-100 shadow-md">
                                        <img
                                            src={localizedMember.img}
                                            alt={localizedMember.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                    <h3 className="text-lg font-serif font-bold text-[#0A2540] mb-1">{localizedMember.name}</h3>
                                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">{localizedMember.role}</p>

                                    <div className="flex flex-col items-center gap-2 mt-2">
                                        {localizedMember.linkedin && localizedMember.linkedin !== '#' && (
                                            <a href={localizedMember.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-[#0077b5] hover:text-white transition-colors mb-1">
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                        )}
                                        {localizedMember.twitter && localizedMember.twitter !== '#' && (
                                            <a href={localizedMember.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-black hover:text-white transition-colors mb-1">
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                        )}
                                        {localizedMember.scholar && localizedMember.scholar !== '#' && (
                                            <a href={localizedMember.scholar} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-blue-700 hover:text-white transition-colors mb-1">
                                                <BookOpen className="w-4 h-4" />
                                            </a>
                                        )}
                                        {localizedMember.website && localizedMember.website !== '#' && (
                                            <a href={localizedMember.website} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-[#D4212A] hover:text-white transition-colors mb-1">
                                                <Globe className="w-4 h-4" />
                                            </a>
                                        )}
                                        <button
                                            onClick={() => setSelectedBio(localizedMember)}
                                            className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#D4212A] hover:text-[#0A2540] transition-colors"
                                        >
                                            <Plus className="w-3 h-3 mr-1" />
                                            {t('about.team.bio_button')}
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-[#0A2540] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#006994] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4212A] rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        {t('about.cta.title')}
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                        {t('about.cta.description')}
                    </p>
                    <Link to="/contacto" className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A2540] transition-all duration-300 rounded-sm">
                        {t('about.cta.button')}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Partners Section */}
            <div className="py-16 bg-slate-50 border-t border-slate-200">
                <div className="page-shell">
                    <div className="text-center mb-12">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                            {t('about.partners.label')}
                        </h3>
                        <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            {t('about.partners.description')}
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                        {/* UNV */}
                        <div className="bg-white p-8 rounded-sm border border-slate-200 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                            <div className="w-32 flex-shrink-0 flex items-center justify-center">
                                <img src="/colaboration/unav.png" alt="Universidad de Navarra" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-[#0A2540] mb-2">{t('about.partners.unav.name')}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t('about.partners.unav.text')}
                                </p>
                            </div>
                        </div>

                        {/* UIR */}
                        <div className="bg-white p-8 rounded-sm border border-slate-200 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                            <div className="w-32 flex-shrink-0 flex items-center justify-center">
                                <img src="/colaboration/uir.png" alt="Universidad Internacional de Rabat" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-[#0A2540] mb-2">{t('about.partners.uir.name')}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {t('about.partners.uir.text')}
                                </p>
                            </div>
                        </div>

                        {/* Other Partners */}
                        <div className="bg-white p-8 rounded-sm border border-slate-200">
                            <h4 className="text-lg font-bold text-[#0A2540] mb-6 border-b border-slate-100 pb-2">{t('about.partners.others_title')}</h4>
                            <ul className="grid md:grid-cols-2 gap-4">
                                <li className="flex items-center text-slate-700 font-medium">
                                    <div className="w-2 h-2 bg-[#D4212A] rounded-full mr-3"></div>
                                    Fundación Ciudadanía y Valores (FUNCIVA)
                                </li>
                                <li className="flex items-center text-slate-700 font-medium">
                                    <div className="w-2 h-2 bg-[#D4212A] rounded-full mr-3"></div>
                                    Fundación Fortius
                                </li>
                                <li className="flex items-center text-slate-700 font-medium">
                                    <div className="w-2 h-2 bg-[#D4212A] rounded-full mr-3"></div>
                                    Universidad Camilo José Cela
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <NewsletterCTA />
            <Footer />

            {/* Bio Drawer */}
            {/* Premium Bio Modal */}
            <AnimatePresence>
                {selectedBio && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedBio(null)}
                            className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedBio(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-slate-100 transition-colors text-slate-500 hover:text-[#D4212A]"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image Section */}
                            <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-slate-100">
                                <img
                                    src={selectedBio.img}
                                    alt={selectedBio.name}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 to-transparent md:hidden" />
                                <div className="absolute bottom-4 left-4 text-white md:hidden">
                                    <h3 className="text-2xl font-serif font-bold">{selectedBio.name}</h3>
                                    <p className="text-sm opacity-90 uppercase tracking-wider">{selectedBio.role}</p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto bg-white flex flex-col">
                                <div className="hidden md:block mb-8">
                                    <h3 className="text-3xl font-serif font-bold text-[#0A2540] mb-2">
                                        {selectedBio.name}
                                    </h3>
                                    <p className="text-sm font-bold uppercase tracking-widest text-[#D4212A]">
                                        {selectedBio.role}
                                    </p>
                                </div>

                                <div className="flex gap-4 mb-8">
                                    {selectedBio.linkedin && selectedBio.linkedin !== '#' && (
                                        <a
                                            href={selectedBio.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#0077b5] transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                                <Linkedin className="w-4 h-4" />
                                            </div>
                                            <span>LinkedIn</span>
                                        </a>
                                    )}
                                    {selectedBio.twitter && selectedBio.twitter !== '#' && (
                                        <a
                                            href={selectedBio.twitter}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-black transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                                <Twitter className="w-4 h-4" />
                                            </div>
                                            <span>Twitter</span>
                                        </a>
                                    )}
                                    {selectedBio.scholar && selectedBio.scholar !== '#' && (
                                        <a
                                            href={selectedBio.scholar}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                                <BookOpen className="w-4 h-4" />
                                            </div>
                                            <span>Scholar</span>
                                        </a>
                                    )}
                                    {selectedBio.website && selectedBio.website !== '#' && (
                                        <a
                                            href={selectedBio.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#D4212A] transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                                <Globe className="w-4 h-4" />
                                            </div>
                                            <span>Web</span>
                                        </a>
                                    )}
                                    {selectedBio.email && (
                                        <a
                                            href={`mailto:${selectedBio.email}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#D4212A] transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                            </div>
                                            <span>Email</span>
                                        </a>
                                    )}
                                </div>

                                <div className="prose prose-slate prose-sm md:prose-base font-light text-slate-600 leading-loose text-justify">
                                    {selectedBio.bio}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AboutPage;
