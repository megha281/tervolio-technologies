export default function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Tervolio Technologies, home">
      <svg width="28" height="28" viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7C5CFF" />
            <stop offset="1" stopColor="#3DA5FF" />
          </linearGradient>
        </defs>
        <path d="M6 12h52v13H38v27H26V25H6z" fill="url(#logoGrad)" />
      </svg>
      <span>Tervolio<small> Technologies</small></span>
    </a>
  )
}
