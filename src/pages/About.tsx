import { Rocket, Ruler, CheckCircle2 } from 'lucide-react';

const leadership = [
  {
    name: 'Ajay Konkati',
    role: 'CEO & FOUNDER',
    bio: 'Former lead architect at major tech companies.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Jaya Chandra',
    role: 'CO FOUNDER',
    bio: 'Award-winning designer shaping digital experiences.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Rama Krishna',
    role: 'CMO',
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

      {/* ✨ NEW STORY SECTION (YOUR CONTENT) */}
      <section className="max-w-[900px] mx-auto px-6 md:px-12 mb-20 md:mb-32 text-center">
        
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-on-surface">
          The NEXAR Story
        </h2>

        <div className="space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed">
          
          <p>
            India has always valued knowledge — <strong>Vidya Dhanam</strong>.
            But over time, learning became confined to textbooks, memorization, and exam pressure — losing its sense of discovery.
          </p>

          <p>
            Nexar Studios was built to bring that spark back.
          </p>

          <p>
            Founded by <strong>Ajay Konkati</strong>, Nexar is rooted in a simple belief:
            <br />
            <span className="text-primary font-medium">
              If a child can’t go to the world, the world should come to the child.
            </span>
          </p>

          <p>
            We don’t replace teachers or change curriculum.  
            We empower classrooms with immersive technology.
          </p>

          <p>
            Through AR and 360° VR experiences, we transform lessons into moments students never forget:
          </p>

          <ul className="text-left max-w-xl mx-auto space-y-2">
            <li>• Explore the solar system, not just read about it</li>
            <li>• Experience history, not just memorize it</li>
            <li>• Understand biology, not just imagine it</li>
          </ul>

          <p>
            Nexar stands at the intersection of tradition and technology — creating classrooms where curiosity leads, and understanding follows.
          </p>

          <p className="font-medium text-on-surface">
            Because when students experience learning,  
            they don’t just study — they remember it for life.
          </p>

          <div className="pt-6">
            <p className="text-lg font-semibold text-primary">
              Join the Movement
            </p>
            <p>
              Let’s move beyond textbooks and into true understanding.  
              Experience Nexar in your school.
            </p>
          </div>

        </div>

      </section>

      {/* NARRATIVE */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 mb-20 md:mb-40">
        
        <h2 className="text-2xl md:text-4xl font-bold text-on-surface mb-8 md:mb-12">
          The Narrative
        </h2>

        {/* existing code continues... */}
      </section>

    </div>
  );
}
