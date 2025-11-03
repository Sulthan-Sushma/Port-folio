const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-30"></div>
      
      <div className="max-w-4xl mx-auto text-center z-10 animate-fade-in-up">
        <div className="mb-8 animate-float">
          <div className="w-32 h-32 mx-auto rounded-full glass-card flex items-center justify-center neon-border animate-glow">
            <span className="text-6xl font-bold gradient-text">SS</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-glow">
          SULTHAN SUSHMA
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-6 gradient-text">
          DEVELOPER
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Creating future-ready solutions through AI, Python, and full-stack development.
          Bringing concepts to life with optimized databases and intuitive interfaces.
        </p>
        
        <a 
          href="#projects" 
          className="inline-block px-8 py-4 glass-card glass-card-hover neon-border rounded-full text-lg font-semibold transition-all duration-300"
        >
          View My Work
        </a>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
