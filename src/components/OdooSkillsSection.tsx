import { CheckCircle2, Zap, Server, Code2, Wrench } from 'lucide-react'

const OdooSkillsSection = () => {
  const odooSkills = [
    {
      icon: Code2,
      category: 'Core Odoo Development',
      color: 'cyan',
      skills: ['Module Customization & Development', 'Odoo ORM (ORM API, Models)', 'XML/QWeb Templates', 'Business Logic & Workflows', 'Custom Fields & Attributes', 'Odoo Server Configuration'],
    },
    {
      icon: Zap,
      category: 'Odoo Applications',
      color: 'blue',
      skills: ['Sales Management', 'Purchase Management', 'POS (Point of Sale)', 'Inventory Management', 'Helpdesk/Support Tickets', 'CRM & Lead Management', 'Committee Management Systems', 'Pilgrimage Management Systems'],
    },
    {
      icon: Server,
      category: 'Advanced Odoo Skills',
      color: 'purple',
      skills: ['REST API Integration', 'Third-party System Integration', 'PostgreSQL Query Optimization', 'Message Queue Processing', 'Performance Tuning', 'Security & Access Control', 'Custom Reporting', 'Server Load Optimization'],
    },
    {
      icon: Wrench,
      category: 'Technical Skills',
      color: 'green',
      skills: ['Python Programming', 'PostgreSQL Database', 'Git Version Control', 'API Integration (REST)', 'Linux Development', 'Debugging & Testing', 'Postman API Testing'],
    },
  ]

  const colorMap: Record<string, { border: string; bg: string; text: string; icon: string; dot: string }> = {
    cyan: { border: 'hover:border-cyan-500/40', bg: 'from-cyan-500/10 to-cyan-500/5', text: 'text-cyan-400', icon: 'from-cyan-500/20 to-cyan-500/10', dot: 'bg-cyan-400' },
    blue: { border: 'hover:border-blue-500/40', bg: 'from-blue-500/10 to-blue-500/5', text: 'text-blue-400', icon: 'from-blue-500/20 to-blue-500/10', dot: 'bg-blue-400' },
    purple: { border: 'hover:border-purple-500/40', bg: 'from-purple-500/10 to-purple-500/5', text: 'text-purple-400', icon: 'from-purple-500/20 to-purple-500/10', dot: 'bg-purple-400' },
    green: { border: 'hover:border-green-500/40', bg: 'from-green-500/10 to-green-500/5', text: 'text-green-400', icon: 'from-green-500/20 to-green-500/10', dot: 'bg-green-400' },
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Specialized Expertise</p>
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Odoo Developer</span>{' '}
          <span className="text-white">Expertise</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          2+ years of specialized experience building, customizing, and optimizing enterprise Odoo solutions
        </p>
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {odooSkills.map((skillGroup, index) => {
          const colors = colorMap[skillGroup.color]
          const Icon = skillGroup.icon
          return (
            <div
              key={index}
              className={`group rounded-2xl bg-slate-900/50 border border-slate-800 ${colors.border} p-7 transition-all duration-300 hover-lift`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${colors.icon}`}>
                  <Icon size={22} className={colors.text} />
                </div>
                <h3 className={`text-lg font-bold ${colors.text}`}>{skillGroup.category}</h3>
              </div>
              <div className="space-y-2.5">
                {skillGroup.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-3 group/item">
                    <CheckCircle2 size={16} className={`${colors.text} opacity-60 group-hover/item:opacity-100 transition-opacity flex-shrink-0`} />
                    <span className="text-slate-300 text-sm group-hover/item:text-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Key Achievements */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/20 p-8 sm:p-10">
        <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-2">
          <Zap size={20} className="text-cyan-400" />
          Key Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: '95%', title: 'On-time Delivery', desc: 'Maintained 95% on-time delivery rate for all sprint commitments' },
            { value: '5+', title: 'Modules Deployed', desc: 'Sales, Purchases, POS, Inventory, Helpdesk modules in production' },
            { value: 'Gov', title: 'Enterprise Solutions', desc: 'Built critical systems for Saudi Government agencies' },
            { value: 'API', title: 'Data Synchronization', desc: 'Integrated Odoo with third-party REST APIs for seamless data flow' },
          ].map((item, idx) => (
            <div key={idx} className="text-center sm:text-left">
              <div className="text-2xl font-black text-cyan-400 mb-2">{item.value}</div>
              <div className="font-semibold text-white text-sm mb-1">{item.title}</div>
              <div className="text-slate-500 text-xs leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OdooSkillsSection
