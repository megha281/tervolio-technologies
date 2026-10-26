import { PROJECTS } from '../data/content.js'

// Each preview is a small CSS drawing, not a screenshot, so nothing is implied to be live.
function Preview({ kind }) {
  if (kind === 'career') {
    return (
      <div className="art art-career" aria-hidden="true">
        <div className="doc">
          <b /><i style={{ width: '70%' }} /><i /><i style={{ width: '85%' }} />
          <b className="sub" /><i /><i style={{ width: '60%' }} />
        </div>
        <div className="score"><span /></div>
      </div>
    )
  }
  if (kind === 'business') {
    return (
      <div className="art art-business" aria-hidden="true">
        <div className="site"><div className="bar" /><div className="banner" />
          <div className="cols"><span /><span /><span /></div>
        </div>
        <div className="site site-b"><div className="bar" /><div className="banner" /></div>
      </div>
    )
  }
  return (
    <div className="art art-tools" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => <span key={i} className={i % 4 === 0 ? 'on' : ''} />)}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>Projects</h2>
          <p>We are a new company. Everything below is clearly marked as planned, in development or concept work.</p>
        </div>
        <div className="project-list">
          {PROJECTS.map((p) => (
            <article key={p.name} className="project">
              <Preview kind={p.kind} />
              <div className="project-body">
                <p className="status">{p.status}</p>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <ul className="tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
