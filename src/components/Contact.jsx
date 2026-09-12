import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="section">
      <div className="container">
        <div ref={ref} className="reveal contact-card">
          <p className="kicker">Contact</p>
          <h2 className="section-title">Let's build something grounded.</h2>
          <p className="section-sub contact-card__sub">
            Open to AI Engineer, Machine Learning Engineer, and Backend Developer roles — and always happy to talk
            through a RAG or FastAPI problem.
          </p>

          <div className="contact-card__actions">
            <a href={`mailto:${profile.email}`} className="btn btn-primary">
              <FiMail aria-hidden="true" /> {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FiLinkedin aria-hidden="true" /> LinkedIn <FiArrowRight aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">
              <FiGithub aria-hidden="true" /> GitHub <FiArrowRight aria-hidden="true" />
            </a>
          </div>

          <div className="contact-card__resumes">
            <span>Resumes:</span>
            <a href={profile.resumeAI} download>
              <FiDownload aria-hidden="true" /> AI Engineer
            </a>
            <a href={profile.resumeBD} download>
              <FiDownload aria-hidden="true" /> Business Development
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
