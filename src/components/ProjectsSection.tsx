import { ArrowUpRight } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Committee & Meeting Management System',
      company: 'Itqan Systems',
      client: 'Saudi Government',
      period: '2023 - 2024',
      type: 'Enterprise Solution',
      description: 'Designed and developed a critical Odoo module for the Saudi Government to manage committee operations and official meetings.',
      technologies: ['Odoo', 'Python', 'PostgreSQL', 'XML/QWeb'],
      highlights: ['Built for government compliance', 'Custom meeting scheduling', 'Database architecture'],
      emoji: '🏛️',
      accent: 'cyan',
    },
    {
      title: 'Hajj & Umrah Pilgrimage Management',
      company: 'Itqan Systems',
      client: 'Saudi Red Crescent',
      period: '2023 - 2024',
      type: 'Healthcare Solution',
      description: 'Developed an Odoo module for the Saudi Red Crescent to manage pilgrim services during Hajj and Umrah seasons.',
      technologies: ['Odoo', 'Python', 'REST APIs', 'PostgreSQL'],
      highlights: ['Real-time tracking', 'Resource management', 'Emergency integration'],
      emoji: '🕌',
      accent: 'blue',
    },
    {
      title: 'Sales & Inventory Integration Suite',
      company: 'Yodawy Pharmacy',
      client: '',
      period: '2025 - Present',
      type: 'E-Commerce Solution',
      description: 'Customized and deployed multiple Odoo modules for sales, purchases, POS systems, and inventory management.',
      technologies: ['Odoo', 'Python', 'PostgreSQL', 'REST APIs', 'Linux'],
      highlights: ['95% on-time delivery', 'Real-time sync', 'Server optimization'],
      emoji: '💊',
      accent: 'purple',
    },
    {
      title: 'Helpdesk & Customer Support Module',
      company: 'Yodawy Pharmacy',
      client: '',
      period: '2025 - Present',
      type: 'Support System',
      description: 'Implemented Odoo Helpdesk module for customer support operations with custom workflows.',
      technologies: ['Odoo', 'Python', 'Helpdesk Module', 'CRM'],
      highlights: ['Custom ticket routing', 'Ops training', 'Automation'],
      emoji: '🎯',
      accent: 'green',
    },
    {
      title: 'Home Services Mobile Application',
      company: 'Cyparta',
      client: '',
      period: '2021 - 2022',
      type: 'Mobile App',
      description: 'Designed and delivered a user-friendly home services mobile application with real-time tracking.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      highlights: ['UI design', 'Real-time tracking', 'Payment integration'],
      emoji: '📱',
      accent: 'orange',
    },
    {
      title: 'CRM & Team Management Mobile App',
      company: 'Cyparta',
      client: '',
      period: '2021 - 2022',
      type: 'Enterprise App',
      description: 'Developed a CRM mobile application using Flutter to optimize roles and people management.',
      technologies: ['Flutter', 'Firebase', 'REST APIs'],
      highlights: ['Role management', 'Performance tracking', 'Real-time collaboration'],
      emoji: '👥',
      accent: 'pink',
    },
  ]

  const accentMap: Record<string, { border: string; tag: string; badge: string; dot: string }> = {
    cyan: { border: 'hover:border-cyan-500/30', tag: 'bg-cyan-500/10 text-cyan-300', badge: 'border-cyan-500/30 text-cyan-400', dot: 'bg-cyan-400' },
    blue: { border: 'hover:border-blue-500/30', tag: 'bg-blue-500/10 text-blue-300', badge: 'border-blue-500/30 text-blue-400', dot: 'bg-blue-400' },
    purple: { border: 'hover:border-purple-500/30', tag: 'bg-purple-500/10 text-purple-300', badge: 'border-purple-500/30 text-purple-400', dot: 'bg-purple-400' },
    green: { border: 'hover:border-green-500/30', tag: 'bg-green-500/10 text-green-300', badge: 'border-green-500/30 text-green-400', dot: 'bg-green-400' },
    orange: { border: 'hover:border-orange-500/30', tag: 'bg-orange-500/10 text-orange-300', badge: 'border-orange-500/30 text-orange-400', dot: 'bg-orange-400' },
    pink: { border: 'hover:border-pink-500/30', tag: 'bg-pink-500/10 text-pink-300', badge: 'border-pink-500/30 text-pink-400', dot: 'bg-pink-400' },
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-purple-400 text-sm font-semibold uppercase tracking-widest mb-4">Portfolio</p>
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          <span className="text-white">Real Projects</span>{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">& Case Studies</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Enterprise solutions and applications built for real companies and government organizations
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((p, idx) => {
          const colors = accentMap[p.accent]
          return (
            <div
              key={idx}
              className={`group rounded-2xl bg-slate-900/50 border border-slate-800 ${colors.border} transition-all duration-300 hover-lift overflow-hidden`}
            >
              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-3xl">{p.emoji}</span>
                      <div>
                        <h3 className="text-lg font-bold text-white leading-tight group-hover:text-slate-100">{p.title}</h3>
                        <p className="text-sm text-slate-400 mt-0.5">
                          {p.company}
                          {p.client && <span className="text-slate-500"> &middot; {p.client}</span>}
                        </p>
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-600 group-hover:text-slate-400 transition-colors flex-shrink-0 mt-1" />
                </div>

                {/* Type & Period */}
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${colors.tag}`}>
                    {p.type}
                  </span>
                  <span className="text-xs text-slate-500">{p.period}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{p.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.highlights.map((h, i) => (
                    <span key={i} className="flex items-center gap-1.5 text-xs text-slate-400">
                      <span className={`w-1 h-1 rounded-full ${colors.dot}`} />
                      {h}
                    </span>
                  ))}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/50">
                  {p.technologies.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-slate-800/80 text-slate-400 rounded-md text-[11px] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Impact summary */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-950/50 to-pink-950/50 border border-purple-500/20 p-8 sm:p-10">
        <h3 className="text-xl font-bold mb-8 text-white">Project Impact Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '6', label: 'Major Projects' },
            { value: '2', label: 'Government Agencies' },
            { value: '8', label: 'Odoo Modules' },
            { value: '95%', label: 'Success Rate' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-b from-purple-300 to-purple-500 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
