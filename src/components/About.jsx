export default function About({
  aboutText,
  aboutNote,
  aboutLearning,
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
          <div className="about-list card">
            <h4>Current Learning</h4>
            <ul>
              {aboutLearning.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
