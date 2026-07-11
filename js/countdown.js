// Early bird HUD countdown — ends Jul 18, 2026 23:59:59 NPT (UTC+5:45)
const OFFER_END = new Date("2026-07-18T23:59:59+05:45").getTime();

function updateCountdown() {
  const now = Date.now();
  const diff = OFFER_END - now;
  const daysEl = document.getElementById("cd-days");
  const hoursEl = document.getElementById("cd-hours");
  const minsEl = document.getElementById("cd-mins");
  const secsEl = document.getElementById("cd-secs");
  const banner = document.getElementById("countdown-banner");

  if (!daysEl) return;

  if (diff <= 0) {
    if (banner) {
      banner.innerHTML =
        '<span class="offer-label">EARLY_BIRD</span><span class="offer-text mono" style="color:var(--muted)">ENDED — Annual Rs. 20,000/yr · Triennial Rs. 37,000</span>';
    }
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((diff % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minsEl.textContent = String(mins).padStart(2, "0");
  secsEl.textContent = String(secs).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
