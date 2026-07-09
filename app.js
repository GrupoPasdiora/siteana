/* =========================================================
   Chef Ana Santos — Versão Premium — Interações
   ========================================================= */
(function () {
  "use strict";

  // >>> TROQUE AQUI pelo número real (DDI + DDD + número, só dígitos) <<<
  var WHATSAPP_NUMBER = "5569999999999";

  document.addEventListener("DOMContentLoaded", function () {
    setYear();
    setupMenuToggle();
    setupRevealOnScroll();
    setupOccasionCards();
    setupFillButtons();
    setupDishFilters();
    setupBudgetForm();
    syncWhatsappLinks();
  });

  function setYear() {
    var el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* Menu mobile */
  function setupMenuToggle() {
    var toggle = document.querySelector(".menu-toggle");
    var nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Abrir menu");
      });
    });
  }

  /* Animação ao rolar */
  function setupRevealOnScroll() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* Cards de ocasião -> preenchem o select e rolam ao formulário */
  function setupOccasionCards() {
    document.querySelectorAll(".occasion-card").forEach(function (card) {
      var btn = card.querySelector("button");
      if (!btn) return;
      btn.addEventListener("click", function () {
        selectOccasion(card.getAttribute("data-occasion"));
        goToBudget();
      });
    });
  }

  /* Botões com data-fill (ex: feijoada) */
  function setupFillButtons() {
    document.querySelectorAll("[data-fill]").forEach(function (el) {
      el.addEventListener("click", function () {
        selectOccasion(el.getAttribute("data-fill"));
      });
    });
  }

  function selectOccasion(value) {
    if (!value) return;
    var select = document.getElementById("ocasiao");
    if (!select) return;

    var found = Array.prototype.some.call(select.options, function (opt) {
      if (opt.value === value || opt.text === value) {
        opt.selected = true;
        return true;
      }
      return false;
    });

    if (!found) {
      var opt = document.createElement("option");
      opt.text = value;
      opt.value = value;
      opt.selected = true;
      select.add(opt);
    }
  }

  function goToBudget() {
    var target = document.getElementById("orcamento");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* Filtros de cardápio */
  function setupDishFilters() {
    var buttons = document.querySelectorAll(".filter");
    var cards = document.querySelectorAll(".dish-card");
    if (!buttons.length || !cards.length) return;

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        buttons.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");

        var filter = btn.getAttribute("data-filter");
        cards.forEach(function (card) {
          var cats = (card.getAttribute("data-category") || "").split(/\s+/);
          var show = filter === "all" || cats.indexOf(filter) !== -1;
          card.classList.toggle("is-hidden", !show);
        });
      });
    });
  }

  /* Formulário -> mensagem pronta no WhatsApp */
  function setupBudgetForm() {
    var form = document.getElementById("budget-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);

      var linhas = ["Olá! Vi o site da Chef Ana Santos e quero receber uma sugestão. 🍽️", ""];
      pushLine(linhas, "Nome", data.get("nome"));
      pushLine(linhas, "WhatsApp", data.get("whatsapp"));
      pushLine(linhas, "Data desejada", formatDate(data.get("data")));
      pushLine(linhas, "Pessoas (aprox.)", data.get("pessoas"));
      pushLine(linhas, "Ocasião", data.get("ocasiao"));
      pushLine(linhas, "Mensagem", data.get("mensagem"));

      var url = "https://wa.me/" + WHATSAPP_NUMBER +
        "?text=" + encodeURIComponent(linhas.join("\n"));
      window.open(url, "_blank", "noopener");
    });
  }

  /* Mantém todos os links wa.me com o número configurado acima */
  function syncWhatsappLinks() {
    document.querySelectorAll('a[href*="wa.me/"]').forEach(function (a) {
      a.href = a.href.replace(/wa\.me\/\d+/, "wa.me/" + WHATSAPP_NUMBER);
    });
  }

  function pushLine(arr, label, value) {
    if (value && String(value).trim() !== "") {
      arr.push("*" + label + ":* " + value);
    }
  }

  function formatDate(value) {
    if (!value) return "";
    var parts = value.split("-"); // yyyy-mm-dd
    if (parts.length === 3) return parts[2] + "/" + parts[1] + "/" + parts[0];
    return value;
  }
})();
