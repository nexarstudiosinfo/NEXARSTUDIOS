interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const links = [
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
    { name: 'Privacy Policy', id: 'privacy' },
    { name: 'LinkedIn', id: 'linkedin' },
  ];

  return (
    <footer className="bg-slate-950 w-full border-t border-white/10 px-12 py-16 text-white mt-auto">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center">
        <button 
          onClick={() => onPageChange('home')}
          className="text-lg font-bold font-headline mb-8 md:mb-0 cursor-pointer"
        >
          Nexar Studios
        </button>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => onPageChange(link.id)}
              className="font-headline text-xs uppercase tracking-widest text-slate-500 hover:text-blue-400 transition-all cursor-pointer"
            >
              {link.name}
            </button>
          ))}
        </div>
        
        <div className="font-headline text-xs uppercase tracking-widest text-slate-500 text-center md:text-right">
          © {new Date().getFullYear()} Nexar Studios. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
