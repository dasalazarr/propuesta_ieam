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
  title_en?: string;
  subtitle: string;
  subtitle_en?: string;
  category: string;
  category_en?: string;
  date: string;
  location: string;
  location_en?: string;
  format: string;
  format_en?: string;
  heroImage: string;
  highlightImage?: string;
  summary: string;
  summary_en?: string;
  agenda: EventAgendaItem[];
  speakers: EventSpeaker[];
}

export const events: EventItem[] = [
  {
    slug: "cumbre-budapest-2024",
    title: "Cumbre de Budapest: Crisis Migratoria Europea",
    title_en: "Budapest Summit: European Migration Crisis",
    subtitle: "Análisis de las políticas fronterizas y el nuevo pacto de asilo.",
    subtitle_en: "Analysis of border policies and the new asylum pact.",
    category: "Cumbre",
    category_en: "Summit",
    date: "24 Nov 2024",
    location: "Budapest, Hungría",
    location_en: "Budapest, Hungary",
    format: "Presencial",
    format_en: "In-person",
    heroImage: "/images/evento-hungria.webp",
    summary: "Encuentro de alto nivel con líderes europeos para debatir el futuro de la gestión fronteriza y la solidaridad entre estados miembros.",
    summary_en: "High-level meeting with European leaders to discuss the future of border management and solidarity between member states.",
    agenda: [],
    speakers: [
      { name: "Beatriz de León", role: "Directora Ejecutiva IEAM" }
    ]
  },
  {
    slug: "dialogo-dakar-2024",
    title: "Diálogo Estratégico en Dakar",
    title_en: "Strategic Dialogue in Dakar",
    subtitle: "Cooperación España-Senegal para la movilidad circular.",
    subtitle_en: "Spain-Senegal cooperation for circular mobility.",
    category: "Diálogo",
    category_en: "Dialogue",
    date: "12 Nov 2024",
    location: "Dakar, Senegal",
    location_en: "Dakar, Senegal",
    format: "Presencial",
    format_en: "In-person",
    heroImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072&auto=format&fit=crop",
    summary: "Mesa de trabajo con autoridades senegalesas y españolas para evaluar los programas de migración circular y prevención en origen.",
    summary_en: "Working table with Senegalese and Spanish authorities to evaluate circular migration programs and prevention at origin.",
    agenda: [],
    speakers: []
  },
  {
    slug: "taller-bamako-2024",
    title: "Inteligencia Colectiva en Bamako",
    title_en: "Collective Intelligence in Bamako",
    subtitle: "Diagnóstico compartido sobre la movilidad en el Sahel.",
    subtitle_en: "Shared diagnosis on mobility in the Sahel.",
    category: "Taller",
    category_en: "Workshop",
    date: "05 Nov 2024",
    location: "Bamako, Mali",
    location_en: "Bamako, Mali",
    format: "Presencial",
    format_en: "In-person",
    heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    summary: "Taller bajo regla Chatham House con sociedad civil y expertos locales para mapear las dinámicas de desplazamiento en la región.",
    summary_en: "Chatham House rule workshop with civil society and local experts to map displacement dynamics in the region.",
    agenda: [],
    speakers: [
      { name: "Bréma Ely Dicko", role: "Investigador Asociado" }
    ]
  },
  {
    slug: "dialogo-mediterraneo-rabat",
    title: "Migración Irregular en Marruecos",
    title_en: "Irregular Migration in Morocco",
    subtitle: "Desafíos y respuestas desde la perspectiva norteafricana.",
    subtitle_en: "Challenges and responses from the North African perspective.",
    category: "Debate",
    category_en: "Debate",
    date: "17 Oct 2024",
    location: "Rabat, Marruecos",
    location_en: "Rabat, Morocco",
    format: "Presencial",
    format_en: "In-person",
    heroImage: "/images/evento-debateintegral.png",
    summary: "Debate en la UIR Business School sobre los impulsores de la migración y la cooperación regional en el Mediterráneo.",
    summary_en: "Debate at the UIR Business School on the drivers of migration and regional cooperation in the Mediterranean.",
    agenda: [],
    speakers: [
      { name: "Tasnim Idriss", role: "Coordinadora Norte África" }
    ]
  },
  {
    slug: "foro-bruselas-2024",
    title: "Agenda Migratoria Europea: Perspectivas 2025",
    title_en: "European Migration Agenda: 2025 Perspectives",
    subtitle: "Presentación de propuestas ante instituciones europeas.",
    subtitle_en: "Presentation of proposals to European institutions.",
    category: "Foro",
    category_en: "Forum",
    date: "20 Sep 2024",
    location: "Bruselas, Bélgica",
    location_en: "Brussels, Belgium",
    format: "Presencial",
    format_en: "In-person",
    heroImage: "https://images.unsplash.com/photo-1464790719320-516ecd75af6c?q=80&w=2070&auto=format&fit=crop",
    summary: "Reunión con eurodiputados y técnicos de la Comisión para presentar el informe anual y las recomendaciones del IEAM.",
    summary_en: "Meeting with MEPs and Commission technicians to present the annual report and IEAM recommendations.",
    agenda: [],
    speakers: []
  },
  {
    slug: "jornada-canarias-sahel",
    title: "Canarias y el Sahel: Impacto Geopolítico",
    title_en: "Canary Islands and the Sahel: Geopolitical Impact",
    subtitle: "Análisis de las rutas atlánticas y la seguridad regional.",
    subtitle_en: "Analysis of Atlantic routes and regional security.",
    category: "Jornada",
    category_en: "Conference",
    date: "03 Sep 2024",
    location: "Las Palmas, Canarias",
    location_en: "Las Palmas, Canary Islands",
    format: "Híbrido",
    format_en: "Hybrid",
    heroImage: "/images/evento-sahelmain.png",
    summary: "Jornada organizada junto al Gobierno de Canarias e IRLab para analizar la inestabilidad en el Sahel y su repercusión en el archipiélago.",
    summary_en: "Conference organized with the Government of the Canary Islands and IRLab to analyze instability in the Sahel and its repercussion on the archipelago.",
    agenda: [],
    speakers: [
      { name: "Beatriz de León", role: "Directora Ejecutiva IEAM" }
    ]
  }
];

export const getEventBySlug = (slug: string): EventItem | undefined =>
  events.find((event) => event.slug === slug);
