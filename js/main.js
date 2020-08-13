const btnBurger = document.querySelector("#btnBurger");
const headerMenu = document.querySelector(".header__menu");
btnBurger.addEventListener("click", function () {
  btnBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.querySelector("body").classList.toggle("lock");
});

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
