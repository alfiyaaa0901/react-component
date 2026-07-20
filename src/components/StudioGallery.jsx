function StudioGallery() {
  return (
    <section className="section" aria-label="Studio images">
      <div className="section-inner">

        <header className="section-header">
          <p className="label-accent">
            アトリエ · The Studio
          </p>

          <h2 className="section-title">
            Inside the Forest Workshop
          </h2>
        </header>

        <div className="gallery-grid">

          <div className="gallery-item tall" data-label="Yarn Wall">
            <img
              src="images/studio1.jpg"
              alt="Studio yarn wall"
              loading="lazy"
            />
          </div>

          <div className="gallery-item" data-label="The Worktable">
            <img
              src="images/studio2.jpg"
              alt="Craft worktable"
              loading="lazy"
            />
          </div>

          <div className="gallery-item" data-label="Print Drying">
            <img
              src="images/studio3.jpg"
              alt="Art prints drying"
              loading="lazy"
            />
          </div>

          <div className="gallery-item wide" data-label="Packing Day">
            <img
              src="images/studio4.jpg"
              alt="Packing day"
              loading="lazy"
            />
          </div>

          <div className="gallery-item" data-label="Ceramic Studio">
            <img
              src="images/studio5.jpg"
              alt="Ceramic studio"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default StudioGallery;