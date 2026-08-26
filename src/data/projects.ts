export interface Project {
  id: string | number;
  slug?: string;
  titleKey: string;
  descKey: string;
  challengeKey?: string;
  solutionKey?: string;
  category: string;
  year: number;
  colors?: string[];
  deliverables?: string[];
  coverImage: string;
  gallery: string[];
  allowExpand?: boolean;
  url?: string;
  previewGallery?: string[];
}

export function findProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (p) =>
      p.id.toString() === slug ||
      p.titleKey.split(".")[2]?.toLowerCase() === slug.toLowerCase()
  );
}

export const projects: Project[] = [
  // BRANDING PROJECTS
  {
    id: 1,
    titleKey: "project.branding.dantano.title",
    descKey: "project.branding.dantano.desc",
    challengeKey: "project.branding.dantano.challenge",
    solutionKey: "project.branding.dantano.solution",
    category: "branding",
    year: 2020,
    colors: ["#7C2D12", "#D97706", "#FEF3C7", "#18181B"],
    deliverables: ["Brand Strategy", "Visual Identity", "Packaging Design"],
    coverImage: "assets/img/portfolio/branding/001_d_antano/00.webp",
    gallery: [
      "assets/img/portfolio/branding/001_d_antano/00.webp",
      "assets/img/portfolio/branding/001_d_antano/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 2,
    titleKey: "project.branding.fromtheocean.title",
    descKey: "project.branding.fromtheocean.desc",
    challengeKey: "project.branding.fromtheocean.challenge",
    solutionKey: "project.branding.fromtheocean.solution",
    category: "branding",
    year: 2021,
    colors: ["#0284C7", "#0369A1", "#E0F2FE", "#0F172A"],
    deliverables: ["ONG Identity", "Campaign Posters", "Motion Graphics"],
    coverImage: "assets/img/portfolio/branding/002_from_the_ocean/00.webp",
    gallery: [
      "assets/img/portfolio/branding/002_from_the_ocean/00.webp",
      "assets/img/portfolio/branding/002_from_the_ocean/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 3,
    titleKey: "project.branding.robertcapa.title",
    descKey: "project.branding.robertcapa.desc",
    challengeKey: "project.branding.robertcapa.challenge",
    solutionKey: "project.branding.robertcapa.solution",
    category: "branding",
    year: 2022,
    colors: ["#18181B", "#CA8A04", "#F4F4F5", "#27272A"],
    deliverables: ["Spirits Identity", "Luxury Packaging", "Storytelling"],
    coverImage: "assets/img/portfolio/branding/003_robert_capa/00.webp",
    gallery: [
      "assets/img/portfolio/branding/003_robert_capa/00.webp",
      "assets/img/portfolio/branding/003_robert_capa/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 4,
    titleKey: "project.branding.zeth.title",
    descKey: "project.branding.zeth.desc",
    challengeKey: "project.branding.zeth.challenge",
    solutionKey: "project.branding.zeth.solution",
    category: "branding",
    year: 2023,
    colors: ["#059669", "#10B981", "#ECFDF5", "#064E3B"],
    deliverables: ["Type Design", "Specimen Poster", "Editorial Layout"],
    coverImage: "assets/img/portfolio/branding/004_zeth/00.webp",
    gallery: [
      "assets/img/portfolio/branding/004_zeth/00.webp",
      "assets/img/portfolio/branding/004_zeth/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 5,
    titleKey: "project.branding.summergroove.title",
    descKey: "project.branding.summergroove.desc",
    challengeKey: "project.branding.summergroove.challenge",
    solutionKey: "project.branding.summergroove.solution",
    category: "branding",
    year: 2023,
    colors: ["#EA580C", "#C026D3", "#FDE047", "#1E1B4B"],
    deliverables: ["Festival Branding", "Motion Poster", "Merchandising"],
    coverImage: "assets/img/portfolio/branding/005_summer_groove/00.webp",
    gallery: [
      "assets/img/portfolio/branding/005_summer_groove/00.webp",
      "assets/img/portfolio/branding/005_summer_groove/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 6,
    titleKey: "project.branding.whopperking.title",
    descKey: "project.branding.whopperking.desc",
    challengeKey: "project.branding.whopperking.challenge",
    solutionKey: "project.branding.whopperking.solution",
    category: "branding",
    year: 2023,
    colors: ["#DC2626", "#F59E0B", "#FEF2F2", "#451A03"],
    deliverables: ["Rebranding Concept", "Food Packaging", "Digital Menu"],
    coverImage: "assets/img/portfolio/branding/006_whopper_king/00.webp",
    gallery: [
      "assets/img/portfolio/branding/006_whopper_king/00.webp",
      "assets/img/portfolio/branding/006_whopper_king/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 7,
    titleKey: "project.branding.aemg.title",
    descKey: "project.branding.aemg.desc",
    challengeKey: "project.branding.aemg.challenge",
    solutionKey: "project.branding.aemg.solution",
    category: "branding",
    year: 2023,
    colors: ["#2563EB", "#3B82F6", "#EFF6FF", "#1E3A8A"],
    deliverables: ["Corporate Identity", "Brand Guidelines", "Stationery"],
    coverImage: "assets/img/portfolio/branding/007_aemg/00.webp",
    gallery: [
      "assets/img/portfolio/branding/007_aemg/00.webp",
      "assets/img/portfolio/branding/007_aemg/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 8,
    titleKey: "project.branding.curcuns.title",
    descKey: "project.branding.curcuns.desc",
    challengeKey: "project.branding.curcuns.challenge",
    solutionKey: "project.branding.curcuns.solution",
    category: "branding",
    year: 2023,
    colors: ["#D97706", "#7C2D12", "#FFFBEB", "#451A03"],
    deliverables: ["Cultural Branding", "Illustration System", "Event Packaging"],
    coverImage: "assets/img/portfolio/branding/008_juego_de_guaguas/00.webp",
    gallery: [
      "assets/img/portfolio/branding/008_juego_de_guaguas/00.webp",
      "assets/img/portfolio/branding/008_juego_de_guaguas/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 9,
    titleKey: "project.branding.dosefes.title",
    descKey: "project.branding.dosefes.desc",
    challengeKey: "project.branding.dosefes.challenge",
    solutionKey: "project.branding.dosefes.solution",
    category: "branding",
    year: 2024,
    colors: ["#0D9488", "#14B8A6", "#CCFBF1", "#115E59"],
    deliverables: ["Pharmacy Branding", "Packaging System", "Web UI Concept"],
    coverImage: "assets/img/portfolio/branding/009_dos_efes/00.webp",
    gallery: [
      "assets/img/portfolio/branding/009_dos_efes/00.webp",
      "assets/img/portfolio/branding/009_dos_efes/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 10,
    titleKey: "project.branding.sompa.title",
    descKey: "project.branding.sompa.desc",
    challengeKey: "project.branding.sompa.challenge",
    solutionKey: "project.branding.sompa.solution",
    category: "branding",
    year: 2025,
    colors: ["#65A30D", "#84CC16", "#ECFCCB", "#365314"],
    deliverables: ["Music Identity", "Vinyl Album Art", "Stage Visuals"],
    coverImage: "assets/img/portfolio/branding/010_sonpa/00.webp",
    gallery: [
      "assets/img/portfolio/branding/010_sonpa/00.webp",
      "assets/img/portfolio/branding/010_sonpa/01.webp",
    ],
    allowExpand: true,
  },
  {
    id: 11,
    titleKey: "project.branding.antaera.title",
    descKey: "project.branding.antaera.desc",
    challengeKey: "project.branding.antaera.challenge",
    solutionKey: "project.branding.antaera.solution",
    category: "branding",
    year: 2025,
    colors: ["#9333EA", "#A855F7", "#F3E8FF", "#581C87"],
    deliverables: ["Hospitality Branding", "Handcrafted Menu", "Interior Signage"],
    coverImage: "assets/img/portfolio/branding/011_bitacora/00.webp",
    gallery: [
      "assets/img/portfolio/branding/011_bitacora/00.webp",
      "assets/img/portfolio/branding/011_bitacora/01.webp",
    ],
    allowExpand: true,
  },

  // CODING PROJECTS
  {
    id: 12,
    titleKey: "project.coding.cvdll.title",
    descKey: "project.coding.cvdll.desc",
    challengeKey: "project.branding.cvdll.challenge",
    solutionKey: "project.branding.cvdll.solution",
    category: "coding",
    year: 2025,
    colors: ["#4F46E5", "#6366F1", "#EEF2FF", "#312E81"],
    deliverables: ["Interactive Web", "Infographic Engine", "UI Architecture"],
    url: "https://cvdll.github.io/CVDLL/",
    coverImage: "assets/img/portfolio/coding/001_cvdll/00.webp",
    gallery: [
      "assets/img/portfolio/coding/001_cvdll/00.webp",
      "assets/img/portfolio/coding/001_cvdll/01.webp",
    ],
    allowExpand: true,
  },

  // ANIMATING PROJECTS
  {
    id: 13,
    titleKey: "project.animating.corazonesalrescate.title",
    descKey: "project.animating.corazonesalrescate.desc",
    challengeKey: "project.branding.corazonesalrescate.challenge",
    solutionKey: "project.branding.corazonesalrescate.solution",
    category: "animating",
    year: 2023,
    colors: ["#E11D48", "#F43F5E", "#FFE4E6", "#881337"],
    deliverables: ["2D Animation", "Character Design", "Storyboard & Sound"],
    coverImage:
      "assets/img/portfolio/animating/001_corazones_al_rescate/00.webp",
    previewGallery: [
      "assets/img/portfolio/animating/001_corazones_al_rescate/00.webp",
      "assets/img/portfolio/animating/001_corazones_al_rescate/01.webp",
    ],
    gallery: [
      "assets/img/portfolio/animating/001_corazones_al_rescate/00.webp",
      "assets/img/portfolio/animating/001_corazones_al_rescate/01.mp4",
    ],
    allowExpand: true,
  },
];
