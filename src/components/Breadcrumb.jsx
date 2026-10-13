import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <div className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span>›</span>
      <span>Shop</span>
    </div>
  );
}

export default Breadcrumb;