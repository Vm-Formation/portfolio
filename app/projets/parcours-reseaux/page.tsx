import type { Metadata } from "next";
import CaseStudyPage from "../CaseStudyPage";

export const metadata: Metadata = {
  title: "Conception d’un parcours réseaux | VM Formation",
  description: "Étude de cas : conception de huit modules et d’une synthèse pour apprendre progressivement les fondamentaux des réseaux.",
};

export default function ParcoursReseaux() {
  return <CaseStudyPage
    index="01"
    kicker="Architecture pédagogique"
    title="Construire un parcours réseaux progressif"
    intro="Transformer un vaste programme technique en un chemin compréhensible pour un débutant, sans perdre la cohérence entre les notions."
    heroImage="/images/case-roadmap.png"
    heroAlt="Feuille de route visuelle des modules du parcours réseaux VM Formation"
    tags={["Progression", "Réseaux", "Scénarisation", "Débutants"]}
    facts={[{label:"Périmètre",value:"8 modules + 1 synthèse"},{label:"Public",value:"Débutants en informatique"},{label:"Fil rouge",value:"Le réseau de la PME Atelier Nova"},{label:"Validation",value:"Quiz et activités pratiques"}]}
    asideTitle="Un programme qui donne du sens à chaque étape."
    asideText="La progression ne juxtapose pas des chapitres : chaque module prépare le suivant et réutilise les acquis précédents dans une situation plus complète."
    blocks={[
      {title:"Le besoin de départ",text:"Les notions de réseau deviennent vite abstraites lorsqu’elles sont enseignées comme une liste de protocoles et de sigles. Le parcours devait donner une vision d’ensemble avant d’entrer progressivement dans les couches et les équipements."},
      {title:"La réponse conçue",text:"Huit modules publiés suivent un ordre stable, puis une synthèse replace la vie d’un paquet de bout en bout.",items:["Bases des réseaux et modèle OSI","Couche physique, binaire et couche liaison","Adressage IPv4, couche réseau et transport","Synthèse finale : suivre un paquet de bout en bout"]},
      {title:"Le fil rouge Atelier Nova",text:"Une PME fictive de 32 personnes sert de contexte commun. Son réseau rassemble postes filaires, Wi-Fi interne et invité, switch central, pare-feu-routeur et serveur d’infrastructure. Les notions sont replacées dans cette architecture au fil du parcours."},
      {title:"La valeur pédagogique",text:"L’apprenant sait où il se trouve, ce qu’il doit maîtriser avant de continuer et pourquoi la notion étudiée intervient dans un échange ou un diagnostic réel."},
    ]}
    gallery={[
      {src:"/images/atelier-nova.png",alt:"Schéma réseau de la PME fictive Atelier Nova",caption:"Atelier Nova relie les notions à une architecture de PME cohérente."},
      {src:"/images/activite-binaire.png",alt:"Activité de conversion du binaire vers le décimal",caption:"Les activités intermédiaires transforment les prérequis en automatismes utiles."},
    ]}
    nextHref="/projets/diagnostic-reseau/"
    nextLabel="Voir le cas diagnostic"
  />;
}
