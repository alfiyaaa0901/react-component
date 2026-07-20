function AboutHero() {
  return (
    <section className="about-hero" aria-label="About page header">
      <div className="about-hero-inner">
        <p className="label-accent">物語 · Our Story</p>

        <h1 className="display-title">
          Born from a love of
          <br />
          <em style={{ color: "var(--sienna)" }}>
            slow, handmade things
          </em>
        </h1>

        <p style={{ marginTop: "1.5rem" }}>
          Every stitch, every brushstroke, every carefully wrapped parcel is
          an act of quiet love — for craft, for nature, and for the magic that
          lives in the everyday details most people rush past.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;