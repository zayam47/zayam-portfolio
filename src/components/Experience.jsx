import { experience } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Experience.css'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Experience</p>
          <h2 className="section-title">Where I've worked</h2>
          <p className="section-sub">Client-facing and technical experience that keeps my engineering grounded in real requirements.</p>
        </div>

        <div ref={ref} className="reveal timeline">
          {experience.map((job) => (
            <div key={job.role} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true" />
              <div className="card timeline__card">
                <div className="timeline__meta">
                  <h3>{job.role}</h3>
                  <span className="badge">{job.period}</span>
                </div>
                <p className="timeline__org">{job.org}</p>
                <ul className="timeline__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
