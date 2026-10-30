"use client";

import { useEffect, useRef } from "react";
import { ArrowDownRight, ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Menu, X, Code2, ShieldCheck, Layers3, Smartphone, Cloud, Sparkles } from "lucide-react";
import { useState } from "react";

const skills = [
  { icon: Code2, no: "01", title: "Web development", desc: "Responsive websites and interactive web applications." },
  { icon: Layers3, no: "02", title: "UI / UX", desc: "Clear interfaces, visual systems and thoughtful interactions." },
  { icon: ShieldCheck, no: "03", title: "Cybersecurity", desc: "My main area of interest: security, networking and ethical practice." },
  { icon: Smartphone, no: "04", title: "App development", desc: "Mobile concepts, Android workflows and product prototypes." },
  { icon: Cloud, no: "05", title: "Cloud & backend", desc: "Databases, authentication, deployment and connected services." },
  { icon: Sparkles, no: "06", title: "AI & emerging tech", desc: "Exploring useful AI tools and new ways to build." },
];

const projects = [
  { id: "01", name: "DealVault Luxe", type: "FULL-STACK MARKETPLACE", desc: "A marketplace concept focused on product discovery, user accounts and a modern shopping experience.", tags: ["React", "Supabase", "Web app"], tone: "violet", label: "DEALVAULT / MARKETPLACE" },
  { id: "02", name: "DAS Digital Studio", type: "CREATIVE WEB EXPERIENCE", desc: "A digital studio concept exploring strong visual identity, responsive layouts and interactive presentation.", tags: ["Web design", "UI / UX", "Responsive"], tone: "blue", label: "DAS / DIGITAL STUDIO" },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("in-view");
        observer.unobserve(el);
      }
    }, { threshold: 0.14, rootMargin: "0px 0px -35px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function DashboardVisual() {
  return <div className="dashboard-scene" aria-label="Decorative 3D developer workspace illustration">
    <div className="scene-orbit orbit-a" /><div className="scene-orbit orbit-b" />
    <div className="dashboard-float float-back">
      <div className="dash-top"><i/><i/><i/><span>PROJECT OVERVIEW</span></div>
      <div className="dash-back-grid"><div/><div/><div/><div/></div>
    </div>
    <div className="dashboard-main">
      <div className="dash-top"><i/><i/><i/><span>DAS / CREATIVE DEVELOPER</span></div>
      <div className="dash-body">
        <div className="dash-side"><b>D.</b><span/><span/><span/><span/></div>
        <div className="dash-content"><small>PERSONAL WORKSPACE</small><h3>Ideas into<br/><em>digital reality.</em></h3><div className="dash-line wide"/><div className="dash-line"/><div className="dash-stats"><b/><b/><b/></div></div>
      </div>
    </div>
    <div className="floating-chip chip-one">✦ BUILD / CREATE</div><div className="floating-chip chip-two">CYBERSECURITY · WEB</div>
    <div className="light-beam"/>
  </div>;
}

function ProjectVisual({ tone, label }: { tone: string; label: string }) {
  return <div className={`project-visual ${tone}`}>
    <div className="project-window">
      <div className="window-bar"><span/><span/><span/><small>{label}</small></div>
      <div className="window-content"><div className="window-kicker">DIGITAL PRODUCT / 2026</div><div className="window-heading">Build beyond<br/><em>the ordinary.</em></div><div className="window-blocks"><i/><i/><i/></div><div className="window-footer"><b/><b/><b/><b/></div></div>
    </div>
    <div className="visual-orb"/>
  </div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="site-header"><a href="#home" className="logo">DAS<span>.</span></a>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}><a onClick={closeMenu} href="#about">About</a><a onClick={closeMenu} href="#skills">Expertise</a><a onClick={closeMenu} href="#work">Projects</a><a onClick={closeMenu} href="#journey">Journey</a></nav>
      <a className="header-cta" href="#contact">LET'S CONNECT <ArrowUpRight size={14}/></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
    </header>

    <section id="home" className="hero section-wrap">
      <div className="hero-copy">
        <Reveal><div className="eyebrow"><span className="status-dot"/> COMPUTER SCIENCE STUDENT <b>·</b> DEVELOPER</div></Reveal>
        <Reveal delay={80}><h1>Curiosity into<br/><span className="gradient-text">creation.</span></h1></Reveal>
        <Reveal delay={150}><p className="hero-lead">I'm Das — a developer in progress, exploring the space where technology, design and real-world ideas meet. I build digital experiences and keep learning what makes them better.</p></Reveal>
        <Reveal delay={220}><div className="hero-actions"><a className="button button-primary" href="#work">EXPLORE MY WORK <ArrowUpRight size={15}/></a><a className="button button-quiet" href="#about">MORE ABOUT ME <ArrowDownRight size={15}/></a></div></Reveal>
        <Reveal delay={280}><div className="hero-meta"><span>BASED IN TAMIL NADU, INDIA</span><span>OPEN TO LEARNING & COLLABORATION</span></div></Reveal>
      </div>
      <Reveal className="hero-art-wrap" delay={180}><DashboardVisual/></Reveal>
      <div className="scroll-cue"><span/> SCROLL TO EXPLORE</div>
    </section>

    <section id="about" className="intro-section section-wrap">
      <Reveal className="section-label"><span>01</span> / THE PERSON BEHIND THE PIXELS</Reveal>
      <div className="intro-grid">
        <Reveal><h2>Not just learning<br/>technology. <span className="gradient-text">Building with it.</span></h2></Reveal>
        <Reveal delay={100}><div className="intro-copy"><p>I'm currently pursuing a <strong>B.Sc. in Computer Science at Sri Vasavi College.</strong> I enjoy learning by making things — experimenting with interfaces, building applications and understanding the systems behind them.</p><p>Cybersecurity is my strongest interest, alongside web development, cloud technologies and AI. My approach is simple: stay curious, build with purpose and improve with every project.</p><div className="signature">DAS<span>.</span></div></div></Reveal>
      </div>
      <Reveal className="about-cards" delay={120}>
        <div className="about-tile tile-education"><small>EDUCATION</small><b>B.Sc. Computer Science</b><span>Sri Vasavi College</span><div className="tile-index">01</div></div>
        <div className="about-tile tile-focus"><small>PRIMARY INTEREST</small><b>Cybersecurity</b><span>Security · Networking · Ethical practice</span><div className="tile-index">02</div></div>
        <div className="about-tile tile-location"><small>LOCATION</small><b>Tamil Nadu</b><span>India</span><div className="tile-index">03</div></div>
      </Reveal>
    </section>

    <section id="skills" className="skills-section section-wrap">
      <Reveal className="section-heading"><div><div className="section-label"><span>02</span> / WHAT I EXPLORE</div><h2>Areas of <span className="gradient-text">focus.</span></h2></div><p>A growing toolkit across development, design and technology — shaped through coursework, experimentation and personal projects.</p></Reveal>
      <div className="skills-grid">{skills.map((skill, i) => { const Icon = skill.icon; return <Reveal key={skill.no} delay={i*55}><article className="skill-card"><div className="skill-top"><Icon size={22}/><span>{skill.no}</span></div><h3>{skill.title}</h3><p>{skill.desc}</p><div className="card-edge"/></article></Reveal>; })}</div>
    </section>

    <section id="work" className="work-section section-wrap">
      <Reveal className="section-heading"><div><div className="section-label"><span>03</span> / SELECTED WORK</div><h2>Made through <span className="gradient-text">curiosity.</span></h2></div><p>Personal builds and experiments. Each project is a chance to turn an idea into something people can interact with.</p></Reveal>
      <div className="projects-grid">{projects.map((project, i) => <Reveal key={project.id} delay={i*100}><article className="project-card"><ProjectVisual tone={project.tone} label={project.label}/><div className="project-info"><div className="project-number">PROJECT {project.id} <span>{project.type}</span></div><div className="project-title-row"><h3>{project.name}</h3><span className="project-arrow"><ArrowUpRight size={19}/></span></div><p>{project.desc}</p><div className="project-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article></Reveal>)}</div>
      <Reveal><div className="work-note"><span className="status-dot"/> MORE EXPERIMENTS AND BUILDS COMING SOON</div></Reveal>
    </section>

    <section id="journey" className="journey-section section-wrap">
      <Reveal className="section-heading"><div><div className="section-label"><span>04</span> / THE PROCESS</div><h2>Learn by doing.<br/><span className="gradient-text">Grow by building.</span></h2></div><p>Progress isn't a straight line. It's a cycle of curiosity, practice, feedback and better ideas.</p></Reveal>
      <Reveal className="journey-track"><div className="journey-line"/>{[{n:"01",t:"Explore",d:"Understand the problem and learn the tools."},{n:"02",t:"Experiment",d:"Try ideas, test approaches and find direction."},{n:"03",t:"Build",d:"Turn the strongest idea into a working experience."},{n:"04",t:"Improve",d:"Refine, learn from feedback and keep moving."}].map((x)=><div className="journey-step" key={x.n}><span>{x.n}</span><h3>{x.t}</h3><p>{x.d}</p></div>)}</Reveal>
    </section>

    <section id="contact" className="contact-section section-wrap">
      <Reveal className="contact-panel"><div className="contact-orb"/><div className="section-label"><span>05</span> / GET IN TOUCH</div><h2>Have an idea?<br/><span className="gradient-text">Let's make it real.</span></h2><p>I'm always open to meaningful conversations, collaborations and opportunities to learn something new.</p><a className="button button-primary" href="#home">START A CONVERSATION <ArrowUpRight size={15}/></a><div className="contact-bottom"><span>THANKS FOR STOPPING BY</span><span>DAS · 2026</span></div></Reveal>
    </section>

    <footer className="site-footer section-wrap"><a className="logo" href="#home">DAS<span>.</span></a><p>Designed with curiosity. Built with purpose.</p><div className="footer-links"><a href="#home">BACK TO TOP ↑</a><a href="#work">PROJECTS</a></div></footer>
  </main>;
}
