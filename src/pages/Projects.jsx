import { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../Data/projects.json';

export default function Projects() {
  const [search, setSearch] = useState('');

  // Filter projects by title search only
  const filteredProjects = projectsData.filter((proj) =>
    proj.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Projects Gallery</h1>
        <p className="text-zinc-600">Deployed applications, systems experiments, and open-source code.</p>
      </div>

      {/* Search Bar Only */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <input
          type="text"
          placeholder="Search projects by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 bg-white border border-zinc-300 rounded-lg text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <Link key={proj.id} to={`/projects/${proj.id}`} className="bg-white border border-zinc-200 rounded-xl overflow-hidden flex flex-col justify-between hover:border-amber-500 hover:shadow-[0_8px_25px_rgba(24,24,27,0.08)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-600">
            {proj.imageUrl && (
              <img src={proj.imageUrl} alt={proj.title} className="w-full h-50 object-cover bg-zinc-100" />
            )}
            <div className="p-5 space-y-4 grow flex flex-col justify-between">
              <div className="space-y-2">
                
                <h3 className="text-lg font-bold text-zinc-900">{proj.title}</h3>
                <p className="text-xs text-zinc-600 line-clamp-2">{proj.shortDescription}</p>
              </div>

              
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}