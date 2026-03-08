function SkillIcon({ title }) {
  if (title === "Backend") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 3 6.5v11L12 22l9-4.5v-11L12 2Zm0 2.2 6.7 3.35L12 10.9 5.3 7.55 12 4.2Zm-7 5 6 3v7.2l-6-3V9.2Zm8 10.2v-7.2l6-3v7.2l-6 3Z"
        />
      </svg>
    );
  }

    if (title === "Frontend") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 4h18v3H3V4Zm2 6h6v10H5V10Zm8 0h6v4h-6v-4Zm0 6h6v4h-6v-4Z"
        />
      </svg>
    );
  }
  
  if (title === "Database") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 3c-4.97 0-9 1.57-9 3.5S7.03 10 12 10s9-1.57 9-3.5S16.97 3 12 3Zm-9 6v4c0 1.93 4.03 3.5 9 3.5s9-1.57 9-3.5V9c-1.78 1.3-5.07 2-9 2s-7.22-.7-9-2Zm0 6v2.5C3 19.43 7.03 21 12 21s9-1.57 9-3.5V15c-1.78 1.3-5.07 2-9 2s-7.22-.7-9-2Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="m19.43 12.98 1.34-1.04a1 1 0 0 0 .24-1.31l-1.27-2.2a1 1 0 0 0-1.24-.45l-1.58.63a6.9 6.9 0 0 0-1.1-.64l-.23-1.67A1 1 0 0 0 14.6 5h-2.2a1 1 0 0 0-.99.83l-.23 1.67c-.39.16-.76.37-1.1.64l-1.58-.63a1 1 0 0 0-1.24.45L6 10.63a1 1 0 0 0 .24 1.31l1.34 1.04c-.02.22-.03.45-.03.68s.01.46.03.68L6.24 15.4a1 1 0 0 0-.24 1.31l1.27 2.2a1 1 0 0 0 1.24.45l1.58-.63c.34.27.71.48 1.1.64l.23 1.67a1 1 0 0 0 .99.83h2.2a1 1 0 0 0 .99-.83l.23-1.67c.39-.16.76-.37 1.1-.64l1.58.63a1 1 0 0 0 1.24-.45l1.27-2.2a1 1 0 0 0-.24-1.31l-1.34-1.04c.02-.22.03-.45.03-.68s-.01-.46-.03-.68ZM13.5 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
      />
    </svg>
  );
}

function SkillItemIcon({ item }) {
  if (item === "Java") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.4 3.2c1.2 1-.4 1.7-1.6 2.3-.9.4-1.2.9-.5 1.4 1 .7 3.4.3 4.7-.3-.5.9-1.8 1.4-3.2 1.6-1.2.1-2.9-.1-3.5-.9-.8-1 .2-1.8 1.4-2.4 1.4-.7 2.3-1.1 2.7-1.7Zm-3 6.3c-1.7.5-2.7 1.2-2.7 1.9 0 1.1 2.3 1.9 5.3 1.9s5.3-.8 5.3-1.9c0-.7-.9-1.4-2.4-1.8v.8c.7.2 1.1.5 1.1.8 0 .6-1.7 1.1-4 1.1s-4-.5-4-1.1c0-.3.5-.6 1.4-.9v-.8Zm-1.6 6.2h8.4a3.2 3.2 0 0 1-2.8 1.6H10.6a3.2 3.2 0 0 1-2.8-1.6Z"
        />
      </svg>
    );
  }

  if (item === "Python") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 4c-4 0-3.8 1.8-3.8 1.8v1.9h3.9v.6H6.6s-2.6-.3-2.6 3.8c0 4 2.3 3.9 2.3 3.9h1.4V14s-.1-2.3 2.2-2.3h3.8s2.1 0 2.1-2.1V6s.3-2-3.8-2Zm-2.1 1.2a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z" />
        <path fill="currentColor" d="M12 20c4 0 3.8-1.8 3.8-1.8v-1.9h-3.9v-.6h5.5s2.6.3 2.6-3.8c0-4-2.3-3.9-2.3-3.9h-1.4V10s.1 2.3-2.2 2.3h-3.8s-2.1 0-2.1 2.1V18s-.3 2 3.8 2Zm2.1-1.2a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z" />
      </svg>
    );
  }

  if (item === "C++") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M11.5 7a5 5 0 1 0 0 10 5 5 0 0 0 3.7-1.6l-1.3-1.3a3.2 3.2 0 1 1 0-4.2l1.3-1.3A5 5 0 0 0 11.5 7Z" />
        <path fill="currentColor" d="M17 10.2h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1Zm0 3.6h1v-1h1v1h1v1h-1v1h-1v-1h-1v-1Z" />
      </svg>
    );
  }

  if (item === "Spring Boot") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M19.8 6.4c-2.8.2-4.7 1.4-6.2 3.1-2.1 2.4-4.8 3.2-7.6 3.2 2.1 2.4 5.6 3.7 8.8 3.1 4-.8 6.6-4.5 5-9.4Z" />
        <path fill="currentColor" d="M7.4 8.5c.9-.8 2.2-1.4 3.6-1.5-1.4-.5-3.2-.3-4.6.8-1.1.9-1.7 2.2-1.8 3.5.5-1 .9-2 2.8-2.8Z" />
      </svg>
    );
  }

  if (item === "HTML") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="m4.5 3 1.6 17.8L12 22l5.9-1.2L19.5 3h-15Zm11.2 5.1H9.2l.1 1.9h6.3l-.4 5-3.2.9-3.2-.9-.2-2.3h2l.1.8 1.3.3 1.4-.3.1-1.9H7.4L6.9 6h9l-.2 2.1Z" />
      </svg>
    );
  }

  if (item === "CSS") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="m4.5 3 1.6 17.8L12 22l5.9-1.2L19.5 3h-15Zm11 4.1-.2 2.1H9.1l.1 1.9h5.9l-.5 5.8-2.6.8-2.7-.8-.2-2.4h2l.1.9 1 .3 1-.3.2-2.2H7.3L6.8 5h8.7Z" />
      </svg>
    );
  }

  if (item === "JavaScript") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" />
        <path fill="#111" d="M9.7 16.4c.4.7 1 .9 1.8.9.7 0 1.2-.3 1.2-.8 0-.6-.5-.8-1.4-1.2l-.5-.2c-1.3-.5-2.2-1.2-2.2-2.6 0-1.3 1-2.3 2.6-2.3 1.1 0 1.9.4 2.5 1.4l-1.3.8c-.3-.5-.6-.7-1.2-.7-.5 0-.9.3-.9.7 0 .5.3.7 1.1 1l.5.2c1.6.7 2.5 1.3 2.5 2.8 0 1.6-1.3 2.4-2.9 2.4-1.6 0-2.6-.7-3.2-1.7l1.4-.8Zm-2.8.1c.3.5.6.8 1.1.8.6 0 .9-.2.9-1V10h1.7v6.4c0 1.9-1.1 2.7-2.7 2.7-1.4 0-2.2-.7-2.6-1.6l1.6-.9Z" />
      </svg>
    );
  }

  if (item === "React") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="1.7">
          <ellipse cx="12" cy="12" rx="9" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.8" transform="rotate(120 12 12)" />
        </g>
        <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      </svg>
    );
  }

  if (item === "MySQL") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M20 9.2c-1.1-2.5-3.2-3.9-5.8-4.1-2.2-.2-4.1.5-5.4 2-1.5 1.7-2.2 4.3-1.2 7 .7 1.8 2.1 3.1 3.8 3.7-1.3-1.4-1.8-3.6-1.1-5.7.8-2.3 2.8-3.6 5.1-3.3 1.9.3 3.4 1.5 4.6 3.8Zm-8.1 4.9c.8.6 1.8.9 2.9.9 1.3 0 2.4-.4 3.2-1.3-.4 1.7-1.9 2.8-3.8 2.8-1.1 0-2.1-.4-2.9-1.2l.6-1.2Z" />
      </svg>
    );
  }

  if (item === "MongoDb") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M12 2s3.8 4.6 3.8 9.2c0 3.3-1.8 6.2-3.8 8.8-2-2.6-3.8-5.5-3.8-8.8C8.2 6.6 12 2 12 2Zm0 3.1c-.7 1.2-1.8 3.5-1.8 5.9 0 1.9.8 3.8 1.8 5.4 1-1.6 1.8-3.5 1.8-5.4 0-2.4-1.1-4.7-1.8-5.9Z" />
      </svg>
    );
  }

  if (item === "IntelliJ IDEA") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
        <path fill="#111" d="M7.4 8.2h1.8v7.6H7.4V8.2Zm3.2 0h1.8l2.3 3.9V8.2h1.8v7.6h-1.8l-2.3-3.9v3.9h-1.8V8.2Z" />
      </svg>
    );
  }

  if (item === "VS Code") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="m16.6 3.3 4.1 2v13.4l-4.1 2-7.8-6 7.8-11.4Zm-9.3 7.9L3.3 8.3v7.4l4 2.8 3.2-2.4-3.2-2.5 3.2-2.4-3.2-2.6Z" />
      </svg>
    );
  }

  if (item === "Git") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="m12 2 10 10-10 10L2 12 12 2Zm0 3.2L5.2 12 12 18.8l6.8-6.8L12 5.2Zm-1 3.3a1.8 1.8 0 1 0 2 2.9v2.2a1.8 1.8 0 1 0 1.1 1.7v-3.1a1.8 1.8 0 1 0-1.1-1.7V8.6a1.8 1.8 0 0 0-2-.1Z" />
      </svg>
    );
  }

  if (item === "AWS") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6.2 14.8c2.4 1.7 5.6 2.7 8.5 2.7 2 0 4.1-.4 5.8-1.3.3-.2.5.2.3.4-1.7 1.5-4.2 2.3-6.5 2.3-3.4 0-6.6-1.2-8.9-3.2-.2-.2 0-.6.3-.4Zm11.8 1.2c-.3-.4-1.7-.2-2.3-.1-.2 0-.2-.2 0-.3 1.2-.8 3.1-.6 3.4-.3.3.3-.1 2.2-1.2 3.1-.2.1-.3.1-.2-.1.3-.6.7-1.9.3-2.4ZM8.3 11.5l1.4-4.1h1.8l1.5 4.1 1.5-4.1H16l-2.3 6h-1.7l-1.5-4-1.5 4H7.3l-2.2-6h1.8l1.4 4.1Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="currentColor" />
    </svg>
  );
}

function skillTone(item) {
  const map = {
    Java: "tone-java",
    Python: "tone-python",
    "C++": "tone-cpp",
    "Spring Boot": "tone-spring",
    HTML: "tone-html",
    CSS: "tone-css",
    JavaScript: "tone-js",
    React: "tone-react",
    MySQL: "tone-mysql",
    MongoDb: "tone-mongo",
    "IntelliJ IDEA": "tone-intellij",
    "VS Code": "tone-vscode",
    Git: "tone-git",
    AWS: "tone-aws",
  };

  return map[item] || "tone-default";
}

export default function Skills({ skills }) {
  return (
    <section id="skills" className="section-pad section-reveal">
      <h3 className="section-title">Skills</h3>
      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.title} className="card">
            <h4 className="card-title-with-icon">
              <span className="skill-icon-wrap">
                <SkillIcon title={group.title} />
              </span>
              {group.title}
            </h4>
            <ul>
              {group.items.map((item) => {
                const tone = skillTone(item);
                return (
                  <li key={item} className="skill-item-row">
                    <span className={`skill-mini-logo ${tone}`}>
                      <SkillItemIcon item={item} />
                    </span>
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
