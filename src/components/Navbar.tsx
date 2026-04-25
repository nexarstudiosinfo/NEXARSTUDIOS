import { motion } from "motion/react";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-white px-6 md:px-12 py-20 mt-auto">

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="space-y-4">
          <h2 style={{ fontFamily: "var(--font-logo)" }} className="text-xl">
            Nexar Studios
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Engineering immersive digital experiences.
          </p>
        </div>

        {/* SERVICES */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest text-slate-500">
            Services
          </h3>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <span>VR Experiences</span>
            <span>3D Visualization</span>
            <span>Web Development</span>
            <span>UI/UX Design</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-widest text-slate-500">
            Quick Links
          </h3>
          <div className="flex flex-col gap-2 text-sm text-slate-300">
            <button onClick={() => onPageChange("home")}>Home</button>
            <button onClick={() => onPageChange("services")}>Services</button>
            <button onClick={() => onPageChange("portfolio")}>Portfolio</button>
            <button onClick={() => onPageChange("about")}>About</button>
            <button onClick={() => onPageChange("contact")}>Contact</button>
          </div>
        </div>

        {/* SOCIAL + CTA */}
        <div className="space-y-6">

          <div className="space-y-3 text-sm text-slate-300">

            <a 
              href="https://www.instagram.com/nexarstudios.in" 
              target="_blank"
              className="block hover:text-white transition-colors"
            >
              Follow our work
            </a>

            <a 
              href="https://www.linkedin.com/company/nexarstudios/" 
              target="_blank"
              className="block hover:text-white transition-colors"
            >
              Connect with us
            </a>

            <a 
              href="https://wa.me/916305874503?text=Hi%20Nexar%20Studios%2C%20I%20want%20to%20discuss%20a%20project."
              target="_blank"
              className="block hover:text-white transition-colors"
            >
              Start a project
            </a>

          </div>

          {/* CTA BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onPageChange("contact")}
            className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition cursor-pointer"
          >
            Get in Touch
          </motion.button>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-16 pt-6 border-t border-white/10 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Nexar Studios. All rights reserved.
      </div>

    </footer>
  );
}
