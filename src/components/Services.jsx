import { SERVICES } from '../data/content.js'

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-head">
          <h2>What we build</h2>
          <p>From a first website to custom software, we handle the design and the development.</p>
        </div>
        <ul className="service-list">
          {SERVICES.map((s) => (
            <li key={s.title} className="service">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d={s.icon} />
              </svg>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
