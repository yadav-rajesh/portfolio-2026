export default function Experience({ experience }) {
  return (
    <section id="experience" className="section-pad section-reveal">
      <h3 className="section-title">Experience</h3>
      <div className="timeline">
        {experience.map((job) => (
          <article key={`${job.company}-${job.role}`} className="card timeline-card">
            <div className="timeline-head">
              <h4>{job.role}</h4>
              <span>{job.period}</span>
            </div>
            <p className="company">{job.company}</p>
            <ul>
              {job.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
