export interface EventAgendaItem {
  time?: string;
  title: string;
  speaker?: string;
}

export interface EventSpeaker {
  name: string;
  role: string;
}

export interface EventItem {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  location: string;
  format: string;
  heroImage: string;
  highlightImage?: string;
  summary: string;
  agenda: EventAgendaItem[];
  speakers: EventSpeaker[];
}

export const events: EventItem[] = [
  {
    slug: "cumbre-budapest-2024",
    title: "Cumbre de Budapest: Crisis Migratoria Europea",
    subtitle: "Análisis de las políticas fronterizas y el nuevo pacto de asilo.",
    category: "Cumbre",
    date: "24 Nov 2024",
    location: "Budapest, Hungría",
    format: "Presencial",
    heroImage: "/images/evento-hungria.webp",
    summary: "Encuentro de alto nivel con líderes europeos para debatir el futuro de la gestión fronteriza y la solidaridad entre estados miembros.",
    agenda: [],
    speakers: [
      { name: "Beatriz de León", role: "Directora Ejecutiva IEAM" }
    ]
  },
  {
    slug: "dialogo-dakar-2024",
    title: "Diálogo Estratégico en Dakar",
    subtitle: "Cooperación España-Senegal para la movilidad circular.",
    category: "Diálogo",
    date: "12 Nov 2024",
    location: "Dakar, Senegal",
    format: "Presencial",
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop",
    summary: "Mesa de trabajo con autoridades senegalesas y españolas para evaluar los programas de migración circular y prevención en origen.",
    agenda: [],
    speakers: []
  },
  {
    slug: "taller-bamako-2024",
    title: "Inteligencia Colectiva en Bamako",
    subtitle: "Diagnóstico compartido sobre la movilidad en el Sahel.",
    category: "Taller",
    date: "05 Nov 2024",
    location: "Bamako, Mali",
    format: "Presencial",
    heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    summary: "Taller bajo regla Chatham House con sociedad civil y expertos locales para mapear las dinámicas de desplazamiento en la región.",
    agenda: [],
    speakers: [
      { name: "Bréma Ely Dicko", role: "Investigador Asociado" }
    ]
  },
  {
    slug: "dialogo-mediterraneo-rabat",
    title: "Migración Irregular en Marruecos",
    subtitle: "Desafíos y respuestas desde la perspectiva norteafricana.",
    category: "Debate",
    date: "17 Oct 2024",
    location: "Rabat, Marruecos",
    format: "Presencial",
    heroImage: "/images/evento-debateintegral.png",
    summary: "Debate en la UIR Business School sobre los impulsores de la migración y la cooperación regional en el Mediterráneo.",
    agenda: [],
    speakers: [
      { name: "Tasnim Idriss", role: "Coordinadora Norte África" }
    ]
  },
  {
    slug: "foro-bruselas-2024",
    title: "Agenda Migratoria Europea: Perspectivas 2025",
    subtitle: "Presentación de propuestas ante instituciones europeas.",
    category: "Foro",
    date: "20 Sep 2024",
    location: "Bruselas, Bélgica",
    format: "Presencial",
    heroImage: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?q=80&w=2070&auto=format&fit=crop",
    summary: "Reunión con eurodiputados y técnicos de la Comisión para presentar el informe anual y las recomendaciones del IEAM.",
    agenda: [],
    speakers: []
  },
  {
    slug: "jornada-canarias-sahel",
    title: "Canarias y el Sahel: Impacto Geopolítico",
    subtitle: "Análisis de las rutas atlánticas y la seguridad regional.",
    category: "Jornada",
    date: "03 Sep 2024",
    location: "Las Palmas, Canarias",
    format: "Híbrido",
    heroImage: "/images/evento-sahelmain.png",
    summary: "Jornada organizada junto al Gobierno de Canarias e IRLab para analizar la inestabilidad en el Sahel y su repercusión en el archipiélago.",
    agenda: [],
    speakers: [
      { name: "Beatriz de León", role: "Directora Ejecutiva IEAM" }
    ]
  }
];

export const getEventBySlug = (slug: string): EventItem | undefined =>
  events.find((event) => event.slug === slug);
