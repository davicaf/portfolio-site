# Guia de Manutenção Interna — Portfólio

Este documento serve como referência rápida para o autor atualizar dados e conteúdos do portfólio.

---

## 1. Adicionar um Novo Projeto
Abra `src/data/projects.ts` e insira um novo item na lista `projectsData`:
- `id`: Slug identificador único (usado na URL `/projects/[id]`).
- `title` e `subtitle`: Título e subtítulo bilíngues.
- `description`: Resumo conciso para o card principal.
- `technologies`: Array com as tecnologias empregadas.
- `academicContext`: Contexto acadêmico ou profissional.
- `technicalHighlights`: Destaques técnicos de arquitetura e implementação.
- `isFeatured`: `true` para exibir na página inicial.
- `githubUrl` / `demoUrl`: Links externos ou `null`.

---

## 2. Atualizar Experiência Profissional
Abra `src/data/experience.ts`:
- Adicione novos aplicativos ou sistemas em `keyProjects`.
- Inclua novos aprendizados ou atividades em `otherActivities`.

---

## 3. Adicionar Habilidades Técnicas
Abra `src/data/skills.ts`:
- Localize a categoria correspondente e adicione a tecnologia com descrição de aplicação prática.

---

## 4. Atualizar Formação Acadêmica
Abra `src/data/education.ts`:
- Atualize disciplinas cursadas em `completedCourses` ou o semestre atual em `ongoingSemester`.

---

## 5. Informações de Contato e Perfil
Abra `src/data/profile.ts`:
- Atualize `email`, `github`, `linkedin` ou textos de posicionamento/bio.

---

## 6. Regenerar Currículo em PDF
Após alterar informações acadêmicas ou profissionais, execute:
```bash
npm run build:pdf
```
Os arquivos gerados são salvos em `public/resume-pt.pdf` e `public/resume-en.pdf`.
