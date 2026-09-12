import { FiAward, FiBookOpen, FiCode } from 'react-icons/fi'
import { certifications, education, profile } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="reveal about">
          <div className="about__copy">
            <p className="kicker">About Me</p>
            <h2 className="section-title">Backend-focused engineer who grounds AI in real retrieval</h2>
            <p className="about__summary">{profile.summary}</p>
          </div>

          <div className="about__cards">
            <div className="card about__card">
              <FiCode aria-hidden="true" className="about__icon" />
              <h3>Focus</h3>
              <p>RAG pipelines, FastAPI backends, semantic search, and REST API design.</p>
            </div>
            <div className="card about__card">
              <FiBookOpen aria-hidden="true" className="about__icon" />
              <h3>Education</h3>
              <p>{education.degree}</p>
              <p className="about__faint">{education.school} · {education.gpa}</p>
            </div>
            <div className="card about__card">
              <FiAward aria-hidden="true" className="about__icon" />
              <h3>Certifications</h3>
              <ul className="about__cert-list">
                {certifications.map((cert) => (
                  <li key={cert.name}>{cert.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
