const hamBtn = document.querySelector(".hamburger-btn");
const mobileNav = document.querySelector(".mobile-nav");
const headerMobile = document.querySelector(".header-mobile");
const hamImg = document.querySelector(".ham-img");
const headerLogo = document.querySelector(".header-logo");
const featuresBtn = document.querySelectorAll(".features-btn");
const featuresUnderline = document.querySelectorAll(".button-underline");

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

featuresBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    const parent = e.currentTarget.parentElement.children[1];
    parent.classList.add("show-underline");
    console.log(e.currentTarget.parentElement);
  });
});

/* Q&A */

const qanda = document.querySelectorAll(".q-and-a");

/*qanda.forEach(function (btn) {
  const questionShow = btn.children[0];
  console.log(questionShow);
  questionShow.addEventListener("click", function (e) {
    const questionContainer = e.currentTarget.parentElement;
    questionContainer.classList.toggle("show-text");
  });
});*/

qanda.forEach(function (btn) {
  const questionShow = btn.children[0];

  questionShow.addEventListener("click", function (item) {
    qanda.forEach(function (e) {
      if (e !== btn) {
        e.classList.remove("show-text");
      }
    });
    btn.classList.toggle("show-text");
  });
});
