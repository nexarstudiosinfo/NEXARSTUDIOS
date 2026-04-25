import { motion } from 'motion/react';
import { Eye, RotateCw, Braces, Brush, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'VR Experiences',
    description: 'Immersive virtual environments for training and engagement.',
    icon: Eye,
    color: 'bg-primary-container',
  },
  {
    title: '3D Visualization',
    description: 'Photorealistic rendering and real-time 3D assets.',
    icon: RotateCw,
    color: 'bg-secondary-container',
  },
  {
    title: 'Web & App Development',
    description: 'High-performance scalable digital platforms.',
    icon: Braces,
    color: 'bg-tertiary-container',
  },
  {
    title: 'Creative Design',
    description: 'Strategic UI/UX design and brand identity.',
    icon: Brush,
    color: 'bg-surface-variant',
  },
];

export default function Services() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
      
      {/* HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mb-12 md:mb-24"
      >
        <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-tight font-bold text-on-surface mb-4 md:mb-6">
          Pioneering <span className="text-gradient">Digital Frontiers</span>
        </h1>

        <p className="text-base md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          We architect immersive realities and build high-performance digital platforms.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, index) => (
          
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel group rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            
            {/* ICON */}
            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl ${service.color} flex items-center justify-center mb-6 md:mb-8`}>
              <service.icon size={24} className="md:w-8 md:h-8" />
            </div>

            {/* TITLE */}
            <h3 className="text-xl md:text-3xl font-bold text-on-surface mb-3 md:mb-4">
              {service.title}
            </h3>

            {/* DESC */}
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-8 md:mb-12 flex-grow">
              {service.description}
            </p>

            {/* CTA */}
            <button className="text-sm font-bold text-primary flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </button>

          </motion.div>

        ))}
      </div>

    </div>
  );
}
