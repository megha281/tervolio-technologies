// A purely decorative, CSS-built visual: code on the left becomes a finished interface on the right.
function HeroVisual() {
  return (
    <div className="stage" aria-hidden="true">
      <div className="glow" />
      <div className="ring r1" />
      <div className="ring r2" />
      <div className="ring r3" />

      <div className="pane pane-code">
        <div className="dots"><i /><i /><i /></div>
        <div className="codeline" style={{ '--w': '62%', '--c': '#7C5CFF' }} />
        <div className="codeline indent" style={{ '--w': '48%', '--c': '#3DA5FF' }} />
        <div className="codeline indent" style={{ '--w': '70%', '--c': '#5B6BC9' }} />
        <div className="codeline indent" style={{ '--w': '36%', '--c': '#3DA5FF' }} />
        <div className="codeline" style={{ '--w': '54%', '--c': '#7C5CFF' }} />
      </div>

      <div className="pane pane-ui">
        <div className="dots"><i /><i /><i /></div>
        <div className="ui-hero" />
        <div className="ui-row">
          <span /><span /><span />
        </div>
        <div className="ui-btn" />
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-tag"><span className="pulse" /> Ideas Into Impact.</p>
          <h1>We Turn Ideas Into Digital Products.</h1>
          <p className="lead">
            Tervolio Technologies designs and builds websites, custom software and
            AI-powered applications for small businesses, startups and individuals.
          </p>
          <div className="actions">
            <a className="btn btn-primary" href="#contact">Start a Project</a>
            <a className="btn btn-ghost" href="#projects">Explore Our Work</a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
