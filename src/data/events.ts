export interface EventAgendaItem {
  time?: string;
  title: string;
  speaker?: string;
}

export interface EventSpeaker {
  name: string;
  role: string;
  group?: string;
  group_en?: string;
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
  heroImage_en?: string;
  highlightImage?: string;
  summary: string;
  summary_en?: string;
  content?: string;
  content_en?: string;
  agenda: EventAgendaItem[];
  speakers: EventSpeaker[];
}

export const events: EventItem[] = [
  {
    slug: "cumbre-budapest-2024",
    title: "Cambiar el discurso, frenar el flujo y proteger Europa",
    title_en: "Changing the Narrative, Stopping the Flow, and Protecting Europe",
    subtitle: "La respuesta europea ante la crisis migratoria: lecciones de una década.",
    subtitle_en: "The European response to the migration crisis: lessons from a decade.",
    category: "Cumbre",
    category_en: "Summit",
    date: "24 Sep 2025",
    location: "Szeged, Hungría",
    location_en: "Szeged, Hungary",
    format: "Presencial",
    format_en: "In-person",
    heroImage: "/images/evento-hungria.jpg",
    summary: "En 2015, más de un millón de solicitantes de asilo llegaron a Europa desde Oriente Medio y África. Mientras algunos gobiernos los acogieron, Hungría fue el primer Estado miembro de la UE en advertir que la migración irregular a gran escala suponía un riesgo para la soberanía, la estabilidad, la seguridad y la cohesión social de Europa. El gobierno húngaro respondió cerrando sus fronteras y aprobando un sólido marco legal para frenar la entrada, destinando recursos significativos a desmantelar las redes criminales que la facilitaban.\n\nUna década después, este debate sigue abierto. Las medidas adoptadas por Hungría han sido objeto de críticas de la Comisión Europea, gobiernos favorables a la migración y ONG, pero también han influido en la opinión pública europea. El aumento de los atentados terroristas en Europa occidental, la aparición de “zonas de exclusión” y el debilitamiento de los estados de bienestar han reactivado el debate político en países que antes respaldaban la migración masiva.\n\nLa Cumbre MCC–MRI, que se celebrará en Szeged —en la frontera sur de Hungría—, reunirá a responsables políticos, investigadores y expertos internacionales para analizar los aprendizajes de la última década, compartir buenas prácticas y debatir sobre cómo la Unión Europea puede reforzar sus políticas de gestión migratoria. El Instituto Español de Análisis de la Migración (IEAM) estará representado especialmente en la sesión dedicada al Sahel.",
    summary_en: "In 2015, over a million asylum seekers arrived in Europe from the Middle East and Africa. While some governments welcomed them, Hungary was the first EU Member State to warn that large-scale irregular migration posed a risk to Europe's sovereignty, stability, security, and social cohesion. The Hungarian government responded by closing its borders and passing a robust legal framework to stem the flow, dedicating significant resources to dismantling the criminal networks facilitating it.\n\nA decade later, this debate remains open. Hungary's measures have faced criticism from the European Commission, pro-migration governments, and NGOs, yet they have also influenced European public opinion. The rise involved in terrorist attacks in Western Europe, the emergence of 'no-go zones,' and the weakening of welfare states have revived the political debate in countries that previously supported mass migration.\n\nThe MCC–MRI Summit, to be held in Szeged—on Hungary's southern border—will gather policymakers, researchers, and international experts to analyze lessons from the last decade, share best practices, and discuss how the European Union can strengthen its migration management policies. The Spanish Institute for Migration Analysis (IEAM) will be specially represented in the session dedicated to the Sahel.",
    agenda: [
      { time: "24 SEP - 09:00", title: "Apertura", speaker: "Balázs Orbán, Tamás Dezső" },
      { time: "09:30", title: "La crisis migratoria y Hungría", speaker: "Bálint Pásztor, Zsolt Barthel-Rúzsa, Mons. László Kiss-Rigó" },
      { time: "11:15", title: "Crisis en Europa: lecciones y buenas prácticas", speaker: "Juan Soto Gómez (Fortius), Expertos de Alemania, Italia, Austria" },
      { time: "13:45", title: "Cambiar el discurso europeo sobre migración", speaker: "Rocío de Meer, Rep. de Hungría, Portugal y Bélgica" },
      { time: "15:00", title: "Perspectiva estadounidense", speaker: "Heritage Foundation, Center for Immigration Studies, Dept. Estado EE.UU." },
      { time: "16:45", title: "De la demografía al terrorismo", speaker: "Expertos de Alemania, Reino Unido y Francia" },
      { time: "25 SEP - 09:30", title: "Crisis en Cuerno de África y Oriente Medio", speaker: "Exresponsables de EE.UU., Somalia y Egipto" },
      { time: "10:45", title: "El Sahel y la migración hacia Europa", speaker: "Beatriz de León Cobo (IEAM), Investigadores de Hungría y Polonia" },
      { time: "13:00", title: "Visita de campo", speaker: "Centro operativo de la Policía Húngara y vallado fronterizo" }
    ],
    speakers: [
      { name: "Viktor Mársai", role: "Migration Research Institute (Anfitrión)" },
      { name: "Beatriz de León", role: "Directora Ejecutiva IEAM" },
      { name: "Balázs Orbán", role: "Director Político PM Hungría" },
      { name: "Rocío de Meer", role: "Congreso de los Diputados (España)" }
    ]
  },
  {
    slug: "dialogo-dakar-2024",
    title: "Políticas regionales, desplazados y migrantes",
    title_en: "Regional Policies, Displaced Persons and Migrants",
    subtitle: "Taller de inteligencia colectiva (Senegal-Malí-Mauritania ↔ Europa).",
    subtitle_en: "Collective intelligence workshop (Senegal-Mali-Mauritania ↔ Europe).",
    category: "Diálogo",
    category_en: "Dialogue",
    date: "23 Sep 2025",
    location: "Dakar, Senegal",
    location_en: "Dakar, Senegal",
    format: "Chatham House",
    format_en: "Chatham House",
    heroImage: "/images/evento-dakares.png",
    heroImage_en: "/images/evento-dakaren.png",
    summary: "Taller de inteligencia colectiva en Dakar para diagnosticar dinámicas de movilidad en el eje Senegal-Malí-Mauritania-Europa y formular recomendaciones.",
    summary_en: "Collective intelligence workshop in Dakar to diagnose mobility dynamics in the Senegal-Mali-Mauritania-Europe axis and formulate recommendations.",
    content: `
      <p>El próximo 23 de septiembre, la ciudad de Dakar (Senegal) acogerá el taller de inteligencia colectiva <b>«Políticas regionales, desplazados y migrantes (Senegal-Malí-Mauritania ↔ Europa)»</b>. El encuentro, de carácter cerrado y con una duración prevista de dos horas, reunirá a un grupo reducido de actores estratégicos —investigadores, representantes institucionales, agencias internacionales, organizaciones de la sociedad civil, humanitarias y miembros de la diáspora— con el fin de generar un espacio de reflexión y co-construcción.</p>
      <p>La iniciativa busca elaborar un diagnóstico actualizado de las dinámicas de movilidad en el eje Senegal-Malí-Mauritania-Europa, identificar los principales factores de riesgo y formular recomendaciones operativas dirigidas a organizaciones no gubernamentales, organismos internacionales, autoridades locales y nacionales, así como a los socios europeos más directamente implicados, entre ellos la Unión Europea y España.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Contexto</h3>
      <p>La ruta atlántica de África Occidental ha recuperado en los últimos años una posición central en los flujos migratorios hacia la Unión Europea, con un aumento sostenido de llegadas a Canarias desde 2023-2024 y una mayor diversificación de perfiles migratorios (jóvenes, mujeres, niños y nuevos países de origen). Las costas de Senegal y Mauritania concentran actualmente buena parte de las salidas, mientras que la población maliense constituye uno de los grupos más representados.</p>
      <p>Estos procesos se ven condicionados por las transformaciones regionales vinculadas a los reajustes en materia de seguridad en el Sahel, la recomposición de los marcos de integración y los acuerdos operativos bilaterales. Dichos factores afectan directamente a la libertad de circulación intrarregional, a las economías locales y a las dinámicas de las redes de tráfico.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Contenidos y resultados</h3>
      <p>El taller abordará aspectos prioritarios como la situación de desplazados internos y refugiados, los efectos de las reestructuraciones regionales sobre la movilidad y la protección, las prácticas de cooperación entre Estados y los elementos que favorecen la movilidad ordenada y segura.</p>
      <p>Como resultado, se elaborará un <b>policy paper</b> que recogerá conclusiones y propuestas concretas diferenciadas por tipo de actor: autoridades nacionales y locales, organizaciones internacionales, ONG, Unión Europea, España, sector privado, diásporas y colectividades locales.</p>
      <p>El encuentro se desarrollará bajo las reglas de <b>Chatham House</b>, garantizando un marco de intercambio seguro y constructivo que permita avanzar en recomendaciones compartidas.</p>
      <p class="mt-6"><i>Para más información: <a href="mailto:beatriz.deleoncobo@ieam.es" class="text-blue-600 hover:underline">beatriz.deleoncobo@ieam.es</a></i></p>
    `,
    content_en: `
      <p>On September 23, the city of Dakar (Senegal) will host the collective intelligence workshop <b>"Regional Policies, Displaced Persons and Migrants (Senegal-Mali-Mauritania ↔ Europe)"</b>. The meeting, which will be closed-door and is expected to last two hours, will bring together a small group of strategic actors—researchers, institutional representatives, international agencies, civil society organizations, humanitarian groups, and diaspora members—to generate a space for reflection and co-construction.</p>
      <p>The initiative seeks to develop an updated diagnosis of mobility dynamics in the Senegal-Mali-Mauritania-Europe axis, identify key risk factors, and formulate operational recommendations aimed at non-governmental organizations, international bodies, local and national authorities, as well as the most directly involved European partners, including the European Union and Spain.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Context</h3>
      <p>The West African Atlantic route has regained a central position in migratory flows towards the European Union in recent years, with a sustained increase in arrivals to the Canary Islands since 2023-2024 and greater diversification of migratory profiles (youth, women, children, and new countries of origin). The coasts of Senegal and Mauritania currently account for a large portion of departures, while the Malian population constitutes one of the most represented groups.</p>
      <p>These processes are conditioned by regional transformations linked to security realignments in the Sahel, the recomposition of integration frameworks, and bilateral operational agreements. These factors directly affect intra-regional freedom of movement, local economies, and the dynamics of trafficking networks.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Contents and Results</h3>
      <p>The workshop will address priority aspects such as the situation of internally displaced persons and refugees, the effects of regional restructuring on mobility and protection, cooperation practices between States, and elements that favor orderly and safe mobility.</p>
      <p>As a result, a <b>policy paper</b> will be produced, gathering conclusions and concrete proposals differentiated by type of actor: national and local authorities, international organizations, NGOs, the European Union, Spain, the private sector, diasporas, and local communities.</p>
      <p>The meeting will be held under the <b>Chatham House Rule</b>, guaranteeing a safe and constructive exchange framework that allows for progress on shared recommendations.</p>
      <p class="mt-6"><i>For more information: <a href="mailto:beatriz.deleoncobo@ieam.es" class="text-blue-600 hover:underline">beatriz.deleoncobo@ieam.es</a></i></p>
    `,
    agenda: [],
    speakers: []
  },
  {
    slug: "taller-bamako-2024",
    title: "Taller de Inteligencia Colectiva en Bamako",
    title_en: "Collective Intelligence Workshop in Bamako",
    subtitle: "Movilidad legal, reintegración comunitaria y gobernanza en Malí.",
    subtitle_en: "Legal mobility, community reintegration, and governance in Mali.",
    category: "Taller",
    category_en: "Workshop",
    date: "19 Sep 2025",
    location: "Bamako, Malí",
    location_en: "Bamako, Mali",
    format: "Chatham House",
    format_en: "Chatham House",
    heroImage: "/images/evento-bamakoes.png",
    heroImage_en: "/images/evento-bakamoen.png",
    summary: "El IEAM celebra en Bamako un taller de inteligencia colectiva para co-construir un diagnóstico sobre movilidad y definir recomendaciones prácticas.",
    summary_en: "IEAM holds a collective intelligence workshop in Bamako to co-construct a mobility diagnosis and define practical recommendations.",
    content: `
      <p><b>Bamako (Malí), 19 de septiembre de 2025</b> – El Instituto Español de Análisis Migratorio (IEAM) celebrará el próximo jueves 19 de septiembre un taller de inteligencia colectiva centrado en la movilidad legal, la reintegración comunitaria y la gobernanza de las rutas migratorias en Malí.</p>
      <p>El encuentro, que tendrá lugar en la capital maliense de 10:00 a 12:30 horas, reunirá a un grupo reducido de expertos, autoridades y representantes de la sociedad civil bajo la regla de <b>Chatham House</b>, que garantiza la confidencialidad de las intervenciones para fomentar un debate abierto.</p>
      <p>El objetivo es co-construir un diagnóstico compartido sobre las dinámicas de movilidad en Malí y definir recomendaciones prácticas a seis y doce meses, dirigidas a autoridades locales y nacionales, socios internacionales, ONG y actores económicos.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Tres ejes de trabajo</h3>
      <p>El taller se articulará en torno a tres líneas de debate:</p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><b>Movilidad legal y circular:</b> análisis de modelos existentes, obstáculos, pilotos por sectores, papel de las diásporas y mecanismos de seguimiento del “ida y vuelta”.</li>
        <li><b>Reintegración de jóvenes y retornados:</b> umbrales de apoyo, paquetes de servicios y modelos colectivos como cooperativas o proyectos agrícolas.</li>
        <li><b>Coordinación local y gestión regional:</b> alternativas a la migración irregular, opciones económicas, sanciones focalizadas y gestión de retornos en la subregión.</li>
      </ul>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Resultado</h3>
      <p>Como producto final se elaborará un <b>policy paper de 10 a 12 páginas</b> con recomendaciones diferenciadas para gobiernos, organizaciones internacionales, sociedad civil, sector privado y diásporas.</p>
      <p>El IEAM ha invitado a investigadores, responsables ministeriales, agencias internacionales y líderes comunitarios a aportar datos y experiencias de terreno para garantizar orientaciones realistas y aplicables.</p>
      <p class="mt-6"><i>Para más información, se puede contactar con la organización a través del correo <a href="mailto:beatriz.deleoncobo@ieam.es" class="text-blue-600 hover:underline">beatriz.deleoncobo@ieam.es</a>.</i></p>
    `,
    content_en: `
      <p><b>Bamako (Mali), September 19, 2025</b> – The Spanish Institute for Migration Analysis (IEAM) will hold a collective intelligence workshop next Thursday, September 19, focusing on legal mobility, community reintegration, and the governance of migration routes in Mali.</p>
      <p>The meeting, taking place in the Malian capital from 10:00 to 12:30, will gather a small group of experts, authorities, and civil society representatives under the <b>Chatham House Rule</b>, which ensures the confidentiality of interventions to foster open debate.</p>
      <p>The objective is to co-construct a shared diagnosis of mobility dynamics in Mali and define practical recommendations for the six and twelve-month horizons, directed at local and national authorities, international partners, NGOs, and economic actors.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Three Work Axes</h3>
      <p>The workshop will be structured around three lines of debate:</p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
        <li><b>Legal and Circular Mobility:</b> Analysis of existing models, obstacles, sectoral pilots, the role of diasporas, and mechanisms for tracking "round trips".</li>
        <li><b>Reintegration of Youth and Returnees:</b> Support thresholds, service packages, and collective models such as cooperatives or agricultural projects.</li>
        <li><b>Local Coordination and Regional Management:</b> Alternatives to irregular migration, economic options, targeted strategies, and return management in the sub-region.</li>
      </ul>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Outcome</h3>
      <p>As a final product, a <b>10 to 12-page policy paper</b> will be produced with differentiated recommendations for governments, international organizations, civil society, the private sector, and diasporas.</p>
      <p>IEAM has invited researchers, ministerial officials, international agencies, and community leaders to contribute data and field experiences to ensure realistic and applicable guidelines.</p>
      <p class="mt-6"><i>For more information, you can contact the organization via email at <a href="mailto:beatriz.deleoncobo@ieam.es" class="text-blue-600 hover:underline">beatriz.deleoncobo@ieam.es</a>.</i></p>
    `,
    agenda: [],
    speakers: []
  },
  {
    slug: "dialogo-mediterraneo-rabat",
    title: "Foro de Diálogo Mediterráneo 2025",
    title_en: "Mediterranean Dialogue Forum 2025",
    subtitle: "Desafíos y respuestas desde la perspectiva norteafricana.",
    subtitle_en: "Challenges and responses from the North African perspective.",
    category: "Foro",
    category_en: "Forum",
    date: "Jan 2025",
    location: "Rabat Business School, UIR",
    location_en: "Rabat Business School, UIR",
    format: "Presencial",
    format_en: "In-person",
    heroImage: "/images/mdmarruecoses.png",
    heroImage_en: "/images/mdmarruecosen.png",
    summary: "El Foro de Diálogo Mediterráneo 2025 inauguró el año en Rabat con un encuentro de alto nivel centrado en la migración irregular.",
    summary_en: "The Mediterranean Dialogue Forum 2025 opened the year in Rabat with a high-level gathering focused on irregular migration.",
    content: `
      <p>El Foro de Diálogo Mediterráneo 2025 inauguró el año en Rabat con un encuentro de alto nivel centrado en uno de los desafíos más urgentes para el norte de África y el Mediterráneo en general: la migración irregular. Celebrado en la Rabat Business School de la Universidad Internacional de Rabat (UIR), el foro reunió a expertos internacionales, responsables políticos, académicos y actores de la sociedad civil, reforzando el papel de Rabat como un centro emergente para el diálogo estratégico sobre la gobernanza mediterránea.</p>
      
      <img src="/images/rabat 1.png" alt="Foro de Diálogo Mediterráneo Rabat" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <p>Organizado por Diálogo Mediterráneo en colaboración con EDEN Maroc y AMSED, el foro atrajo una fuerte participación desde temprano, llenando el recinto con especialistas deseosos de explorar las complejidades de la migración en la región.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Panel 1 – Comprendiendo los impulsores y el impacto de la migración irregular en Marruecos en el contexto mediterráneo</h3>
      <p>El panel de apertura ofreció una visión integral de los factores que impulsan la migración irregular y sus implicaciones más amplias para Marruecos y la cuenca mediterránea.</p>
      <p><b>Ponentes destacados:</b></p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
      <li><b>Sra. Salma Agnaou (ACNUR)</b>, quien enfatizó el perfil cambiante de los flujos migratorios mixtos y la necesidad de respuestas humanitarias adaptables.</li>
      <li><b>Sr. Mohamed El Ouali Alami (AMSED)</b>, quien analizó las dimensiones sociopolíticas de la movilidad juvenil y las vulnerabilidades subyacentes.</li>
      <li><b>Sra. Maftatha Benchlikha (OIM – ONU Migración)</b>, quien presentó datos actualizados sobre rutas, riesgos y dinámicas cambiantes en el Sahel y el Magreb.</li>
      <li><b>Sr. Abderrahman Benyaha (Droits et Justice)</b>, quien destacó los desafíos legales clave y las brechas en el acceso a derechos para los migrantes.</li>
      <li><b>Sr. Abdeslam Sbatri (Organisation des Jeunes Africains)</b>, quien ofreció una perspectiva generacional sobre las aspiraciones, la influencia digital y las motivaciones que impulsan a los jóvenes migrantes.</li>
      </ul>
      
      <img src="/images/rabat2.jpg" alt="Panel de expertos en Rabat" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <p>El panel subrayó que Marruecos es simultáneamente un país de origen, tránsito y destino, lo que requiere políticas coordinadas que integren factores económicos, climáticos, sociales y de seguridad.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Panel 2 – Respuestas políticas y cooperación regional para abordar la migración irregular en Marruecos y el Mediterráneo</h3>
      <p>El segundo panel se centró en la gobernanza, el diseño de políticas y la cooperación regional, marcado por recomendaciones prácticas y análisis basados en evidencia.</p>
      <p><b>Ponentes destacados:</b></p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
      <li><b>Sr. Ivan Martin (Policy Center for the New South)</b>, quien abogó por políticas migratorias basadas en datos y evaluaciones de impacto a largo plazo.</li>
      <li><b>Sra. Aurélie Eragne (Consejo Nacional de Derechos Humanos – CNDH)</b>, quien describió el progreso institucional de Marruecos y los desafíos de protección restantes.</li>
      <li><b>Dr. Norman Sempija (Universidad Politécnica Mohammed VI)</b>, quien enfatizó la necesidad de una arquitectura de cooperación mediterránea coherente.</li>
      <li><b>Sra. Alicia Tintelín (Hijra Legal Clinic Marruecos)</b>, quien presentó estudios de caso que ilustran los obstáculos para la justicia y la integración a nivel local.</li>
      </ul>
      <p>Surgió una conclusión central: una gobernanza migratoria efectiva debe equilibrar la seguridad, los derechos, el desarrollo y la diplomacia. Los ponentes coincidieron en que Marruecos ocupa una posición fundamental para ayudar a dar forma a un marco renovado de cooperación mediterránea.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Presentación de la Nota de País sobre Migración Irregular en Marruecos</h3>
      <p>El foro también contó con la presentación de una Nota de País actualizada que resume las tendencias clave, vulnerabilidades y recomendaciones de políticas. El documento fue bien recibido como un recurso valioso para investigadores y tomadores de decisiones que trabajan en la gobernanza migratoria.</p>

      <img src="/images/rabat3.png" alt="Participantes en el foro de Rabat" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Observaciones finales y perspectivas</h3>
      <p>El Foro de Diálogo Mediterráneo 2025 concluyó con un mensaje claro: abordar la migración irregular requiere un diálogo sostenido, una investigación rigurosa y asociaciones regionales más fuertes. El foro posicionó con éxito a Marruecos —y a Rabat en particular— como una plataforma central para la reflexión política mediterránea.</p>
      <p>La jornada finalizó con debates informales y networking entre los participantes, abriendo la puerta a futuras colaboraciones en toda la región.</p>
      
      <div class="mt-12 p-8 bg-[var(--color-paper-warm)] border border-[var(--color-navy-900)]/10 text-center rounded-lg">
        <h3 class="text-2xl font-serif font-bold text-[var(--color-navy-900)] mb-4">¿Quieres saber más?</h3>
        <p class="text-slate-700 mb-6 max-w-2xl mx-auto">Descubre más sobre nuestras iniciativas y únete a la conversación en la plataforma oficial del Diálogo Mediterráneo.</p>
        <a href="https://mediterraneandialogue.org/" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-3 bg-[var(--color-navy-900)] text-white font-bold uppercase tracking-wider hover:bg-[var(--color-accent-blue)] transition-colors">
          Ir a Diálogo Mediterráneo
        </a>
      </div>
    `,
    content_en: `
      <p>The Mediterranean Dialogue Forum 2025 opened the year in Rabat with a high-level gathering focused on one of the most pressing challenges for North Africa and the wider Mediterranean: irregular migration. Held at the Rabat Business School of the International University of Rabat (UIR), the forum brought together international experts, policymakers, academics, and civil-society actors, reinforcing Rabat’s role as an emerging hub for strategic dialogue on Mediterranean governance.</p>
      
      <img src="/images/rabat 1.png" alt="Rabat Mediterranean Dialogue Forum" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <p>Organised by Mediterranean Dialogue in partnership with EDEN Maroc and AMSED, the forum attracted strong participation from early in the morning, filling the venue with specialists eager to explore the complexities of migration in the region.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Panel 1 – Understanding the Drivers and Impact of Irregular Migration in Morocco within the Mediterranean Context</h3>
      <p>The opening panel provided a comprehensive overview of the factors pushing irregular migration and its broader implications for Morocco and the Mediterranean basin.</p>
      <p><b>Speakers included:</b></p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
      <li><b>Ms. Salma Agnaou (UNHCR)</b>, who emphasized the evolving profile of mixed migration flows and the need for adaptable humanitarian responses.</li>
      <li><b>Mr. Mohamed El Ouali Alami (AMSED)</b>, who analysed the sociopolitical dimensions of youth mobility and underlying vulnerabilities.</li>
      <li><b>Ms. Maftatha Benchlikha (IOM – UN Migration)</b>, who presented updated data on routes, risks, and shifting dynamics across the Sahel and Maghreb.</li>
      <li><b>Mr. Abderrahman Benyaha (Droits et Justice)</b>, who highlighted key legal challenges and gaps in access to rights for migrants.</li>
      <li><b>Mr. Abdeslam Sbatri (Organisation des Jeunes Africains)</b>, who offered a generational perspective on aspirations, digital influence, and the motivations driving young migrants.</li>
      </ul>

      <img src="/images/rabat2.jpg" alt="Expert panel in Rabat" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <p>The panel underscored that Morocco is simultaneously a country of origin, transit, and destination, necessitating coordinated policies that integrate economic, climatic, social, and security-related factors.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Panel 2 – Policy Responses and Regional Cooperation to Address Irregular Migration in Morocco and the Mediterranean</h3>
      <p>The second panel shifted towards governance, policy design, and regional cooperation. It was marked by practical recommendations and evidence-based analysis.</p>
      <p><b>Speakers included:</b></p>
      <ul class="list-disc pl-5 space-y-2 mb-6">
      <li><b>Mr. Ivan Martin (Policy Center for the New South)</b>, who advocated for migration policies rooted in data and long-term impact assessments.</li>
      <li><b>Ms. Aurélie Eragne (National Human Rights Council – CNDH)</b>, who outlined Morocco’s institutional progress and remaining protection challenges.</li>
      <li><b>Dr. Norman Sempija (Mohammed VI Polytechnic University)</b>, who stressed the need for a coherent Mediterranean architecture of cooperation.</li>
      <li><b>Ms. Alicia Tintelín (Hijra Legal Clinic Morocco)</b>, who presented case studies illustrating obstacles to justice and integration at the local level.</li>
      </ul>
      <p>A central conclusion emerged: effective migration governance must balance security, rights, development, and diplomacy. Speakers agreed that Morocco occupies a pivotal position to help shape a renewed Mediterranean cooperation framework.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Presentation of the Country Note on Irregular Migration in Morocco</h3>
      <p>The forum also featured the presentation of an updated Country Note summarising key trends, vulnerabilities, and policy recommendations. The document was well received as a valuable resource for researchers and decision-makers working on migration governance.</p>

      <img src="/images/rabat3.png" alt="Participants at the Rabat forum" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Closing Remarks & Outlook</h3>
      <p>The Mediterranean Dialogue Forum 2025 concluded with a clear message: addressing irregular migration requires sustained dialogue, rigorous research, and stronger regional partnerships. The forum successfully positioned Morocco—and Rabat in particular—as a central platform for Mediterranean policy reflection.</p>
      <p>The day ended with informal discussions and networking among participants, opening the door to future collaborations across the region.</p>

      <div class="mt-12 p-8 bg-[var(--color-paper-warm)] border border-[var(--color-navy-900)]/10 text-center rounded-lg">
        <h3 class="text-2xl font-serif font-bold text-[var(--color-navy-900)] mb-4">Want to know more?</h3>
        <p class="text-slate-700 mb-6 max-w-2xl mx-auto">Discover more about our initiatives and join the conversation on the official Mediterranean Dialogue platform.</p>
        <a href="https://mediterraneandialogue.org/" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-3 bg-[var(--color-navy-900)] text-white font-bold uppercase tracking-wider hover:bg-[var(--color-accent-blue)] transition-colors">
          Go to Mediterranean Dialogue
        </a>
      </div>
    `,
    agenda: [],
    speakers: [
      { name: "Salma Agnaou", role: "ACNUR / UNHCR" },
      { name: "Mohamed El Ouali Alami", role: "AMSED" },
      { name: "Maftatha Benchlikha", role: "OIM / IOM" },
      { name: "Ivan Martin", role: "Policy Center for the New South" }
    ]
  },
  {
    slug: "foro-bruselas-2024",
    title: "Foro de Diálogo Mediterráneo 2024",
    title_en: "Mediterranean Dialogue Forum 2024",
    subtitle: "Un debate en tres etapas sobre la migración informal entre Madrid y Bruselas.",
    subtitle_en: "A Three-Stage Debate on Informal Migration Across Madrid and Brussels.",
    category: "Foro",
    category_en: "Forum",
    date: "20 Sep 2024",
    location: "Madrid & Bruselas",
    location_en: "Madrid & Brussels",
    format: "Presencial",
    format_en: "In-person",
    heroImage: "/images/mdbruselases.png",
    heroImage_en: "/images/mdbruselasen.png",
    summary: "El Foro de Diálogo Mediterráneo 2024 se desarrolló a lo largo de dos días entre Madrid y Bruselas, reuniendo a responsables políticos, investigadores y líderes de la sociedad civil.",
    summary_en: "The Mediterranean Dialogue Forum 2024 unfolded over two days between Madrid and Brussels, bringing together policymakers, researchers, and civil-society leaders.",
    content: `
      <p>El Foro de Diálogo Mediterráneo 2024 se desarrolló a lo largo de dos días entre Madrid y Bruselas, reuniendo a responsables políticos, investigadores y líderes de la sociedad civil para analizar el panorama cambiante de la migración informal en el Mediterráneo. Con sesiones celebradas en el Parlamento Europeo tanto en España como en Bélgica, el Foro fomentó un espacio inusual de intercambio entre grupos políticos y entre las dos orillas de la cuenca mediterránea.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Sesión en Madrid</h3>
      
      <img src="/images/bruselas1.jpg" alt="Sesión Madrid" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <p>El Foro se inauguró en la Oficina del Parlamento Europeo en España, en Madrid, con palabras de bienvenida que subrayaron la urgencia de abordar la migración informal como un desafío estructural a largo plazo, en lugar de una crisis cíclica.</p>
      <p>Un discurso principal a cargo de la <b>Dra. Amparo González Ferrer</b>, Científica Titular del Consejo Superior de Investigaciones Científicas (CSIC), marcó el tono analítico, describiendo las tendencias demográficas, las demandas laborales y las redes informales que configuran la movilidad en la región.</p>

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Perspectivas del Sur de Europa</h4>
      <p>El primer panel exploró las experiencias de España, Italia y Portugal en la gestión de entradas irregulares, las presiones sobre los servicios públicos y la fragmentación de la gobernanza de la UE. Los ponentes incluyeron a <b>Irune Ariño</b>, <b>Karina Kozhakhmet</b> y <b>Gonçalo Torres</b>, bajo la moderación de <b>Mark Vargha</b>, del Migration Research Institute con sede en Budapest.</p>

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Realidades del Norte de África y Levante</h4>
      <p>El segundo panel se centró en las perspectivas de los países de origen y tránsito, con la participación de:</p>
      <ul class="list-disc pl-5 space-y-1 mb-4">
        <li><b>Loubna El Hassouni</b> (Marruecos)</li>
        <li><b>Dr. Mohamed Wounouki</b> (Argelia)</li>
        <li><b>Malak Darwish</b> (Líbano)</li>
      </ul>
      <p>Moderada por <b>Tasnim Idriss</b>, la conversación destacó las presiones económicas, las rutas de tráfico, los desafíos de gobernanza y las limitadas herramientas políticas disponibles para los vecinos del sur de la UE.</p>

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Cooperación, Desarrollo y Gobernanza Migratoria</h4>
      <p>Una sesión final en Madrid reunió a profesionales de los sectores de desarrollo y humanitario para evaluar los vínculos entre los instrumentos de cooperación y los resultados migratorios. La sesión se cerró con reflexiones sobre la necesidad de marcos compartidos a largo plazo entre Europa y África.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Sesión en Bruselas</h3>

      <img src="/images/bruselas2.jpeg" alt="Sesión Bruselas" class="w-full h-auto rounded-lg my-8 shadow-md" />
      
      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Sesión de Mañana – A cargo del Eurodiputado López Aguilar (Grupo S&D)</h4>
      <p>El programa de Bruselas comenzó por la mañana con palabras de apertura del eurodiputado <b>Juan Fernando López Aguilar</b>, una de las voces más influyentes del Parlamento en justicia y asuntos de interior. Subrayó la necesidad de una acción coordinada de la UE, equilibrada entre las obligaciones humanitarias y la gobernanza fronteriza.</p>
      <p>El panel contó con los principales expertos del Foro en el Mediterráneo: <b>Loubna El Hassouni</b> (Marruecos), <b>Dr. Mohamed Wounouki</b> (Argelia), <b>Malak Darwish</b> (Líbano), <b>Gonçalo Torres</b> (Portugal) y <b>Karina Kozhakhmet</b> (Italia). Sus contribuciones ofrecieron una visión transmediterránea de la migración informal, abordando los cambios demográficos, las dinámicas de seguridad y las presiones políticas sentidas en ambas orillas. La eurodiputada <b>Cecilia Strada</b> pronunció las palabras de clausura, advirtiendo que la migración irregular no puede tratarse únicamente como un problema de seguridad e instando a un compromiso más profundo de la UE en las regiones vecinas.</p>

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Sesión de Tarde – A cargo del Eurodiputado Nicola Procaccini (Grupo ECR)</h4>
      <p>Por la tarde, la atención se centró en una perspectiva centrada en la seguridad bajo el patrocinio del eurodiputado <b>Nicola Procaccini</b>, copresidente del Grupo ECR. Procaccini destacó la importancia de restaurar la capacidad de control fronterizo europeo, combatir las redes de tráfico de personas y desarrollar herramientas políticas impulsadas por la soberanía.</p>
      <p>Los mismos panelistas del Diálogo Mediterráneo presentaron ideas actualizadas adaptadas a una audiencia parlamentaria más orientada a la seguridad. Las discusiones se centraron en la geopolítica de las rutas de tránsito, el auge de los intermediarios criminales y las vulnerabilidades de los estados europeos y norteafricanos.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Cena de Fortalecimiento de Alianzas – Organizada por New Direction Foundation</h3>
      <p>La jornada concluyó con una cena de creación de coaliciones organizada por la New Direction Foundation, reuniendo a parlamentarios, expertos y representantes de organizaciones asociadas. La cena proporcionó un entorno confidencial para conversaciones estratégicas sobre la cooperación a largo plazo entre socios europeos y mediterráneos, explorando iniciativas de investigación conjuntas, coordinación parlamentaria y futuras ediciones del Foro de Diálogo Mediterráneo.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Una conversación entre partidos y orillas</h3>
      <p>El Foro de Diálogo Mediterráneo 2024 logró reunir a dos importantes grupos políticos del Parlamento Europeo —S&D y ECR— junto con expertos de Marruecos, Argelia, Líbano, Portugal e Italia. La participación activa de los eurodiputados López Aguilar, Cecilia Strada y Nicola Procaccini otorgó al Foro un peso institucional significativo.</p>
      <p>A pesar de las diferencias ideológicas, surgió un mensaje compartido: el Mediterráneo requiere una cooperación sostenida, pensamiento a largo plazo y una comprensión más integrada de los impulsores detrás de la migración informal.</p>
      
      <img src="/images/bruselas3.jpeg" alt="Participantes Foro Bruselas" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <div class="mt-12 p-8 bg-[var(--color-paper-warm)] border border-[var(--color-navy-900)]/10 text-center rounded-lg">
        <h3 class="text-2xl font-serif font-bold text-[var(--color-navy-900)] mb-4">¿Quieres saber más?</h3>
        <p class="text-slate-700 mb-6 max-w-2xl mx-auto">Descubre más sobre nuestras iniciativas y únete a la conversación en la plataforma oficial del Diálogo Mediterráneo.</p>
        <a href="https://mediterraneandialogue.org/" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-3 bg-[var(--color-navy-900)] text-white font-bold uppercase tracking-wider hover:bg-[var(--color-accent-blue)] transition-colors">
          Ir a Diálogo Mediterráneo
        </a>
      </div>
    `,
    content_en: `
      <p>The Mediterranean Dialogue Forum 2024 unfolded over two days between Madrid and Brussels, bringing together policymakers, researchers, and civil-society leaders to analyse the evolving landscape of informal migration in the Mediterranean. With sessions hosted at the European Parliament in both Spain and Belgium, the Forum fostered an uncommon space for exchange across political groups and across the two shores of the Mediterranean basin.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Madrid Session</h3>

      <img src="/images/bruselas1.jpg" alt="Madrid Session" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <p>The Forum opened at the European Parliament’s Spain Office in Madrid with welcoming remarks that underlined the urgency of addressing informal migration as a long-term structural challenge, rather than a cyclical crisis.</p>
      <p>A keynote by <b>Dr Amparo González Ferrer</b>, Senior Scientist at the Spanish National Research Council (CSIC), set the analytical tone, outlining demographic trends, labour demands, and the informal networks shaping mobility across the region.</p>

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Southern European Perspectives</h4>
      <p>The first panel explored the experiences of Spain, Italy, and Portugal in managing irregular entries, pressures on public services, and the fragmentation of EU governance. Speakers included <b>Irune Ariño</b>, <b>Karina Kozhakhmet</b>, and <b>Gonçalo Torres</b>, under the moderation of <b>Mark Vargha</b>, from the Budapest-based Migration Research Institute.</p>

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">North African & Levantine Realities</h4>
      <p>The second panel turned to perspectives from origin and transit countries, featuring:</p>
      <ul class="list-disc pl-5 space-y-1 mb-4">
        <li><b>Loubna El Hassouni</b> (Morocco)</li>
        <li><b>Dr Mohamed Wounouki</b> (Algeria)</li>
        <li><b>Malak Darwish</b> (Lebanon)</li>
      </ul>
      <p>Moderated by <b>Tasnim Idriss</b>, the conversation highlighted economic pressures, smuggling routes, governance challenges, and the limited policy tools available to Southern neighbours of the EU.</p>

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Cooperation, Development, and Migration Governance</h4>
      <p>A final Madrid session gathered practitioners from development and humanitarian sectors to assess the links between cooperation instruments and migration outcomes. The session closed with reflections on the need for long-term, shared frameworks between Europe and Africa.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Brussels Session</h3>
      
      <img src="/images/bruselas2.jpeg" alt="Brussels Session" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Morning Session – Hosted by MEP López Aguilar (S&D Group)</h4>
      <p>The Brussels programme began in the morning with opening remarks from MEP <b>Juan Fernando López Aguilar</b>, one of the Parliament’s most influential voices on justice and home affairs. He underscored the need for coordinated EU action, balanced between humanitarian obligations and border governance.</p>
      <p>The panel featured the Forum’s main Mediterranean experts: <b>Loubna El Hassouni</b> (Morocco), <b>Dr Mohamed Wounouki</b> (Algeria), <b>Malak Darwish</b> (Lebanon), <b>Gonçalo Torres</b> (Portugal), and <b>Karina Kozhakhmet</b> (Italy). Their contributions offered a cross-Mediterranean view of informal migration, touching on demographic shifts, security dynamics, and the political pressures felt on both shores. MEP <b>Cecilia Strada</b> delivered closing remarks, warning that irregular migration cannot be treated solely as a security issue and urging deeper EU engagement in neighbouring regions.</p>

      <h4 class="text-lg font-bold text-[var(--color-text-primary)] mt-6 mb-2">Afternoon Session – Hosted by MEP Nicola Procaccini (ECR Group)</h4>
      <p>In the afternoon, attention shifted to a security-centred perspective under the patronage of MEP <b>Nicola Procaccini</b>, Co-Chairman of the ECR Group. Procaccini stressed the importance of restoring European border control capacity, combating human-smuggling networks, and developing sovereignty-driven policy tools.</p>
      <p>The same Mediterranean Dialogue panelists—El Hassouni, Wounouki, Darwish, Torres, and Kozhakhmet—presented updated insights tailored to a more security-oriented parliamentary audience. Discussions centred on the geopolitics of transit routes, the rise of criminal intermediaries, and the vulnerabilities of both European and North African states.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Coalition-Building Dinner – Hosted by New Direction Foundation</h3>
      <p>The day concluded with a coalition-building dinner hosted by the New Direction Foundation, gathering parliamentarians, experts, and representatives from partner organisations. The dinner provided a confidential setting for strategic conversations on long-term cooperation between European and Mediterranean partners, exploring joint research initiatives, parliamentary coordination, and future editions of the Mediterranean Dialogue Forum.</p>

      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">A Cross-Party, Cross-Shore Conversation</h3>
      <p>The Mediterranean Dialogue Forum 2024 succeeded in bringing together two major political groups of the European Parliament—S&D and ECR—alongside experts from Morocco, Algeria, Lebanon, Portugal, and Italy. The active involvement of MEP López Aguilar, MEP Cecilia Strada, and MEP Nicola Procaccini gave the Forum significant institutional weight.</p>
      <p>Despite ideological differences, a shared message emerged: the Mediterranean requires sustained cooperation, long-term thinking, and a more integrated understanding of the drivers behind informal migration.</p>

      <img src="/images/bruselas3.jpeg" alt="Brussels Forum Participants" class="w-full h-auto rounded-lg my-8 shadow-md" />

      <div class="mt-12 p-8 bg-[var(--color-paper-warm)] border border-[var(--color-navy-900)]/10 text-center rounded-lg">
        <h3 class="text-2xl font-serif font-bold text-[var(--color-navy-900)] mb-4">Want to know more?</h3>
        <p class="text-slate-700 mb-6 max-w-2xl mx-auto">Discover more about our initiatives and join the conversation on the official Mediterranean Dialogue platform.</p>
        <a href="https://mediterraneandialogue.org/" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-3 bg-[var(--color-navy-900)] text-white font-bold uppercase tracking-wider hover:bg-[var(--color-accent-blue)] transition-colors">
          Go to Mediterranean Dialogue
        </a>
      </div>
    `,
    agenda: [],
    speakers: [
      // Madrid Session
      { name: "Dr. Amparo González Ferrer", role: "CSIC", group: "Sesión en Madrid", group_en: "Madrid Session" },
      { name: "Irune Ariño", role: "", group: "Sesión en Madrid", group_en: "Madrid Session" },
      { name: "Karina Kozhakhmet", role: "", group: "Sesión en Madrid", group_en: "Madrid Session" },
      { name: "Gonçalo Torres", role: "", group: "Sesión en Madrid", group_en: "Madrid Session" },
      { name: "Mark Vargha", role: "Migration Research Institute", group: "Sesión en Madrid", group_en: "Madrid Session" },
      { name: "Loubna El Hassouni", role: "", group: "Sesión en Madrid", group_en: "Madrid Session" },
      { name: "Dr. Mohamed Wounouki", role: "", group: "Sesión en Madrid", group_en: "Madrid Session" },
      { name: "Malak Darwish", role: "", group: "Sesión en Madrid", group_en: "Madrid Session" },
      { name: "Tasnim Idriss", role: "", group: "Sesión en Madrid", group_en: "Madrid Session" },
      // Brussels Session
      { name: "Juan Fernando López Aguilar", role: "MEP (S&D)", group: "Sesión en Bruselas", group_en: "Brussels Session" },
      { name: "Cecilia Strada", role: "MEP (S&D)", group: "Sesión en Bruselas", group_en: "Brussels Session" },
      { name: "Nicola Procaccini", role: "MEP (ECR)", group: "Sesión en Bruselas", group_en: "Brussels Session" },
      { name: "Loubna El Hassouni", role: "", group: "Sesión en Bruselas", group_en: "Brussels Session" },
      { name: "Dr. Mohamed Wounouki", role: "", group: "Sesión en Bruselas", group_en: "Brussels Session" },
      { name: "Malak Darwish", role: "", group: "Sesión en Bruselas", group_en: "Brussels Session" },
      { name: "Gonçalo Torres", role: "", group: "Sesión en Bruselas", group_en: "Brussels Session" },
      { name: "Karina Kozhakhmet", role: "", group: "Sesión en Bruselas", group_en: "Brussels Session" }
    ]

  },
  {
    slug: "jornada-canarias-sahel",
    title: "Jornada de análisis: El Sahel y su impacto en los flujos migratorios hacia Canarias",
    title_en: "Analysis Session: The Sahel and its impact on migratory flows to the Canary Islands",
    subtitle: "Análisis de las rutas atlánticas y la seguridad regional.",
    subtitle_en: "Analysis of Atlantic routes and regional security.",
    category: "Jornada",
    category_en: "Conference",
    date: "03 Sep 2025",
    location: "Las Palmas, Canarias",
    location_en: "Las Palmas, Canary Islands",
    format: "Híbrido",
    format_en: "Hybrid",
    heroImage: "/images/evento-canariases.png",
    heroImage_en: "/images/evento-canariasen.png",
    summary: "Innovación para la gestión migratoria -iniciativa que forma parte de IRLab- convoca una jornada para conocer los movimientos geopolíticos en la zona y sus repercusiones para el archipiélago.",
    summary_en: "Innovation for migration management -an initiative part of IRLab- convenes a session to understand geopolitical movements in the area and their repercussions for the archipelago.",
    content: `
      <p>Innovación para la gestión migratoria (IRLab) - iniciativa que forma parte de IRLab - convoca una jornada para conocer los movimientos geopolíticos en la zona y sus repercusiones para el archipiélago.</p>
      <p>El Gobierno de Canarias ha convocado, para el próximo miércoles 3 de septiembre, una jornada de análisis de la situación geopolítica en El Sahel y su impacto en las migraciones hacia el archipiélago a través de una webinar, en la que pueden participar todas aquellas personas que lo deseen.</p>
      <p>En ella, intervendrán la doctora en Ciencias Políticas, Beatriz Mesa; la Directora del Instituto Español de Análisis Migratorio (IEAM), Beatriz de León Cobo; y el periodista José Naranjo, para abordar distintos aspectos de la coyuntura actual, desde el deterioro político y de seguridad en la región, al impacto en la salida de embarcaciones hacia Canarias. Esta sesión virtual será presentada por el viceconsejero del Gabinete del Presidente, Octavio Caraballo, y la coordinadora de Innovación para la gestión migratoria, Claudia Pérez.</p>
      <p>El presidente de Canarias, Fernando Clavijo, ya ha expresado en distintas ocasiones su “preocupación” por la falta de respuesta de la Unión Europea (UE) ante este escenario, que alcanza también al fenómeno migratorio, y ha reclamado políticas de cooperación para que los países de esa región puedan tener un desarrollo y una convivencia pacífica.</p>
      <p>La expansión de la violencia yihadista, los déficits estructurales a nivel de desarrollo económico y de gobernanza o las repercusiones del cambio climático generan una situación de inestabilidad cada vez más creciente que puede afectar no solo a los países de esta zona del continente africano, sino también al entorno.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Rutas y riesgos</h3>
      <p>De hecho, la reducción en la llegada de migrantes a las costas canarias en los últimos meses no significa que la migración haya cesado, sino que los puntos de partida se están desplazando hacia el sur, hacia zonas menos vigiladas, lo que conlleva mayor riesgo para los viajeros.</p>
      <p>El cierre de fronteras en Mauritania y Senegal ha forzado a las redes de tráfico a desplazarse hasta el sur y buscar puntos de salida en Guinea Bissau y Guinea Conakry. De esta manera, esquivan los controles reforzados en África occidental. La distancia entre Conakri y El Hierro supera los 2.200 kilómetros, unos 750 kilómetros más que desde Senegal o Gambia.</p>
      <p>A ello se une la alta natalidad en los países de esta zona. El 60 % de la población de El Sahel tiene menos de 25 años y según las proyecciones estadísticas, en 2050 serán 500 millones de personas las que habiten estos países. Esta circunstancia requiere de oportunidades para la población en sus respectivos países como alternativa a la emigración.</p>
      
      <h3 class="text-xl font-serif font-bold text-[var(--color-text-primary)] mt-8 mb-3">Conclusiones</h3>
      <p>La migración no ha cesado: las rutas se adaptan al control. Se requiere cooperación UE - África, oportunidades en origen y seguimiento constante de las dinámicas regionales.</p>
      <p class="mt-6 text-sm text-slate-600">Este análisis también fue relevante para entender las conexiones con Mali.</p>
    `,
    agenda: [],
    speakers: [
      { name: "Beatriz Mesa", role: "Doctora en Ciencias Políticas" },
      { name: "Beatriz de León Cobo", role: "Directora Ejecutiva IEAM" },
      { name: "José Naranjo", role: "Periodista" }
    ]
  }
];

export const getEventBySlug = (slug: string): EventItem | undefined =>
  events.find((event) => event.slug === slug);
