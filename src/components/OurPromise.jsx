function OurPromise() {
  return (
    <section className="section" aria-label="Our promises">
      {/* OUR PROMISE / FEATURES */}

      <div className="section-inner">
        <header className="section-header">
          <p className="label-accent">約束します</p>
          <h2 className="section-title">Our Promise to You</h2>
        </header>

        <div className="features-row">

          <div className="feature-item">
            <span className="feature-icon">✨</span>
            <h3 className="feature-title">Truly Handmade</h3>
            <p className="feature-desc">
              Every stitch, brushstroke, and detail is done by human hands with
              love and intention.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🌿</span>
            <h3 className="feature-title">Eco-Conscious</h3>
            <p className="feature-desc">
              Natural fibres, recycled packaging, and carbon-neutral shipping
              wherever possible.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🎁</span>
            <h3 className="feature-title">Gift-Ready</h3>
            <p className="feature-desc">
              Every order is wrapped in tissue paper and tied with a hand-written
              note.
            </p>
          </div>

          <div className="feature-item">
            <span className="feature-icon">🐌</span>
            <h3 className="feature-title">Slow Fashion</h3>
            <p className="feature-desc">
              We make in small batches — never mass produced, always made with
              time and care.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OurPromise;