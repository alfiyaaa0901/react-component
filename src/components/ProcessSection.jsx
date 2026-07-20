function ProcessSection() {
  return (
    <section className="section section-alt" aria-labelledby="process-heading">
      <div className="section-inner">

        <div className="about-grid reverse">

          {/* Text */}

          <div className="about-text">

            <p className="label-accent">
              作り方 · The Process
            </p>

            <h2 id="process-heading">
              From idea to your door
            </h2>

            <div className="timeline" style={{ marginTop: "2rem" }}>

              <div className="timeline-step">
                <div className="timeline-dot">🌱</div>
                <h3>Inspiration</h3>
                <p>
                  A walk through Arashiyama bamboo forest, a childhood
                  film rewatched and nature inspire every design.
                </p>
              </div>

              <div className="timeline-step">
                <div className="timeline-dot">✏️</div>
                <h3>Sketching</h3>
                <p>
                  Every design begins as a hand-drawn sketch in
                  Yuki's notebook.
                </p>
              </div>

              <div className="timeline-step">
                <div className="timeline-dot">🧶</div>
                <h3>Sampling</h3>
                <p>
                  The first prototype is carefully made, tested,
                  improved and remade until perfect.
                </p>
              </div>

              <div className="timeline-step">
                <div className="timeline-dot">🌸</div>
                <h3>Final Making</h3>
                <p>
                  Every item is handcrafted individually, making
                  each piece unique.
                </p>
              </div>

              <div className="timeline-step">
                <div className="timeline-dot">📦</div>
                <h3>Packing with Love</h3>
                <p>
                  Every order is wrapped carefully with tissue,
                  tags and a handwritten note.
                </p>
              </div>

            </div>

          </div>

          {/* Image */}

          <div className="about-image">
            <img
              src="images/about2.jpg"
              alt="Yuki sketching"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default ProcessSection;