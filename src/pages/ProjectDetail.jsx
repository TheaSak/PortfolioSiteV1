import { useParams, Link } from 'react-router-dom';
import projectsData from '../Data/projects.json';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <p className="text-zinc-600">The project ID does not exist in our directory.</p>
        <Link to="/projects" className="inline-block px-4 py-2 bg-amber-500 text-zinc-950 font-semibold rounded-md">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link to="/projects" className="inline-block text-xs text-zinc-700">
        <span className="inline-block p-3 bg-white border border-zinc-200 hover:bg-zinc-100 rounded-lg cursor-pointer">Back to Projects</span>
      </Link>

      <div className="space-y-4">

        <h1 className="text-3xl font-extrabold mt-5">{project.title}</h1>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="w-full h-56 sm:h-72 md:h-100 object-cover bg-zinc-100 border border-zinc-200 rounded-xl" />}

      <div className="space-y-4 text-zinc-700 leading-relaxed">
        <h3 className="text-lg font-bold text-zinc-900">About the Project</h3>
        <p>{project.fullDescription}</p>
      </div>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 border-t border-zinc-200">
        <a href={project.vercelUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 text-center bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold rounded-lg">
          Live Vercel Site
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 text-center bg-white border border-zinc-300 text-zinc-800 font-semibold rounded-lg hover:bg-zinc-100">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}