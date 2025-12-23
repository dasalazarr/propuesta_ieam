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
        slug: 'movilidad-africa-occidental',
        type: 'Informe',
        type_en: 'Report',
        contentKind: 'policy',
        category: 'Migración · África Occidental',
        category_en: 'Migration · West Africa',
        title: 'Reformar la gobernanza de la movilidad en África Occidental',
        title_en: 'Reforming Mobility Governance in West Africa',
        subtitle: 'Un marco de acción común para integrar la dignidad humana, las realidades económicas y las necesidades de protección.',
        subtitle_en: 'A common action framework to integrate human dignity, economic realities, and protection needs.',
        heroImage: '/images/informeafricaes.png',
        heroImage_en: '/images/informeafricaen.png',
        mainImage: '/images/informeafricaes.png',
        mainImage_en: '/images/informeafricaen.png',
        mainImageCaption: 'Portada del informe: Movilidad África Occidental.',
        mainImageCaption_en: 'Report cover: West Africa Mobility.',
        publishDate: '23 Dec 2025',
        readTime: '15 min',
        author: {
            name: 'Beatriz de León',
            role: 'Directora Ejecutiva',
            role_en: 'Executive Director',
            image: '/team/member-2.jpg',
            bio: 'Directora Ejecutiva del IEAM.',
            bio_en: 'Executive Director of IEAM.'
        },
        materials: [
            {
                label: 'Descargar informe (ES)',
                label_en: 'Download report (ES)',
                url: '/docs/IEAM-PP-2025-002-ES_movilidad-africaoccidental.pdf'
            },
            {
                label: 'Descargar informe (FR)',
                label_en: 'Download report (FR)',
                url: '/docs/IEAM-PP-2025-002-FR_movilidad-africaoccidental.pdf'
            }
        ],
        content: `
            <h2 class="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-4">RESUMEN EJECUTIVO</h2>
            <p>El objetivo de este policy paper es proponer un marco de acción común para transformar la migración irregular en movilidad ordenada a lo largo del eje Senegal-Mali-Mauritania-Europa, integrando en su enfoque de la dignidad humana, las realidades económicas y las necesidades de protección. El documento forma parte de una serie de trabajos del Instituto Español de Análisis Migratorio (IEAM) y es el resultado de un taller de inteligencia colectiva celebrado en Dakar, que reunió a investigadores, representantes gubernamentales, organizaciones internacionales y humanitarias, actores comunitarios, el sector privado y las diásporas. El objetivo del ejercicio era consolidar un diagnóstico compartido, identificar los puntos de vigilancia a corto plazo y formular recomendaciones y proyectos piloto operativos.</p>
            <p>El diagnóstico se inscribe en un contexto de reactivación de la ruta atlántica como vía de acceso principal a la UE, con un repunte de las llegadas a las Canarias desde 2023-2024 y una diversificación de los perfiles (jóvenes, mujeres, niños, nuevos países de origen). No obstante, en 2025, la preeminencia de las salidas de Argelia hacia España sigue siendo, no obstante, significativa. En este panorama en recomposición, la gobernanza de la movilidad adolece menos de una falta de textos que de un déficit de coherencia en la aplicación, de un bilateralismo fragmentador y de efectos de desplazamiento que desvían las rutas hacia otras zonas —a veces más peligrosas— sin reducir los factores estructurales de las salidas.</p>
            
            <h2 class="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-4">MENSAJES ESTRATÉGICOS</h2>
            <ul class="list-disc ml-6 space-y-4 text-slate-700">
                <li><strong>Soberanía mediante la coherencia regional:</strong> establecer una coordinación pragmática centrada en los efectos transfronterizos, con el fin de preservar la buena vecindad, las economías fronterizas y la estabilidad local; centrarse prioritariamente en las redes delictivas (y no en las personas) mediante una cooperación judicial reforzada, y reducir la extorsión en los puestos de control como condición para la eficacia.</li>
                <li><strong>La diáspora y el arraigo comunitario como puente de confianza:</strong> conectar a las asociaciones de la diáspora, los municipios y los actores comunitarios en las zonas de origen para difundir información fiable, apoyar la tutoría y la inversión, reforzar las alternativas locales y fomentar los retornos sostenibles respaldadospor el entorno socioeconómico.</li>
                <li><strong>Anclar la implementación a nivel territorial:</strong> articular mejor la oferta y la demanda a través de empresas, ayuntamientos y servicios descentralizados, para alinear perfiles, puestos, requisitos consulares y trayectorias viables.</li>
                <li><strong>Hacer que la movilidad regular sea creíble y accesible:</strong> reformar las prácticas consulares (previsibilidad, transparencia, comunicación, reducción de plazos) y reducir el espacio que se deja a los intermediarios fraudulentos.</li>
                <li><strong>Datos para tomar decisiones realistas y anticipar las rutas:</strong> institucionalizar una triangulación sistemática y crear un mecanismo de seguimiento ligero con informes periódicos compartidas entre los países de la región.</li>
            </ul>
        `,
        content_en: `
            <h2 class="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-4">EXECUTIVE SUMMARY</h2>
            <p>The objective of this policy paper is to propose a common framework for action to transform irregular migration into orderly mobility along the Senegal-Mali-Mauritania-Europe axis, integrating human dignity, economic realities, and protection needs into its approach. The document is part of a series of works by the Spanish Institute for Migration Analysis (IEAM) and is the result of a collective intelligence workshop held in Dakar, which brought together researchers, government representatives, international and humanitarian organizations, community actors, the private sector, and diasporas. The aim of the exercise was to consolidate a shared diagnosis, identify short-term vigilance points, and formulate recommendations and operational pilot projects.</p>
            <p>The diagnosis takes place in a context of reactivation of the Atlantic route as a main access route to the EU, with a rebound in arrivals to the Canary Islands since 2023-2024 and a diversification of profiles (youth, women, children, new countries of origin). However, in 2025, the preeminence of departures from Algeria to Spain remains significant. In this recomposing landscape, mobility governance suffers less from a lack of texts than from a deficit of coherence in implementation, fragmenting bilateralism, and displacement effects that divert routes to other areas—sometimes more dangerous—without reducing the structural factors of departures.</p>
            
            <h2 class="text-2xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-4">STRATEGIC MESSAGES</h2>
            <ul class="list-disc ml-6 space-y-4 text-slate-700">
                <li><strong>Sovereignty through regional coherence:</strong> establish pragmatic coordination focused on cross-border effects, in order to preserve good neighborliness, border economies, and local stability; focus primarily on criminal networks (and not on people) through reinforced judicial cooperation, and reduce extortion at checkpoints as a condition for effectiveness.</li>
                <li><strong>The diaspora and community rooting as a bridge of trust:</strong> connect diaspora associations, municipalities, and community actors in areas of origin to disseminate reliable information, support mentoring and investment, reinforce local alternatives, and promote sustainable returns backed by the socio-economic environment.</li>
                <li><strong>Anchor implementation at the territorial level:</strong> better articulate supply and demand through companies, municipalities, and decentralized services, to align profiles, positions, consular requirements, and viable pathways.</li>
                <li><strong>Make regular mobility credible and accessible:</strong> reform consular practices (predictability, transparency, communication, reduction of deadlines) and reduce the space left to fraudulent intermediaries.</li>
                <li><strong>Data for realistic decision-making and anticipating routes:</strong> institutionalize systematic triangulation and create a light monitoring mechanism with periodic reports shared among the countries of the region.</li>
            </ul>
        `,
        relatedArticles: []
    },
    {
        slug: 'informe-rutas-migratorias-2025',
        type: 'Informe',
        type_en: 'Report',
        contentKind: 'policy',
        category: 'Migración · Fronteras',
        category_en: 'Migration · Borders',
        title: 'Migraciones y Migrantes: Las Rutas Migratorias Irregulares hacia Europa. España, un estudio de caso',
        title_en: 'Migration and Migrants: Irregular Migratory Routes to Europe. Spain, a Case Study',
        subtitle: 'Un análisis exhaustivo sobre la evolución, dinámicas y desafíos de la migración irregular hacia España en el contexto europeo (2015-2025).',
        subtitle_en: 'A comprehensive analysis of the evolution, dynamics, and challenges of irregular migration to Spain within the European context (2015-2025).',
        heroImage: '/images/IEAM-REP-2025-001-ES_rutas-migratorias.png',
        heroImage_en: '/images/IEAM-REP-2025-001-ES_rutas-migratorias.png',
        mainImage: '/images/IEAM-REP-2025-001-ES_rutas-migratorias.png',
        mainImage_en: '/images/IEAM-REP-2025-001-ES_rutas-migratorias.png',
        mainImageCaption: 'Portada del informe: Migraciones y Migrantes.',
        mainImageCaption_en: 'Report cover: Migrations and Migrants.',
        publishDate: '22 Dec 2025',
        readTime: '25 min',
        author: {
            name: 'Dolores López',
            role: 'Investigadora asociada',
            role_en: 'Associate Researcher',
            image: '/team/member-5.jpg',
            bio: 'Pamplona (España). Dolores López es licenciada en Geografía e Historia y doctora en Geografía por nuestra Universidad, además de contar con un Máster en Demografía por la London School of Economics (LSE). Es catedrática de Geografía Humana en la Facultad de Filosofía y Letras. Sus líneas de investigación se enmarcan en los estudios de familia, mortalidad y migraciones.',
            bio_en: 'Pamplona (Spain). Dolores López holds a degree in Geography and History and a PhD in Geography, in addition to a Master\'s in Demography from the London School of Economics (LSE). She is a Professor of Human Geography. Her research focuses on family studies, mortality, and migrations.'
        },
        content: `
            <h3>Resumen Ejecutivo</h3>
            <p>Las migraciones irregulares hacia Europa han experimentado transformaciones profundas en las últimas décadas. España, en particular, se ha consolidado como uno de los principales países receptores de llegadas irregulares dentro del espacio europeo, en un contexto marcado por la inestabilidad en África occidental, la presión sostenida en las rutas Atlántica y Mediterránea, y la creciente externalización de fronteras por parte de la Unión Europea. En 2025, estas dos rutas que conectan con Canarias y la Península representaron conjuntamente el 22 % del total de llegadas irregulares a la UE. Comprender estas dinámicas resulta esencial para interpretar la evolución reciente del fenómeno y sus implicaciones.</p>
            <p>El propósito de este informe es analizar la evolución de la migración irregular hacia España en la última década, situándola en el marco europeo y examinando sus principales manifestaciones a partir de fuentes oficiales y humanitarias. El estudio ofrece una visión integrada de tendencias y flujos migratorios, rutas utilizadas y desafíos asociados a los sistemas de acogida y protección, subrayando su complejidad, carácter estructural y evolución en el tiempo. Para ello, se estructura en tres ejes: i) migraciones irregulares en el contexto europeo, a partir de los datos de Frontex; ii) migraciones irregulares en España, basadas en información del INE, el Observatorio Permanente de la Inmigración, la OIM y Caminando Fronteras; y iii) procesos de protección internacional, con datos del Ministerio del Interior y CEAR.</p>
            
            <h3>Principales hallazgos</h3>
            
            <h4>1. La migración irregular hacia Europa presenta una dinámica estructural y sostenida en el tiempo</h4>
            <p>La migración irregular hacia Europa constituye un fenómeno persistente y estructural, con variaciones en intensidad y localización asociadas a coyunturas políticas, conflictos armados y cambios en los mecanismos de control fronterizo. Entre 2015 y 2025, más de cuatro millones de personas cruzaron de manera irregular las fronteras exteriores de la Unión Europea.</p>
            <p>Los años 2015 y 2016 concentraron más de la mitad de estas entradas, en relación con la guerra de Siria, mientras que el periodo 2021–2025 muestra un nuevo ciclo de incremento tras el descenso registrado durante la pandemia de COVID-19. En 2025 (hasta agosto), las rutas con mayor peso fueron el Mediterráneo Central (37 %) y el Mediterráneo Oriental (28 %), mientras que las rutas con entrada por España (la Atlántica y la del Mediterráneo Occidental), representaron conjuntamente en torno al 22 % del total de las llegadas irregulares a la UE. La evolución histórica evidencia que el refuerzo del control en determinadas rutas no elimina los flujos, sino que tiende a provocar su reorientación geográfica.</p>
            <p>Los datos de Frontex muestran asimismo una elevada diversidad en los países de origen. En 2025, las principales nacionalidades de las personas que llegaron de forma irregular a Europa fueron Bangladés (13.927 personas), Egipto (11.026), Afganistán (8.935), Mali (6.129), Sudán (5.959) y Eritrea (5.957), entre otras, con patrones de entrada diferenciados según proximidad geográfica y rutas utilizadas.</p>

            <h4>2. La migración irregular hacia España presenta patrones territoriales y temporales heterogéneos</h4>
            <p>En términos cuantitativos, las llegadas irregulares por vía marítima y terrestre representan solo una parte minoritaria del conjunto de la migración internacional hacia España, e incluso del total de personas en situación administrativa irregular. El informe subraya que una proporción significativa de la población extranjera en situación irregular ha accedido al territorio español por vías regulares y ha pasado posteriormente a una situación de irregularidad sobrevenida por la caducidad de visados o permisos de residencia.</p>
            <p>No obstante, las llegadas irregulares por mar y por las fronteras terrestres de Ceuta y Melilla concentran una elevada atención mediática y política. Los datos del Ministerio del Interior muestran oscilaciones significativas desde comienzos del siglo XXI, con un primer pico destacado en 2006, cuando cerca de 40.000 personas llegaron de manera irregular, el 81 % de ellas a través del archipiélago canario. En la actualidad, la procedencia de las personas que llegan en embarcaciones a Canarias incluye principalmente Marruecos, Sáhara Occidental, Mauritania, Senegal y Gambia.</p>
            <p>Tras una década de cifras relativamente contenidas, a partir de 2016 se inicia un incremento progresivo y sostenido de las llegadas por vía marítima, que culmina en máximos históricos en 2019 y, de nuevo, en 2023 y 2024, superando en estos últimos años los niveles registrados en 2006. El año 2024 marca el valor más alto de toda la serie histórica analizada. Los datos provisionales de 2025, hasta mediados de septiembre, muestran cifras inferiores a las de 2024 en la misma fecha, aunque superiores a las de 2023, lo que introduce incertidumbre sobre la evolución final del año.</p>
            <p>Desde el punto de vista territorial, el informe identifica un cambio estructural en la distribución geográfica de las llegadas. Mientras que en los primeros años del periodo analizado la Península y Baleares concentraban la mayor parte de las entradas marítimas, a partir de 2020 se produce una inflexión clara que sitúa a Canarias como principal puerta de entrada, superando el 70 % del total de llegadas marítimas a España desde 2023. Esta concentración se mantiene durante 2024 y buena parte de 2025, si bien en los meses de verano de este último año se observa un repunte relativo de las llegadas a la Península y Baleares y una ligera desaceleración en Canarias.</p>
            <p>Las diferencias territoriales también se reflejan en las vías de entrada y los perfiles de llegada. En Ceuta y Melilla predomina la entrada por vía terrestre, con periodos de mayor presión entre 2017 y 2019, cuando se superaron las 6.000 llegadas anuales. En la actualidad, Ceuta registra un mayor número de entradas que Melilla.</p>

            <h4>3. Centralidad de la ruta atlántica y presión sobre Canarias</h4>
            <p>La presión migratoria sobre Canarias se mantiene elevada desde 2020 y se intensifica especialmente a partir de 2023. El informe muestra que el archipiélago se ha convertido en la principal puerta de llegada de población migrante en situación irregular a España, impulsada por dinámicas estructurales como las salidas desde la fachada atlántica africana, las variaciones en los controles en Marruecos y Mauritania y la percepción de esta ruta como alternativa al Mediterráneo occidental. En 2024, Canarias registró más de 60.000 llegadas, representando más del 70 % del total de llegadas al país.</p>
            <p>Este incremento confirma la persistencia de una de las rutas más peligrosas del mundo, en la que se siguen registrando elevados niveles de muertes y desapariciones. Asimismo, las islas soportan de forma desproporcionada la presión inicial de las llegadas, lo que genera saturación en los dispositivos de primera acogida y dificulta los procesos de derivación hacia la Península.</p>

            <h4>4. Un sistema de gestión y regularización en transformación</h4>
            <p>España se consolidó como país receptor de migración antes de disponer de una política migratoria plenamente desarrollada, lo que dio lugar a sucesivos procesos de regularización extraordinaria para otorgar permisos a personas ya residentes en el país. Estos procesos han configurado un régimen migratorio que combina vías ordinarias con mecanismos de regularización posterior, especialmente a través del arraigo.</p>
            <p>En 2025, más de 328.000 personas residían en España bajo distintas modalidades de arraigo (social, laboral, familiar o formativo), procedentes mayoritariamente de Colombia (25 %), Marruecos (17 %) y Perú (8 %). La introducción del arraigo por formación en 2022 ha abierto nuevos itinerarios de inserción laboral en sectores con déficit de mano de obra, aunque su alcance sigue siendo limitado en relación con el volumen total de personas en situación irregular.</p>

            <h4>5. Cooperación internacional y externalización del control migratorio</h4>
            <p>Las respuestas institucionales a la migración irregular dependen en gran medida de la cooperación internacional. La externalización del control fronterizo constituye un pilar central de la política migratoria española y europea, basada en acuerdos de vigilancia, control y readmisión con países de origen y tránsito. Estos mecanismos han contribuido a una reconfiguración espacial y temporal de los flujos, sin que ello se traduzca necesariamente en un descenso sostenido de las llegadas. En 2023, por ejemplo, Marruecos había recibido más de 500 millones de euros en financiación europea destinada a este ámbito.</p>

            <h4>6. Dificultades estructurales de medición y dimensión humanitaria</h4>
            <p>El informe pone de relieve las dificultades estructurales para cuantificar con precisión la migración irregular, especialmente en lo relativo a las muertes y desapariciones en las rutas hacia España. Asimismo, destaca la estrecha relación entre migración irregular y protección internacional, ya que una parte relevante de las personas que llegan por vías irregulares procede de países en conflicto o con graves situaciones de inestabilidad y potencialmente cumple los requisitos para solicitar asilo.</p>
            <p>Desde 2015 se ha producido un crecimiento significativo de las solicitudes de protección internacional en España, que pasaron de 3.422 en 2011 a 167.366 en 2024. Del total de solicitudes, solo el 69 % llega a ser admitido a trámite y, de estas, más del 60 % finaliza con una resolución desfavorable. En 2024 y 2025, las principales nacionalidades solicitantes en España fueron Venezuela, Colombia y Perú, junto con Mali y Senegal.</p>
            <p>En paralelo, el análisis de los datos del Programa Migrantes Desaparecidos de la OIM y de organizaciones especializadas como Caminando Fronteras muestra que la ruta atlántica concentra un número particularmente elevado de víctimas mortales, en un contexto marcado por travesías más largas, condiciones marítimas adversas y el uso de embarcaciones precarias. No obstante, el informe subraya que las cifras disponibles probablemente infraestiman la magnitud real del fenómeno debido a las limitaciones de los sistemas de registro.</p>

            <p>En conjunto, el informe pone de relieve la complejidad y persistencia de la migración irregular hacia España y su estrecha vinculación con las dinámicas migratorias europeas y globales. Los resultados muestran un fenómeno cambiante en sus manifestaciones territoriales y temporales, pero estructural en su continuidad, marcado por fuertes desigualdades entre regiones de origen, tránsito y destino, y por una elevada presión sobre determinados territorios fronterizos.</p>
            <p>El análisis evidencia también la estrecha relación entre migración irregular, protección internacional y gestión administrativa, así como las limitaciones existentes para registrar plenamente las dimensiones humanas del fenómeno, en particular en lo relativo a las muertes y desapariciones en las rutas migratorias. En este contexto, España aparece como un espacio central de observación, tanto por su posición geográfica como por su papel en los sistemas europeos de control fronterizo, acogida y protección. La experiencia española, analizada en detalle, permite identificar patrones, tensiones y desafíos que trascienden el ámbito nacional y remiten a la necesidad de comprender la migración irregular como un fenómeno complejo, interdependiente y profundamente condicionado por factores internacionales.</p>
        `,
        content_en: `
            <h3>Executive Summary</h3>
            <p>Irregular migration widely Europe has undergone profound transformations in recent decades. Spain, in particular, has consolidated itself as one of the main receiving countries of irregular arrivals within the European space, in a context marked by instability in West Africa, sustained pressure on the Atlantic and Mediterranean routes, and the growing externalization of borders by the European Union. In 2025, these two routes connecting to the Canary Islands and the Peninsula jointly represented 22% of total irregular arrivals to the EU. Understanding these dynamics is essential to interpret the recent evolution of the phenomenon and its implications.</p>
            <p>The purpose of this report is to analyze the evolution of irregular migration to Spain over the last decade, placing it within the European framework and examining its main manifestations based on official and humanitarian sources. The study offers an integrated view of migratory trends and flows, routes used, and challenges associated with reception and protection systems, highlighting their complexity, structural nature, and evolution over time. To this end, it is structured around three axes: i) irregular migrations in the European context, based on Frontex data; ii) irregular migrations in Spain, based on information from the INE, the Permanent Observatory on Immigration, the IOM, and Caminando Fronteras; and iii) international protection processes, with data from the Ministry of the Interior and CEAR.</p>
            
            <h3>Key Findings</h3>
            
            <h4>1. Irregular migration to Europe presents a structural and sustained dynamic over time</h4>
            <p>Irregular migration to Europe constitutes a persistent and structural phenomenon, with variations in intensity and location associated with political conjunctures, armed conflicts, and changes in border control mechanisms. Between 2015 and 2025, more than four million people crossed the external borders of the European Union irregularly.</p>
            <p>The years 2015 and 2016 concentrated more than half of these entries, in relation to the war in Syria, while the 2021–2025 period shows a new cycle of increase following the decrease recorded during the COVID-19 pandemic. In 2025 (until August), the routes with the greatest weight were the Central Mediterranean (37%) and the Eastern Mediterranean (28%), while the routes entering through Spain (the Atlantic and Western Mediterranean) jointly represented around 22% of total irregular arrivals to the EU. Historical evolution shows that reinforcing control on certain routes does not eliminate flows but tends to cause their geographical reorientation.</p>
            <p>Frontex data also show high diversity in countries of origin. In 2025, the main nationalities of people arriving irregularly in Europe were Bangladesh (13,927 people), Egypt (11,026), Afghanistan (8,935), Mali (6,129), Sudan (5,959), and Eritrea (5,957), among others, with differentiated entry patterns according to geographical proximity and routes used.</p>

            <h4>2. Irregular migration to Spain presents heterogeneous territorial and temporal patterns</h4>
            <p>In quantitative terms, irregular arrivals by sea and land represent only a minority part of total international migration to Spain, and even of the total number of people in an irregular administrative situation. The report highlights that a significant proportion of the foreign population in an irregular situation entered Spanish territory through regular channels and subsequently fell into irregularity due to the expiration of visas or residence permits.</p>
            <p>However, irregular arrivals by sea and through the land borders of Ceuta and Melilla attract high media and political attention. Ministry of the Interior data show significant fluctuations since the beginning of the 21st century, with a first notable peak in 2006, when nearly 40,000 people arrived irregularly, 81% of them through the Canary Islands archipelago. Currently, the origin of people arriving by boat in the Canary Islands mainly includes Morocco, Western Sahara, Mauritania, Senegal, and The Gambia.</p>
            <p>After a decade of relatively contained figures, a progressive and sustained increase in arrivals by sea began in 2016, culminating in historical highs in 2019 and, again, in 2023 and 2024, surpassing in these latter years the levels recorded in 2006. The year 2024 marks the highest value of the entire historical series analyzed. Provisional data for 2025, up to mid-September, show figures lower than those of 2024 on the same date, although higher than those of 2023, which introduces uncertainty about the final evolution of the year.</p>
            <p>From a territorial point of view, the report identifies a structural change in the geographical distribution of arrivals. While in the first years of the analyzed period the Peninsula and Balearic Islands concentrated most maritime entries, a clear turning point occurred after 2020, positioning the Canary Islands as the main entry point, surpassing 70% of total maritime arrivals to Spain since 2023. This concentration continues during 2024 and much of 2025, although in the summer months of the latter year, a relative rebound in arrivals to the Peninsula and Balearic Islands and a slight deceleration in the Canary Islands are observed.</p>
            <p>Territorial differences are also reflected in entry routes and arrival profiles. In Ceuta and Melilla, entry by land predominates, with periods of greater pressure between 2017 and 2019, when annual arrivals exceeded 6,000. Currently, Ceuta records a higher number of entries than Melilla.</p>

            <h4>3. Centrality of the Atlantic route and pressure on the Canary Islands</h4>
            <p>Migratory pressure on the Canary Islands has remained high since 2020 and intensified particularly from 2023. The report shows that the archipelago has become the main point of arrival for the migrant population in an irregular situation in Spain, driven by structural dynamics such as departures from the African Atlantic coast, variations in controls in Morocco and Mauritania, and the perception of this route as an alternative to the Western Mediterranean. In 2024, the Canary Islands registered more than 60,000 arrivals, representing more than 70% of total arrivals to the country.</p>
            <p>This increase confirms the persistence of one of the most dangerous routes in the world, where high levels of deaths and disappearances continue to be recorded. Likewise, the islands disproportionately bear the initial pressure of arrivals, generating saturation in first reception facilities and complicating referral processes to the Peninsula.</p>

            <h4>4. A management and regularization system in transformation</h4>
            <p>Spain consolidated itself as a migration-receiving country before having a fully developed migration policy, which led to successive extraordinary regularization processes to grant permits to people already residing in the country. These processes have shaped a migration regime that combines ordinary channels with subsequent regularization mechanisms, especially through "arraigo" (social rooting).</p>
            <p>In 2025, more than 328,000 people resided in Spain under different modalities of arraigo (social, labor, family, or training), coming mostly from Colombia (25%), Morocco (17%), and Peru (8%). The introduction of training arraigo in 2022 opened new pathways for labor insertion in sectors with labor shortages, although its scope remains limited in relation to the total volume of people in an irregular situation.</p>

            <h4>5. International cooperation and externalization of migration control</h4>
            <p>Institutional responses to irregular migration depend largely on international cooperation. The externalization of border control constitutes a central pillar of Spanish and European migration policy, based on surveillance, control, and readmission agreements with countries of origin and transit. These mechanisms have contributed to a spatial and temporal reconfiguration of flows, without necessarily translating into a sustained decrease in arrivals. In 2023, for example, Morocco had received more than 500 million euros in European funding earmarked for this area.</p>

            <h4>6. Structural difficulties of measurement and humanitarian dimension</h4>
            <p>The report highlights structural difficulties in accurately quantifying irregular migration, especially regarding deaths and disappearances on routes to Spain. Likewise, it highlights the close relationship between irregular migration and international protection, as a significant part of the people arriving through irregular channels come from countries in conflict or with serious situations of instability and potentially meet the requirements to apply for asylum.</p>
            <p>Since 2015, there has been significant growth in applications for international protection in Spain, rising from 3,422 in 2011 to 167,366 in 2024. Of the total applications, only 69% are admitted for processing and, of these, more than 60% end with an unfavorable resolution. In 2024 and 2025, the main applicant nationalities in Spain were Venezuela, Colombia, and Peru, together with Mali and Senegal.</p>
            <p>In parallel, the analysis of data from the IOM's Missing Migrants Project and specialized organizations such as Caminando Fronteras shows that the Atlantic route concentrates a particularly high number of fatalities, in a context marked by longer journeys, adverse maritime conditions, and the use of precarious vessels. However, the report stresses that available figures likely underestimate the real magnitude of the phenomenon due to the limitations of registration systems.</p>

            <p>Overall, the report highlights the complexity and persistence of irregular migration to Spain and its close link with European and global migratory dynamics. The results show a phenomenon changing in its territorial and temporal manifestations, but structural in its continuity, marked by strong inequalities between regions of origin, transit, and destination, and by high pressure on certain border territories.</p>
            <p>The analysis also evidences the close relationship between irregular migration, international protection, and administrative management, as well as the existing limitations to fully register the human dimensions of the phenomenon, particularly regarding deaths and disappearances on migratory routes. In this context, Spain appears as a central space of observation, both for its geographical position and for its role in European systems of border control, reception, and protection. The Spanish experience, analyzed in detail, allows identifying patterns, tensions, and challenges that transcend the national sphere and refer to the need to understand irregular migration as a complex, interdependent phenomenon deeply conditioned by international factors.</p>
        `,
        materials: [
            { label: 'Descargar Informe', label_en: 'Download Report', url: '/docs/IEAM-REP-2025-001-ES_rutas-migratorias.pdf' }
        ],
        relatedArticles: [] // Featured article typically doesn't show related immediately below itself in the listings, but for consistency we keep the array
    },

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
        publishDate: '14 Nov 2025',
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
                url: '/docs/IEAM-PP-2025-001-ES_movilidad-mali.pdf'
            },
            {
                label: 'Informe completo (FR)',
                label_en: 'Full Report (FR)',
                url: '/docs/IEAM-PP-2025-001-FR_mobilite-mali.pdf'
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
        type_en: 'Infographic',
        contentKind: 'infografia',
        category: 'Flujos · España',
        category_en: 'Flows · Spain',
        title: 'Comparativa de llegadas migratorias a España por vía terrestre y marítima (2024-2025)',
        title_en: 'Comparison of migratory arrivals to Spain by land and sea (2024-2025)',
        subtitle: 'El flujo migratorio hacia España desciende 31% interanual, con fuertes diferencias territoriales entre rutas marítimas y terrestres.',
        subtitle_en: 'Migratory flow to Spain drops 31% year-on-year, with strong territorial differences between maritime and land routes.',
        heroImage: '/images/infografia-comparativamigratorias-es.png',
        heroImage_en: '/images/infografia-comparativamigratorias-en.png',
        mainImage: '/images/infografia-comparativamigratorias-es.png',
        mainImage_en: '/images/infografia-comparativamigratorias-en.png',
        mainImageCaption: 'Patrulla marítima en la ruta atlántica hacia Canarias (2024-2025).',
        mainImageCaption_en: 'Maritime patrol on the Atlantic route to the Canary Islands (2024-2025).',
        publishDate: '15 Sep 2025',
        readTime: '8 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Análisis de datos',
            role_en: 'Data Analysis',
            image: '/favicon-new.png',
            bio: 'Unidad de datos y análisis territorial del IEAM.',
            bio_en: 'IEAM Data and Territorial Analysis Unit.'
        },
        pullQuote: 'La presión migratoria persiste y las rutas se adaptan al control fronterizo y a la cooperación internacional.',
        pullQuote_en: 'Migration pressure persists and routes are adapting to border control and international cooperation.',
        materials: [
            {
                label: 'Descargar infografía (ES)',
                label_en: 'Download infographic (ES)',
                url: '/docs/IEAM-INF-2025-001-ES_llegadas-sep.pdf'
            },
            {
                label: 'Descargar infografía (EN)',
                label_en: 'Download infographic (EN)',
                url: '/docs/IEAM-INF-2025-001-EN_arrivals-sep.pdf'
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
        content_en: `
      <p>According to the latest data from the Ministry of the Interior, the flow of migrants to Spain fell by 31% between 1 January and 15 September 2025 compared to the same period in 2024: 26,211 people vs. 37,970.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Overall decline, with regional differences</h3>
      <p>Arrivals by sea fell by 34% (35,882 to 23,583). The Canary Islands accounted for most of the decline: 26,758 to 12,487 (-53.3%). Ceuta fell by 68.4% and Melilla rose by 19%. The Balearic Islands rose by 70.9%, a sign of a partial shift of routes to the central Mediterranean. Intercepted boats: -17.9% (1,122 to 921).</p>
      <p>By land, the trend is the opposite: Ceuta +18.5% (2,026 to 2,401) and Melilla +266% (62 to 227), pointing to a resurgence of border attempts, especially in Melilla.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Factors explaining the decline</h3>
      <ul class="list-disc ml-6 space-y-1 text-slate-700">
        <li>Joint Mauritania-Spain patrols reinforce Atlantic surveillance.</li>
        <li>Stricter controls in Mauritania and an increase in detentions/expulsions to Mali and Senegal.</li>
        <li>Cooperation with Senegal and Mauritania to contain routes.</li>
      </ul>
      <p>Even so, departures from Guinea Conakry and Guinea-Bissau are increasing, suggesting that the decline may be temporary.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Conclusion</h3>
      <p>The provisional balance for 2025 shows a lower flow by sea, but pressure continues and routes are adapting. Constant monitoring is key to anticipating upturns and designing effective and sustainable policies.</p>
    `,
        relatedArticles: []
    },
    {
        slug: 'comparativa-partidos-politicos-2024',
        type: 'Infografía',
        type_en: 'Infographic',
        contentKind: 'infografia',
        category: 'Política · España',
        category_en: 'Politics · Spain',
        title: 'Comparativa de partidos políticos ante el Pacto Migratorio',
        title_en: 'Comparison of political parties on the Migration Pact',
        subtitle: 'Síntesis comparada de las propuestas en materia de inmigración de los principales partidos políticos en España (2025).',
        subtitle_en: 'Comparative overview of immigration proposals from Spain\'s main political parties (2025).',
        heroImage: "/images/infografia-partidospoliticoses.png",
        heroImage_en: "/images/infografia-partidospoliticosen.png",
        mainImage: "/images/infografia-partidospoliticoses.png",
        mainImage_en: "/images/infografia-partidospoliticosen.png",
        mainImageCaption: 'Comparativa de propuestas migratorias de partidos políticos en España.',
        mainImageCaption_en: 'Comparison of migration proposals from political parties in Spain.',
        publishDate: '20 Oct 2025',
        readTime: '6 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Investigación',
            role_en: 'Research',
            image: '/favicon-new.png',
            bio: 'Investigación y análisis de políticas públicas.',
            bio_en: 'Research and analysis of public policies.'
        },
        pullQuote: 'El consenso político se fractura en los detalles de implementación del Pacto.',
        materials: [
            {
                label: 'Descargar infografía (ES)',
                label_en: 'Download infographic (ES)',
                url: '/docs/IEAM-INF-2025-002-ES_partidos-pacto.pdf'
            },
            {
                label: 'Descargar infografía (EN)',
                label_en: 'Download infographic (EN)',
                url: '/docs/IEAM-INF-2025-002-EN_parties-pact.pdf'
            }
        ],
        content: `
      <p>En IEAM – Instituto Español de Análisis Migratorio presentamos una síntesis comparada de las propuestas en materia de inmigración incluidas en los programas nacionales (2025) de los principales partidos políticos en España. La infografía identifica diferencias claras en modelo, prioridades y enfoque regulatorio que previsiblemente marcarán el debate migratorio en los próximos meses.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Cuatro enfoques, cuatro lógicas de política migratoria</h3>
      
      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-2">1) PSOE: ordenación, vías legales e integración con reformas</h4>
      <p>El programa socialista se articula en torno a una migración ordenada, segura y humanitaria, con énfasis en derechos humanos y cooperación internacional. Plantea reforzar la contratación en origen, avanzar en la reforma del Reglamento de Extranjería (arraigo laboral, residencia por formación) y desplegar un Plan Estatal de Integración y Convivencia con recursos para CCAA y ayuntamientos. Incluye, además, el cierre progresivo de los CIE, sustituyéndolos por alternativas de acogida.</p>
      
      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-2">2) PP: control, coordinación institucional y visado por puntos</h4>
      <p>El Partido Popular propone un enfoque de gobernanza y control, con la creación de una autoridad única para coordinar la política migratoria. Sitúa el empleo como vía principal de entrada, introduciendo un visado por puntos basado en mérito e integración, y rechaza regularizaciones masivas. También refuerza el control de fronteras (medios, tecnología y cooperación europea), y vincula ayudas sociales a residencia legal y “esfuerzo” de integración.</p>
      
      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-2">3) Sumar: regularización amplia y garantías de derechos</h4>
      <p>Sumar plantea una agenda centrada en regularización e integración, con una regularización extraordinaria inmediata de alrededor de 500.000 personas y una reforma integral del marco legal para habilitar un procedimiento de regularización permanente y simplificar trámites. Defiende el cierre de los CIE y apuesta por medidas de inclusión (incluida la dimensión digital y de accesibilidad administrativa).</p>
      
      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-2">4) VOX: expulsiones, restricción de ayudas y endurecimiento del sistema</h4>
      <p>VOX adopta un enfoque de máxima disuasión: expulsión inmediata de quienes entren irregularmente y prioridad para expulsar también a residentes legales que cometan delitos graves o reincidan. Rechaza regularizaciones, propone suprimir ayudas a personas en situación irregular y eliminar subvenciones a ONG vinculadas (según su planteamiento) al rescate o asistencia migratoria. Incluye medidas específicas sobre MENAs y condiciona cooperación al desarrollo a la colaboración en devoluciones y control fronterizo.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Ejes que estructuran el debate</h3>
      <p>Mirado en conjunto, la comparación permite identificar cuatro ejes que separan propuestas:</p>
      <ul class="list-disc ml-6 space-y-2 text-slate-700">
        <li>Vías legales vs. disuasión/expulsión (y el peso del empleo como puerta de entrada).</li>
        <li>Regularización (extraordinaria o permanente) vs. rechazo total de regularizaciones.</li>
        <li>Integración y recursos públicos (planes, educación y empleo) vs. condicionalidad estricta de ayudas.</li>
        <li>Modelo institucional y de control (autoridad única, refuerzo fronterizo, papel europeo y Frontex, CIE sí/no).</li>
      </ul>
      <p class="mt-6">En IEAM seguiremos actualizando este análisis comparado para contribuir a un debate público más informado y útil para la toma de decisiones.</p>
    `,
        content_en: `
      <p>At IEAM – Spanish Institute for Migration Analysis, we present a comparative summary of the immigration proposals included in the national programs (2025) of the main political parties in Spain. The infographic identifies clear differences in model, priorities, and regulatory approach that are likely to shape the migration debate in the coming months.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Four approaches, four migration policy rationales</h3>
      
      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-2">1) PSOE: order, legal channels, and integration with reforms</h4>
      <p>The socialist program is structured around orderly, safe, and humanitarian migration, with an emphasis on human rights and international cooperation. It proposes strengthening recruitment at source, advancing the reform of the Immigration Regulations (work permits, residence for training) and deploying a State Plan for Integration and Coexistence with resources for autonomous communities and local councils. It also includes the progressive closure of the CIE, replacing them with reception alternatives.</p>
      
      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-2">2) PP: control, institutional coordination, and points-based visas</h4>
      <p>The Popular Party proposes an approach based on governance and control, with the creation of a single authority to coordinate migration policy. It places employment as the main route of entry, introducing a points-based visa system based on merit and integration, and rejects mass regularizations. It also strengthens border control (resources, technology, and European cooperation) and links social assistance to legal residence and “efforts” at integration.</p>
      
      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-2">3) Sumar: broad regularization and guarantees of rights</h4>
      <p>Sumar proposes an agenda focused on regularization and integration, with immediate extraordinary regularization of around 500,000 people and a comprehensive reform of the legal framework to enable a permanent regularization procedure and simplify procedures. It advocates the closure of the CIE (Immigrant Detention Centers) and is committed to inclusion measures (including the digital dimension and administrative accessibility).</p>
      
      <h4 class="text-lg font-bold text-slate-800 mt-6 mb-2">4) VOX: expulsions, restriction of aid, and tightening of the system</h4>
      <p>VOX adopts an approach of maximum deterrence: immediate expulsion of those who enter irregularly and priority for the expulsion of legal residents who commit serious crimes or are repeat offenders. It rejects regularization, proposes abolishing aid to people in an irregular situation, and eliminating subsidies to NGOs linked (according to its approach) to rescue or migration assistance. It includes specific measures on unaccompanied foreign minors and makes development cooperation conditional on collaboration in returns and border control.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Axis structuring the debate</h3>
      <p>Taken together, the comparison allows us to identify four axes that separate the proposals:</p>
      <ul class="list-disc ml-6 space-y-2 text-slate-700">
        <li>Legal channels vs. deterrence/expulsion (and the importance of employment as a gateway).</li>
        <li>Regularization (extraordinary or permanent) vs. total rejection of regularizations.</li>
        <li>Integration and public resources (plans, education, and employment) vs. strict conditionality of aid.</li>
        <li>Institutional and control model (single authority, border reinforcement, European role and Frontex, CIE yes/no).</li>
      </ul>
      <p class="mt-6">At IEAM, we will continue to update this comparative analysis to contribute to a more informed and useful public debate for decision-making.</p>
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
        heroImage: "/images/infografia-frontexes.png",
        heroImage_en: "/images/infografia-frontexen.png",
        mainImage: "/images/infografia-frontexes.png",
        mainImage_en: "/images/infografia-frontexen.png",
        mainImageCaption: 'Operación conjunta en el Mediterráneo.',
        publishDate: '05 Nov 2024',
        readTime: '8 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Investigación',
            role_en: 'Research',
            image: '/favicon-new.png',
            bio: 'Unidad de investigación IEAM.',
            bio_en: 'IEAM Research Unit.'
        },
        materials: [
            {
                label: 'Infografía (ES)',
                label_en: 'Infographic (ES)',
                url: '/docs/IEAM-INF-2024-001-ES_frontex-mandato.pdf'
            },
            {
                label: 'Infographic (EN)',
                label_en: 'Infographic (EN)',
                url: '/docs/IEAM-INF-2024-001-EN_frontex-mandate.pdf'
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
        title: 'Sahel–España: cómo se transforman las rutas hacia Canarias, la península y las islas',
        subtitle: 'La directora del IEAM analiza cómo la presión a Mauritania y la inestabilidad del Sahel influyen en los flujos hacia Canarias.',
        heroImage: '/images/prensa-diciembre2025.png',
        mainImage: '/images/prensa-diciembre2025.png',
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
    },
    {
        slug: 'comparativa-llegadas-espana-nov-2025',
        type: 'Infografía',
        type_en: 'Infographic',
        contentKind: 'infografia',
        category: 'Flujos · España',
        category_en: 'Flows · Spain',
        title: 'Comparativa de llegadas migratorias a España por vía terrestre y marítima (2024-2025) Actualización Noviembre',
        title_en: 'Comparison of migratory arrivals to Spain by land and sea (2024-2025) November Update',
        subtitle: 'El flujo migratorio hacia España desciende 41% hasta mediados de noviembre, con una reconfiguración de rutas hacia el Mediterráneo.',
        subtitle_en: 'Migratory flow to Spain drops 41% by mid-November, with a reconfiguration of routes towards the Mediterranean.',
        heroImage: '/images/infografia-comparativamigratorias-es-nov2025.png',
        heroImage_en: '/images/infografia-comparativamigratorias-en-nov2025.png',
        mainImage: '/images/infografia-comparativamigratorias-es-nov2025.png',
        mainImage_en: '/images/infografia-comparativamigratorias-en-nov2025.png',
        mainImageCaption: 'Evolución de llegadas migratorias a España (Ene-Nov 2025).',
        mainImageCaption_en: 'Evolution of migratory arrivals to Spain (Jan-Nov 2025).',
        publishDate: '25 Nov 2025',
        readTime: '5 min',
        author: {
            name: 'Equipo IEAM',
            role: 'Análisis de datos',
            role_en: 'Data Analysis',
            image: '/favicon-new.png',
            bio: 'Unidad de datos y análisis territorial del IEAM.',
            bio_en: 'IEAM Data and Territorial Analysis Unit.'
        },
        pullQuote: 'Baja el flujo total, pero las rutas se ajustan: el Mediterráneo gana peso y la presión se redistribuye.',
        pullQuote_en: 'The total flow is decreasing, but the routes are adjusting: the Mediterranean is gaining weight and the pressure is being redistributed.',
        materials: [
            {
                label: 'Descargar infografía (ES)',
                label_en: 'Download infographic (ES)',
                url: '/docs/IEAM-INF-2025-003-ES_llegadas-nov.pdf'
            },
            {
                label: 'Descargar infografía (EN)',
                label_en: 'Download infographic (EN)',
                url: '/docs/IEAM-INF-2025-003-EN_arrivals-nov.pdf'
            }
        ],
        content: `
      <p>Según los últimos datos del Ministerio del Interior, el flujo migratorio hacia España cayó un 41% entre el 1 de enero y el 15 de noviembre de 2025 frente al mismo periodo de 2024: 31.742 personas vs. 54.216 (22.474 menos).</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Descenso general, con cambios claros por ruta</h3>
      <p>Por vía marítima, las llegadas bajan en torno a un 45%: 51.849 → 28.362. La caída se explica sobre todo por Canarias, que pasa de 39.713 → 14.690 (-63%).</p>
      <p>A la vez, se confirma un desplazamiento relativo hacia el Mediterráneo:</p>
      <ul class="list-disc ml-6 space-y-1 text-slate-700">
        <li><strong>Península:</strong> 7.408 → 6.929 (descenso leve).</li>
        <li><strong>Baleares:</strong> 4.717 → 6.683 (+41,7%), señal de mayor peso de la ruta mediterránea.</li>
        <li><strong>Ceuta (marítima):</strong> 28 → 5 (-82,1%).</li>
        <li><strong>Melilla (marítima):</strong> 21 → 25 (+19%).</li>
      </ul>
      <p>Además, disminuye el número total de embarcaciones: 1.539 → 1.122 (-27,1%).</p>
      <p>Por vía terrestre, la foto es mixta: Ceuta: 3.101 → 2.281 (descenso). Melilla: 86 → 279 (+224%), repunte muy significativo.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Claves para entender la reconfiguración</h3>
      <p>La infografía apunta a varios elementos que ayudan a interpretar el cambio:</p>
      <ul class="list-disc ml-6 space-y-1 text-slate-700">
        <li>Aumentan las llegadas de somalíes a las costas españolas (posible indicador de nuevos enlaces de tránsito).</li>
        <li>El punto de partida más habitual desde el Sahel se desplaza a Argelia, reforzando el papel del Mediterráneo.</li>
        <li>Más presión en el corredor Mali–Mauritania por restricciones y expulsiones, mientras el Mediterráneo se refuerza como principal vía de entrada.</li>
      </ul>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Conclusión</h3>
      <p>El balance provisional hasta el 15 de noviembre de 2025 refleja una reducción fuerte del total, pero también una adaptación de rutas: menos Canarias, más señales de Mediterráneo y un repunte terrestre en Melilla que conviene vigilar de cerca.</p>
    `,
        content_en: `
      <p>According to the latest data from the Ministry of the Interior, the flow of migrants to Spain fell by 41% between January 1 and November 15, 2025, compared to the same period in 2024: 31,742 people vs. 54,216 (22,474 fewer).</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Overall decline, with clear changes by route</h3>
      <p>By sea, arrivals fell by around 45%: 51,849 → 28,362. The decline is mainly explained by the Canary Islands, which went from 39,713 → 14,690 (-63%).</p>
      <p>At the same time, a relative shift towards the Mediterranean is confirmed:</p>
      <ul class="list-disc ml-6 space-y-1 text-slate-700">
        <li><strong>Peninsula:</strong> 7,408 → 6,929 (slight decrease).</li>
        <li><strong>Balearic Islands:</strong> 4,717 → 6,683 (+41.7%), a sign of the greater importance of the Mediterranean route.</li>
        <li><strong>Ceuta (maritime):</strong> 28 → 5 (-82.1%).</li>
        <li><strong>Melilla (maritime):</strong> 21 → 25 (+19%).</li>
      </ul>
      <p>In addition, the total number of vessels has decreased: 1,539 → 1,122 (-27.1%).</p>
      <p>By land, the picture is mixed: Ceuta: 3,101 → 2,281 (decrease). Melilla: 86 → 279 (+224%), a very significant increase.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Keys to understanding the reconfiguration</h3>
      <p>The infographic points to several elements that help to interpret the change:</p>
      <ul class="list-disc ml-6 space-y-1 text-slate-700">
        <li>There has been an increase in the number of Somalis arriving on Spanish shores (a possible indicator of new transit links).</li>
        <li>The most common point of departure from the Sahel has shifted to Algeria, reinforcing the role of the Mediterranean.</li>
        <li>There is more pressure on the Mali-Mauritania corridor due to restrictions and expulsions, while the Mediterranean is becoming the main route of entry.</li>
      </ul>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Conclusion</h3>
      <p>The provisional balance up to November 15, 2025, reflects a sharp reduction in the total, but also an adaptation of routes: fewer Canary Islands, more signs of the Mediterranean, and a land-based upturn in Melilla that should be closely monitored.</p>
    `,
        relatedArticles: []
    }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
    return articles.find(article => article.slug === slug);
};
