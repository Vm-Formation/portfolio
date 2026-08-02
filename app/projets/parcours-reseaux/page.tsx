import type { Metadata } from "next";
import CaseStudyPage from "../CaseStudyPage";

export const metadata: Metadata = {
  title: "Supports PDF — Fondamentaux des réseaux | Portfolio",
  description: "Présentation d’une collection de cours, TD et TP en PDF consacrée aux fondamentaux des réseaux.",
};

export default function ParcoursReseaux() {
  return <CaseStudyPage
    index="02"
    kicker="Collection de supports pédagogiques"
    title="Créer des cours réseau au format PDF"
    intro="Conception et mise en page d’une collection cohérente de cours, TD et TP destinée à accompagner des débutants dans l’apprentissage des fondamentaux des réseaux."
    heroImage="/images/pdf-sommaire-binaire.png"
    heroAlt="Extrait du sommaire d’un cours PDF sur le binaire et l’hexadécimal"
    tags={["Cours PDF", "TD", "TP", "Réseaux"]}
    facts={[{label:"Formats",value:"Cours, TD et TP"},{label:"Progression",value:"8 thèmes + 1 synthèse"},{label:"Public",value:"Débutants et post-bac"},{label:"Diffusion",value:"Extraits publics, corrigés privés"}]}
    asideTitle="Une collection de documents conçue pour la formation."
    asideText="Ce projet porte sur les supports PDF eux-mêmes : leur contenu, leur progression, leurs exercices et leur mise en page. Les versions complètes et les corrigés restent privés."
    blocks={[
      {title:"L’objectif",text:"Produire des documents clairs et directement utilisables pendant une formation, aussi bien pour présenter une notion que pour guider une activité pratique."},
      {title:"La collection documentaire",text:"Chaque thème peut être décliné selon le besoin pédagogique.",items:["Cours pour expliquer les notions et le vocabulaire","TD pour effectuer des calculs et raisonner sur des cas","TP pour manipuler, observer et diagnostiquer","Corrigés formateur conservés dans une version privée"]},
      {title:"Une structure commune",text:"Les supports reprennent des repères stables : objectifs, prérequis, durée indicative, compétences évaluées, consignes, espaces de réponse et résultats attendus."},
      {title:"Les thèmes traités",text:"La collection suit une progression allant des bases à la compréhension d’un échange complet.",items:["Bases des réseaux et modèle OSI","Couche physique, binaire et hexadécimal","Couche liaison et adressage IPv4","Couche réseau et couche transport","Synthèse : suivre la vie d’un paquet"]},
      {title:"Les exercices proposés",text:"Les activités demandent de convertir des valeurs, compléter des schémas, lire une configuration, suivre un paquet ou justifier un diagnostic avec des preuves."},
      {title:"La diffusion",text:"Le portfolio présente uniquement quelques extraits visuels. Les documents complets, leurs zones de travail et les corrigés ne sont pas publiés afin de préserver leur usage en formation."},
    ]}
    gallery={[
      {src:"/images/atelier-nova.png",alt:"Page PDF présentant le scénario réseau Atelier Nova",caption:"Un schéma de réseau sert de fil rouge à plusieurs supports."},
      {src:"/images/tp-diagnostic.png",alt:"Page d’informations pratiques d’un TP de diagnostic réseau",caption:"Les TP précisent les objectifs, les prérequis, le matériel et les preuves attendues."},
      {src:"/images/pdf-sommaire-binaire.png",alt:"Page PDF du cours sur le binaire et l’hexadécimal",caption:"Chaque cours annonce sa progression et les compétences travaillées."},
      {src:"/images/activite-binaire.png",alt:"Exercice PDF de conversion du binaire vers le décimal",caption:"Les TD alternent exemples, exercices et zones prévues pour les réponses."},
    ]}
    nextHref="/projets/site-vm-formation/"
    nextLabel="Voir le projet du site"
  />;
}
