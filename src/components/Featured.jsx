import diavolaImg from "../assets/diavola.jpg";

function Featured() {
  return (
    <section className="featured" id="featured">
      <div className="featured-visual">
        <img
          src={diavolaImg}
          alt="Diavola pizza with spicy salami and chili"
        />
      </div>

      <div className="featured-content">
        <p className="small-title">Chef's Choice</p>
        <h2>Pizza of the Week</h2>
        <p>
          Try our famous Diavola with spicy salami, mozzarella and chili.
        </p>
        <p className="featured-price">€11.50</p>
        <a href="#menu" className="cta-button">
          See the menu
        </a>
      </div>
    </section>
  );
}

export default Featured;
