import ProductCard from "./ProductCard";

function CrochetSection() {
  return (
    <section aria-labelledby="section-crochet">
      <div className="divider">
        <span>🧶</span>
      </div>

      <h2
        id="section-crochet"
        className="section-title"
        style={{ marginBottom: "1.5rem" }}
      >
        Crochet Companions
      </h2>

      <div className="products-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default CrochetSection;