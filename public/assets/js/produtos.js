document.addEventListener("DOMContentLoaded", () => {
    const store = window.JaoStore;
    if (!store) return;

    const state = { category: "Todos", sort: "featured" };
    const grid = document.querySelector("[data-catalog-grid]");
    const empty = document.querySelector("[data-catalog-empty]");
    const count = document.querySelector("[data-product-count]");

    function render() {
        let list = state.category === "Todos" ? [...store.products] : store.products.filter((product) => product.category === state.category);
        if (state.sort === "newest") list.sort((a, b) => Number(b.newest) - Number(a.newest));
        if (state.sort === "low") list.sort((a, b) => a.price - b.price);
        if (state.sort === "high") list.sort((a, b) => b.price - a.price);
        if (state.sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
        if (state.sort === "featured") list.sort((a, b) => Number(b.featured) - Number(a.featured));

        grid.innerHTML = list.map((product) => store.productCard(product)).join("");
        count.textContent = `${list.length} ${list.length === 1 ? "peça" : "peças"}`;
        empty.hidden = list.length > 0;
        store.observeReveals();
    }

    document.querySelectorAll("[data-filter]").forEach((button) => {
        button.addEventListener("click", () => {
            state.category = button.dataset.filter;
            document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
            render();
        });
    });

    document.querySelector("[data-sort]")?.addEventListener("change", (event) => {
        state.sort = event.target.value;
        render();
    });

    document.querySelector("[data-reset-filter]")?.addEventListener("click", () => {
        state.category = "Todos";
        document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("is-active", button.dataset.filter === "Todos"));
        render();
    });

    render();
});
