import { useState } from "react";
import SocialIcon from "./SocialIcon";

const initialFormState = { name: "", email: "", message: "" };
const contactEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

export default function Contact({ profile }) {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        nextErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.message.trim()) {
      nextErrors.message = "Please add a short message.";
    } else if (formData.message.trim().length < 15) {
      nextErrors.message = "Message should be at least 15 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitted(false);
    setSubmitError("");

    if (!validate()) {
      return;
    }

    if (!contactEndpoint) {
      setSubmitError(
        "Contact form endpoint is not configured. Add VITE_CONTACT_FORM_ENDPOINT in your deployment environment."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setFormData(initialFormState);
    } catch {
      setSubmitError("Could not send your message. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad section-reveal">
      <h3 className="section-title">Contact</h3>
      <div className="contact-layout">
        <aside className="contact-socials card">
          <h4>Connect</h4>
          <p className="contact-side-note">Reach out directly through any of these platforms.</p>
          <div className="contact-social-list">
            {profile.social.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className={`contact-social-btn social-${item.name.toLowerCase()}`}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="contact-social-icon">
                  <SocialIcon name={item.name} />
                </span>
                {item.name}
              </a>
            ))}
          </div>
        </aside>

        <form className="contact-form card" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            placeholder="Your full name"
          />
          {errors.name ? (
            <span id="name-error" className="field-error">
              {errors.name}
            </span>
          ) : null}

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="you@example.com"
          />
          {errors.email ? (
            <span id="email-error" className="field-error">
              {errors.email}
            </span>
          ) : null}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            placeholder="Tell me about your project"
          />
          {errors.message ? (
            <span id="message-error" className="field-error">
              {errors.message}
            </span>
          ) : null}

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {submitted ? (
            <p className="submit-note" role="status" aria-live="polite">
              Thanks. Your message has been sent successfully.
            </p>
          ) : null}

          {submitError ? (
            <p className="submit-note field-error" role="alert">
              {submitError}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
