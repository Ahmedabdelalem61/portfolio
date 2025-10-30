import { BookOpen, Award, Trophy, Users } from 'lucide-react'
const EducationSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Education & Achievements</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Strong academic foundation with competitive programming excellence and community leadership</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 transition-all duration-300 rounded-xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={32} className="text-indigo-400" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">Faculty of Computer and Informatics</h4>
                    <p className="text-indigo-400 font-semibold">Bachelor of Computer Science</p>
                  </div>
                </div>
                <p className="text-slate-400 mb-3">Zagazig University • 2018 - 2022</p>
                <div>
                  <p className="text-sm font-bold text-indigo-400 mb-2">Relevant Coursework:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {['Object-Oriented Programming','Design Patterns','Data Structures','Algorithms','Artificial Intelligence','Computer Networking','Machine Learning','Deep Learning'].map((course, idx) => (<span key={idx} className="text-slate-300 text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />{course}</span>))}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 text-lg">Key Strengths</h4>
                <ul className="space-y-2">
                  {['Strong foundation in computer science fundamentals','Expertise in algorithms and data structures','Deep understanding of design patterns','AI/ML knowledge base'].map((strength, idx) => (<li key={idx} className="text-slate-300 text-sm flex items-start gap-2"><span className="text-indigo-400 mt-1">✓</span>{strength}</li>))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 rounded-xl" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={32} className="text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
            </div>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-700">
                <div className="flex items-start gap-3 mb-3">
                  <Award size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">2x ECPC Qualifier</h4>
                    <p className="text-purple-400 text-sm">Egyptian Collegiate Programming Contest</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm ml-9">Ranked <strong>1st among Zagazig University</strong> participants in the ECPC qualification rounds. Demonstrated exceptional competitive programming skills.</p>
                <a href="https://icpc.global/ICPCID/U39DE9L5UYYP" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 text-sm font-semibold ml-9 mt-2 inline-block">View Credential →</a>
              </div>
              <div className="pb-6 border-b border-slate-700">
                <div className="flex items-start gap-3 mb-3">
                  <Trophy size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">2x ECPC Finalist</h4>
                    <p className="text-purple-400 text-sm">Egyptian Collegiate Programming Contest</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm ml-9">Qualified for the finals of the Egyptian Collegiate Programming Contest in multiple years, showcasing consistent performance and problem-solving expertise.</p>
                <a href="https://icpc.global/ICPCID/U39DE9L5UYYP" target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 text-sm font-semibold ml-9 mt-2 inline-block">View Credential →</a>
              </div>
              <div>
                <h4 className="font-bold text-white mb-3 text-lg">Key Achievements</h4>
                <ul className="space-y-2">{['Top competitive programmer at university level','Consistent finalist in national programming contests','Demonstrated excellence in algorithm design'].map((achievement, idx) => (<li key={idx} className="text-slate-300 text-sm flex items-start gap-2"><span className="text-purple-400 mt-1">★</span>{achievement}</li>))}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
        <div className="flex items-center gap-3 mb-8"><Users size={32} className="text-green-400" /><h3 className="text-2xl font-bold text-white">Volunteer Experience & Mentorship</h3></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pb-8 border-b md:border-b-0 md:border-r border-slate-700">
            <h4 className="text-lg font-bold text-green-400 mb-3">Mentor & Instructor</h4>
            <p className="text-slate-400 text-sm mb-3"><strong>ICPC Zagazig Community</strong> • Nov 2021 - Present</p>
            <ul className="space-y-2">
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">→</span>Organized online and offline technical training</li>
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">→</span>Provided soft-skills coaching to many students</li>
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">→</span>Impacted hundreds of students in competitive programming</li>
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">→</span>Community link: <a href="https://www.facebook.com/ACMZU" target="_blank" rel="noreferrer" className="text-green-400 hover:text-green-300">ICPC Zagazig</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold text-green-400 mb-3">ECPC Contest Coach</h4>
            <p className="text-slate-400 text-sm mb-3"><strong>Zagazig University</strong> • 2022 - 2023</p>
            <ul className="space-y-2">
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">→</span>Coached ECPC contestants at university</li>
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">→</span>Provided guidance on problem-solving strategies</li>
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">→</span>Mentored multiple finalist teams</li>
              <li className="text-slate-300 text-sm flex items-start gap-2"><span className="text-green-400 mt-1">→</span>Knowledge transfer and skill development</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-slate-400 mb-4">Explore more about my work and interests:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://www.facebook.com/ACMZU" target="_blank" rel="noreferrer" className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white text-sm font-medium">🎓 ICPC Community</a>
          <a href="https://www.goodreads.com/user/show/123507467-ahmed-abdelalem" target="_blank" rel="noreferrer" className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white text-sm font-medium">📚 Goodreads Profile</a>
          <a href="https://github.com/ahmedabdelalem61" target="_blank" rel="noreferrer" className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-slate-300 hover:text-white text-sm font-medium">💻 GitHub Projects</a>
        </div>
      </div>
    </section>
  )
}
export default EducationSection
