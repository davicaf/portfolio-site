import { ExperienceItem } from "@/types";

export const experiencesData: ExperienceItem[] = [
  {
    id: "michelin-digital-processes",
    role: {
      pt: "Estagiário de Processos Digitais",
      en: "Digital Processes Intern",
    },
    company: "Michelin",
    companyUrl: "https://www.michelin.com.br",
    location: "Manaus, AM — Brasil",
    period: {
      pt: "Janeiro de 2026 — Presente",
      en: "January 2026 — Present",
    },
    type: {
      pt: "Estágio Corporativo",
      en: "Industrial Internship",
    },
    overview: {
      pt: "Atuação no desenvolvimento de aplicações, automação e digitalização de processos operacionais em ambiente industrial manufatureiro de grande porte.",
      en: "Engineering web and enterprise applications, workflow automations, and operational process digitalization within a large-scale industrial tire manufacturing environment.",
    },
    keyProjects: [
      {
        title: {
          pt: "Aplicativo de Apontamento de Paradas de Prensa",
          en: "Industrial Press Downtime Logging Application",
        },
        technology: "React • Dataverse • UI/UX para Chão de Fábrica",
        scope: {
          pt: "Ateliê industrial completo com 48 prensas",
          en: "Complete industrial curing workshop with 48 presses",
        },
        description: [
          {
            pt: "Desenvolvimento de uma aplicação web em React para registro e monitoramento em tempo real de paradas de prensas industriais, utilizada ativamente pelos operadores em um setor com 48 equipamentos.",
            en: "Developed a React web application for real-time monitoring and recording of industrial press downtimes, actively used by shop-floor operators across 48 heavy industrial presses.",
          },
          {
            pt: "Condução do levantamento de requisitos diretamente no chão de fábrica e realização de testes de usabilidade com os operadores para garantir aderência ao ritmo da linha de produção.",
            en: "Led direct requirement gathering on the shop floor and conducted usability tests with machine operators to ensure seamless alignment with production takt times.",
          },
          {
            pt: "Substituição completa de apontamentos manuais e planilhas por tabelas relacionais estruturadas no Microsoft Dataverse, assegurando integridade e consistência dos registros operacionais.",
            en: "Successfully replaced manual controls and decentralized spreadsheets with structured relational tables in Microsoft Dataverse, establishing data integrity and auditability.",
          },
        ],
        highlights: [
          {
            pt: "Estruturação relacional que assegura confiabilidade operacional imediata.",
            en: "Relational data structuring guaranteeing immediate operational accuracy.",
          },
          {
            pt: "Dados padronizados com potencial futuro para alimentar modelos preditivos de paradas e trocas de molde.",
            en: "Standardized data laying the groundwork for future advanced analytics and predictive maintenance models.",
          },
        ],
        futureImpactNote: {
          pt: "A base de dados estruturada viabiliza futuras iniciativas de análise avançada e Machine Learning para previsão de causas de paradas e otimização de trocas.",
          en: "The structured dataset provides the foundation for future advanced analytics and Machine Learning initiatives to predict downtime root causes.",
        },
      },
      {
        title: {
          pt: "Aplicativo de Inspeção e Controle de Qualidade de Pneus",
          en: "Tire Quality Inspection & Scrap Tracking Application",
        },
        technology: "Power Apps • Dataverse • Rastreabilidade Industrial",
        scope: {
          pt: "Equipe de inspeção de qualidade da planta",
          en: "Plant-wide quality inspection team",
        },
        description: [
          {
            pt: "Desenvolvimento de aplicativo em Power Apps para digitalização de formulários de inspeção e apontamento de refugo por inspetores de qualidade da planta.",
            en: "Engineered a Power Apps mobile/tablet solution to digitalize inspection forms and scrap reporting for plant quality inspectors.",
          },
          {
            pt: "Integração lógica com o sistema de apontamento de prensas: através do código do molde, o sistema identifica automaticamente o modelo do pneu e sua alocação, preenchendo a prensa responsável pela fabricação.",
            en: "Designed logical integration with the press monitoring system: by looking up the mold identifier, the system automatically resolves tire model and press allocation, pre-populating the responsible curing press.",
          },
        ],
        highlights: [
          {
            pt: "Rastreabilidade bidirecional e vínculo automatizado entre processos de fabricação e inspeção final.",
            en: "Bidirectional traceability linking curing press operations directly to downstream quality inspection.",
          },
          {
            pt: "Eliminação de erros de digitação e duplicidade no registro de anomalias operacionais.",
            en: "Eliminated manual input discrepancies and redundant records in defect reporting.",
          },
        ],
      },
    ],
    otherActivities: [
      {
        pt: "Desenvolvimento de fluxos automatizados com Power Automate para roteamento de notificações e atualização de registros operacionais.",
        en: "Built automated workflows using Power Automate for event notification routing and operational record synchronization.",
      },
      {
        pt: "Administração de permissões, estruturas de repositórios e governança de acessos no SharePoint corporativo.",
        en: "Managed access permissions, repository structures, and document governance on enterprise SharePoint.",
      },
      {
        pt: "Participação em treinamentos de integração digital para novos operadores ingressantes na fábrica.",
        en: "Facilitated digital onboarding sessions for new machine operators joining the plant.",
      },
    ],
    qualitativeResults: [
      {
        pt: "Maior integridade, confiabilidade e governança de dados nos fluxos de produção.",
        en: "Significantly enhanced operational data integrity, consistency, and governance.",
      },
      {
        pt: "Redução sensível da dependência de planilhas manuais propensas a inconsistências.",
        en: "Eliminated operational reliance on manual, error-prone spreadsheets.",
      },
      {
        pt: "Melhoria substancial na extração, consolidação e análise de informações de processo.",
        en: "Greatly improved data extraction and operational reporting speed.",
      },
      {
        pt: "Integração fluida entre as etapas de produção (prensas) e controle de qualidade (inspeção).",
        en: "Seamless cross-functional traceability between manufacturing and quality control stages.",
      },
      {
        pt: "Preparação de uma base sólida para futuras iniciativas de análise preditiva.",
        en: "Established a robust data foundation for future predictive analytics initiatives.",
      },
    ],
    skills: [
      "React",
      "Power Apps",
      "Dataverse",
      "Power Automate",
      "SharePoint",
      "Engenharia de Requisitos",
      "Testes de Usabilidade",
      "Modelagem Relacional",
    ],
    isFeatured: true,
  },
];
