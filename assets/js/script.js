// hamburger

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", toggleMenu);

navLink.forEach(n => n.addEventListener("click", hideMenu));

function toggleMenu() {
  if (menu.classList.contains("clicked")) {
    hamburger.setAttribute("aria-expanded", "false");
    menu.classList.remove("clicked");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("clicked");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    hamburger.setAttribute("aria-expanded", "true");
  }
}

function hideMenu() {
  hamburger.setAttribute("aria-expanded", "false");
  menu.classList.remove("clicked");
  closeIcon.style.display = "none";
  menuIcon.style.display = "block";
}

// email validation

const form = document.getElementById('form-1');

const email = document.getElementById('email');
const modal = document.getElementById('modal-1');

email.addEventListener('input', function () {

  if (email.validity.valid) {
    modal.textContent = '';
    modal.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', function (event) {

  if (!email.validity.valid || email.validity.valueMissing) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  modal.style.display = "block"
  if (email.validity.valueMissing) {
    modal.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    modal.textContent = 'Entered value needs to be an e-mail address.';
  }
}

window.addEventListener("click", () => {
  modal.style.display = "none";
});