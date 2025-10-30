import profile from '../assets/profile.png'
const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 p-1">
            <img src={profile} alt="Ahmed Abdelaleem" className="w-full h-full rounded-full object-cover bg-slate-900" />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">Ahmed Abdelaleem</h1>

        <p className="text-2xl sm:text-3xl text-slate-300 mb-6 font-light">Specialized <span className="text-cyan-400 font-semibold">Odoo Developer</span> & Full-Stack Software Engineer</p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">Building enterprise solutions with Odoo. Experienced in crafting scalable systems, optimizing databases, and integrating REST APIs. Based in Egypt 🇪🇬</p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block">View My Work</a>
          <a href="#experience" className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-lg font-semibold transition-all">My Experience</a>
        </div>

        <div className="flex justify-center gap-8 text-slate-400">
          <div className="text-center"><div className="text-3xl font-bold text-cyan-400">2+</div><div className="text-sm">Years Odoo</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-cyan-400">5+</div><div className="text-sm">Years Dev</div></div>
          <div className="text-center"><div className="text-3xl font-bold text-cyan-400">10+</div><div className="text-sm">Projects</div></div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
