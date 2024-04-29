function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}


let navlinks = document.querySelectorAll("header nav a");

for (const link of navlinks) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });
  });
}
function openLoginPage() {
  window.location.href = 'login.html'; // Redirects to the login page
}

