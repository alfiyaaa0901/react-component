function Testimonial() {
  return (
    <blockquote
      className="testimonial-section"
      aria-label="Customer quote"
    >
      {/* TESTIMONIAL QUOTE */}

      <p className="testimonial-quote">
        "Every package feels like a love letter from a quiet forest — it's the
        most magical unboxing I've ever experienced."
      </p>

      <cite className="testimonial-author">
        — Sakura M., Kyoto &nbsp;·&nbsp; ★★★★★
      </cite>
    </blockquote>
  );
}

export default Testimonial;