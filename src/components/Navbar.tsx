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

        {/* LOGO */}
        <button 
          onClick={() => onPageChange('home')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img src="/logo.png" className="w-8 h-8 object-contain" />
          <span style={{ fontFamily: "var(--font-logo)" }} className="text-xl text-slate-900">
            Nexar Studios
          </span>
        </button>

        {/* NAV ITEMS */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id 
                  ? 'text-primary' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA ACTIONS */}
        <div className="hidden md:flex items-center gap-4">

          {/* WhatsApp */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/916305874503?text=Hi%20Nexar%20Studios%2C%20I%20want%20to%20discuss%20a%20project."
            target="_blank"
            className="text-sm font-semibold text-green-600 hover:text-green-700"
          >
            WhatsApp
          </motion.a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/nexarstudios/"
            target="_blank"
            className="text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            LinkedIn
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/nexarstudios.in"
            target="_blank"
            className="text-sm font-semibold text-slate-600 hover:text-pink-500"
          >
            Instagram
          </a>

          {/* MAIN CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange('contact')}
            className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            Get in Touch
          </motion.button>

        </div>

        {/* MOBILE MENU ICON */}
        <button className="md:hidden text-slate-900">
          <Menu size={24} />
        </button>

      </div>
    </nav>
  );
}
