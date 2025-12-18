import { ReactNode } from 'react';

export interface Author {
    name: string;
    role: string;
    role_en?: string;
    image: string;
    bio: string;
    bio_en?: string;
}

export interface RelatedArticle {
    id: string;
    title: string;
    title_en?: string;
    image: string;
    badge: string;
    metadata: {
        date: string;
        readTime: string;
    };
    subtitle?: string;
    subtitle_en?: string;
}

export interface Article {
    slug: string;
    type: 'Análisis' | 'Informe' | 'Entrevista' | 'Policy Brief' | 'Infografía' | 'Nota de prensa' | 'Reseña de evento';
    type_en?: string;
    contentKind: 'analisis' | 'policy' | 'infografia' | 'reseña-evento' | 'entrevista' | 'nota-prensa';
    category: string;
    category_en?: string;
    title: string;
    title_en?: string;
    subtitle: string;
    subtitle_en?: string;
    heroImage: string;
    heroImage_en?: string;
    mainImage: string;
    mainImage_en?: string;
    mainImageCaption: string;
    mainImageCaption_en?: string;
    publishDate: string;
    readTime: string;
    author: Author;
    authors?: Author[]; // Optional array for multiple authors
    content: string; // HTML string for simplicity and portability
    content_en?: string; // Optional English content
    pullQuote?: string; // Optional highlighted quote
    pullQuote_en?: string;
    materialUrl?: string; // Optional downloadable material
    materialLabel?: string;
    materials?: { label: string; label_en?: string; url: string }[];
    relatedArticles: RelatedArticle[];
}

export const articles: Article[] = [
    {
        slug: 'movilidad-africa-europa',
        type: 'Informe',
        type_en: 'Report',
        contentKind: 'policy',
        category: 'Migración · Mediterráneo',
        category_en: 'Migration · Mediterranean',
        title: 'Repensar la movilidad entre Mali y Europa',
        title_en: 'Rethinking Mobility Between Mali and Europe',
        subtitle: 'Un marco para ordenar la movilidad, reducir los costes humanos y crear beneficios compartidos para países de origen, tránsito y destino.',
        subtitle_en: 'A framework to organize mobility, reduce human costs, and create shared benefits for countries of origin, transit, and destination.',
        heroImage: '/images/informemalies.png',
        heroImage_en: '/images/informemalien.png',
        mainImage: '/images/informemalies.png',
        mainImage_en: '/images/informemalien.png',
        mainImageCaption: 'Trayectos de movilidad regulada entre Bamako, Dakar y Madrid.',
        mainImageCaption_en: 'Regulated mobility routes between Bamako, Dakar, and Madrid.',
        publishDate: '14 Nov 2024',
        readTime: '12 min',
        author: {
            name: 'Beatriz de León',
            role: 'Directora Ejecutiva',
            role_en: 'Executive Director',
            image: '/team/member-2.jpg',
            bio: 'Directora Ejecutiva del IEAM.',
            bio_en: 'Executive Director of IEAM.'
        },
        authors: [
            {
                name: 'Beatriz de León',
                role: 'Directora Ejecutiva',
                role_en: 'Executive Director',
                image: '/team/member-2.jpg',
                bio: 'Directora Ejecutiva del IEAM.',
                bio_en: 'Executive Director of IEAM.'
            },
            {
                name: 'Bréma Ely Dicko',
                role: 'Investigador asociado',
                role_en: 'Associate Researcher',
                image: '/team/member-3.jpg',
                bio: 'Investigador asociado del IEAM.',
                bio_en: 'Associate Researcher at IEAM.'
            }
        ],
        pullQuote: 'La movilidad es inevitable; la diferencia está entre gestionarla con reglas claras o asumir sus costes en la irregularidad.',
        pullQuote_en: 'Mobility is inevitable; the difference lies between managing it with clear rules or assuming its costs in irregularity.',
        materials: [
            {
                label: 'Informe completo (ES)',
                label_en: 'Full Report (ES)',
                url: '/docs/ieam-policy-paper-repensar-movilidad-mali-europa-2025.pdf'
            },
            {
                label: 'Informe completo (FR)',
                label_en: 'Full Report (FR)',
                url: '/docs/ieam-policy-paper-refonder-mobilites-mali-europe-2025.pdf'
            }
        ],
        content: `
      <h2 class="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-4">RESUMEN EJECUTIVO</h2>
      <p>El objetivo de este policy paper es proponer un marco de acciones concretas para la movilidad legal y circular, la reintegración de las personas que retornan y la gobernanza regional de las rutas migratorias entre Mali, su subregión y Europa. El documento forma parte de una serie de trabajos del Instituto Español de Análisis Migratorio (IEAM) y es el resultado de un taller de inteligencia colectiva celebrado en Bamako con actores institucionales, académicos e investigadores especializados en migraciones, asociaciones, técnicos y economistas, orientado a identificar prioridades comunes y proponer mecanismos operativos.</p>
      <p>Para España y, en general, para Europa, la dinámica reciente en la ruta atlántica —donde los malienses se encuentran entre las nacionalidades más presentes en la ruta hacia Canarias— invita a ir más allá de la gestión de emergencias para construir soluciones estructurales.</p>
      
      <h2 class="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-4">MENSAJES ESTRATÉGICOS</h2>
      
      <ul class="list-disc ml-6 space-y-4 text-slate-700">
        <li><strong>Es esencial contar con un compromiso colectivo y un enfoque multiactor:</strong> los Estados, las entidades locales, la diáspora y los socios internacionales deben construir conjuntamente los dispositivos, poner en común la financiación y definir indicadores comunes.</li>
        
        <li><strong>Una reintegración satisfactoria pasa por el arraigo comunitario, la inclusión económica y el seguimiento local,</strong> favoreciendo los enfoques colectivos y la financiación mixta.</li>
        
        <li><strong>La movilidad legal y circular debe tratarse como una prioridad estratégica,</strong> con acuerdos multilaterales bien estructurados y procedimientos claros y flexibles.</li>
        
        <li><strong>La consolidación de los mecanismos regionales (CEDEAO, UA, AES, bilaterales) es indispensable</strong> y debe ser más pragmática y garantizar una mejor protección de las personas con estatus migratorios cambiantes.</li>
        
        <li><strong>La coordinación interestatal y la gestión local de los flujos deben evolucionar hacia comités e indicadores comunes,</strong> arraigados en el terreno.</li>
        
        <li><strong>La protección de las mujeres y los niños debe convertirse en un eje transversal importante,</strong> con dispositivos adaptados y respaldados por la recopilación de indicadores cualitativos (seguridad, salud, acceso a los derechos). Se invita a los donantes y diplomáticos a dar prioridad a este aspecto para cubrir el vacío existente en las respuestas operativas.</li>
        
        <li><strong>La sostenibilidad y la mutualización de la financiación:</strong> es urgente integrar los recursos locales, la inversión de la diáspora y un enfoque de cofinanciación inicial para superar el modelo dependiente de los donantes y asegurar la continuidad.</li>
        
        <li><strong>El seguimiento, la transparencia y la adaptación continua son la clave del éxito:</strong> cada acción, cada programa debe ser objeto de seguimiento, documentación y evaluación para poder corregirlo, ampliarlo o detenerlo en función de los resultados medidos.</li>
      </ul>
      
      <p class="mt-6 text-sm text-slate-600">Basado en el Policy Paper «Repensar la movilidad entre Mali y Europa», elaborado por Beatriz de León Cobo y el Pr. Bréma Ely Dicko.</p>
    `,
        content_en: `
      <h2 class="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-4">EXECUTIVE SUMMARY</h2>
      <p>The objective of this policy paper is to propose a framework of concrete actions for legal and circular mobility, the reintegration of returnees, and the regional governance of migratory routes between Mali, its sub-region, and Europe. This document is part of a series of works by the Spanish Institute for Migration Analysis (IEAM) and is the result of a collective intelligence workshop held in Bamako with institutional actors, academics, migration researchers, associations, technicians, and economists, aimed at identifying common priorities and proposing operational mechanisms.</p>
      <p>For Spain and, in general, for Europe, the recent dynamics in the Atlantic route—where Malians are among the most present nationalities on the route to the Canary Islands—call for going beyond emergency management to build structural solutions.</p>
      
      <h2 class="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-4">STRATEGIC MESSAGES</h2>
      
      <ul class="list-disc ml-6 space-y-4 text-slate-700">
        <li><strong>Collective commitment and a multi-stakeholder approach are essential:</strong> States, local entities, the diaspora, and international partners must jointly build the mechanisms, pool funding, and define common indicators.</li>
        
        <li><strong>Successful reintegration relies on community roots, economic inclusion, and local monitoring,</strong> favoring collective approaches and mixed financing.</li>
        
        <li><strong>Legal and circular mobility must be treated as a strategic priority,</strong> with well-structured multilateral agreements and clear, flexible procedures.</li>
        
        <li><strong>Consolidation of regional mechanisms (ECOWAS, AU, AES, bilateral) is indispensable</strong> and must be more pragmatic, guaranteeing better protection for people with changing migratory statuses.</li>
        
        <li><strong>Interstate coordination and local flow management must evolve towards common committees and indicators,</strong> rooted in the field.</li>
        
        <li><strong>Protection of women and children must become a major transversal axis,</strong> with adapted mechanisms backed by the collection of qualitative indicators (safety, health, access to rights). Donors and diplomats are invited to prioritize this aspect to fill the existing gap in operational responses.</li>
        
        <li><strong>Sustainability and mutualization of funding:</strong> It is urgent to integrate local resources, diaspora investment, and an initial co-financing approach to overcome the donor-dependent model and ensure continuity.</li>
        
        <li><strong>Monitoring, transparency, and continuous adaptation are key to success:</strong> Every action, every program must be subject to monitoring, documentation, and evaluation to be corrected, expanded, or stopped based on measured results.</li>
      </ul>
      
      <p class="mt-6 text-sm text-slate-600">Based on the Policy Paper "Rethinking Mobility Between Mali and Europe", prepared by Beatriz de León Cobo and Prof. Bréma Ely Dicko.</p>
    `,
        relatedArticles: [
            {
                id: 'rutas-migratorias-2026',
                title: "Rutas migratorias en 2026: Proyecciones y tendencias",
                title_en: "Migratory Routes in 2026: Projections and Trends",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
                badge: "Análisis",
                metadata: { date: "08 Dic 2025", readTime: "8 min" }
            },
            {
                id: 'visados-humanitarios',
                title: "Policy Brief: Visados humanitarios",
                title_en: "Policy Brief: Humanitarian Visas",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
                badge: "Policy Brief",
                metadata: { date: "01 Dic 2025", readTime: "6 min" }
            },
            {
                id: 'entrevista-migracion-circular',
                title: "Entrevista: 'La migración circular es el futuro de la cooperación'",
                title_en: "Interview: 'Circular migration is the future of cooperation'",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2788&auto=format&fit=crop",
                badge: "Entrevista",
                metadata: { date: "01 Dic 2025", readTime: "10 min" }
            }
        ]
    },
    {
        slug: 'comparativa-llegadas-espana-2025',
        type: 'Infografía',
        contentKind: 'infografia',
        category: 'Flujos · España',
        title: 'Comparativa de llegadas migratorias a España por vía terrestre y marítima (2024-2025)',
        title_en: 'Comparison of migratory arrivals to Spain by land and sea (2024-2025)',
        subtitle: 'El flujo migratorio hacia España desciende 31% interanual, con fuertes diferencias territoriales entre rutas marítimas y terrestres.',
        subtitle_en: 'Migratory flow to Spain drops 31% year-on-year, with strong territorial differences between maritime and land routes.',
        heroImage: '/images/boat-atlantic.jpg',
        mainImage: '/images/boat-atlantic.jpg',
        mainImageCaption: 'Patrulla marítima en la ruta atlántica hacia Canarias (2024-2025).',
        publishDate: '15 Sep 2025',
        readTime: '8 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Análisis de datos',
            image: '/favicon-new.png',
            bio: 'Unidad de datos y análisis territorial del IEAM.'
        },
        pullQuote: 'La presión migratoria persiste y las rutas se adaptan al control fronterizo y a la cooperación internacional.',
        materials: [
            {
                label: 'Descargar infografía (PDF)',
                url: '/docs/infografia-llegadas-nov2025-es.pdf'
            }
        ],
        content: `
      <p>Según los últimos datos del Ministerio del Interior, el flujo migratorio hacia España cayó 31% entre el 1 de enero y el 15 de septiembre de 2025 frente al mismo periodo de 2024: 26.211 personas vs. 37.970.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Descenso general, con diferencias territoriales</h3>
      <p>Las llegadas por mar bajan 34% (35.882 a 23.583). Canarias concentra la caída: 26.758 a 12.487 (-53,3%). Ceuta desciende 68,4% y Melilla sube 19%. Baleares sube 70,9%, señal de desplazamiento parcial de rutas al Mediterráneo central. Embarcaciones interceptadas: -17,9% (1.122 a 921).</p>
      <p>Por vía terrestre, tendencia contraria: Ceuta +18,5% (2.026 a 2.401) y Melilla +266% (62 a 227), apuntando a reactivación de intentos fronterizos, sobre todo en Melilla.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Factores que explican el descenso</h3>
      <ul class="list-disc ml-6 space-y-1 text-slate-700">
        <li>Patrullas mixtas Mauritania-España refuerzan vigilancia atlántica.</li>
        <li>Controles más estrictos en Mauritania y aumento de detenciones/expulsiones hacia Mali y Senegal.</li>
        <li>Cooperación con Senegal y Mauritania para contener rutas.</li>
      </ul>
      <p>Aun así, aumentan salidas desde Guinea Conakry y Guinea-Bissau, lo que sugiere que el descenso puede ser coyuntural.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Conclusión</h3>
      <p>El balance provisional 2025 muestra menor flujo por mar, pero la presión continúa y las rutas se adaptan. El seguimiento constante es clave para anticipar repuntes y diseñar políticas eficaces y sostenibles.</p>
    `,
        relatedArticles: []
    },
    {
        slug: 'comparativa-partidos-politicos-2024',
        type: 'Infografía',
        contentKind: 'infografia',
        category: 'Política · España',
        title: 'Comparativa de partidos políticos ante el Pacto Migratorio',
        title_en: 'Comparison of political parties on the Migration Pact',
        subtitle: 'Síntesis comparada de las propuestas en materia de inmigración de los principales partidos políticos en España (2025).',
        subtitle_en: 'Comparative overview of immigration proposals from Spain\'s main political parties (2025).',
        heroImage: "/images/politics.png",
        mainImage: "/images/politics.png",
        mainImageCaption: 'Comparativa de propuestas migratorias de partidos políticos en España.',
        publishDate: '10 Nov 2024',
        readTime: '6 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Investigación',
            image: '/favicon-new.png',
            bio: 'Unidad de investigación IEAM.'
        },
        pullQuote: 'El consenso político se fractura en los detalles de implementación del Pacto.',
        materials: [
            {
                label: 'Descargar infografía (PDF)',
                url: '/docs/infografia-partidospoliticos.pdf'
            }
        ],
        content: `
      <p>En IEAM Instituto Español de Análisis Migratorio presentamos una síntesis comparada de las propuestas en materia de inmigración incluidas en los programas nacionales de los principales partidos políticos en España (2025).</p>
      <p>La infografía resume las diferencias clave en modelos, prioridades y enfoques regulatorios que marcarán el debate migratorio en España.</p>
    `,
        content_en: `
      <p>At IEAM Instituto Español de Análisis Migratorio, we present a comparative overview of the immigration proposals included in the 2025 national programmes of Spain's main political parties.</p>
      <p>The infographic highlights differing models, priorities and regulatory visions shaping Spain's migration debate.</p>
    `,
        relatedArticles: []
    },
    {
        slug: 'comparativa-frontex-2024',
        type: 'Infografía',
        contentKind: 'infografia',
        category: 'Seguridad · Fronteras',
        title: 'Comparativa: La evolución del mandato de Frontex',
        title_en: 'Comparison: The evolution of the Frontex mandate',
        subtitle: 'Cómo ha cambiado la agencia de fronteras europea en la última década.',
        subtitle_en: 'How the European border agency has changed over the last decade.',
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        mainImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        mainImageCaption: 'Operación conjunta en el Mediterráneo.',
        publishDate: '05 Nov 2024',
        readTime: '8 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Investigación',
            image: '/favicon-new.png',
            bio: 'Unidad de investigación IEAM.'
        },
        materials: [
            {
                label: 'Infografía (ES)',
                url: '/docs/frontex1.jpg'
            },
            {
                label: 'Infographic (EN)',
                url: '/docs/frontex2.jpg'
            }
        ],
        pullQuote: 'Un sistema de retorno creíble debe basarse en la confianza, la transparencia y el respeto a los derechos humanos.',
        content: `
      <p>Desde IEAM Instituto Español de Análisis Migratorio, destacamos la reciente reunión organizada por Frontex los días 5 y 6 de noviembre de 2025 en Varsovia, centrada en el desarrollo de un sistema integrado de monitoreo de retornos en la UE.</p>
      <p>El encuentro reunió a representantes de la Oficina de Derechos Fundamentales (FRO) de Frontex para debatir cómo fortalecer un sistema de retorno humano, seguro y respetuoso con los derechos fundamentales.</p>
      <p>El monitoreo de retornos es una herramienta esencial para garantizar que toda operación respete la legalidad y la dignidad de las personas retornadas, mediante criterios objetivos y transparentes que favorezcan la coherencia, la rendición de cuentas y la identificación de buenas prácticas.</p>
      <p>Durante las sesiones, los participantes subrayaron la necesidad de una cooperación estructurada entre los niveles europeo y nacional, y coincidieron en que un sistema de retorno creíble debe basarse en la confianza, la transparencia y el respeto a los derechos humanos.</p>
    `,
        content_en: `
      <p>From IEAM Instituto Español de Análisis Migratorio, we highlight the recent meeting held by Frontex on 5–6 November 2025 in Warsaw, dedicated to advancing an EU integrated monitoring system of returns.</p>
      <p>The event brought together forced-return monitors and members of Frontex's Fundamental Rights Office (FRO) to discuss how to strengthen a return system that is humane, safe and respectful of fundamental rights.</p>
      <p>Return monitoring is a key mechanism ensuring that all operations uphold legality, dignity and accountability, based on objective and transparent criteria that promote fairness and best practices across Member States.</p>
      <p>Participants stressed the need for structured cooperation between EU and national levels, reaffirming that a credible return system must rest on trust, transparency and a shared commitment to human rights.</p>
    `,
        relatedArticles: []
    },

    {
        slug: 'entrevista-beatriz-mauritania-canarias',
        type: 'Entrevista',
        contentKind: 'entrevista',
        category: 'Entrevista · Flujos Atlánticos',
        title: 'Entrevista a Beatriz de León Cobo: «La presión al Gobierno de Mauritania explica el descenso de llegadas de migrantes a Canarias»',
        subtitle: 'La directora del IEAM analiza cómo la presión a Mauritania y la inestabilidad del Sahel influyen en los flujos hacia Canarias.',
        heroImage: '/images/entrevista-beatrizleon.webp',
        mainImage: '/images/entrevista-beatrizleon.webp',
        mainImageCaption: 'Beatriz de León Cobo durante la jornada sobre Sahel y ruta hacia Canarias.',
        publishDate: '20 Sep 2025',
        readTime: '7 min',
        author: {
            name: 'Beatriz de León Cobo',
            role: 'Directora IEAM',
            image: '/team/member-2.jpg',
            bio: 'Directora del IEAM y consultora en Sic Transit Advisory; profesora en la Universidad Francisco de Vitoria.'
        },
        pullQuote: 'La presión ejercida por el Gobierno de Mauritania ha intensificado el control tras el aumento de salidas desde Senegal y Mali.',
        content: `
      <p>Beatriz de León Cobo, directora del Instituto Español de Análisis Migratorio (IEAM), participó en una jornada organizada por el Gobierno de Canarias sobre la geopolítica del Sahel y su impacto en la ruta migratoria hacia el Archipiélago. En esta entrevista para “La Provincia”, analiza los factores que explican las dinámicas actuales.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">¿Cómo influye la inestabilidad del Sahel en los flujos hacia Canarias?</h3>
      <p>Tres factores explican el incremento: la crisis de gobernanza en el Sahel (prioridad al terrorismo sobre servicios y gestión migratoria), la crisis económica y de seguridad, y factores estructurales como la crisis climática. La mayoría de perfiles son migrantes económicos, especialmente de Mali.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">¿Es suficiente reforzar Frontex?</h3>
      <p>Útil en emergencia, pero insuficiente por sí sola. Se requiere estrategia integral en origen y tránsito, combinando apoyo operativo, coordinación internacional y desarrollo. Existen marcos UE-Mauritania y España-Senegal, pero deben ampliarse.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">¿Respuesta limitada de la UE?</h3>
      <p>La UE refleja prioridades diversas (Ucrania, Oriente Medio, ayuda internacional). Europa se rearma y redefine prioridades; la presión ciudadana y mediática en cada Estado miembro es clave para mantener el Sahel en la agenda.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">¿Por qué no hay estabilidad pese a misiones ONU/UE?</h3>
      <p>Más que fracaso, resultados limitados: sin sostenibilidad ni apropiación local, el impacto no perdura al retirarse el donante. Los programas deben consolidarse para que continúen cuando la atención se desplace.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">¿El yihadismo en el Sahel amenaza a Canarias?</h3>
      <p>No: las organizaciones han declarado no querer atacar Europa tras la retirada internacional; se concentran en la región y expansión hacia el sur (Benín, Ghana, Togo).</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">¿Por qué bajan las llegadas a Canarias?</h3>
      <p>Por la presión del Gobierno de Mauritania ante el aumento de salidas desde Senegal y Mali. La ruta argelina es muy peligrosa y las redes han buscado alternativas. Es pronto para saber si se mantendrá la tendencia.</p>
    `,
        relatedArticles: []
    },
    {
        slug: 'reseña-presentacion-informe-mediterraneo-2024',
        type: 'Reseña de evento',
        contentKind: 'reseña-evento',
        category: 'Mediterráneo · Política migratoria',
        title: 'Presentación del informe sobre la migración irregular en el Mediterráneo',
        subtitle: 'Un nuevo enfoque sobre los flujos migratorios que afectan al Mediterráneo.',
        heroImage: '/images/evento-mesaredonda.png',
        mainImage: '/images/evento-mesaredonda-interna.jpg',
        mainImageCaption: 'Mesa redonda sobre migración en el Mediterráneo con actores del sur de Europa y norte de África.',
        publishDate: '24 Sep 2024',
        readTime: '9 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Reseña de eventos',
            image: '/favicon-new.png',
            bio: 'Unidad de análisis y cobertura de eventos estratégicos del IEAM.'
        },
        pullQuote: 'La migración no es una crisis puntual: requiere cooperación a largo plazo y vías legales que acompañen la seguridad y el desarrollo.',
        content: `
      <p>El 24 de septiembre de 2024, la Oficina del Parlamento Europeo y la Comisión Europea en Madrid acogió un encuentro para debatir retos y oportunidades de la migración mediterránea. Organizado por Fundación Fortius y Principios, reunió voces del sur de Europa y el norte de África para fomentar el diálogo sobre flujos migratorios.</p>
      <p>Juan Ángel Soto (Fortius) y Jorge Aguado (Principios) destacaron la cooperación transfronteriza y el rol del Diálogo Mediterráneo, que ya conecta a más de 20 organizaciones de 12 países.</p>
      <p>Se presentó un libro blanco que analiza migración informal y políticas actuales, insistiendo en que seguridad y control fronterizo son necesarios pero insuficientes sin desarrollo, vías legales y reducción de desigualdades.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Mesas redondas</h3>
      <p><strong>Mesa 1: Sur de Europa</strong> – España, Italia y Portugal subrayaron colaboración y solidaridad. Participaron Irune Ariño, Karina Kozhakhmet, Gonçalo Torres; moderó Mark Vargha.</p>
      <p><strong>Mesa 2: Perspectiva norteafricana</strong> – Loubna El Hassouni, Dr. Mohamed Wounouki y Malak Darwish abordaron dinámicas de origen y tránsito; moderó Tasnim Idriss.</p>
      <p><strong>Mesa 3: Cooperación y desarrollo</strong> – Rafael Herráiz, Iñaki Díaz y Miguel Rico discutieron inversión en origen y vías legales; moderó Liskel Álvarez Domínguez.</p>
      <p>Las conclusiones: la migración es estructural, requiere cooperación sostenida y políticas adaptadas por región, combinando control, integración y desarrollo en origen.</p>
    `,
        relatedArticles: [
            { id: 'cumbre-hungria-crisis-migratoria-2025', title: 'Hungría acoge una cumbre internacional sobre la crisis migratoria europea', image: '/images/evento-hungria.webp', badge: 'Cumbre', metadata: { date: '24-25 Sep 2025', readTime: '—' } }
        ]
    },
    {
        slug: 'reseña-migracion-irregular-marruecos-2024',
        type: 'Reseña de evento',
        contentKind: 'reseña-evento',
        category: 'Marruecos · Mediterráneo',
        title: 'Migración irregular en Marruecos',
        subtitle: 'Diálogo Mediterráneo en Rabat: factores, impacto y respuestas regionales.',
        heroImage: '/images/evento-debateintegral.png',
        mainImage: '/images/evento-debateintegralinterno.jpeg',
        mainImageCaption: 'Debate en UIR Rabat Business School sobre migración irregular en Marruecos.',
        publishDate: '17 Oct 2024',
        readTime: '8 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Reseña de eventos',
            image: '/favicon-new.png',
            bio: 'Unidad de análisis y cobertura de eventos estratégicos del IEAM.'
        },
        pullQuote: 'La migración no es una crisis; es un fenómeno estructural que exige cooperación y políticas adaptadas a cada orilla.',
        content: `
      <p>Diálogo Mediterráneo, red de think tanks comprometida con la libertad y el bienestar humano, organizó en Rabat (UIR Business School) un debate integral sobre migración irregular en Marruecos y su impacto en el Mediterráneo, acogido por AMSED.</p>
      <p>Participaron expertos, responsables políticos y líderes de sociedad civil, con la presencia de Juan Ángel Soto Gómez (Fundación Fortius) y Tasnim Idriss (coordinación de Diálogo Mediterráneo).</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Mesa 1: Factores e impacto</h3>
      <p>Analizó los impulsores económicos, políticos y ambientales de la migración irregular desde y a través de Marruecos, y su efecto en mercados laborales, estructuras sociales y dinámicas políticas.</p>
      <p>Ponentes: Reybet-Degat Francois (ACNUR), Mohammed OUALI ALAMI (AMSED), Maftaha Benchlikha (OIM), Abderrahman Benyahya (Droits et Justice), Abdeslam Sbatri (Organisation des Jeunes Africains).</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Mesa 2: Respuestas y cooperación</h3>
      <p>Evaluó políticas migratorias marroquíes y cooperación regional, brechas de implementación y alineación con marcos internacionales. Ponentes: Ivan Martin (Policy Center for the New South), Aurélie Eragne (CNDH), Norman Sempijja (UM6P), Alicia Tintelin (Hijra Legal Clinic).</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Informe nacional e iniciativas</h3>
      <p>Se presentó la nota país sobre migración irregular en Marruecos y un informe mediterráneo basado en 12 notas país, además de próximas iniciativas estratégicas, incluido el análisis de las elecciones europeas 2024.</p>
      <p>El evento concluyó subrayando que la migración es estructural y requiere diálogo y cooperación sostenidos para abordarla desde origen y destino.</p>
    `,
        relatedArticles: [
            { id: 'presentacion-informe-mediterraneo', title: 'Presentación del informe sobre la migración irregular en el Mediterráneo', image: '/images/evento-mesaredonda.png', badge: 'Presentación', metadata: { date: '24 Sep 2024', readTime: '—' } }
        ]
    }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.find(article => article.slug === slug);
};
