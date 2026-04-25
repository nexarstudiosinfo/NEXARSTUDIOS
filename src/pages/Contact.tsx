import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Globe, Share2, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto min-h-screen">
      
      {/* HEADER */}
      <div className="max-w-4xl mb-12 md:mb-24">
        <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-tight font-bold text-on-surface mb-4 md:mb-6">
          Let's Shape the <br />
          <span className="text-gradient">Future Together</span>
        </h1>

        <p className="text-base md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Ready to elevate your digital presence? Tell us about your goals.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16">

        {/* FORM */}
        <div className="lg:col-span-12 xl:col-span-8">
          <div className="glass-panel rounded-[2rem] p-6 md:p-10 lg:p-12 shadow-2xl">
            
            <form className="space-y-8 md:space-y-10">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">
                    Full Name
                  </label>

                  <input 
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary px-1 py-3 md:py-4 text-base md:text-lg text-on-surface outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">
                    Work Email
                  </label>

                  <input 
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary px-1 py-3 md:py-4 text-base md:text-lg text-on-surface outline-none"
                  />
                </div>

              </div>

              {/* PROJECT TYPE */}
              <div className="flex flex-col gap-4 md:gap-6">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">
                  Project Type
                </label>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {['Web Design', 'App Development', 'Branding', 'Other'].map(type => (
                    <label key={type} className="cursor-pointer group">
                      <input type="radio" name="project_type" className="hidden peer" />

                      <span className="inline-block px-5 md:px-8 py-2 md:py-3 rounded-full border border-outline-variant text-on-surface-variant text-xs md:text-sm font-semibold transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary-container group-hover:bg-slate-50">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* DETAILS */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">
                  Project Details
                </label>

                <textarea 
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary px-1 py-3 md:py-4 text-base md:text-lg text-on-surface outline-none resize-none"
                />
              </div>

              {/* BUTTON */}
              <div className="pt-4 md:pt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-on-surface text-surface px-6 md:px-12 py-3 md:py-5 rounded-full text-sm font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Send Message
                  <ArrowRight size={20} />
                </motion.button>
              </div>

            </form>
          </div>
        </div>

        {/* SIDE PANEL */}
        <div className="hidden xl:flex xl:col-span-4 flex flex-col gap-10">
          
          <div className="bg-white border border-outline/10 rounded-[2rem] p-6 md:p-10 flex flex-col gap-8 md:gap-10 h-full shadow-lg">

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-on-surface mb-2 md:mb-3">
                Contact Details
              </h3>

              <p className="text-sm md:text-base text-on-surface-variant">
                We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'hello@nexarstudios.com', href: 'mailto:hello@nexarstudios.com' },
                { icon: MapPin, label: 'Global HQ', value: <>Address here</> },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 md:gap-5">

                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-surface-container flex items-center justify-center">
                    <item.icon size={20} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-1">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a href={item.href} className="text-base md:text-lg text-on-surface hover:text-primary">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-base md:text-lg text-on-surface">
                        {item.value}
                      </p>
                    )}
                  </div>

                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 md:pt-10 border-t border-outline/10">
              <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-4 md:mb-6">
                Connect with us
              </p>

              <div className="flex gap-3 md:gap-4">
                {[Globe, Share2].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center text-slate-600">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
