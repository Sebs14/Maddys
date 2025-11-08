import janesWalk from "@/app/assets/projects/janeWalks/janesWalk.jpg";
import caballoImage from "@/app/assets/projects/caballo/c.jpeg";
import charlieImage from "@/app/assets/projects/charlie/charlie.jpeg";
import floresImage from "@/app/assets/projects/flores/flowers.jpeg";
import horseImage from "@/app/assets/projects/horse/horse.jpeg";
import letImage from "@/app/assets/projects/let/let.webp";
import lsImage from "@/app/assets/projects/ls/ls.jpeg";
import miraportaImage from "@/app/assets/projects/miraporta/miraporta.png";
import mksImage from "@/app/assets/projects/mks/mks.webp";
import volcanImage from "@/app/assets/projects/volcan/volcan.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  year: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "janes-walk",
    title: "Jane’s Walk Festival 2025 - Toronto, Canada",
    description: "Jane’s Walk Festival 2025",
    image: janesWalk,
    tags: ["ILUSTRACIÓN"],
    year: "",
  },
  {
    id: "2",
    slug: "caballo",
    title: "Proyecto Caballo",
    description: "Descripción del proyecto caballo",
    image: caballoImage,
    tags: ["Fotografía", "Arte"],
    year: "2024",
  },
  {
    id: "3",
    slug: "charlie",
    title: "Proyecto Charlie",
    description: "Descripción del proyecto charlie",
    image: charlieImage,
    tags: ["Ilustración"],
    year: "2024",
  },
  {
    id: "4",
    slug: "flores",
    title: "Proyecto Flores",
    description: "Descripción del proyecto flores",
    image: floresImage,
    tags: ["Naturaleza"],
    year: "2024",
  },
  {
    id: "5",
    slug: "horse",
    title: "Proyecto Horse",
    description: "Descripción del proyecto horse",
    image: horseImage,
    tags: ["Arte Digital"],
    year: "2024",
  },
  {
    id: "6",
    slug: "let",
    title: "Proyecto Let",
    description: "Descripción del proyecto let",
    image: letImage,
    tags: ["Tipografía"],
    year: "2024",
  },
  {
    id: "7",
    slug: "ls",
    title: "Proyecto LS",
    description: "Descripción del proyecto ls",
    image: lsImage,
    tags: ["Branding"],
    year: "2024",
  },
  {
    id: "8",
    slug: "miraporta",
    title: "Proyecto Miraporta",
    description: "Descripción del proyecto miraporta",
    image: miraportaImage,
    tags: ["Web Design"],
    year: "2024",
  },
  {
    id: "9",
    slug: "mks",
    title: "Proyecto MKS",
    description: "Descripción del proyecto mks",
    image: mksImage,
    tags: ["UI/UX"],
    year: "2024",
  },
  {
    id: "10",
    slug: "volcan",
    title: "Proyecto Volcán",
    description: "Descripción del proyecto volcán",
    image: volcanImage,
    tags: ["Fotografía"],
    year: "2024",
  },
];
