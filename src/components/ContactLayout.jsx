function ContactLayout() {
  return (
    <div className="contact-layout">

      {/* LEFT SIDE */}
      <aside aria-label="Contact information">

        <p className="label-accent">連絡先情報</p>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem,2.5vw,2.4rem)",
            fontWeight: 300,
            marginBottom: "1rem",
            lineHeight: 1.2,
          }}
        >
          We'd love to hear
          <br />
          from you
        </h2>

        <p
          style={{
            color: "var(--warm-grey)",
            lineHeight: 1.9,
            fontSize: "0.97rem",
            marginBottom: "2rem",
          }}
        >
          Whether you have a question about an order, want to discuss a custom
          commission, are interested in wholesale, or simply want to share what
          Mori no Mise means to you — our inbox is always open.
        </p>

        <div className="contact-details">

          <div className="contact-detail-item">
            <div className="contact-detail-icon">📍</div>
            <div className="contact-detail-text">
              <strong>Studio Address</strong>
              <span>
                Higashiyama-ku, Kyoto 605-0862
                <br />
                Japan (visits by appointment only)
              </span>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">✉️</div>
            <div className="contact-detail-text">
              <strong>Email</strong>
              <span>hello@morinomise.jp</span>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">🕐</div>
            <div className="contact-detail-text">
              <strong>Reply Hours</strong>
              <span>
                Mon – Fri, 10:00 – 17:00 JST
                <br />
                (1–2 business days)
              </span>
            </div>
          </div>

          <div className="contact-detail-item">
            <div className="contact-detail-icon">🎁</div>
            <div className="contact-detail-text">
              <strong>Custom Orders</strong>
              <span>
                We welcome commissions! Please mention "custom" in your subject
                line.
              </span>
            </div>
          </div>

        </div>

        <div style={{ marginTop: "2rem" }}>
          <p
            className="label-accent"
            style={{ marginBottom: "0.75rem" }}
          >
            Find us here
          </p>

          <div className="social-links">
            <a href="#">📸</a>
            <a href="#">📌</a>
            <a href="#">🐦</a>
            <a href="#">🛒</a>
            <a href="#">▶️</a>
          </div>
        </div>

      </aside>

      {/* RIGHT SIDE */}

      <main aria-label="Contact form">

        <div className="contact-form-card">

          <p className="label-accent">メッセージを送る</p>

          <h3>Send us a message</h3>

          <form>

            <div className="form-row">

              <div className="form-group">
                <label className="form-label">Your Name *</label>

                <input
                  className="form-input"
                  type="text"
                  placeholder="Hana Tanaka"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>

                <input
                  className="form-input"
                  type="email"
                  placeholder="hello@email.com"
                />
              </div>

            </div>

            <div className="form-group">
              <label className="form-label">Subject</label>

              <select className="form-select">
                <option>Order Enquiry</option>
                <option>Custom Order</option>
                <option>Wholesale</option>
                <option>Collaboration</option>
                <option>Just Saying Hello 🌸</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Order Number</label>

              <input
                className="form-input"
                placeholder="MNM-2025-XXXXX"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Message</label>

              <textarea
                className="form-textarea"
                rows="6"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <div
              className="form-group"
              style={{ marginTop: "1rem" }}
            >
              <label>

                <input type="checkbox" />

                {" "}Subscribe me to the newsletter 🌸

              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-submit"
            >
              Send Your Message ✦
            </button>

          </form>

        </div>

      </main>

    </div>
  );
}

export default ContactLayout;