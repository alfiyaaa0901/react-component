function Pagination() {
  return (
    <nav
      aria-label="Pagination"
      style={{
        marginTop: "3rem",
        display: "flex",
        gap: "8px",
        justifyContent: "center",
      }}
    >
      <a href="#" className="btn btn-primary btn-sm">
        1
      </a>

      <a href="#" className="btn btn-outline btn-sm">
        2
      </a>

      <a href="#" className="btn btn-outline btn-sm">
        3
      </a>

      <a href="#" className="btn btn-outline btn-sm">
        →
      </a>
    </nav>
  );
}

export default Pagination;