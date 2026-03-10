import SocialIcon from "./SocialIcon";

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
