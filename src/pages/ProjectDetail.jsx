import { useParams, Link } from 'react-router-dom';
import projectsData from '../Data/projects.json';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <p className="text-zinc-400">The project ID does not exist in our directory.</p>
        <Link to="/projects" className="inline-block px-4 py-2 bg-amber-400 text-zinc-950 font-semibold rounded-md">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Link to="/projects" className="text-xs text-zinc-400 ">
         <button className='p-3 bg-zinc-900 hover:bg-zinc-800 rounded-2xl hover: cursor-pointer'>Back to Projects</button>
      </Link>

      <div className="space-y-4">

        <h1 className="text-3xl font-extrabold mt-5">{project.title}</h1>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 rounded">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="w-full h-100 object-cover bg-zinc-900 border border-zinc-800 rounded-xl" />}

      <div className="space-y-4 text-zinc-300 leading-relaxed">
        <h3 className="text-lg font-bold text-zinc-100">About the Project</h3>
        <p>{project.fullDescription}</p>
      </div>

      <div className="flex gap-4 pt-4 border-t border-zinc-800">
        <a href={project.vercelUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-amber-400 hover:bg-amber-600 text-zinc-950 font-semibold rounded-lg">
          Live Vercel Site
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-800">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}