<!-- Banner do Projeto (Você pode usar uma das fotos do design como banner) -->
<div align="center">
  <img src="./design/Banner/img.png" alt="Banner Jaostreat" width="40%">
</div>

<h1 align="center">Jaostreat E-commerce</h1>

<p align="center">
  <strong>"Sem risco. Sem história."</strong><br>
  Mais que um nome, um estilo de vida. Jaostreat é sobre atitude, liberdade e autenticidade.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA">
</p>


---

## 📖 Sobre o Projeto

A **Jaostreat** é uma loja virtual desenvolvida como projeto prático para o curso **Técnico em Desenvolvimento de Sistemas** na instituição **Proz Venda Nova**. 

O objetivo do projeto é criar uma experiência de compra imersiva para uma marca de roupas streetwear, focando em uma interface moderna, responsiva e de fácil usabilidade. O sistema conta com catálogo de produtos, carrinho de compras e finalização de pedido diretamente pelo WhatsApp.
<br></br>
**[Ver projeto publicado: Jaostreat](https://jaostreat.netlify.app/)**

## 🚀 Funcionalidades

- [x] **Catálogo de Produtos:** Exibição de conjuntos, camisas boxy e acessórios com preços e parcelamento.
- [x] **Carrinho de Compras:** Adição, remoção e alteração de quantidade de itens.
- [x] **Checkout via WhatsApp:** Integração que envia os dados do pedido e do cliente diretamente para o WhatsApp da loja.
- [x] **Lookbook:** Seção de inspiração com ensaios fotográficos da marca.
- [x] **Sobre a Firma:** Página institucional contando a história e os valores da marca.
- [x] **Feedbacks:** Seção de avaliações de clientes (integração com Google Reviews).
- [x] **Design Responsivo:** Layout adaptável para celulares, tablets e desktops.
- [x] **PWA (Progressive Web App):** Aplicação web progressiva para instalação em dispositivos móveis e acesso offline. *(Em desenvolvimento)*

## 🎨 Layout e Design

O design do projeto foi pensado para refletir a identidade visual da marca: cores escuras, tipografia impactante e fotografias em preto e branco. 

Você pode conferir todos os mockups e protótipos na pasta [`/design`](./design).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica do conteúdo.
- **CSS3:** Estilização, animações e design responsivo (Flexbox/Grid).
- **JavaScript (ES6+):** Lógica do carrinho de compras, manipulação do DOM e interatividade.
- **PWA:** Service Workers e Web App Manifest para comportamento de aplicativo nativo.
- **Git & GitHub:** Versionamento de código e hospedagem.

## 📄 Licenças

- **Código-fonte:** licenciado sob a [Apache License 2.0](LICENSE).
- **Bibliotecas JavaScript:** distribuídas conforme suas respectivas licenças de código aberto.

Consulte os arquivos `LICENSE` para obter mais informações.

## 📂 Estrutura de Pastas

```text
jaostreat-ecommerce/
├── design/                     # Mockups e protótipos visuais do projeto
│   ├── Banner/
│   │   └── img.png
│   ├── 01-home-page.png
│   ├── 02-menu-navegacao.png
│   ├── 03-carrinho-checkout.png
│   ├── 04-lookbook.png
│   ├── 05-bastidores.png
│   ├── 06-manifesto-marca.png
│   ├── 07-sobre-a-firma.png
│   ├── 08-feedbacks-clientes.png
│   ├── 09-produtos.png
│   ├── 10-produtos-2.png
│   ├── 11-mais-vendidos.png
│   ├── 12-mais-vendidos-2.png
│   └── 13-footer.png
│
├── public/                     # Código-fonte do site (Front-end)
│   ├── assets/
│   │   ├── css/                # Folhas de estilo
│   │   │   ├── feedbacks.css
│   │   │   ├── index.css
│   │   │   ├── lookbook.css
│   │   │   ├── sobre.css
│   │   │   └── whatsapp_global.css
│   │   ├── favicon/            # Ícones do site
│   │   ├── icons/              # Ícones gerais
│   │   └── js/                 # Scripts e lógica
│   │       ├── manifest_aplicativo_PWA/  # Configuração do PWA
│   │       │   ├── icons_manifest_PWA/
│   │       │   └── manifest_archive.json
│   │       ├── service_worker/ # Lógica offline do PWA
│   │       │   └── service-worker.js
│   │       ├── feedback.js     # Script da página de feedbacks
│   │       └── index.js        # Script principal (Home)
│   │
│   ├── feedbacks.html          # Página de avaliações
│   ├── index.html              # Página inicial
│   ├── lookbook.html           # Página de inspiração
│   └── sobre.html              # Página institucional
│
├── LICENSE
└── README.md
```

## 💻 Como rodar o projeto localmente

### Siga os passos abaixo para executar o projeto na sua máquina:

1. **Clone este repositório:**
   ```
   git clone https://github.com/GabrielDS02/jaostreat-ecommerce.git
---

2. **Navegue até a pasta do projeto:**
   ```bash
   cd jaostreat-ecommerce/public/index.html
Abra o arquivo index.html no seu navegador:
Você pode simplesmente dar um duplo clique no arquivo index.html, ou, para uma melhor experiência de desenvolvimento, utilize uma extensão como o Live Server no VS Code.

👨‍💻 Autor
Desenvolvido por GabrielDS02.

🏫 Agradecimentos
À Proz Venda Nova e a todos os professores do curso Técnico em Desenvolvimento de Sistemas pelo suporte e orientação.
