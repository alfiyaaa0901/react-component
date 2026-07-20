
   function FeaturedProducts() {
  return (
    <section className="section section-alt" aria-label="Featured products">
      {/* FEATURED PRODUCTS */}

      <div className="section-inner">
        <header className="section-header">
          <p className="label-accent">今週のおすすめ</p>
          <h2 className="section-title">Featured This Week</h2>
          <p>Slow-made treasures, each one unique.</p>
        </header>

        {/* Product grid */}
        <div className="products-grid">

          {/* Product Card 1 */}
          <article className="product-card">
            <div className="product-card-image">
              <img
                src="/images/product1.jpg"
                alt="Totoro Crochet Plushie"
                loading="lazy"
              />
              <span className="product-badge product-badge-new">New</span>
              <span className="product-card-heart">🤍</span>
            </div>

            <div className="product-card-body">
              <p className="product-card-category">Crochet · 編み物</p>
              <h3 className="product-card-name">Forest Spirit Plushie</h3>

              <div className="product-card-footer">
                <span className="product-price">¥3,200</span>
                <button className="btn-add" aria-label="Add to cart">
                  +
                </button>
              </div>
            </div>
          </article>

          {/* Product Card 2 */}
          <article className="product-card">
            <div className="product-card-image">
              <img
                src="/images/product2.jpg"
                alt="Misty Forest Art Print"
                loading="lazy"
              />
              <span className="product-badge">Limited</span>
              <span className="product-card-heart">🤍</span>
            </div>

            <div className="product-card-body">
              <p className="product-card-category">Art Print · 版画</p>
              <h3 className="product-card-name">Misty Forest Morning</h3>

              <div className="product-card-footer">
                <span className="product-price">¥2,400</span>
                <button className="btn-add" aria-label="Add to cart">
                  +
                </button>
              </div>
            </div>
          </article>

          {/* Product Card 3 */}
          <article className="product-card">
            <div className="product-card-image">
              <img
                src="/images/product3.jpg"
                alt="Ceramic Mushroom Mug"
                loading="lazy"
              />
              <span className="product-badge product-badge-sale">Sale</span>
              <span className="product-card-heart">🤍</span>
            </div>

            <div className="product-card-body">
              <p className="product-card-category">Ceramics · 陶器</p>
              <h3 className="product-card-name">Woodland Mushroom Mug</h3>

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

          {/* Product Card 4 */}
          <article className="product-card">
            <div className="product-card-image">
              <img
                src="/images/product4.jpg"
                alt="Mini Crochet Soot Sprites"
                loading="lazy"
              />
              <span className="product-badge product-badge-new">New</span>
              <span className="product-card-heart">🤍</span>
            </div>

            <div className="product-card-body">
              <p className="product-card-category">
                Collectible · コレクタブル
              </p>
              <h3 className="product-card-name">Tiny Soot Sprite Set</h3>

              <div className="product-card-footer">
                <span className="product-price">¥1,800</span>
                <button className="btn-add" aria-label="Add to cart">
                  +
                </button>
              </div>
            </div>
          </article>

        </div>

        {/* View all link */}
        <div className="text-center mt-md">
          <a href="shop.html" className="btn btn-outline">
            View All Products ✦
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;