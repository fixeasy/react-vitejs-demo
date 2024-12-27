export const technicalSkills = [
// 100 - Niveau 5 - Expert
//  80 - Niveau 4 - Maîtrise
//  60 - Niveau 3 - Fonctionnel
//  40 - Niveau 2 - Basique
//  20 Niveau 1 - Théorique
  {
    category: "CI/CD",
    tools: [
      { name: "Jenkins", level: 80 }, 
      { name: "GitLab CI", level: 80 }, 
      { name: "Azure DevOps", level: 40 },
      { name: "GitHub Actions", level: 20 }, 
    ]
  },
  {
    category: "Cloud",
    tools: [
      { name: "AWS", level: 60 },
      { name: "Azure", level: 60 },
      { name: "OpenStack", level: 60 } ,
      { name: "GCP", level: 20 },
    ]
  },
  {
    category: "Conteneurisation",
    tools: [
      { name: "Kubernetes", level: 80 },
      { name: "Helm", level: 80 },
      { name: "Docker", level: 80 },
      { name: "Packer", level: 40 }
    ]
  },
  {
    category: "IaC & Configuration",
    tools: [
      { name: "Terraform", level: 80 },
      { name: "Ansible", level: 60 }
    ]
  },
  {
    category: "Monitoring & Observabilité",
    tools: [
      { name: "Grafana", level: 80 },
      { name: "Vector", level: 60 },
      { name: "Datadog", level: 60 },
    ]
  },
];

export const softSkills = [
  "Communication inter-équipes",
  "Agilité & Scrum",
  "Résolution de problèmes",
  "Veille technologique",
  "Gestion du changement",
  "Gestion de crise",
  "Formation"
];