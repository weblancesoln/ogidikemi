import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail, Phone, Linkedin, Youtube, ExternalLink,
  CheckCircle2, Target, Users, Layout, FileText,
  Calendar, Briefcase, GraduationCap, Award,
  ChevronRight, ArrowRight
} from 'lucide-react';
import './App.css';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function App() {
  const skills = [
    { name: "Virtual Assistance & Executive Support", items: ["Email & Calendar Management", "Task Coordination", "Operations Support"] },
    { name: "Communication & Strategy", items: ["Strategic Communication", "Media Engagement", "Content Creation"] },
    { name: "Administrative Excellence", items: ["Office Management", "Documentation & Reporting", "Team Coordination"] },
    { name: "Customer Success", items: ["Relationship Management", "Customer Retention", "Engagement Processes"] }
  ];

  const experiences = [
    {
      title: "Mid Management Staff",
      company: "Gtext Media / Gtext Land",
      period: "06/2025 - Present",
      description: "Promoted for leadership. Coordinate team operations, monitor task execution, and ensure alignment with organizational goals. Liaison between management and team members.",
      isCurrent: true
    },
    {
      title: "Administrative Assistant",
      company: "Ministry of Agriculture - Ondo State",
      period: "04/2024 - 04/2025",
      description: "Organized reports and official correspondence. Handled inquiries for stakeholders and agribusiness clients. Coordinated logistics for field operations."
    },
    {
      title: "Customer Service Manager",
      company: "Habeeb Ola Global Services",
      period: "07/2019 - 04/2020",
      description: "Implemented strategies to improve efficiency and satisfaction. Strengthened customer retention through improved engagement processes."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Agricultural Sciences",
      school: "Federal University of Agriculture - Abeokuta",
      period: "Graduated 11/2023"
    },
    {
      degree: "Virtual Assistant Certification",
      school: "Tech Buddies Africa",
      period: "Issued 06/2025",
      isCert: true
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">KEMI <span>MERCY</span></div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="btn btn-outline">Let&apos;s Talk</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Multi-skilled Professional</span>
            <h1 className="gradient-text">Driving Growth Through Storytelling & Strategy</h1>
            <p className="hero-description">
              I&apos;m <strong>Ogidi Oluwakemi Mercy</strong> — a professional blending sales, storytelling, and strategy to drive real business growth. I turn opportunities into results with professionalism and excellence.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">Work With Me <ArrowRight size={18} /></a>
              <a href="https://www.linkedin.com/in/oluwakemi-mercy" target="_blank" className="btn btn-outline"><Linkedin size={18} /> LinkedIn</a>
            </div>
          </motion.div>
          <motion.div
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="image-wrapper">
              <img src="/profile.jpg" alt="Ogidi Oluwakemi Mercy" className="profile-img" />
              <div className="image-accent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Vision */}
      <section id="about" className="about-section">
        <div className="container">
          <motion.div
            className="glass-card about-card"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
          >
            <div className="about-grid">
              <div className="about-content">
                <h2>I don&apos;t just market products — I help people trust what they&apos;re buying.</h2>
                <p>
                  From building my own food brand to closing real estate deals and supporting teams as a virtual assistant,
                  I’ve learned how to create systems that work, communicate value clearly, and turn opportunities into results.
                </p>
                <div className="about-features">
                  <div className="feature">
                    <CheckCircle2 className="text-primary" />
                    <span>Professionalism</span>
                  </div>
                  <div className="feature">
                    <CheckCircle2 className="text-primary" />
                    <span>Consistency</span>
                  </div>
                  <div className="feature">
                    <CheckCircle2 className="text-primary" />
                    <span>Commitment to Excellence</span>
                  </div>
                </div>
              </div>
              <div className="about-stats">
                <div className="stat-item">
                  <h3>Certified</h3>
                  <p>Virtual Assistant</p>
                </div>
                <div className="stat-item">
                  <h3>Mid Mgmt</h3>
                  <p>Operations Leader</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Core Expertise</h2>
          <motion.div
            className="skills-grid"
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {skills.map((skill, idx) => (
              <motion.div key={idx} className="skill-card glass-card" variants={fadeInUp}>
                <div className="skill-icon">
                  {idx === 0 && <Briefcase className="text-primary" />}
                  {idx === 1 && <Target className="text-primary" />}
                  {idx === 2 && <Layout className="text-primary" />}
                  {idx === 3 && <Users className="text-primary" />}
                </div>
                <h3>{skill.name}</h3>
                <ul className="skill-list">
                  {skill.items.map((item, i) => (
                    <li key={i}><ChevronRight size={14} className="text-primary" /> {item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Career Journey</h2>
          <div className="experience-timeline">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="timeline-item"
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <span className="period">{exp.period}</span>
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certs */}
      <section id="education" className="education-section">
        <div className="container education-grid">
          <div>
            <h2 className="section-title">Learning Path</h2>
            <div className="edu-list">
              {education.map((edu, idx) => (
                <div key={idx} className="edu-item glass-card mb-1">
                  <div className="edu-icon">
                    {edu.isCert ? <Award /> : <GraduationCap />}
                  </div>
                  <div className="edu-info">
                    <h3>{edu.degree}</h3>
                    <p>{edu.school}</p>
                    <span className="period">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="youtube-cta">
            <div className="glass-card cta-content">
              <h2>Watch My Journey</h2>
              <p>Explore my storytelling and media engagement through my YouTube channel.</p>
              <a href="https://youtube.com/@big_khemz?si=ecLon9sY6IHdyi3w" target="_blank" className="btn btn-primary">
                Visit YouTube <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="glass-card contact-grid">
            <div className="contact-info">
              <h2 className="gradient-textLarge">Let&apos;s Create Success Together</h2>
              <p>Looking for a dedicated professional to streamline your operations or spark business growth? I&apos;m just a message away.</p>

              <div className="contact-links">
                <a href="mailto:ogidikemi70@gmail.com" className="contact-link-item">
                  <Mail /> <span>ogidikemi70@gmail.com</span>
                </a>
                <a href="tel:08105272307" className="contact-link-item">
                  <Phone /> <span>08105272307</span>
                </a>
                <div className="contact-link-item">
                  <Briefcase /> <span>Ikorodu, Lagos State</span>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/oluwakemi-mercy" className="social-icon"><Linkedin /></a>
                <a href="https://youtube.com/@big_khemz?si=ecLon9sY6IHdyi3w" className="social-icon"><Youtube /></a>
              </div>
            </div>
            <div className="contact-cta-box">
              <div className="accent-box">
                <h3>Available for Opportunities</h3>
                <p>Strategic Support | Virtual Assistance | Admin Management</p>
                <button className="btn btn-primary w-full mt-2" onClick={() => window.location.href = 'mailto:ogidikemi70@gmail.com'}>Send a Message</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ogidi Oluwakemi Mercy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
