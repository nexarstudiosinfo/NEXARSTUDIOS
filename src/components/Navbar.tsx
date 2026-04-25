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
        <span style={{ fontFamily: "var(--font-logo)" }}>
  Nexar Studios
</span>
        
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`font-headline font-medium text-sm tracking-tight transition-colors duration-300 cursor-pointer ${
                currentPage === item.id 
                  ? 'text-primary' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onPageChange('contact')}
          className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-full font-sans text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-primary/20"
        >
          Get in Touch
        </motion.button>

        <button className="md:hidden text-slate-900">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
