function ContactHero() {
  return (
    <section className="contact-hero" aria-label="Contact page header">
      <p className="label-accent">お問い合わせ · Get in Touch</p>

      <h1 className="display-title">
        Say Hello to the Forest 🌿
      </h1>

      <p
        style={{
          marginTop: "0.75rem",
          color: "var(--warm-grey)",
        }}
      >
        We read every message personally — please allow 1–2 days for a
        reply.
      </p>
    </section>
  );
}

export default ContactHero;