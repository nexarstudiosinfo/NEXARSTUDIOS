import { Rocket, Ruler, CheckCircle2 } from 'lucide-react';

const leadership = [
  {
    name: 'Marcus Vance',
    role: 'CEO & FOUNDER',
    bio: 'Former lead architect at major tech companies.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Elena Rostova',
    role: 'CHIEF DESIGN OFFICER',
    bio: 'Award-winning designer shaping digital experiences.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Julian Thorne',
    role: 'CTO',
    bio: 'Expert in scalable systems and performance.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
  },
];

export default function About() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32">

      {/* HERO */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-20 md:mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          
          <div className="space-y-6 md:space-y-8">
            
            <span className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] md:text-xs font-bold tracking-widest uppercase">
              About Nexar
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-tight font-bold text-on-surface">
              Visionaries at the <br />
              <span className="text-gradient">Intersection</span> of <br />
              Tech & Design
            </h1>

            <p className="text-base md:text-xl text-on-surface-variant max-w-lg">
              We engineer digital experiences that redefine industry standards.
            </p>

          </div>

          <div className="relative h-[300px] md:h-[500px] lg:h-[600px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* NARRATIVE */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-20 md:mb-40">
        
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface mb-8 md:mb-12">
          The Narrative
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-6 md:p-12 flex flex-col justify-end">
              
              <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                Inception
              </span>

              <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                Born from Frustration
              </h3>

              <p className="text-sm md:text-base text-slate-300 max-w-sm">
                Nexar emerged to prove enterprise software can be beautiful.
              </p>

            </div>
          </div>

          <div className="flex flex-col gap-6">
            
            <div className="glass-panel rounded-[2rem] p-6 md:p-8">
              <Rocket className="text-primary mb-4" size={32} />
              <h4 className="text-lg md:text-xl font-bold mb-2">Scale</h4>
              <p className="text-sm text-on-surface-variant">
                Global growth in under 5 years.
              </p>
            </div>

            <div className="bg-surface-container-highest rounded-[2rem] p-6 md:p-8">
              <Ruler className="text-secondary mb-4" size={32} />
              <h4 className="text-lg md:text-xl font-bold mb-2">Precision</h4>
              <p className="text-sm text-on-surface-variant">
                200+ platforms with zero failures.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* VISION */}
      <section className="bg-slate-950 py-20 md:py-40 mb-20 md:mb-40">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-6 md:mb-8">
              The Vision
            </h2>
            <p className="text-base md:text-xl text-slate-400 leading-relaxed">
              Seamless, elegant digital experiences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-gradient mb-6 md:mb-8">
              The Mission
            </h2>

            <ul className="space-y-6 md:space-y-8">
              {[
                'Technical excellence.',
                'Intentional design.',
                'Continuous innovation.',
              ].map(item => (
                <li key={item} className="flex items-start gap-4 text-slate-300">
                  <CheckCircle2 className="text-secondary mt-1" size={20} />
                  <span className="text-sm md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-4">
            Leadership
          </h2>
          <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto">
            The architects behind our methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          
          {leadership.map((leader) => (
            <div key={leader.name} className="group cursor-pointer">

              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 md:mb-8">
                <img 
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-1">
                {leader.name}
              </h3>

              <p className="text-xs font-bold text-primary tracking-widest uppercase mb-3 md:mb-4">
                {leader.role}
              </p>

              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                {leader.bio}
              </p>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}
