import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">

        {/* ORIGINAL TEXT LOGO (NO IMAGE) */}
        <button 
          onClick={() => onPageChange('home')}
          className="text-xl text-slate-900 cursor-pointer"
          style={{ fontFamily: "var(--font-logo)" }}
        >
          Nexar Studios
        </button>

        {/* ORIGINAL NAV ITEMS */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`font-medium text-sm tracking-tight transition-colors duration-300 cursor-pointer ${
                currentPage === item.id 
                  ? 'text-primary' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA ACTIONS (ONLY ADDITION) */}
        <div className="hidden md:flex items-center gap-4">

          <a
            href="https://wa.me/916305874503?text=Hi%20Nexar%20Studios%2C%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            className="text-sm font-semibold text-green-600 hover:text-green-700"
          >
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/company/nexarstudios/"
            target="_blank"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/nexarstudios.in"
            target="_blank"
            className="text-sm font-semibold text-slate-600 hover:text-pink-500"
          >
            Instagram
          </a>

          {/* ORIGINAL CTA BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange('contact')}
            className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition cursor-pointer shadow-lg shadow-primary/20"
          >
            Get in Touch
          </motion.button>

        </div>

        {/* MOBILE ICON (UNCHANGED) */}
        <button className="md:hidden text-slate-900">
          <Menu size={24} />
        </button>

      </div>
    </nav>
  );
}
