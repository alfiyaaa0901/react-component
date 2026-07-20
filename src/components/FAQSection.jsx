function FaqSection() {
  return (
    <section className="section section-alt">
      <div className="section-inner">

        <header className="section-header">
          <p className="label-accent">よくある質問</p>
          <h2 className="section-title">
            Frequently Asked Questions
          </h2>
        </header>

        <div style={{ maxWidth: "720px", margin: "0 auto" }}>

          <details>
            <summary>Do you ship internationally?</summary>
            <p>
              Yes! We ship worldwide from Kyoto using eco-friendly packaging.
            </p>
          </details>

          <details>
            <summary>Can I request a custom order?</summary>
            <p>
              Absolutely! Mention "custom" in your message and tell us your
              idea.
            </p>
          </details>

          <details>
            <summary>How do you care for crochet items?</summary>
            <p>
              Hand wash gently in cool water and air dry flat.
            </p>
          </details>

          <details>
            <summary>Do you offer returns?</summary>
            <p>
              Damaged items can be replaced. Handmade custom items are not
              refundable.
            </p>
          </details>

        </div>

      </div>
    </section>
  );
}

export default FaqSection;