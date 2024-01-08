let blogNavbar = document.getElementById("blog-navbar");
let navToggleBtn = document.getElementById("blog-navbar-toggle-btn");
let blogNavMenu = document.getElementById("blog-navbar-menubox");
let blogNavBtn = document.getElementById("blog-navbar-home-btn");

function clickToggleBtn(event) {
  navBarBtnClassCheck(event);
  if(blogNavbar.classList.contains("blog-navbar-close")){
    blogNavbar.classList.replace("blog-navbar-close","blog-navbar-on");
    blogNavMenu.classList.replace("slide-down-menu","slide-on-menu");
    blogNavBtn.classList.replace("slide-down-nav-btn","slide-on-nav-btn");
  }else if(blogNavbar.classList.contains("blog-navbar-on")){
    blogNavbar.classList.replace("blog-navbar-on","blog-navbar-close");
    blogNavMenu.classList.replace("slide-on-nav-menu","slide-down-nav-btn");
    blogNavBtn.classList.replace("slide-on-nav-btn","slide-down-nav-btn");
  }
}

function navBarBtnClassCheck(event) {
  if(blogNavMenu.classList.contains("slide-down-menu") == false) {
    blogNavMenu.classList.add("slide-down-menu")
  }
}

navToggleBtn.addEventListener("change", clickToggleBtn);
