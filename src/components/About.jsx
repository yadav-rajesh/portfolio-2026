function DeveloperAvatar() {
  return (
    <svg viewBox="0 0 240 180" aria-hidden="true" focusable="false">
      <rect className="avatar-frame" x="8" y="8" width="224" height="164" rx="18" />
      <circle className="avatar-glow" cx="120" cy="86" r="56" />
      <circle className="avatar-head" cx="120" cy="68" r="22" />
      <path className="avatar-body" d="M78 134c4-26 20-39 42-39s38 13 42 39H78Z" />
      <rect className="avatar-laptop" x="78" y="118" width="84" height="18" rx="6" />
      <rect className="avatar-base" x="70" y="137" width="100" height="6" rx="3" />
      <circle className="avatar-dot" cx="78" cy="50" r="4" />
      <rect className="avatar-chip" x="150" y="44" width="34" height="12" rx="6" />
      <path className="avatar-line" d="M52 100h24" />
      <path className="avatar-line" d="M164 100h24" />
    </svg>
  );
}

export default function About({
  aboutText,
  aboutNote,
  aboutWorkStyle,
}) {
  return (
    <section id="about" className="section-pad section-reveal">
      <h3 className="section-title">About Me</h3>
      <div className="about-grid">
        <div className="about-main">
          <p className="about-intro">{aboutText}</p>
          <p className="about-note">{aboutNote}</p>
        </div>

        <div className="about-side">
          <div className="about-avatar" aria-hidden="true">
            <DeveloperAvatar />
          </div>

          <div className="about-list card">
            <h4>Work Style</h4>
            <ul>
              {aboutWorkStyle.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
