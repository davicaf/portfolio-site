import { Profile } from "@/types";

export const profileData: Profile = {
  name: "Davi Ferreira",
  preferredName: "Davi Ferreira",
  title: {
    pt: "Estudante de Engenharia de Software",
    en: "Software Engineering Student",
  },
  headline: {
    pt: "Estudante de Engenharia de Software na UFAM e Estagiário de Processos Digitais na Michelin",
    en: "Software Engineering Student at UFAM & Digital Processes Intern at Michelin",
  },
  status: {
    pt: "Estagiário de Processos Digitais @ Michelin Manaus",
    en: "Digital Processes Intern @ Michelin Manaus",
  },
  positioning: {
    pt: "Estudante de Engenharia de Software na UFAM e estagiário de Processos Digitais na Michelin. Interessado em desenvolvimento de software, sistemas, infraestrutura e tecnologias que resolvem problemas reais.",
    en: "Software Engineering student at UFAM and Digital Processes intern at Michelin. Passionate about software development, systems, infrastructure, and engineering solutions for real-world problems.",
  },
  location: "Manaus, Amazonas, Brasil",
  // SINALIZAÇÃO: Caso utilize outro e-mail profissional, atualize o valor abaixo:
  email: "contato@davicaf.com",
  // SINALIZAÇÃO: Confirme ou atualize seu usuário do GitHub e LinkedIn:
  github: "https://github.com/davicaf",
  linkedin: "https://www.linkedin.com/in/davicfr/",
  socialLinks: [
    { label: "GitHub", url: "https://github.com/davicaf", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/davicfr/", icon: "linkedin" },
    { label: "Email", url: "mailto:contato@davicaf.com", icon: "email" },
  ],
  bio: [
    {
      pt: "Graduando em Engenharia de Software pelo Instituto de Computação (IComp) da Universidade Federal do Amazonas (UFAM) e atualmente estagiário de Processos Digitais na planta industrial da Michelin em Manaus.",
      en: "Software Engineering undergraduate at the Institute of Computing (IComp), Federal University of Amazonas (UFAM), currently working as a Digital Processes Intern at the Michelin industrial plant in Manaus.",
    },
    {
      pt: "Minha experiência profissional envolve o desenvolvimento de aplicações práticas para a fábrica (como sistemas em React e Power Apps), levantamento de requisitos com operadores e inspetores, digitalização de processos operacionais e estruturação de dados relacionais para garantir integridade e rastreabilidade na manufatura.",
      en: "My professional practice centers on developing mission-critical shop-floor applications (including React and Power Apps solutions), requirement gathering with operators and quality inspectors, process digitalization, and relational data modeling to ensure data integrity and manufacturing traceability.",
    },
    {
      pt: "No âmbito acadêmico, foco no rigor dos fundamentos da computação: programação em C, arquitetura cliente-servidor com sockets TCP, controle de concorrência com pthreads/mutexes, modelagem de bancos de dados relacionais e análise exploratória de dados com Python.",
      en: "Academically, I focus on solid computer science foundations: C programming, client-server architectures with TCP sockets, concurrency control with pthreads/mutexes, relational database modeling, and exploratory data analysis with Python.",
    },
  ],
  resumeUrl: {
    pt: "/resume-pt.pdf",
    en: "/resume-en.pdf",
  },
};
