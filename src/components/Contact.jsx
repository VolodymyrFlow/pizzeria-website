function Contact({ isOpen }) {
  return (
    <section className="contact" id="contact">
      <p className="small-title">Contact</p>
      <h2>Visit us today</h2>

      <div className="contact-grid">
        <div>
          <h3>Address</h3>
          <p>Napoli Street 24, Prague</p>
        </div>

        <div>
          <h3>Opening Hours</h3>
          <p>Monday - Sunday</p>
          <p>11:00 - 23:00</p>

          <p className={isOpen ? "open-status" : "closed-status"}>
            {isOpen ? "Open now" : "Closed now"}
          </p>
        </div>

        <div>
          <h3>Phone</h3>
          <p>
            <a href="tel:+420777123456">+420 777 123 456</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
