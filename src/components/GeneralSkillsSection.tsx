import { Code2, Database, Wrench, Smartphone, Cloud } from 'lucide-react'
const GeneralSkillsSection = () => {
  const skillCategories = [
    { icon: Code2, title: 'Programming Languages', skills: ['C++','Python','Java','JavaScript','TypeScript'], proficiency: 'Advanced' },
    { icon: Database, title: 'Database & Backend', skills: ['PostgreSQL','Firebase','REST APIs','Server Architecture'], proficiency: 'Advanced' },
    { icon: Smartphone, title: 'Mobile Development', skills: ['Flutter','Cross-platform Apps','Mobile UI/UX'], proficiency: 'Intermediate' },
    { icon: Cloud, title: 'Cloud & DevOps', skills: ['Linux/Ubuntu','Firebase Console','Cloud Services','Server Deployment'], proficiency: 'Intermediate' },
    { icon: Wrench, title: 'Tools & Platforms', skills: ['Git/GitHub','VSCode','IntelliJ IDEA','Android Studio','Postman'], proficiency: 'Advanced' },
    { icon: Code2, title: 'Design Patterns & Methodologies', skills: ['OOP Design','Design Patterns','Agile/Scrum','CI/CD'], proficiency: 'Advanced' },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Software Engineering Skills</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Comprehensive skill set across full-stack development, architecture, and modern software practices</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <div key={index} className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/0 to-blue-500/0 group-hover:from-green-500/5 group-hover:to-blue-500/5 transition-all duration-300" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg group-hover:from-green-500/30 group-hover:to-blue-500/30 transition-all">
                    <Icon size={24} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-xs text-green-400 font-semibold">{category.proficiency}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-700/50 hover:bg-green-500/20 text-slate-300 hover:text-green-300 rounded-full text-sm transition-all">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-16 bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-8 text-white">Technical Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Core Competencies</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Object-Oriented Programming (OOP)</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Data Structures & Algorithms</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />System Design & Architecture</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Database Design & Optimization</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Full-Stack Development</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-green-400 mb-4">Professional Skills</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Problem Solving & Debugging</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Code Quality & Testing</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Team Collaboration & Leadership</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Mentoring & Knowledge Sharing</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full" />Agile/Scrum Methodologies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default GeneralSkillsSection
