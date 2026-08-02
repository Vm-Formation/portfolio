import type { Metadata } from "next";
import CaseStudyPage from "../CaseStudyPage";

export const metadata: Metadata = {
  title: "Mission de diagnostic réseau | VM Formation",
  description: "Étude de cas : une mission professionnelle semi-guidée pour apprendre à diagnostiquer une panne de passerelle.",
};

export default function DiagnosticReseau() {
  return <CaseStudyPage
    index="02"
    kicker="Mise en situation"
    title="Faire raisonner sur une panne réelle"
    intro="Le poste de Léa n’accède plus au serveur : l’apprenant doit analyser la topologie, collecter des preuves et isoler la cause avant toute correction."
    heroImage="/images/case-diagnostic.png"
    heroAlt="Mission interactive de diagnostic du poste de Léa"
    tags={["Diagnostic", "IPv4", "Passerelle", "Preuves"]}
    facts={[{label:"Format",value:"Mission semi-guidée"},{label:"Durée",value:"Environ 15 minutes"},{label:"Livrable",value:"Cause, preuves et correction"},{label:"Compétence",value:"Diagnostiquer le chemin aller-retour"}]}
    asideTitle="Passer de la réponse juste à la preuve technique."
    asideText="La mission entraîne une méthode professionnelle : observer, formuler une hypothèse, tester et ne modifier qu’une seule cause à la fois."
    blocks={[
      {title:"La situation",text:"Un poste ne peut plus atteindre un serveur situé sur un autre sous-réseau. Le reste du contexte évite les réponses au hasard et permet de délimiter l’incident."},
      {title:"Le niveau d’aide",text:"Le scénario est semi-guidé. Des indices orientent vers les contrôles utiles, mais l’apprenant choisit les commandes, interprète les résultats et formule le diagnostic."},
      {title:"Les preuves attendues",text:"Le livrable ne se limite pas à une configuration corrigée.",items:["Identifier la cause précise","Présenter trois observations ou résultats de test","Proposer une correction cohérente","Valider le chemin aller-retour après correction"]},
      {title:"Le transfert professionnel",text:"La démarche reproduit un principe essentiel du support informatique : conserver une trace du raisonnement et démontrer le retour au fonctionnement au lieu de multiplier les changements."},
    ]}
    gallery={[
      {src:"/images/missions-professionnelles.png",alt:"Missions professionnelles guidées, semi-guidées et autonomes",caption:"La difficulté progresse du calcul guidé au diagnostic autonome."},
      {src:"/images/atelier-nova.png",alt:"Architecture réseau Atelier Nova",caption:"La topologie donne un contexte lisible aux contrôles de passerelle et de routage."},
    ]}
    nextHref="/projets/activites-interactives/"
    nextLabel="Voir les activités interactives"
  />;
}
