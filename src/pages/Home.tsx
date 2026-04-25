import { motion } from 'motion/react';
import { ArrowRight, Box } from 'lucide-react';

export default function Home({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-200/30 rounded-full blur-[80px] md:blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-cyan-200/30 rounded-full blur-[80px] md:blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-indigo-200/20 rounded-full blur-[100px] md:blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <main className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 md:py-20">

        {/* LEFT */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6 md:gap-8"
        >

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-[10px] md:text-xs font-bold tracking-widest uppercase text-on-surface-variant">
            <span className="w-2 h-2 bg-primary rounded-full" />
            Next-Gen Digital Solutions
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-tight font-bold text-on-surface">
            Building the <br />
            Future with <br />
            <span className="text-gradient">Immersive Technology</span>
          </h1>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            We engineer cutting-edge digital environments, blending corporate precision with visionary VR/3D technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange('portfolio')}
              className="w-full sm:w-auto innovation-gradient text-on-primary px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2"
            >
              Explore Work
              <ArrowRight size={18} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange('contact')}
              className="w-full sm:w-auto border border-outline text-on-surface px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center"
            >
              Get in Touch
            </motion.button>

          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-square mt-10 lg:mt-0"
        >

          {/* HERO IMAGE */}
<div className="absolute inset-0 rounded-2xl overflow-hidden glass-panel shadow-xl">
  <img 
    src="/hero-render.png"
    alt="Nexar Render"
    className="w-full h-full object-cover"
  />
</div>

          </div>

          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-2 md:-left-10 top-1/3 glass-panel p-3 md:p-4 rounded-xl flex items-center gap-3 shadow-lg"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-container rounded-lg flex items-center justify-center">
              <Box size={20} />
            </div>

            <div>
              <p className="text-xs md:text-sm font-bold text-on-surface">
                Spatial Rendering
              </p>
              <p className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest text-on-surface-variant flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Active
              </p>
            </div>
          </motion.div>

        </motion.div>

      </main>
    </div>
  );
}
