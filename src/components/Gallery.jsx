import margheritaImg from "../assets/margherita.jpg";
import diavolaImg from "../assets/diavola.jpg";
import prosciuttoImg from "../assets/prosciutto.jpg";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <p className="small-title">Gallery</p>
      <h2>Inside Sapore Italiano</h2>
      <div className="gallery-grid">
        <img src={margheritaImg} alt="Pizza" />
        <img src={diavolaImg} alt="Pizza" />
        <img src={prosciuttoImg} alt="Pizza" />
      </div>
    </section>
  );
}

export default Gallery;
