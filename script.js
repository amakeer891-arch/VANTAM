const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const leadForm = document.querySelector("#leadForm");
const formStatus = document.querySelector(".form-status");

navToggle?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("nav-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
    navToggle?.setAttribute("aria-label", "Open navigation");
  });
});

leadForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(leadForm);
  const name = String(formData.get("name") || "").trim();
  formStatus.textContent = name
    ? `Thank you, ${name}. Your situation is ready to send to VANTAM.`
    : "Thank you. Your situation is ready to send to VANTAM.";
  leadForm.classList.add("submitted");
});
