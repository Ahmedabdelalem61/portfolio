import { ExternalLink, Github } from 'lucide-react'
const ProjectsSection = () => {
  const projects = [
    { title: 'Committee & Meeting Management System', company: 'Itqan Systems (for Saudi Government)', period: '2023 - 2024', type: 'Enterprise Solution', description: 'Designed and developed a critical Odoo module for the Saudi Government to manage committee operations and official meetings.', technologies: ['Odoo','Python','PostgreSQL','XML/QWeb'], highlights: ['Built for government compliance','Custom meeting scheduling','Database architecture'], image: '🏛️' },
    { title: 'Hajj & Umrah Pilgrimage Management System', company: 'Itqan Systems (for Saudi Red Crescent)', period: '2023 - 2024', type: 'Healthcare Solution', description: 'Developed an Odoo module for the Saudi Red Crescent to manage pilgrim services during Hajj and Umrah seasons.', technologies: ['Odoo','Python','REST APIs','PostgreSQL'], highlights: ['Real-time tracking','Resource management','Emergency integration'], image: '🕌' },
    { title: 'Sales & Inventory Integration Suite', company: 'Yodawy Pharmacy', period: '2025 - Present', type: 'E-Commerce Solution', description: 'Customized and deployed multiple Odoo modules for sales, purchases, POS systems, and inventory management.', technologies: ['Odoo','Python','PostgreSQL','REST APIs','Linux'], highlights: ['95% on-time delivery','Real-time sync','Server optimization'], image: '💊' },
    { title: 'Helpdesk & Customer Support Module', company: 'Yodawy Pharmacy', period: '2025 - Present', type: 'Support System', description: 'Implemented Odoo Helpdesk module for customer support operations.', technologies: ['Odoo','Python','Helpdesk Module','CRM'], highlights: ['Custom ticket routing','Ops training','Automation'], image: '🎯' },
    { title: 'Home Services Mobile Application', company: 'Cyparta', period: '2021 - 2022', type: 'Mobile App', description: 'Designed and delivered a user-friendly home services mobile application.', technologies: ['Flutter','Dart','Firebase','REST APIs'], highlights: ['UI design','Real-time tracking','Payment integration'], image: '📱' },
    { title: 'CRM & Team Management Mobile App', company: 'Cyparta', period: '2021 - 2022', type: 'Enterprise App', description: 'Developed a CRM mobile application using Flutter to optimize roles and people management.', technologies: ['Flutter','Firebase','REST APIs'], highlights: ['Role management','Performance tracking','Real-time collaboration'], image: '👥' },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Real Projects & Case Studies</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">Enterprise solutions and applications built for real companies and government organizations</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <div key={idx} className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300" />
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-4">
                <div><div className="text-4xl mb-2">{p.image}</div><h3 className="text-xl font-bold text-white group-hover:text-purple-400">{p.title}</h3><p className="text-sm text-purple-400 font-semibold mt-1">{p.company}</p></div>
              </div>
              <div className="flex items-center gap-2 mb-4 text-sm text-slate-400"><span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold">{p.type}</span><span>{p.period}</span></div>
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">{p.description}</p>
              <div className="mb-4"><p className="text-xs font-semibold text-slate-400 mb-2">Key Achievements:</p><ul className="space-y-1">{p.highlights.map((h, i) => <li key={i} className="text-sm text-slate-300 flex items-start gap-2"><span className="text-purple-400 mt-1">•</span><span>{h}</span></li>)}</ul></div>
              <div className="flex flex-wrap gap-2">{p.technologies.map((t, i) => <span key={i} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium">{t}</span>)}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-white">Project Impact Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2">6</div><div className="text-slate-400">Major Projects</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2">2</div><div className="text-slate-400">Government Agencies</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2">8</div><div className="text-slate-400">Odoo Modules</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-purple-400 mb-2">95%</div><div className="text-slate-400">Success Rate</div></div>
        </div>
      </div>
    </section>
  )
}
export default ProjectsSection
