(() => {
  const menuToggle = document.getElementById("menuToggle");
  const primaryNav = document.getElementById("primaryNav");

  if (menuToggle && primaryNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = primaryNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    primaryNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        primaryNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
      });
    });
  }

  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const search = document.getElementById("toolSearch");
  const cards = Array.from(document.querySelectorAll(".tool-card"));
  const empty = document.getElementById("searchEmpty");

  if (search && cards.length) {
    search.addEventListener("input", () => {
      const query = search.value.trim().toLowerCase();
      let visibleCount = 0;
      cards.forEach((card) => {
        const searchable = `${card.dataset.search || ""} ${card.textContent}`.toLowerCase();
        const matches = searchable.includes(query);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });
      if (empty) empty.hidden = visibleCount !== 0;
      document.querySelectorAll(".tool-group-title").forEach((heading) => {
        const next = heading.nextElementSibling;
        if (next && next.classList.contains("tool-grid")) {
          const hasVisible = Array.from(next.querySelectorAll(".tool-card")).some((card) => !card.hidden);
          heading.hidden = query.length > 0 && !hasVisible;
        }
      });
    });
  }
})();
