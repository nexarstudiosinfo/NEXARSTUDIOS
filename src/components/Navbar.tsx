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
          className="flex items-center gap-2"
        >

          <span style={{ fontFamily: "var(--font-logo)" }} className="text-lg">
            NEXAR STUDIOS
          </span>
        </button>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`text-sm font-medium ${
                currentPage === item.id 
                  ? 'text-primary' 
                  : 'text-slate-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* MOBILE ICON */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
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
        </div>
      )}
    </nav>
  );
}
