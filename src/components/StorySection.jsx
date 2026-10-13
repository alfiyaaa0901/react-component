import { Link } from "react-router-dom";

function StorySection() {
  return (
    <section className="section" aria-labelledby="how-began">
      <div className="section-inner">

        <div className="about-grid">

          <div className="about-image">
            <img
              src="/images/about1.jpg"
              alt="Yuki crocheting"
              loading="lazy"
            />
          </div>

          <div className="about-text">

            <p className="label-accent">
              始まり · How it began
            </p>

            <h2 id="how-began">
              A rainy afternoon in Kyoto
            </h2>

            <p>
              In the autumn of 2019, Yuki Tanaka sat by her apartment window
              watching the rain fall on temple rooftops, a half-finished
              amigurumi in her hands and My Neighbour Totoro playing softly
              in the background.
            </p>

            <p>
              She'd been crocheting since childhood — her grandmother had
              taught her using thick mountain wool — but that afternoon
              something clicked.
            </p>

            <p>
              Mori no Mise opened its first Etsy listing in January 2020.
              Within three months, the waiting list was six weeks long.
            </p>

            <Link to="/shop" className="btn btn-primary mt-md">
              Visit the Shop ✦
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StorySection;