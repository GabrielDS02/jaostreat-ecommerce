document.addEventListener("DOMContentLoaded", () => {
    const store = window.JaoStore;
    if (!store) return;
    const newTarget = document.querySelector("[data-new-products]");
    const newest = store.products.filter((product) => product.newest).slice(0, 4);
    if (newTarget) newTarget.innerHTML = newest.map((product) => store.productCard(product)).join("");

    const bestTarget = document.querySelector("[data-best-sellers]");
    const best = store.products.filter((product) => product.featured);
    if (bestTarget) {
        bestTarget.innerHTML = best.map((_, index) => {
            const set = [best[index], best[(index + 1) % best.length], best[(index + 2) % best.length]];
            return `<div class="carousel-item${index === 0 ? " active" : ""}"><div class="best-carousel__set">${set.map((product) => store.productCard(product)).join("")}</div></div>`;
        }).join("");
    }
    store.observeReveals();
});
