import { Code2, Database, Wrench, Smartphone, Cloud, Layers } from 'lucide-react'

const GeneralSkillsSection = () => {
  const skillCategories = [
    { icon: Code2, title: 'Programming Languages', skills: ['C++', 'Python', 'Java', 'JavaScript', 'TypeScript'], proficiency: 'Advanced', color: 'cyan' },
    { icon: Database, title: 'Database & Backend', skills: ['PostgreSQL', 'Firebase', 'REST APIs', 'Server Architecture'], proficiency: 'Advanced', color: 'blue' },
    { icon: Smartphone, title: 'Mobile Development', skills: ['Flutter', 'Cross-platform Apps', 'Mobile UI/UX'], proficiency: 'Intermediate', color: 'purple' },
    { icon: Cloud, title: 'Cloud & DevOps', skills: ['Linux/Ubuntu', 'Firebase Console', 'Cloud Services', 'Server Deployment'], proficiency: 'Intermediate', color: 'green' },
    { icon: Wrench, title: 'Tools & Platforms', skills: ['Git/GitHub', 'VSCode', 'IntelliJ IDEA', 'Android Studio', 'Postman'], proficiency: 'Advanced', color: 'orange' },
    { icon: Layers, title: 'Patterns & Methods', skills: ['OOP Design', 'Design Patterns', 'Agile/Scrum', 'CI/CD'], proficiency: 'Advanced', color: 'pink' },
  ]

  const colorConfig: Record<string, { accent: string; bg: string; tag: string; tagHover: string }> = {
    cyan: { accent: 'text-cyan-400', bg: 'from-cyan-500/20 to-cyan-500/10', tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20', tagHover: 'hover:bg-cyan-500/20' },
    blue: { accent: 'text-blue-400', bg: 'from-blue-500/20 to-blue-500/10', tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20', tagHover: 'hover:bg-blue-500/20' },
    purple: { accent: 'text-purple-400', bg: 'from-purple-500/20 to-purple-500/10', tag: 'bg-purple-500/10 text-purple-300 border-purple-500/20', tagHover: 'hover:bg-purple-500/20' },
    green: { accent: 'text-green-400', bg: 'from-green-500/20 to-green-500/10', tag: 'bg-green-500/10 text-green-300 border-green-500/20', tagHover: 'hover:bg-green-500/20' },
    orange: { accent: 'text-orange-400', bg: 'from-orange-500/20 to-orange-500/10', tag: 'bg-orange-500/10 text-orange-300 border-orange-500/20', tagHover: 'hover:bg-orange-500/20' },
    pink: { accent: 'text-pink-400', bg: 'from-pink-500/20 to-pink-500/10', tag: 'bg-pink-500/10 text-pink-300 border-pink-500/20', tagHover: 'hover:bg-pink-500/20' },
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-4">Full-Stack Capabilities</p>
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          <span className="text-white">Software Engineering</span>{' '}
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Comprehensive skill set across full-stack development, architecture, and modern software practices
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillCategories.map((category, index) => {
          const Icon = category.icon
          const colors = colorConfig[category.color]
          return (
            <div
              key={index}
              className="group rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 p-6 transition-all duration-300 hover-lift"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${colors.bg}`}>
                    <Icon size={20} className={colors.accent} />
                  </div>
                  <h3 className="text-base font-bold text-white">{category.title}</h3>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-wider ${colors.accent} opacity-70`}>
                  {category.proficiency}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`skill-tag px-3 py-1.5 rounded-lg text-xs font-medium border ${colors.tag} ${colors.tagHover} transition-all cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Technical Competencies */}
      <div className="mt-12 rounded-2xl bg-slate-900/50 border border-slate-800 p-8 sm:p-10">
        <h3 className="text-xl font-bold mb-8 text-white">Technical Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h4 className="text-sm font-bold text-green-400 mb-5 uppercase tracking-wider">Core Competencies</h4>
            <ul className="space-y-3">
              {['Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'System Design & Architecture', 'Database Design & Optimization', 'Full-Stack Development'].map((item, idx) => (
                <li key={idx} className="text-slate-300 text-sm flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-blue-400 mb-5 uppercase tracking-wider">Professional Skills</h4>
            <ul className="space-y-3">
              {['Problem Solving & Debugging', 'Code Quality & Testing', 'Team Collaboration & Leadership', 'Mentoring & Knowledge Sharing', 'Agile/Scrum Methodologies'].map((item, idx) => (
                <li key={idx} className="text-slate-300 text-sm flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GeneralSkillsSection
