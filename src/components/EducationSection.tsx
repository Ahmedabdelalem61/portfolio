import { BookOpen, Award, Trophy, Users, ExternalLink } from 'lucide-react'

const EducationSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-4">Background</p>
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          <span className="text-white">Education</span>{' '}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">& Achievements</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Strong academic foundation with competitive programming excellence and community leadership
        </p>
      </div>

      {/* Education + Awards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Education */}
        <div className="rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/20 transition-all duration-300 p-7 sm:p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-500/10">
              <BookOpen size={22} className="text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Education</h3>
          </div>

          <div className="mb-8 pb-8 border-b border-slate-800/50">
            <h4 className="text-lg font-bold text-white mb-1">Faculty of Computer and Informatics</h4>
            <p className="text-indigo-400 font-semibold text-sm mb-1">Bachelor of Computer Science</p>
            <p className="text-slate-500 text-sm">Zagazig University &middot; 2018 - 2022</p>
          </div>

          <div>
            <p className="text-xs font-bold text-indigo-400 mb-4 uppercase tracking-wider">Relevant Coursework</p>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                'Object-Oriented Programming',
                'Design Patterns',
                'Data Structures',
                'Algorithms',
                'Artificial Intelligence',
                'Computer Networking',
                'Machine Learning',
                'Deep Learning',
              ].map((course, idx) => (
                <span key={idx} className="text-slate-300 text-sm flex items-center gap-2">
                  <span className="w-1 h-1 bg-indigo-400 rounded-full flex-shrink-0" />
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800/50">
            <h4 className="font-bold text-white mb-4 text-sm">Key Strengths</h4>
            <ul className="space-y-2.5">
              {[
                'Strong foundation in computer science fundamentals',
                'Expertise in algorithms and data structures',
                'Deep understanding of design patterns',
                'AI/ML knowledge base',
              ].map((strength, idx) => (
                <li key={idx} className="text-slate-400 text-sm flex items-center gap-2.5">
                  <span className="text-indigo-400 text-xs">&#10003;</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Awards */}
        <div className="rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/20 transition-all duration-300 p-7 sm:p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10">
              <Trophy size={22} className="text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Awards & Recognition</h3>
          </div>

          <div className="space-y-6">
            {/* ECPC Qualifier */}
            <div className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/10">
              <div className="flex items-start gap-3 mb-3">
                <Award size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-bold text-white">2x ECPC Qualifier</h4>
                  <p className="text-purple-400 text-xs font-semibold mt-0.5">Egyptian Collegiate Programming Contest</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-2">
                Ranked <strong className="text-white">1st among Zagazig University</strong> participants in the ECPC qualification rounds.
              </p>
              <a
                href="https://icpc.global/ICPCID/U39DE9L5UYYP"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-xs font-semibold transition-colors"
              >
                View Credential <ExternalLink size={12} />
              </a>
            </div>

            {/* ECPC Finalist */}
            <div className="p-5 rounded-xl bg-purple-500/5 border border-purple-500/10">
              <div className="flex items-start gap-3 mb-3">
                <Trophy size={20} className="text-purple-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h4 className="font-bold text-white">2x ECPC Finalist</h4>
                  <p className="text-purple-400 text-xs font-semibold mt-0.5">Egyptian Collegiate Programming Contest</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-2">
                Qualified for the finals in multiple years, showcasing consistent performance and problem-solving expertise.
              </p>
              <a
                href="https://icpc.global/ICPCID/U39DE9L5UYYP"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-purple-400 hover:text-purple-300 text-xs font-semibold transition-colors"
              >
                View Credential <ExternalLink size={12} />
              </a>
            </div>

            {/* Key Achievements */}
            <div className="pt-4">
              <h4 className="font-bold text-white mb-4 text-sm">Key Achievements</h4>
              <ul className="space-y-2.5">
                {[
                  'Top competitive programmer at university level',
                  'Consistent finalist in national programming contests',
                  'Demonstrated excellence in algorithm design',
                ].map((achievement, idx) => (
                  <li key={idx} className="text-slate-400 text-sm flex items-center gap-2.5">
                    <span className="text-purple-400">&#9733;</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Experience */}
      <div className="rounded-2xl bg-slate-900/50 border border-slate-800 p-7 sm:p-8 mb-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10">
            <Users size={22} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white">Volunteer Experience & Mentorship</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:pr-8 md:border-r border-slate-800/50">
            <h4 className="font-bold text-green-400 mb-1">Mentor & Instructor</h4>
            <p className="text-slate-500 text-sm mb-4">ICPC Zagazig Community &middot; Nov 2021 - Present</p>
            <ul className="space-y-2.5">
              {[
                'Organized online and offline technical training',
                'Provided soft-skills coaching to many students',
                'Impacted hundreds of students in competitive programming',
              ].map((item, idx) => (
                <li key={idx} className="text-slate-400 text-sm flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-green-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-green-400 mb-1">ECPC Contest Coach</h4>
            <p className="text-slate-500 text-sm mb-4">Zagazig University &middot; 2022 - 2023</p>
            <ul className="space-y-2.5">
              {[
                'Coached ECPC contestants at university',
                'Provided guidance on problem-solving strategies',
                'Mentored multiple finalist teams',
                'Knowledge transfer and skill development',
              ].map((item, idx) => (
                <li key={idx} className="text-slate-400 text-sm flex items-center gap-2.5">
                  <span className="w-1 h-1 bg-green-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* External Links */}
      <div className="flex flex-wrap justify-center gap-3">
        {[
          { href: 'https://www.facebook.com/ACMZU', label: 'ICPC Community', icon: '🎓' },
          { href: 'https://www.goodreads.com/user/show/123507467-ahmed-abdelalem', label: 'Goodreads', icon: '📚' },
          { href: 'https://github.com/ahmedabdelalem61', label: 'GitHub Projects', icon: '💻' },
        ].map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-white text-sm font-medium transition-all duration-300 hover-lift"
          >
            <span>{link.icon}</span>
            {link.label}
            <ExternalLink size={12} className="opacity-50" />
          </a>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
