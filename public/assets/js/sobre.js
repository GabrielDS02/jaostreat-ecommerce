document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll("[data-count]");
    if (!("IntersectionObserver" in window)) {
        counters.forEach((counter) => { counter.textContent = counter.dataset.count; });
        return;
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const target = Number(entry.target.dataset.count);
            const duration = 1100;
            const start = performance.now();
            function tick(now) {
                const progress = Math.min(1, (now - start) / duration);
                entry.target.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));
                if (progress < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
            currentObserver.unobserve(entry.target);
        });
    }, { threshold: .6 });
    counters.forEach((counter) => observer.observe(counter));
});
