// Fix menu icon toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

// ✅ Make toggleMoreInfo globally available
window.toggleMoreInfo = function () {
  const moreInfo = document.getElementById("more-info");
  if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
    moreInfo.style.display = "block";
  } else {
    moreInfo.style.display = "none";
  }
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('stickly', window.scrollY > 100);

  // Remove toggle icon and navbar
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

// Scroll reveal animations
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


document.addEventListener("DOMContentLoaded", function () {
  const readMoreBtn = document.getElementById("read-more-btn");
  const moreInfo = document.getElementById("more-info");

  readMoreBtn.addEventListener("click", () => {
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
      moreInfo.style.display = "block";
      readMoreBtn.textContent = "Show Less";
    } else {
      moreInfo.style.display = "none";
      readMoreBtn.textContent = "Read More";
    }
  });
});
