import { NextApiRequest, NextApiResponse } from 'next';

const projects = [
  {
    id: 1,
    title: 'Mobile Category',
    description: 'UX research + UI design for a medical monitoring application',
    year: 2024,
    tags: ['UX Research', 'UI Design', 'Mobile'],
    category: 'Mobile',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    id: 2,
    title: 'Web Category',
    description: 'Data visualization interface for B2B platform',
    year: 2024,
    tags: ['Dashboard', 'Data Viz', 'B2B'],
    category: 'Web',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    id: 3,
    title: 'Mobile Category #2',
    description: 'Design system and interfaces for shopping application',
    year: 2023,
    tags: ['E-commerce', 'Design System', 'Mobile'],
    category: 'Mobile',
    image: 'https://via.placeholder.com/400x200',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(projects);
}