export const metadata = {
  title: "CV — Romain POISSON",
  description: "CV de Romain POISSON, développeur Full Stack & Data / IA",
};

export default function CvPage() {
  return (
    <object
      data="/romain-poisson-cv.pdf"
      type="application/pdf"
      style={{
        display: "block",
        width: "100%",
        height: "100dvh",
        border: "none",
      }}
    >
      <iframe
        src="/romain-poisson-cv.pdf"
        title="CV — Romain POISSON"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
      <p style={{ padding: "1rem", textAlign: "center" }}>
        Votre navigateur ne peut pas afficher le PDF.{" "}
        <a href="/romain-poisson-cv.pdf">Télécharger le CV</a>.
      </p>
    </object>
  );
}
