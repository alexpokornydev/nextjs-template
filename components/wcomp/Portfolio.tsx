'use client';

import { useEffect, useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  year: number;
  tags: string[];
  category: string;
  image: string;
};

const filters = ['All', 'Web', 'Mobile', 'Branding'];

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error('Failed to fetch projects:', err));
  }, []);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-background1 text-white py-16 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">My Portfolio</h2>
        <p className="text-center text-gray-400 mb-10">
          Discover my latest projects and achievements
        </p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full font-semibold border transition ${
                activeFilter === filter
                  ? 'bg-primary text-white'
                  : 'border-primary text-primary hover:bg-primary hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-[#1e1e2f] rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span className="text-sm text-white bg-gray-700 px-2 py-1 rounded-full float-right">
                  {project.year}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
