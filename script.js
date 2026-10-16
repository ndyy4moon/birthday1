/* ========================================
   BIRTHDAY WEBSITE - SCRIPT.JS
   ======================================== */

// Mengambil elemen dari HTML
const sky = document.getElementById("sky");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const birthdayMusic = document.getElementById("birthdayMusic");

const letterModal = document.getElementById("letterModal");

// ========================================
// 1. ANIMASI BINTANG DAN HATI
// ========================================

function createFloatingElement() {
  if (!sky) return;

  const element = document.createElement("span");
  const isHeart = Math.random() > 0.5;

  element.className = isHeart ? "floating-heart" : "floating-star";
  element.textContent = isHeart ? "♥" : "✦";

  element.style.left = Math.random() * 100 + "%";
  element.style.animationDuration =
    Math.random() * 5 + 5 + "s";
  element.style.opacity = Math.random() * 0.6 + 0.3;
  element.style.fontSize =
    Math.random() * 14 + 10 + "px";

  sky.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 10000);
}

setInterval(createFloatingElement, 400);


// ========================================
// 2. MUSIK ULANG TAHUN DARI FILE MP3
// ========================================

let musicPlaying = false;

if (musicToggle && birthdayMusic && musicLabel) {
  musicToggle.addEventListener("click", async () => {
    try {
      if (!musicPlaying) {
        await birthdayMusic.play();

        musicPlaying = true;
        musicLabel.textContent = "Jeda musik";
      } else {
        birthdayMusic.pause();

        musicPlaying = false;
        musicLabel.textContent = "Putar musik";
      }
    } catch (error) {
      musicLabel.textContent = "Musik gagal diputar";
      console.error("Musik gagal diputar:", error);
    }
  });

  birthdayMusic.addEventListener("ended", () => {
    musicPlaying = false;
    musicLabel.textContent = "Putar musik";
  });

  birthdayMusic.addEventListener("pause", () => {
    if (musicPlaying && birthdayMusic.ended) {
      musicPlaying = false;
      musicLabel.textContent = "Putar musik";
    }
  });
}


// ========================================
// 3. MODAL SURAT ULANG TAHUN
// ========================================

function openLetter() {
  if (letterModal) {
    letterModal.classList.add("active");
    letterModal.style.display = "flex";
  }
}

function closeLetter() {
  if (letterModal) {
    letterModal.classList.remove("active");
    letterModal.style.display = "none";
  }
}

// Tombol untuk membuka surat
const openLetterButton = document.getElementById("openLetter");

if (openLetterButton) {
  openLetterButton.addEventListener("click", openLetter);
}

// Tombol untuk menutup surat
const closeLetterButton = document.getElementById("closeLetter");

if (closeLetterButton) {
  closeLetterButton.addEventListener("click", closeLetter);
}

// Menutup surat saat area luar diklik
if (letterModal) {
  letterModal.addEventListener("click", (event) => {
    if (event.target === letterModal) {
      closeLetter();
    }
  });
}

// Menutup surat dengan tombol Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLetter();
  }
});


// ========================================
// 4. TOMBOL KEJUTAN
// ========================================

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

if (surpriseButton && surpriseMessage) {
  surpriseButton.addEventListener("click", () => {
    surpriseMessage.classList.toggle("show");

    if (surpriseMessage.classList.contains("show")) {
      surpriseButton.textContent = "Tutup Kejutan 💗";
    } else {
      surpriseButton.textContent = "Buka Kejutan 🎁";
    }
  });
}
