import { useState } from "react";

interface Post {
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
}

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const posts: Post[] = [
    // ✅ ARTICLE 1 — E-COMMERCE
    {
      title: "How I Built a Full-Stack E-Commerce Platform",
      date: "March 2025",
      readTime: "6 min read",
      excerpt:
        "A full breakdown of how I built a complete e-commerce system with authentication, cart workflows, admin dashboards, and SQL optimization.",
      content: `
        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Introduction</h3>
          <p>
            Building an e-commerce application from scratch is one of the best ways to understand full-stack
            development. I developed a full platform with authentication, cart functionality, admin tools, and optimized
            database performance.
          </p>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Project Overview</h3>
          <p><strong>Tech Stack:</strong> PHP, JavaScript, MySQL</p>

          <p class="mt-3"><strong>Key Features:</strong></p>
          <ul class="list-disc ml-6 mt-2">
            <li>User authentication</li>
            <li>Shopping cart & checkout</li>
            <li>Role-based access control</li>
            <li>Admin dashboard</li>
            <li>SQL optimization</li>
            <li>Responsive UI</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">1. Designing the System Architecture</h3>
          <p>I used the MVC approach for scalability:</p>
          <ul class="list-disc ml-6 mt-2">
            <li><strong>Models:</strong> Database logic</li>
            <li><strong>Views:</strong> UI components</li>
            <li><strong>Controllers:</strong> Route handling</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">2. Secure Authentication</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Hashed passwords</li>
            <li>Session-based login</li>
            <li>Input validation</li>
            <li>Role-based control</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">3. Creating the Shopping Cart</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Add/remove items</li>
            <li>Update quantity</li>
            <li>Real-time totals</li>
            <li>Smooth checkout flow</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">4. Admin Dashboard</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Add/edit products</li>
            <li>Manage stock</li>
            <li>Organize categories</li>
            <li>View orders</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">5. Database Optimization</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Added indexes</li>
            <li>Normalized tables</li>
            <li>Optimized heavy queries</li>
          </ul>
          <p class="mt-3"><strong>Result:</strong> 30% faster query performance.</p>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-3">Conclusion</h3>
          <p>
            This project strengthened my full-stack engineering skills and gave me real-world experience in designing,
            securing, and optimizing scalable systems.
          </p>
        </section>
      `,
    },

    // ✅ ARTICLE 2 — COMPUTER VISION GAME
    {
      title: "Building a Gesture-Controlled Game Using Computer Vision",
      date: "February 2025",
      readTime: "7 min read",
      excerpt:
        "A computer-vision project using MediaPipe, OpenCV, and PyAutoGUI to control a game using hand gestures.",
      content: `
        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Introduction</h3>
          <p>
            This project enables users to control Temple Run using hand gestures. I used OpenCV for video processing,
            MediaPipe for detection, and PyAutoGUI for simulated key actions.
          </p>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Technology Stack</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Python</li>
            <li>OpenCV</li>
            <li>MediaPipe</li>
            <li>PyAutoGUI</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Real-Time Hand Tracking</h3>
          <p>MediaPipe Hands detects 21 keypoints to recognize gestures such as:</p>
          <ul class="list-disc ml-6 mt-2">
            <li>Swipe left</li>
            <li>Swipe right</li>
            <li>Jump</li>
            <li>Duck</li>
          </ul>
          <p class="mt-3">The system responds within <strong>50ms</strong> for real-time interaction.</p>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Gesture Mapping</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Left swipe → Left arrow</li>
            <li>Right swipe → Right arrow</li>
            <li>Palm open → Jump</li>
            <li>Fist → Duck</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Challenges & Solutions</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Lighting issues → adjusted HSV thresholds</li>
            <li>False positives → stabilized with frame averaging</li>
            <li>Latency → optimized pipeline</li>
          </ul>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-3">Conclusion</h3>
          <p>
            This project improved my real-time system design and computer vision skills while showing how AI can create
            interactive experiences.
          </p>
        </section>
      `,
    },

    // ✅ ARTICLE 3 — BCG GEN-AI
    {
      title: "Inside the BCG Gen-AI Simulation: Building a Financial Chatbot",
      date: "January 2025",
      readTime: "5 min read",
      excerpt:
        "My experience building an AI-powered financial chatbot during the BCG Gen-AI internship simulation.",
      content: `
        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Introduction</h3>
          <p>
            During the BCG Gen-AI Internship, I built a financial chatbot that summarizes insights from 10-K and 10-Q
            reports using rule-based logic and Python.
          </p>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Understanding the Problem</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>10-K annual reports</li>
            <li>10-Q quarterly filings</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Data Pipeline</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Parsed tables with Pandas</li>
            <li>Normalized metrics</li>
            <li>Cleaned noise and inconsistencies</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Rule-Based Logic</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Revenue trends</li>
            <li>Profit/loss signals</li>
            <li>Debt analysis</li>
            <li>Key ratios</li>
          </ul>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Generating Summaries</h3>
          <blockquote class="border-l-4 pl-4 italic">
            "The company’s net income increased by X%, driven by higher revenue and lower expenses."
          </blockquote>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-3">Conclusion</h3>
          <p>
            This project improved my Python data-processing and AI reasoning skills and showed how consultants use
            Gen-AI for financial analysis.
          </p>
        </section>
      `,
    },

    // ✅ ARTICLE 4 — SQL OPTIMIZATION
    {
      title: "What I Learned About SQL Performance Optimization",
      date: "December 2024",
      readTime: "4 min read",
      excerpt:
        "Indexing, query rewriting, and schema optimization techniques that improved my backend performance.",
      content: `
        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">Introduction</h3>
          <p>
            While building my e-commerce backend, I ran into performance issues and learned several SQL optimization
            techniques that significantly improved speed.
          </p>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">1. Indexing</h3>
          <ul class="list-disc ml-6 mt-2">
            <li>Product ID</li>
            <li>User ID</li>
            <li>Frequently filtered columns</li>
          </ul>
          <p class="mt-3">Result: 20–30% faster queries.</p>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">2. Rewriting Heavy Queries</h3>
          <p>
            I removed unnecessary joins and replaced nested queries with simpler alternatives.
          </p>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">3. Normalization</h3>
          <p>
            I enforced proper schema design to reduce redundancy and improve consistency.
          </p>
        </section>

        <section class="mb-8">
          <h3 class="text-2xl font-semibold mb-3">4. Limiting Data Fetch</h3>
          <p>
            Fetching only needed columns instead of <code>SELECT *</code> dramatically improved performance.
          </p>
        </section>

        <section>
          <h3 class="text-2xl font-semibold mb-3">Conclusion</h3>
          <p>
            SQL optimization is essential for scalable apps. These techniques helped me build a faster and more
            reliable backend.
          </p>
        </section>
      `,
    },
  ];

  // ✅ Single blog view
  if (selectedPost) {
    return (
      <section className="min-h-screen px-4 py-20 max-w-4xl mx-auto">
        <button
          onClick={() => setSelectedPost(null)}
          className="mb-6 px-4 py-2 bg-primary text-white rounded-lg hover:bg-secondary transition"
        >
          ← Back
        </button>

        <h2 className="text-3xl font-bold mb-2">{selectedPost.title}</h2>
        <p className="text-muted-foreground mb-4">
          {selectedPost.date} • {selectedPost.readTime}
        </p>

        <article
          className="prose prose-lg dark:prose-invert leading-relaxed"
          dangerouslySetInnerHTML={{ __html: selectedPost.content }}
        />
      </section>
    );
  }

  // ✅ Blog list view
  return (
    <section id="blog" className="min-h-screen px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
          Latest Articles
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="glass-card glass-card-hover p-8 rounded-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-primary font-semibold">
                  {post.date}
                </span>
                <span className="text-sm text-muted-foreground">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3 neon-glow">{post.title}</h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center text-primary font-semibold">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
