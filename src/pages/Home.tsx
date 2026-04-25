import { motion } from 'motion/react';
import { ArrowRight, Box } from 'lucide-react';

export default function Home({ onPageChange }: { onPageChange: (page: string) => void }) {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-200/30 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
      </div>

      <main className="max-w-[1440px] mx-auto px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
        
        {/* LEFT */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-8"
        >
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
              Next-Gen Digital Solutions
            </span>
          </div>

          <h1 className="text-[72px] leading-[1.1] font-bold text-on-surface tracking-tighter">
            Building the Future with <br />
            <span className="text-gradient">Immersive Technology</span>
          </h1>

          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            We engineer cutting-edge digital environments, blending corporate precision with visionary VR/3D technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange('portfolio')}
              className="innovation-gradient text-on-primary px-8 py-4 rounded-full text-sm font-semibold flex items-center gap-2 group"
            >
              Explore Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onPageChange('contact')}
              className="border border-outline px-8 py-4 rounded-full text-sm font-semibold"
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
          className="relative w-full aspect-square"
        >
          
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden glass-panel shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-12 top-1/4 glass-panel p-4 rounded-2xl flex items-center gap-4 shadow-xl"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center">
              <Box size={24} />
            </div>

            <div>
              <p className="text-sm font-bold">Spatial Rendering</p>
              <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Active
              </p>
            </div>
          </motion.div>

        </motion.div>

      </main>
    </div>
  );
}
