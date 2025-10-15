export default function Devis() {
    return (
      <section className="page devis-page">
        <h2>Demandez un devis personnalisé</h2>
        <form>
          <input type="text" placeholder="Votre nom" required />
          <input type="email" placeholder="Votre email" required />
          <textarea placeholder="Décrivez votre projet..." required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>
    );
  }
  