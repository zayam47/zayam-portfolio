import { skills } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Skills</p>
          <h2 className="section-title">Tools I use to ship AI-backed products</h2>
          <p className="section-sub">
            A blend of AI/ML engineering, backend API development, and the client-facing skills to scope real
            problems.
          </p>
        </div>

        <div ref={ref} className="reveal skills-grid">
          {skills.map((group) => (
            <div key={group.category} className="card skills-card">
              <h3>{group.category}</h3>
              <div className="skills-card__tags">
                {group.items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
