const Projects = () => {
  const projects = [
    {
      name: "Rock Paper Scissors – Mini Game",
      description:
        "A fun interactive Rock-Paper-Scissors game with clean UI and fast gameplay.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sulthan-Sushma/Rock-Paper-Scissor",
      highlight: true,
    },
    {
      name: "Registration Form – Frontend Validation",
      description:
        "User registration form with real-time form validation and responsive UI layout.",
      tech: ["HTML", "CSS", "JavaScript","PHP"],
      link: "https://github.com/Sulthan-Sushma/Registration_Form",
      highlight: true,
    },
    {
      name: "YouTube Video Downloader",
      description:
        "A Python tool for downloading YouTube videos using Pytube with format selection capability.",
      tech: ["Python", "Pytube"],
      link: "https://github.com/Sulthan-Sushma/YouTube_Downloader",
      highlight: true,
    },
    {
      name: "Tic-Tac-Toe Game",
      description:
        "A classic Tic-Tac-Toe game with a clean design, responsive UI, and smooth gameplay logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sulthan-Sushma/TIC-TAC-TOE",
      highlight: true,
    },
    {
      name: "Full-Stack E-Commerce Platform",
      description:
        "A complete e-commerce application featuring authentication, cart system, product management, and optimized SQL database queries.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      link: "https://github.com/Sulthan-Sushma/E-COMMERCE",
      highlight: true, // ⭐ Major Project
    },
    {
      name: "Temple Run – Hand Gesture Control (AI)",
      description:
        "An AI-based computer vision project that lets you control Temple Run using hand gestures via OpenCV and MediaPipe.",
      tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI"],
      link: "https://github.com/Sulthan-Sushma/Temple-run-hand-gestures",
      highlight: true, // ⭐ Major Project
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card glass-card-hover p-6 rounded-2xl ${
                project.highlight ? "neon-border" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold mb-2 neon-glow">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-secondary transition-colors font-semibold"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
