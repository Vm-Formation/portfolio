const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

const platformGallery = [
  { src: asset("/images/missions-professionnelles.png"), alt: "Missions professionnelles organisées du niveau guidé au niveau autonome" },
  { src: asset("/images/parcours-modules.png"), alt: "Catalogue des modules du parcours consacré aux fondamentaux des réseaux" },
  { src: asset("/images/mini-labs.png"), alt: "Mini-labs interactifs de vérification réseau" },
  { src: asset("/images/quiz-interactif.png"), alt: "Quiz interactif avec score et progression" },
];

const networkGallery = [
  { src: asset("/images/atelier-nova.png"), alt: "Schéma du réseau de la PME fictive Atelier Nova" },
  { src: asset("/images/tp-diagnostic.png"), alt: "Informations pratiques d’un TP de diagnostic réseau" },
  { src: asset("/images/activite-binaire.png"), alt: "Activité pédagogique de conversion du binaire vers le décimal" },
];

const expertise = [
  { number: "01", title: "Pédagogie pour débutants", text: "Installer les bons repères, expliquer avec des mots simples et faire pratiquer sans perdre la rigueur technique.", tags: ["Progression", "Évaluation", "Accompagnement"] },
  { number: "02", title: "Réseaux & infrastructures", text: "Relier les fondamentaux aux gestes professionnels : observer, configurer, tester et justifier un diagnostic.", tags: ["IPv4 / CIDR", "OSI", "Routage"] },
  { number: "03", title: "Animation de formations", text: "Conduire une séance en présentiel ou à distance, adapter le rythme et rendre les acquis visibles.", tags: ["Présentiel", "Distance", "Mise en pratique"] },
];

const credentials = [
  { value: "Bac+3", label: "Administration d’infrastructures sécurisées" },
  { value: "Bac+2", label: "Technicien supérieur systèmes et réseaux" },
  { value: "CyberOps", label: "Formation aux fondamentaux de la cybersécurité" },
  { value: "2 formats", label: "À distance et sur site dans les Hauts-de-France" },
];

const modules = ["Bases des réseaux", "Modèle OSI", "Couche physique", "Binaire & hexadécimal", "Couche liaison", "Adressage IPv4", "Couche réseau", "Couche transport", "Synthèse : vie d’un paquet"];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Retour en haut de la page">
          <img src={asset("/vm-logo.svg")} alt="" width="38" height="38" />
          <span><strong>VM</strong> Formation</span>
        </a>
        <nav aria-label="Navigation principale">
          <a href="#apropos">À propos</a>
          <a href="#realisations">Réalisations</a>
          <a href="#parcours">Parcours</a>
          <a href="#methode">Méthode</a>
        </nav>
        <a className="header-cta" href="https://vm-formation.fr" target="_blank" rel="noreferrer">Visiter le site <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Formateur informatique · Hauts-de-France</p>
          <h1>Les réseaux, expliqués pour être <em>vraiment compris.</em></h1>
          <p className="hero-intro">VM Formation accompagne les débutants dans l’apprentissage des réseaux et des fondamentaux de l’informatique, à distance comme sur site.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#realisations">Voir les réalisations <span>↓</span></a>
            <a className="button button-secondary" href="https://vm-formation.fr" target="_blank" rel="noreferrer">Découvrir vm-formation.fr <span>↗</span></a>
          </div>
          <ul className="hero-topics" aria-label="Domaines d’intervention">
            <li>Initiation aux réseaux</li><li>Accompagnement de débutants</li><li>Animation de formations</li>
          </ul>
        </div>
        <div className="hero-visual" aria-label="Aperçu du projet VM Formation">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="visual-note note-top"><span>09</span> modules progressifs</div>
          <div className="browser-card">
            <div className="browser-bar"><i /><i /><i /><span>vm-formation.fr</span></div>
            <img src={asset("/images/missions-professionnelles.png")} alt="Aperçu des missions professionnelles VM Formation" />
          </div>
          <div className="visual-note note-bottom"><b>✓</b><span><strong>Apprendre en faisant</strong>Quiz, labs et missions</span></div>
        </div>
      </section>

      <section className="signal-strip" aria-label="Principes pédagogiques">
        <p>Une pédagogie pensée pour l’action</p>
        <div><span>Comprendre</span><i>→</i><span>Pratiquer</span><i>→</i><span>Expliquer</span><i>→</i><span>Diagnostiquer</span></div>
      </section>

      <section className="section about" id="apropos">
        <div className="about-logo"><img src={asset("/vm-formation-logo.png")} alt="VM Formation — Formation et accompagnement numérique" /></div>
        <div className="about-copy">
          <p className="eyebrow"><span /> À propos</p>
          <h2>Former avec clarté, patience et exigence.</h2>
          <p>VM Formation conçoit et anime des formations informatiques accessibles aux débutants. L’objectif : transformer une notion abstraite en compétence que l’apprenant sait mobiliser et expliquer.</p>
          <p>Les contenus s’appuient sur un parcours en systèmes, réseaux, administration d’infrastructures sécurisées et cybersécurité, enrichi par des expériences de terrain.</p>
          <div className="availability"><span aria-hidden="true" /> Disponible à distance et sur site dans les Hauts-de-France</div>
        </div>
      </section>

      <section className="credentials" aria-label="Repères de parcours">
        {credentials.map((item) => <article key={item.value + item.label}><strong>{item.value}</strong><p>{item.label}</p></article>)}
      </section>

      <section className="section projects" id="realisations">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Réalisations sélectionnées</p><h2>Des supports pensés pour faire progresser.</h2></div>
          <p>Chaque réalisation associe un objectif pédagogique, une progression stable et des activités qui rendent les acquis observables.</p>
        </div>

        <article className="project project-featured">
          <div className="project-copy">
            <p className="project-index">Projet 01 <span>·</span> Plateforme e-learning</p>
            <h3>VM Formation</h3>
            <p className="project-lead">Une plateforme pédagogique qui fait alterner cours, vérifications rapides, quiz et missions inspirées de situations professionnelles.</p>
            <dl className="case-details"><div><dt>Objectif</dt><dd>Donner aux débutants un chemin lisible vers l’autonomie.</dd></div><div><dt>Réalisation</dt><dd>Parcours modulaire, mini-labs, évaluations et corrections.</dd></div><div><dt>Valeur</dt><dd>Des acquis visibles à chaque étape.</dd></div></dl>
            <div className="tag-row"><span>Conception pédagogique</span><span>Développement web</span><span>Expérience apprenant</span></div>
            <a className="project-link" href="https://vm-formation.fr" target="_blank" rel="noreferrer">Voir le site VM Formation <span>↗</span></a>
          </div>
          <a className="project-main-image" href={platformGallery[0].src} target="_blank" rel="noreferrer" aria-label="Ouvrir l’image des missions professionnelles"><img src={platformGallery[0].src} alt={platformGallery[0].alt} /><span>Voir en grand ↗</span></a>
          <div className="gallery gallery-four">{platformGallery.slice(1).map((image) => <a href={image.src} target="_blank" rel="noreferrer" key={image.src}><img src={image.src} alt={image.alt} /></a>)}</div>
        </article>

        <article className="project project-network">
          <div className="project-copy">
            <p className="project-index">Projet 02 <span>·</span> Parcours spécialisé</p>
            <h3>Fondamentaux des réseaux</h3>
            <p className="project-lead">Un parcours complet qui relie le modèle OSI, l’adressage IPv4, la commutation, le routage et le diagnostic.</p>
            <dl className="case-details"><div><dt>Fil rouge</dt><dd>Le réseau d’une PME fictive évolue avec le cours.</dd></div><div><dt>Pratique</dt><dd>Calculs, schémas, observations et diagnostics justifiés.</dd></div><div><dt>Progression</dt><dd>Du guidé au semi-guidé, puis à l’autonomie.</dd></div></dl>
            <div className="tag-row"><span>IPv4 / CIDR</span><span>Modèle OSI</span><span>TP pratiques</span></div>
          </div>
          <a className="project-main-image" href={networkGallery[0].src} target="_blank" rel="noreferrer" aria-label="Ouvrir le schéma Atelier Nova"><img src={networkGallery[0].src} alt={networkGallery[0].alt} /><span>Voir en grand ↗</span></a>
          <div className="gallery gallery-two">{networkGallery.slice(1).map((image) => <a href={image.src} target="_blank" rel="noreferrer" key={image.src}><img src={image.src} alt={image.alt} /></a>)}</div>
        </article>
      </section>

      <section className="section pathway" id="parcours">
        <div className="pathway-copy">
          <p className="eyebrow"><span /> Parcours réseaux</p>
          <h2>Neuf modules, un même fil conducteur.</h2>
          <p>Le programme part des bases, suit la vie d’un paquet et construit progressivement les réflexes nécessaires pour comprendre puis diagnostiquer un réseau.</p>
          <a className="text-link" href="https://vm-formation.fr" target="_blank" rel="noreferrer">Explorer le site de formation <span>↗</span></a>
        </div>
        <ol className="module-list">{modules.map((module, index) => <li key={module}><span>{String(index + 1).padStart(2, "0")}</span><strong>{module}</strong></li>)}</ol>
      </section>

      <section className="section expertise" id="expertise">
        <div className="section-heading light-heading"><div><p className="eyebrow"><span /> Expertise</p><h2>Le fond technique au service de l’apprentissage.</h2></div><p>Une même exigence guide chaque séance : aider l’apprenant à franchir une étape réelle et à comprendre ce qu’il fait.</p></div>
        <div className="skills-grid">{expertise.map((skill) => <article key={skill.number}><span className="skill-number">{skill.number}</span><h3>{skill.title}</h3><p>{skill.text}</p><ul>{skill.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></article>)}</div>
        <div className="technical-base"><p>Socle technique mobilisable</p><div><span>LAN / WAN / VLAN</span><span>Windows & Linux</span><span>Wireshark</span><span>Virtualisation</span><span>VPN & pare-feu</span><span>PowerShell</span><span>Documentation</span></div></div>
      </section>

      <section className="section method" id="methode">
        <div className="method-intro"><p className="eyebrow"><span /> Méthode de travail</p><h2>Une progression qui retire les aides au bon moment.</h2><p>Le cours donne d’abord des repères détaillés, puis laisse progressivement davantage de place au raisonnement et à l’autonomie.</p></div>
        <ol className="method-steps"><li><span>01</span><div><h3>Cadrer</h3><p>Public, niveau initial et objectif observable.</p></div></li><li><span>02</span><div><h3>Structurer</h3><p>Notions ordonnées, repères et vocabulaire stable.</p></div></li><li><span>03</span><div><h3>Faire pratiquer</h3><p>Calculs, observations, configurations et preuves.</p></div></li><li><span>04</span><div><h3>Valider</h3><p>Correction utile et transfert vers une situation réelle.</p></div></li></ol>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow"><span /> VM Formation</p>
        <h2>Besoin d’une formation informatique accessible et concrète&nbsp;?</h2>
        <p>Découvrons ensemble le public, le niveau actuel et l’objectif à atteindre.</p>
        <a className="button button-light" href="https://vm-formation.fr" target="_blank" rel="noreferrer">Visiter vm-formation.fr <span>↗</span></a>
        <small>Aucune adresse personnelle n’est publiée sur ce portfolio.</small>
      </section>

      <footer><a className="brand footer-brand" href="#top"><img src={asset("/vm-logo.svg")} alt="" width="34" height="34" /><span><strong>VM</strong> Formation</span></a><p>Formation informatique · Réseaux · Accompagnement numérique</p><div><a href="https://vm-formation.fr" target="_blank" rel="noreferrer">Site web ↗</a><a href="#top">Retour en haut ↑</a></div></footer>
    </main>
  );
}
