const Footer = () => {
  const socials = [
    { name: "GitHub", url: "https://github.com/Sulthan-Sushma" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sulthan-sushma/" },
    //{ name: "Twitter", url: "https://twitter.com" },
    { name: "Email", url: "mailto:sulthansushma@gmail.com" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-4 py-12 border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Sulthan Sushma</h3>
            <p className="text-muted-foreground">Developer</p>
          </div>
          
          <div className="flex gap-4">
            {socials.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card glass-card-hover neon-border rounded-full flex items-center justify-center transition-all duration-300"
                aria-label={social.name}
              >
                <span className="text-sm font-semibold">{social.name[0]}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary/10 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Sulthan Sushma. All rights reserved. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
