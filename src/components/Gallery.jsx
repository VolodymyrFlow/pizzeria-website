import interiorHallImg from "../assets/interior-hall.jpg";
import interiorTablesImg from "../assets/interior-tables.jpg";
import interiorVaultImg from "../assets/interior-vault.jpg";

function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <p className="small-title">Gallery</p>
      <h2>Inside Sapore Italiano</h2>
      <div className="gallery-grid">
        <img src={interiorHallImg} alt="Restaurant dining hall with wooden tables" />
        <img src={interiorTablesImg} alt="Cozy pizzeria interior with set tables" />
        <img src={interiorVaultImg} alt="Italian restaurant vault room with tables" />
      </div>
    </section>
  );
}

export default Gallery;
