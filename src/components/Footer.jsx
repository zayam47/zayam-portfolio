import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {profile.name}. Built with React &amp; Vite.
        </p>
        <div className="footer__links">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
