const Resume = () => {
  const highlights = [
    "Gen-AI Intern at Boston Consulting Group (BCG) – Forage (financial chatbot)",
    "Full Stack Development Intern at GrowthMate Infotech (real-world web apps)",
    "React.js Web Development Intern at CodTech IT Solutions",
    "Data Science Intern at British Airways – Forage (web scraping & analysis)",
    "Agile Methodology Intern at Cognizant – Forage (user stories & sprint workflows)",
    "Built a full-stack e-commerce platform with authentication, cart system and admin panel",
    "Developed an AI-powered gesture-control system for Temple Run using OpenCV & MediaPipe",
    "Skilled in React, JavaScript, Python, PHP, MySQL and SQL performance optimization",
    "Certified in Python (GFG), MySQL (Simplilearn) and React.js (HackerRank)",
    "Strong foundation in Data Structures, Algorithms, Databases and Software Engineering",
    "National Yoga Champion (PEHOL 5th National Youth Games)",
    "Appeared for GATE 2025 – committed to continuous learning"
  ];

  return (
    <section id="resume" className="min-h-screen px-4 py-20">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Resume
        </h2>

        <div className="glass-card p-8 md:p-12 rounded-3xl mb-8">
          <h3 className="text-2xl font-bold mb-6 neon-glow">
            Professional Highlights
          </h3>

          <ul className="space-y-4 mb-8">
            {highlights.map((highlight, index) => (
              <li
                key={index}
                className="flex items-start group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <svg
                  className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1pPOORWQ6sg2t0NBlMZucwt1c0lukWunW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 glass-card glass-card-hover neon-border rounded-full text-lg font-semibold transition-all duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* ✅ Education Section */}
        <div className="glass-card p-8 md:p-12 rounded-3xl mb-8">
          <h3 className="text-2xl font-bold mb-6 neon-glow">Education</h3>

          <ul className="space-y-6">
            <li>
              <p className="font-semibold">Paramita High School – 10th (X)</p>
              <p className="text-sm text-muted-foreground">Telangana State Board of Secondary Education (TSBSE) • 2019–2020 • Percentage: 10</p>
            </li>
            <li>
              <p className="font-semibold">Alphores Junior College – 12th (XII)</p>
              <p className="text-sm text-muted-foreground">Telangana State Board of Intermediate Education (TSBIE) • 2020–2022 • Percentage: 8.43</p>
            </li>
            <li>
              <p className="font-semibold">Sri Indu College of Engineering & Technology (SICET) – B.Tech in CSE</p>
              <p className="text-sm text-muted-foreground">2022–2026 • CGPA: 7.25 • Roll No: 22D41A05N1</p>
            </li>
          </ul>
        </div>

        {/* ✅ Stats Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">6</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">5</div>
            <div className="text-muted-foreground">Internships Completed</div>
          </div>
          <div className="glass-card p-6 rounded-2xl text-center">
            <div className="text-4xl font-bold gradient-text mb-2">3</div>
            <div className="text-muted-foreground">Technical Certifications</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resume;
