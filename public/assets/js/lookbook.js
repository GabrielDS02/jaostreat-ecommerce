document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.querySelector("[data-look-lightbox]");
    const image = document.querySelector("[data-look-lightbox-image]");
    const caption = document.querySelector("[data-look-lightbox-caption]");

    document.querySelectorAll("[data-look-image]").forEach((look) => {
        look.addEventListener("click", () => {
            image.src = look.dataset.lookImage;
            image.alt = look.querySelector("img")?.alt || "Foto do lookbook";
            caption.textContent = look.dataset.lookCaption;
            lightbox.classList.add("is-open");
            lightbox.setAttribute("aria-hidden", "false");
            document.body.classList.add("is-locked");
        });
    });

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-locked");
    }

    document.querySelector("[data-look-close]")?.addEventListener("click", closeLightbox);
    lightbox?.addEventListener("click", (event) => { if (event.target === lightbox) closeLightbox(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape" && lightbox?.classList.contains("is-open")) closeLightbox(); });
});
