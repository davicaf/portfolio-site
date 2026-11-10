#!/usr/bin/env python3
import os

def create_resume_pdf(filename: str, lang: str = "pt") -> None:
    if lang == "pt":
        title = "Davi Ferreira"
        subtitle = "Estudante de Engenharia de Software | UFAM - IComp"
        sub2 = "Estagiario de Processos Digitais - Michelin Manaus"
        contact = "Manaus, AM - Brasil | Email: contato@davicaf.com | github.com/davicaf | linkedin.com/in/davicfr"
        
        sections = [
            ("RESUMO PROFISSIONAL", [
                "Estudante de Engenharia de Software na Universidade Federal do Amazonas (UFAM) e estagiario de Processos",
                "Digitais na Michelin. Atuacao no desenvolvimento de aplicacoes praticas para chao de fabrica (React,",
                "Power Apps e Dataverse), levantamento de requisitos operacionais, digitalizacao de rotinas industriais e",
                "estruturacao de dados relacionais para integridade e rastreabilidade na manufatura."
            ]),
            ("EXPERIENCIA PROFISSIONAL", [
                "Michelin - Estagiario de Processos Digitais (Janeiro de 2026 - Presente | Manaus, AM)",
                "- Aplicativo de Apontamento de Paradas de Prensa: Desenvolvido em React com Microsoft Dataverse,",
                "  utilizado em setor fabril com 48 prensas. Conducao de levantamento de requisitos e testes com operadores.",
                "  Substituicao de planilhas manuais por tabelas relacionais com alto ganho de confiabilidade.",
                "- Aplicativo de Inspecao de Pneus: Desenvolvido em Power Apps para controle de qualidade e refugo.",
                "  Integracao logica que resolve modelo e prensa a partir do molde, garantindo rastreabilidade fabril.",
                "- Automacoes com Power Automate, administracao de governanca no SharePoint e onboarding digital."
            ]),
            ("FORMACAO ACADEMICA", [
                "Universidade Federal do Amazonas (UFAM) - Instituto de Computacao (IComp)",
                "Bacharelado em Engenharia de Software (2024 - Em andamento | Manaus, AM)",
                "- Engenharia de Software e Desenvolvimento: Fundamentos de ES, ES I e II, POO, Verificacao e Validacao, Gerencia de Projetos.",
                "- Sistemas e Infraestrutura: Sistemas Operacionais I, Redes de Computadores, Intro. a Org. de Computadores, Lab. Prog. Avancada.",
                "- Dados e Algoritmos: AED I e II, Intro. a Banco de Dados, Ciencia de Dados, Linguagens de Programacao, Estatistica.",
                "- Em andamento (2026.2): Projeto e Analise de Algoritmos, Metodologia Cientifica, Ciberseguranca, Proc. Desenv. Software, Gerencia Config."
            ]),
            ("PROJETOS EM DESTAQUE", [
                "- Batalha Naval Multicliente com Sockets TCP (C, pthreads, mutex, Makefile, Linux):",
                "  Servidor concorrente multithread com protocolo textual proprio para 2 clientes simultaneos (UFAM 2025.1).",
                "- Analise de Dados do ENEM 2019 (Python, Pandas, NumPy, Matplotlib, Jupyter Notebook):",
                "  Processamento, limpeza e analise exploratoria de microdados socioeconomicos e desempenho escolar.",
                "- Banco de Dados de Streaming (MySQL, Modelagem Relacional 3FN, Scripts DDL/DML, Consultas SQL).",
                "- Campo Minado em C (Alocacao Dinamica, Algoritmo Recursivo Flood-Fill, Matrizes).",
                "- Landing Page para Escritorio de Advocacia (React, Vite - Projeto em desenvolvimento com apoio de IA)."
            ]),
            ("COMPETENCIAS TECNICAS", [
                "- Linguagens: C/C++, Python, JavaScript, SQL, Java.",
                "- Desenvolvimento Web: React, HTML5, CSS3, Vite, Next.js, Tailwind CSS.",
                "- Dados e Bancos: MySQL, Modelagem Relacional (MER/DER), Microsoft Dataverse, Pandas, NumPy, Matplotlib.",
                "- Plataformas Corporativas: Power Apps, Power Automate, SharePoint, Git, GitHub, Linux, Jupyter.",
                "- Conceitos: Programacao Concorrente, Sockets TCP, Threads/Mutex, Estruturas de Dados, Algoritmos."
            ])
        ]
    else:
        title = "Davi Ferreira"
        subtitle = "Software Engineering Student | UFAM - IComp"
        sub2 = "Digital Processes Intern - Michelin Manaus"
        contact = "Manaus, AM - Brazil | Email: contato@davicaf.com | github.com/davicaf | linkedin.com/in/davicfr"
        
        sections = [
            ("PROFESSIONAL SUMMARY", [
                "Software Engineering undergraduate at the Federal University of Amazonas (UFAM) and Digital Processes Intern",
                "at Michelin. Proven experience developing shop-floor industrial applications (React, Power Apps, Dataverse),",
                "gathering operator requirements, automating enterprise workflows, and structuring relational datasets",
                "for manufacturing reliability and end-to-end traceability."
            ]),
            ("PROFESSIONAL EXPERIENCE", [
                "Michelin - Digital Processes Intern (January 2026 - Present | Manaus, Brazil)",
                "- Industrial Press Downtime Application: Built with React and Microsoft Dataverse across 48 curing presses.",
                "  Conducted user research and usability testing with operators, eliminating manual paper and spreadsheet logs.",
                "- Tire Quality Inspection Application: Built with Power Apps for scrap reporting and defect inspection.",
                "  Engineered logical integration linking mold identifiers directly to press production records for traceability.",
                "- Built event-driven automations with Power Automate and managed SharePoint enterprise access governance."
            ]),
            ("EDUCATION", [
                "Federal University of Amazonas (UFAM) - Institute of Computing (IComp)",
                "B.S. in Software Engineering (2024 - In progress | Manaus, Brazil)",
                "- Software Engineering & Dev: Fundamentals of SE, SE I & II, OOP, Software Verification & Validation, Project Management.",
                "- Systems & Infrastructure: Operating Systems I, Computer Networks, Intro to Computer Organization, Advanced Programming Lab.",
                "- Data & Algorithms: Algorithms & Data Structures I & II, Intro to Databases, Data Science, Programming Languages, Statistics.",
                "- Ongoing (Term 2026.2): Design & Analysis of Algorithms, Scientific Methodology, Cybersecurity, Software Processes, Config Management."
            ]),
            ("KEY PROJECTS", [
                "- Multithreaded TCP Socket Battleship in C (C, POSIX pthreads, mutex locks, Makefile, Linux):",
                "  Concurrent client-server architecture with custom text protocol arbitrating matches between 2 clients (UFAM 2025.1).",
                "- ENEM 2019 National Exam Data Analysis (Python, Pandas, NumPy, Matplotlib, Jupyter Notebook):",
                "  Exploratory data analysis correlating socioeconomic indicators with academic scores on large datasets.",
                "- Movie Streaming Relational Database (MySQL, 3NF Relational Modeling, DDL/DML, Analytical Queries).",
                "- Minesweeper in C (Dynamic Heap Memory Allocation, Recursive Flood-Fill Algorithm, Pointer Matrices).",
                "- Law Practice Web Landing Page (React, Vite - Active development with AI assistance)."
            ]),
            ("TECHNICAL SKILLS", [
                "- Languages: C/C++, Python, JavaScript, SQL, Java.",
                "- Web Engineering: React, HTML5, CSS3, Vite, Next.js, Tailwind CSS.",
                "- Databases & Data: MySQL, Relational Modeling (ERD), Microsoft Dataverse, Pandas, NumPy, Matplotlib.",
                "- Enterprise Platforms: Power Apps, Power Automate, SharePoint, Git, GitHub, Linux, Jupyter Notebook.",
                "- Core CS: Concurrent Programming, TCP Sockets, Threads/Mutex, Data Structures, Algorithms."
            ])
        ]

    ops = []
    ops.append("BT /F2 18 Tf 40 800 Td (" + title + ") Tj ET")
    ops.append("BT /F1 10 Tf 40 782 Td (" + subtitle + " - " + sub2 + ") Tj ET")
    ops.append("BT /F1 8 Tf 40 768 Td (" + contact + ") Tj ET")
    ops.append("0.75 w 0.2 0.4 0.8 RG 40 758 m 555 758 l S")
    
    y = 742
    for sec_title, sec_lines in sections:
        ops.append(f"BT /F2 11 Tf 0.1 0.2 0.5 rg 40 {y} Td ({sec_title}) Tj ET")
        y -= 3
        ops.append(f"0.5 w 0.8 0.8 0.8 RG 40 {y} m 555 {y} l S")
        y -= 12
        
        ops.append("0 0 0 rg")
        for line in sec_lines:
            safe_line = line.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")
            is_bold = line.startswith("-") or ("(" in line and "Present" in line) or ("(" in line and "Presente" in line) or ("UFAM" in line and "Universidade" in line) or ("Federal University" in line)
            font = "/F2 8.5 Tf" if is_bold else "/F1 8.5 Tf"
            ops.append(f"BT {font} 40 {y} Td ({safe_line}) Tj ET")
            y -= 11.5
        y -= 7

    stream_content = "\n".join(ops)
    stream_bytes = stream_content.encode("latin-1", "replace")
    
    objs = [
        b"1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
        b"2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
        b"3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>\nendobj\n",
        f"4 0 obj\n<< /Length {len(stream_bytes)} >>\nstream\n".encode() + stream_bytes + b"\nendstream\nendobj\n",
        b"5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
        b"6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n"
    ]
    
    pdf = b"%PDF-1.4\n"
    offsets = []
    for obj in objs:
        offsets.append(len(pdf))
        pdf += obj
    
    startxref = len(pdf)
    pdf += b"xref\n0 7\n0000000000 65535 f \n"
    for offset in offsets:
        pdf += f"{offset:010d} 00000 n \n".encode()
    pdf += f"trailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n{startxref}\n%%EOF\n".encode()
    
    os.makedirs(os.path.dirname(filename) or ".", exist_ok=True)
    with open(filename, "wb") as f:
        f.write(pdf)
    print(f"Generated {filename} ({len(pdf)} bytes)")

if __name__ == "__main__":
    create_resume_pdf("public/resume-pt.pdf", "pt")
    create_resume_pdf("public/resume-en.pdf", "en")
