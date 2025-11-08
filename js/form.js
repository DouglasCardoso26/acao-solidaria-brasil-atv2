document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-cadastro");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      alert("Por favor, preencha todos os campos obrigatórios corretamente.");
      return;
    }

    const sucesso = document.createElement("div");
    sucesso.textContent = "✅ Cadastro enviado com sucesso! Obrigado por participar.";
    sucesso.style.background = "#e0ffe0";
    sucesso.style.border = "1px solid #00a000";
    sucesso.style.padding = "12px";
    sucesso.style.marginTop = "12px";
    sucesso.style.borderRadius = "8px";
    sucesso.style.textAlign = "center";
    sucesso.style.fontWeight = "600";

    form.appendChild(sucesso);
    form.reset();

    setTimeout(() => sucesso.remove(), 4000);
  });
});