document.addEventListener("DOMContentLoaded", () => {
    const cards = [...document.querySelectorAll("[data-review-category]")];
    const count = document.querySelector("[data-review-count]");
    document.querySelectorAll("[data-review-filter]").forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.dataset.reviewFilter;
            let visible = 0;
            cards.forEach((card) => {
                const show = filter === "all" || card.dataset.reviewCategory === filter;
                card.classList.toggle("is-hidden", !show);
                if (show) visible += 1;
            });
            count.textContent = `${visible} ${visible === 1 ? "avaliação" : "avaliações"} em destaque`;
            document.querySelectorAll("[data-review-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
        });
    });
});
