import type { Metadata } from "next";
import CaseStudyPage from "../CaseStudyPage";

export const metadata: Metadata = {
  title: "Conception du site VM Formation | Portfolio",
  description: "Présentation du projet de conception et de développement du site pédagogique VM Formation.",
};

export default function SiteVmFormation() {
  return <CaseStudyPage
    index="01"
    kicker="Site web pédagogique"
    title="Concevoir le site VM Formation"
    intro="Création d’un site destiné à organiser et présenter des contenus de formation informatique dans une interface claire et cohérente."
    heroImage="/images/missions-professionnelles.png"
    heroAlt="Aperçu d’une page du site pédagogique VM Formation"
    tags={["Conception web", "Architecture de contenu", "Interface", "Accessibilité"]}
    facts={[{label:"Type",value:"Site pédagogique"},{label:"Rôle",value:"Conception et développement"},{label:"Public",value:"Débutants en informatique"},{label:"Contenus",value:"Cours, quiz, ateliers et ressources"}]}
    asideTitle="Un même environnement pour consulter, pratiquer et progresser."
    asideText="Le site rassemble les contenus pédagogiques dans une structure commune afin que l’utilisateur retrouve les mêmes repères d’un module à l’autre."
    blocks={[
      {title:"Le point de départ",text:"Les supports existaient sous plusieurs formes. Le projet consistait à créer un environnement web capable de les organiser en parcours lisibles et accessibles depuis un navigateur."},
      {title:"L’architecture du site",text:"Les pages ont été réparties selon leur rôle.",items:["Accueil et catalogue des formations","Pages de cours structurées par objectifs","Quiz et activités intégrés","Ateliers et missions pratiques","Pages d’information et ressources complémentaires"]},
      {title:"Le travail d’interface",text:"Une identité visuelle commune, une navigation stable et des composants réutilisables permettent de conserver les mêmes repères entre les cours, les exercices et les évaluations."},
      {title:"Le développement",text:"Le projet repose sur des pages web responsives en HTML, CSS et JavaScript. Les interactions sont intégrées directement aux supports : quiz, réponses guidées, simulateurs et mini-labs."},
      {title:"Le résultat",text:"VM Formation constitue aujourd’hui la base commune des différents parcours. Le site peut évoluer progressivement en ajoutant de nouveaux modules sans modifier l’organisation générale."},
    ]}
    gallery={[
      {src:"/images/parcours-modules.png",alt:"Catalogue des modules du site VM Formation",caption:"Catalogue permettant de choisir un module du parcours."},
      {src:"/images/quiz-interactif.png",alt:"Quiz intégré au site VM Formation",caption:"Évaluation interactive avec score et progression."},
      {src:"/images/mini-labs.png",alt:"Mini-labs intégrés au site VM Formation",caption:"Activités courtes accessibles directement dans le navigateur."},
      {src:"/images/missions-professionnelles.png",alt:"Missions professionnelles du site VM Formation",caption:"Missions organisées selon plusieurs niveaux d’autonomie."},
    ]}
    nextHref="/projets/parcours-reseaux/"
    nextLabel="Voir le parcours réseaux"
  />;
}
