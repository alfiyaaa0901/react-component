import { Link } from "react-router-dom";

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
              <li><Link to="/shop">All Products</Link></li>
              <li><Link to="/shop">Crochet</Link></li>
              <li><Link to="/shop">Art Prints</Link></li>
              <li><Link to="/shop">Ceramics</Link></li>
              <li><Link to="/shop">Collectibles</Link></li>
            </ul>
          </div>

          {/* Information links */}
          <div className="footer-col">
            <h4>Information</h4>
            <ul>
              <li><Link to="/about">Our Story</Link></li>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">FAQ</a></li>
              <li><Link to="/contact">Contact Us</Link></li>
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