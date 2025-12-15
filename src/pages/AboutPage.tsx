import React, { useState } from 'react';
import { Target, Eye, ArrowRight, Linkedin, Plus, X, Shield, Users, Globe, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import NewsletterCTA from '@/components/NewsletterCTA';

interface TeamMember {
    img: string;
    name: string;
    role: string;
    bio?: string;
    linkedin?: string;
}

const teamMembers: TeamMember[] = [
    { img: "/team/member-2.jpg", name: "Beatriz de León", role: "Directora Ejecutiva", linkedin: "https://www.linkedin.com/in/beatrizdeleoncobo/" },
    { img: "/team/member-1.jpg", name: "Tasnim Idriss", role: "Coordinadora para el Norte de África", linkedin: "#" },
    { img: "/team/member-4.jpg", name: "Iván López", role: "Asistente de Investigación", linkedin: "#" },
    { img: "/team/aimara_pujadas.jpg", name: "Aimara Pujadas", role: "Investigadora", linkedin: "#" },
];

const researchFellows: TeamMember[] = [
    {
        img: "/team/member-3.jpg",
        name: "Bréma Ely Dicko",
        role: "Investigador asociado",
        linkedin: "#",
        bio: "Doctor en Sociología por la Universidad de Bamako. Especialista en migraciones y movilidad en África Occidental. Ha colaborado con diversas organizaciones internacionales en estudios sobre flujos migratorios y desarrollo."
    },
    {
        img: "/team/member-5.jpg",
        name: "Dolores López",
        role: "Investigadora asociada",
        linkedin: "#",
        bio: "Doctora en Geografía e Historia. Experta en relaciones hispano-marroquíes y migraciones en el Mediterráneo occidental. Autora de numerosas publicaciones sobre integración y políticas migratorias."
    },
    {
        img: "/team/martial_zongo.jpg",
        name: "Martial Zongo",
        role: "Investigador asociado",
        linkedin: "#",
        bio: "Profesor Martial Zongo. Ouagadougou (Burkina Faso). Relwendé Louis Martial Zongo es doctor en Derecho por la Universidad de Ginebra y profesor titular de Derecho público en la Universidad Thomas Sankara (UTS), donde se desempeña como director adjunto de la Escuela de Doctorado. Especialista en derecho comunitario, derecho constitucional, derecho internacional y derecho de las organizaciones internacionales, es además el Director Ejecutivo del Centro de Estudios Regionales Africanos (CERA). Desde 2024 forma parte de la lista de árbitros de la Corte Permanente de Arbitraje de La Haya en representación de Burkina Faso. Sus trabajos se centran en la integración regional africana y el derecho comunitario de la UEMOA. Es presidente de la Sociedad burkinesa de Derecho Constitucional, portavoz de la Sociedad burkinesa de Derecho Internacional, miembro de la Academia Africana de Práctica del Derecho Internacional, miembro fundador de la Sociedad Africana de Derecho Comunitario e integrante de diversas redes y comités científicos africanos y europeos."
    },
    {
        img: "/team/romeo_gbaguidi.jpg",
        name: "Roméo Gbaguidi",
        role: "Investigador asociado",
        linkedin: "#",
        bio: "Pr. Roméo Gbaguidi. Roméo Gbaguidi es doctor en Humanidades por la Universidad Carlos III de Madrid, filólogo hispanista y mediador intercultural originario de Benín. Es profesor en la Universidad Antonio de Nebrija y en otras universidades españolas, y presidente y director de investigaciones del Laboratorio de Estudio de las Migraciones Africanas – LemAfriQ. Ha sido mediador intercultural y director del Centro de Participación e Integración (CEPI) Hispano-Africano de la Comunidad de Madrid. Sus ámbitos de especialización incluyen las migraciones internacionales entre África y Europa, la mediación social e intercultural y el estudio de las diásporas africanas, sobre los que ha impartido numerosos cursos y conferencias y publicado diversos trabajos académicos y de divulgación."
    },
    {
        img: "/team/soraya_aybar.jpg",
        name: "Soraya Aybar",
        role: "Investigadora asociada",
        linkedin: "#",
        bio: "Soraya Aybar es politóloga, periodista y directora de África Mundi, un medio especializado en el continente africano y en las relaciones entre África y Europa. Coordina LISA News, y escribe como freelance para varios medios de comunicación nacionales e internacionales. Graduada en Ciencias Políticas por la Universitat de València y con masters en derechos humanos, paz y desarrollo sostenible, comunicación y relaciones internacionales y periodismo, ha trabajado en consultoría política, en temáticas como migraciones, participación pública o geopolítica. Es profesora en el Grado de Relaciones Internacionales de la Universidad Camilo José Cela. Sus principales áreas de interés son la geopolítica africana, las dinámicas migratorias y fronterizas en el espacio euro-mediterráneo-africano y las narrativas mediáticas sobre el continente, temas que aborda combinando análisis, trabajo de campo en África y proyectos de comunicación."
    }
];

const AboutPage = () => {
    const [selectedBio, setSelectedBio] = useState<TeamMember | null>(null);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <div className="relative bg-[#0A2540] text-white py-24 lg:py-32 overflow-hidden">
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
                                    Quiénes somos
                                </h1>
                                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                                    Transformamos la complejidad migratoria en soluciones. Creemos en la cooperación, el análisis basado en datos y el diálogo constructivo para diseñar un futuro donde la movilidad humana sea una oportunidad para ambas regiones.
                                </p>
                            </div>
                        </div>

                        {/* Floating Content Box */}
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-sm">
                            <p className="text-lg font-serif italic text-white leading-relaxed">
                                "Transformamos la complejidad migratoria en soluciones. Creemos en la cooperación, el análisis basado en datos y el diálogo constructivo para diseñar un futuro donde la movilidad humana sea una oportunidad para ambas regiones."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="py-24 bg-white">
                <div className="page-shell">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

                        {/* Mission */}
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-full mb-6 text-[#D4212A]">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#0A2540] mb-6">
                                Misión
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Ofrecer análisis riguroso, proponer políticas innovadoras y generar espacios de diálogo que permitan anticipar y gestionar la migración africana de manera sostenible, humana y útil para ambas regiones.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-full mb-6 text-[#D4212A]">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-serif font-bold text-[#0A2540] mb-6">
                                Visión
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Una Europa conectada con África mediante canales ordenados de movilidad que impulsen el desarrollo compartido de ambas regiones.
                            </p>
                        </div>

                    </div>

                    {/* Principios Section */}
                    <div className="mt-20 pt-16 border-t border-slate-200">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-serif font-bold text-[#0A2540] mb-4">Principios</h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Los valores que guían nuestra investigación y acción</p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center p-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-full mb-4 text-[#006994]">
                                    <Shield className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Independencia</h3>
                                <p className="text-sm text-slate-600">Análisis objetivo libre de influencias políticas o económicas.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-full mb-4 text-[#006994]">
                                    <Lightbulb className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Rigor</h3>
                                <p className="text-sm text-slate-600">Metodología basada en evidencia y datos contrastados.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-full mb-4 text-[#006994]">
                                    <Users className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Cooperación</h3>
                                <p className="text-sm text-slate-600">Diálogo constructivo entre todas las partes implicadas.</p>
                            </div>
                            <div className="text-center p-6">
                                <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-full mb-4 text-[#006994]">
                                    <Globe className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Impacto</h3>
                                <p className="text-sm text-slate-600">Orientación práctica hacia políticas públicas efectivas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="page-shell">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 text-xs font-bold tracking-widest uppercase text-[#D4212A] mb-4">
                            <span className="w-2 h-2 bg-[#D4212A] rounded-full"></span>
                            <span>Nuestro Equipo</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0A2540]">
                            Nuestro Equipo
                        </h2>
                    </div>

                    {/* Core Team Grid */}
                    <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group text-center flex flex-col items-center">
                                <div className="relative mb-6 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <h3 className="text-xl font-serif font-bold text-[#0A2540] mb-1">{member.name}</h3>
                                <p className="text-sm font-bold uppercase tracking-wider text-[#D4212A] mb-4">{member.role}</p>

                                <div className="flex gap-3 justify-center">
                                    <a href={member.linkedin} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-[#0077b5] hover:text-white transition-colors">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-px bg-slate-200 mb-16"></div>

                    {/* Research Fellows Grid */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {researchFellows.map((member, index) => (
                            <div key={index} className="group text-center flex flex-col items-center">
                                <div className="relative mb-4 w-32 h-32 rounded-full overflow-hidden border-2 border-slate-100 shadow-md">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <h3 className="text-lg font-serif font-bold text-[#0A2540] mb-1">{member.name}</h3>
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-3">{member.role}</p>

                                <div className="flex flex-col items-center gap-2 mt-2">
                                    <a href={member.linkedin} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-[#0A2540] hover:bg-[#0077b5] hover:text-white transition-colors mb-1">
                                        <Linkedin className="w-4 h-4" />
                                    </a>
                                    <button
                                        onClick={() => setSelectedBio(member)}
                                        className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-[#D4212A] hover:text-[#0A2540] transition-colors"
                                    >
                                        <Plus className="w-3 h-3 mr-1" />
                                        Bio
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-[#0A2540] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#006994] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4212A] rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        Impulsa el debate. Transforma la política.
                    </h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                        No somos un centro de estudios convencional. En el IEAM buscamos mentes analíticas y espíritus prácticos dispuestos a convertir sus ideas en políticas reales.
                    </p>
                    <Link to="/#contacto" className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-[#0A2540] transition-all duration-300 rounded-sm">
                        Contáctanos
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </div>

            {/* Partners Section */}
            <div className="py-20 bg-slate-50 border-t border-slate-200">
                <div className="page-shell">
                    <div className="text-center mb-12">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6">
                            Colaboramos con
                        </h3>
                        <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
                            Las colaboraciones académicas son una pieza clave para reforzar la base investigadora del IEAM, trabajar de la mano de expertos en materia migratoria y apoyar la aplicación de sus propuestas en materia de política pública.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                        {/* UNV */}
                        <div className="bg-white p-8 rounded-sm border border-slate-200 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                            <div className="w-32 flex-shrink-0 flex items-center justify-center">
                                <img src="/colaboration/unav.png" alt="Universidad de Navarra" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-[#0A2540] mb-2">Universidad de Navarra</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    En el marco del convenio con la Universidad de Navarra, se elaboró el informe "Migraciones y migrantes: las rutas migratorias irregulares hacia Europa. España, un estudio de caso", que aporta un análisis técnico sobre las rutas irregulares hacia Europa con especial foco en España. Publicación prevista para diciembre 2025.
                                </p>
                            </div>
                        </div>

                        {/* UIR */}
                        <div className="bg-white p-8 rounded-sm border border-slate-200 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6">
                            <div className="w-32 flex-shrink-0 flex items-center justify-center">
                                <img src="/colaboration/uir.png" alt="Universidad Internacional de Rabat" className="w-full h-auto object-contain" loading="lazy" decoding="async" />
                            </div>
                            <div>
                                <h4 className="text-xl font-serif font-bold text-[#0A2540] mb-2">Universidad Internacional de Rabat (UIR)</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    El convenio con la UIR refuerza la perspectiva euromediterránea y africana del IEAM, contribuyendo a profundizar el análisis de dinámicas regionales de movilidad entre el Magreb, África Occidental y Europa.
                                </p>
                            </div>
                        </div>

                        {/* Other Partners */}
                        <div className="bg-white p-8 rounded-sm border border-slate-200">
                            <h4 className="text-lg font-bold text-[#0A2540] mb-6 border-b border-slate-100 pb-2">Otras entidades colaboradoras</h4>
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
            {selectedBio && (
                <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-4">
                    <div
                        className="absolute inset-0 bg-[#0A2540]/60 backdrop-blur-sm transition-opacity"
                        onClick={() => setSelectedBio(null)}
                    ></div>
                    <div className="relative bg-white w-full max-w-2xl rounded-t-xl sm:rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in slide-in-from-bottom duration-300">
                        <div className="p-8 pb-4">
                            <div className="flex justify-center mb-6">
                                <h3 className="text-2xl font-serif font-bold text-[#0A2540] text-center border-b pb-4 px-8 border-slate-100">
                                    {selectedBio.name}
                                </h3>
                            </div>
                            <p className="text-center font-bold uppercase tracking-wider text-slate-500 text-sm mb-6">
                                {selectedBio.role}
                            </p>
                        </div>

                        <div className="px-8 pb-8 overflow-y-auto">
                            <div className="text-slate-600 leading-relaxed text-sm md:text-base text-justify whitespace-pre-wrap">
                                {selectedBio.bio}
                            </div>
                        </div>

                        <div className="p-6 border-t border-slate-100 flex justify-center bg-slate-50">
                            <button
                                onClick={() => setSelectedBio(null)}
                                className="inline-flex items-center px-4 py-2 border border-slate-300 shadow-sm text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 focus:outline-none"
                            >
                                <X className="w-4 h-4 mr-2" />
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AboutPage;
