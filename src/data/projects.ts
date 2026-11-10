import { ProjectItem } from "@/types";

export const projectsData: ProjectItem[] = [
  {
    id: "batalha-naval-sockets-tcp",
    title: "Batalha Naval Multicliente com Sockets TCP",
    subtitle: {
      pt: "Servidor concorrente multithread em C e comunicação cliente-servidor com protocolo customizado",
      en: "Concurrent multithreaded C server and client-server communication with custom protocol",
    },
    description: {
      pt: "Implementação em C de uma versão completa do jogo Batalha Naval com arquitetura cliente-servidor, comunicação via sockets TCP e sincronização de partidas entre dois jogadores simultâneos.",
      en: "Full client-server Battleship implementation in C using TCP sockets and multithreaded match synchronization between two concurrent players.",
    },
    academicContext: {
      pt: "Projeto final da disciplina de Laboratório de Programação Avançada — UFAM (2025.1)",
      en: "Final Capstone Project for Advanced Programming Lab — UFAM (2025.1)",
    },
    category: {
      pt: "Sistemas & Redes",
      en: "Systems & Networks",
    },
    categoryId: "systems-concurrency",
    technologies: ["C", "Sockets TCP", "pthreads", "Mutex", "Makefile", "Linux"],
    status: "completed",
    isFeatured: true,
    order: 1,
    image: null,
    githubUrl: null, // SINALIZAÇÃO: Insira o link do seu repositório quando desejar torná-lo público
    demoUrl: null,
    technicalHighlights: [
      {
        pt: "Servidor central multithread capaz de parear dois clientes simultâneos e gerenciar o ciclo de vida completo da partida.",
        en: "Central multithreaded server arbitrating player matchmaking and game lifecycle.",
      },
      {
        pt: "Gerenciamento de concorrência com uma thread por jogador (pthread_create) e proteção do estado compartilhado da partida com mutex (pthread_mutex_t).",
        en: "Dedicated thread per player (pthread_create) with shared state mutual exclusion (pthread_mutex_t).",
      },
      {
        pt: "Definição de protocolo textual proprietário com comandos específicos para posicionamento, ataques e sincronização de turnos.",
        en: "Custom text-based communication protocol specifying commands for placement, attacks, and turn synchronization.",
      },
      {
        pt: "Tabuleiro 8×8 com validação estrita de coordenadas, frota variada (submarino, fragatas, destroyer) e verificação de afundamentos.",
        en: "8x8 grid with coordinate validation, multi-tier ship fleet, and real-time sunk detection.",
      },
    ],
    architecture: [
      {
        component: "server/battleserver.c",
        role: {
          pt: "Gerenciamento das conexões de rede, ciclo da partida, criação de threads por jogador e controle de sincronização via mutex.",
          en: "Handles socket listening, matchmaking, per-player threads, and turn synchronization via mutex locks.",
        },
      },
      {
        component: "client/battleclient.c",
        role: {
          pt: "Interface de terminal interativa para entrada de comandos, posicionamento de navios, envio de ataques e visualização do tabuleiro.",
          en: "Interactive CLI client for grid rendering, ship placement, attack dispatching, and game state display.",
        },
      },
      {
        component: "common/protocol.h",
        role: {
          pt: "Definição padronizada de mensagens do protocolo: JOIN, POS, READY, PLAY, FIRE, HIT, MISS, SUNK, WIN, LOSE e END.",
          en: "Standardized protocol vocabulary: JOIN, POS, READY, PLAY, FIRE, HIT, MISS, SUNK, WIN, LOSE, and END.",
        },
      },
    ],
    detailedDescription: [
      {
        pt: "Desenvolvido como projeto final da disciplina de Laboratório de Programação Avançada na UFAM, o sistema explora a construção de software de baixo nível em ambiente POSIX/Linux.",
        en: "Engineered as the capstone project for the Advanced Programming Lab course at UFAM, highlighting low-level systems programming in POSIX/Linux environments.",
      },
      {
        pt: "O servidor aguarda conexões simultâneas via sockets TCP. Ao conectar dois competidores, aloca recursos em memória e dispara threads independentes para cada conexão. A integridade dos tabuleiros e da alternância de turnos é rigorosamente protegida por exclusão mútua.",
        en: "The server listens for incoming TCP socket connections. Upon pairing two players, it spawns dedicated threads. Turn alternating and board updates are strictly guarded against race conditions using mutex primitives.",
      },
      {
        pt: "O protocolo textual customizado permite uma separação limpa entre a interface do cliente e as regras de negócio mantidas no servidor, garantindo que nenhum cliente possa burlar regras de posicionamento ou disparar fora de seu turno.",
        en: "The custom ASCII protocol decouples client CLI rendering from server authority, enforcing game invariants and preventing illegal out-of-turn actions.",
      },
    ],
  },
  {
    id: "analise-dados-enem-2019",
    title: "Análise de Dados do ENEM 2019",
    subtitle: {
      pt: "Processamento, limpeza e exploração de microdados educacionais com Python",
      en: "Data processing, cleaning, and exploratory analysis of Brazilian national exam microdata",
    },
    description: {
      pt: "Processamento e análise exploratória de milhares de registros do ENEM 2019, investigando correlações entre fatores socioeconômicos e desempenho escolar.",
      en: "Data processing and exploratory analysis of thousands of ENEM 2019 records, investigating correlations between socioeconomic metrics and academic scores.",
    },
    academicContext: {
      pt: "Projeto prático de manipulação e análise de dados em ambiente acadêmico",
      en: "Hands-on academic exploratory data analysis project",
    },
    category: {
      pt: "Análise de Dados",
      en: "Data Analysis",
    },
    categoryId: "data-analysis",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook"],
    status: "completed",
    isFeatured: true,
    order: 2,
    image: null,
    githubUrl: null, // SINALIZAÇÃO: Insira o link do seu repositório quando desejar torná-lo público
    demoUrl: null,
    technicalHighlights: [
      {
        pt: "Limpeza, normalização e tratamento de valores ausentes e inconsistências em dataset real de larga escala.",
        en: "Data cleaning, imputation, and normalization of high-volume real-world public microdata.",
      },
      {
        pt: "Agregações e filtragens estatísticas utilizando recursos vetorizados das bibliotecas Pandas e NumPy.",
        en: "Statistical aggregations and vectorised transformations utilizing Pandas and NumPy.",
      },
      {
        pt: "Elaboração de gráficos e visualizações com Matplotlib para comunicar padrões de distribuição de notas e renda.",
        en: "Visual charts and correlation plots generated via Matplotlib to communicate socioeconomic patterns.",
      },
    ],
    detailedDescription: [
      {
        pt: "O projeto utilizou os microdados oficiais do Exame Nacional do Ensino Médio (ENEM) de 2019 para conduzir uma investigação analítica profunda em Python dentro do Jupyter Notebook.",
        en: "Leveraged official microdata from the Brazilian National High School Exam (ENEM 2019) to conduct in-depth statistical exploration in Python via Jupyter Notebooks.",
      },
      {
        pt: "Foram analisadas variáveis como renda familiar per capita, escolaridade dos pais, tipo de escola (pública vs. privada) e seu impacto sobre as notas de Redação e Matemática.",
        en: "Evaluated variables including household income, parental education levels, and school type (public vs. private), mapping their impact on Mathematics and Essay performance.",
      },
    ],
  },
  {
    id: "banco-de-dados-streaming",
    title: "Banco de Dados para Streaming de Filmes",
    subtitle: {
      pt: "Modelagem relacional, diagrama Entidade-Relacionamento e consultas SQL analíticas",
      en: "Relational modeling, Entity-Relationship design, and analytical SQL querying",
    },
    description: {
      pt: "Modelagem e implementação completa de um banco de dados relacional para uma plataforma de streaming, contemplando catálogo, planos, usuários e histórico de reprodução.",
      en: "End-to-end relational database architecture for a movie streaming platform, covering catalog, subscriptions, users, and watch history.",
    },
    academicContext: {
      pt: "Projeto acadêmico de modelagem e implementação de Banco de Dados — UFAM",
      en: "Academic Database Modeling & Implementation Project — UFAM",
    },
    category: {
      pt: "Bancos de Dados",
      en: "Databases",
    },
    categoryId: "database",
    technologies: ["MySQL", "SQL", "Modelagem Relacional", "MER/DER"],
    status: "completed",
    isFeatured: true,
    order: 3,
    image: null,
    githubUrl: null, // SINALIZAÇÃO: Insira o link do seu repositório quando desejar torná-lo público
    demoUrl: null,
    technicalHighlights: [
      {
        pt: "Elaboração do modelo conceitual (MER) e conversão para o modelo relacional normalizado até a 3ª Forma Normal (3FN).",
        en: "Conceptual Entity-Relationship modeling and conversion to a normalized schema up to Third Normal Form (3NF).",
      },
      {
        pt: "Scripts DDL completos para criação de tabelas, chaves primárias, estrangeiras e constraints de integridade referencial.",
        en: "Complete DDL scripts defining tables, primary and foreign keys, indexes, and referential constraints.",
      },
      {
        pt: "Consultas SQL analíticas com JOINs complexos, agrupamentos e funções de agregação para métricas de catálogo e consumo.",
        en: "Analytical SQL queries leveraging multi-table JOINs, subqueries, and window/aggregate metrics for consumption reporting.",
      },
    ],
    detailedDescription: [
      {
        pt: "Projeto focado na aplicação prática dos princípios de bancos de dados relacionais. O modelo estrutura entidades fundamentais como Usuários, Assinaturas, Conteúdos, Gêneros, Avaliações e Sessões de Reprodução.",
        en: "Focused on rigorous relational principles. The schema structures core entities including Users, Subscriptions, Media Content, Genres, Ratings, and Playback Sessions.",
      },
      {
        pt: "Foram desenvolvidas consultas para relatórios operacionais como: títulos mais assistidos por plano de assinatura, média de tempo de reprodução por gênero e faturamento mensal consolidado.",
        en: "Constructed operational queries to extract key indicators: most viewed titles per subscription tier, average watch times per genre, and consolidated monthly revenue.",
      },
    ],
  },
  {
    id: "campo-minado-em-c",
    title: "Campo Minado em C",
    subtitle: {
      pt: "Alocação dinâmica de memória, ponteiros e algoritmo recursivo de preenchimento",
      en: "Dynamic memory allocation, pointers, and recursive flood-fill algorithm",
    },
    description: {
      pt: "Implementação clássica do jogo Campo Minado em C, com gerenciamento manual de memória, manipulação de matrizes via ponteiros e algoritmo recursivo de expansão de células vazias.",
      en: "Classic Minesweeper game implementation in C featuring dynamic memory management, pointer-based matrix manipulation, and recursive flood-fill expansion.",
    },
    academicContext: {
      pt: "Projeto acadêmico de Algoritmos e Estruturas de Dados — UFAM",
      en: "Academic Capstone for Algorithms & Data Structures — UFAM",
    },
    category: {
      pt: "Sistemas & Algoritmos",
      en: "Systems & Algorithms",
    },
    categoryId: "systems-programming",
    technologies: ["C", "Alocação Dinâmica", "Recursividade", "Algoritmos", "Ponteiros"],
    status: "completed",
    isFeatured: false,
    order: 4,
    image: null,
    githubUrl: null, // SINALIZAÇÃO: Insira o link do seu repositório quando desejar torná-lo público
    demoUrl: null,
    technicalHighlights: [
      {
        pt: "Alocação e liberação dinâmica de memória na heap (malloc/free) para tabuleiros de dimensões configuráveis.",
        en: "Heap dynamic memory allocation and cleanup (malloc/free) supporting configurable board dimensions.",
      },
      {
        pt: "Implementação de algoritmo recursivo flood-fill para revelar em cadeia áreas seguras conectadas a células vazias.",
        en: "Recursive flood-fill algorithm to automatically uncover contiguous regions of zero-adjacent mines.",
      },
      {
        pt: "Separação modular entre a representação interna de estado e a renderização em terminal.",
        en: "Modular separation between internal memory representation and clean terminal presentation.",
      },
    ],
    detailedDescription: [
      {
        pt: "O projeto exercita conceitos fundamentais da ciência da computação como gerenciamento direto de ponteiros, prevenção de memory leaks e controle de chamadas recursivas.",
        en: "Exercises core systems programming fundamentals: pointer arithmetic, memory leak prevention, and recursive call bounds.",
      },
    ],
  },
  {
    id: "landing-page-advocacia",
    title: "Landing Page para Escritório de Advocacia",
    subtitle: {
      pt: "Aplicação web moderna desenvolvida com React e Vite para presença digital profissional",
      en: "Modern web application built with React and Vite for legal practice digital presence",
    },
    description: {
      pt: "Desenvolvimento de landing page responsiva para um escritório de advocacia, focada em apresentação institucional, áreas de atuação e canal direto de comunicação com clientes.",
      en: "Responsive web landing page for a law practice, focusing on corporate presentation, practice areas, and direct client communication channels.",
    },
    academicContext: {
      pt: "Projeto prático em desenvolvimento com assistência de ferramentas de IA",
      en: "Active web project developed with AI assistant tooling",
    },
    category: {
      pt: "Desenvolvimento Web",
      en: "Web Development",
    },
    categoryId: "web-development",
    technologies: ["React", "Vite", "JavaScript", "HTML5", "CSS3", "IA no Desenvolvimento"],
    status: "in-progress",
    isFeatured: false,
    order: 5,
    image: null,
    githubUrl: null, // SINALIZAÇÃO: Insira o link do seu repositório quando desejar torná-lo público
    demoUrl: null,
    technicalHighlights: [
      {
        pt: "Projeto em andamento utilizando React e Vite para inicialização e carregamento veloz.",
        en: "Active project leveraging React and Vite for rapid builds and lightweight client bundling.",
      },
      {
        pt: "Foco em arquitetura de componentes modulares e comunicação clara com potenciais clientes.",
        en: "Focus on modular component architecture and professional communication with prospective clients.",
      },
      {
        pt: "Utilização de ferramentas de IA como apoio técnico na prototipagem e refinamento de código.",
        en: "Practical application of AI-assisted engineering for prototyping, styling, and code refinement.",
      },
    ],
    detailedDescription: [
      {
        pt: "Projeto em fase ativa de desenvolvimento. Tem como objetivo criar uma interface sóbria, elegante e informativa para apresentar os serviços e a equipe de um escritório jurídico.",
        en: "Project currently under active development. Its goal is to provide a clean, accessible, and professional portal presenting legal services and contact channels.",
      },
    ],
  },
];
