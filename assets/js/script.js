// hamburger

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");
const closeIcon= document.querySelector(".close-icon");
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

function hideMenu () {
    hamburger.setAttribute("aria-expanded", "false");
    menu.classList.remove("clicked");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
}

// email validation