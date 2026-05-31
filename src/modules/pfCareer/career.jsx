import "./career.css";
import Experience from "./experience.jsx";

function Career() {
  return (
    <section id="career" className="career-section section">
      <div className="career-header">
        <h2 className="section-title">$ Career</h2>
      </div>
      <div className="career-content">
        <Experience
          type="Alternance"
          title="Ingénieur Développement Web"
          company="Thales Services Numériques"
          period="2026 - 2028"
          description="Développement de projets de tous types sur des sujets variés en méthodologie Agile Scrum."
        />
        <Experience
          type="Alternance"
          title="Développeur Web Full Stack"
          company="PORT Designs"
          period="2025 - 2026"
          description="Refonte complète site e-commerce, développement de nouvelles fonctionnalités, optimisation des performances et amélioration de l'expérience utilisateur."
        />
        <Experience
          type="CDI Partiel"
          title="Serveur"
          company="Indiana Café"
          period="2025"
          description="Service en salle, gestion des commandes, relation client et travail en équipe dans un environnement dynamique."
        />
        <Experience
          type="Stage"
          title="Marketing Digital"
          company="QPark France Services"
          period="2024"
          description="Marketing/Digital, SEO/SEM, Gestion site web, Création de contenu, Suivi de projets, Analyse, Reporting et KPI, Communication, Support utilisateur."
        />
        <Experience
          type="CDI Partiel"
          title="Employé Polyvalent"
          company="McDonald's"
          period="2024"
          description="Préparation de la nourriture, service client, gestion des commandes, travail en équipe et respect des normes d'hygiène et de sécurité alimentaire."
        />
        <Experience
          type="CDD 2 Mois"
          title="Employé Polyvalent"
          company="Streetaly"
          period="2023"
          description="Préparation et cuisson des pâtes fraîches artisanales, Apprentissage Barista, Préparation des commandes et de la nourriture, service client."
        />
        <Experience
          type="Ponctuel"
          title="Préparateur de commandes"
          company="Marché de Versailles"
          period="2022"
          description="Préparation de commandes, gestion des stocks, travail en équipe et respect des délais pour assurer la satisfaction des clients."
        />
      </div>
    </section>
  );
}

export default Career;
