export interface TeamMember {
    img: string;
    name: string;
    role: string;
    role_en?: string;
    bio: string;
    bio_en?: string;
    linkedin?: string;
    email?: string;
    twitter?: string;
    scholar?: string;
    website?: string;
}

export const coreTeam: TeamMember[] = [
    {
        img: "/team/member-2.jpg",
        name: "Beatriz de León",
        role: "Directora Ejecutiva",
        role_en: "Executive Director",
        linkedin: "https://www.linkedin.com/in/beatrizdeleoncobo/",
        email: "beatriz.deleoncobo@ieam.es",
        bio: "Madrid (España). Beatriz de León Cobo es consultora, investigadora y analista especializada en seguridad, migración, dinámica de conflictos y radicalización violenta en África Occidental y el Sahel. Trabaja como consultora independiente para gobiernos, ONGs, organizaciones internacionales y think tanks. También es doctoranda en sociología por la Universidad de la Sorbona. Beatriz es profesora del master de Acción Política de la Universidad Francisco de Vitoria y analista en el Centro de Seguridad Internacional de la UFV, donde dirige el «Foro de Diálogo Sahel Europe». Es investigadora asociada (Fellow) del think tank RUSI (Royal United Services Institute). Beatriz tiene un máster en Defensa, Seguridad y Gestión de Crisis por el Institut de Relations Internationales Strátegiques (IRIS).",
        bio_en: "Madrid (Spain). Beatriz de León Cobo is a consultant, researcher, and analyst specializing in security, migration, conflict dynamics, and violent radicalization in West Africa and the Sahel. She works as an independent consultant for governments, NGOs, international organizations, and think tanks. She is also a PhD candidate in sociology at the Sorbonne University. Beatriz is a professor in the Master of Political Action at the Francisco de Vitoria University and an analyst at the UFV International Security Center, where she directs the 'Sahel Europe Dialogue Forum'. She is an Associate Fellow at the RUSI (Royal United Services Institute) think tank. Beatriz holds a Master's in Defense, Security, and Crisis Management from the Institut de Relations Internationales Strátegiques (IRIS)."
    },
    {
        img: "/team/member-1.jpg",
        name: "Tasnim Idriss",
        role: "Coordinadora para el Norte de África",
        role_en: "North Africa Coordinator",
        linkedin: "#",
        email: "tasnim@mediterraneandialogue.org",
        bio: "Tunicia (Túnez). Consultora especializada en ciencia política, estudios culturales y redes académicas internacionales. Es la coordinadora del proyecto, ligado al IEAM, Diálogo Mediterráneo. Profesora en la Universidad de Túnez El Manar. Fue subdirectora de Islam & Liberty Network, un think tank con sede en Malasia centrado en la libertad económica, religiosa y política en países de mayoría musulmana. Es licenciada en literatura angloamericana, civilización y lingüística por la École Normale Supérieure de Tunis, donde también obtuvo un título de formación docente y un certificado de investigación. Además, tiene un máster en Estudios Culturales por la Universidad de Cartago, Túnez, y actualmente está realizando un doctorado en Ciencia Política en la Universidad de la Civilización de Estambul (Istanbul Medeniyet University), Turquía. Con una amplia experiencia en gobernanza y procesos electorales, Tasnim desempeñó un papel clave en la organización de los primeros debates legislativos y presidenciales en Túnez y el mundo árabe en 2019, en calidad de Oficial Académica de Enlace de la Iniciativa Munathara. También ha contribuido a la integridad electoral como funcionaria de mesa en diversas elecciones legislativas, municipales y presidenciales en Túnez. Comprometida con las redes internacionales, ha representado a la Túnez post-revolucionaria en programas globales de liderazgo y consolidación de la paz, colaborando con organizaciones como la Initiatives of Change Foundation, Atlas Network y Diplomacy by Networking.",
        bio_en: "Tunis (Tunisia). Consultant specializing in political science, cultural studies, and international academic networks. She is the coordinator of the Mediterranean Dialogue project, linked to IEAM. Professor at the University of Tunis El Manar. She was deputy director of the Islam & Liberty Network, a Malaysia-based think tank focused on economic, religious, and political freedom in Muslim-majority countries. She holds a degree in Anglo-American literature, civilization, and linguistics from the École Normale Supérieure de Tunis, where she also obtained a teaching degree and a research certificate. In addition, she holds a Master's in Cultural Studies from the University of Carthage, Tunisia, and is currently pursuing a PhD in Political Science at Istanbul Medeniyet University, Turkey. With extensive experience in governance and electoral processes, Tasnim played a key role in organizing the first legislative and presidential debates in Tunisia and the Arab world in 2019, as Academic Liaison Officer for the Munathara Initiative. She has also contributed to electoral integrity as a polling officer in various legislative, municipal, and presidential elections in Tunisia. Committed to international networks, she has represented post-revolutionary Tunisia in global leadership and peacebuilding programs, collaborating with organizations such as the Initiatives of Change Foundation, Atlas Network, and Diplomacy by Networking."
    },
    {
        img: "/team/member-4.jpg",
        name: "Iván López",
        role: "Asistente de Investigación",
        role_en: "Research Assistant",
        linkedin: "https://www.linkedin.com/in/iv%C3%A1n-l%C3%B3pez-ant%C3%B3n/",
        bio: "Madrid (España). Estudiante de Derecho y Relaciones Internacionales en la Universidad Francisco de Vitoria. Cursa el diploma Integral Leadership Program, en colaboración con University of Notre Dame – Mendoza College of Business. Actualmente, está realizando un intercambio en University of Essex en Reino Unido. Colabora periódicamente en la revista internacional ATLAS. Además, cuenta con una amplia formación transversal en economía, filosofía y comunicación.",
        bio_en: "Madrid (Spain). Law and International Relations student at Francisco de Vitoria University. He is pursuing the Integral Leadership Program diploma, in collaboration with the University of Notre Dame – Mendoza College of Business. Currently, he is on an exchange at the University of Essex in the United Kingdom. He collaborates periodically in the international magazine ATLAS. In addition, he has extensive cross-disciplinary training in economics, philosophy, and communication."
    }
];

export const researchFellows: TeamMember[] = [
    {
        img: "/team/member-3.jpg",
        name: "Bréma Ely Dicko",
        role: "Investigador asociado",
        role_en: "Associate Researcher",
        linkedin: "https://www.linkedin.com/in/dr-br%C3%A9ma-ely-dicko-7a07b7a/?originalSubdomain=ml",
        bio: "Doctor en Sociología por la Universidad de Bamako. Especialista en migraciones y movilidad en África Occidental. Ha colaborado con diversas organizaciones internacionales en estudios sobre flujos migratorios y desarrollo.",
        bio_en: "PhD in Sociology from the University of Bamako. Specialist in migration and mobility in West Africa. He has collaborated with various international organizations on studies regarding migratory flows and development."
    },
    {
        img: "/team/member-5.jpg",
        name: "Dolores López",
        role: "Investigadora asociada",
        role_en: "Associate Researcher",
        linkedin: "https://www.linkedin.com/in/lopez-dolores-83761323/",
        bio: "Doctora en Geografía e Historia. Experta en relaciones hispano-marroquíes y migraciones en el Mediterráneo occidental. Autora de numerosas publicaciones sobre integración y políticas migratorias.",
        bio_en: "PhD in Geography and History. Expert in Spanish-Moroccan relations and migration in the Western Mediterranean. Author of numerous publications on integration and migration policies."
    },
    {
        img: "/team/martial_zongo.jpg",
        name: "Martial Zongo",
        role: "Investigador asociado",
        role_en: "Associate Researcher",
        linkedin: "#",
        bio: "Profesor Martial Zongo. Ouagadougou (Burkina Faso). Relwendé Louis Martial Zongo es doctor en Derecho por la Universidad de Ginebra y profesor titular de Derecho público en la Universidad Thomas Sankara (UTS), donde se desempeña como director adjunto de la Escuela de Doctorado. Especialista en derecho comunitario, derecho constitucional, derecho internacional y derecho de las organizaciones internacionales, es además el Director Ejecutivo del Centro de Estudios Regionales Africanos (CERA). Desde 2024 forma parte de la lista de árbitros de la Corte Permanente de Arbitraje de La Haya en representación de Burkina Faso. Sus trabajos se centran en la integración regional africana y el derecho comunitario de la UEMOA. Es presidente de la Sociedad burkinesa de Derecho Constitucional, portavoz de la Sociedad burkinesa de Derecho Internacional, miembro de la Academia Africana de Práctica del Derecho Internacional, miembro fundador de la Sociedad Africana de Derecho Comunitario e integrante de diversas redes y comités científicos africanos y europeos.",
        bio_en: "Professor Martial Zongo. Ouagadougou (Burkina Faso). Relwendé Louis Martial Zongo holds a PhD in Law from the University of Geneva and is a full professor of Public Law at Thomas Sankara University (UTS), where he serves as deputy director of the Doctoral School. A specialist in community law, constitutional law, international law, and the law of international organizations, he is also the Executive Director of the Center for African Regional Studies (CERA). Since 2024, he has been on the list of arbitrators of the Permanent Court of Arbitration in The Hague representing Burkina Faso. His work focuses on African regional integration and UEMOA community law. He is president of the Burkinabe Society of Constitutional Law, spokesman for the Burkinabe Society of International Law, member of the African Academy of International Law Practice, founding member of the African Society of Community Law, and member of various African and European scientific networks and committees."
    },
    {
        img: "/team/romeo_gbaguidi.jpg",
        name: "Roméo Gbaguidi",
        role: "Investigador asociado",
        role_en: "Associate Researcher",
        linkedin: "#",
        bio: "Pr. Roméo Gbaguidi. Roméo Gbaguidi es doctor en Humanidades por la Universidad Carlos III de Madrid, filólogo hispanista y mediador intercultural originario de Benín. Es profesor en la Universidad Antonio de Nebrija y en otras universidades españolas, y presidente y director de investigaciones del Laboratorio de Estudio de las Migraciones Africanas – LemAfriQ. Ha sido mediador intercultural y director del Centro de Participación e Integración (CEPI) Hispano-Africano de la Comunidad de Madrid. Sus ámbitos de especialización incluyen las migraciones internacionales entre África y Europa, la mediación social e intercultural y el estudio de las diásporas africanas, sobre los que ha impartido numerosos cursos y conferencias y publicado diversos trabajos académicos y de divulgación.",
        bio_en: "Prof. Roméo Gbaguidi. Roméo Gbaguidi holds a PhD in Humanities from the Carlos III University of Madrid, is a Hispanic philologist, and an intercultural mediator originally from Benin. He is a professor at Antonio de Nebrija University and other Spanish universities, and president and research director of the Laboratory for the Study of African Migrations – LemAfriQ. He has been an intercultural mediator and director of the Hispanic-African Center for Participation and Integration (CEPI) of the Community of Madrid. His areas of specialization include international migration between Africa and Europe, social and intercultural mediation, and the study of African diasporas, on which he has taught numerous courses and conferences and published various academic and dissemination works."
    },
    {
        img: "/team/soraya_aybar.jpg",
        name: "Soraya Aybar",
        role: "Investigadora asociada",
        role_en: "Associate Researcher",
        linkedin: "#",
        bio: "Soraya Aybar es politóloga, periodista y directora de África Mundi, un medio especializado en el continente africano y en las relaciones entre África y Europa. Coordina LISA News, y escribe como freelance para varios medios de comunicación nacionales e internacionales. Graduada en Ciencias Políticas por la Universitat de València y con masters en derechos humanos, paz y desarrollo sostenible, comunicación y relaciones internacionales y periodismo, ha trabajado en consultoría política, en temáticas como migraciones, participación pública o geopolítica. Es profesora en el Grado de Relaciones Internacionales de la Universidad Camilo José Cela. Sus principales áreas de interés son la geopolítica africana, las dinámicas migratorias y fronterizas en el espacio euro-mediterráneo-africano y las narrativas mediáticas sobre el continente, temas que aborda combinando análisis, trabajo de campo en África y proyectos de comunicación.",
        bio_en: "Soraya Aybar is a political scientist, journalist, and director of África Mundi, a media outlet specialized in the African continent and relations between Africa and Europe. She coordinates LISA News and writes as a freelancer for various national and international media outlets. Graduated in Political Science from the University of Valencia and holding master's degrees in human rights, peace and sustainable development, communication and international relations, and journalism, she has worked in political consulting on topics such as migration, public participation, or geopolitics. She is a professor in the International Relations Degree at Camilo José Cela University. Her main areas of interest are African geopolitics, migration and border dynamics in the Euro-Mediterranean-African space, and media narratives about the continent, topics she addresses by combining analysis, field work in Africa, and communication projects."
    },
    {
        img: "/team/Aimara-Pujadas.jpeg",
        name: "Aimara Pujadas",
        role: "Investigadora asociada",
        role_en: "Associate Researcher",
        linkedin: "#",
        bio: "Ginebra (Suiza). Aimara es consultora internacional especializada en gobernanza de la migración, derechos humanos y políticas públicas. Actualmente trabaja en la Organización Internacional para las Migraciones (OIM-ONU Migración), en la implementación del Pacto Mundial para una Migración Segura, Ordenada y Regular, centrada en el diálogo con actores institucionales y en procesos de consulta para fortalecer marcos de gestión migratoria. Es cofundadora y coordinadora de proyectos de derechos humanos en Mujeres-Migrantes, donde ha trabajado en políticas de protección y planes de igualdad vinculados a infancia, inclusión, migración y desarrollo. Anteriormente ha colaborado con el Geneva International Centre for Justice, la Fundación Ayuda en Acción y la Comisión Interamericana de Derechos Humanos, elaborando informes temáticos y jurídicos sobre desapariciones forzadas, protección de refugiados, niñez en contextos de conflicto y personas migrantes. Es máster en Gobernanza y Derechos Humanos por la Universidad Autónoma de Madrid.",
        bio_en: "Geneva (Switzerland). Aimara is an international consultant specializing in migration governance, human rights, and public policy. She currently works at the International Organization for Migration (IOM-UN Migration), on the implementation of the Global Compact for Safe, Orderly and Regular Migration, focusing on dialogue with institutional actors and consultation processes to strengthen migration management frameworks. She is co-founder and project coordinator for human rights at Mujeres-Migrantes, where she has worked on protection policies and equality plans linked to childhood, inclusion, migration, and development. Previously, she has collaborated with the Geneva International Centre for Justice, the Ayuda en Acción Foundation, and the Inter-American Commission on Human Rights, preparing thematic and legal reports on enforced disappearances, refugee protection, childhood in conflict contexts, and migrants. She holds a Master's in Governance and Human Rights from the Autonomous University of Madrid."
    },
];
