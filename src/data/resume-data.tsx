import { CodeFU, TallerArteXolotl, TheGardenCafe } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Arturo Mejía",
  initials: "AM",
  location: "Managua, Nicaragua",
  locationLink: "https://www.google.com/maps/place/Managua",
  about:
    "Desarrollador Web con una pasión por el desarrollo web, destacándome como autodidacta.",
  summary:
    "Estudiante de Ingeniería de Sistemas con una pasión por el desarrollo web, destacándome como autodidacta. Poseo experiencia en una variedad de lenguajes de programación, incluyendo JavaScript, TypeScript, Python y SQL. Mi enfoque se centra en el desarrollo web, y tengo un conocimiento sólido en el uso de frameworks Frontend como ReactJS y NextJS para la creación de interfaces gráficas.",
  avatarUrl:
    "https://code-fu.net.ni/wp-content/uploads/2024/01/amejia-001.webp",
  personalWebsiteUrl: "https://github.com/ArturoAMejia",
  contact: {
    email: "armejia02@gmail.com",
    tel: "+505 58102409",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ArturoAMejia",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arturo-amejia/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ArturoAMejia",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Universidad Nacional de Ingeniería",
      degree: "Ingeniería de Sistemas",
      start: "2020",
      end: "2024",
    },
    {
      school: "Harvard",
      degree: "Web50x",
      start: "2022",
      end: "2022",
    },
    {
      school: "Harvard",
      degree: "CS50x",
      start: "2021",
      end: "2021",
    },
  ],
  work: [
    {
      company: "Code-FU",
      link: "https://code-fu.net.ni",
      badges: [],
      title: "Líder de Curso",
      logo: CodeFU,
      start: "2022",
      end: "2024",
      description:
        "Liderar el curso de Web50x.ni, enseñando a los estudiantes las mejores prácticas y herramientas para ser un desarrollador de web profesional.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "Flask",
    "Django",
  ],
  projects: [
    {
      title: "Taller de Arte Xolotl",
      techStack: [
        "Proyecto Personal",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "PostgreSQL",
      ],
      description:
        "Una plataforma de comercio electrónico para artistas nicaragüenses",
      logo: TallerArteXolotl,
      link: {
        label: "taller-arte-xolotl.com",
        href: "https://taller-arte-xolotl-c918.vercel.app/",
      },
    },
    {
      title: "The Garden Café",
      techStack: ["Proyecto Universitario", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Tanstack Query", "Redux",],
      description:
        "Sistema de información para un café local en Granada, Nicaragua.",
      logo: TheGardenCafe,
      link: {
        label: "the-garden-cafe.vercel.app",
        href: "https://the-garden-cafe.vercel.app/",
      },
    },
  ],
} as const;
