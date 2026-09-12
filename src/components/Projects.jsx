import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import ProjectCard from './ProjectCard'
import './Projects.css'

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Projects</p>
          <h2 className="section-title">Things I've built</h2>
          <p className="section-sub">
            Real, working builds — from n8n AI-agent automations to a local-first RAG API and a full-stack marketplace.
          </p>
        </div>

        <div ref={ref} className="reveal projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
