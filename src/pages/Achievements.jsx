import achievementsData from '../Data/achievement.json';

export default function Achievements() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Medals & Honors</h1>
        <p className="text-zinc-400">Verified competitive achievements, awards, and certifications.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {achievementsData.map((item) => (
          <div key={item.id} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4 hover:border-zinc-700 transition-colors h-130 overflow-hidden">
            <div className="flex justify-between items-start gap-4">
              <div className="flex gap-3 items-center">
                {item.competitionLogo && <img src={item.competitionLogo} alt="" className="w-10 h-10 object-contain bg-white p-1 rounded-md" />}
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-xs text-zinc-400">{item.issuer}</p>
                </div>
              </div>
              
            </div>

            <p className="text-sm text-zinc-300">{item.description}</p>

            {item.medalImage && <img src={item.medalImage} alt={item.title} className="w-full object-cover  rounded-lg bg-zinc-800 border border-zinc-800" />}
          </div>
        ))}
      </div>
    </div>
  );
}