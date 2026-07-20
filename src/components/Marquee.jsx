function Marquee() {
  return (
    <div className="marquee-wrap" aria-hidden="true">
    
  {/* 
       SCROLLING MARQUEE
   */}
  
    <div className="marquee-track">
      {/* Repeated for seamless loop */}
      <span>Crochet Companions</span>
      <span className="accent">✦</span>
      <span>Art Prints</span>
      <span className="accent">✦</span>
      <span>Ceramic Treasures</span>
      <span className="accent">✦</span>
      <span>Handmade With Love</span>
      <span className="accent">✦</span>
      <span>Forest Finds</span>
      <span className="accent">✦</span>
      <span>Cozy Japanese Goods</span>
      <span className="accent">✦</span>
      <span>Studio Ghibli Inspired</span>
      <span className="accent">✦</span>
      <span>Soft &amp; Magical</span>
      <span className="accent">✦</span>
      {/* Duplicate for seamless loop */}
      <span>Crochet Companions</span>
      <span className="accent">✦</span>
      <span>Art Prints</span>
      <span className="accent">✦</span>
      <span>Ceramic Treasures</span>
      <span className="accent">✦</span>
      <span>Handmade With Love</span>
      <span className="accent">✦</span>
      <span>Forest Finds</span>
      <span className="accent">✦</span>
      <span>Cozy Japanese Goods</span>
      <span className="accent">✦</span>
      <span>Studio Ghibli Inspired</span>
      <span className="accent">✦</span>
      <span>Soft &amp; Magical</span>
      <span className="accent">✦</span>
    </div>
  </div>
  );
}

export default Marquee;