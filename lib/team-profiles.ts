export type TeamProfile = {
  id: string
  name: string
  position: string
  role: string
  expertise: string
  githubUsername: string
  avatarUrl: string
  summary: string
  skills: string[]
  education: string[]
  projects: { name: string; description: string; href: string }[]
  links: { label: string; href: string }[]
  certifications: { name: string; issuer?: string; verification?: string }[]
  languages?: string[]
  interests?: string[]
  evidence: string
}

export const TEAM_PROFILES: TeamProfile[] = [
  {
    id: 'ravel',
    name: 'NGHOMSI FEUKOUO RAVEL',
    position: 'Lead & Architecture',
    role: 'Chef de projet & Architecte logiciel',
    expertise: 'Architecture full-stack, IA appliquée, automatisation et coordination technique.',
    githubUsername: 'Archlord12345',
    avatarUrl: 'https://github.com/Archlord12345.png',
    summary: 'Étudiant en Licence 2 ICT4D, option Génie Logiciel, à l’Université de Yaoundé I. Fondateur de Kernel Forge et développeur orienté produits, il travaille sur des architectures web, des APIs, des applications mobiles et des outils d’automatisation.',
    skills: ['Python', 'JavaScript / TypeScript', 'React / Next.js', 'API REST / JSON', 'Git / GitHub', 'Docker', 'Bash / Linux', 'APIs IA', 'n8n', 'Dart / Flutter', 'Kotlin'],
    education: ['Licence 2 ICT4D, option Génie Logiciel — Université de Yaoundé I, 2025–en cours', 'Baccalauréat scientifique, série C — Lycée Bilingue de Bafoussam, 2023'],
    projects: [
      { name: 'Kernel Forge', description: 'Collectif étudiant open source fondé et coordonné par Ravel.', href: 'https://kernelforge.codes/' },
      { name: 'UniFlow', description: 'Écosystème universitaire offline-first développé par le collectif.', href: 'https://uniflow.kernelforge.codes/' },
      { name: 'KERNEL_CHAT', description: 'Projet public épinglé sur le profil GitHub.', href: 'https://github.com/Archlord12345/KERNEL_CHAT' },
      { name: 'AFRO_VIBE', description: 'Projet Android public en Kotlin présenté comme une expérience sociale africaine.', href: 'https://github.com/Archlord12345/AFRO_VIBE' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Archlord12345' },
      { label: 'Portfolio', href: 'https://ravelnghomsi.me' },
      { label: 'LinkedIn', href: 'https://cm.linkedin.com/in/ravel-nghomsi-feukouo-60866b366' },
      { label: 'Kernel Forge', href: 'https://kernelforge.codes/' },
    ],
    certifications: [
      { name: 'Introduction to Python', issuer: 'DataCamp', verification: 'Attestation fournie par l’utilisateur · #44,360,849' },
      { name: 'Vibe Coding with Replit', issuer: 'DataCamp', verification: 'Attestation fournie par l’utilisateur · #44,391,023' },
      { name: 'Containerization and Virtualization Concepts / Docker', issuer: 'DataCamp', verification: 'Attestation fournie par l’utilisateur · #44,391,522' },
      { name: 'Understanding Prompt Engineering', issuer: 'DataCamp', verification: 'Attestation fournie par l’utilisateur · #44,391,879' },
      { name: 'Google Drive', issuer: 'Google Cloud via Coursera', verification: 'https://coursera.org/verify/8OPHJEULMAEM' },
      { name: 'Designing and Formatting a Presentation in PowerPoint', issuer: 'Coursera', verification: 'https://coursera.org/verify/C3OBNP22IWXG' },
      { name: 'Getting Started with Microsoft Word', issuer: 'Coursera', verification: 'https://coursera.org/verify/7CV00KDRO60Y' },
    ],
    evidence: 'Profil GitHub public, portfolio public et CV/certificats fournis par l’utilisateur. Les informations de contact privées du CV ne sont pas reproduites ici.',
  },
  {
    id: 'aliya',
    name: 'Aliyatou Rachid Oumou Tourab',
    position: 'Frontend',
    role: 'Frontend Developer',
    expertise: 'Interfaces web, projets Java et TypeScript, expérimentation produit.',
    githubUsername: 'aliya-nadi',
    avatarUrl: 'https://github.com/aliya-nadi.png',
    summary: 'Contributrice frontend de Kernel Forge. Son profil GitHub public met en évidence des travaux en HTML, Java et TypeScript, avec plusieurs projets académiques et applicatifs visibles.',
    skills: ['HTML', 'Java', 'TypeScript', 'Interfaces web', 'Prototypage frontend'],
    education: ['Parcours académique détaillé non publié sur le profil public consulté.'],
    projects: [
      { name: 'QuizMasterBattle', description: 'Projet public en TypeScript visible sur son profil GitHub.', href: 'https://github.com/Aliya-nadi/QuizMasterBattle' },
      { name: 'ALIYATOU-', description: 'Projet académique en Java.', href: 'https://github.com/Aliya-nadi/ALIYATOU-' },
      { name: 'bus-tickets-app', description: 'Projet web public en HTML.', href: 'https://github.com/Aliya-nadi/bus-tickets-app' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/aliya-nadi' }],
    certifications: [],
    evidence: 'Profil GitHub public consulté. Aucune biographie professionnelle, formation ou certification supplémentaire n’a été publiée sur cette source au moment de la collecte.',
  },
  {
    id: 'judith',
    name: 'Mandeng Judith Oceanne',
    position: 'Mobile',
    role: 'Mobile Developer',
    expertise: 'Prototypage d’applications, listes intelligentes et interfaces JavaScript.',
    githubUsername: 'oceannemj',
    avatarUrl: 'https://github.com/oceannemj.png',
    summary: 'Contributrice mobile de Kernel Forge. Ses dépôts publics montrent un intérêt pour les applications de listes, les interfaces JavaScript et les petits produits web.',
    skills: ['JavaScript', 'HTML', 'Interfaces web', 'Prototypage mobile'],
    education: ['Parcours académique détaillé non publié sur le profil public consulté.'],
    projects: [
      { name: 'MySmartList', description: 'Liste d’achats intelligente en HTML.', href: 'https://github.com/oceannemj/MySmartList' },
      { name: 'reactlist', description: 'Projet JavaScript autour d’une liste intelligente.', href: 'https://github.com/oceannemj/reactlist' },
      { name: 'trombinoscope', description: 'Projet JavaScript public.', href: 'https://github.com/oceannemj/trombinoscope' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/oceannemj' }],
    certifications: [],
    evidence: 'Profil GitHub public consulté. Les informations détaillées de formation et de parcours ne sont pas disponibles dans les sources publiques relevées.',
  },
  {
    id: 'william',
    name: 'Meli William',
    position: 'Backend & Data',
    role: 'Backend Developer',
    expertise: 'Projets applicatifs, Java, TypeScript, Dart et expérimentations mobiles.',
    githubUsername: 'WilliamMeli-27',
    avatarUrl: 'https://github.com/WilliamMeli-27.png',
    summary: 'Contributeur backend de Kernel Forge. Son activité GitHub publique rassemble des projets académiques et applicatifs en TypeScript, Java et Dart, notamment autour du mobile et d’interfaces de contrôle.',
    skills: ['TypeScript', 'Java', 'Dart', 'React Native', 'Applications mobiles', 'API et logique applicative'],
    education: ['Parcours académique détaillé non publié sur le profil public consulté.'],
    projects: [
      { name: 'Telecommande-Laser', description: 'Application de télécommande pour téléviseurs avec React Native.', href: 'https://github.com/WilliamMeli-27/Telecommande-Laser' },
      { name: 'Soutenance', description: 'Projet public en Dart.', href: 'https://github.com/WilliamMeli-27/Soutenance' },
      { name: 'TicToc', description: 'Exercice d’application inspiré d’une plateforme vidéo courte.', href: 'https://github.com/WilliamMeli-27/TicToc' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/WilliamMeli-27' }],
    certifications: [],
    evidence: 'Profil GitHub public consulté. Les expériences professionnelles, diplômes et certifications non présents sur cette source ne sont pas attribués.',
  },
  {
    id: 'sandra',
    name: 'FEBNCHAK SANDRA',
    position: 'Full-Stack',
    role: 'Développeuse Full-Stack · Mobile & Web',
    expertise: 'Conception d’applications mobiles et web de bout en bout, interfaces responsives, déploiement et exploration autonome de technologies modernes.',
    githubUsername: 'FEBNCHAK',
    avatarUrl: 'https://ui-avatars.com/api/?name=FEBNCHAK%20SANDRA&background=0d9488&color=fff&size=256&bold=true',
    summary: 'Développeuse full-stack et contributrice de Kernel Forge. Elle travaille sur des applications mobiles et web, depuis la conception des interfaces jusqu’à l’hébergement, et développe son expertise de manière autodidacte à travers des projets concrets.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Flutter', 'WordPress', 'Supabase', 'Oracle', 'Git', 'GitHub', 'XAMPP', 'Interfaces responsives', 'Déploiement web'],
    education: ['Licence en Génie Logiciel — en cours', 'Licence 2 ICT4D (Information & Communication Technologies for Development) — Université, en cours', 'Baccalauréat — 2023', 'Probatoire — 2022', 'Brevet d’Études du Premier Cycle (BEPC) — 2020', 'Certificat d’Études Primaires (CEP) — 2016'],
    projects: [
      { name: 'Projets mobiles et web personnels', description: 'Conception et développement de projets personnels de l’idée initiale jusqu’au déploiement, avec des interfaces adaptées aux différents écrans.', href: 'https://github.com/FEBNCHAK' },
      { name: 'HTML', description: 'Dépôt public de pratique HTML visible sur son profil GitHub.', href: 'https://github.com/FEBNCHAK/HTML' },
      { name: 'Nguiffo-Ivan', description: 'Projet public en HTML visible sur son profil GitHub.', href: 'https://github.com/FEBNCHAK/Nguiffo-Ivan' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/FEBNCHAK' }],
    certifications: [],
    languages: ['Français — courant', 'Anglais — intermédiaire'],
    interests: ['Jeux vidéo', 'Musique', 'Lecture'],
    evidence: 'CV fourni par Sandra et profil GitHub public consulté. Les coordonnées personnelles du CV ne sont pas reproduites sur cette page publique.',
  },
  {
    id: 'hassane',
    name: 'HASSANE YOUSSOF OUMAR',
    position: 'Backend & Data',
    role: 'Backend Developer',
    expertise: 'Backend et microservices au sein de l’équipe Kernel Forge.',
    githubUsername: 'hawadja1',
    avatarUrl: 'https://ui-avatars.com/api/?name=HASSANE%20YOUSSOF%20OUMAR&background=d97706&color=fff&size=256&bold=true',
    summary: 'Contributeur backend de Kernel Forge. Sa page publique est référencée par l’équipe, mais les informations détaillées n’ont pas pu être extraites de manière fiable lors de la collecte.',
    skills: ['Backend', 'Microservices'],
    education: ['Informations publiques insuffisantes pour documenter la formation sans extrapolation.'],
    projects: [],
    links: [{ label: 'GitHub', href: 'https://github.com/hawadja1' }],
    certifications: [],
    evidence: 'Profil GitHub référencé par la page Équipe. Les données détaillées doivent être complétées directement par le membre.',
  },
  {
    id: 'ange',
    name: 'Mokam Ange',
    position: 'Backend & Data',
    role: 'Backend Developer',
    expertise: 'Bases de données, projets Java, TypeScript et intégration de prototypes.',
    githubUsername: 'Ange55-star',
    avatarUrl: 'https://ui-avatars.com/api/?name=Mokam%20Ange&background=7c3aed&color=fff&size=256&bold=true',
    summary: 'Contributeur backend de Kernel Forge. Ses dépôts publics couvrent TypeScript, HTML et Java et montrent des travaux académiques ainsi que des expérimentations autour de Genkit et de projets Python.',
    skills: ['TypeScript', 'HTML', 'Java', 'Python', 'Projets académiques', 'Bases de données'],
    education: ['Parcours académique détaillé non publié sur le profil public consulté.'],
    projects: [
      { name: 'codelab-ai-genkit-rag', description: 'Projet public en TypeScript autour d’un codelab Genkit/RAG.', href: 'https://github.com/Ange55-star/codelab-ai-genkit-rag' },
      { name: 'Python_project', description: 'Premier projet Python indiqué par le dépôt public.', href: 'https://github.com/Ange55-star/Python_project' },
      { name: 'TP_O_ICT207_MOKAM_24H2139', description: 'Projet académique public en Java.', href: 'https://github.com/Ange55-star/TP_O_ICT207_MOKAM_24H2139' },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/Ange55-star' }],
    certifications: [],
    evidence: 'Profil GitHub public consulté. Les informations professionnelles et académiques qui ne figurent pas sur ce profil ne sont pas inventées.',
  },
  {
    id: 'juvenal',
    name: 'SINENG KENGNI JUVENAL',
    position: 'Backend & Data',
    role: 'Backend Developer · Data & Machine Learning',
    expertise: 'APIs, data science, machine learning, outillage backend et services multiplateformes.',
    githubUsername: 'skjuv',
    avatarUrl: 'https://github.com/skjuv.png',
    summary: 'Contributeur backend et data de Kernel Forge. Son profil public met en avant l’innovation technologique, la transformation digitale, le machine learning et la data science. Il publie également un site personnel et un outil API open source.',
    skills: ['Python', 'Machine learning', 'Data science', 'APIs', 'Backend', 'Analyse statique', 'CI/CD'],
    education: ['Parcours académique détaillé non publié sur les sources publiques consultées.'],
    projects: [
      { name: 'api-quick', description: 'Moteur HTTP multi-interface, analyseur statique de routes et atelier API documenté sur son site.', href: 'https://github.com/SKJUV/api-quick' },
      { name: 'rebase', description: 'Dépôt Python épinglé sur son profil GitHub.', href: 'https://github.com/SKJUV/rebase' },
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/skjuv' },
      { label: 'Portfolio / documentation', href: 'https://sineng-juvenal.me' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/juvenal-sineng-kengni' },
    ],
    certifications: [],
    evidence: 'Profil GitHub, site personnel et lien LinkedIn publics consultés. Les informations non publiées par ces sources ne sont pas ajoutées.',
  },
]

export function getTeamProfile(id: string) {
  return TEAM_PROFILES.find((profile) => profile.id === id)
}
