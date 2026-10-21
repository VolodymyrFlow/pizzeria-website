import heroPizza from "../assets/margherita.webp";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="small-title">Italian pizza in Prague</p>

        <h1>
          Wood-fired pizza. <span>Real Italian taste.</span>
        </h1>

        <p className="hero-text">
          Fresh dough, generous toppings, and a warm welcome. Discover our menu
          and find your next favourite pizza.
        </p>

        <div className="hero-actions">
          <a href="#menu" className="cta-button">
            View menu
          </a>

          <a href="#booking" className="hero-secondary">
            Book a table
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <img
          src={heroPizza}
          alt="Margherita pizza with mozzarella and fresh basil"
        />
      </div>
    </section>
  );
}

export default Hero;
