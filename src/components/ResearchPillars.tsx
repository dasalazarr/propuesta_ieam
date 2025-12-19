import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Globe,
    MapPin,
    Scale,
    Briefcase,
    Users,
    MessageCircle,
    Handshake,
    Shield,
    BarChart3
} from 'lucide-react';

const ResearchPillars = () => {
    const { t } = useTranslation();

    const pillars = [
        { id: 'mobility', icon: Globe },
        { id: 'routes', icon: MapPin },
        { id: 'governance', icon: Scale },
        { id: 'economy', icon: Briefcase },
        { id: 'diaspora', icon: Users },
        { id: 'narratives', icon: MessageCircle },
        { id: 'diplomacy', icon: Handshake },
        { id: 'protection', icon: Shield },
        { id: 'data', icon: BarChart3 },
    ];

    return (
        <section className="section-shell bg-white">
            <div className="page-shell">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif font-bold text-[var(--color-navy-900)] mb-4">
                        {t('research.pillars.title')}
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        {t('research.pillars.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillars.map((pillar, index) => {
                        const isBlue = index % 2 === 0;
                        const Icon = pillar.icon;

                        return (
                            <div
                                key={pillar.id}
                                className={`p-8 rounded-sm text-white transition-transform hover:-translate-y-1 duration-300 flex flex-col justify-start h-full ${isBlue ? 'bg-[var(--color-navy-900)]' : 'bg-[var(--color-accent-red)]'
                                    }`}
                            >
                                <div className="mb-4">
                                    <Icon className="w-8 h-8 opacity-100" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold font-serif mb-3 leading-tight text-white">
                                    {t(`research.pillars.items.${pillar.id}.title`)}
                                </h3>
                                <p className="text-sm leading-relaxed opacity-100 text-white font-medium">
                                    {t(`research.pillars.items.${pillar.id}.description`)}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ResearchPillars;
