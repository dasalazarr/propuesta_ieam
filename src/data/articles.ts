import { ReactNode } from 'react';

export interface Author {
    name: string;
    role: string;
    image: string;
    bio: string;
}

export interface RelatedArticle {
    id: string;
    title: string;
    image: string;
    badge: string;
    metadata: {
        date: string;
        readTime: string;
    };
}

export interface Article {
    slug: string;
    type: 'Análisis' | 'Informe' | 'Entrevista' | 'Policy Brief' | 'Infografía' | 'Nota de prensa' | 'Reseña de evento';
    contentKind: 'analisis' | 'policy' | 'infografia' | 'reseña-evento' | 'entrevista' | 'nota-prensa';
    category: string;
    title: string;
    subtitle: string;
    heroImage: string;
    mainImage: string;
    mainImageCaption: string;
    publishDate: string;
    readTime: string;
    author: Author;
    content: string; // HTML string for simplicity and portability
    pullQuote?: string; // Optional highlighted quote
    materialUrl?: string; // Optional downloadable material
    materialLabel?: string;
    materials?: { label: string; url: string }[];
    relatedArticles: RelatedArticle[];
}

export const articles: Article[] = [
    {
        slug: 'movilidad-africa-europa',
        type: 'Informe',
        contentKind: 'policy',
        category: 'Migración · Mediterráneo',
        title: 'Repensar la movilidad entre Mali y Europa',
        subtitle: 'Un marco para ordenar la movilidad, reducir los costes humanos y crear beneficios compartidos para países de origen, tránsito y destino.',
        heroImage: '/mali-europa-map.png',
        mainImage: '/mali-europa-map.png',
        mainImageCaption: 'Trayectos de movilidad regulada entre Bamako, Dakar y Madrid.',
        publishDate: '14 Nov 2024',
        readTime: '12 min',
        author: {
            name: 'Beatriz de León',
            role: 'Directora Ejecutiva',
            image: '/team/member-2.jpg',
            bio: 'Directora Ejecutiva del IEAM. Especialista en movilidad África–Europa y negociación de marcos bilaterales de talento. Lidera talleres de inteligencia colectiva en Bamako, Dakar y Rabat.'
        },
        pullQuote: 'La movilidad es inevitable; la diferencia está entre gestionarla con reglas claras o asumir sus costes en la irregularidad.',
        materials: [
            {
                label: 'Informe completo (ES)',
                url: '/docs/ieam-policy-paper-repensar-movilidad-mali-europa-2025.pdf'
            },
            {
                label: 'Informe completo (FR)',
                url: '/docs/ieam-policy-paper-refonder-mobilites-mali-europe-2025.pdf'
            }
        ],
        content: `
      <p>La dinámica reciente en la ruta atlántica, donde los ciudadanos malienses figuran entre las nacionalidades más presentes en las llegadas a Canarias, envía un mensaje claro: la gestión de emergencias ya no es suficiente. Es hora de construir soluciones estructurales basadas en la evidencia.</p>
      <p>En el Instituto Español de Análisis Migratorio (IEAM), hemos trasladado el debate al terreno. Este análisis es el resultado de un taller de inteligencia colectiva celebrado en Bamako, donde reunimos a expertos, autoridades y sociedad civil bajo la regla de Chatham House para diagnosticar la realidad sin filtros.</p>
      <p>El resultado es un hoja de ruta pragmática que desafía las políticas actuales de retorno y cooperación. A continuación, desglosamos los tres pilares fundamentales para transformar la movilidad humana en una oportunidad real.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">La Movilidad Legal y Circular</h3>
      <p>Mali está dispuesto a colaborar en programas estructurados, pero la falta de voluntad política en los países de destino y la gestión institucional dispersa han frenado iniciativas anteriores. Sin embargo, la evidencia demuestra que la circularidad funciona cuando se dan las condiciones adecuadas.</p>
      <p>El programa piloto «Before You Go» con Italia es la prueba de concepto necesaria: 88 beneficiarios formados en origen en sectores clave (agroecología, construcción, salud) y certificados para el mercado laboral italiano.</p>
      <p>Para escalar este modelo, proponemos:</p>
      <ul class="list-disc ml-6 space-y-1 text-slate-700">
        <li><strong>Demanda real:</strong> alinear los programas con las necesidades explícitas de los empleadores europeos.</li>
        <li><strong>Predictibilidad:</strong> trámites de visado claros y flexibles para eliminar el incentivo de las redes de tráfico.</li>
        <li><strong>Ciclo completo:</strong> seguridad desde la preparación previa a la salida hasta el retorno planificado.</li>
      </ul>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Reintegración: superar la visión individualista</h3>
      <p>El enfoque actual de reintegración está fallando. Entregar una ayuda individual a quien ha invertido millones en su viaje no compensa la pérdida de capital ni el «pasivo social» frente a su comunidad. Además, estas ayudas individuales pueden generar tensiones y celos locales si no se gestionan adecuadamente.</p>
      <p>Nuestra propuesta es un cambio de paradigma hacia el arraigo comunitario:</p>
      <ul class="list-disc ml-6 space-y-1 text-slate-700">
        <li><strong>Inversión colectiva:</strong> financiar proyectos que beneficien al municipio, no solo al individuo.</li>
        <li><strong>Seguimiento local:</strong> comités de seguimiento con diáspora y sector privado.</li>
        <li><strong>Financiación por tramos:</strong> ayudas condicionadas a hitos verificables.</li>
      </ul>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">El “Punto Ciego”: Mujeres y Niños</h3>
      <p>Existe un vacío alarmante en la documentación y protección de los perfiles más vulnerables. La literatura actual está fragmentada y carece de datos desagregados, lo que impide diseñar respuestas proporcionales a los riesgos reales que enfrentan mujeres y niños en la ruta.</p>
      <p>Es imperativo documentar y combatir riesgos específicos como la violencia de género, la explotación sexual y los matrimonios forzados. Las políticas públicas deben incorporar indicadores cualitativos y no solo cifras de flujos.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Hacia una Nueva Gobernanza Regional</h3>
      <p>La retirada de Mali de la CEDEAO y la creación de la Alianza de Estados del Sahel (AES) plantean incertidumbres sobre la libre circulación en la región. Es urgente actualizar los acuerdos bilaterales (especialmente con Mauritania y Argelia) para incluir cláusulas operativas de seguridad y gestión de fronteras.</p>
      <p>La conclusión es clara: la resiliencia del Sahel y la seguridad de las fronteras europeas dependen de abandonar el enfoque de “crisis” y adoptar una estrategia de movilidad legal, circular y mutuamente beneficiosa.</p>
      <p class="mt-6 text-sm text-slate-600">Basado en el Policy Paper «Repensar la movilidad entre Mali y Europa», elaborado por Beatriz de León Cobo y el Pr. Bréma Ely Dicko.</p>
    `,
        relatedArticles: [
            {
                id: 'rutas-migratorias-2026',
                title: "Rutas migratorias en 2026: Proyecciones y tendencias",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
                badge: "Análisis",
                metadata: { date: "08 Dic 2025", readTime: "8 min" }
            },
            {
                id: 'visados-humanitarios',
                title: "Policy Brief: Visados humanitarios",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
                badge: "Policy Brief",
                metadata: { date: "01 Dic 2025", readTime: "6 min" }
            },
            {
                id: 'entrevista-migracion-circular',
                title: "Entrevista: 'La migración circular es el futuro de la cooperación'",
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
        subtitle: 'El flujo migratorio hacia España desciende 31% interanual, con fuertes diferencias territoriales entre rutas marítimas y terrestres.',
        heroImage: '/images/boat-atlantic.jpg',
        mainImage: '/images/boat-atlantic.jpg',
        mainImageCaption: 'Patrulla marítima en la ruta atlántica hacia Canarias (2024-2025).',
        publishDate: '15 Sep 2025',
        readTime: '8 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Análisis de datos',
            image: '/team/member-4.jpg',
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
        category: 'Política · UE',
        title: 'Comparativa de partidos políticos ante el Pacto Migratorio',
        subtitle: 'Posicionamiento de los grupos parlamentarios europeos frente a la reforma del asilo.',
        heroImage: "https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=2070&auto=format&fit=crop",
        mainImage: "https://images.unsplash.com/photo-1541872703-74c5963631df?q=80&w=2070&auto=format&fit=crop",
        mainImageCaption: 'Parlamento Europeo en Estrasburgo.',
        publishDate: '10 Nov 2024',
        readTime: '6 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Investigación',
            image: '/team/member-4.jpg',
            bio: 'Unidad de investigación IEAM.'
        },
        pullQuote: 'El consenso político se fractura en los detalles de implementación del Pacto.',
        content: '<p>Análisis detallado de las posturas de los principales partidos europeos respecto al nuevo Pacto de Migración y Asilo.</p>',
        relatedArticles: []
    },
    {
        slug: 'comparativa-frontex-2024',
        type: 'Infografía',
        contentKind: 'infografia',
        category: 'Seguridad · Fronteras',
        title: 'Comparativa: La evolución del mandato de Frontex',
        subtitle: 'Cómo ha cambiado la agencia de fronteras europea en la última década.',
        heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        mainImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        mainImageCaption: 'Operación conjunta en el Mediterráneo.',
        publishDate: '05 Nov 2024',
        readTime: '8 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Investigación',
            image: '/team/member-4.jpg',
            bio: 'Unidad de investigación IEAM.'
        },
        pullQuote: 'Frontex asume más competencias en retorno, pero enfrenta mayores exigencias de derechos fundamentales.',
        content: '<p>Estudio comparativo sobre los recursos, presupuesto y mandato jurídico de Frontex entre 2015 y 2024.</p>',
        relatedArticles: []
    },
    {
        slug: 'seguridad-sahel-2025',
        type: 'Reseña de evento',
        contentKind: 'reseña-evento',
        category: 'Sahel · Canarias',
        title: 'El Sahel y su impacto en los flujos migratorios hacia Canarias',
        subtitle: 'Webinar organizada por el Gobierno de Canarias e IRLab sobre dinámica geopolítica y rutas hacia el archipiélago.',
        heroImage: '/images/evento-sahelmain.png',
        mainImage: '/images/evento-sahelmain.png',
        mainImageCaption: 'Cartel oficial de la jornada distribuido por el Gobierno de Canarias.',
        publishDate: '03 Sep 2025',
        readTime: '7 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Reseña de eventos',
            image: '/team/member-4.jpg',
            bio: 'Unidad de análisis y cobertura de eventos estratégicos del IEAM.'
        },
        pullQuote: 'La presión a Mauritania y Senegal desplaza las salidas hacia zonas menos vigiladas, con mayor riesgo para los viajeros.',
        content: `
      <p>Innovación para la gestión migratoria (IRLab) convocó una jornada para analizar los movimientos geopolíticos en el Sahel y sus repercusiones en los flujos hacia Canarias. El Gobierno de Canarias organizó una webinar abierta el 3 de septiembre.</p>
      <p>Participaron la politóloga Beatriz Mesa, la directora del IEAM Beatriz de León Cobo y el periodista José Naranjo. Presentaron Octavio Caraballo (viceconsejero del Gabinete del Presidente) y Claudia Pérez (IRLab).</p>
      <p>Se abordaron el deterioro político y de seguridad en el Sahel, el impacto en las salidas de embarcaciones hacia Canarias y la necesidad de políticas de cooperación europeas.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Rutas y riesgos</h3>
      <p>El cierre de fronteras en Mauritania y Senegal ha desplazado los puntos de salida hacia Guinea Bissau y Guinea Conakry, incrementando las distancias (más de 2.200 km a El Hierro) y el riesgo para los viajeros.</p>
      <p>El 60% de la población del Sahel tiene menos de 25 años; en 2050 podrían ser 500 millones. Sin oportunidades, la presión migratoria persistirá.</p>
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Conclusiones</h3>
      <p>La migración no ha cesado: las rutas se adaptan al control. Se requiere cooperación UE-África, oportunidades en origen y seguimiento constante de las dinámicas regionales.</p>
      <p class="mt-6 text-sm text-slate-600">Este análisis también fue relevante para entender las conexiones con Mali.</p>
    `,
        relatedArticles: [
            { id: 'cumbre-hungria-crisis-migratoria-2025', title: 'Hungría acoge una cumbre internacional sobre la crisis migratoria europea', image: '/images/evento-hungria.webp', badge: 'Cumbre', metadata: { date: '24-25 Sep 2025', readTime: '—' } }
        ]
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
            image: '/team/member-4.jpg',
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
            image: '/team/member-4.jpg',
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
