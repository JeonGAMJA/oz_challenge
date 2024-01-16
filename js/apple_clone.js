const globalNavMenu = document.getElementById("globalnav-menu");
const globalNavMenuTrigger = document.getElementById(
  "globalnav-menutrigger-button"
);

function globalNavWithFlyoutOpen(event) {
  globalNavMenu.style.visibility = visible;
}

globalNavMenuTrigger.addEventListener("click", globalNavWithFlyoutOpen);
