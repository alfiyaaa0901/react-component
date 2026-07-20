function Categories() {
  return (
<section className="section" aria-label="Shop categories">
  {/*
       BROWSE BY CATEGORY
  */}
  
    <div className="section-inner">

      <header className="section-header">
        <p className="label-accent">何をお探しですか — What are you looking for?</p>
        <h2 className="section-title">Browse by Category</h2>
        <p>Every item is carefully handcrafted or curated with quiet attention to beauty.</p>
      </header>

      {/* Category pill row */}
      <div className="category-row">
        <a href="shop.html" className="category-pill">
          <span className="category-pill-icon">🧶</span>
          <span className="category-pill-label">Crochet</span>
        </a>
        <a href="shop.html" className="category-pill">
          <span className="category-pill-icon">🖼️</span>
          <span className="category-pill-label">Art Prints</span>
        </a>
        <a href="shop.html" className="category-pill">
          <span className="category-pill-icon">🌸</span>
          <span className="category-pill-label">Collectibles</span>
        </a>
        <a href="shop.html" className="category-pill">
          <span className="category-pill-icon">🍵</span>
          <span className="category-pill-label">Café Goods</span>
        </a>
        <a href="shop.html" className="category-pill">
          <span className="category-pill-icon">🌿</span>
          <span className="category-pill-label">Ceramics</span>
        </a>
        <a href="shop.html" className="category-pill">
          <span className="category-pill-icon">📖</span>
          <span className="category-pill-label">Stationery</span>
        </a>
      </div>

    </div>
  </section>
  );
}

export default Categories;