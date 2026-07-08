/* SS ELEKTRİK — etkileşimler */
(function () {
  "use strict";

  // Mobil menü aç/kapa
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  // Scroll ile ortaya çıkma animasyonu
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  // İletişim formu (demo — gerçek gönderim için backend/e-posta servisi bağlanmalı)
  var form = document.querySelector("#iletisim-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = form.querySelector(".form-ok");
      if (ok) ok.style.display = "block";
      form.reset();
    });
  }

  // Google Ads — telefon arama dönüşüm takibi
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "conversion", {
          send_to: "AW-16931988333/2dC3CN6Wmc0cEO3G5ok_",
          value: 1.0,
          currency: "TRY"
        });
      }
    });
  });

  // Yıl
  var y = document.querySelector("#year");
  if (y) y.textContent = new Date().getFullYear();
})();
