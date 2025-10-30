import { Calendar, MapPin, Briefcase, Award } from 'lucide-react'
const ExperienceSection = () => {
  const experiences = [
    { title: 'Software Engineer (Odoo)', company: 'Yodawy', location: 'Giza, AI Jizah, Egypt • Hybrid', period: 'Jan 2025 - Present', duration: '10 months', type: 'Full-time', achievements: ['Customized and deployed Odoo modules for Sales, Purchases, POS, Inventory, and Helpdesk, automating manual tasks and accelerating order-to-delivery cycles','Integrated Odoo with third-party REST APIs to synchronize real-time data','Tuned PostgreSQL queries and optimized Odoo server load','Insured the Organization\'s Scalability on daily Tasks','Day by day Fine-Tuning legacy Failed Message Queue process','Customer support with operations teams, boosting adoption of new features or Related Problems','Partnered with product Managers and QA to triage issues and roll out hotfixes, maintaining a 95% on-time delivery rate for each sprint'], skills: ['Odoo','XML','Python','PostgreSQL','REST APIs'], highlights: ['95% delivery rate','Enterprise modules','API integration'] },
    { title: 'Software Engineer (Odoo)', company: 'Itqan Systems', location: 'Cairo, Egypt • Hybrid', period: 'Aug 2023 - Jan 2025', duration: '1 year 6 months', type: 'Full-time', achievements: ['Rapidly acquired proficiency in Odoo technology within two months, demonstrating a quick learning aptitude and practical understanding to meet organizational needs.','Built the initial Odoo module for the Saudi Government, contributing to database design and aligning with business needs to streamline their Committee and Meeting System','Developed designs for the Saudi Government\'s Red Crescent, aiding pilgrims during Haj and Umrah prayers.'], skills: ['Odoo','Python','PostgreSQL','System Design','Database Architecture'], highlights: ['Government projects','Quick mastery','Critical systems'] },
    { title: 'Flutter Developer', company: 'Cyparta', location: 'Cairo, Egypt • Onsite', period: 'Aug 2021 - Oct 2022', duration: '1 year 3 months', type: 'Full-time', achievements: ['Designed and delivered a user-friendly home services mobile application, leading to increased customer satisfaction and service demand','Developed a CRM mobile application using Flutter to optimize roles and people management, improving team efficiency and workflows','Mentored and trained new hires, ensuring effective onboarding and skill development through structured coaching programs'], skills: ['Flutter','Dart','Firebase','Mobile Development','CRM'], highlights: ['App development','Team leadership','Customer impact'] }
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Professional Experience</h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">5+ years of software development experience across Odoo, Mobile, and Enterprise solutions</p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-500/0 group-hover:from-orange-500/5 group-hover:to-red-500/5 transition-all duration-300" />
            <div className="relative p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 pb-6 border-b border-slate-700">
                <div><div className="text-sm text-slate-500 font-semibold mb-1">Position</div><p className="text-lg font-bold text-white">{exp.title}</p></div>
                <div><div className="text-sm text-slate-500 font-semibold mb-1">Company</div><p className="text-lg font-bold text-orange-400">{exp.company}</p></div>
                <div><div className="text-sm text-slate-500 font-semibold mb-1">Duration</div><p className="text-lg font-bold text-white">{exp.duration}</p></div>
                <div><div className="text-sm text-slate-500 font-semibold mb-1">Employment</div><p className="text-lg font-bold text-orange-400">{exp.type}</p></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-slate-400"><Calendar size={16} className="text-orange-400" /><span>{exp.period}</span></div>
                <div className="flex items-center gap-2 text-slate-400"><MapPin size={16} className="text-orange-400" /><span>{exp.location}</span></div>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-bold text-orange-400 mb-3 flex items-center gap-2"><Briefcase size={16} />Key Responsibilities & Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((a, idx) => (<li key={idx} className="text-slate-300 text-sm flex gap-3"><span className="text-orange-400 flex-shrink-0 mt-1">▸</span><span>{a}</span></li>))}
                </ul>
              </div>

              <div className="mb-4">
                <p className="text-xs font-bold text-slate-500 mb-2">TECHNOLOGIES & SKILLS</p>
                <div className="flex flex-wrap gap-2">{exp.skills.map((s, i) => (<span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium">{s}</span>))}</div>
              </div>

              <div className="flex gap-2">{exp.highlights.map((h, i) => (<span key={i} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs">⭐ {h}</span>))}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-8">
        <div className="flex items-start gap-4">
          <Award size={32} className="text-orange-400 flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Career Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div><div className="text-sm font-bold text-slate-400 mb-1">Expertise Areas</div><p className="text-slate-300">Odoo Development, Enterprise Systems, Mobile Apps, Database Optimization</p></div>
              <div><div className="text-sm font-bold text-slate-400 mb-1">Government Experience</div><p className="text-slate-300">Worked on critical systems for Saudi Government agencies and international organizations</p></div>
              <div><div className="text-sm font-bold text-slate-400 mb-1">Leadership</div><p className="text-slate-300">Mentored team members, provided training, and ensured quality deliverables</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ExperienceSection
