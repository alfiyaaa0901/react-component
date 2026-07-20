function ProductCard() {
  return (
    <article className="product-card">
      <div className="product-card-image">
        <img
          src="/images/product1.jpg"
          alt="Forest Spirit Plushie"
          loading="lazy"
        />

        <span className="product-badge product-badge-new">New</span>

        <span className="product-card-heart">🤍</span>
      </div>

      <div className="product-card-body">
        <p className="product-card-category">
          Crochet · 編み物
        </p>

        <h3 className="product-card-name">
          Forest Spirit Plushie
        </h3>

        <div className="product-card-footer">
          <span className="product-price">
            ¥3,200
          </span>

          <button
            className="btn-add"
            aria-label="Add to cart"
          >
            +
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;