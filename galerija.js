document.addEventListener("DOMContentLoaded", () => {
  const lb = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");

  document.querySelectorAll("[data-full]").forEach(btn => {
    btn.addEventListener("click", () => {
      const fullSrc = btn.getAttribute("data-full");
      lbImg.src = fullSrc;
      lb.classList.add("open");
    });
  });

  function closeLightbox() {
    lb.classList.remove("open");
    lbImg.src = "";
  }

  lbClose.addEventListener("click", closeLightbox);

  lb.addEventListener("click", (e) => {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });
});