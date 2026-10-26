import { PROCESS } from '../data/content.js'

export default function Process() {
  return (
    <section id="process" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <h2>How we work</h2>
          <p>Four clear steps from first conversation to a live product.</p>
        </div>
        <ol className="steps">
          {PROCESS.map((s, i) => (
            <li key={s.title}>
              <span className="step-num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
