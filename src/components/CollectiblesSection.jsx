function CollectiblesSection() {
  return (
    <section aria-labelledby="section-collectibles" style={{ marginTop: "3rem" }}>
      <div className="divider">
        <span>🌸</span>
      </div>

      <h2
        id="section-collectibles"
        className="section-title"
        style={{ marginBottom: "1.5rem" }}
      >
        Collectibles & Keepsakes
      </h2>

      <div className="products-grid">

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product4.jpg" alt="Totoro Plushie" loading="lazy" />
            <span className="product-badge product-badge-new">New</span>
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">
              Collectible · コレクタブル
            </p>

            <h3 className="product-card-name">
              Totoro Plushie
            </h3>

            <div className="product-card-footer">
              <span className="product-price">¥1,800</span>

              <button className="btn-add" aria-label="Add to cart">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product11.jpg" alt="Forest Creature Backpack" loading="lazy" />
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">
              Collectible · コレクタブル
            </p>

            <h3 className="product-card-name">
              Forest Creature Backpack
            </h3>

            <div className="product-card-footer">
              <span className="product-price">¥2,200</span>

              <button className="btn-add" aria-label="Add to cart">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product12.jpg" alt="Forest Spirit Clutcher" loading="lazy" />
            <span className="product-badge">Limited</span>
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">
              Accessory · 文房具
            </p>

            <h3 className="product-card-name">
              Forest Spirit Clutcher
            </h3>

            <div className="product-card-footer">
              <span className="product-price">¥1,200</span>

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

export default CollectiblesSection;