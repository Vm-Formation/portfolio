import type { Metadata } from "next";
import CaseStudyPage from "../CaseStudyPage";

export const metadata: Metadata = {
  title: "Supports PDF — Fondamentaux des réseaux | Portfolio",
  description: "Présentation d’une collection de cours, TD et TP en PDF consacrée aux fondamentaux des réseaux.",
};

export default function ParcoursReseaux() {
  return <CaseStudyPage
    index="02"
    kicker="Projet pédagogique"
    title="Concevoir des supports PDF pour apprendre les réseaux"
    intro="Création d’une collection de cours, TD et TP qui accompagne des débutants depuis les notions de base jusqu’au diagnostic d’un réseau."
    heroImage="/images/pdf-cover-bases-reseaux.png"
    heroAlt="Couverture du cours PDF Bases des réseaux informatiques"
    tags={["Cours PDF", "TD", "TP", "Réseaux"]}
    facts={[{label:"Formats",value:"Cours, TD et TP"},{label:"Progression",value:"8 thèmes + 1 synthèse"},{label:"Public",value:"Débutants et post-bac"},{label:"Diffusion",value:"Extraits publics, corrigés privés"}]}
    asideTitle="Un projet complet, du cours à la mise en pratique."
    asideText="Les documents partagent la même progression et le même cas pratique afin de relier les notions, les exercices et le diagnostic."
    blocks={[
      {title:"Le besoin",text:"Créer des supports compréhensibles par des débutants et directement utilisables pendant une formation en présentiel ou à distance."},
      {title:"Mon travail",text:"J’ai défini la progression, rédigé les contenus, créé les schémas et les exercices, puis mis en page les versions cours, TD et TP.",items:["8 thèmes, des bases jusqu’à la couche transport","Documents apprenant avec zones de réponse","TP guidés puis activités plus autonomes","Corrigés formateur conservés séparément"]},
      {title:"La structure pédagogique",text:"Le même réseau fictif, Atelier Nova, sert de fil rouge.",items:["Cours : comprendre le réseau et le vocabulaire","TD : raisonner sur une situation ou un calcul","TP : appliquer une méthode étape par étape","Synthèse : diagnostiquer une panne et justifier la correction"]},
      {title:"Le résultat",text:"Une collection cohérente qui démontre des compétences en réseaux, en conception pédagogique, en rédaction technique et en mise en page. Le portfolio montre uniquement des extraits ; les documents complets et les corrigés restent privés."},
    ]}
    gallery={[
      {src:"/images/pdf-fil-rouge-atelier-nova.png",alt:"Schéma du réseau fictif Atelier Nova utilisé dans les supports PDF",caption:"1. Le cours introduit Atelier Nova, le réseau qui relie tous les supports."},
      {src:"/images/pdf-td-osi-exercices.png",alt:"Exercices du TD sur le modèle OSI",caption:"2. Le TD fait raisonner l’apprenant sur des situations concrètes."},
      {src:"/images/pdf-tp-ipv4-etape.png",alt:"Étape guidée du TP IPv4 et CIDR",caption:"3. Le TP guide l’application de la méthode avec des zones de réponse."},
      {src:"/images/pdf-tp-incident-diagnostic.png",alt:"Étape de diagnostic autonome du TP Packet Tracer",caption:"4. La synthèse demande d’identifier une panne, de la prouver puis de la corriger."},
    ]}
    nextHref="/projets/site-vm-formation/"
    nextLabel="Voir le projet du site"
  />;
}
