document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".hamburger");
  const menu = document.querySelector("ul.menu"); // pega o UL do menu principal

  if (btn && menu) {
    // estado inicial: se estiver escondido por CSS, garante escondido também inline
    const hide = () => { menu.style.display = "none"; };
    const show = () => {
      menu.style.display = "flex";     // força exibir
      menu.style.flexDirection = "column"; // empilha links no mobile
      menu.style.alignItems = "flex-start";
      menu.style.gap = menu.style.gap || "12px";
      menu.classList.add("is-open");   // mantém compatibilidade com seu CSS
    };

    // começa fechado em telas pequenas
    hide();

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!isOpen));
      if (isOpen) hide(); else show();
    });
  }

  // Submenu "Projetos"
  const dropdown = document.querySelector(".dropdown");
  if (dropdown) {
    const trigger = dropdown.querySelector("a");
    const submenu = dropdown.querySelector(".submenu");
    if (trigger && submenu) {
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");
      submenu.hidden = true;

      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const open = trigger.getAttribute("aria-expanded") === "true";
        trigger.setAttribute("aria-expanded", String(!open));
        submenu.hidden = open;
      });
    }
  }
});
