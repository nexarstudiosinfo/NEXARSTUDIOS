import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ currentPage, onPageChange }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm border-b border-slate-200/10">
      
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-[1440px] mx-auto">
        
        {/* LOGO */}
        <button 
          onClick={() => onPageChange('home')}
          className="text-lg md:text-xl tracking-tight text-slate-900 cursor-pointer"
          style={{ fontFamily: "var(--font-logo)" }}   // 👈 Orbitron
        >
          Nexar Studios
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                currentPage === item.id 
                  ? 'text-primary' 
                  : 'text-slate-600 hover:text-primary'
              }`}
              style={{ fontFamily: "var(--font-sans)" }} // 👈 Poppins
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange('contact')}
          className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-primary/20"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Get in Touch
        </motion.button>

        {/* MOBILE MENU BUTTON */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-900"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-6 bg-white border-t border-slate-200/20">
          
          <div className="flex flex-col gap-4 mt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setOpen(false);
                }}
                className="text-left text-base font-medium text-slate-700 hover:text-primary"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => {
                onPageChange('contact');
                setOpen(false);
              }}
              className="mt-4 bg-primary text-on-primary px-6 py-3 rounded-full text-sm font-semibold"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              Get in Touch
            </button>
          </div>

        </div>
      )}

    </nav>
  );
}
