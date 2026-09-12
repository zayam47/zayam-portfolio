import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__dot" aria-hidden="true" /> Available for AI Engineer & Backend roles
        </p>
        <h1 className="hero__title">
          Hi, I'm <span className="gradient-text">{profile.name}</span>
          <br />
          {profile.title}
        </h1>
        <p className="hero__tagline">{profile.tagline}</p>

        <div className="hero__meta">
          <span>
            <FiMapPin aria-hidden="true" /> {profile.location}
          </span>
        </div>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View Projects <FiArrowRight aria-hidden="true" />
          </a>
          <a href={profile.resumeAI} className="btn btn-outline" download>
            <FiDownload aria-hidden="true" /> Download Resume
          </a>
        </div>

        <div className="hero__social">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <FiGithub aria-hidden="true" /> github.com/zayam47
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <FiLinkedin aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
