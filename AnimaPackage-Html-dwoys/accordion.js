document.addEventListener("DOMContentLoaded", () => {
  const items = [...document.querySelectorAll(
    ".desktop-EN-home .capability, .desktop-EN .capability-4"
  )];

  const setOpen = (item, open) => {
    const header = item.querySelector(".capability-header, .capability-header-2");
    const details = item.querySelector(".capability-expanded, .capability-expanded-2");
    item.classList.toggle("is-open", open);
    header.setAttribute("aria-expanded", String(open));
    details.setAttribute("aria-hidden", String(!open));
  };

  items.forEach((item, index) => {
    const header = item.querySelector(".capability-header, .capability-header-2");
    const details = item.querySelector(".capability-expanded, .capability-expanded-2");
    const name = item.querySelector(".capability-name, .capability-name-2");

    details.id = `capability-details-${index + 1}`;
    header.setAttribute("role", "button");
    header.setAttribute("tabindex", "0");
    header.setAttribute("aria-label", name.textContent.trim());
    header.setAttribute("aria-controls", details.id);
    setOpen(item, false);

    header.addEventListener("click", () => setOpen(item, !item.classList.contains("is-open")));
    header.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        setOpen(item, !item.classList.contains("is-open"));
      }
    });
  });

  window.addEventListener("scroll", () => {
    items.forEach((item) => setOpen(item, false));
  }, { passive: true });
});