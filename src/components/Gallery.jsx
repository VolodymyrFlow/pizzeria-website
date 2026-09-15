import margheritaImg from "../assets/margherita.jpg";
import diavolaImg from "../assets/diavola.jpg";
import prosciuttoImg from "../assets/prosciutto.jpg";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <p className="small-title">Gallery</p>
      <h2>Inside Sapore Italiano</h2>
      <div className="gallery-grid">
        <img src={margheritaImg} alt="Margherita pizza" />
        <img src={diavolaImg} alt="Diavola pizza" />
        <img src={prosciuttoImg} alt="Prosciutto pizza" />
      </div>
    </section>
  );
}

export default Gallery;
