type Fact = { label: string; value: string };
type Block = { title: string; text: string; items?: string[] };
type GalleryImage = { src: string; alt: string; caption: string };

type CaseStudyProps = {
  index: string;
  kicker: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  tags: string[];
  facts: Fact[];
  asideTitle: string;
  asideText: string;
  blocks: Block[];
  gallery: GalleryImage[];
  nextHref: string;
  nextLabel: string;
};

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => `${publicBasePath}${path}`;

export default function CaseStudyPage(props: CaseStudyProps) {
  return (
    <main className={`case-page case-page-${props.index}`}>
      <header className="case-header">
        <a className="brand" href={asset("/")} aria-label="Retour au portfolio VM Formation">
          <img src={asset("/vm-logo.svg")} alt="" width="38" height="38" />
          <span><strong>VM</strong> Formation</span>
        </a>
        <a href={asset("/#etudes-de-cas")}>← Retour aux études de cas</a>
      </header>

      <section className="case-hero">
        <div className="case-hero-copy">
          <p className="eyebrow"><span /> Étude de cas {props.index} · {props.kicker}</p>
          <h1>{props.title}</h1>
          <p>{props.intro}</p>
          <div className="case-tags">{props.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </div>
        <div className="case-hero-visual"><img src={asset(props.heroImage)} alt={props.heroAlt} /></div>
      </section>

      <section className="case-facts" aria-label="Repères du projet">
        {props.facts.map((fact) => <article key={fact.label}><span>{fact.label}</span><strong>{fact.value}</strong></article>)}
      </section>

      <section className="case-content">
        <div className="case-content-grid">
          <aside className="case-content-aside">
            <p className="eyebrow"><span /> Dans le détail</p>
            <h2>{props.asideTitle}</h2>
            <p>{props.asideText}</p>
          </aside>
          <div>
            {props.blocks.map((block, index) => (
              <article className="case-block" key={block.title}>
                <span className="case-block-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
                {block.items && <ul>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>}
              </article>
            ))}
          </div>
        </div>

        <div className="case-gallery">
          {props.gallery.map((image) => <figure key={image.src}><img src={asset(image.src)} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>)}
        </div>
      </section>

      <section className="case-next">
        <p className="eyebrow"><span /> Continuer</p>
        <h2>Voir l’autre projet présenté dans le portfolio.</h2>
        <div className="case-next-actions">
          <a className="button button-primary" href={asset(props.nextHref)}>{props.nextLabel} <span>→</span></a>
          <a className="button button-secondary" href="https://vm-formation.fr" target="_blank" rel="noreferrer">Visiter vm-formation.fr <span>↗</span></a>
        </div>
      </section>
    </main>
  );
}
