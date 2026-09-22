(() => {
    "use strict";

    const WHATSAPP_NUMBER = "553173083040";
    const STORAGE_KEY = "jaostreat-cart-v2";

    const products = [
        {
            id: "camiseta-void",
            name: "Camiseta Boxy Void",
            category: "Camisetas",
            price: 154.9,
            installments: "12x de R$ 15,93",
            badge: "Últimas unidades",
            sizes: ["P", "M", "G", "GG"],
            color: "Preto",
            image: "https://images.pexels.com/photos/6046205/pexels-photo-6046205.jpeg?auto=compress&cs=tinysrgb&w=1200",
            imageAlt: "Camiseta preta em composição de moda",
            secondaryImage: "https://images.pexels.com/photos/9286995/pexels-photo-9286995.jpeg?auto=compress&cs=tinysrgb&w=1200",
            description: "Modelagem boxy ampla, ombros deslocados e malha encorpada para um caimento estruturado. Uma peça direta, feita para atravessar a rotina sem perder presença.",
            details: ["Malha premium 100% algodão", "Modelagem boxy oversized", "Gola canelada reforçada", "Estampa frontal de alta definição"],
            featured: true,
            newest: true
        },
        {
            id: "moletom-nocturne",
            name: "Moletom Nocturne",
            category: "Moletons",
            price: 289.9,
            installments: "12x de R$ 29,80",
            badge: "Mais vendido",
            sizes: ["P", "M", "G", "GG"],
            color: "Preto",
            image: "https://images.pexels.com/photos/30095394/pexels-photo-30095394/free-photo-of-fashionable-young-man-in-black-hoodie.jpeg?auto=compress&cs=tinysrgb&w=1200",
            imageAlt: "Modelo usando moletom preto",
            secondaryImage: "https://images.pexels.com/photos/6963943/pexels-photo-6963943.jpeg?auto=compress&cs=tinysrgb&w=1200",
            description: "Moletom pesado com capuz duplo e shape relaxado. O acabamento interno macio e a construção robusta entregam conforto para noites longas.",
            details: ["Moletom 3 cabos", "Capuz duplo estruturado", "Punhos e barra canelados", "Bolso canguru amplo"],
            featured: true,
            newest: false
        },
        {
            id: "jaqueta-eclipse",
            name: "Jaqueta Eclipse",
            category: "Jaquetas",
            price: 349.9,
            installments: "12x de R$ 35,97",
            badge: "Drop 02",
            sizes: ["M", "G", "GG"],
            color: "Grafite",
            image: "https://images.pexels.com/photos/32430590/pexels-photo-32430590/free-photo-of-urban-fashion-portrait-stylish-black-hoodie.jpeg?auto=compress&cs=tinysrgb&w=1200",
            imageAlt: "Modelo com jaqueta escura em cenário urbano",
            secondaryImage: "https://images.pexels.com/photos/28701959/pexels-photo-28701959/free-photo-of-close-up-of-person-wearing-black-hoodie.jpeg?auto=compress&cs=tinysrgb&w=1200",
            description: "Camada externa leve com acabamento fosco, gola alta e recortes funcionais. Criada para acompanhar mudanças de clima e de ritmo.",
            details: ["Tecido externo resistente", "Forro respirável", "Bolsos laterais com zíper", "Ajuste interno na barra"],
            featured: true,
            newest: true
        },
        {
            id: "conjunto-signal",
            name: "Conjunto Signal 1.0",
            category: "Conjuntos",
            price: 267.9,
            installments: "12x de R$ 27,56",
            badge: "Última peça",
            sizes: ["P", "M", "G"],
            color: "Preto",
            image: "https://images.pexels.com/photos/9286995/pexels-photo-9286995.jpeg?auto=compress&cs=tinysrgb&w=1200",
            imageAlt: "Modelo com conjunto streetwear preto",
            secondaryImage: "https://images.pexels.com/photos/33527954/pexels-photo-33527954.jpeg?auto=compress&cs=tinysrgb&w=1200",
            description: "Conjunto coordenado de duas peças, com proporções amplas e linhas limpas. Use completo ou separe as peças para multiplicar as combinações.",
            details: ["Duas peças coordenadas", "Cintura ajustável", "Bolsos funcionais", "Caimento amplo unissex"],
            featured: true,
            newest: false
        },
        {
            id: "camiseta-ruptura",
            name: "Camiseta Ruptura",
            category: "Camisetas",
            price: 149.9,
            installments: "12x de R$ 15,41",
            badge: "Novo",
            sizes: ["P", "M", "G", "GG"],
            color: "Off-white",
            image: "https://images.pexels.com/photos/15914119/pexels-photo-15914119.jpeg?auto=compress&cs=tinysrgb&w=1200",
            imageAlt: "Modelo com camiseta em ensaio de moda",
            secondaryImage: "https://images.pexels.com/photos/34046583/pexels-photo-34046583.jpeg?auto=compress&cs=tinysrgb&w=1200",
            description: "T-shirt de toque macio e shape largo, com contraste pensado para quebrar a paleta escura do drop sem abandonar a identidade da marca.",
            details: ["Algodão penteado", "Shape oversized", "Costura reforçada", "Tingimento de baixo impacto"],
            featured: false,
            newest: true
        },
        {
            id: "calca-axis",
            name: "Calça Axis Cargo",
            category: "Calças",
            price: 239.9,
            installments: "12x de R$ 24,67",
            badge: "Restam 3",
            sizes: ["38", "40", "42", "44"],
            color: "Preto",
            image: "https://images.pexels.com/photos/3093998/pexels-photo-3093998.jpeg?auto=compress&cs=tinysrgb&w=1200",
            imageAlt: "Look streetwear escuro com calça ampla",
            secondaryImage: "https://images.pexels.com/photos/9125755/pexels-photo-9125755.jpeg?auto=compress&cs=tinysrgb&w=1200",
            description: "Cargo de perna ampla com bolsos utilitários e regulagem na barra. Construção confortável para uso diário e presença de sobra.",
            details: ["Sarja encorpada", "Seis bolsos funcionais", "Regulagem na barra", "Cintura média"],
            featured: false,
            newest: true
        },
        {
            id: "moletom-static",
            name: "Moletom Static",
            category: "Moletons",
            price: 279.9,
            installments: "12x de R$ 28,77",
            badge: "Exclusivo online",
            sizes: ["P", "M", "G"],
            color: "Chumbo",
            image: "https://images.pexels.com/photos/3894534/pexels-photo-3894534.jpeg?auto=compress&cs=tinysrgb&w=1200",
            imageAlt: "Pessoa usando moletom preto em estúdio",
            secondaryImage: "https://images.pexels.com/photos/10850112/pexels-photo-10850112.jpeg?auto=compress&cs=tinysrgb&w=1200",
            description: "Volume preciso, acabamento monocromático e sensação pesada. O Static é a peça para quando o básico precisa falar mais alto.",
            details: ["Interior felpado", "Gramatura alta", "Capuz com regulagem", "Etiqueta externa exclusiva"],
            featured: true,
            newest: false
        },
        {
            id: "camiseta-manifesto",
            name: "Camiseta Manifesto",
            category: "Camisetas",
            price: 159.9,
            installments: "12x de R$ 16,44",
            badge: "Drop limitado",
            sizes: ["M", "G", "GG"],
            color: "Preto lavado",
            image: "https://images.pexels.com/photos/29410797/pexels-photo-29410797/free-photo-of-urban-portrait-of-woman-in-black-streetwear.jpeg?auto=compress&cs=tinysrgb&w=1200",
            imageAlt: "Modelo com visual streetwear preto em cenário urbano",
            secondaryImage: "https://images.pexels.com/photos/19786386/pexels-photo-19786386.jpeg?auto=compress&cs=tinysrgb&w=1200",
            description: "Algodão lavado e visual vivido desde o primeiro uso. A estampa manifesto resume a ideia central: sem risco, sem história.",
            details: ["Lavagem estonada", "Modelagem ampla", "Estampa frente e costas", "Produção em lote limitado"],
            featured: false,
            newest: true
        }
    ];

    const state = {
        cart: readCart(),
        activeProduct: null,
        selectedSize: null,
        selectedQuantity: 1
    };

    function readCart() {
        try {
            const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            return Array.isArray(value) ? value : [];
        } catch {
            return [];
        }
    }

    function persistCart() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.cart));
        } catch {
            // A loja continua funcional mesmo quando o armazenamento está bloqueado.
        }
    }

    function money(value) {
        return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
    }

    function escapeHtml(value = "") {
        return String(value).replace(/[&<>'"]/g, (character) => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#039;",
            '"': "&quot;"
        })[character]);
    }

    function productCard(product, options = {}) {
        const compact = options.compact ? " product-card--compact" : "";
        return `
            <article class="product-card${compact} reveal" data-product-card="${product.id}">
                <button class="product-card__media" type="button" data-product-id="${product.id}" aria-label="Ver detalhes de ${escapeHtml(product.name)}">
                    <img src="${product.image}" alt="${escapeHtml(product.imageAlt)}" loading="lazy" width="720" height="900">
                    <span class="product-card__badge">${escapeHtml(product.badge)}</span>
                    <span class="product-card__view"><i class="bi bi-arrows-angle-expand"></i> Ver peça</span>
                </button>
                <div class="product-card__body">
                    <span class="product-card__category">${escapeHtml(product.category)}</span>
                    <button class="product-card__title" type="button" data-product-id="${product.id}">${escapeHtml(product.name)}</button>
                    <div class="product-card__price-row">
                        <strong>${money(product.price)}</strong>
                        <span>${escapeHtml(product.installments)}</span>
                    </div>
                    <button class="button button--line product-card__action" type="button" data-product-id="${product.id}">
                        Escolher tamanho <i class="bi bi-arrow-up-right"></i>
                    </button>
                </div>
            </article>`;
    }

    function renderChrome() {
        const headerTarget = document.querySelector("[data-site-header]");
        const footerTarget = document.querySelector("[data-site-footer]");
        const page = document.body.dataset.page || "";

        if (headerTarget) {
            headerTarget.innerHTML = `
                <div class="announcement" aria-label="Informação de pagamento">
                    <div class="announcement__track">
                        <span>Até 12x no cartão</span><i class="bi bi-asterisk"></i>
                        <span>5% de desconto no Pix</span><i class="bi bi-asterisk"></i>
                        <span>Envios para todo o Brasil</span><i class="bi bi-asterisk"></i>
                        <span>Até 12x no cartão</span><i class="bi bi-asterisk"></i>
                        <span>5% de desconto no Pix</span>
                    </div>
                </div>
                <header class="site-header">
                    <div class="site-header__inner site-shell">
                        <button class="icon-button menu-toggle" type="button" data-menu-toggle aria-label="Abrir menu" aria-expanded="false">
                            <span></span><span></span><span></span>
                        </button>
                        <a class="site-logo" href="./index.html" aria-label="JãoStreat — página inicial">
                            <img src="./assets/Logos/Logos_Grandes_Orig/logo_grande_jaostreat_sem_fundo.png" alt="JãoStreat" width="360" height="103">
                        </a>
                        <nav class="desktop-nav" aria-label="Navegação principal">
                            <a ${page === "home" ? 'class="is-active" aria-current="page"' : ""} href="./index.html">Início</a>
                            <a ${page === "produtos" ? 'class="is-active" aria-current="page"' : ""} href="./produtos.html">Shop</a>
                            <a ${page === "lookbook" ? 'class="is-active" aria-current="page"' : ""} href="./lookbook.html">Lookbook</a>
                            <a ${page === "sobre" ? 'class="is-active" aria-current="page"' : ""} href="./sobre.html">A firma</a>
                        </nav>
                        <div class="site-header__actions">
                            <button class="icon-button" type="button" data-search-toggle aria-label="Pesquisar produtos"><i class="bi bi-search"></i></button>
                            <button class="icon-button cart-button" type="button" data-cart-toggle aria-label="Abrir carrinho">
                                <i class="bi bi-bag"></i><span class="cart-count" data-cart-count>0</span>
                            </button>
                        </div>
                    </div>
                </header>`;
        }

        if (footerTarget) {
            footerTarget.innerHTML = `
                <footer class="site-footer">
                    <div class="site-shell site-footer__grid">
                        <div class="site-footer__brand">
                            <img src="./assets/Logos/Logos_Grandes_Orig/logo_grande_jaostreat_sem_fundo.png" alt="JãoStreat" width="360" height="103">
                            <p>Mais que um nome, uma forma de ocupar espaço. Streetwear independente, feito para quem não pede licença.</p>
                            <div class="social-list" aria-label="Redes sociais">
                                <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                                <a href="#" aria-label="TikTok"><i class="bi bi-tiktok"></i></a>
                                <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                                <a href="#" aria-label="X"><i class="bi bi-twitter-x"></i></a>
                            </div>
                        </div>
                        <div class="site-footer__column">
                            <h2>Navegue</h2>
                            <a href="./produtos.html">Todos os produtos</a>
                            <a href="./lookbook.html">Lookbook</a>
                            <a href="./sobre.html">Sobre a firma</a>
                            <a href="./feedbacks.html">Feedbacks</a>
                        </div>
                        <div class="site-footer__column">
                            <h2>Atendimento</h2>
                            <a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <a href="mailto:contato@jaostreat.com.br">contato@jaostreat.com.br</a>
                            <span>Segunda a sexta, 9h às 18h</span>
                        </div>
                        <form class="newsletter" data-newsletter-form>
                            <h2>Entre no corre</h2>
                            <p>Receba drops, reposições e bastidores antes de todo mundo.</p>
                            <label class="sr-only" for="newsletter-email">Seu e-mail</label>
                            <div class="newsletter__field">
                                <input id="newsletter-email" name="email" type="email" placeholder="Seu melhor e-mail" required>
                                <button type="submit" aria-label="Cadastrar e-mail"><i class="bi bi-arrow-right"></i></button>
                            </div>
                        </form>
                    </div>
                    <div class="site-footer__bottom site-shell">
                        <span>© <span data-current-year></span> JãoStreat.</span>
                        <span>Sem risco. Sem história.</span>
                    </div>
                </footer>`;
        }

        document.body.insertAdjacentHTML("beforeend", `
            <div class="drawer-backdrop" data-drawer-backdrop></div>

            <aside class="menu-drawer" data-menu-drawer aria-hidden="true" aria-label="Menu de navegação">
                <div class="drawer-head">
                    <img src="./assets/Logos/Logos_Grandes_Orig/logo_grande_jaostreat_sem_fundo.png" alt="JãoStreat" width="240" height="69">
                    <button class="icon-button" type="button" data-menu-toggle aria-label="Fechar menu"><i class="bi bi-x-lg"></i></button>
                </div>
                <nav class="menu-drawer__nav">
                    <a href="./index.html"><span><i class="bi bi-house"></i>Início</span><i class="bi bi-arrow-right"></i></a>
                    <a href="./produtos.html"><span><i class="bi bi-bag"></i>Shop</span><i class="bi bi-arrow-right"></i></a>
                    <a href="./lookbook.html"><span><i class="bi bi-journal-richtext"></i>Lookbook</span><i class="bi bi-arrow-right"></i></a>
                    <a href="./sobre.html"><span><i class="bi bi-info-circle"></i>Sobre a firma</span><i class="bi bi-arrow-right"></i></a>
                    <a href="./feedbacks.html"><span><i class="bi bi-chat-square-quote"></i>Feedbacks</span><i class="bi bi-arrow-right"></i></a>
                </nav>
                <p class="menu-drawer__manifesto">Sem risco.<br>Sem história.</p>
            </aside>

            <aside class="cart-drawer" data-cart-drawer aria-hidden="true" aria-label="Carrinho de compras">
                <div class="drawer-head">
                    <div><span class="eyebrow">Seu pedido</span><h2>Carrinho <span data-cart-heading-count>(0)</span></h2></div>
                    <button class="icon-button" type="button" data-cart-toggle aria-label="Fechar carrinho"><i class="bi bi-x-lg"></i></button>
                </div>
                <div class="cart-drawer__content" data-cart-content></div>
            </aside>

            <section class="search-panel" data-search-panel aria-hidden="true" aria-label="Pesquisar produtos">
                <div class="search-panel__inner site-shell">
                    <div class="search-panel__head">
                        <span class="eyebrow">Encontre sua próxima peça</span>
                        <button class="icon-button" type="button" data-search-toggle aria-label="Fechar pesquisa"><i class="bi bi-x-lg"></i></button>
                    </div>
                    <label class="search-field">
                        <i class="bi bi-search"></i>
                        <input type="search" data-search-input placeholder="Digite camiseta, moletom, conjunto..." autocomplete="off">
                    </label>
                    <div class="search-results" data-search-results></div>
                </div>
            </section>

            <section class="product-modal" data-product-modal aria-hidden="true" role="dialog" aria-modal="true" aria-label="Detalhes do produto">
                <div class="product-modal__dialog" data-product-modal-content></div>
            </section>

            <a class="whatsapp-float" href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da JãoStreat e quero tirar uma dúvida.")}" target="_blank" rel="noopener noreferrer" aria-label="Falar com a JãoStreat no WhatsApp">
                <span class="whatsapp-float__label">Fala com a gente</span>
                <span class="whatsapp-float__icon"><i class="bi bi-whatsapp"></i></span>
            </a>

            <div class="toast-message" data-toast role="status" aria-live="polite"></div>
        `);

        document.querySelectorAll("[data-current-year]").forEach((target) => { target.textContent = new Date().getFullYear(); });
    }

    function setOpen(element, shouldOpen) {
        if (!element) return;
        element.classList.toggle("is-open", shouldOpen);
        element.setAttribute("aria-hidden", String(!shouldOpen));
        updateBackdrop();
    }

    function updateBackdrop() {
        const anyDrawerOpen = document.querySelector(".menu-drawer.is-open, .cart-drawer.is-open");
        const anyModalOpen = document.querySelector(".product-modal.is-open, .search-panel.is-open");
        const backdrop = document.querySelector("[data-drawer-backdrop]");
        backdrop?.classList.toggle("is-open", Boolean(anyDrawerOpen));
        document.body.classList.toggle("is-locked", Boolean(anyDrawerOpen || anyModalOpen));
    }

    function closeAll() {
        setOpen(document.querySelector("[data-menu-drawer]"), false);
        setOpen(document.querySelector("[data-cart-drawer]"), false);
        setOpen(document.querySelector("[data-search-panel]"), false);
        setOpen(document.querySelector("[data-product-modal]"), false);
        document.querySelectorAll("[data-menu-toggle]").forEach((button) => button.setAttribute("aria-expanded", "false"));
    }

    function toggleMenu() {
        const drawer = document.querySelector("[data-menu-drawer]");
        const open = !drawer.classList.contains("is-open");
        closeAll();
        setOpen(drawer, open);
        document.querySelectorAll("[data-menu-toggle]").forEach((button) => button.setAttribute("aria-expanded", String(open)));
    }

    function toggleCart(force) {
        const drawer = document.querySelector("[data-cart-drawer]");
        const open = typeof force === "boolean" ? force : !drawer.classList.contains("is-open");
        closeAll();
        if (open) {
            renderCart();
            setOpen(drawer, true);
        }
    }

    function toggleSearch() {
        const panel = document.querySelector("[data-search-panel]");
        const open = !panel.classList.contains("is-open");
        closeAll();
        if (open) {
            setOpen(panel, true);
            const input = panel.querySelector("[data-search-input]");
            renderSearch("");
            window.setTimeout(() => input?.focus(), 120);
        }
    }

    function renderProductModal(productId) {
        const product = products.find((item) => item.id === productId);
        if (!product) return;
        state.activeProduct = product;
        state.selectedSize = null;
        state.selectedQuantity = 1;
        const modal = document.querySelector("[data-product-modal]");
        const content = document.querySelector("[data-product-modal-content]");
        content.innerHTML = `
            <button class="product-modal__close icon-button" type="button" data-product-close aria-label="Fechar detalhes"><i class="bi bi-x-lg"></i></button>
            <div class="product-gallery">
                <div class="product-gallery__main">
                    <img data-product-main-image src="${product.image}" alt="${escapeHtml(product.imageAlt)}" width="900" height="1100">
                </div>
                <div class="product-gallery__thumbs">
                    <button class="is-active" type="button" data-gallery-image="${product.image}" aria-label="Ver foto principal"><img src="${product.image}" alt="" width="120" height="150"></button>
                    <button type="button" data-gallery-image="${product.secondaryImage}" aria-label="Ver segunda foto"><img src="${product.secondaryImage}" alt="" width="120" height="150"></button>
                </div>
            </div>
            <div class="product-detail">
                <span class="product-detail__badge">${escapeHtml(product.badge)}</span>
                <span class="eyebrow">${escapeHtml(product.category)} · ${escapeHtml(product.color)}</span>
                <h2>${escapeHtml(product.name)}</h2>
                <strong class="product-detail__price">${money(product.price)}</strong>
                <span class="product-detail__installments">${escapeHtml(product.installments)} sem juros</span>
                <p>${escapeHtml(product.description)}</p>
                <div class="product-detail__option">
                    <div class="option-title"><span>Escolha o tamanho</span><button type="button" data-size-guide><i class="bi bi-rulers"></i> Guia de medidas</button></div>
                    <div class="size-list" data-size-list>
                        ${product.sizes.map((size) => `<button type="button" data-size="${size}">${size}</button>`).join("")}
                    </div>
                    <span class="field-error" data-size-error></span>
                </div>
                <div class="product-detail__buy-row">
                    <div class="quantity-control" aria-label="Quantidade">
                        <button type="button" data-modal-quantity="decrease" aria-label="Diminuir quantidade">−</button>
                        <span data-modal-quantity-value>1</span>
                        <button type="button" data-modal-quantity="increase" aria-label="Aumentar quantidade">+</button>
                    </div>
                    <button class="button button--light" type="button" data-add-to-cart><i class="bi bi-bag-plus"></i> Adicionar ao carrinho</button>
                </div>
                <ul class="product-detail__features">
                    ${product.details.map((detail) => `<li><i class="bi bi-check2"></i>${escapeHtml(detail)}</li>`).join("")}
                </ul>
                <div class="product-detail__assurance"><span><i class="bi bi-shield-check"></i> Compra segura</span><span><i class="bi bi-arrow-repeat"></i> Troca fácil</span></div>
            </div>`;
        closeAll();
        setOpen(modal, true);
        window.setTimeout(() => content.querySelector("[data-product-close]")?.focus(), 100);
    }

    function addActiveProduct() {
        if (!state.activeProduct) return;
        const error = document.querySelector("[data-size-error]");
        if (!state.selectedSize) {
            if (error) error.textContent = "Selecione um tamanho para continuar.";
            document.querySelector("[data-size-list]")?.classList.add("has-error");
            return;
        }
        const key = `${state.activeProduct.id}::${state.selectedSize}`;
        const existing = state.cart.find((item) => item.key === key);
        if (existing) existing.quantity += state.selectedQuantity;
        else state.cart.push({ key, productId: state.activeProduct.id, size: state.selectedSize, quantity: state.selectedQuantity });
        persistCart();
        updateCartCount();
        showToast(`${state.activeProduct.name} foi para o carrinho.`);
        setOpen(document.querySelector("[data-product-modal]"), false);
        window.setTimeout(() => toggleCart(true), 180);
    }

    function cartSummary() {
        return state.cart.reduce((summary, item) => {
            const product = products.find((entry) => entry.id === item.productId);
            if (product) {
                summary.quantity += item.quantity;
                summary.total += product.price * item.quantity;
            }
            return summary;
        }, { quantity: 0, total: 0 });
    }

    function updateCartCount() {
        const summary = cartSummary();
        document.querySelectorAll("[data-cart-count]").forEach((target) => {
            target.textContent = summary.quantity;
            target.classList.toggle("has-items", summary.quantity > 0);
        });
        document.querySelectorAll("[data-cart-heading-count]").forEach((target) => { target.textContent = `(${summary.quantity})`; });
    }

    function renderCart() {
        const target = document.querySelector("[data-cart-content]");
        if (!target) return;
        const summary = cartSummary();
        updateCartCount();

        if (!state.cart.length) {
            target.innerHTML = `
                <div class="empty-cart">
                    <i class="bi bi-bag"></i>
                    <h3>Seu carrinho está vazio</h3>
                    <p>Escolha uma peça, selecione o tamanho e ela aparece aqui.</p>
                    <a class="button button--light" href="./produtos.html">Explorar o drop</a>
                </div>`;
            return;
        }

        const items = state.cart.map((item) => {
            const product = products.find((entry) => entry.id === item.productId);
            if (!product) return "";
            return `
                <article class="cart-item">
                    <img src="${product.image}" alt="${escapeHtml(product.imageAlt)}" width="160" height="200">
                    <div class="cart-item__info">
                        <div><span class="cart-item__category">${escapeHtml(product.category)}</span><h3>${escapeHtml(product.name)}</h3><span>Tamanho ${escapeHtml(item.size)}</span></div>
                        <strong>${money(product.price * item.quantity)}</strong>
                        <div class="cart-item__actions">
                            <div class="quantity-control quantity-control--small">
                                <button type="button" data-cart-action="decrease" data-cart-key="${item.key}" aria-label="Diminuir ${escapeHtml(product.name)}">−</button>
                                <span>${item.quantity}</span>
                                <button type="button" data-cart-action="increase" data-cart-key="${item.key}" aria-label="Aumentar ${escapeHtml(product.name)}">+</button>
                            </div>
                            <button class="cart-item__remove" type="button" data-cart-action="remove" data-cart-key="${item.key}"><i class="bi bi-trash3"></i> Remover</button>
                        </div>
                    </div>
                </article>`;
        }).join("");

        target.innerHTML = `
            <div class="cart-items">${items}</div>
            <div class="cart-summary">
                <div><span>Subtotal</span><strong>${money(summary.total)}</strong></div>
                <div><span>Frete</span><span>Combinado no WhatsApp</span></div>
                <div class="cart-summary__total"><span>Total</span><strong>${money(summary.total)}</strong></div>
            </div>
            <form class="checkout-form" data-checkout-form novalidate>
                <div class="checkout-form__head"><i class="bi bi-whatsapp"></i><div><h3>Finalizar pelo WhatsApp</h3><p>Preencha seus dados para montarmos a mensagem do pedido.</p></div></div>
                <label>Nome completo<input type="text" name="name" autocomplete="name" placeholder="Como podemos te chamar?" required></label>
                <label>WhatsApp com DDD<input type="tel" name="phone" autocomplete="tel" inputmode="tel" placeholder="(11) 99999-9999" required></label>
                <button class="button button--whatsapp" type="submit"><i class="bi bi-whatsapp"></i> Enviar pedido</button>
                <small><i class="bi bi-lock"></i> Seus dados são usados apenas para este atendimento.</small>
            </form>`;
    }

    function updateCartItem(action, key) {
        const item = state.cart.find((entry) => entry.key === key);
        if (!item) return;
        if (action === "increase") item.quantity += 1;
        if (action === "decrease") item.quantity -= 1;
        if (action === "remove" || item.quantity <= 0) state.cart = state.cart.filter((entry) => entry.key !== key);
        persistCart();
        renderCart();
    }

    function submitCheckout(form) {
        const name = form.elements.name.value.trim();
        const phone = form.elements.phone.value.trim();
        if (!name || phone.replace(/\D/g, "").length < 10) {
            showToast("Confira seu nome e WhatsApp antes de continuar.", true);
            form.classList.add("has-error");
            return;
        }
        const summary = cartSummary();
        const lines = state.cart.map((item) => {
            const product = products.find((entry) => entry.id === item.productId);
            return `• ${item.quantity}x ${product.name} — tamanho ${item.size} — ${money(product.price * item.quantity)}`;
        });
        const message = [
            "Olá, JãoStreat! Quero finalizar meu pedido:",
            "",
            ...lines,
            "",
            `Total: ${money(summary.total)}`,
            `Cliente: ${name}`,
            `WhatsApp: ${phone}`,
            "",
            "Podemos combinar o frete e o pagamento?"
        ].join("\n");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    }

    function renderSearch(query) {
        const target = document.querySelector("[data-search-results]");
        if (!target) return;
        const normalized = query.trim().toLocaleLowerCase("pt-BR");
        const matches = normalized
            ? products.filter((product) => `${product.name} ${product.category} ${product.color}`.toLocaleLowerCase("pt-BR").includes(normalized))
            : products.slice(0, 4);
        target.innerHTML = matches.length
            ? `<div class="search-results__meta">${normalized ? `${matches.length} resultado(s)` : "Peças em destaque"}</div><div class="search-results__grid">${matches.map((product) => productCard(product, { compact: true })).join("")}</div>`
            : `<div class="search-empty"><i class="bi bi-search"></i><p>Nenhuma peça encontrada. Tente outro termo.</p></div>`;
        observeReveals();
    }

    function showToast(message, isError = false) {
        const toast = document.querySelector("[data-toast]");
        if (!toast) return;
        toast.textContent = message;
        toast.classList.toggle("is-error", isError);
        toast.classList.add("is-visible");
        window.clearTimeout(showToast.timeout);
        showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
    }

    function observeReveals() {
        const elements = document.querySelectorAll(".reveal:not(.is-observed)");
        if (!("IntersectionObserver" in window)) {
            elements.forEach((element) => element.classList.add("is-visible"));
            return;
        }
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -30px" });
        elements.forEach((element) => {
            element.classList.add("is-observed");
            observer.observe(element);
        });
    }

    function bindEvents() {
        document.addEventListener("click", (event) => {
            const productTrigger = event.target.closest("[data-product-id]");
            if (productTrigger) {
                renderProductModal(productTrigger.dataset.productId);
                return;
            }
            if (event.target.closest("[data-menu-toggle]")) return toggleMenu();
            if (event.target.closest("[data-cart-toggle]")) return toggleCart();
            if (event.target.closest("[data-search-toggle]")) return toggleSearch();
            if (event.target.closest("[data-drawer-backdrop]")) return closeAll();
            if (event.target.closest("[data-product-close]") || (event.target.matches("[data-product-modal]"))) {
                return setOpen(document.querySelector("[data-product-modal]"), false);
            }
            const sizeButton = event.target.closest("[data-size]");
            if (sizeButton) {
                state.selectedSize = sizeButton.dataset.size;
                document.querySelectorAll("[data-size]").forEach((button) => button.classList.toggle("is-selected", button === sizeButton));
                document.querySelector("[data-size-list]")?.classList.remove("has-error");
                const error = document.querySelector("[data-size-error]");
                if (error) error.textContent = "";
                return;
            }
            const quantityButton = event.target.closest("[data-modal-quantity]");
            if (quantityButton) {
                state.selectedQuantity = quantityButton.dataset.modalQuantity === "increase"
                    ? Math.min(10, state.selectedQuantity + 1)
                    : Math.max(1, state.selectedQuantity - 1);
                const value = document.querySelector("[data-modal-quantity-value]");
                if (value) value.textContent = state.selectedQuantity;
                return;
            }
            if (event.target.closest("[data-add-to-cart]")) return addActiveProduct();
            const galleryButton = event.target.closest("[data-gallery-image]");
            if (galleryButton) {
                const image = document.querySelector("[data-product-main-image]");
                if (image) image.src = galleryButton.dataset.galleryImage;
                document.querySelectorAll("[data-gallery-image]").forEach((button) => button.classList.toggle("is-active", button === galleryButton));
                return;
            }
            const cartAction = event.target.closest("[data-cart-action]");
            if (cartAction) return updateCartItem(cartAction.dataset.cartAction, cartAction.dataset.cartKey);
            if (event.target.closest("[data-size-guide]")) return showToast("Referência: P veste 88–94 cm, M 95–101 cm, G 102–108 cm e GG 109–116 cm de tórax.");
        });

        document.addEventListener("input", (event) => {
            if (event.target.matches("[data-search-input]")) renderSearch(event.target.value);
            if (event.target.name === "phone") {
                const digits = event.target.value.replace(/\D/g, "").slice(0, 11);
                event.target.value = digits.length > 10
                    ? digits.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3")
                    : digits.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
            }
        });

        document.addEventListener("submit", (event) => {
            if (event.target.matches("[data-checkout-form]")) {
                event.preventDefault();
                submitCheckout(event.target);
            }
            if (event.target.matches("[data-newsletter-form]")) {
                event.preventDefault();
                event.target.reset();
                showToast("Cadastro recebido. Você vai saber do próximo drop primeiro.");
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeAll();
        });
    }

    function registerServiceWorker() {
        if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./service-worker.js").catch(() => {});
        });
    }

    renderChrome();
    bindEvents();
    updateCartCount();
    observeReveals();
    registerServiceWorker();

    window.JaoStore = {
        products,
        money,
        productCard,
        observeReveals,
        openProduct: renderProductModal,
        showToast
    };
})();
