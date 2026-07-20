function MapSection() {
  return (
    <section className="section">

      <div className="section-inner">

        <header className="section-header">

          <p className="label-accent">
            場所 · Location
          </p>

          <h2 className="section-title">
            Find the Forest
          </h2>

          <p>
            Our studio is in the Higashiyama district of Kyoto.
          </p>

        </header>

        <div
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            aspectRatio: "21/9",
            border: "1px solid #ddd",
          }}
        >
          <img
            src="/images/map.jpg"
            alt="Map"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

      </div>

    </section>
  );
}

export default MapSection;