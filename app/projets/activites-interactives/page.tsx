import type { Metadata } from "next";
import CaseStudyPage from "../CaseStudyPage";

export const metadata: Metadata = {
  title: "Quiz et mini-labs réseaux | VM Formation",
  description: "Étude de cas : conception de quiz, mini-labs et contrôles courts pour rendre l’apprentissage des réseaux interactif.",
};

export default function ActivitesInteractives() {
  return <CaseStudyPage
    index="03"
    kicker="Évaluation interactive"
    title="Rendre l’entraînement visible et motivant"
    intro="Des exercices courts permettent de vérifier un automatisme, comprendre une erreur et se préparer aux missions plus longues."
    heroImage="/images/case-interactive.png"
    heroAlt="Ateliers interactifs de conversion binaire et hexadécimale"
    tags={["Quiz", "Mini-labs", "Correction", "Progression"]}
    facts={[{label:"Banques",value:"7 quiz thématiques"},{label:"Volume",value:"93 questions disponibles"},{label:"Formats",value:"Quiz, contrôles et mini-labs"},{label:"Retour",value:"Correction immédiate"}]}
    asideTitle="Évaluer pour faire progresser, pas seulement pour noter."
    asideText="Chaque interaction répond à une intention précise : vérifier un repère, corriger une confusion ou préparer une tâche professionnelle."
    blocks={[
      {title:"Le besoin de départ",text:"Un cours long ne suffit pas à montrer si les notions deviennent des automatismes. Il fallait créer des points de contrôle courts, fréquents et directement reliés à la progression."},
      {title:"Trois niveaux d’activité",text:"Les interactions changent de format selon l’objectif.",items:["Contrôles courts pour rappeler un repère essentiel","Mini-labs pour décider à partir de données techniques","Quiz de fin de module pour valider plusieurs notions","Missions pour produire un diagnostic argumenté"]},
      {title:"Une correction utile",text:"La réponse affiche une explication qui nomme la règle mobilisée ou l’erreur de raisonnement. L’apprenant peut ainsi comprendre pourquoi sa réponse était correcte ou incorrecte."},
      {title:"Des acquis observables",text:"Le score et la progression donnent un retour immédiat, tandis que les missions demandent des preuves plus riches : calculs, commandes, observations et conclusion."},
    ]}
    gallery={[
      {src:"/images/quiz-interactif.png",alt:"Quiz interactif de validation des connaissances",caption:"Les questions sont tirées de banques thématiques et accompagnées d’une progression visible."},
      {src:"/images/activite-binaire.png",alt:"Exercice pédagogique sur les conversions binaires",caption:"Les supports alternent calcul, méthode de contrôle et espace de réponse."},
    ]}
    nextHref="/projets/parcours-reseaux/"
    nextLabel="Revenir au parcours réseaux"
  />;
}
