import React from 'react';
import { MessageSquare, Search, Megaphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StrategySection = () => {
    const strategies = [
        {
            icon: MessageSquare,
            title: "Diálogo Estratégico",
            tags: ["Talleres", "Foros", "Diplomacia"],
            description: "Talleres de inteligencia colectiva, foros multilaterales (Madrid, Bruselas, Marruecos, Túnez) y cocreación con contrapartes africanas y europeas para validar políticas y programas.",
            link: "https://mediterraneandialogue.org/",
            toneBg: "#E9F2FF",
            toneText: "#0A3D62"
        },
        {
            icon: Search,
            title: "Investigación",
            tags: ["Informes", "Datos", "Análisis"],
            description: "Revisión de marcos normativos, literatura académica y fuentes abiertas. Publicaciones con datos secundarios, encuestas y entrevistas en España, Europa y terreno.",
            link: "/investigacion",
            toneBg: "#FFF4E5",
            toneText: "#A55400"
        },
        {
            icon: Megaphone,
            title: "Divulgación y Advocacy",
            tags: ["Policy Briefs", "Medios", "Advocacy"],
            description: "Policy briefs en ES/EN/FR/AR con recomendaciones prácticas; campañas multicanal y rondas de incidencia ante UE, parlamentos y gobiernos, apoyadas en evidencia y testimonios.",
            link: "/investigacion",
            toneBg: "#EAF7F1",
            toneText: "#1B6B43"
        }
    ];

    return (
        <section className="section-shell bg-[var(--color-paper-warm)] border-b hairline">
            <div className="page-shell">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="eyebrow justify-center mb-3">Agenda estratégica</span>
                    <h2 className="text-4xl font-serif font-bold text-[var(--color-text-primary)] mb-4">Nuestra Estrategia</h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Un enfoque integral para abordar los desafíos migratorios desde la evidencia, el diálogo y la acción.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {strategies.map((item, index) => (
                        <div key={index} className="bg-white p-8 border hairline transition-all group hover:-translate-y-1">
                            <div className="h-1 w-14 mb-6 rounded-full bg-[var(--color-text-primary)]/10 group-hover:bg-[var(--color-text-primary)]/30 transition-colors" />

                            <div
                                className="w-12 h-12 rounded-none flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300"
                                style={{ backgroundColor: item.toneBg }}
                            >
                                <item.icon className="w-6 h-6" style={{ color: item.toneText }} />
                            </div>

                            <h3 className="text-xl font-serif font-bold text-[var(--color-text-primary)] mb-2">{item.title}</h3>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {item.tags.map((tag, i) => (
                                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-1 rounded-full border border-slate-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                                {item.description}
                            </p>

                            <Link
                                to={item.link}
                                className="inline-flex items-center text-sm font-bold text-[var(--color-mediterranean)] hover:text-[var(--color-text-primary)] transition-colors"
                            >
                                Saber más
                                <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategySection;
