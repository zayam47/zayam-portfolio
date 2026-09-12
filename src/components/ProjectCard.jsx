import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function ProjectCard({ project }) {
  return (
    <article className={`card project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__head">
        <div>
          <h3>{project.title}</h3>
          <p className="project-card__subtitle">{project.subtitle}</p>
        </div>
        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="navbar__icon-btn"
              aria-label={`View ${project.title} source on GitHub`}
            >
              <FiGithub aria-hidden="true" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="navbar__icon-btn"
              aria-label={`View ${project.title} live demo`}
            >
              <FiExternalLink aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      <p className="project-card__desc">{project.description}</p>

      <ul className="project-card__highlights">
        {project.highlights.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      <div className="project-card__tags">
        {project.tags.map((tag) => (
          <span key={tag} className="badge">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
