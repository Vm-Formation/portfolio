const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

const projects = [
  {
    index: "01",
    type: "Site web pédagogique",
    title: "VM Formation",
    summary: "Conception et développement d’un site consacré à l’apprentissage de l’informatique, avec des parcours structurés, des cours et des activités interactives.",
    role: "Conception · Organisation des contenus · Développement",
    image: asset("/images/missions-professionnelles.png"),
    alt: "Aperçu du site pédagogique VM Formation",
    href: asset("/projets/site-vm-formation/"),
    tags: ["HTML / CSS", "JavaScript", "UX pédagogique"],
  },
  {
    index: "02",
    type: "Supports pédagogiques PDF",
    title: "Cours sur les fondamentaux des réseaux",
    summary: "Création d’une collection de cours, TD et TP au format PDF sur les fondamentaux des réseaux, avec exercices progressifs et espaces de réponse.",
    role: "Conception pédagogique · Rédaction · Mise en page · Exercices",
    image: asset("/images/pdf-cover-bases-reseaux.png"),
    alt: "Couverture du cours PDF Bases des réseaux informatiques",
    href: asset("/projets/parcours-reseaux/"),
    tags: ["Cours PDF", "TD / TP", "Réseaux"],
  },
];

export default function Home() {
  return (
    <main className="portfolio-home">
      <header className="portfolio-header">
        <a className="brand" href="#top" aria-label="Retour en haut">
          <img src={asset("/vm-logo.svg")} alt="" width="38" height="38" />
          <span><strong>VM</strong> Formation</span>
        </a>
        <nav aria-label="Navigation principale"><a href="#projets">Projets</a><a href="#profil">Profil</a><a href="https://vm-formation.fr" target="_blank" rel="noreferrer">Site VM Formation ↗</a></nav>
      </header>

      <section className="portfolio-hero" id="top">
        <p className="eyebrow"><span /> Portfolio</p>
        <h1>Projets réalisés par <em>VM Formation.</em></h1>
        <p>Une sélection de créations numériques et pédagogiques autour de l’apprentissage informatique et des réseaux.</p>
        <a className="button button-primary" href="#projets">Voir les projets <span>↓</span></a>
      </section>

      <section className="portfolio-projects" id="projets">
        <div className="portfolio-section-title"><p className="eyebrow"><span /> Projets sélectionnés</p><h2>Deux réalisations principales.</h2></div>
        <div className="portfolio-project-list">
          {projects.map((project) => (
            <article className="portfolio-project" key={project.index}>
              <a className="portfolio-project-image" href={project.href}><img src={project.image} alt={project.alt} /></a>
              <div className="portfolio-project-copy">
                <p className="portfolio-project-number">Projet {project.index} · {project.type}</p>
                <h3>{project.title}</h3>
                <p className="portfolio-project-summary">{project.summary}</p>
                <p className="portfolio-project-role"><strong>Travail réalisé</strong>{project.role}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a className="portfolio-project-link" href={project.href}>Voir le détail du projet <span>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="portfolio-profile" id="profil">
        <div><p className="eyebrow"><span /> Profil</p><h2>Conception pédagogique et infrastructure informatique.</h2></div>
        <div className="portfolio-profile-copy">
          <p>VM Formation développe des supports destinés à rendre les notions techniques plus accessibles aux débutants.</p>
          <ul><li><strong>Bac+3</strong> Administration d’infrastructures sécurisées</li><li><strong>Bac+2</strong> Technicien supérieur systèmes et réseaux</li><li><strong>Domaines</strong> Réseaux, systèmes, virtualisation et cybersécurité</li></ul>
        </div>
      </section>

      <footer className="portfolio-footer">
        <a className="brand footer-brand" href="#top"><img src={asset("/vm-logo.svg")} alt="" width="34" height="34" /><span><strong>VM</strong> Formation</span></a>
        <p>Portfolio de créations pédagogiques et numériques</p>
        <a href="https://vm-formation.fr" target="_blank" rel="noreferrer">vm-formation.fr ↗</a>
      </footer>
    </main>
  );
}
