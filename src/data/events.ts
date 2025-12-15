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
  category: string; // Added category for filtering
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
    slug: "foro-dialogo-mediterraneo-2025",
    title: "Foro de Diálogo Mediterráneo 2025",
    subtitle: "Cumbre estratégica sobre movilidad legal y cooperación euro-africana.",
    category: "Cumbre",
    date: "15 dic 2025",
    location: "Madrid, España",
    format: "Presencial",
    heroImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    highlightImage: "/mali-europa-map.png",
    summary: "Taller de inteligencia colectiva con decisores, académicos y sociedad civil para alinear corredores legales, retornos con reintegración y seguridad humana.",
    agenda: [
      { time: "09:00", title: "Apertura y objetivos", speaker: "Beatriz de León" },
      { time: "10:00", title: "Panel 1: Movilidad legal y talento", speaker: "Luis Cobo" },
      { time: "12:00", title: "Mesa técnica: Datos y monitoreo" },
      { time: "16:00", title: "Conclusiones y hoja de ruta" }
    ],
    speakers: [
      { name: "Beatriz de León", role: "Directora IEAM" },
      { name: "Tasnim Idriss", role: "Coordinadora Norte de África" },
      { name: "Ahmed Touré", role: "Analista Senior de Seguridad" }
    ]
  },
  {
    slug: "sahel-seguridad-2025",
    title: "Cumbre MCC-MRI · Seguridad y Migración en el Sahel",
    subtitle: "Alianzas regionales y rutas seguras en el Sahel occidental.",
    category: "Jornada",
    date: "24 sep 2025",
    location: "Bamako, Malí",
    format: "Híbrido",
    heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    summary: "Diálogo sobre seguridad humana, movilidad regulada y cooperación económica para reducir presión en rutas atlánticas.",
    agenda: [
      { time: "09:30", title: "Contexto Sahel 2025" },
      { time: "11:00", title: "Fronteras y protección" },
      { time: "14:00", title: "Movilidad circular y empleo" }
    ],
    speakers: [
      { name: "Ahmed Touré", role: "Analista Senior" },
      { name: "María L. Crespo", role: "Directora de Análisis IEAM" }
    ]
  },
  {
    slug: "migracion-irregular-marruecos",
    title: "Migración irregular en Marruecos",
    subtitle: "Análisis de tendencias y desafíos en la frontera sur.",
    category: "Debate",
    date: "17 oct 2024",
    location: "Online",
    format: "Online",
    heroImage: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=2076&auto=format&fit=crop",
    summary: "Debate abierto sobre los últimos flujos migratorios y la respuesta institucional.",
    agenda: [
        { time: "18:00", title: "Bienvenida" },
        { time: "18:15", title: "Presentación de datos" },
        { time: "19:00", title: "Debate abierto" }
    ],
    speakers: []
  },
  {
    slug: "presentacion-informe-mediterraneo",
    title: "Presentación del informe sobre la migración irregular en el Mediterráneo",
    subtitle: "Lanzamiento oficial del anuario 2024.",
    category: "Presentación",
    date: "24 sep 2024",
    location: "Madrid, España",
    format: "Presencial",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    summary: "Acto de presentación con los autores principales del informe.",
    agenda: [
        { time: "10:00", title: "Rueda de prensa" },
        { time: "11:00", title: "Presentación técnica" }
    ],
    speakers: []
  }
];

export const getEventBySlug = (slug: string): EventItem | undefined =>
  events.find((event) => event.slug === slug);
