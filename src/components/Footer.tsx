interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const links = [
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-slate-950 w-full border-t border-white/10 px-6 md:px-12 py-12 md:py-16 text-white mt-auto">
      
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0">

        {/* LEFT */}
        <div className="text-center md:text-left">
          
          <button 
            onClick={() => onPageChange('home')}
            className="text-lg md:text-xl tracking-tight cursor-pointer"
            style={{ fontFamily: "var(--font-logo)" }}  // Orbitron
          >
            Nexar Studios
          </button>

          <p 
            className="text-sm text-slate-400 mt-3 max-w-xs"
            style={{ fontFamily: "var(--font-sans)" }} // Poppins
          >
            Building immersive digital experiences and next-gen technology solutions.
          </p>

        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => onPageChange(link.id)}
              className="text-xs uppercase tracking-widest text-slate-400 hover:text-primary transition-all cursor-pointer"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* RIGHT CTA */}
        <div className="flex flex-col items-center md:items-end gap-3">

          <a
            href="https://www.instagram.com/nexarstudios.in"
            target="_blank"
            className="text-sm text-slate-400 hover:text-primary transition"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/nexarstudios/"
            target="_blank"
            className="text-sm text-slate-400 hover:text-primary transition"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/916305874503"
            target="_blank"
            className="text-sm text-slate-400 hover:text-primary transition"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            WhatsApp
          </a>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="text-center mt-10 pt-6 border-t border-white/10">
        <p 
          className="text-xs uppercase tracking-widest text-slate-500"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          © {new Date().getFullYear()} Nexar Studios. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
