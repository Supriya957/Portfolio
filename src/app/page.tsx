
"use client";

import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Globe,
  Mail,
  Menu,
  Monitor,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

import { useState } from "react";
import { motion } from "framer-motion";



const projects = [
  {
    number: "01",
    title: "TechNews",
    category: "NEWS PLATFORM",
    description:
      "A modern news platform with dynamic article pages, reusable components and server-side rendering.",
    stack: ["Next.js", "TypeScript", "React"],
    link: "https://technews-nextjs-ssr.vercel.app",
    github: "https://github.com/Supriya957/technews-nextjs-ssr",
    icon: Globe,
    color: "lavender",
  },
  {
    number: "02",
    title: "EduQuest",
    category: "INTERACTIVE WEB",
    description:
      "An educational web experience designed to make learning more interactive and engaging.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://supriya957.github.io/eduquest-game/",
    github: "https://github.com/Supriya957/eduquest-game",
    icon: Sparkles,
    color: "peach",
  },
  {
    number: "03",
    title: "GreenLeaf Nursery",
    category: "NURSERY & PLANT WEBSITE",
    description:
      "A responsive nursery website designed to showcase plants through a welcoming and accessible web experience.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://supriya957.github.io/greenleaf-responsive-nursery-website/",
    github: "",
    icon: Globe,
    color: "mint",
  },
  {
    number: "04",
    title: "Smart Task Manager",
    category: "PRODUCTIVITY WEB APP",
    description:
      "A task management application designed to help users organize tasks and manage everyday activities.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://supriya957.github.io/smart-task-manger/",
    github: "",
    icon: Zap,
    color: "lavender",
  },
  {
    number: "05",
    title: "Thyrve – Nutrition AI",
    category: "AI & NUTRITION",
    description:
      "An AI-focused nutrition experience exploring personalized nutrition guidance through a modern web interface.",
    stack: ["AI", "Nutrition", "Web Design"],
    link: "https://thyrve-thyroid-nutrition-ai.lovable.app/",
    github: "",
    icon: Sparkles,
    color: "peach",
  },
  {
    number: "06",
    title: "E-Commerce Website",
    category: "ONLINE SHOPPING",
    description:
      "An e-commerce website designed to present products in an organized shopping experience.",
    stack: ["HTML", "CSS", "JavaScript", "E-Commerce UI"],
    link: "https://supriya957.github.io/e-commers/",
    github: "",
    icon: Monitor,
    color: "mint",
  },
  {
    number: "07",
    title: "Your next website",
    category: "LET'S BUILD IT",
    description:
      "A custom website for a business, creator or growing brand. Your idea could be my next project.",
    stack: ["Responsive Design", "Modern UI", "Web Development"],
    link: "#contact",
    github: "",
    icon: Monitor,
    color: "mint",
  },
];


const services = [
  {
    number: "01",
    title: "Business websites",
    description:
      "Professional websites that introduce your business, showcase your services and help customers get in touch.",
    icon: Monitor,
  },
  {
    number: "02",
    title: "Portfolio websites",
    description:
      "Personal websites for developers, creators and professionals who want to present their work online.",
    icon: Code2,
  },
  {
    number: "03",
    title: "Modern web experiences",
    description:
      "Responsive interfaces, interactive elements and polished frontend experiences built around your goals.",
    icon: Zap,
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Git",
  "GitHub",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [isSending, setIsSending] = useState(false);



  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          supriya<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>
      </nav>

      <section className="hero section" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <div className="availability">
            <span className="status-dot" />
            WEB DEVELOPER · OPEN TO PROJECTS
          </div>

          <h1>
            Turning ideas
            <br />
            into <span className="gradient-text">digital</span>
            <br />
            experiences<span className="accent">.</span>
          </h1>

          <p className="hero-description">
            Hey, I&apos;m Supriya. I build modern, responsive websites
            that help businesses and people bring their ideas to life.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <ArrowDownRight size={18} />
            </a>
            <a className="button button-secondary" href="#contact">
              Let&apos;s work together <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span className="meta-line" />
            <span>AVAILABLE FOR FREELANCE WORK</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="art-card art-card-main">
            <div className="art-card-top">
              <span className="window-dots">
                <i /><i /><i />
              </span>
              <span>creative.dev</span>
            </div>

            <div className="art-code">
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
              <br />
              &nbsp;&nbsp;name: <span className="code-green">
                &quot;Supriya&quot;
              </span>,
              <br />
              &nbsp;&nbsp;creative: <span className="code-orange">
                true
              </span>,
              <br />
              &nbsp;&nbsp;builds: <span className="code-green">
                &quot;for people&quot;
              </span>
              <br />
              {"}"};
            </div>

            <div className="art-card-footer">
              <Code2 size={15} />
              <span>DESIGN MEETS DEVELOPMENT</span>
            </div>
          </div>

          <div className="floating-chip chip-top">
            <Sparkles size={15} /> Creative thinking
          </div>
          <div className="floating-chip chip-bottom">
            <span className="status-dot" /> Building something new
          </div>

          <div className="art-cross cross-one">✳</div>
          <div className="art-cross cross-two">✳</div>
        </motion.div>

        <a className="scroll-cue" href="#work">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={15} />
        </a>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>Things I&apos;ve <span>built.</span></h2>
          </div>
          <p>
            A growing collection of projects, experiments and
            ideas brought to life through code.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                className="project-card"
                key={project.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <div className={`project-visual ${project.color}`}>
                  <div className="project-visual-top">
                    <span>{project.number} / PROJECT</span>
                    <ProjectIcon size={20} />
                  </div>
                  <div className="project-visual-center">
                    <ProjectIcon size={45} strokeWidth={1.2} />
                    <span>{project.title}</span>
                  </div>
                  <div className="visual-decoration">
                    {project.number}
                  </div>
                </div>

                <div className="project-info">
                  <span className="eyebrow">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span className="tag" key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.link && (
                      <a href={project.link}>
                        {project.number === "03" ? "Discuss a project" : "View project"}
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        Source code <Code2 size={15} />
                      </a>
                    )}
                    {!project.link && !project.github && (
                      <span className="coming-soon">PROJECT PREVIEW COMING SOON</span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 / WHAT I DO</span>
            <h2>How I can <span>help.</span></h2>
          </div>
          <p>
            Thoughtful design and reliable development for
            businesses and individuals ready to grow online.
          </p>
        </div>

        <div className="services-list">
          {services.map((service) => {
            const ServiceIcon = service.icon;

            return (
              <article className="service-row" key={service.number}>
                <span className="service-number">{service.number}</span>
                <div className="service-icon">
                  <ServiceIcon size={23} />
                </div>
                <div className="service-copy">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <ArrowUpRight className="service-arrow" size={22} />
              </article>
            );
          })}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-intro">
          <span className="eyebrow">03 / A LITTLE ABOUT ME</span>
          <h2>
            Developer by skill.
            <br />
            <span>Creative by nature.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            I&apos;m Supriya, a web developer interested in creating
            thoughtful digital experiences. I enjoy turning ideas
            into clean interfaces and building websites that are
            useful, accessible and easy to navigate.
          </p>
          <p>
            From personal portfolios to small-business websites,
            my goal is to help people establish a professional
            presence online, one project at a time.
          </p>

          <div className="skills-heading">TECHNOLOGIES I WORK WITH</div>
          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill-pill" key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact-panel">
          <div className="contact-decoration">LET&apos;S CREATE</div>
          <span className="eyebrow">04 / HAVE A PROJECT IN MIND?</span>
          <h2>
            Your idea.
            <br />
            My next <span>project.</span>
          </h2>
          <p>
            Need a website for your business, portfolio or next big
            idea? Let&apos;s talk about what we can build together.
          </p>
<button
  type="button"
  className="button button-primary contact-button"
  onClick={() => setShowContactForm((open) => !open)}
>
  <Mail size={18} />
  {showContactForm ? "Close form" : "Tell me about your project"}
  <ArrowUpRight size={17} />
</button>

{showContactForm && (

<form
  className="contact-form"
  onSubmit={async (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  setIsSending(true);
  setFormMessage("");

  try {
    const response = await fetch("https://formspree.io/f/xnpjrqvp", {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setFormMessage("Thank you! Your enquiry has been sent successfully.");
    } else {
      setFormMessage("Couldn't send your enquiry. Please try again.");
    }
  } catch {
    setFormMessage("Connection error. Please try again.");
  } finally {
    setIsSending(false);
  }
}}
  style={{
    display: "grid",
    gap: "12px",
    maxWidth: "500px",
    margin: "24px auto",
    textAlign: "left",
  }}
>
  <label htmlFor="project-name">Your name</label>
  <input
    id="project-name"
    name="name"
    type="text"
    placeholder="Your name"
    required
    style={{ padding: "12px", borderRadius: "8px" }}
  />

  <label htmlFor="project-email">Your email</label>
  <input
    id="project-email"
    name="email"
    type="email"
    placeholder="you@example.com"
    required
    style={{ padding: "12px", borderRadius: "8px" }}
  />

  <label htmlFor="project-details">
    Tell me about your project
  </label>
  <textarea
    id="project-details"
    name="project"
    rows={4}
    placeholder="What website would you like to build?"
    required
    style={{ padding: "12px", borderRadius: "8px" }}
  />

  <button
  type="submit"
  className="button button-primary contact-button"
>
  <Mail size={18} />
  Send project enquiry
  <ArrowUpRight size={17} />
</button>
<button type="submit" disabled={isSending}>
  {isSending ? "Sending..." : "Send project enquiry"}
</button>

{formMessage && <p role="status">{formMessage}</p>}
</form>

)}
          <span className="contact-note">
            Have a question? I&apos;d love to hear from you.
          </span>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="logo">
          supriya<span>.</span>
        </a>
        <span>DESIGNED & BUILT WITH CARE.</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
        <span className="copyright">
  © 2026 SUPRIYA
</span>
      </footer>
    </main>
  );
}
