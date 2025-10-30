import { CheckCircle2 } from 'lucide-react'
const OdooSkillsSection = () => {
  const odooSkills = [
    { category: 'Core Odoo Development', skills: ['Module Customization & Development','Odoo ORM (ORM API, Models)','XML/QWeb Templates','Business Logic & Workflows','Custom Fields & Attributes','Odoo Server Configuration']},
    { category: 'Odoo Applications', skills: ['Sales Management','Purchase Management','POS (Point of Sale)','Inventory Management','Helpdesk/Support Tickets','CRM & Lead Management','Committee Management Systems','Pilgrimage Management Systems']},
    { category: 'Advanced Odoo Skills', skills: ['REST API Integration','Third-party System Integration','PostgreSQL Query Optimization','Message Queue Processing','Performance Tuning','Security & Access Control','Custom Reporting','Server Load Optimization']},
    { category: 'Technical Skills', skills: ['Python Programming','PostgreSQL Database','Git Version Control','API Integration (REST)','Linux Development','Debugging & Testing','Postman API Testing']},
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Odoo Developer Expertise</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">2+ years of specialized experience building, customizing, and optimizing enterprise Odoo solutions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {odooSkills.map((skillGroup, index) => (
          <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full"></div>{skillGroup.category}</h3>
            <div className="space-y-3">
              {skillGroup.skills.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-3"><CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0 mt-1" /><span className="text-slate-300">{skill}</span></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-gradient-to-r from-blue-900/50 to-cyan-900/50 border border-cyan-500/30 rounded-xl p-8">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">Key Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4"><div className="text-3xl font-bold text-cyan-400">95%</div><div><div className="font-semibold text-white">On-time Delivery</div><div className="text-slate-400 text-sm">Maintained 95% on-time delivery rate for all sprint commitments</div></div></div>
          <div className="flex gap-4"><div className="text-3xl font-bold text-cyan-400">5+</div><div><div className="font-semibold text-white">Modules Deployed</div><div className="text-slate-400 text-sm">Sales, Purchases, POS, Inventory, Helpdesk modules in production</div></div></div>
          <div className="flex gap-4"><div className="text-3xl font-bold text-cyan-400">Government</div><div><div className="font-semibold text-white">Enterprise Solutions</div><div className="text-slate-400 text-sm">Built critical systems for Saudi Government agencies</div></div></div>
          <div className="flex gap-4"><div className="text-3xl font-bold text-cyan-400">Real-time</div><div><div className="font-semibold text-white">Data Synchronization</div><div className="text-slate-400 text-sm">Integrated Odoo with third-party REST APIs for seamless data flow</div></div></div>
        </div>
      </div>
    </section>
  )
}
export default OdooSkillsSection
