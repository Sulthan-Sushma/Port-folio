const About = () => {
  const skills = [
    "React", "Python", "MYSQL", "PHP", "JAVASCRIPT", "HTML", "CSS",
    "FASTAPI", "SQL (Query Optimization)", "Prompt Engineering", "Generative AI (ChatGPT)"
  ];

  const experiences = [
    {
      year: "May 2025",
      title: "GenAI Intern (Job Simulation)",
      company: "Forage",
      description:
        "Completed practical tasks involving data extraction, financial analysis, and building an AI-powered financial chatbot as part of the BCG GenAI simulation.",
      certificate: "/certificates/genai.pdf",
    },
    {
      year: "Nov 2024 – Feb 2025",
      title: "Full Stack Development Intern",
      company: "GrowthMate Infotech Software Solutions Pvt. Ltd.",
      description:
        "Worked on full-stack development including frontend, backend, database design, API integration, and real-time applications using HTML, CSS, JS, PHP, and MySQL.",
      certificate: "/certificates/growthmate.pdf",
    },
    {
      year: "Oct 2024 – Nov 2024",
      title: "React.js Web Development Intern",
      company: "CodTech IT Solutions",
      description:
        "Completed a React.js internship focused on building UI components, layouts, and frontend workflows with consistent dedication.",
      certificate: "/certificates/codtech.pdf",
    },
    {
      year: "Aug 2024",
      title: "Data Science Intern",
      company: "British Airways (Forage)",
      description:
        "Completed tasks in web scraping, data cleaning, customer behavioral analysis, and insight generation.",
      certificate: "/certificates/british_airways.pdf",
    },
    {
      year: "Apr 2024 – Aug 2024",
      title: "Agile Methodology Intern",
      company: "Cognizant (Forage)",
      description:
        "Gained hands-on experience in Agile workflows including user stories, sprint planning, ceremonies, and project collaboration.",
      certificate: "/certificates/cognizant.pdf",
    },
  ];

  return (
    <section id="about" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">

        {/* ✅ Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          About Me
        </h2>

        {/* ✅ Profile Picture + Who I Am + What I Do */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">

          {/* ✅ Profile Picture */}
          <div className="hidden md:block">
            <img
              src="/pic.png" 
              alt="Sulthan Sushma"
              className="w-48 h-48 rounded-full object-cover object-center shadow-lg neon-border mx-auto"

            />
          </div>

          {/* ✅ Who I Am + What I Do */}
          <div>
            <div className="glass-card p-8 rounded-3xl mb-6">
              <h3 className="text-2xl font-bold mb-4 neon-glow">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I’m a passionate full-stack developer with hands-on experience building modern web applications through real-world projects.
                I specialize in crafting scalable, user-centric solutions using the latest technologies—blending clean engineering with creative problem-solving.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 neon-glow">What I Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                I turn ideas into functional digital experiences, handling everything from frontend UI to backend APIs.
                I build clean interfaces, strong backend logic, and optimize performance to make products fast, intuitive, and reliable.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ Tech Stack */}
        <div className="glass-card p-8 rounded-3xl mb-16">
          <h3 className="text-2xl font-bold mb-6 neon-glow">Tech Stack</h3>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 glass-card glass-card-hover neon-border rounded-full text-sm font-semibold transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* ✅ Coding Profiles */}
        <div className="glass-card p-8 rounded-3xl mb-16">
          <h3 className="text-2xl font-bold mb-6 neon-glow">Coding Profiles & Problem Solving</h3>

          <ul className="space-y-4 text-lg">
            <li><a href="https://leetcode.com/u/Sushma_127/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">LeetCode • Sushma_127</a></li>
            <li><a href="https://www.hackerrank.com/profile/sulthansushma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">HackerRank • sulthansushma</a></li>
            <li><a href="https://www.codechef.com/users/sulthan_sushma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">CodeChef • sulthan_sushma</a></li>
            <li><a href="https://www.interviewbit.com/profile/sulthan-sushma/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">InterviewBit • sulthan-sushma</a></li>
            <li><a href="https://codeforces.com/profile/sulthan_sushma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">CodeForces • sulthan_sushma</a></li>
            <li><a href="https://smartinterviews.in/profile/sulthan_sushma" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">SmartInterviews • sulthan_sushma</a></li>
          </ul>
        </div>

        {/* ✅ Experience Timeline */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center neon-glow">Experience Timeline</h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-6 rounded-2xl border-l-4 border-primary transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <span className="text-sm text-primary font-semibold">{exp.year}</span>
                </div>

                <p className="text-secondary mb-2">{exp.company}</p>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-secondary font-semibold transition-colors"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
