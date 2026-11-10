import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    category: {
      pt: "Linguagens de Programação",
      en: "Programming Languages",
    },
    skills: [
      { name: "C / C++", description: { pt: "Sistemas, alocação de memória e sockets", en: "Systems, memory allocation, and sockets" } },
      { name: "Python", description: { pt: "Manipulação e análise exploratória de dados", en: "Data manipulation and exploratory analysis" } },
      { name: "JavaScript", description: { pt: "Desenvolvimento web e interfaces", en: "Web development and frontend interfaces" } },
      { name: "SQL", description: { pt: "Consultas analíticas e manipulação de dados", en: "Analytical queries and data manipulation" } },
      { name: "Java", description: { pt: "Fundamentos de Orientação a Objetos", en: "Object-Oriented Programming foundations" } },
    ],
  },
  {
    id: "web-frontend",
    category: {
      pt: "Desenvolvimento Web",
      en: "Web Development",
    },
    skills: [
      { name: "React", description: { pt: "Aplicações corporativas e componentes reutilizáveis", en: "Enterprise apps and reusable components" } },
      { name: "HTML5", description: { pt: "Estruturação semântica e acessibilidade", en: "Semantic structure and accessibility" } },
      { name: "CSS3", description: { pt: "Layouts responsivos e estilização moderna", en: "Responsive layouts and modern styling" } },
      { name: "Vite", description: { pt: "Bundling veloz para aplicações web", en: "Fast build tooling for frontend applications" } },
    ],
  },
  {
    id: "data-databases",
    category: {
      pt: "Dados & Bancos de Dados",
      en: "Data & Databases",
    },
    skills: [
      { name: "Modelagem Relacional", description: { pt: "MER/DER, normalização e integridade", en: "ER diagrams, normalization, and constraints" } },
      { name: "MySQL", description: { pt: "Bancos relacionais e scripts DDL/DML", en: "Relational database setup and DDL/DML" } },
      { name: "Microsoft Dataverse", description: { pt: "Tabelas relacionais industriais corporativas", en: "Enterprise industrial relational data storage" } },
      { name: "Pandas", description: { pt: "Tratamento e limpeza de datasets", en: "Data cleaning, filtering, and aggregation" } },
      { name: "NumPy", description: { pt: "Operações numéricas vetorizadas", en: "Vectorized numerical transformations" } },
      { name: "Matplotlib", description: { pt: "Visualização e gráficos estatísticos", en: "Statistical visualization and charting" } },
    ],
  },
  {
    id: "automation-enterprise",
    category: {
      pt: "Automação & Plataformas Corporativas",
      en: "Automation & Enterprise Platforms",
    },
    skills: [
      { name: "Power Apps", description: { pt: "Aplicações de inspeção para chão de fábrica", en: "Shop-floor quality inspection applications" } },
      { name: "Power Automate", description: { pt: "Fluxos de trabalho e automação de rotinas", en: "Workflow triggers and automated notifications" } },
      { name: "SharePoint", description: { pt: "Gestão de acessos, repositórios e permissões", en: "Repository administration and access governance" } },
    ],
  },
  {
    id: "tools-environment",
    category: {
      pt: "Ferramentas & Ambiente",
      en: "Tools & Environment",
    },
    skills: [
      { name: "Git", description: { pt: "Controle de versão e trabalho em equipe", en: "Version control and branching workflows" } },
      { name: "GitHub", description: { pt: "Repositórios, documentação e releases", en: "Repositories, documentation, and releases" } },
      { name: "Linux / Bash", description: { pt: "Ambiente POSIX, compilação e comandos", en: "POSIX environment, compilation, and shell" } },
      { name: "Jupyter Notebook", description: { pt: "Ambiente iterativo para análise de dados", en: "Interactive data science environment" } },
    ],
  },
  {
    id: "computer-science",
    category: {
      pt: "Conceitos de Computação & Engenharia",
      en: "Computer Science & Engineering Concepts",
    },
    skills: [
      { name: "Programação Concorrente", description: { pt: "Threads e comunicação entre processos", en: "Multithreading and process communication" } },
      { name: "Sockets TCP", description: { pt: "Comunicação cliente-servidor em rede", en: "Network client-server socket communication" } },
      { name: "Threads & Mutex", description: { pt: "Sincronização e prevenção de race conditions", en: "Synchronization and race-condition prevention" } },
      { name: "Estruturas de Dados", description: { pt: "Listas, matrizes, árvores e grafos", en: "Lists, matrices, trees, and graphs" } },
      { name: "Algoritmos", description: { pt: "Recursividade, busca e complexidade", en: "Recursion, search, and algorithmic bounds" } },
      { name: "Engenharia de Requisitos", description: { pt: "Entrevistas operacionais e especificação", en: "Operational interviews and specification" } },
      { name: "Programação Orientada a Objetos", description: { pt: "Encapsulamento, herança e polimorfismo", en: "Encapsulation, inheritance, and polymorphism" } },
    ],
  },
  {
    id: "soft-skills",
    category: {
      pt: "Competências Pessoais & Metodologia",
      en: "Professional & Collaborative Skills",
    },
    skills: [
      { name: "Trabalho em Equipe", description: { pt: "Colaboração com operadores e engenharia", en: "Cross-functional collaboration with operators" } },
      { name: "Boa Comunicação", description: { pt: "Clareza no alinhamento de requisitos", en: "Clear requirement alignment and presentations" } },
      { name: "Aprendizado Rápido", description: { pt: "Adaptação ágil a novas tecnologias e processos", en: "Rapid adoption of new tools and stacks" } },
      { name: "Adaptabilidade", description: { pt: "Flexibilidade entre fábrica e ambiente acadêmico", en: "Agility across industry and academic labs" } },
      { name: "Levantamento de Requisitos", description: { pt: "Entendimento empático das dores do usuário", en: "Direct user interviews on the shop floor" } },
    ],
  },
];
