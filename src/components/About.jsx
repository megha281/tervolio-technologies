import { PRINCIPLES } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about-grid">
        <div>
          <h2>Technology that earns its place</h2>
          <p className="lead">
            Tervolio Technologies is a new company focused on useful technology, clean
            design and practical digital solutions. We build websites and software for
            people who want something that works, looks professional and is easy to
            keep running.
          </p>
        </div>
        <dl className="principles">
          {PRINCIPLES.map((p) => (
            <div key={p.title}>
              <dt>{p.title}</dt>
              <dd>{p.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
