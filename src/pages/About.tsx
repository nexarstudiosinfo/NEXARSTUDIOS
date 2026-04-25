import { motion } from 'motion/react';
import { Rocket, Ruler, CheckCircle2 } from 'lucide-react';

const leadership = [
  {
    name: 'Marcus Vance',
    role: 'CEO & FOUNDER',
    bio: 'Former lead architect at major tech conglomerates, Marcus founded Nexar to bridge the gap between engineering and aesthetics.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Elena Rostova',
    role: 'CHIEF DESIGN OFFICER',
    bio: 'Award-winning industrial designer turned digital product savant.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Julian Thorne',
    role: 'CTO',
    bio: 'A pioneer in scalable cloud architectures.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-32">
      
      {/* HERO */}
      <section className="max-w-[1440px] mx-auto px-16 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase">
              About Nexar
            </span>

            <h1 className="text-[72px] leading-[1.1] font-bold text-on-surface">
              Visionaries at the <br />
              <span className="text-gradient">Intersection</span> of <br />
              Tech & Design
            </h1>

            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
              We engineer digital experiences that redefine industry standards.
            </p>

          </div>

          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* NARRATIVE */}
      <section className="max-w-[1440px] mx-auto px-16 mb-40">
        <h2 className="text-4xl font-bold text-on-surface mb-12">The Narrative</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[520px]">
          
          <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-12 flex flex-col justify-end">
              
              <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
                Inception
              </span>

              <h3 className="text-3xl font-bold text-white mb-2">
                Born from Frustration
              </h3>

              <p className="text-slate-300 max-w-sm">
                Nexar emerged to prove enterprise software can be beautiful.
              </p>

            </div>
          </div>

          <div className="flex flex-col gap-6">
            
            <div className="glass-panel rounded-[2rem] p-8">
              <Rocket className="text-primary mb-4" size={40} />
              <h4 className="text-xl font-bold mb-2">Scale</h4>
              <p className="text-sm text-on-surface-variant">
                Global growth in under 5 years.
              </p>
            </div>

            <div className="bg-surface-container-highest rounded-[2rem] p-8">
              <Ruler className="text-secondary mb-4" size={40} />
              <h4 className="text-xl font-bold mb-2">Precision</h4>
              <p className="text-sm text-on-surface-variant">
                200+ platforms with zero failures.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="bg-slate-950 py-40 mb-40">
        <div className="max-w-[1440px] mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-4xl font-bold text-gradient mb-8">The Vision</h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Seamless, elegant digital experiences.
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gradient mb-8">The Mission</h2>
            <ul className="space-y-8">
              {[
                'Technical excellence.',
                'Intentional design.',
                'Continuous innovation.',
              ].map(item => (
                <li key={item} className="flex items-start gap-4 text-slate-300">
                  <CheckCircle2 className="text-secondary mt-1" size={24} />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="max-w-[1440px] mx-auto px-16">
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold text-on-surface mb-4">Leadership</h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto">
            The architects behind our methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leadership.map(leader => (
            <div key={leader.name}>
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden mb-8">
                <img 
                  src={leader.image} 
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold mb-1">{leader.name}</h3>
              <p className="text-xs font-bold text-primary tracking-widest uppercase mb-4">{leader.role}</p>
              <p className="text-sm text-on-surface-variant">{leader.bio}</p>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}
