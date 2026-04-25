import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 md:pt-32 pb-24 md:pb-32 px-6 md:px-12 lg:px-16 max-w-[1440px] mx-auto">

      {/* HEADER */}
      <div className="max-w-3xl mb-16 md:mb-24">
        <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold text-on-surface mb-6">
          Let's Build Something <br />
          <span className="text-gradient">Amazing</span>
        </h1>

        <p className="text-base md:text-xl text-on-surface-variant">
          Tell us about your project. We usually reply within 24 hours.
        </p>
      </div>

      {/* FORM */}
      <div className="glass-panel rounded-[2rem] p-6 md:p-12 shadow-2xl">

        <form
          action="https://formsubmit.co/nexarstudios.info@gmail.com"
          method="POST"
          className="space-y-8 md:space-y-10"
        >

          {/* REQUIRED HIDDEN */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Nexar Inquiry 🚀" />

          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Full Name
              </label>

              <input
                name="name"
                type="text"
                required
                placeholder="riva"
                className="border-b border-outline-variant bg-transparent px-1 py-3 text-on-surface outline-none focus:border-primary"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Email
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="riva@company.com"
                className="border-b border-outline-variant bg-transparent px-1 py-3 text-on-surface outline-none focus:border-primary"
              />
            </div>

          </div>

          {/* PROJECT TYPE */}
          <div className="flex flex-col gap-4">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Project Type
            </label>

            <select
              name="project"
              className="bg-transparent border-b border-outline-variant px-1 py-3 text-on-surface outline-none"
            >
              <option value="">Select</option>
              <option>Web Design</option>
              <option>App Development</option>
              <option>3D / VR</option>
              <option>Branding</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              Project Details
            </label>

            <textarea
              name="message"
              rows={4}
              required
              placeholder="Tell us about your project..."
              className="border-b border-outline-variant bg-transparent px-1 py-3 text-on-surface outline-none resize-none focus:border-primary"
            />
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-on-surface text-surface px-8 md:px-12 py-4 md:py-5 rounded-full text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition w-full sm:w-auto"
          >
            Send Message
            <ArrowRight size={18} />
          </motion.button>

        </form>

      </div>

    </div>
  );
}
