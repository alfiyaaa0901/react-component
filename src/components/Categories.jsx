import { Link } from "react-router-dom";

function Categories() {
  return (
    <section className="section" aria-label="Shop categories">
      <div className="section-inner">

        <header className="section-header">
          <p className="label-accent">何をお探しですか — What are you looking for?</p>
          <h2 className="section-title">Browse by Category</h2>
          <p>Every item is carefully handcrafted or curated with quiet attention to beauty.</p>
        </header>

        <div className="category-row">
          <Link to="/shop" className="category-pill">
            <span className="category-pill-icon">🧶</span>
            <span className="category-pill-label">Crochet</span>
          </Link>
          <Link to="/shop" className="category-pill">
            <span className="category-pill-icon">🖼️</span>
            <span className="category-pill-label">Art Prints</span>
          </Link>
          <Link to="/shop" className="category-pill">
            <span className="category-pill-icon">🌸</span>
            <span className="category-pill-label">Collectibles</span>
          </Link>
          <Link to="/shop" className="category-pill">
            <span className="category-pill-icon">🍵</span>
            <span className="category-pill-label">Café Goods</span>
          </Link>
          <Link to="/shop" className="category-pill">
            <span className="category-pill-icon">🌿</span>
            <span className="category-pill-label">Ceramics</span>
          </Link>
          <Link to="/shop" className="category-pill">
            <span className="category-pill-icon">📖</span>
            <span className="category-pill-label">Stationery</span>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Categories;