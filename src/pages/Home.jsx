import { Link } from 'react-router-dom';
import educationData from '../Data/education.json';

export default function Home() {
  const skills = ['Python', 'Java', 'JavaScript', 'C++', 'HTML/CSS', 'ReactJS', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub'];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col-reverse items-stretch gap-8 pt-4 md:grid md:grid-cols-[minmax(0,7fr)_minmax(220px,3fr)] md:items-center md:gap-8">
        <div className="min-w-0 space-y-6 sm:space-y-8">
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950">
            Hi, I'm <span className="text-amber-700">Thea Monyrithsak</span>
          </h1>
          <p className="text-lg text-zinc-600 max-w-2xl leading-relaxed">
            I am currently pursuing a dual B.S. in IT Management & Computer Science at AUPP & Fort Hays State University (GPA: 3.77). I am very passionate about software engineering, system fundamentals, and competitive problem solving.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/projects" className="px-6 py-3 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-700 transition-colors">
              View Projects
            </Link>
            <Link to="/achievements" className="px-6 py-3 border border-zinc-300 bg-white text-zinc-800 font-semibold rounded-lg hover:bg-zinc-100 transition-colors">
              View 7 Gold Medals
            </Link>
          </div>
        </div>
        <div className="mx-auto aspect-3/4 w-full max-w-sm overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_12px_35px_rgba(24,24,27,0.12)] md:mx-0 md:max-w-none">
          <img src="/images/pfp.jpg" alt="Thea Monyrithsak" className="h-full w-full object-cover object-top" />
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-zinc-200 pb-2">Education & Academic Record</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg-white border border-zinc-200 p-6 rounded-xl space-y-4 hover:border-zinc-300 transition-colors">
              <div className="flex items-center gap-4">
                <img src={edu.logoUrl} alt={edu.schoolName} className="w-12 h-12 object-contain bg-white p-1 rounded-md" />
                <div>
                  <a href={edu.schoolUrl} target="_blank" rel="noreferrer" className="font-semibold text-zinc-900 hover:underline">
                    {edu.schoolName}
                  </a>
                  <p className="text-xs text-zinc-500">{edu.expectedGrad}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-amber-800">{edu.degree} | GPA: {edu.gpa}</p>
              <p className="text-xs text-zinc-600 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b border-zinc-200 pb-2">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-mono rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}