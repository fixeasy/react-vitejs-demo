export const experiences = [
  {
    titre: "Ingénieur DevOps",
    entreprise: "SNCF",
    periode: "Avril 2024 - Présent",
    description: "Build et Run de la plateforme eUL, l’usine de livraison continue centralisée de la SNCF.",
    realisations: [
      "Gérer et optimiser l'infrastructure Azure et AWS, en veillant à la sécurité, la scalabilité, et l'efficacité des applications de données et des services de l'usine.",
      "Mise en place d'une stratégie de déploiement continu, garantissant une livraison rapide et fiable des applications.",
      "Assurer la gestion et la supervision de l'infrastructure des applications, en garantissant leur disponibilité, leur performance, et leur sécurité.",
      "Création et gestion de ressources sur Azure, y compris la configuration d'AKS et la restauration de volumes Netapp."
    ],
    technologies: ["AWS", "Terraform", "Gitlab CI", "Jenkins", "Azure DevOps", "Kubernetes", "Helm", "Datadog"]
  },
  {
    titre: "Ingénieur DevOps",
    entreprise: "Enedis",
    periode: "Octobre 2022 - Avril 2024",
    description: "Conception d'une plateforme CI/CD robuste pour améliorer l'efficacité opérationnelle au sein de la DSI Enedis.",
    realisations: [
      "Développement d'une solution Cloud et On-Premise, offrant une infrastructure hautement disponible et scalable.",
      "Centralisation des outils CI/CD pour garantir une cohérence dans les pratiques DevOps à travers l'organisation.",
      "Création d'une bibliothèque de pipelines CI/CD facilitant l'adoption des bonnes pratiques par les équipes projets.",
      "Mise en œuvre d'une architecture résiliente permettant une montée en charge automatique selon les besoins."
    ],
    technologies: ["AWS", "Openstack", "GitLab CI", "Kubernetes", "Helm", "Ansible", "Terraform", "Vector", "Grafana"]
  },
  {
    titre: "Ingénieur DevOps & Dev",
    entreprise: "Alstom",
    periode: "2021 - 2022",
    description: "Développement d'un système innovant pour centraliser et partager les données critiques du train.",
    realisations: [
      "Conception d'une passerelle de communication bidirectionnelle entre les systèmes embarqués et les serveurs à terre.",
      "Élaboration d'une architecture logicielle conforme aux exigences système via UML/SYSML.",
      "Gestion proactive du projet avec un focus sur le respect des coûts, délais et qualité (QCD).",
      "Automatisation du workflow de développement grâce à la mise en place d'une chaîne CI/CD performante."
    ],
    technologies: ["Kubernetes", "Jenkins", "C++", "Ansible", "Gitlab"]
  },
  {
    titre: "Ingénieur DevOps",
    entreprise: "Alstom",
    periode: "2019 - 2021",
    description: "Conception et déploiement d'une plateforme CI/CD pour le développement de logiciels embarqués sur train.",
    realisations: [
      "Gestion de l'infrastructure as code avec Vagrant pour une provisionnement efficace des ressources.",
      "Déploiement et orchestration d'un cluster Kubernetes avec Rancher k3s, garantissant une haute disponibilité.",
      "Création de pipelines CI/CD robustes, facilitant la conteneurisation des applications avec Kaniko.",
      "Configuration des services Kubernetes pour optimiser le stockage et la surveillance des applications déployées."
    ],
    technologies: ["Vagrant", "Kubernetes", "jenkins", "Ansible"]
  }
];
