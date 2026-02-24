import { Calendar, MapPin, Briefcase, Award, Building2 } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Software Engineer (Odoo)',
      company: 'Yodawy',
      location: 'Giza, Egypt',
      workType: 'Hybrid',
      period: 'Jan 2025 - Present',
      duration: '10 months',
      type: 'Full-time',
      current: true,
      achievements: [
        'Customized and deployed Odoo modules for Sales, Purchases, POS, Inventory, and Helpdesk, automating manual tasks and accelerating order-to-delivery cycles',
        'Integrated Odoo with third-party REST APIs to synchronize real-time data',
        'Tuned PostgreSQL queries and optimized Odoo server load',
        'Insured the Organization\'s Scalability on daily Tasks',
        'Day by day Fine-Tuning legacy Failed Message Queue process',
        'Customer support with operations teams, boosting adoption of new features or Related Problems',
        'Partnered with product Managers and QA to triage issues and roll out hotfixes, maintaining a 95% on-time delivery rate for each sprint',
      ],
      skills: ['Odoo', 'XML', 'Python', 'PostgreSQL', 'REST APIs'],
    },
    {
      title: 'Software Engineer (Odoo)',
      company: 'Itqan Systems',
      location: 'Cairo, Egypt',
      workType: 'Hybrid',
      period: 'Aug 2023 - Jan 2025',
      duration: '1 year 6 months',
      type: 'Full-time',
      current: false,
      achievements: [
        'Rapidly acquired proficiency in Odoo technology within two months, demonstrating quick learning aptitude and practical understanding to meet organizational needs',
        'Built the initial Odoo module for the Saudi Government, contributing to database design and aligning with business needs to streamline their Committee and Meeting System',
        'Developed designs for the Saudi Government\'s Red Crescent, aiding pilgrims during Hajj and Umrah prayers',
      ],
      skills: ['Odoo', 'Python', 'PostgreSQL', 'System Design', 'Database Architecture'],
    },
    {
      title: 'Flutter Developer',
      company: 'Cyparta',
      location: 'Cairo, Egypt',
      workType: 'Onsite',
      period: 'Aug 2021 - Oct 2022',
      duration: '1 year 3 months',
      type: 'Full-time',
      current: false,
      achievements: [
        'Designed and delivered a user-friendly home services mobile application, leading to increased customer satisfaction and service demand',
        'Developed a CRM mobile application using Flutter to optimize roles and people management, improving team efficiency and workflows',
        'Mentored and trained new hires, ensuring effective onboarding and skill development through structured coaching programs',
      ],
      skills: ['Flutter', 'Dart', 'Firebase', 'Mobile Development', 'CRM'],
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">Career Journey</p>
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          <span className="text-white">Professional</span>{' '}
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          5+ years of software development experience across Odoo, Mobile, and Enterprise solutions
        </p>
      </div>

      {/* Timeline */}
      <div className="relative space-y-8">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/50 via-orange-500/20 to-transparent hidden md:block" />

        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline dot */}
            <div className="absolute left-6 top-8 -translate-x-1/2 hidden md:block z-10">
              <div className={`w-3 h-3 rounded-full border-2 ${exp.current ? 'bg-orange-400 border-orange-400 shadow-lg shadow-orange-400/50' : 'bg-slate-900 border-orange-500/50'}`} />
            </div>

            <div className="md:ml-14 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-orange-500/20 transition-all duration-300 hover-lift overflow-hidden">
              {/* Current badge */}
              {exp.current && (
                <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-b border-orange-500/10 px-7 py-2">
                  <span className="inline-flex items-center gap-2 text-orange-400 text-xs font-bold uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400"></span>
                    </span>
                    Current Position
                  </span>
                </div>
              )}

              <div className="p-7">
                {/* Top row - Position info */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2">
                      <Building2 size={14} className="text-orange-400" />
                      <span className="text-orange-400 font-semibold">{exp.company}</span>
                      <span className="text-slate-600">|</span>
                      <span className="text-slate-400 text-sm">{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-start sm:items-end gap-1">
                    <span className="text-sm text-white font-semibold">{exp.duration}</span>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-slate-800/50">
                  <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <MapPin size={14} className="text-orange-400/60" />
                    {exp.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                    <Calendar size={14} className="text-orange-400/60" />
                    {exp.period}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-400 text-xs font-medium">
                    {exp.workType}
                  </span>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Briefcase size={12} />
                    Key Responsibilities & Achievements
                  </h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((a, idx) => (
                      <li key={idx} className="text-slate-300 text-sm flex gap-3 leading-relaxed">
                        <span className="text-orange-400 flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-orange-400" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s, i) => (
                    <span key={i} className="skill-tag px-3 py-1.5 bg-orange-500/10 text-orange-300 border border-orange-500/20 rounded-lg text-xs font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Career Highlights */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-950/40 to-red-950/40 border border-orange-500/20 p-8 sm:p-10">
        <div className="flex items-center gap-3 mb-8">
          <Award size={24} className="text-orange-400" />
          <h3 className="text-xl font-bold text-white">Career Highlights</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Expertise Areas', desc: 'Odoo Development, Enterprise Systems, Mobile Apps, Database Optimization' },
            { title: 'Government Experience', desc: 'Worked on critical systems for Saudi Government agencies and international organizations' },
            { title: 'Leadership', desc: 'Mentored team members, provided training, and ensured quality deliverables across multiple projects' },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="text-sm font-bold text-orange-400 mb-2">{item.title}</div>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
