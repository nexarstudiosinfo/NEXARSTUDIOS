<section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
  
  <div className="text-center mb-16 md:mb-24">
    <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-4">
      Leadership
    </h2>
    <p className="text-base md:text-xl text-on-surface-variant max-w-2xl mx-auto">
      The architects behind our methodology.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
    
    {leadership.map((leader) => (
      
      <div key={leader.name} className="group cursor-pointer">

        {/* IMAGE */}
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 md:mb-8">
          
          <img 
            src={leader.image}
            alt={leader.name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
          />

          {/* OPTIONAL OVERLAY (premium look) */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

        </div>

        {/* TEXT */}
        <h3 className="text-xl md:text-2xl font-bold text-on-surface mb-1">
          {leader.name}
        </h3>

        <p className="text-xs font-bold text-primary tracking-widest uppercase mb-3 md:mb-4">
          {leader.role}
        </p>

        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
          {leader.bio}
        </p>

      </div>

    ))}

  </div>

</section>
