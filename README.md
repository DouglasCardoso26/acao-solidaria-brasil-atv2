# 🌎 Ação Solidária Brasil — Atividade 2 (CSS3 e Responsividade)

## 🎯 Objetivo da Atividade
Esta segunda entrega tem como foco a **aplicação de CSS3** para transformar a estrutura HTML da primeira etapa em uma interface visual **profissional, responsiva e acessível**.  
O projeto demonstra domínio de **layouts modernos**, **sistemas de design** e **técnicas de estilização**.

---

## 🧩 Estrutura do Projeto

```bash
AcaoSolidaria_ONG_Atividade2/
│
├── index.html              → Página inicial com apresentação e seções principais
├── projetos.html           → Galeria de projetos e frentes de atuação
├── cadastro.html           → Formulário de voluntariado e doações
│
├── css/
│   ├── design-system.css   → Variáveis de cores, espaçamentos e tipografia (Design System)
│   └── style.css           → Estilos gerais + media queries de responsividade
│
├── js/
│   ├── menu.js             → Controle do menu hambúrguer e submenu acessível
│   ├── form.js             → Feedback visual no envio do formulário
│   └── masks.js            → Máscaras de CPF, CEP e telefone
│
└── assets/
    └── media/              → Imagens ilustrativas (capa e projetos)


---

## ⚙️ Tecnologias Utilizadas
- **HTML5** – Estrutura semântica e acessível  
- **CSS3 (Flexbox e Grid)** – Layouts responsivos e estilização moderna  
- **JavaScript** – Interatividade do menu e validações do formulário  

---

## 🧱 Especificações Técnicas Atendidas

### 🎨 Sistema de Design
- Uso de **variáveis CSS** (`:root`) para cores, espaçamentos e tipografia  
- Paleta com **8 tons** (primárias, secundárias e neutras)  
- Escalas de espaçamento (8px a 64px) e fontes (12px a 36px)  
- Estrutura modular: `design-system.css` + `style.css`

### 📱 Layouts Responsivos
- Layout com **Flexbox e Grid** em seções principais  
- **5 breakpoints** definidos via media queries  
- **Galeria de projetos** ajustável a qualquer largura de tela  

### 🧭 Navegação Interativa
- **Menu principal** com submenu “Projetos”  
- **Menu mobile (hambúrguer)** com abertura via JavaScript  
- Estrutura acessível (`aria-expanded`, `aria-haspopup`)

### 💬 Componentes de Interface
- **Cards responsivos** e botões com estados (`hover`, `focus`, `active`)  
- **Formulário validado** e com mensagem de sucesso automática  
- **Badges e subtítulos** para categorização dos projetos  

---

## 💡 Como Testar
1. Abra o arquivo `index.html` em um navegador.  
2. Redimensione a janela ou acesse pelo celular:
   - O menu hambúrguer ☰ deve abrir os links de navegação.  
   - As imagens dos projetos se adaptam ao tamanho da tela.  
3. Acesse `cadastro.html`:
   - Preencha os campos e clique em **Enviar**.  
   - Uma faixa verde de sucesso será exibida por 4 segundos.  
   - As máscaras de CPF, CEP e telefone são aplicadas automaticamente.  

---

## 👨‍💻 Autor
**Douglas Cardoso**  
Projeto desenvolvido para fins acadêmicos — *Atividade 2 de Desenvolvimento Web (CSS3 e Responsividade)*  
Ano/Semestre: *2025/2*

---

