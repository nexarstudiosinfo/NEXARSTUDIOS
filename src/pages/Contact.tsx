import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Globe, Share2, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-32 px-16 max-w-[1440px] mx-auto min-h-screen">
      <div className="max-w-4xl mb-24">
        <h1 className="font-headline text-[72px] leading-[1.1] font-bold text-on-surface mb-6">
          Let's Shape the <br />
          <span className="text-gradient">Future Together</span>
        </h1>
        <p className="font-sans text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Ready to elevate your digital presence? We partner with visionary brands to create extraordinary digital experiences. Tell us about your goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-12 xl:col-span-8">
          <div className="glass-panel rounded-[2rem] p-12 shadow-2xl">
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-1 py-4 font-sans text-lg text-on-surface transition-colors rounded-none outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Work Email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-1 py-4 font-sans text-lg text-on-surface transition-colors rounded-none outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <label className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Project Type</label>
                <div className="flex flex-wrap gap-4">
                  {['Web Design', 'App Development', 'Branding', 'Other'].map(type => (
                    <label key={type} className="cursor-pointer group">
                      <input type="radio" name="project_type" className="hidden peer" />
                      <span className="inline-block px-8 py-3 rounded-full border border-outline-variant text-on-surface-variant font-headline text-sm font-semibold transition-all peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary-container group-hover:bg-slate-50">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1">Project Details</label>
                <textarea 
                  rows={4}
                  placeholder="Tell us about your project timeline, budget, and goals..."
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-1 py-4 font-sans text-lg text-on-surface transition-colors rounded-none outline-none resize-none"
                />
              </div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-on-surface text-surface px-12 py-5 rounded-full font-headline text-sm font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Send Message
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:hidden xl:flex xl:col-span-4 flex flex-col gap-10">
          <div className="bg-white border border-outline/10 rounded-[2rem] p-10 flex flex-col gap-10 h-full shadow-lg">
            <div>
              <h3 className="font-headline text-3xl font-bold text-on-surface mb-3">Contact Details</h3>
              <p className="font-sans text-on-surface-variant">We typically respond within 24 hours.</p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'hello@nexarstudios.com', href: 'mailto:hello@nexarstudios.com' },
                { icon: MapPin, label: 'Global HQ', value: <>100 Innovation Drive<br />Suite 400<br />San Francisco, CA 94105</> },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center flex-shrink-0 text-on-surface">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="font-sans text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-lg text-on-surface hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-sans text-lg text-on-surface leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-outline/10">
              <p className="font-sans text-[10px] uppercase font-bold tracking-widest text-on-surface-variant mb-6">Connect with us</p>
              <div className="flex gap-4">
                {[Globe, Share2].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full bg-slate-100 hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center text-slate-600 cursor-pointer">
                    <Icon size={20} />
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
