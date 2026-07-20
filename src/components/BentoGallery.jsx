function BentoGallery() {
  return (
    <section className="section" aria-label="Gallery collage">
      {/* BENTO / PHOTO COLLAGE */}

      <div className="section-inner">
        <header className="section-header">
          <p className="label-accent">写真集</p>
          <h2 className="section-title">Made with Care &amp; Magic</h2>
        </header>

        {/* Bento grid layout */}
        <div className="bento-grid">

          {/* Wide card top-left */}
          <div className="bento-card wide">
            <img
              src="/images/gallery1.jpg"
              alt="Handmade crochet workspace"
              loading="lazy"
            />
            <div className="bento-caption">
              <h3>The Making Space</h3>
              <p>Our cozy studio in Kyoto 🌿</p>
            </div>
          </div>

          {/* Tall card right */}
          <div className="bento-card tall">
            <img
              src="/images/gallery2.jpg"
              alt="Collection of art prints"
              loading="lazy"
            />
            <div className="bento-caption">
              <h3>Art Prints</h3>
              <p>Forest &amp; dreamy watercolour prints</p>
            </div>
          </div>

          {/* Bottom left small */}
          <div className="bento-card">
            <img
              src="/images/gallery3.jpg"
              alt="Ceramic goods"
              loading="lazy"
            />
            <div className="bento-caption">
              <h3>Ceramics</h3>
            </div>
          </div>

          {/* Bottom centre small */}
          <div className="bento-card">
            <img
              src="/images/gallery4.jpg"
              alt="Crochet plushies"
              loading="lazy"
            />
            <div className="bento-caption">
              <h3>Plushie Family</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BentoGallery;