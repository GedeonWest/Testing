// swiper-slider
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4,
  loop: true
});

// // Make all the columns of the same height
window.onload = function() {
  setTimeout(function() {
    let mainDivs = document.getElementsByClassName("column");
    let maxHeight = 0;
    for (let i = 0; i < mainDivs.length; ++i) {
      if (maxHeight < mainDivs[i].clientHeight) {
        maxHeight = mainDivs[i].clientHeight;
      }
    }
    for (let i = 0; i < mainDivs.length; ++i) {
      mainDivs[i].style.height = maxHeight + "px";
    }
  }, 1000);
};
