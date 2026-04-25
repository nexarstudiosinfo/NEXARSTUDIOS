interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const navLinks = [
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', id: 'terms' },
    { name: 'Privacy Policy', id: 'privacy' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-white/10 text-white px-6 md:px-12 py-14">

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div className="space-y-4 text-center md:text-left">
          
          <button 
            onClick={() => onPageChange('home')}
            className="text-xl tracking-tight"
            style={{ fontFamily: "var(--font-logo)" }}
          >
            NEXAR STUDIOS
          </button>

          <p 
            className="text-sm text-slate-400 max-w-sm mx-auto md:mx-0"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            We build immersive digital experiences, combining design, technology, and innovation.
          </p>

        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center gap-4">

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Navigation
          </p>

          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onPageChange(link.id)}
              className="text-sm text-slate-400 hover:text-primary transition"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {link.name}
            </button>
          ))}

        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center md:items-end gap-4">

          <p className="text-xs uppercase tracking-widest text-slate-500">
            Connect
          </p>

          <a
            href="https://www.instagram.com/nexarstudios.in"
            target="_blank"
            className="text-sm text-slate-400 hover:text-primary transition"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/nexarstudios/"
            target="_blank"
            className="text-sm text-slate-400 hover:text-primary transition"
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/916305874503"
            target="_blank"
            className="text-sm text-slate-400 hover:text-primary transition"
          >
            WhatsApp
          </a>

        </div>

      </div>

      {/* LEGAL */}
      <div className="max-w-[1440px] mx-auto mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex gap-6 flex-wrap justify-center">
          {legalLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => onPageChange(link.id)}
              className="text-xs text-slate-500 hover:text-primary transition"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {link.name}
            </button>
          ))}
        </div>

        <p 
          className="text-xs text-slate-500"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          © {new Date().getFullYear()} Nexar Studios
        </p>

      </div>

    </footer>
  );
}
