import { Link } from 'react-router-dom';
import educationData from '../Data/education.json';

export default function Home() {
  const skills = ['Python', 'Java', 'JavaScript', 'C++', 'HTML/CSS', 'ReactJS', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub'];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 pt-4 flex">
        <div className='w-[70%] space-y-8'>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold">
            🏆 7x Gold Medallist • Dual Degree CS Undergrad
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-100">
            Hi, I'm <span className="text-amber-400">Thea Monyrithsak</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
            I am currently pursuing a dual B.S. in IT Management & Computer Science at AUPP & Fort Hays State University (GPA: 3.77). I am very passionate about software engineering, system fundamentals, and competitive problem solving.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link to="/projects" className="px-6 py-3 bg-zinc-100 text-zinc-950 font-semibold rounded-lg hover:bg-zinc-300 transition-colors">
              View Projects
            </Link>
            <Link to="/achievements" className="px-6 py-3 border border-zinc-700 bg-zinc-900 text-zinc-200 font-semibold rounded-lg hover:bg-zinc-800 transition-colors">
              View 7 Gold Medals
            </Link>
          </div>
        </div>
        <div className='w-[30%] bg-amber-900 h-[350px] overflow-hidden rounded-2xl border-cyan-950 shadow-[0_0_20px_rgba(6,182,212,0.7)]'>
          <img src="/images/Profile.JPG" width={"400px"} alt="" />
        </div>
      </section>

      {/* Education Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-zinc-800 pb-2">Education & Academic Record</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu) => (
            <div key={edu.id} className="bg- border border-zinc-800 p-6 rounded-xl space-y-4 hover:border-zinc-700 transition-colors">
              <div className="flex items-center gap-4">
                <img src={edu.logoUrl} alt={edu.schoolName} className="w-12 h-12 object-contain bg-white p-1 rounded-md" />
                <div>
                  <a href={edu.schoolUrl} target="_blank" rel="noreferrer" className="font-semibold text-zinc-100 hover:underline">
                    {edu.schoolName}
                  </a>
                  <p className="text-xs text-zinc-400">{edu.expectedGrad}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-amber-400">{edu.degree} • GPA: {edu.gpa}</p>
              <p className="text-xs text-zinc-400 leading-relaxed">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b border-zinc-800 pb-2">Technical Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-mono rounded-md">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}