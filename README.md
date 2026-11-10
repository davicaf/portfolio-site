# Portfólio Profissional — Davi Ferreira

> Portfólio técnico e pessoal de **Davi Ferreira**, estudante de Engenharia de Software na Universidade Federal do Amazonas (**UFAM - IComp**) e Estagiário de Processos Digitais na **Michelin Manaus**.

Este projeto foi projetado com foco em **altíssimo desempenho, acessibilidade estrita, SEO internacional e separação rigorosa de responsabilidades**, unindo a solidez dos fundamentos da computação à maturidade corporativa e engenharia de software aplicada à indústria.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server & Client Components)
- **Biblioteca de Interface:** [React 19](https://react.dev/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) (Design Tokens nativos e variáveis CSS)
- **Iconografia:** [Lucide Icons](https://lucide.dev/)
- **Tema:** [next-themes](https://github.com/pacocoursey/next-themes) (Suporte a Dark Mode e Light Mode sem flash de tela)
- **Gerador de PDF:** Python (Geração vetorial de currículos bilíngues em PDF)

---

## 🏛️ Como Foi Feito — Arquitetura e Decisões de Engenharia

### 1. Internacionalização de Baixo Overhead (i18n PT-BR / EN)
- Em vez de depender de bibliotecas externas pesadas que adicionam overhead de runtime e causam *hydration mismatch*, a aplicação implementa **rotas estáticas internacionalizadas** (`/pt` e `/en`).
- A raiz `/` utiliza um **proxy inteligente** (`src/proxy.ts`), seguindo as convenções oficiais do Next.js 16, para inspecionar os cabeçalhos `Accept-Language` e cookies, redirecionando o visitante instantaneamente para o idioma de sua preferência.
- Todos os textos e dicionários de interface são estritamente tipados com TypeScript, garantindo integridade semântica em ambos os idiomas em tempo de compilação.

### 2. Arquitetura Orientada a Dados (Data-Driven Architecture)
- Todo o conteúdo de experiências industriais (Michelin), projetos acadêmicos (UFAM), formação, habilidades e perfil reside em estruturas tipadas dentro de `src/data/`.
- Os componentes visuais da camada `src/components/` operam como apresentadores puros e desacoplados, consumindo os contratos definidos em `src/types/`.

### 3. Performance e Otimização Estática (SSG & Prerendering)
- Todas as páginas principais e estudos de caso de projetos (`/projects/[id]`) são compiladas estaticamente em tempo de build (**Static Site Generation**).
- Zero chamadas a APIs lentas em runtime, eliminando latência e garantindo pontuação máxima em métricas do Google Lighthouse (Core Web Vitals).

### 4. Acessibilidade (a11y) e Usabilidade
- Estruturado em conformidade com as diretrizes **WCAG 2.1 AA**.
- Inclui link de atalho para conteúdo principal (*Skip to Content*), semântica HTML estruturada (`<header>`, `<main>`, `<section>`, `<footer>`), foco visível para navegação por teclado e suporte a leitores de tela com atributos ARIA adequados.

### 5. SEO Técnico e Rastreabilidade
- Geração automatizada de [Sitemap XML](src/app/sitemap.ts) e [Robots.txt](src/app/robots.ts) com suporte a tags `hreflang` para indexação em múltiplos países.
- Metadados dinâmicos e cartões OpenGraph configurados para compartilhamento em plataformas como LinkedIn e X/Twitter.

### 6. Pipeline de Geração de Currículo (PDF)
- O projeto inclui um script em Python padrão (`scripts/generate-resumes.py`), dispensando dependências pesadas de headless browser.
- Gera currículos em PDF vetoriais, enxutos e estritamente formatados em folha A4 em português (`public/resume-pt.pdf`) e em inglês (`public/resume-en.pdf`).

---

## 📂 Estrutura do Projeto

```text
portfolio/
├── docs/                     # Documentação de apoio
├── public/                   # Arquivos estáticos (PDFs de currículo, ícones, imagens)
│   ├── resume-pt.pdf         # Currículo em Português
│   └── resume-en.pdf         # Resume em Inglês
├── scripts/
│   └── generate-resumes.py   # Script gerador dos currículos em PDF
├── src/
│   ├── app/                  # App Router do Next.js
│   │   ├── [locale]/         # Rotas bilíngues (/pt e /en)
│   │   │   ├── projects/[id]/# Páginas dinâmicas de estudo de caso
│   │   │   ├── layout.tsx    # Layout da rota localizada
│   │   │   └── page.tsx      # Página inicial
│   │   ├── globals.css       # Estilos globais e tokens Tailwind v4
│   │   ├── layout.tsx        # Root layout, fontes Geist e providers
│   │   ├── robots.ts         # Geração do robots.txt
│   │   └── sitemap.ts        # Geração do sitemap.xml
│   ├── components/           # Componentes modulares reutilizáveis
│   │   ├── common/           # Ícones, ThemeToggle, LanguageToggle, SkipLink
│   │   ├── layout/           # Header e Footer
│   │   ├── sections/         # Hero, About, Experience, Projects, Skills, Contact
│   │   └── ui/               # Componentes visuais básicos (Card, Badge)
│   ├── context/              # LanguageContext e gerenciamento de estado cliente
│   ├── data/                 # Camada de dados desacoplada (perfil, projetos, etc.)
│   ├── lib/                  # Utilitários de classes e hooks auxiliares
│   ├── proxy.ts              # Proxy de redirecionamento de idioma (Next.js 16)
│   └── types/                # Definições de tipos e interfaces TypeScript
├── .env.example              # Exemplo de variáveis de ambiente
├── .gitignore                # Arquivos e pastas ignorados pelo Git
└── package.json              # Dependências e scripts do projeto
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** (versão 20 ou superior recomendada)
- **npm** (ou **pnpm** / **yarn**)
- **Git**
- **Python 3** (apenas se for regenerar os arquivos PDF)

### Passo a Passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/davicaf/portfolio-site.git
   cd portfolio-site
   ```

2. **Configurar variáveis de ambiente (opcional):**
   ```bash
   cp .env.example .env.local
   ```

3. **Instalar as dependências:**
   ```bash
   npm install
   ```

4. **Executar em modo de desenvolvimento:**
   ```bash
   npm run dev
   ```
   Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor local de desenvolvimento com Turbopack |
| `npm run build` | Compila o projeto e gera as páginas estáticas para produção |
| `npm start` | Inicia o servidor Node.js com a versão otimizada de produção |
| `npm run lint` | Executa a validação de código com ESLint |
| `npm run build:pdf` | Executa o script Python para regenerar os currículos em PDF |
| `npm run build:og` | Executa o script Python para gerar a imagem Open Graph (`public/og-image.png`) |

---

## 👤 Autor

**Davi Ferreira**  
Estudante de Engenharia de Software @ UFAM • Estagiário de Processos Digitais @ Michelin  
- **LinkedIn:** [linkedin.com/in/davicfr](https://www.linkedin.com/in/davicfr/)  
- **GitHub:** [github.com/davicaf](https://github.com/davicaf)  
- **E-mail:** [contato@davicaf.com](mailto:contato@davicaf.com)  

---

## 📄 Licença

Este projeto é de código aberto sob a licença [MIT](LICENSE).
