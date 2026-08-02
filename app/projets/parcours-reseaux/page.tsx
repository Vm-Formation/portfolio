import type { Metadata } from "next";
import CaseStudyPage from "../CaseStudyPage";

export const metadata: Metadata = {
  title: "Parcours Fondamentaux des réseaux | Portfolio",
  description: "Présentation détaillée du parcours Fondamentaux des réseaux créé pour VM Formation.",
};

export default function ParcoursReseaux() {
  return <CaseStudyPage
    index="02"
    kicker="Parcours de formation"
    title="Créer le parcours Fondamentaux des réseaux"
    intro="Conception d’un cours progressif destiné aux débutants, depuis les premiers repères jusqu’à l’analyse et au diagnostic d’un échange réseau."
    heroImage="/images/case-roadmap.png"
    heroAlt="Feuille de route des modules du parcours réseaux"
    tags={["Réseaux", "Scénarisation", "Exercices", "Évaluation"]}
    facts={[{label:"Structure",value:"8 modules + 1 synthèse"},{label:"Quiz",value:"7 banques et 93 questions"},{label:"Pratique",value:"Mini-labs et 3 missions"},{label:"Fil rouge",value:"La PME fictive Atelier Nova"}]}
    asideTitle="Un cours complet, organisé comme un seul projet."
    asideText="Les modules, le scénario Atelier Nova, les quiz et les TP ne sont pas des projets séparés : ils composent ensemble le parcours Fondamentaux des réseaux."
    blocks={[
      {title:"L’objectif",text:"Permettre à un débutant de comprendre comment les équipements, les supports, les adresses et les protocoles coopèrent pour transporter une information."},
      {title:"La progression",text:"Le parcours avance dans un ordre conçu pour éviter les notions isolées.",items:["Bases des réseaux et modèle OSI","Couche physique et représentation binaire","Couche liaison et adressage IP","Couche réseau et couche transport","Synthèse : suivre la vie d’un paquet"]},
      {title:"Le scénario Atelier Nova",text:"Une PME fictive de 32 personnes sert de contexte commun. Son réseau rassemble postes filaires, Wi-Fi interne et invité, switch central, pare-feu-routeur et serveur d’infrastructure."},
      {title:"Les activités intégrées",text:"Chaque type d’activité remplit une fonction dans le parcours.",items:["Contrôles courts pour vérifier les repères","Mini-labs pour appliquer une règle","Quiz pour valider un module","TP guidés puis missions semi-guidées ou autonomes"]},
      {title:"Le diagnostic réseau",text:"Les missions demandent de réunir des preuves avant de modifier une configuration. L’apprenant doit expliquer la cause, proposer une correction et valider le retour au fonctionnement."},
      {title:"Le résultat pédagogique",text:"Le parcours relie les calculs, les schémas, les configurations et les commandes à une démarche cohérente : comprendre, pratiquer, expliquer puis diagnostiquer."},
    ]}
    gallery={[
      {src:"/images/atelier-nova.png",alt:"Schéma réseau de la PME fictive Atelier Nova",caption:"Le réseau Atelier Nova sert de fil rouge aux différents modules."},
      {src:"/images/case-diagnostic.png",alt:"Mission de diagnostic réseau du poste de Léa",caption:"Une mission met l’apprenant face à une panne de passerelle."},
      {src:"/images/case-interactive.png",alt:"Atelier binaire et hexadécimal",caption:"Les ateliers transforment les conversions en automatismes utiles."},
      {src:"/images/quiz-interactif.png",alt:"Quiz de validation des connaissances réseau",caption:"Les banques de questions permettent une validation progressive."},
    ]}
    nextHref="/projets/site-vm-formation/"
    nextLabel="Voir le projet du site"
  />;
}
