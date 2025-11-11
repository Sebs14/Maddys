import janesWalk from "@/app/assets/projects/janeWalks/janesWalk.jpg";
import conexionCultural from "@/app/assets/projects/ConexionCultural/ConexionCultural.jpg";
// import caballoImage from "@/app/assets/projects/caballo/c.jpeg";
// import charlieImage from "@/app/assets/projects/charlie/charlie.jpeg";
// import floresImage from "@/app/assets/projects/flores/flowers.jpeg";
// import horseImage from "@/app/assets/projects/horse/horse.jpeg";
// import letImage from "@/app/assets/projects/let/let.webp";
// import lsImage from "@/app/assets/projects/ls/ls.jpeg";
// import miraportaImage from "@/app/assets/projects/miraporta/miraporta.png";
// import mksImage from "@/app/assets/projects/mks/mks.webp";
// import volcanImage from "@/app/assets/projects/volcan/volcan.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  year?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "janes-walk",
    title: "Jane’s Walk Festival 2025 - Toronto, Canada",
    description: "Jane’s Walk Festival 2025",
    image: janesWalk,
    tags: ["ILUSTRACIÓN"],
  },
  {
    id: "2",
    slug: "conexionCultural",
    title: "Conexión Cultural - REBRAND 2024",
    description: "Rebranding para Conexión Cultural",
    image: conexionCultural,
    tags: ["ILUSTRACIÓN"],
  },
];
