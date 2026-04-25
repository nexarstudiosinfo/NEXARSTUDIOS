import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const projects = [
  {
    title: 'Project Horizon',
    category: 'VR/AR',
    description: 'An immersive virtual reality experience redefining spatial computing interfaces.',
    image: 'https://images.unsplash.com/photo-1626379953822-baec19c3bbcd?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1',
  },
  {
    title: 'Nexus Platform',
    category: 'Web Design',
    description: 'High-performance analytics dashboard engineered for real-time enterprise data.',
    image: 'https://images.unsplash.com/photo-1551288049-bbda0231f7c7?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1',
  },
  {
    title: 'Aether Construct',
    category: '3D Modeling',
    description: 'Precision 3D architectural visualization blending brutalism with modern aero-design.',
    image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1',
  },
  {
    title: 'OmniFlow Studio',
    category: 'Web Design',
    description: 'A comprehensive suite of design tools built for high-stakes creative collaboration.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200',
    span: 'md:col-span-2',
  },
  {
    title: 'Synapse AI',
    category: 'VR/AR',
    description: 'Visualizing complex neural networks through augmented reality overlays.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    span: 'col-span-1',
  },
];

const categories = ['All', 'VR/AR', '3D Modeling', 'Web Design'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <div className="pt-32 pb-32 px-16 max-w-[1440px] mx-auto min-h-screen">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="font-headline text-[72px] font-bold text-on-surface mb-6">Our Innovations</h1>
        <p className="font-sans text-xl text-on-surface-variant leading-relaxed">
          Exploring the boundaries of creative technology through precision engineering and visionary design.
        </p>
      </div>

      <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2.5 rounded-full font-headline text-sm font-semibold border transition-all cursor-pointer whitespace-nowrap ${
              filter === cat 
                ? 'bg-primary-container text-on-primary-container border-transparent' 
                : 'bg-white text-on-surface-variant border-outline-variant hover:border-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`${project.span} relative group h-[400px] rounded-3xl overflow-hidden glass-panel`}
            >
              <img 
                referrerPolicy="no-referrer"
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <span className="inline-block px-3 py-1 bg-primary/20 text-white border border-primary/30 rounded-full font-sans text-[10px] font-bold tracking-widest uppercase mb-3 w-fit backdrop-blur-md">
                  {project.category}
                </span>
                <h3 className="font-headline text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="font-sans text-sm text-slate-300 max-w-sm line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-24 flex justify-center">
        <button className="bg-white border border-outline text-on-surface font-headline text-sm font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition-colors flex items-center gap-2 cursor-pointer">
          Load More Projects
          <ChevronDown size={20} />
        </button>
      </div>
    </div>
  );
}
