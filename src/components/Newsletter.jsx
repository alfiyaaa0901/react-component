function Newsletter() {
  return (
    <section
      className="newsletter-section"
      aria-label="Newsletter signup"
    >
      {/* NEWSLETTER SIGNUP */}

      <div className="newsletter-inner">
        <p className="label-accent">メールマガジン</p>

        <h2>Join the Forest Circle</h2>

        <p>
          New arrivals, seasonal stories, and quiet little moments —
          delivered to your inbox.
        </p>

        <div className="newsletter-form">
          <input
            type="email"
            placeholder="your@email.com"
            aria-label="Email address"
          />

          <button
            type="button"
            className="btn btn-primary btn-sm"
          >
            Subscribe 🌸
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;