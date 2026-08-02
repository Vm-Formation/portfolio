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
    heroImage="/images/pdf-cover-bases-reseaux.png"
    heroAlt="Couverture du cours PDF Bases des réseaux informatiques"
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
      {src:"/images/pdf-cover-bases-reseaux.png",alt:"Couverture du cours PDF Bases des réseaux informatiques",caption:"Le cours principal présente les équipements, les protocoles et le trajet des données."},
      {src:"/images/pdf-td-modele-osi.png",alt:"Couverture du TD PDF consacré au modèle OSI",caption:"Le TD Modèle OSI propose dix exercices progressifs dans une version apprenant remplissable."},
      {src:"/images/pdf-tp-ipv4.png",alt:"Couverture du TP PDF Découpage IPv4 et CIDR",caption:"Le TP IPv4 guide les calculs de sous-réseaux et la construction d’un plan VLSM."},
      {src:"/images/pdf-tp-packet-tracer.png",alt:"Couverture du TP PDF Vie complète d’un paquet",caption:"Le TP de synthèse demande de construire, observer et diagnostiquer un réseau dans Packet Tracer."},
    ]}
    nextHref="/projets/site-vm-formation/"
    nextLabel="Voir le projet du site"
  />;
}
