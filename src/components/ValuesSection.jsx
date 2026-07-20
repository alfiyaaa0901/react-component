function ValuesSection() {
  return (
    <section className="section section-alt" aria-labelledby="values-heading">
      <div className="section-inner">

        <header className="section-header">
          <p className="label-accent">価値観 · Values</p>
          <h2 id="values-heading" className="section-title">
            What We Believe In
          </h2>
          <p>The principles that guide every piece we make.</p>
        </header>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon">🐌</div>
            <h3 className="value-title">Slow Making</h3>
            <p className="value-desc">
              We never rush. Every item is made at its own pace,
              without deadlines chasing the craft.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🌿</div>
            <h3 className="value-title">Natural Materials</h3>
            <p className="value-desc">
              Cotton, wool, linen, clay — we choose natural fibres
              and materials that breathe beautifully.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">♻️</div>
            <h3 className="value-title">Zero Waste</h3>
            <p className="value-desc">
              Yarn offcuts become stuffing. Paper scraps become
              tags. We waste almost nothing.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">✨</div>
            <h3 className="value-title">Magic in Detail</h3>
            <p className="value-desc">
              Hidden embroidery, hand-stamped paper and tiny
              details make every piece special.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🤲</div>
            <h3 className="value-title">Community</h3>
            <p className="value-desc">
              We support local artists, fair wages and donate
              part of every sale to reforestation.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🎁</div>
            <h3 className="value-title">The Joy of Gifting</h3>
            <p className="value-desc">
              Every product is designed to become someone's
              treasured gift.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ValuesSection;