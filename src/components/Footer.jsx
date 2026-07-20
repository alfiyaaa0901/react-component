function Footer() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      {/* SITE FOOTER */}

      <div className="footer-inner">

        {/* Footer top: brand + link columns */}
        <div className="footer-top">

          {/* Brand column */}
          <div className="footer-brand">
            <div className="nav-logo">
              <span className="nav-logo-main">Mori no Mise</span>
              <span className="nav-logo-jp">森の店 · handmade goods</span>
            </div>

            <p>
              A small, magical shop born from a love of handmade things,
              Studio Ghibli films, and cozy Japanese aesthetics.
            </p>

            {/* Social icons */}
            <div className="footer-social">
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Pinterest">📌</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Etsy">🛒</a>
            </div>
          </div>

          {/* Shop links */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><a href="shop.html">All Products</a></li>
              <li><a href="shop.html">Crochet</a></li>
              <li><a href="shop.html">Art Prints</a></li>
              <li><a href="shop.html">Ceramics</a></li>
              <li><a href="shop.html">Collectibles</a></li>
            </ul>
          </div>

          {/* Information links */}
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              <li><a href="about.html">Our Story</a></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          {/* Studio links */}
          <div className="footer-col">
            <h4>Studio</h4>
            <ul>
              <li><a href="#">Behind the Scenes</a></li>
              <li><a href="#">Making Diary</a></li>
              <li><a href="#">Collaborations</a></li>
              <li><a href="#">Wholesale</a></li>
            </ul>
          </div>

        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© 2025 Mori no Mise · Handmade in Kyoto, Japan 🌿</p>

          <div className="footer-bottom-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;