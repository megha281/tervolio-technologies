import Logo from './Logo.jsx'
import { NAV_LINKS, SERVICES } from '../data/content.js'

// A social link only shows when its URL is set in your .env file.
const SOCIALS = [
  { label: 'LinkedIn', url: import.meta.env.VITE_LINKEDIN_URL },
  { label: 'GitHub', url: import.meta.env.VITE_GITHUB_URL },
  { label: 'X', url: import.meta.env.VITE_X_URL },
  { label: 'Instagram', url: import.meta.env.VITE_INSTAGRAM_URL },
].filter((s) => s.url)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-tag">Ideas Into Impact.</p>
        </div>
        <nav aria-label="Footer">
          <h2>Explore</h2>
          <ul>{NAV_LINKS.map((l) => <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>)}</ul>
        </nav>
        <div>
          <h2>Services</h2>
          <ul>{SERVICES.map((s) => <li key={s.title}><a href="#services">{s.title}</a></li>)}</ul>
        </div>
        {SOCIALS.length > 0 && (
          <div>
            <h2>Follow</h2>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.label}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="container footer-base">
        &copy; {new Date().getFullYear()} Tervolio Technologies. All rights reserved.
      </div>
    </footer>
  )
}
