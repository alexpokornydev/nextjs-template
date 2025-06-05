import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  {
    id: 1,
    title: 'Refonte App Santé',
    description: 'UX research + UI design pour une application de suivi médical',
    year: 2024,
    tags: ['UX Research', 'UI Design', 'Mobile'],
    category: 'Mobile',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Interface de data visualisation pour plateforme B2B',
    year: 2024,
    tags: ['Dashboard', 'Data Viz', 'B2B'],
    category: 'Web',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    id: 3,
    title: 'E-commerce Mobile',
    description: 'Design system et interfaces pour application shopping',
    year: 2023,
    tags: ['E-commerce', 'Design System', 'Mobile'],
    category: 'Mobile',
    image: 'https://via.placeholder.com/400x200',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}