/* =========================================
   BIRTHDAY WEBSITE - NADYA 💙
   ========================================= */

// Mengambil elemen HTML
const sky = document.getElementById("sky");

const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
const birthdayMusic = document.getElementById("birthdayMusic");

const letterModal = document.getElementById("letterModal");
const openLetterButton = document.getElementById("openLetter");
const closeLetterButton = document.getElementById("closeLetter");

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");


// =========================================
// 1. ANIMASI BINTANG DAN HATI ✨
// =========================================

function createFloatingElement() {
  if (!sky) return;

  const element = document.createElement("span");
  const isHeart = Math.random() > 0.5;

  element.className = isHeart
    ? "floating-heart"
    : "floating-star";

  element.textContent = isHeart ? "♥" : "✦";

  element.style.left = Math.random() * 100 + "%";
  element.style.animationDuration =
    Math.random() * 5 + 5 + "s";
  element.style.opacity =
    Math.random() * 0.6 + 0.3;
  element.style.fontSize =
    Math.random() * 14 + 10 + "px";

  sky.appendChild(element);

  setTimeout(() => {
    element.remove();
  }, 10000);
}

if (sky) {
  setInterval(createFloatingElement, 400);
}


// =========================================
// 2. MUSIK ASLI DARI FILE MP3 🎵
// =========================================

let musicPlaying = false;

if (musicToggle && musicLabel && birthdayMusic) {
  // Pastikan musik tidak otomatis berjalan
  birthdayMusic.pause();
  birthdayMusic.currentTime = 0;

  musicLabel.textContent = "Putar musik";

  musicToggle.addEventListener("click", async () => {
    if (birthdayMusic.paused) {
      try {
        await birthdayMusic.play();

        musicPlaying = true;
        musicLabel.textContent = "Jeda musik";
      } catch (error) {
        musicPlaying = false;
        musicLabel.textContent = "Gagal memutar musik";

        console.error("MP3 gagal diputar:", error);
        alert(
          "Musik belum bisa diputar. Coba periksa file laguultah.mp3."
        );
      }
    } else {
      birthdayMusic.pause();

      musicPlaying = false;
      musicLabel.textContent = "Putar musik";
    }
  });

  birthdayMusic.addEventListener("play", () => {
    musicPlaying = true;
    musicLabel.textContent = "Jeda musik";
  });

  birthdayMusic.addEventListener("pause", () => {
    musicPlaying = false;
    musicLabel.textContent = "Putar musik";
  });

  birthdayMusic.addEventListener("ended", () => {
    musicPlaying = false;
    musicLabel.textContent = "Putar musik";
  });

  birthdayMusic.addEventListener("error", () => {
    musicPlaying = false;
    musicLabel.textContent = "Musik tidak tersedia";
    console.error(
      "File laguultah.mp3 tidak berhasil dimuat."
    );
  });
}


// =========================================
// 3. SURAT ULANG TAHUN 💌
// =========================================

function openLetter() {
  if (!letterModal) return;

  letterModal.hidden = false;
  letterModal.classList.add("active");
}

function closeLetter() {
  if (!letterModal) return;

  letterModal.classList.remove("active");
  letterModal.hidden = true;
}

if (openLetterButton) {
  openLetterButton.addEventListener("click", openLetter);
}

if (closeLetterButton) {
  closeLetterButton.addEventListener("click", closeLetter);
}

// Tutup surat jika area luar surat diklik
if (letterModal) {
  letterModal.addEventListener("click", (event) => {
    if (
      event.target === letterModal ||
      event.target.closest('[data-close="true"]')
    ) {
      closeLetter();
    }
  });
}

// Tutup surat dengan tombol Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLetter();
  }
});


// =========================================
// 4. TOMBOL KEJUTAN 🎁
// =========================================

let surpriseOpened = false;

if (surpriseButton && surpriseMessage) {
  surpriseMessage.textContent = "";
  surpriseMessage.classList.remove("show");

  surpriseButton.addEventListener("click", () => {
    surpriseOpened = !surpriseOpened;

    if (surpriseOpened) {
      surpriseMessage.textContent =
        "Selamat ulang tahun, Nadya! 💙 Semoga selalu sehat, bahagia, semua impianmu tercapai, dan selalu dikelilingi orang-orang yang sayang sama kamu. Jangan lupa senyum hari ini! 🎂🩵";

      surpriseMessage.classList.add("show");
      surpriseButton.textContent = "Tutup Kejutan 💗";
    } else {
      surpriseMessage.textContent = "";
      surpriseMessage.classList.remove("show");
      surpriseButton.textContent = "Aku siap! ✨";
    }
  });
}

console.log("Birthday website berhasil dimuat! 💙");
