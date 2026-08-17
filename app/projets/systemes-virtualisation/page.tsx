import type { Metadata } from "next";
import CaseStudyPage from "../CaseStudyPage";

export const metadata: Metadata = {
  title: "Parcours Linux, VMware et Windows Server | Portfolio",
  description: "Présentation de trois parcours pédagogiques consacrés aux bases de Linux, à la virtualisation VMware et à Windows Server.",
};

export default function SystemesVirtualisation() {
  return <CaseStudyPage
    index="03"
    kicker="Systèmes et virtualisation"
    title="Construire trois parcours pour découvrir les systèmes"
    intro="Conception de trois collections complémentaires qui guident un public débutant de la prise en main de Linux à la création de machines virtuelles, puis à l’administration de Windows Server."
    heroImage="/images/pdf-cover-virtualisation-vmware.png"
    heroAlt="Couverture du cours Comprendre la virtualisation"
    tags={["Linux", "VMware", "Windows Server", "Cours · TD · TP"]}
    facts={[
      {label:"Parcours",value:"3 collections complémentaires"},
      {label:"Progression",value:"36 thèmes"},
      {label:"Production",value:"180 PDF · 842 pages"},
      {label:"Pratique",value:"72 TD et TP remplissables"},
    ]}
    asideTitle="Une progression commune, adaptée à trois environnements."
    asideText="Chaque parcours associe explications, exercices et manipulations. Les apprenants retrouvent les mêmes repères graphiques et pédagogiques d’un thème à l’autre."
    blocks={[
      {
        title:"Le besoin",
        text:"Proposer une initiation structurée aux systèmes et à la virtualisation, utilisable par des débutants, des personnes en reconversion et des apprenants en formation technique.",
      },
      {
        title:"Les trois parcours",
        text:"Les collections ont été conçues pour pouvoir être suivies séparément ou dans une progression commune.",
        items:[
          "Bases Linux : installation, terminal, fichiers, permissions, services, stockage et diagnostic réseau",
          "Virtualisation VMware : hyperviseurs, création de VM, réseaux virtuels, snapshots, sauvegarde et diagnostic",
          "Bases Windows Server : installation, configuration, stockage, comptes locaux, rôles, PowerShell, sécurité et maintenance",
        ],
      },
      {
        title:"La méthode pédagogique",
        text:"Chaque thème est décliné en cours, TD et TP. Un environnement fictif commun relie les manipulations et permet de replacer les notions dans un contexte professionnel.",
        items:[
          "Cours illustrés et vocabulaire expliqué",
          "TD avec zones de réponse remplissables",
          "TP guidés avec contrôles et preuves à fournir",
          "Corrigés formateur conservés dans une version séparée",
        ],
      },
      {
        title:"Le contrôle qualité",
        text:"Les trois parcours ont été vérifiés avant diffusion : formats A4, formulaires, liens, lisibilité et rendu page par page. Cette étape garantit des supports cohérents et directement exploitables en formation.",
      },
      {
        title:"Le résultat",
        text:"Un ensemble de 180 documents représentant 842 pages, 36 thèmes et 72 TD ou TP remplissables. Le portfolio présente uniquement des couvertures et des chiffres de production ; les documents complets et les corrigés restent privés.",
      },
    ]}
    gallery={[
      {src:"/images/pdf-cover-bases-linux.png",alt:"Couverture du cours Découverte de Linux et de ses usages",caption:"Linux — couverture d’un parcours de 12 thèmes."},
      {src:"/images/apercu-linux-cours-terminal.png",alt:"Extrait du cours Linux sur les redirections, pipelines et variables",caption:"Linux — notions expliquées, commandes commentées, erreurs fréquentes et mini-défis."},
      {src:"/images/apercu-linux-tp-diagnostic.png",alt:"Extrait du TP Linux avec une carte incident autonome",caption:"Linux — une activité de diagnostic autonome avec preuves et remise en état."},
      {src:"/images/pdf-cover-virtualisation-vmware.png",alt:"Couverture du cours Comprendre la virtualisation",caption:"VMware — couverture d’un parcours de 12 thèmes."},
      {src:"/images/apercu-vmware-cours-reseaux.png",alt:"Extrait du cours VMware sur les réseaux NAT et host-only",caption:"VMware — comparaison des modes réseau et application au laboratoire Atelier Nova."},
      {src:"/images/apercu-vmware-tp-creation.png",alt:"Extrait du TP VMware consacré à la création d’une machine virtuelle",caption:"VMware — consigne de manipulation, précaution, preuve attendue et zone de compte rendu."},
      {src:"/images/pdf-cover-windows-server.png",alt:"Couverture du cours Découvrir Windows Server et ses usages",caption:"Windows Server — couverture d’un parcours de 12 thèmes."},
      {src:"/images/apercu-windows-cours-powershell.png",alt:"Extrait du cours Windows Server sur PowerShell",caption:"Windows Server — administration PowerShell avec aide, filtrage, export et bonnes pratiques."},
      {src:"/images/apercu-windows-tp-configuration.png",alt:"Extrait du TP Windows Server sur la configuration IPv4",caption:"Windows Server — configuration IPv4 guidée avec commande, contrôle et retour arrière."},
    ]}
    nextHref="/projets/site-vm-formation/"
    nextLabel="Revenir au projet du site"
  />;
}
