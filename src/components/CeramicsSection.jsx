function CeramicsSection() {
  return (
    <section aria-labelledby="section-ceramics" style={{ marginTop: "3rem" }}>
      <div className="divider">
        <span>🌿</span>
      </div>

      <h2
        id="section-ceramics"
        className="section-title"
        style={{ marginBottom: "1.5rem" }}
      >
        Ceramics & Café Goods
      </h2>

      <div className="products-grid">

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product3.jpg" alt="Woodland Mushroom Mug" loading="lazy" />
            <span className="product-badge product-badge-sale">Sale</span>
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">Ceramics · 陶器</p>

            <h3 className="product-card-name">
              Woodland Mushroom Mug
            </h3>

            <div className="product-card-footer">
              <div>
                <span className="product-price-old">¥3,800</span>
                <span className="product-price">¥2,900</span>
              </div>

              <button className="btn-add" aria-label="Add to cart">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product9.jpg" alt="Moss & River Bowl" loading="lazy" />
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">Ceramics · 陶器</p>

            <h3 className="product-card-name">
              Moss & River Bowl
            </h3>

            <div className="product-card-footer">
              <span className="product-price">¥4,200</span>

              <button className="btn-add" aria-label="Add to cart">
                +
              </button>
            </div>
          </div>
        </article>

        <article className="product-card">
          <div className="product-card-image">
            <img src="images/product10.jpg" alt="Matcha Ceremony Set" loading="lazy" />
            <span className="product-badge product-badge-new">New</span>
            <span className="product-card-heart">🤍</span>
          </div>

          <div className="product-card-body">
            <p className="product-card-category">Café Goods · 茶道具</p>

            <h3 className="product-card-name">
              Matcha Ceremony Set
            </h3>

            <div className="product-card-footer">
              <span className="product-price">¥6,800</span>

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

export default CeramicsSection;