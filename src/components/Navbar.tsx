import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/10">

      <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-[1440px] mx-auto">

        {/* LOGO */}
        <button 
          onClick={() => onPageChange('home')}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img 
            src="/logo.png" 
            alt="Nexar Logo"
            className="w-8 h-8 object-contain"
          />
          <span 
            style={{ fontFamily: "var(--font-logo)" }}
            className="text-lg md:text-xl text-slate-900 tracking-wide"
          >
            Nexar Studios
          </span>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-sm font-medium transition-colors ${
                currentPage === item.id
                  ? 'text-primary'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA BUTTON (DESKTOP) */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange('contact')}
          className="hidden md:block bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg hover:opacity-90 transition"
        >
          Get in Touch
        </motion.button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-slate-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-6 py-6 flex flex-col gap-6">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onPageChange(item.id);
                setIsOpen(false);
              }}
              className="text-left text-lg font-semibold text-slate-800"
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => {
              onPageChange('contact');
              setIsOpen(false);
            }}
            className="mt-4 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold"
          >
            Get in Touch
          </button>

        </div>
      )}
    </nav>
  );
}
