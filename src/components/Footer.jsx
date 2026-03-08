function SocialIcon({ name }) {
  const key = name.toLowerCase();

  if (key === "github") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2C6.48 2 2 6.58 2 12.24c0 4.53 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.07 1.53 1.07.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.15-4.55-5.1 0-1.13.39-2.05 1.04-2.77-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.88a9.3 9.3 0 0 1 2.5.35c1.9-1.34 2.75-1.06 2.75-1.06.54 1.4.2 2.44.1 2.7.65.72 1.04 1.64 1.04 2.77 0 3.96-2.34 4.84-4.57 5.1.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.6.69.49A10.3 10.3 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z"
        />
      </svg>
    );
  }

  if (key === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M6.94 8.5a1.93 1.93 0 1 1 0-3.86 1.93 1.93 0 0 1 0 3.86ZM8.5 10.17H5.38v9.19H8.5v-9.2Zm4.98 0h-2.99v9.19h3.12v-4.83c0-2.69 3.5-2.94 3.5 0v4.83h3.13V13.5c0-4.56-4.99-4.39-6.76-2.15v-1.18Z"
        />
      </svg>
    );
  }

  if (key === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M3 6.75A1.75 1.75 0 0 1 4.75 5h14.5A1.75 1.75 0 0 1 21 6.75v10.5A1.75 1.75 0 0 1 19.25 19H4.75A1.75 1.75 0 0 1 3 17.25V6.75Zm1.8.1 6.76 5.12a.75.75 0 0 0 .9 0l6.76-5.12a.25.25 0 0 0-.15-.45H4.95a.25.25 0 0 0-.15.45Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
    </svg>
  );
}

export default function Footer({ name, social = [] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-row">
        <div className="footer-socials">
          {social.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="footer-social-btn"
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noreferrer" : undefined}
              aria-label={item.name}
              title={item.name}
            >
              <span className="footer-social-icon">
                <SocialIcon name={item.name} />
              </span>
            </a>
          ))}
        </div>
        <p>
          &copy; {year} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
