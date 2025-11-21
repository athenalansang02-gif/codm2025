// Toggle mission brief on Home page
const toggleBtn = document.getElementById("toggleBtn");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.getElementById("missionBrief").classList.toggle("hidden");
  });
}

// Dynamic greeting on Home page
const heroHeading = document.querySelector(".hero h2");
if (heroHeading) {
  const hours = new Date().getHours();
  let greeting = hours < 12 ? "Good morning, soldier!" 
                : hours < 18 ? "Good afternoon, soldier!" 
                : "Good evening, soldier!";
  heroHeading.insertAdjacentHTML("afterend", `<p>${greeting}</p>`);
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name && email && message) {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "lightgreen";
      contactForm.reset();
    } else {
      formMessage.textContent = "Please fill in all fields.";
      formMessage.style.color = "red";
    }
  });
}
