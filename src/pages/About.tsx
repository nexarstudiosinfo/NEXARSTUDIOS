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

            <h1 className="text-4xl md:text-6xl lg:text-[72
