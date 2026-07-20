function ShopTopbar() {
  return (
    <div className="shop-topbar">
      <p className="shop-result-count">
        Showing <strong>48 products</strong>
      </p>

      <div className="shop-sort">
        <label htmlFor="sort-select">Sort by:</label>

        <select id="sort-select">
          <option>Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>
    </div>
  );
}

export default ShopTopbar;