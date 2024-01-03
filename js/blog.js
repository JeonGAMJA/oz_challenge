let blogNavbar = document.getElementById("blog-navbar");
let navToggleBtn = document.getElementById("blog-navbar-toggle-btn");
let blogNavMenu = document.getElementById("blog-navbar-menubox");
let blogNavBtn = document.getElementById("blog-navbar-home-btn");

function clickToggleBtn(event) {
  blogNavbar.classList.toggle("blog-navbar-close");
  blogNavMenu.classList.toggle("slide-nav-menu");
  blogNavBtn.classList.toggle("slide-nav-btn");
}

navToggleBtn.addEventListener("change", clickToggleBtn);
