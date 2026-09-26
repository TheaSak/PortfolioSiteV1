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
        <p className="text-zinc-400">Deployed applications, systems experiments, and open-source code.</p>
      </div>

      {/* Search Bar Only */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <input
          type="text"
          placeholder="Search projects by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-80 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-100 focus:outline-none focus:border-amber-400"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div key={proj.id} className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-colors">
            {proj.imageUrl && (
              <img src={proj.imageUrl} alt={proj.title} className="w-full h-50 object-cover bg-zinc-800" />
            )}
            <div className="p-5 space-y-4 flex-grow flex flex-col justify-between">
              <div className="space-y-2">
                
                <h3 className="text-lg font-bold">{proj.title}</h3>
                <p className="text-xs text-zinc-400 line-clamp-2">{proj.shortDescription}</p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {proj.techStack.map((tech) => (
                    <span key={tech} className="text-[10px] px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-zinc-400 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-zinc-800/80 text-xs font-semibold">
                  <Link to={`/projects/${proj.id}`} className="text-amber-400 hover:underline">
                    Details →
                  </Link>
                  <a href={proj.vercelUrl} target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-zinc-100 hover:underline">
                    Live Demo 
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}