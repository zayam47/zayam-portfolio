import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import avatar from '../assets/profile-avatar.jpg'
import { profile } from '../data/portfolio'
import './Navbar.css'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand" aria-label={`${profile.name} — home`}>
          <img src={avatar} alt="" className="navbar__mark" width="34" height="34" />
          <span className="navbar__name">{profile.name}</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__icon-btn"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <a
            className="navbar__icon-btn"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile in a new tab"
          >
            <FiGithub aria-hidden="true" />
          </a>
          <a
            className="navbar__icon-btn"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile in a new tab"
          >
            <FiLinkedin aria-hidden="true" />
          </a>
          <a href="#contact" className="btn btn-primary btn-sm navbar__cta">
            Let's talk
          </a>
          <button
            type="button"
            className="navbar__icon-btn navbar__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="navbar__mobile" aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="navbar__mobile-social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
