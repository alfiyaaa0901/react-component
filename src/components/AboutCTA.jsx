import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section
      className="section"
      style={{ textAlign: "center" }}
      aria-label="Call to action"
    >
      <div className="section-inner">

        <p className="label-accent">
          さあ、見てみましょう
        </p>

        <h2 className="section-title">
          Ready to find your treasure?
        </h2>

        <p
          className="text-muted"
          style={{
            maxWidth: "420px",
            margin: "1rem auto 2rem"
          }}
        >
          Every item in our shop carries a little piece of the studio's story.
          We hope you find something that feels like it was always meant to be
          yours.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          <Link to="/shop" className="btn btn-primary">
            Browse the Shop ✦
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Say Hello
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutCTA;