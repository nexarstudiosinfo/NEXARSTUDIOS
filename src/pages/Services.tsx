import { motion } from 'motion/react';
import { Eye, RotateCw, Braces, Brush, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'VR Experiences',
    description: 'Immersive, hyper-realistic virtual environments designed for training, simulation, and consumer engagement. We build worlds that defy physical limitations.',
    icon: Eye,
    color: 'bg-primary-container',
  },
  {
    title: '3D Visualization',
    description: 'Photorealistic rendering and real-time 3D assets that bring concepts to life before they are built. Precision modeling for architecture, product design, and media.',
    icon: RotateCw,
    color: 'bg-secondary-container',
  },
  {
    title: 'Web & App Development',
    description: 'High-performance, scalable digital platforms engineered with modern tech stacks. We deliver seamless user experiences across all devices and form factors.',
    icon: Braces,
    color: 'bg-tertiary-container',
  },
  {
    title: 'Creative Design',
    description: 'Strategic UI/UX design, brand identity, and visual storytelling. We craft interfaces that are not only beautiful but intuitively drive user behavior.',
    icon: Brush,
    color: 'bg-surface-variant',
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-32 px-16 max-w-[1440px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mb-24"
      >
        <h1 className="font-headline text-[72px] leading-[1.1] font-bold text-on-background mb-6">
          Pioneering <span className="text-gradient">Digital Frontiers</span>
        </h1>
        <p className="font-sans text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          We architect immersive realities, craft high-performance digital platforms, and design experiences that transcend the ordinary. Your vision, engineered for tomorrow.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel group rounded-3xl p-10 flex flex-col items-start hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
          >
            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 shadow-inner`}>
              <service.icon size={32} className="text-on-surface" />
            </div>
            <h3 className="font-headline text-3xl font-bold text-on-background mb-4">
              {service.title}
            </h3>
            <p className="font-sans text-on-surface-variant leading-relaxed mb-12 flex-grow">
              {service.description}
            </p>
            <button className="font-sans text-sm font-bold text-primary flex items-center gap-2 group-hover:gap-3 transition-all cursor-pointer">
              Learn More <ArrowRight size={16} />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
