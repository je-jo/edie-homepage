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

form.addEventListener('submit', function (event) {
  modal.style.display = "block"
  if (email.validity.valueMissing) {
    modal.textContent = "You need to enter an e-mail address.";
    event.preventDefault();
  }
  else if (email.validity.typeMismatch) {
    modal.textContent = "Entered value needs to be an e-mail address."
    event.preventDefault();
  }
  else {
    modal.style.backgroundColor = "#28af60";
    modal.textContent = "Success!"
  }
});

const form2 = document.getElementById('form-2');
const email2 = document.getElementById('email-2');
const modal2 = document.getElementById('modal-2');

form2.addEventListener('submit', function (event) {
  modal2.style.display = "block"
  if (email2.validity.valueMissing) {
    modal2.textContent = "You need to enter an e-mail address.";
    event.preventDefault();
  }
  else if (email2.validity.typeMismatch) {
    modal2.textContent = "Entered value needs to be an e-mail address."
    event.preventDefault();
  }
  else {
    modal2.style.backgroundColor = "#28af60";
    modal2.textContent = "Success!"
  }
});


window.addEventListener("click", () => {
  modal.style.display = "none";
});