document.addEventListener("DOMContentLoaded", () => {
  // ===== HAMBURGER (radi na svim stranicama) =====
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // ===== AKO NISMO NA GALERIJI, GOTOVO =====
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  // ===== GALERIJA (Agradisslike1..43, preskoči 18) =====
  for (let i = 1; i <= 43; i++) {
    if (i === 18) continue;

    const btn = document.createElement("button");
    btn.type = "button";

    const img = document.createElement("img");
    img.alt = "";
    img.className = "w-full h-60 object-cover rounded-xl shadow";

    const jpeg = `./Agradisslike/Agradisslike${i}.jpeg`;
    const png  = `./Agradisslike/Agradisslike${i}.PNG`;

    img.src = jpeg;

    img.onerror = () => {
      if (img.src.endsWith(".jpeg")) {
        img.src = png;
      } else {
        btn.remove();
      }
    };

    btn.appendChild(img);
    grid.appendChild(btn);
  }

  // ===== LOGO (zadnji) =====
  {
    const btn = document.createElement("button");
    btn.type = "button";

    const img = document.createElement("img");
    img.alt = "";
    img.className = "w-full h-60 object-cover rounded-xl shadow";

    const jpeg = "./Agradisslike/agradispxxl.jpeg";
    const png  = "./Agradisslike/agradispxxl.PNG";

    img.src = jpeg;
    img.onerror = () => {
      img.src = png;
      img.onerror = () => btn.remove();
    };

    btn.appendChild(img);
    grid.appendChild(btn);
  }

  // ===== LIGHTBOX =====
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  const lbClose = document.getElementById("lbClose");

  const open = (src) => {
    if (!lightbox || !lbImg) return;
    lbImg.src = src;
    lightbox.classList.remove("hidden");
  };

  const close = () => {
    if (!lightbox || !lbImg) return;
    lightbox.classList.add("hidden");
    lbImg.src = "";
  };

  grid.addEventListener("click", (e) => {
    const img = e.target.closest("img");
    if (!img?.src) return;
    open(img.src);
  });

  lbClose?.addEventListener("click", close);
  lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
});