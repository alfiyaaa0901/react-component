function TeamSection() {
  return (
    <section className="section" aria-labelledby="team-heading">
      <div className="section-inner">

        <header className="section-header">
          <p className="label-accent">
            私たちについて
          </p>

          <h2 id="team-heading" className="section-title">
            Meet the Makers
          </h2>

          <p>
            A very small team with very big hearts.
          </p>
        </header>

        <div className="features-row">

          <div className="feature-item">

            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto 16px",
                border: "3px solid var(--blush)"
              }}
            >
              <img
                src="images/team1.jpg"
                alt="Yuki Tanaka"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <h3 className="feature-title">
              Yuki Tanaka
            </h3>

            <p
              className="label-accent"
              style={{ fontSize: "0.72rem" }}
            >
              Founder & Lead Maker
            </p>

            <p
              className="feature-desc"
              style={{ marginTop: "8px" }}
            >
              Crocheter, watercolor artist and dreamer behind
              Mori no Mise.
            </p>

          </div>

          <div className="feature-item">

            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto 16px",
                border: "3px solid var(--sage)"
              }}
            >
              <img
                src="images/team2.jpg"
                alt="Hana Mori"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <h3 className="feature-title">
              Hana Mori
            </h3>

            <p
              className="label-accent"
              style={{ fontSize: "0.72rem" }}
            >
              Ceramicist
            </p>

            <p
              className="feature-desc"
              style={{ marginTop: "8px" }}
            >
              Creates handcrafted ceramic pieces inspired by
              Kyoto traditions.
            </p>

          </div>

          <div className="feature-item">

            <div
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "50%",
                overflow: "hidden",
                margin: "0 auto 16px",
                border: "3px solid var(--lavender)"
              }}
            >
              <img
                src="images/team3.jpg"
                alt="Sora Kita"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </div>

            <h3 className="feature-title">
              Sora Kita
            </h3>

            <p
              className="label-accent"
              style={{ fontSize: "0.72rem" }}
            >
              Print & Packaging
            </p>

            <p
              className="feature-desc"
              style={{ marginTop: "8px" }}
            >
              Designs every tag, package and thank-you card
              with care.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TeamSection;