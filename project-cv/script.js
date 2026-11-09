const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const mobileLinks = document.querySelectorAll(".mobile-link");

function toggleMenu() {
  const isOpen = mobileMenu.classList.contains("translate-x-0");

  if (isOpen) {
    // Tutup Menu
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");
    menuIcon.innerText = "menu";
    document.body.style.overflow = "auto"; // Aktifkan scroll kembali
  } else {
    // Buka Menu
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");
    menuIcon.innerText = "close";
    document.body.style.overflow = "hidden"; // Matikan scroll saat menu buka
  }
}

menuBtn.addEventListener("click", toggleMenu);

// Tutup menu otomatis saat link diklik
mobileLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// Intro screen: open on click, then start AOS so the hero animates in view
const intro = document.getElementById("intro");
document.getElementById("openBtn").addEventListener("click", () => {
  intro.classList.add("opening");
  document.body.classList.remove("overflow-hidden");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  setTimeout(() => intro.remove(), reduced ? 50 : 1300);
  setTimeout(
    () =>
      AOS.init({
        duration: 1000, // durasi animasi (ms)
        once: true, // animasi hanya berjalan sekali saat di-scroll
        offset: 100, // jarak munculnya animasi dari viewport
      }),
    reduced ? 0 : 500,
  );
});

const downloadBtn = document.getElementById("downloadBtn");

downloadBtn.addEventListener("click", () => {
  // Jalankan proses unduh
  const fileUrl = "assets/CV_Saeful_Anwar.pdf";
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "CV_Saeful_Anwar.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Tambahkan feedback ke user (Opsional)
  alert("Terima kasih! File CV sedang diunduh.");
});
