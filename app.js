const hamBtn = document.querySelector(".hamburger-btn");
const mobileNav = document.querySelector(".mobile-nav");
const headerMobile = document.querySelector(".header-mobile");
const hamImg = document.querySelector(".ham-img");
const headerLogo = document.querySelector(".header-logo");

hamBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("show-navbar");
  headerMobile.classList.toggle("header-index");
  hamImg.src = "/images/icon-close.svg";
  changeImage();
});

function changeImage() {
  if (mobileNav.classList.contains("show-navbar")) {
    hamImg.src = "/images/icon-close.svg";
    headerLogo.src = "/images/logo-bookmark-white.svg";
  } else {
    hamImg.src = "/images/icon-hamburger.svg";
    headerLogo.src = "/images/logo-bookmark.svg";
  }
}
