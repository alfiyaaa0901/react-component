function ShopSidebar() {
  return (
    <aside className="shop-sidebar" aria-label="Shop filters">

      {/* Category Filter */}
      <div className="sidebar-block">
        <h3 className="sidebar-title">Category</h3>

        <label className="filter-label">
          <input type="checkbox" defaultChecked />
          All Items
          <span className="filter-count">48</span>
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          Crochet
          <span className="filter-count">14</span>
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          Art Prints
          <span className="filter-count">11</span>
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          Ceramics
          <span className="filter-count">8</span>
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          Collectibles
          <span className="filter-count">9</span>
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          Café Goods
          <span className="filter-count">6</span>
        </label>
      </div>

      {/* Price Filter */}
      <div className="sidebar-block">
        <h3 className="sidebar-title">Price</h3>

        <label className="filter-label">
          <input type="checkbox" />
          Under ¥1,500
        </label>

        <label className="filter-label">
          <input type="checkbox" defaultChecked />
          ¥1,500 – ¥3,000
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          ¥3,000 – ¥5,000
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          Over ¥5,000
        </label>
      </div>

      {/* Availability */}
      <div className="sidebar-block">
        <h3 className="sidebar-title">Availability</h3>

        <label className="filter-label">
          <input type="checkbox" defaultChecked />
          In Stock
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          Made to Order
        </label>

        <label className="filter-label">
          <input type="checkbox" />
          On Sale
        </label>
      </div>

      <button
        type="button"
        className="btn btn-outline btn-sm"
        style={{ width: "100%", justifyContent: "center" }}
      >
        Clear Filters
      </button>

    </aside>
  );
}

export default ShopSidebar;