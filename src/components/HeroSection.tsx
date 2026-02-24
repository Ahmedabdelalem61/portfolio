import { ArrowDown, Download, Sparkles } from 'lucide-react'
import profile from '../assets/profile.png'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8 animate-fade-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Profile image with glow */}
        <div className="mb-10 inline-block animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-xl opacity-40 animate-pulse-slow" />
            <div className="relative w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 p-[3px]">
              <img
                src={profile}
                alt="Ahmed Abdelaleem"
                className="w-full h-full rounded-full object-cover bg-slate-900"
              />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 tracking-tight animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">Ahmed</span>{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent gradient-text-animated bg-300%">Abdelaleem</span>
        </h1>

        {/* Subtitle */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-3 font-light tracking-wide">
            <span className="text-cyan-400 font-semibold">Odoo Developer</span> & Full-Stack Software Engineer
          </p>
          <p className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium uppercase tracking-widest mb-8">
            <Sparkles size={14} />
            Enterprise Solutions Specialist
            <Sparkles size={14} />
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0 }}>
          Building robust enterprise solutions with Odoo, Python, and PostgreSQL.
          Experienced in crafting scalable systems, optimizing performance, and
          delivering government-grade software across multiple industries.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
          >
            View My Work
            <ArrowDown size={18} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#experience"
            className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-slate-600 text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/5 inline-flex items-center justify-center gap-2"
          >
            My Experience
          </a>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-12 sm:gap-16 animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0 }}>
          {[
            { value: '2+', label: 'Years Odoo' },
            { value: '5+', label: 'Years Dev' },
            { value: '10+', label: 'Projects' },
            { value: '95%', label: 'On-time' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2">
          <div className="w-1 h-2 bg-slate-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
