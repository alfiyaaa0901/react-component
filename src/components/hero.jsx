 function Hero() {
  return (
  <section className="hero grain-overlay" aria-label="Hero">

    {/*Floating decorative petals (CSS only) */}
    <div className="hero-petal hero-petal-1" aria-hidden="true"></div>
    <div className="hero-petal hero-petal-2" aria-hidden="true"></div>
    <div className="hero-petal hero-petal-3" aria-hidden="true"></div>

    {/* Left: text content */}
    <div className="hero-text">

      <p className="hero-eyebrow">新着アイテム · New Arrivals</p>

      <h1 className="hero-title">
        Crafted with<br />
        <em>forest magic</em><br />
        &amp; gentle hands
      </h1>

      <p className="hero-desc">
        Handmade collectibles, crochet companions, and art prints
        inspired by the quiet wonder of Studio Ghibli — each piece
        tells a story of slow mornings and forest light.
      </p>

      <div className="hero-actions">
        <a href="shop.html" className="btn btn-primary">Browse the Shop ✦</a>
        <a href="about.html" className="btn btn-outline">Our Story</a>
      </div>

    </div>

    {/* Right: cinematic hero image */}
    <div className="hero-image">
      <img src="images/hero.jpg" alt="Collection of handmade Ghibli inspired goods" />

      {/* Floating info tag on image */}
      <div className="hero-tag">
        <span className="hero-tag-label">✦ New Collection</span>
        <span className="hero-tag-value">Spring 2025</span>
      </div>
    </div>

  </section>


  );
}

export default Hero;
 