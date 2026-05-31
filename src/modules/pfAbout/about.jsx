import "./about.css";

const stack = [
  "React",
  "Next.js",
  "Python",
  "Django",
  "JavaScript",
  "PHP",
  "SQL",
  "C++",
  "Docker",
  "Git",
  "WordPress",
];

function About() {
  return (
    <section id="about" className="about-section section">
      <h2 className="section-title">$ About</h2>

      {/* Strip profil */}
      <div className="about-profile">
        <div className="about-profile-main">
          <p className="about-profile-role">
            Ingénieur Développement Web Full Stack &amp; Data / IA
          </p>
          <p className="about-profile-desc">
            <strong>EFREI</strong> · En alternance chez{" "}
            <strong>PORT Designs</strong>. Je construis des solutions web
            modernes, performantes et orientées données.
          </p>
        </div>
        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-value">2+</span>
            <span className="about-stat-label">ans de projets</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-value">11+</span>
            <span className="about-stat-label">technos</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-value">EFREI</span>
            <span className="about-stat-label">Grande École</span>
          </div>
        </div>
      </div>

      {/* Stack */}
      <div className="card card--soft about-block">
        <h3 className="about-block-title">
          <span className="about-block-prefix">// </span>Stack
        </h3>
        <div className="about-stack">
          {stack.map((s) => (
            <span key={s} className="badge">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Objectifs + Valeurs */}
      <div className="about-bottom">
        <div className="card card--soft about-block">
          <h3 className="about-block-title">
            <span className="about-block-prefix">// </span>Objectifs
          </h3>
          <ul className="about-list">
            <li>Travailler sur des projets de grande envergure</li>
            <li>Approfondir les technologies émergentes</li>
            <li>Contribuer à des solutions innovantes et impactantes</li>
          </ul>
        </div>
        <div className="card card--soft about-block">
          <h3 className="about-block-title">
            <span className="about-block-prefix">// </span>Valeurs
          </h3>
          <p className="about-values-text">
            Déterminé, rigoureux et passionné. Mes pratiques sportives — judo,
            tennis, musculation — m'ont forgé la <strong>persévérance</strong>{" "}
            et le goût de l'
            <strong>excellence</strong>.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="about-cta">
        <p>
          Intéressé pour discuter ?{" "}
          <a href="#contact" className="cta-link">
            Contactez-moi →
          </a>
        </p>
      </div>
    </section>
  );
}

export default About;
