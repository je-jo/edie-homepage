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

const forms = [...document.getElementsByClassName("form")];
const modals = [...document.getElementsByClassName("modal")];

 forms.forEach((el) => {
  el.addEventListener('submit', (event) => {
    el.querySelector(".modal").style.display = "block";
    if (el.querySelector("input").validity.valueMissing) {
     el.querySelector(".modal").textContent = "You need to enter an email address"
      event.preventDefault();
    } else if (el.querySelector("input").validity.typeMismatch){
      el.querySelector(".modal").textContent = "Entered value needs to be an e-mail address."
      event.preventDefault();
     }
     else {
      el.querySelector(".modal").style.backgroundColor = "#28af60";
      el.querySelector(".modal").textContent = "Success!"
     }
   });
 });

 modals.forEach((el) => {
   window.addEventListener ("click", () => {
    if (el.style.display = "block") {
      el.style.display = "none"
    }
   });
 });