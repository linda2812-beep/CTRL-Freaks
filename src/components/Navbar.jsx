import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">CTRL Freaks</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/services">Services</Link>
        <Link to="/devis">Devis</Link>
      </nav>
    </header>
  );
}
