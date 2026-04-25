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
    bio: 'Award-winning industrial designer turned digital product savant. Elena dictates the visual language of all Nexar output.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Julian Thorne',
    role: 'CTO',
    bio: 'A pioneer in scalable cloud architectures. Julian ensures that the beauty of Nexar products is matched only by their performance.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
  },
];

export default function About() {
  return (
    <div className="pt-32 pb-32">
      <section className="max-w-[1440px] mx-auto px-16 mb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-sans text-xs font-bold tracking-widest uppercase">
              About Nexar
            </span>
            <h1 className="font-headline text-[72px] leading-[1.1] font-bold text-on-surface">
              Visionaries at the <br />
              <span className="text-gradient">Intersection</span> of <br />
              Tech & Design
            </h1>
            <p className="font-sans text-xl text-on-surface-variant max-w-lg leading-relaxed">
              We don't just build software; we engineer digital experiences that redefine industry standards. Our approach marries high-end aesthetics with robust, scalable architecture.
            </p>
          </div>
          <div className="relative h-[600px] rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              referrerPolicy="no-referrer"
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
              alt="Office"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-16 mb-40">
        <h2 className="font-headline text-4xl font-bold text-on-surface mb-12">The Narrative</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[520px]">
          <div className="md:col-span-2 relative rounded-[2rem] overflow-hidden group">
            <img 
              referrerPolicy="no-referrer"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Team"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-12 flex flex-col justify-end">
              <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full font-sans text-[10px] font-bold uppercase tracking-widest mb-4 w-fit">Inception</span>
              <h3 className="font-headline text-3xl font-bold text-white mb-2">Born from Frustration</h3>
              <p className="font-sans text-slate-300 max-w-sm">Founded by engineers tired of compromising design for functionality, Nexar emerged to prove that enterprise software can be beautiful.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-1 glass-panel rounded-[2rem] p-8 flex flex-col justify-center">
              <Rocket className="text-primary mb-4" size={40} />
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Scale</h4>
              <p className="font-sans text-sm text-on-surface-variant">From a 3-person boutique to a global presence in under 5 years.</p>
            </div>
            <div className="flex-1 bg-surface-container-highest rounded-[2rem] p-8 flex flex-col justify-center">
              <Ruler className="text-secondary mb-4" size={40} />
              <h4 className="font-headline text-xl font-bold text-on-surface mb-2">Precision</h4>
              <p className="font-sans text-sm text-on-surface-variant">Over 200+ enterprise platforms deployed with zero critical failures.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-40 mb-40">
        <div className="max-w-[1440px] mx-auto px-16 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <h2 className="font-headline text-4xl font-bold text-gradient mb-8">The Vision</h2>
            <p className="font-sans text-xl text-slate-400 leading-relaxed">
              To become the invisible engine behind the world's most elegant and intuitive digital products. We envision a future where complex systems are completely abstracted away, leaving only pure, seamless user experience.
            </p>
          </div>
          <div>
            <h2 className="font-headline text-4xl font-bold text-gradient mb-8">The Mission</h2>
            <ul className="space-y-8">
              {[
                'Execute with uncompromising technical rigor.',
                'Design with intent, removing the unnecessary.',
                'Foster a culture of continuous, fearless innovation.',
              ].map(item => (
                <li key={item} className="flex items-start gap-4 text-slate-300">
                  <CheckCircle2 className="text-secondary mt-1 flex-shrink-0" size={24} />
                  <span className="font-sans text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-16">
        <div className="text-center mb-24">
          <h2 className="font-headline text-5xl font-bold text-on-surface mb-4">Leadership</h2>
          <p className="font-sans text-xl text-on-surface-variant max-w-2xl mx-auto">The architects behind our methodology.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {leadership.map(leader => (
            <div key={leader.name} className="group">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 bg-surface-container">
                <img 
                  referrerPolicy="no-referrer"
                  src={leader.image} 
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface mb-1">{leader.name}</h3>
              <p className="font-sans text-xs font-bold text-primary tracking-widest uppercase mb-4">{leader.role}</p>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
