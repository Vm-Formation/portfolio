const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

const platformGallery = [
  {
    src: asset("/images/missions-professionnelles.png"),
    alt: "Missions professionnelles organisées du niveau guidé au niveau autonome",
  },
  {
    src: asset("/images/parcours-modules.png"),
    alt: "Parcours de huit modules consacrés aux fondamentaux des réseaux",
  },
  {
    src: asset("/images/mini-labs.png"),
    alt: "Mini-labs interactifs de vérification réseau",
  },
  {
    src: asset("/images/quiz-interactif.png"),
    alt: "Quiz interactif avec score et progression",
  },
];

const networkGallery = [
  {
    src: asset("/images/atelier-nova.png"),
    alt: "Schéma du réseau de la PME fictive Atelier Nova",
  },
  {
    src: asset("/images/tp-diagnostic.png"),
    alt: "Informations pratiques d’un TP de diagnostic réseau",
  },
  {
    src: asset("/images/activite-binaire.png"),
    alt: "Activité pédagogique de conversion du binaire vers le décimal",
  },
];

const skills = [
  {
    number: "01",
    title: "Conception pédagogique",
    text: "Transformer un objectif technique en progression claire, avec prérequis, activités, preuves et correction utile.",
    tags: ["Scénarisation", "Évaluation", "Supports"],
  },
  {
    number: "02",
    title: "Infrastructure & réseaux",
    text: "Expliquer les fondamentaux sans simplifier à l’excès, puis les relier à des situations de diagnostic réalistes.",
    tags: ["IPv4 / CIDR", "OSI", "Routage"],
  },
  {
    number: "03",
    title: "Expériences web",
    text: "Créer des interfaces sobres et accessibles qui rendent les parcours, quiz et mini-labs agréables à utiliser.",
    tags: ["HTML / CSS", "JavaScript", "Responsive"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour en haut de la page">
          <img src={asset("/vm-logo.svg")} alt="" width="38" height="38" />
          <span>
            <strong>VM</strong> Formation
          </span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#realisations">Réalisations</a>
          <a href="#expertise">Expertise</a>
          <a href="#methode">Méthode</a>
        </nav>
        <a className="header-cta" href="#contact">Échanger</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Portfolio · Formation informatique</p>
          <h1>Rendre la technique <em>claire, concrète</em> et mémorable.</h1>
          <p className="hero-intro">
            Je conçois des parcours de formation en informatique qui relient les notions,
            la pratique et les situations professionnelles — du premier repère au diagnostic autonome.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#realisations">Voir les réalisations <span>↘</span></a>
            <a className="text-link" href="#methode">Découvrir ma méthode <span>→</span></a>
          </div>
          <ul className="hero-topics" aria-label="Domaines d’expertise">
            <li>Réseaux</li><li>Microsoft 365</li><li>Culture IA</li><li>Conception web</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Aperçu du projet VM Formation">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="visual-note note-top"><span>08</span> modules progressifs</div>
          <div className="browser-card">
            <div className="browser-bar"><i /><i /><i /><span>vm-formation.fr</span></div>
            <img src={asset("/images/missions-professionnelles.png")} alt="Aperçu des missions professionnelles VM Formation" />
          </div>
          <div className="visual-note note-bottom"><b>✓</b><span><strong>Apprendre en faisant</strong>Quiz, labs et missions</span></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Principes du portfolio">
        <p>Une pédagogie pensée pour l’action</p>
        <div><span>Comprendre</span><i>→</i><span>Pratiquer</span><i>→</i><span>Expliquer</span><i>→</i><span>Diagnostiquer</span></div>
      </section>

      <section className="section projects" id="realisations">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Projets sélectionnés</p><h2>Des preuves, pas seulement des promesses.</h2></div>
          <p>Chaque réalisation associe un objectif pédagogique, une structure stable et des activités qui rendent les acquis observables.</p>
        </div>

        <article className="project project-featured">
          <div className="project-copy">
            <p className="project-index">Projet 01 <span>·</span> Plateforme e-learning</p>
            <h3>VM Formation</h3>
            <p className="project-lead">Une plateforme pédagogique conçue pour apprendre l’informatique à travers des parcours structurés et interactifs.</p>
            <ul className="project-points">
              <li><span>01</span> Parcours progressifs et repères constants</li>
              <li><span>02</span> Quiz aléatoires avec correction</li>
              <li><span>03</span> Mini-labs et missions professionnelles</li>
            </ul>
            <div className="tag-row"><span>Conception UX</span><span>Développement web</span><span>Pédagogie</span></div>
          </div>
          <a className="project-main-image" href={platformGallery[0].src} target="_blank" rel="noreferrer" aria-label="Ouvrir l’image des missions professionnelles">
            <img src={platformGallery[0].src} alt={platformGallery[0].alt} />
            <span>Voir en grand ↗</span>
          </a>
          <div className="gallery gallery-four">
            {platformGallery.slice(1).map((image) => (
              <a href={image.src} target="_blank" rel="noreferrer" key={image.src}>
                <img src={image.src} alt={image.alt} />
              </a>
            ))}
          </div>
        </article>

        <article className="project project-network">
          <div className="project-copy">
            <p className="project-index">Projet 02 <span>·</span> Parcours spécialisé</p>
            <h3>Fondamentaux des réseaux</h3>
            <p className="project-lead">Un parcours complet qui relie modèle OSI, adressage IPv4, CIDR, commutation, routage et diagnostic.</p>
            <blockquote>« Du premier calcul au diagnostic autonome. »</blockquote>
            <div className="tag-row"><span>IPv4 / CIDR</span><span>Modèle OSI</span><span>TP pratiques</span></div>
          </div>
          <a className="project-main-image" href={networkGallery[0].src} target="_blank" rel="noreferrer" aria-label="Ouvrir le schéma Atelier Nova">
            <img src={networkGallery[0].src} alt={networkGallery[0].alt} />
            <span>Voir en grand ↗</span>
          </a>
          <div className="gallery gallery-two">
            {networkGallery.slice(1).map((image) => (
              <a href={image.src} target="_blank" rel="noreferrer" key={image.src}>
                <img src={image.src} alt={image.alt} />
              </a>
            ))}
          </div>
        </article>
      </section>

      <section className="section expertise" id="expertise">
        <div className="section-heading light-heading">
          <div><p className="eyebrow"><span /> Expertise</p><h2>À l’intersection du fond, de la forme et de l’usage.</h2></div>
          <p>Une même exigence guide chaque support : aider l’apprenant à franchir une étape réelle.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.number}>
              <span className="skill-number">{skill.number}</span>
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <ul>{skill.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section method" id="methode">
        <div className="method-intro">
          <p className="eyebrow"><span /> Méthode de travail</p>
          <h2>Une progression qui retire les aides au bon moment.</h2>
          <p>Le cours donne d’abord des repères détaillés, puis laisse progressivement davantage de place au raisonnement et à l’autonomie.</p>
        </div>
        <ol className="method-steps">
          <li><span>01</span><div><h3>Cadrer</h3><p>Public, niveau initial et objectif observable.</p></div></li>
          <li><span>02</span><div><h3>Structurer</h3><p>Notions ordonnées, repères et vocabulaire stable.</p></div></li>
          <li><span>03</span><div><h3>Faire pratiquer</h3><p>Calculs, observations, configurations et preuves.</p></div></li>
          <li><span>04</span><div><h3>Valider</h3><p>Correction utile et transfert vers une situation réelle.</p></div></li>
        </ol>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow"><span /> Collaborons</p>
        <h2>Un besoin de formation en infrastructure informatique&nbsp;?</h2>
        <p>Partons du public, du niveau actuel et de l’objectif à atteindre.</p>
        <a className="button button-light" href="#realisations">Découvrir les projets <span>↑</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><img src={asset("/vm-logo.svg")} alt="" width="34" height="34" /><span><strong>VM</strong> Formation</span></a>
        <p>Portfolio · Formation informatique & conception pédagogique</p>
        <a href="#top">Retour en haut ↑</a>
      </footer>
    </main>
  );
}
