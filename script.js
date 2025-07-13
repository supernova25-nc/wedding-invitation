// Ambil parameter nama tamu dari URL (?to=NamaTamu)
const params = new URLSearchParams(window.location.search);
const namaTamu = params.get("to");

if (namaTamu) {
  document.getElementById("inviteeName").textContent = `Untuk: ${decodeURIComponent(namaTamu)}`;
}

// Countdown menuju 4 Desember 2025 pukul 09.00 WIB
const targetDate = new Date("2025-12-04T09:00:00+07:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownElement.textContent = "Acara telah dimulai!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.textContent =
    `Menuju Hari Bahagia: ${days}h ${hours}j ${minutes}m ${seconds}d`;
}

setInterval(updateCountdown, 1000);
