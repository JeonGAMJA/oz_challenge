const profile = document.getElementById("profile");
const profileCloseBtn = document.getElementById("profile-close-btn");
const profileBackground = document.getElementById("profile-background");
const profileBtn = document.getElementById("blog-navbar-profile");

function ClickCloseProfileBtn(event) {

  profile.classList.replace("on-profile", "off-profile");
  profileBackground.classList.replace("visible", "hidden");
}
function ClickCloseProfileBackground(event) {
  if (event.currentTarget === profileBackground) {
    profile.classList.replace("on-profile", "off-profile");
    profileBackground.classList.replace("visible", "hidden");
  }
}

function onProfile(event) {
  if (profile.classList.contains("off-profile")) {
    profile.classList.replace("off-profile", "on-profile");
    profileBackground.classList.replace("hidden", "visible");
  }
}

function checkProfileClass(event) {
  if (profile.classList.contains("on-profile") == false) {
    profile.classList.add("on-profile");
    profileBackground.classList.add("visible");
  }
}

profileBtn.addEventListener("click", onProfile);
profileBtn.addEventListener("click", checkProfileClass);
profileCloseBtn.addEventListener("click", ClickCloseProfileBtn);
profileBackground.addEventListener("mousedown",ClickCloseProfileBackground)
