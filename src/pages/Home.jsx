import { Link } from "react-router-dom";
export default function Home() {
    return (
      <section className="home-page">
        <div className="hero">
          <h1>Boostez votre présence en ligne </h1>
          <p>
            Nous créons des sites modernes et performants qui propulsent votre entreprise.
          </p>
          <Link to="/devis" className="btn-devis">
            Demander un devis
          </Link>
        </div>
      </section>
    );
  }
  