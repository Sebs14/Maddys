import janesWalk from '@/app/assets/projects/janeWalks/janesWalk.jpg';
import conexionCultural from '@/app/assets/projects/ConexionCultural/ConexionCultural.jpg';
import melancoliaEminente from '@/app/assets/projects/MelancoliaEminente/melancoliaEminente.jpg';
import { StaticImageData } from 'next/image';

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
    id: '1',
    slug: 'janes-walk',
    title: 'Jane’s Walk Festival 2025 - Toronto, Canada',
    description: 'Jane’s Walk Festival 2025',
    image: janesWalk,
    tags: ['ILUSTRACIÓN'],
  },
  {
    id: '2',
    slug: 'conexionCultural',
    title: 'Conexión Cultural - REBRAND 2024',
    description: 'Rebranding para Conexión Cultural',
    image: conexionCultural,
    tags: ['ILUSTRACIÓN'],
  },
  {
    id: '3',
    slug: 'melancolia-eminente',
    title: 'Melancolía Inminente - Imaginario Simbólico',
    description: 'Proyecto personal sobre la melancolía',
    image: melancoliaEminente,
    tags: ['EDITORIAL'],
  },
];
