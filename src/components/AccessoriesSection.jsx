function AccessoriesSection() {
  return (
    <section aria-labelledby="section-prints" style={{ marginTop: "3rem" }}>
      <div className="divider">
        <span>🖼️</span>
      </div>

      <h2
        id="section-prints"
        className="section-title"
        style={{ marginBottom: "1.5rem" }}
      >
        Art Prints
      </h2>

      <div className="products-grid">

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product2.jpg" alt="clutcher set" loading="lazy" />
            <span className="product-badge">Limited</span>
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">Accessories · 版画</p>

            <h3 className="product-card-name">
              Clutcher set of 4
            </h3>

            <div className="product-card-footer">
              <span className="product-price">¥2,400</span>

              <button className="btn-add" aria-label="Add to cart">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product7.jpg" alt="Ponyo clutcher" loading="lazy" />
            <span className="product-badge product-badge-new">New</span>
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">Accessories · 版画</p>

            <h3 className="product-card-name">
              Ponyo Clutcher
            </h3>

            <div className="product-card-footer">
              <span className="product-price">¥2,800</span>

              <button className="btn-add" aria-label="Add to cart">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product8.jpg" alt="Soot Sprites Ring" loading="lazy" />
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">Accessories · 版画</p>

            <h3 className="product-card-name">
              Soot Sprites Ring
            </h3>

            <div className="product-card-footer">
              <div>
                <span className="product-price-old">¥2,200</span>
                <span className="product-price">¥1,700</span>
              </div>

              <button className="btn-add" aria-label="Add to cart">
                +
              </button>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}

export default AccessoriesSection;