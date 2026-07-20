function Navbar() {
  return (
    <header className="site-header">
      <nav className="nav-inner">

        {/* Logo */}
        <a href="index.html" className="nav-logo" aria-label="Mori no Mise Home">
          <span className="nav-logo-main">Mori no Mise</span>
          <span className="nav-logo-jp">森の店 · handmade goods</span>
        </a>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li><a href="index.html" className="active">Home</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>

        {/* Cart Icon */}
        <div className="nav-cart" aria-label="Shopping cart">
          🛒
          <span className="nav-cart-badge">3</span>
        </div>

        {/* Mobile hamburger */}
        <div className="nav-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;